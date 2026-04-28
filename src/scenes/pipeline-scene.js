import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * PipelineScene
 *
 * Full ML training pipeline in one view:
 *
 *   [Mini NN]  ——→  Loss Surface  ——→  [Mini CNN]
 *                      ↑
 *               3 optimizers running
 *
 * Animated gradient arrows flow BACKWARDS (right → left) through the
 * chain, visualising backpropagation. The NN on the left pulses forward
 * signals; the CNN on the right represents the feature extractor.
 * Together they form the standard deep-learning training loop:
 *   forward pass → loss → backward pass → parameter update.
 */
export class PipelineScene {
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
      animate: true,
      speed: 1.0,
      showNumbers: true,
    };

    this._build();
  }

  setOptions(partial) {
    Object.assign(this.opts, partial);
    if ('showNumbers' in partial) this._applyNumberVisibility();
  }

  // ------------------------------------------------------------------ build

  _build() {
    clearGroup(this.root);
    this._nnNodes  = [];
    this._nnEdges  = [];
    this._cnnSlabs = [];
    this._chainDots = [];

    this._buildMiniNN();
    this._buildLossHint();
    this._buildMiniCNN();
    this._buildChainConnectors();
    this._buildPipelineLabel();
  }

  // ------------------------------------------------------------------ mini NN (left)

  _buildMiniNN() {
    const g = new THREE.Group();
    g.position.set(-17, 0, 0);
    this.root.add(g);
    this.nnGroup = g;

    const LAYERS = [3, 4, 4, 2];
    const spacing = 2.5;
    const nodeR   = 0.35;
    const startX  = -((LAYERS.length - 1) * spacing) / 2;

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
          metalness: 0.2, roughness: 0.3, clearcoat: 0.8,
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
          const geo2 = new THREE.BufferGeometry().setFromPoints([nA.position.clone(), nB.position.clone()]);
          const mat2 = new THREE.LineBasicMaterial({ color: '#a78bfa', transparent: true, opacity: 0.22 });
          const line = new THREE.Line(geo2, mat2);
          g.add(line);
          this._nnEdges.push({ line, mat: mat2, phase: Math.random() * Math.PI * 2 });
        });
      });
    }

    const nnTitle = makeTextSprite('Neural Net', { fontSize: 26, color: '#c4b5fd' });
    nnTitle.position.set(0, 3.5, 0);
    g.add(nnTitle);

    const nnSub = makeTextSprite('Forward pass  →  ∇L  →  θ update', { fontSize: 18, color: '#7c6fa0' });
    nnSub.position.set(0, -3.2, 0);
    nnSub.visible = this.opts.showNumbers;
    this._nnSubLabel = nnSub;
    g.add(nnSub);
  }

  // ------------------------------------------------------------------ loss hint (center)

  _buildLossHint() {
    // Simple glowing sphere at the origin to represent the loss scalar
    const geo = new THREE.SphereGeometry(0.7, 32, 24);
    const mat = new THREE.MeshPhysicalMaterial({
      color: '#f472b6', emissive: '#f472b6', emissiveIntensity: 1.2,
      metalness: 0.1, roughness: 0.1, clearcoat: 1.0,
      transparent: true, opacity: 0.85,
    });
    this._lossSphere = new THREE.Mesh(geo, mat);
    this._lossSphere.position.set(0, 1.5, 0);
    this.root.add(this._lossSphere);

    // Ring around it
    const ringGeo = new THREE.TorusGeometry(1.6, 0.04, 10, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: '#f472b6', transparent: true, opacity: 0.35 });
    this._lossRing = new THREE.Mesh(ringGeo, ringMat);
    this._lossRing.position.set(0, 1.5, 0);
    this._lossRing.rotation.x = Math.PI / 2;
    this.root.add(this._lossRing);

    const lossLabel = makeTextSprite('L(θ)  Loss', { fontSize: 26, color: '#f9a8d4' });
    lossLabel.position.set(0, 4.0, 0);
    this.root.add(lossLabel);

    const lossSub = makeTextSprite('min  L = E[ℓ(ŷ, y)]', { fontSize: 18, color: '#9d6a8a' });
    lossSub.position.set(0, -2.0, 0);
    lossSub.visible = this.opts.showNumbers;
    this._lossSubLabel = lossSub;
    this.root.add(lossSub);
  }

  // ------------------------------------------------------------------ mini CNN (right)

  _buildMiniCNN() {
    const g = new THREE.Group();
    g.position.set(17, 0, 0);
    this.root.add(g);
    this.cnnGroup = g;

    const layers = [
      { w: 2.4, h: 2.4, d: 0.5, color: '#ec4899', label: 'Input' },
      { w: 2.0, h: 2.0, d: 1.0, color: '#a78bfa', label: 'Conv' },
      { w: 1.4, h: 1.4, d: 1.4, color: '#22d3ee', label: 'Pool' },
      { w: 1.0, h: 1.0, d: 0.9, color: '#34d399', label: 'Conv' },
      { w: 0.4, h: 3.2, d: 0.4, color: '#fbbf24', label: 'FC' },
    ];

    const spacing = 2.8;
    const startX = -((layers.length - 1) * spacing) / 2;

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

      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: l.color, transparent: true, opacity: 0.55 }),
      );
      edges.position.set(x, 0, 0);
      g.add(edges);

      this._cnnSlabs.push(mesh);

      if (idx < layers.length - 1) {
        const nextX = startX + (idx + 1) * spacing;
        const pts = [new THREE.Vector3(x + l.w / 2, 0, 0), new THREE.Vector3(nextX - layers[idx + 1].w / 2, 0, 0)];
        g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: '#4b5563', transparent: true, opacity: 0.5 })));
      }

      const lbl = makeTextSprite(l.label, { fontSize: 20, color: l.color });
      lbl.position.set(x, -l.h / 2 - 0.7, 0);
      lbl.scale.multiplyScalar(0.85);
      g.add(lbl);
    });

    const cnnTitle = makeTextSprite('CNN', { fontSize: 26, color: '#f9a8d4' });
    cnnTitle.position.set(0, 3.5, 0);
    g.add(cnnTitle);

    const cnnSub = makeTextSprite('Conv → Pool → FC  →  ∇L', { fontSize: 18, color: '#7c6fa0' });
    cnnSub.position.set(0, -3.2, 0);
    cnnSub.visible = this.opts.showNumbers;
    this._cnnSubLabel = cnnSub;
    g.add(cnnSub);
  }

  // ------------------------------------------------------------------ chain connectors

  _buildChainConnectors() {
    // Two arched lines: NN → Loss and Loss → CNN
    const archPairs = [
      { from: new THREE.Vector3(-10, 1, 0), to: new THREE.Vector3(-2.5, 1.5, 0), color: '#a78bfa' },
      { from: new THREE.Vector3(2.5, 1.5, 0),  to: new THREE.Vector3(10, 1, 0),  color: '#f472b6' },
    ];

    archPairs.forEach((pair, pi) => {
      const mid = new THREE.Vector3().lerpVectors(pair.from, pair.to, 0.5);
      mid.y += 2.5;
      const curve = new THREE.QuadraticBezierCurve3(pair.from, mid, pair.to);
      const pts = curve.getPoints(40);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: pair.color, transparent: true, opacity: 0.4 });
      this.root.add(new THREE.Line(geo, mat));

      // Animated dot — travels from "to" → "from" (backprop direction)
      const dotGeo = new THREE.SphereGeometry(0.18, 14, 10);
      const dotMat = new THREE.MeshPhysicalMaterial({
        color: pair.color, emissive: pair.color, emissiveIntensity: 1.4,
        metalness: 0.1, roughness: 0.1,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      this.root.add(dot);
      this._chainDots.push({ curve, dot, t: pi * 0.5 % 1 });

      // Also a forward-direction dot
      const fwdDotMat = new THREE.MeshPhysicalMaterial({
        color: pair.color, emissive: pair.color, emissiveIntensity: 0.7,
        metalness: 0.1, roughness: 0.2, transparent: true, opacity: 0.6,
      });
      const fwdDot = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), fwdDotMat);
      this.root.add(fwdDot);
      this._chainDots.push({ curve, dot: fwdDot, t: (pi * 0.5 + 0.5) % 1, forward: true });
    });

    // Backprop labels
    const bpLabel1 = makeTextSprite('∇ backprop', { fontSize: 20, color: '#a78bfa' });
    bpLabel1.position.set(-7.5, 5.2, 0);
    bpLabel1.scale.multiplyScalar(0.9);
    bpLabel1.visible = this.opts.showNumbers;
    this._bpLabel1 = bpLabel1;
    this.root.add(bpLabel1);

    const bpLabel2 = makeTextSprite('∇ backprop', { fontSize: 20, color: '#f472b6' });
    bpLabel2.position.set(7.5, 5.2, 0);
    bpLabel2.scale.multiplyScalar(0.9);
    bpLabel2.visible = this.opts.showNumbers;
    this._bpLabel2 = bpLabel2;
    this.root.add(bpLabel2);
  }

  // ------------------------------------------------------------------ pipeline label

  _buildPipelineLabel() {
    const label = makeTextSprite('Training Pipeline:  NN ← Loss ← CNN  (forward →, backprop ←)', { fontSize: 22 });
    label.position.set(0, 8.0, 0);
    this.root.add(label);
  }

  // ------------------------------------------------------------------ number visibility

  _applyNumberVisibility() {
    const show = this.opts.showNumbers;
    if (this._nnSubLabel)   this._nnSubLabel.visible   = show;
    if (this._cnnSubLabel)  this._cnnSubLabel.visible  = show;
    if (this._lossSubLabel) this._lossSubLabel.visible = show;
    if (this._bpLabel1)     this._bpLabel1.visible     = show;
    if (this._bpLabel2)     this._bpLabel2.visible     = show;
  }

  // ------------------------------------------------------------------ update

  update(dt, t) {
    if (!this.opts.animate) return;

    // NN node pulse + edge wave
    if (this._nnNodes) {
      this._nnNodes.forEach(row => {
        row.forEach(node => {
          const p = Math.sin(t * 2.2 + node.userData.phase) * 0.5 + 0.5;
          node.material.emissiveIntensity = 0.3 + p * 0.8;
          node.scale.setScalar(0.9 + p * 0.15);
        });
      });
      this._nnEdges.forEach(e => {
        e.mat.opacity = (Math.sin(t * 3.5 + e.phase) * 0.5 + 0.5) * 0.6 + 0.1;
      });
    }

    // CNN slab pulse
    if (this._cnnSlabs) {
      this._cnnSlabs.forEach(slab => {
        const p = Math.sin(t * 1.8 + slab.userData.phase) * 0.5 + 0.5;
        slab.material.emissiveIntensity = 0.2 + p * 0.55;
        slab.material.opacity = 0.55 + p * 0.25;
      });
    }

    // Loss sphere pulse
    if (this._lossSphere) {
      const p = Math.sin(t * 2.5) * 0.5 + 0.5;
      this._lossSphere.material.emissiveIntensity = 0.8 + p * 0.7;
      this._lossRing.rotation.y = t * 1.2;
      this._lossSphere.scale.setScalar(0.9 + p * 0.15);
    }

    // Chain dots — backward (backprop) and forward pass
    if (this._chainDots) {
      this._chainDots.forEach(cd => {
        cd.t = (cd.t + dt * this.opts.speed * 0.4) % 1;
        const tPos = cd.forward ? cd.t : 1 - cd.t;
        const pos = cd.curve.getPoint(tPos);
        cd.dot.position.copy(pos);
        const pulse = 0.75 + Math.sin(t * 4) * 0.25;
        cd.dot.scale.setScalar(pulse);
        cd.dot.material.emissiveIntensity = 0.8 + pulse * 0.7;
      });
    }
  }

  onActivate() {}
  onDeactivate() {}
}
