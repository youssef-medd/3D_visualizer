import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * GradientDescentScene
 *
 * Full ML-pipeline scene showing how gradient descent connects all
 * three major architecture types in a single chain:
 *
 *   [Mini NN]  ←—  Loss Surface (3 optimizers)  —→  [Mini CNN]
 *
 * Animated gradient arrows flow BACKWARDS (right → left) through the
 * chain, visualising backpropagation. The loss surface stays at centre
 * with SGD / Momentum / Adam dots running on it. On the left a small
 * fully-connected network pulses; on the right a mini CNN (conv+pool
 * boxes) pulses. Labels and connecting arches tie everything together.
 *
 * Controls:
 *   - learningRate, animate, speed  (same as before)
 *   - showNumbers: show/hide loss values on surface and optimizer labels
 */
export class GradientDescentScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#06070d', 40, 130);

    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 260);
    this.camera.position.set(0, 16, 36);
    this.camera.lookAt(0, 0, 0);

    setupLights(this.scene);
    addGroundGrid(this.scene, 100, 50, -5);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.opts = {
      learningRate: 0.05,
      animate: true,
      speed: 1.0,
      gridRes: 80,
      gridSize: 14,
      showNumbers: true,
    };

    this._gradArrows = [];
    this._gradArrowT = [];
    this._gradT = 0;

    this._build();
  }

  setOptions(partial) {
    const needsRebuild = 'gridRes' in partial || 'gridSize' in partial;
    Object.assign(this.opts, partial);
    if (needsRebuild) this._buildSurface();
    if ('learningRate' in partial) this._resetOptimizers();
    if ('showNumbers' in partial) this._applyNumberVisibility();
  }

  // ------------------------------------------------------------------ loss

  _loss(x, z) {
    return (
      0.6 * (Math.sin(x * 0.6) + Math.cos(z * 0.6)) +
      0.04 * (x * x + z * z) +
      0.5 * Math.sin(x * 0.35) * Math.cos(z * 0.4)
    );
  }

  _grad(x, z) {
    const eps = 0.001;
    const dx = (this._loss(x + eps, z) - this._loss(x - eps, z)) / (2 * eps);
    const dz = (this._loss(x, z + eps) - this._loss(x, z - eps)) / (2 * eps);
    return [dx, dz];
  }

  // ------------------------------------------------------------------ build

  _build() {
    clearGroup(this.root);
    this._gradArrows = [];
    this._gradArrowT = [];
    this._lossNumbers = [];

    this._buildSurface();
    this._buildOptimizers();
    this._buildMiniNN();
    this._buildMiniCNN();
    this._buildChainConnectors();
    this._buildPipelineLabel();
  }

  // ------------------------------------------------------------------ loss surface

  _buildSurface() {
    if (this.surfaceMesh) {
      this.root.remove(this.surfaceMesh);
      this.root.remove(this.wireMesh);
      this.surfaceMesh.geometry.dispose(); this.surfaceMesh.material.dispose();
      this.wireMesh.geometry.dispose();    this.wireMesh.material.dispose();
    }

    const { gridRes, gridSize } = this.opts;
    const geo = new THREE.PlaneGeometry(gridSize, gridSize, gridRes, gridRes);
    geo.rotateX(-Math.PI / 2);

    const positions = geo.attributes.position;
    const colors = new Float32Array(positions.count * 3);
    const colCold = new THREE.Color('#0e7490');
    const colMid  = new THREE.Color('#a78bfa');
    const colHot  = new THREE.Color('#f472b6');

    let yMin = Infinity, yMax = -Infinity;
    for (let i = 0; i < positions.count; i++) {
      const y = this._loss(positions.getX(i), positions.getZ(i));
      positions.setY(i, y);
      yMin = Math.min(yMin, y); yMax = Math.max(yMax, y);
    }
    for (let i = 0; i < positions.count; i++) {
      const t = (positions.getY(i) - yMin) / (yMax - yMin || 1);
      const c = new THREE.Color();
      if (t < 0.5) c.copy(colCold).lerp(colMid, t * 2);
      else         c.copy(colMid).lerp(colHot, (t - 0.5) * 2);
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    const mat = new THREE.MeshPhysicalMaterial({
      vertexColors: true, roughness: 0.55, metalness: 0.1,
      clearcoat: 0.4, transparent: true, opacity: 0.85, side: THREE.DoubleSide,
    });
    this.surfaceMesh = new THREE.Mesh(geo, mat);
    this.surfaceMesh.position.y = -1;
    this.root.add(this.surfaceMesh);

    const wireGeo = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({ color: '#a78bfa', transparent: true, opacity: 0.10 });
    this.wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    this.wireMesh.position.y = -1 + 0.005;
    this.root.add(this.wireMesh);

    const surfLabel = makeTextSprite('Loss  L(θ)', { fontSize: 26 });
    surfLabel.position.set(0, 4.2, -gridSize / 2 - 0.5);
    this.root.add(surfLabel);
  }

  // ------------------------------------------------------------------ optimizers

  _buildOptimizers() {
    if (this.optimizerMarkers) {
      this.optimizerMarkers.forEach(m => this.root.remove(m.marker));
      this.optimizerTrails.forEach(t => { this.root.remove(t.line); t.line.geometry.dispose(); t.line.material.dispose(); });
    }
    this.optimizerMarkers = [];
    this.optimizerTrails  = [];

    const startX = -5, startZ = -5;
    const optimizers = [
      { name: 'SGD',      color: '#38bdf8', kind: 'sgd' },
      { name: 'Momentum', color: '#fbbf24', kind: 'momentum' },
      { name: 'Adam',     color: '#34d399', kind: 'adam' },
    ];

    optimizers.forEach((opt, idx) => {
      const geo = new THREE.SphereGeometry(0.28, 18, 14);
      const mat = new THREE.MeshPhysicalMaterial({
        color: opt.color, emissive: opt.color, emissiveIntensity: 1.0,
        metalness: 0.3, roughness: 0.2, clearcoat: 0.9,
      });
      const m = new THREE.Mesh(geo, mat);
      const offsetX = (idx - 1) * 0.5;
      const x = startX + offsetX, z = startZ + offsetX;
      m.position.set(x, this._loss(x, z) - 1 + 0.35, z);
      this.root.add(m);

      const label = makeTextSprite(opt.name, { fontSize: 22, color: opt.color });
      label.position.set(0, 0.7, 0);
      label.visible = this.opts.showNumbers;
      m.add(label);
      m.userData.nameLabel = label;

      const maxPoints = 400;
      const trailGeo = new THREE.BufferGeometry();
      const pos = new Float32Array(maxPoints * 3);
      trailGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      trailGeo.setDrawRange(0, 0);
      const trailMat = new THREE.LineBasicMaterial({ color: opt.color, transparent: true, opacity: 0.85 });
      const trailLine = new THREE.Line(trailGeo, trailMat);
      this.root.add(trailLine);

      this.optimizerMarkers.push({ marker: m, x, z, vx: 0, vz: 0, mx: 0, mz: 0, vAx: 0, vAz: 0, step: 0, kind: opt.kind, color: opt.color, name: opt.name, active: true });
      this.optimizerTrails.push({ line: trailLine, points: [], maxPoints });
    });
  }

  _resetOptimizers() {
    if (!this.optimizerMarkers) return;
    const startX = -5, startZ = -5;
    this.optimizerMarkers.forEach((opt, idx) => {
      const offsetX = (idx - 1) * 0.5;
      opt.x = startX + offsetX; opt.z = startZ + offsetX;
      opt.vx = 0; opt.vz = 0; opt.mx = 0; opt.mz = 0;
      opt.vAx = 0; opt.vAz = 0; opt.step = 0; opt.active = true;
    });
    this.optimizerTrails.forEach(t => { t.points = []; t.line.geometry.setDrawRange(0, 0); });
  }

  _stepOptimizer(opt) {
    const lr = this.opts.learningRate;
    const [gx, gz] = this._grad(opt.x, opt.z);
    if (opt.kind === 'sgd') {
      opt.x -= lr * gx; opt.z -= lr * gz;
    } else if (opt.kind === 'momentum') {
      const beta = 0.9;
      opt.vx = beta * opt.vx + gx; opt.vz = beta * opt.vz + gz;
      opt.x -= lr * opt.vx; opt.z -= lr * opt.vz;
    } else if (opt.kind === 'adam') {
      const b1 = 0.9, b2 = 0.999, eps = 1e-8;
      opt.step += 1;
      opt.mx = b1 * opt.mx + (1 - b1) * gx; opt.mz = b1 * opt.mz + (1 - b1) * gz;
      opt.vAx = b2 * opt.vAx + (1 - b2) * gx * gx; opt.vAz = b2 * opt.vAz + (1 - b2) * gz * gz;
      const mxh = opt.mx / (1 - Math.pow(b1, opt.step));
      const mzh = opt.mz / (1 - Math.pow(b1, opt.step));
      const vxh = opt.vAx / (1 - Math.pow(b2, opt.step));
      const vzh = opt.vAz / (1 - Math.pow(b2, opt.step));
      opt.x -= (lr * 4) * mxh / (Math.sqrt(vxh) + eps);
      opt.z -= (lr * 4) * mzh / (Math.sqrt(vzh) + eps);
    }
    const half = this.opts.gridSize / 2 - 0.4;
    opt.x = Math.max(-half, Math.min(half, opt.x));
    opt.z = Math.max(-half, Math.min(half, opt.z));
  }

  // ------------------------------------------------------------------ mini NN

  _buildMiniNN() {
    if (this.nnGroup) { this.root.remove(this.nnGroup); }
    const g = new THREE.Group();
    g.position.set(-18, 0, 0);
    this.root.add(g);
    this.nnGroup = g;

    const LAYERS = [3, 4, 4, 2];
    const spacing = 2.5;
    const nodeR   = 0.35;
    const startX  = -((LAYERS.length - 1) * spacing) / 2;
    this._nnNodes  = [];
    this._nnEdges  = [];

    LAYERS.forEach((count, li) => {
      const x = startX + li * spacing;
      const rowNodes = [];
      for (let ni = 0; ni < count; ni++) {
        const y = (ni - (count - 1) / 2) * 1.2;
        const hue = 200 + li * 35;
        const geo = new THREE.SphereGeometry(nodeR, 20, 16);
        const mat = new THREE.MeshPhysicalMaterial({
          color: `hsl(${hue},70%,55%)`,
          emissive: `hsl(${hue},70%,35%)`,
          emissiveIntensity: 0.5,
          metalness: 0.2,
          roughness: 0.3,
          clearcoat: 0.8,
        });
        const sphere = new THREE.Mesh(geo, mat);
        sphere.position.set(x, y, 0);
        sphere.userData.phase = li * 0.7 + ni * 0.3;
        g.add(sphere);
        rowNodes.push(sphere);
      }
      this._nnNodes.push(rowNodes);
    });

    // Edges
    for (let li = 0; li < LAYERS.length - 1; li++) {
      const rowA = this._nnNodes[li], rowB = this._nnNodes[li + 1];
      rowA.forEach(nA => {
        rowB.forEach(nB => {
          const points = [nA.position.clone(), nB.position.clone()];
          const geo2 = new THREE.BufferGeometry().setFromPoints(points);
          const mat2 = new THREE.LineBasicMaterial({ color: '#a78bfa', transparent: true, opacity: 0.22 });
          const line = new THREE.Line(geo2, mat2);
          g.add(line);
          this._nnEdges.push({ line, nA, nB, mat: mat2, phase: Math.random() * Math.PI * 2 });
        });
      });
    }

    // Labels
    const nnTitle = makeTextSprite('Neural Net', { fontSize: 26, color: '#c4b5fd' });
    nnTitle.position.set(0, 3.4, 0);
    g.add(nnTitle);

    const nnSub = makeTextSprite('W, b  →  ∇L  →  θ update', { fontSize: 18, color: '#7c6fa0' });
    nnSub.position.set(0, -3.2, 0);
    nnSub.visible = this.opts.showNumbers;
    this._nnSubLabel = nnSub;
    g.add(nnSub);
  }

  // ------------------------------------------------------------------ mini CNN

  _buildMiniCNN() {
    if (this.cnnGroup) { this.root.remove(this.cnnGroup); }
    const g = new THREE.Group();
    g.position.set(18, 0, 0);
    this.root.add(g);
    this.cnnGroup = g;

    // Represent CNN as stacked feature-map slabs
    const layers = [
      { w: 2.4, h: 2.4, d: 0.5, color: '#ec4899', label: 'Input' },
      { w: 2.0, h: 2.0, d: 1.0, color: '#a78bfa', label: 'Conv' },
      { w: 1.4, h: 1.4, d: 1.4, color: '#22d3ee', label: 'Pool' },
      { w: 1.0, h: 1.0, d: 0.9, color: '#34d399', label: 'Conv' },
      { w: 0.4, h: 3.2, d: 0.4, color: '#fbbf24', label: 'FC' },
    ];

    const spacing = 2.8;
    const startX = -((layers.length - 1) * spacing) / 2;
    this._cnnSlabs = [];

    layers.forEach((l, idx) => {
      const x = startX + idx * spacing;
      const geo = new THREE.BoxGeometry(l.w, l.h, l.d);
      const mat = new THREE.MeshPhysicalMaterial({
        color: l.color, emissive: l.color, emissiveIntensity: 0.35,
        transparent: true, opacity: 0.72, roughness: 0.3, metalness: 0.1,
        clearcoat: 0.6,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, 0, 0);
      mesh.userData.baseEmissive = 0.35;
      mesh.userData.phase = idx * 0.5;
      g.add(mesh);

      // Edge outline
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: l.color, transparent: true, opacity: 0.55 }),
      );
      edges.position.copy(mesh.position);
      g.add(edges);

      this._cnnSlabs.push(mesh);

      // Connecting line to next slab
      if (idx < layers.length - 1) {
        const nextX = startX + (idx + 1) * spacing;
        const pts = [new THREE.Vector3(x + l.w / 2, 0, 0), new THREE.Vector3(nextX - layers[idx + 1].w / 2, 0, 0)];
        const lg = new THREE.BufferGeometry().setFromPoints(pts);
        const lm = new THREE.LineBasicMaterial({ color: '#4b5563', transparent: true, opacity: 0.5 });
        g.add(new THREE.Line(lg, lm));
      }

      // Layer label
      const lbl = makeTextSprite(l.label, { fontSize: 20, color: l.color });
      lbl.position.set(x, -l.h / 2 - 0.7, 0);
      lbl.scale.multiplyScalar(0.85);
      g.add(lbl);
    });

    const cnnTitle = makeTextSprite('CNN', { fontSize: 26, color: '#f9a8d4' });
    cnnTitle.position.set(0, 3.4, 0);
    g.add(cnnTitle);

    const cnnSub = makeTextSprite('Conv → Pool → FC  →  ∇L', { fontSize: 18, color: '#7c6fa0' });
    cnnSub.position.set(0, -3.2, 0);
    cnnSub.visible = this.opts.showNumbers;
    this._cnnSubLabel = cnnSub;
    g.add(cnnSub);
  }

  // ------------------------------------------------------------------ chain connectors

  _buildChainConnectors() {
    // Two arched lines: NN → Loss and Loss → CNN, with animated gradient dots
    const archPairs = [
      { from: new THREE.Vector3(-11, 1, 0), to: new THREE.Vector3(-7.5, 1, 0), color: '#a78bfa' },
      { from: new THREE.Vector3(7.5, 1, 0),  to: new THREE.Vector3(11, 1, 0),  color: '#f472b6' },
    ];

    this._chainDots = [];

    archPairs.forEach((pair, pi) => {
      // Static arch
      const mid = new THREE.Vector3().lerpVectors(pair.from, pair.to, 0.5);
      mid.y += 2.5;
      const curve = new THREE.QuadraticBezierCurve3(pair.from, mid, pair.to);
      const pts = curve.getPoints(40);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: pair.color, transparent: true, opacity: 0.35 });
      this.root.add(new THREE.Line(geo, mat));

      // Animated dot on the arch — travels FROM loss surface backward to NN/CNN
      const dotGeo = new THREE.SphereGeometry(0.18, 14, 10);
      const dotMat = new THREE.MeshPhysicalMaterial({
        color: pair.color, emissive: pair.color, emissiveIntensity: 1.4,
        metalness: 0.1, roughness: 0.1,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      this.root.add(dot);
      // Animate dot from "to" → "from" (backprop direction)
      this._chainDots.push({ curve, dot, t: pi * 0.5 % 1, dir: -1 /* backward = gradient flow */ });
    });

    // Arrow labels
    const bpLabel1 = makeTextSprite('∇ backprop', { fontSize: 20, color: '#a78bfa' });
    bpLabel1.position.set(-9.5, 4.2, 0);
    bpLabel1.scale.multiplyScalar(0.9);
    bpLabel1.visible = this.opts.showNumbers;
    this._bpLabel1 = bpLabel1;
    this.root.add(bpLabel1);

    const bpLabel2 = makeTextSprite('∇ backprop', { fontSize: 20, color: '#f472b6' });
    bpLabel2.position.set(9.5, 4.2, 0);
    bpLabel2.scale.multiplyScalar(0.9);
    bpLabel2.visible = this.opts.showNumbers;
    this._bpLabel2 = bpLabel2;
    this.root.add(bpLabel2);
  }

  // ------------------------------------------------------------------ pipeline label

  _buildPipelineLabel() {
    const label = makeTextSprite('Training Pipeline: NN ←—— Loss Surface ——→ CNN', { fontSize: 24 });
    label.position.set(0, 7.5, 0);
    this.root.add(label);
  }

  // ------------------------------------------------------------------ number visibility

  _applyNumberVisibility() {
    const show = this.opts.showNumbers;
    // Optimizer name labels
    this.optimizerMarkers?.forEach(opt => {
      if (opt.marker.userData.nameLabel) opt.marker.userData.nameLabel.visible = show;
    });
    if (this._nnSubLabel) this._nnSubLabel.visible = show;
    if (this._cnnSubLabel) this._cnnSubLabel.visible = show;
    if (this._bpLabel1) this._bpLabel1.visible = show;
    if (this._bpLabel2) this._bpLabel2.visible = show;
  }

  // ------------------------------------------------------------------ update

  update(dt, t) {
    if (!this.opts.animate) return;

    // --- Optimizer stepping ---
    if (this.optimizerMarkers) {
      this._stepTimer = (this._stepTimer || 0) + dt * this.opts.speed;
      const stepEvery = 0.06;
      while (this._stepTimer >= stepEvery) {
        this._stepTimer -= stepEvery;
        this.optimizerMarkers.forEach((opt, idx) => {
          if (!opt.active) return;
          this._stepOptimizer(opt);
          const y = this._loss(opt.x, opt.z) - 1 + 0.35;
          opt.marker.position.set(opt.x, y, opt.z);

          const trail = this.optimizerTrails[idx];
          trail.points.push(opt.x, y - 0.05, opt.z);
          if (trail.points.length > trail.maxPoints * 3) trail.points.splice(0, 3);
          const arr = trail.line.geometry.attributes.position.array;
          const n   = trail.points.length / 3;
          for (let i = 0; i < n; i++) {
            arr[i * 3]     = trail.points[i * 3];
            arr[i * 3 + 1] = trail.points[i * 3 + 1];
            arr[i * 3 + 2] = trail.points[i * 3 + 2];
          }
          trail.line.geometry.attributes.position.needsUpdate = true;
          trail.line.geometry.setDrawRange(0, n);
        });
      }
      // Pulse optimizer markers
      this.optimizerMarkers.forEach((opt, idx) => {
        const pulse = 0.85 + Math.sin(t * 3 + idx) * 0.15;
        opt.marker.material.emissiveIntensity = 0.7 + pulse * 0.4;
      });
    }

    // --- Mini NN: pulse nodes + animate edge opacity ---
    if (this._nnNodes) {
      this._nnNodes.forEach((row, li) => {
        row.forEach((node, ni) => {
          const p = Math.sin(t * 2.2 + node.userData.phase) * 0.5 + 0.5;
          node.material.emissiveIntensity = 0.3 + p * 0.8;
          node.scale.setScalar(0.9 + p * 0.15);
        });
      });
      // Animate edges to simulate signal propagation (left to right)
      this._nnEdges.forEach((e, idx) => {
        const wave = (Math.sin(t * 3.5 + e.phase) * 0.5 + 0.5) * 0.6 + 0.1;
        e.mat.opacity = wave;
      });
    }

    // --- Mini CNN: pulse slabs ---
    if (this._cnnSlabs) {
      this._cnnSlabs.forEach((slab, idx) => {
        const p = Math.sin(t * 1.8 + slab.userData.phase) * 0.5 + 0.5;
        slab.material.emissiveIntensity = 0.2 + p * 0.55;
        slab.material.opacity = 0.55 + p * 0.25;
      });
    }

    // --- Chain dots: travel along the arch (backwards = backprop direction) ---
    if (this._chainDots) {
      this._chainDots.forEach(cd => {
        cd.t = (cd.t + dt * this.opts.speed * 0.38) % 1;
        // dir -1: dot goes from "to" → "from" (reverse = backprop)
        const tPos = 1 - cd.t;
        const pos = cd.curve.getPoint(tPos);
        cd.dot.position.copy(pos);
        // Pulse size
        const pulse = 0.75 + Math.sin(t * 4) * 0.25;
        cd.dot.scale.setScalar(pulse);
        cd.dot.material.emissiveIntensity = 0.8 + pulse * 0.7;
      });
    }
  }

  reset() {
    this._resetOptimizers();
  }

  onActivate() {}
  onDeactivate() {}
}
