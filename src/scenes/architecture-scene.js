import * as THREE from 'three';
import { layerColors, lerpHexColor, brand } from '../util/colors.js';
import {
  clearGroup,
  makeTextSprite,
  setupLights,
  addGroundGrid,
  makeFatLine,
  makeBezierLine,
  makeFrustumLink,
} from '../util/three-helpers.js';

/**
 * ArchitectureScene
 * --------------------------------------------------------------------
 * Renders an NN, CNN or Transformer as a row of FACE-TO-FACE slabs
 * (not the older diagonal stack). The camera looks straight down the
 * row so each slab presents its full front face — matching the
 * conventional textbook diagram (Image 6 in the user's references).
 *
 * Between consecutive slabs we draw a translucent FRUSTUM connector
 * with a small bright kernel-window highlight on the previous layer's
 * face — this answers user request #2: "make a realistic link in
 * which you can select the area being reduced by kernel".
 *
 * For CNN architectures we append a FLATTEN slab between the last
 * spatial layer and the first dense layer (request #8).
 *
 * All styling comes from a StyleManager passed at construction. When
 * the user toggles "use bezier curves" / "show arrowheads" / etc. the
 * scene is restyled in place without rebuilding everything.
 *
 * Layer object shape: { name, type, w, h, d, params? }
 * Mode-specific behaviour is dispatched on `this.opts.mode`.
 */
export class ArchitectureScene {
  constructor({ style }) {
    this.style = style;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#06060f', 30, 120);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 300);
    this.camera.position.set(0, 4, 28);

    this.lights = setupLights(this.scene);
    this.grid = addGroundGrid(this.scene, 80, 40, -4);

    this.layerGroup = new THREE.Group();
    this.scene.add(this.layerGroup);

    this.connGroup = new THREE.Group();
    this.scene.add(this.connGroup);

    this.particleGroup = new THREE.Group();
    this.scene.add(this.particleGroup);

    this.particles = [];
    this._spin = 0;
    this._layers = [];

    this.opts = {
      mode: 'cnn',
      depthScale: 1.0,
    };

    this._lineResolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
      this._lineResolution.set(window.innerWidth, window.innerHeight);
      this.connGroup.children.forEach((c) => {
        if (c.material?.resolution) c.material.resolution.copy(this._lineResolution);
      });
    });

    // Re-render style-driven attributes whenever the style manager fires.
    this._unsub = style.subscribe(() => {
      // Settings that affect geometry: rebuild. Settings that just affect
      // colors / opacity / labels: restyle. Keep cheap settings cheap.
      this._restyle();
    });
  }

  setOptions(partial) {
    Object.assign(this.opts, partial);
    if ('depthScale' in partial || 'mode' in partial) {
      this.build(this._layers);
    }
  }

  build(layers) {
    this._layers = layers || [];
    clearGroup(this.layerGroup);
    clearGroup(this.connGroup);
    clearGroup(this.particleGroup);
    this.particles = [];

    if (!this._layers.length) return;

    // For CNN mode, optionally splice in a synthetic Flatten layer just
    // before the first dense layer. Flatten reads as a tall-thin column.
    let displayLayers = this._layers;
    if (this.opts.mode === 'cnn' && this.style.get('showFlattenLayer')) {
      displayLayers = this._withFlattenLayer(this._layers);
    }
    this._displayLayers = displayLayers;

    if (this.opts.mode === 'nn') {
      this._buildNN(displayLayers);
    } else {
      this._buildBlocks(displayLayers);
    }
  }

  /**
   * Insert a virtual "Flatten" layer between the last spatial layer
   * (conv/pool/norm) and the first dense layer. Pure visualization —
   * not added to the user's actual layer list.
   */
  _withFlattenLayer(layers) {
    const denseIdx = layers.findIndex((l) => l.type === 'dense');
    if (denseIdx <= 0) return layers;
    // Don't double-insert if user already has a flatten-typed layer.
    const before = layers[denseIdx - 1];
    if (before.type === 'flatten') return layers;
    const flatten = {
      name: 'Flatten',
      type: 'flatten',
      // Tall, thin slab — the iconic "vector" shape.
      w: 0.8, h: Math.max(before.h, 3.6), d: 0.5,
      params: { units: (before.params?.h || 1) * (before.params?.w || 1) * (before.params?.c || 1) || 0 },
    };
    return [...layers.slice(0, denseIdx), flatten, ...layers.slice(denseIdx)];
  }

  /* ----------------------------------------------------------------
   * NN MODE — neurons (spheres) in vertical columns, edges between.
   * Now fully driven by StyleManager: node diameter, colors, edge
   * width/opacity by weight, optional bezier curves, bias units.
   * ---------------------------------------------------------------- */
  _buildNN(layers) {
    const s = this.style.state;
    const spacing = s.layerSpacing;
    const direction = s.direction;
    const N = layers.length;
    const startAxis = -((N - 1) * spacing) / 2;
    const layerOrigins = [];

    layers.forEach((layer, lIdx) => {
      const color = layerColors[layer.type] || '#94a3b8';
      const baseNeuronCount = Math.max(1, Math.min(64, layer.params?.neurons ?? 6));
      const showBias = s.showBiasUnits && layer.type !== 'output';
      const neuronCount = baseNeuronCount + (showBias ? 1 : 0);

      // Layer position along its primary axis
      const axisVal = startAxis + lIdx * spacing;
      // Arrange neurons in a vertical column (this matches the user's
      // request that layers should look face-to-face: each layer is a
      // column, the camera looks across the row of columns).
      const cellSize = 0.55;
      const totalH = (neuronCount - 1) * cellSize;

      const positions = [];
      const sphereGeo = new THREE.SphereGeometry(s.nodeDiameter / 2, 22, 16);

      const nodeBaseColor = new THREE.Color(s.nodeColor);
      const layerTint = new THREE.Color(color);

      const layerContainer = new THREE.Group();
      if (direction === 'horizontal') {
        layerContainer.position.set(axisVal, 0, 0);
      } else {
        layerContainer.position.set(0, -axisVal, 0);
      }
      this.layerGroup.add(layerContainer);

      for (let i = 0; i < neuronCount; i++) {
        const isBias = showBias && i === neuronCount - 1;
        const py = totalH / 2 - i * cellSize;

        const tint = isBias ? new THREE.Color('#fbbf24') : layerTint.clone().lerp(nodeBaseColor, 0.5);
        const mat = new THREE.MeshPhysicalMaterial({
          color: tint,
          emissive: tint,
          emissiveIntensity: 0.5,
          metalness: 0.2,
          roughness: 0.28,
          clearcoat: 0.7,
          wireframe: s.nodeStyle === 'empty',
        });
        const sphere = new THREE.Mesh(sphereGeo, mat);
        sphere.position.set(0, py, 0);
        sphere.userData.baseY = py;
        sphere.userData.phase = (lIdx + i) * 0.4;
        sphere.userData.isBias = isBias;
        layerContainer.add(sphere);

        // Border ring (thin shell)
        const ringMat = new THREE.MeshBasicMaterial({
          color: s.nodeBorderColor,
          transparent: true,
          opacity: 0.65,
          wireframe: true,
        });
        const ring = new THREE.Mesh(
          new THREE.SphereGeometry(s.nodeDiameter / 2 * 1.06, 16, 12),
          ringMat,
        );
        sphere.add(ring);

        positions.push(layerContainer.position.clone().add(new THREE.Vector3(0, py, 0)));
      }

      // Layer label
      if (s.showLayerLabels) {
        const label = makeTextSprite(layer.name, { fontSize: s.fontSize, color: '#e8ecf5' });
        label.position.set(0, totalH / 2 + 0.95, 0);
        layerContainer.add(label);
      }

      layerOrigins.push(positions);
    });

    // Edges between consecutive layers — width/opacity/color by simulated weight
    for (let i = 0; i < layerOrigins.length - 1; i++) {
      const from = layerOrigins[i];
      const to = layerOrigins[i + 1];
      // Cap edge density per source for performance.
      const maxPerFrom = Math.min(to.length, 14);
      from.forEach((a, fi) => {
        for (let k = 0; k < maxPerFrom; k++) {
          const tj = (fi * 7 + k * 5) % to.length;
          const b = to[tj];
          // Synthesize a "weight" in [-1, 1] from indices for demo purposes.
          const w = Math.sin(i * 1.7 + fi * 0.6 + k * 1.3);
          this._addStyledEdge(a, b, w);
        }
      });
      // Particles for visual rhythm
      const partColor = layerColors[this._displayLayers[i + 1].type] || '#a78bfa';
      for (let k = 0; k < Math.min(5, from.length); k++) {
        const a = from[k];
        const b = to[(k * 3) % to.length];
        this._addParticle(a, b, partColor);
      }
    }

    this._frame(N);
  }

  _addStyledEdge(a, b, weight) {
    const s = this.style.state;
    // Width
    const width = s.edgeWidthByWeight
      ? Math.max(0.4, s.edgeWidth * (0.4 + Math.abs(weight) * 1.4))
      : s.edgeWidth;
    // Opacity
    const opacity = s.edgeOpacityByWeight
      ? Math.max(0.05, Math.min(1, s.edgeOpacity * (0.3 + Math.abs(weight)) ))
      : s.edgeOpacity;
    // Color
    let color;
    if (s.edgeColorByWeight) {
      // Map weight in [-1, 1] -> negative..positive color via |w|
      const t = Math.min(1, Math.abs(weight));
      color = weight >= 0
        ? lerpHexColor(s.defaultEdgeColor, s.positiveEdgeColor, t)
        : lerpHexColor(s.defaultEdgeColor, s.negativeEdgeColor, t);
    } else {
      color = s.defaultEdgeColor;
    }

    const line = s.useBezierCurves
      ? makeBezierLine({ from: a, to: b, color, width, opacity, resolution: this._lineResolution, bend: 0.18 })
      : makeFatLine({ points: [a, b], color, width, opacity, resolution: this._lineResolution });
    line.userData.kind = 'edge';
    line.userData.weight = weight;
    this.connGroup.add(line);

    if (s.showArrowheads) {
      const dir = new THREE.Vector3().subVectors(b, a).normalize();
      const head = new THREE.Mesh(
        new THREE.ConeGeometry(0.06, 0.18, 10),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity }),
      );
      const tip = new THREE.Vector3().copy(b).addScaledVector(dir, -0.1);
      head.position.copy(tip);
      head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      head.userData.kind = 'arrowhead';
      head.userData.weight = weight;
      this.connGroup.add(head);
    }
  }

  /* ----------------------------------------------------------------
   * BLOCK MODE — CNN / Transformer / mixed: face-to-face slabs.
   * Slabs are oriented so their large face points at the camera.
   * Between consecutive slabs we draw a frustum link with a kernel
   * highlight on the source face.
   * ---------------------------------------------------------------- */
  _buildBlocks(layers) {
    const s = this.style.state;
    const spacing = s.layerSpacing;
    const direction = s.direction;
    const N = layers.length;
    const startAxis = -((N - 1) * spacing) / 2;
    const segs = [];

    layers.forEach((layer, idx) => {
      const baseColor = layerColors[layer.type] || '#94a3b8';
      // Optional log-depth scaling (request #7 third list)
      let depth = (layer.d || 0.6) * this.opts.depthScale;
      if (s.logFeatureMapDepthScaling) depth = Math.log2(1 + depth) * 0.9;
      depth *= 0.3 + 0.07 * s.depthSizeScaling;

      // Width/height — also support optional log scaling for "feature-map width"
      let lw = layer.w;
      let lh = layer.h;
      if (s.logFeatureMapWidthScaling) {
        lw = Math.log2(1 + lw * 4) * 1.2;
        lh = Math.log2(1 + lh * 4) * 1.2;
      }
      lw *= 0.4 + 0.06 * s.widthSizeScaling;
      lh *= 0.4 + 0.06 * s.widthSizeScaling;

      // Sqrt vector length style for vector-shaped layers (flatten / dense)
      if (s.sqrtVectorLengthScaling && (layer.type === 'flatten' || layer.type === 'dense')) {
        lh = Math.sqrt(lh) * 1.6 * s.lengthSizeScaling;
      } else if (layer.type === 'flatten' || layer.type === 'dense') {
        lh = lh * s.lengthSizeScaling;
      }

      // Layer position — for CNN use a diagonal cascade (X + Z) so each
      // feature-map face is clearly visible in perspective (face-to-face view).
      let x = 0, y = 0, z = 0;
      if (this.opts.mode === 'cnn') {
        x = startAxis + idx * spacing;
        z = -(idx * spacing * 0.58);
      } else if (direction === 'horizontal') {
        x = startAxis + idx * spacing;
      } else {
        y = -(startAxis + idx * spacing);
      }

      const group = new THREE.Group();
      group.position.set(x, y, z);
      group.userData.idx = idx;
      // No more -0.32 rotation: slabs face camera, like Image 6.
      group.rotation.y = 0;
      this.layerGroup.add(group);

      const col3 = new THREE.Color(baseColor);

      // ---- Conv-specific filter stack (request #7 second list) ----
      // For conv layers, render a stack of thin filter slabs behind one
      // another along the layer's depth axis; each filter inherits a
      // gradient between convColor1 and convColor2 (the user's
      // "Color 1 / Color 2" controls).
      let convStackBuilt = false;
      if (layer.type === 'conv' && layer.params) {
        const filters = Math.min(24, Math.max(1, layer.params.filters || 1));
        const filterSpacing = s.spacingBetweenFilters;
        const filterDepth = Math.max(0.04, depth / filters);
        const stackDepth = filters * (filterDepth + filterSpacing) - filterSpacing;
        // Move so center of stack is at z=0
        const startZ = -stackDepth / 2;

        for (let f = 0; f < filters; f++) {
          const t = filters > 1 ? f / (filters - 1) : 0.5;
          const filterColor = lerpHexColor(s.convColor1, s.convColor2, t);
          const fc = new THREE.Color(filterColor);
          const fGeo = new THREE.BoxGeometry(lw, lh, filterDepth);
          const fMat = new THREE.MeshPhysicalMaterial({
            color: fc,
            emissive: fc,
            emissiveIntensity: 0.18,
            roughness: 0.18,
            metalness: 0.05,
            clearcoat: 0.85,
            transmission: 0.18,
            thickness: filterDepth,
            ior: 1.4,
            transparent: true,
            opacity: s.filterOpacity,
            wireframe: s.wireframe,
          });
          const fMesh = new THREE.Mesh(fGeo, fMat);
          fMesh.position.z = startZ + f * (filterDepth + filterSpacing) + filterDepth / 2;
          group.add(fMesh);

          if (s.borderWidth > 0) {
            const fEdges = new THREE.LineSegments(
              new THREE.EdgesGeometry(fGeo),
              new THREE.LineBasicMaterial({
                color: fc,
                transparent: true,
                opacity: 0.45 + 0.4 * (s.borderWidth / 3),
              }),
            );
            fEdges.position.copy(fMesh.position);
            group.add(fEdges);
          }
        }
        // Pretend the "core" is the full bounding box for label/connector purposes.
        convStackBuilt = true;
        group.userData.frontZ = startZ + stackDepth;
        group.userData.backZ = startZ;
      }

      if (!convStackBuilt) {
        // Single translucent slab for non-conv layers.
        const coreGeo = new THREE.BoxGeometry(lw, lh, depth);
        const coreMat = new THREE.MeshPhysicalMaterial({
          color: col3,
          emissive: col3,
          emissiveIntensity: 0.16,
          roughness: 0.15,
          metalness: 0.05,
          clearcoat: 0.95,
          clearcoatRoughness: 0.08,
          transmission: 0.3,
          thickness: depth,
          ior: 1.4,
          transparent: true,
          opacity: s.tensorOpacity,
          wireframe: s.wireframe,
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        group.add(core);
        group.userData.coreMat = coreMat;

        if (s.borderWidth > 0) {
          const edges = new THREE.LineSegments(
            new THREE.EdgesGeometry(coreGeo),
            new THREE.LineBasicMaterial({
              color: col3,
              transparent: true,
              opacity: 0.6 + 0.3 * (s.borderWidth / 3),
            }),
          );
          group.add(edges);
        }

        // Inner translucent slices for "tensor stack" depth illusion.
        const sliceCount = 4;
        for (let si = 1; si <= sliceCount; si++) {
          const sz = -depth / 2 + (si / (sliceCount + 1)) * depth;
          const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(lw * 0.96, lh * 0.96),
            new THREE.MeshBasicMaterial({
              color: col3,
              transparent: true,
              opacity: 0.04 + (si / sliceCount) * 0.05,
              side: THREE.DoubleSide,
              depthWrite: false,
            }),
          );
          plane.position.z = sz;
          group.add(plane);
        }

        group.userData.frontZ = depth / 2;
        group.userData.backZ = -depth / 2;
      }

      // Layer label
      if (s.showLayerLabels) {
        const labelText = layer.type === 'flatten'
          ? `${layer.name}${layer.params?.units ? `  (${layer.params.units})` : ''}`
          : layer.name;
        const label = makeTextSprite(labelText, { fontSize: s.fontSize, color: '#e8ecf5' });
        label.position.set(0, lh / 2 + 0.7, 0);
        group.add(label);
      }

      // Tensor dimension label below the slab
      if (s.showTensorDimensions) {
        const dimText = this._dimDescriptor(layer);
        if (dimText) {
          const dim = makeTextSprite(dimText, { fontSize: 22, color: '#aeb6c8' });
          dim.position.set(0, -lh / 2 - 0.55, 0);
          group.add(dim);
        }
      }

      const center = group.position.clone();
      segs.push({
        center,
        front: center.clone().add(new THREE.Vector3(0, 0, group.userData.frontZ)),
        back: center.clone().add(new THREE.Vector3(0, 0, group.userData.backZ)),
        size: { w: lw, h: lh },
        color: col3,
        type: layer.type,
        layer,
      });
    });

    // ---- Frustum links between consecutive slabs ----
    if (this.style.get('showFrustumLinks') || this.style.get('showArrowheads')) {
      for (let i = 0; i < segs.length - 1; i++) {
        const a = segs[i];
        const b = segs[i + 1];

        // Build the kernel highlight size on the FROM face based on
        // either the explicit conv kernel or a heuristic for the size
        // ratio between successive slabs.
        let highlightSize = null;
        const params = b.layer.params || {};
        if (b.type === 'conv' || b.type === 'pool') {
          const k = +params.k || 3;
          // Map kernel cells to world units using the from-face size.
          // Assume input size is in params.h (cnn) or just scale heuristically.
          const inputSize = +(a.layer.params?.h || a.layer.params?.w) || 8;
          const cellW = a.size.w / Math.max(1, inputSize);
          const cellH = a.size.h / Math.max(1, inputSize);
          highlightSize = { w: Math.min(a.size.w * 0.9, cellW * k), h: Math.min(a.size.h * 0.9, cellH * k) };
        } else if (b.type === 'flatten' || b.type === 'dense' || b.type === 'output') {
          // Whole face being read.
          highlightSize = { w: a.size.w * 0.7, h: a.size.h * 0.7 };
        } else {
          highlightSize = { w: a.size.w * 0.5, h: a.size.h * 0.5 };
        }

        if (this.style.get('showFrustumLinks')) {
          const link = makeFrustumLink({
            fromCenter: a.front,
            fromSize: a.size,
            toCenter: b.back,
            toSize: b.size,
            color: brand.accent,
            opacity: 0.14,
            highlightSize,
          });
          link.userData.kind = 'frustum';
          this.connGroup.add(link);
        }

        if (this.style.get('showArrowheads')) {
          const dir = new THREE.Vector3().subVectors(b.back, a.front).normalize();
          const head = new THREE.Mesh(
            new THREE.ConeGeometry(0.13, 0.32, 12),
            new THREE.MeshBasicMaterial({ color: brand.accent, transparent: true, opacity: 0.85 }),
          );
          // Position halfway between but biased toward target.
          const mid = new THREE.Vector3().lerpVectors(a.front, b.back, 0.78);
          head.position.copy(mid);
          head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
          head.userData.kind = 'arrowhead';
          this.connGroup.add(head);
        }

        // Subtle particle trail
        this._addParticle(a.front, b.back, brand.accent2);
      }
    }

    this._frame(N);
  }

  /**
   * Human-readable tensor dimension string for the dim sprite.
   */
  _dimDescriptor(layer) {
    const p = layer.params || {};
    if (layer.type === 'input') {
      if (p.h && p.w) return `${p.h}×${p.w}${p.c ? `×${p.c}` : ''}`;
      if (p.neurons) return `${p.neurons}`;
    }
    if (layer.type === 'conv') {
      const f = p.filters ?? '?';
      return `k=${p.k || 3}  s=${p.s || 1}  f=${f}`;
    }
    if (layer.type === 'pool') return `k=${p.k || 2}  s=${p.s || 2}`;
    if (layer.type === 'flatten') return `${p.units || ''} units`;
    if (layer.type === 'dense') return `${p.units || p.neurons || ''} units`;
    if (layer.type === 'output') return p.classes ? `${p.classes} classes` : '';
    if (layer.type === 'attention') return p.heads ? `${p.heads} heads` : '';
    if (layer.type === 'token') return p.dModel ? `dModel=${p.dModel}` : '';
    if (layer.type === 'ffn') return p.hidden ? `hidden=${p.hidden}` : '';
    return '';
  }

  _addParticle(from, to, color, t0 = Math.random()) {
    const geo = new THREE.SphereGeometry(0.07, 10, 8);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.lerpVectors(from, to, t0);
    this.particleGroup.add(mesh);
    this.particles.push({
      mesh,
      from: from.clone(),
      to: to.clone(),
      t: t0,
      speed: 0.25 + Math.random() * 0.2,
    });
  }

  _frame(layerCount) {
    const dist = Math.max(20, 14 + layerCount * 1.8);
    if (this.opts.mode === 'cnn') {
      // Elevated front-left angle: see the cascade of feature-map faces
      const spacing = this.style.state.layerSpacing;
      const midZ = -((layerCount - 1) * spacing * 0.29);
      this.camera.position.set(-dist * 0.05, 7, midZ + dist * 0.92);
      this.camera.lookAt(0, 1, midZ);
    } else if (this.style.get('direction') === 'vertical') {
      this.camera.position.set(0, 0, dist);
      this.camera.lookAt(0, 0, 0);
    } else {
      this.camera.position.set(dist * 0.18, 4, dist);
      this.camera.lookAt(0, 0, 0);
    }
  }

  /**
   * Re-style without rebuilding geometry — used for cheap settings like
   * "show layer labels", "edge color", etc. For settings that require
   * geometric changes we rebuild instead.
   */
  _restyle() {
    if (!this._layers.length) return;
    // Most settings affect geometry; just rebuild. Cheap because the
    // layer count is small.
    this.build(this._layers);
  }

  update(dt, t) {
    const ps = this.style.get('pulseSpeed') ?? 1.1;

    this.layerGroup.children.forEach((g) => {
      if (g.userData.coreMat) {
        g.userData.coreMat.emissiveIntensity =
          0.1 + (Math.sin(t * ps + g.userData.idx) + 1) * 0.06;
      }

      g.children.forEach((c) => {
        if (c.userData.phase !== undefined) {
          c.position.y =
            c.userData.baseY + Math.sin(t * 1.6 + c.userData.phase) * 0.06;
        }
      });
    });

    for (const p of this.particles) {
      p.t += p.speed * dt;
      if (p.t > 1) p.t -= 1;
      p.mesh.position.lerpVectors(p.from, p.to, p.t);
      p.mesh.position.y += Math.sin(p.t * Math.PI) * 0.08;
      const fade = Math.min(p.t * 6, 1) * Math.min((1 - p.t) * 6, 1);
      p.mesh.material.opacity = 0.85 * fade;
    }

    if (this.style.get('autoOrbit')) {
      this._spin += dt * 0.18;
      const r = Math.max(20, 14 + this._layers.length * 1.8);
      const spacing = this.style.state.layerSpacing;
      const midZ = this.opts.mode === 'cnn'
        ? -((this._layers.length - 1) * spacing * 0.29) : 0;
      this.camera.position.x = Math.sin(this._spin) * r * 0.35;
      this.camera.position.z = midZ + Math.cos(this._spin) * r;
      this.camera.position.y = 4 + Math.sin(this._spin * 0.7) * 1.5;
      this.camera.lookAt(0, 0, midZ);
    }
  }

  onActivate() {}
  onDeactivate() {}
}
