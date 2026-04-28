import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * AttentionScene
 * Visualizes scaled dot-product self-attention in 3D:
 *
 *   Tokens (left)  →  Q · K^T  →  Softmax matrix  →  · V  →  Output tokens (right)
 *
 * The attention matrix is rendered as a 3D heat-map grid where
 * cell height + color = attention weight. Active token row is
 * highlighted to show how each query attends to all keys.
 */
export class AttentionScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#06070d', 30, 110);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
    this.camera.position.set(8, 12, 24);
    this.camera.lookAt(0, 0, 0);

    setupLights(this.scene);
    addGroundGrid(this.scene, 50, 25, -3.5);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.opts = {
      seqLen: 6,
      heads: 1,
      animate: true,
      speed: 1.0,
    };

    this.matrixCells = [];
    this.queryTokens = [];
    this.keyTokens = [];
    this.valueTokens = [];
    this.outputTokens = [];
    this.activeRow = 0;
    this.rowTimer = 0;

    this._build();
  }

  setOptions(partial) {
    Object.assign(this.opts, partial);
    this._build();
  }

  _genWeights(N) {
    // Create a plausible attention pattern (softmax-like rows).
    const W = [];
    for (let i = 0; i < N; i++) {
      const raw = [];
      for (let j = 0; j < N; j++) {
        // Bias attention toward nearby tokens with some noise — a realistic shape
        const dist = Math.abs(i - j);
        const score = -dist * 0.6 + Math.sin(i * 1.3 + j * 0.7) * 0.4;
        raw.push(Math.exp(score));
      }
      const sum = raw.reduce((a, b) => a + b, 0);
      W.push(raw.map((v) => v / sum));
    }
    return W;
  }

  _build() {
    clearGroup(this.root);
    this.matrixCells = [];
    this.queryTokens = [];
    this.keyTokens = [];
    this.valueTokens = [];
    this.outputTokens = [];
    this.connLines = [];

    const N = Math.max(2, Math.min(12, this.opts.seqLen));
    const cellSize = 0.7;
    this.weights = this._genWeights(N);

    // ---- Token columns: Q (left-front), K (left-back), V (under matrix) ----
    // Layout strategy:
    //   - Query tokens: column on the far left, +z side
    //   - Attention matrix: center, on ground plane (NxN heat-map grid)
    //   - Output tokens: far right
    //   - Key labels: along the matrix's far edge

    // Position the attention matrix at origin
    const matRoot = new THREE.Group();
    this.root.add(matRoot);

    const matrixW = N * cellSize;

    // Build the matrix cells
    for (let i = 0; i < N; i++) {
      const row = [];
      for (let j = 0; j < N; j++) {
        const x = (j - (N - 1) / 2) * cellSize;
        const z = (i - (N - 1) / 2) * cellSize;
        const w = this.weights[i][j];
        const h = 0.05 + w * 1.6;
        const geo = new THREE.BoxGeometry(cellSize * 0.9, h, cellSize * 0.9);
        const mat = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color().setHSL(0.92 - w * 0.35, 0.85, 0.25 + w * 0.45),
          emissive: new THREE.Color().setHSL(0.92 - w * 0.35, 0.85, 0.1 + w * 0.35),
          emissiveIntensity: 0.6,
          roughness: 0.3,
          metalness: 0.15,
          clearcoat: 0.5,
          transparent: true,
          opacity: 0.9,
        });
        const cell = new THREE.Mesh(geo, mat);
        cell.position.set(x, h / 2, z);
        cell.userData = { i, j, w, baseColor: mat.color.clone(), baseEmissive: mat.emissive.clone() };
        matRoot.add(cell);
        row.push(cell);
      }
      this.matrixCells.push(row);
    }

    // Label
    const matLabel = makeTextSprite('Attention Matrix  Q · K^T → softmax', { fontSize: 26 });
    matLabel.position.set(0, 2.6, -matrixW / 2 - 0.6);
    matRoot.add(matLabel);

    // Axis hint sprites
    const qAxis = makeTextSprite('queries', { fontSize: 22, color: '#67e8f9' });
    qAxis.position.set(-matrixW / 2 - 1.0, 0.3, 0);
    qAxis.scale.multiplyScalar(0.85);
    matRoot.add(qAxis);

    const kAxis = makeTextSprite('keys', { fontSize: 22, color: '#fb923c' });
    kAxis.position.set(0, 0.3, -matrixW / 2 - 1.0);
    kAxis.scale.multiplyScalar(0.85);
    matRoot.add(kAxis);

    // ---- Token columns ----
    const tokenColors = {
      q: '#67e8f9', // cyan
      k: '#fb923c', // orange
      v: '#a78bfa', // purple
      o: '#4ade80', // green output
    };

    const tokenSize = 0.55;
    // Q tokens: column to the left
    const qX = -matrixW / 2 - 2.5;
    for (let i = 0; i < N; i++) {
      const z = (i - (N - 1) / 2) * cellSize;
      const tok = this._makeTokenSphere(tokenColors.q);
      tok.position.set(qX, 0.5, z);
      this.root.add(tok);
      this.queryTokens.push(tok);
    }
    const qLabel = makeTextSprite('Q', { fontSize: 36, color: tokenColors.q, fontWeight: 700 });
    qLabel.position.set(qX, 1.8, -matrixW / 2 - 0.6);
    this.root.add(qLabel);

    // K tokens: row behind the matrix (along -z)
    const kZ = -matrixW / 2 - 2.5;
    for (let j = 0; j < N; j++) {
      const x = (j - (N - 1) / 2) * cellSize;
      const tok = this._makeTokenSphere(tokenColors.k);
      tok.position.set(x, 0.5, kZ);
      this.root.add(tok);
      this.keyTokens.push(tok);
    }
    const kLabel = makeTextSprite('K', { fontSize: 36, color: tokenColors.k, fontWeight: 700 });
    kLabel.position.set(-matrixW / 2 - 1.5, 1.8, kZ);
    this.root.add(kLabel);

    // V tokens: column to the right (as inputs to weighted sum)
    const vX = matrixW / 2 + 2.0;
    for (let i = 0; i < N; i++) {
      const z = (i - (N - 1) / 2) * cellSize;
      const tok = this._makeTokenSphere(tokenColors.v);
      tok.position.set(vX, 0.5, z);
      this.root.add(tok);
      this.valueTokens.push(tok);
    }
    const vLabel = makeTextSprite('V', { fontSize: 36, color: tokenColors.v, fontWeight: 700 });
    vLabel.position.set(vX, 1.8, -matrixW / 2 - 0.6);
    this.root.add(vLabel);

    // Output tokens: far right
    const oX = vX + 2.5;
    for (let i = 0; i < N; i++) {
      const z = (i - (N - 1) / 2) * cellSize;
      const tok = this._makeTokenSphere(tokenColors.o, 0.65);
      tok.position.set(oX, 0.55, z);
      this.root.add(tok);
      this.outputTokens.push(tok);
    }
    const oLabel = makeTextSprite('Output', { fontSize: 28, color: tokenColors.o });
    oLabel.position.set(oX, 1.8, -matrixW / 2 - 0.6);
    this.root.add(oLabel);

    // Frame the camera
    this.camera.position.set(7, 11, matrixW + 8);
    this.camera.lookAt(0, 0, 0);
  }

  _makeTokenSphere(color, size = 0.5) {
    const geo = new THREE.SphereGeometry(size / 2, 24, 18);
    const mat = new THREE.MeshPhysicalMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.4,
      metalness: 0.2,
      roughness: 0.25,
      clearcoat: 0.8,
    });
    const m = new THREE.Mesh(geo, mat);
    m.userData.baseEmissiveIntensity = 0.4;
    return m;
  }

  _highlightRow(rowIdx) {
    const N = this.opts.seqLen;
    // Reset all
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const cell = this.matrixCells[i]?.[j];
        if (!cell) continue;
        cell.material.color.copy(cell.userData.baseColor);
        cell.material.emissive.copy(cell.userData.baseEmissive);
        cell.material.emissiveIntensity = 0.5;
      }
    }
    this.queryTokens.forEach((t, i) => {
      t.material.emissiveIntensity = i === rowIdx ? 1.5 : 0.3;
      t.scale.setScalar(i === rowIdx ? 1.4 : 1.0);
    });
    this.outputTokens.forEach((t, i) => {
      t.material.emissiveIntensity = i === rowIdx ? 1.5 : 0.3;
      t.scale.setScalar(i === rowIdx ? 1.4 : 1.0);
    });
    // Boost active row in the matrix
    for (let j = 0; j < N; j++) {
      const cell = this.matrixCells[rowIdx]?.[j];
      if (!cell) continue;
      const w = cell.userData.w;
      cell.material.emissiveIntensity = 1.0 + w * 1.5;
      // Brighten the corresponding key token by attention weight
      const kTok = this.keyTokens[j];
      if (kTok) {
        kTok.material.emissiveIntensity = 0.3 + w * 2.5;
        kTok.scale.setScalar(0.85 + w * 0.8);
      }
    }
    // V tokens: their contribution to output[i] is weighted by W[i,:]
    this.valueTokens.forEach((t, j) => {
      const w = this.matrixCells[rowIdx]?.[j]?.userData?.w ?? 0;
      t.material.emissiveIntensity = 0.3 + w * 2.5;
      t.scale.setScalar(0.85 + w * 0.8);
    });
  }

  update(dt, t) {
    if (!this.opts.animate || !this.matrixCells.length) return;
    this.rowTimer += dt * this.opts.speed;
    const switchEvery = 1.6;
    if (this.rowTimer >= switchEvery) {
      this.rowTimer = 0;
      this.activeRow = (this.activeRow + 1) % this.opts.seqLen;
      this._highlightRow(this.activeRow);
    }

    // Subtle hover animation on tokens
    [...this.queryTokens, ...this.keyTokens, ...this.valueTokens, ...this.outputTokens].forEach(
      (tok, idx) => {
        tok.position.y = (tok.userData.baseY ??= tok.position.y) + Math.sin(t * 1.5 + idx * 0.4) * 0.04;
      },
    );
  }

  onActivate() {
    this._highlightRow(this.activeRow);
  }
  onDeactivate() {}
}
