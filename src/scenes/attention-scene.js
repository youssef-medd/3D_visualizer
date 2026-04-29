import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * AttentionScene
 *
 * Visualises scaled dot-product MULTI-HEAD self-attention:
 *
 *   Q tokens → [H stacked attention matrices] → softmax → × V → Output
 *
 * Controls (setOptions):
 *   seqLen             — number of tokens (2–12)
 *   heads              — number of heads shown (1–4), each stacked in Y
 *   dModel             — model dimension label (64/128/256/512)
 *   causalMask         — mask upper triangle (decoder / GPT style)
 *   showPositionalEncoding — overlay sinusoidal PE bars on Q tokens
 *   temperature        — softmax temperature (0.5 = sharp, 2.0 = uniform)
 *   showNumbers        — numeric weight labels on cells
 *   animate / speed    — row sweep animation
 */
export class AttentionScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#06070d', 35, 130);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
    this.camera.position.set(8, 14, 28);
    this.camera.lookAt(0, 2, 0);

    setupLights(this.scene);
    addGroundGrid(this.scene, 60, 30, -4);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.opts = {
      seqLen: 6,
      heads: 2,
      dModel: 256,
      causalMask: false,
      showPositionalEncoding: false,
      temperature: 1.0,
      animate: true,
      speed: 1.0,
      showNumbers: true,
    };

    this._perHeadCells  = [];
    this._perHeadLabels = [];
    this.queryTokens  = [];
    this.keyTokens    = [];
    this.valueTokens  = [];
    this.outputTokens = [];
    this.activeRow  = 0;
    this.rowTimer   = 0;

    this._build();
  }

  setOptions(partial) {
    const rebuildKeys = new Set(['seqLen','heads','dModel','causalMask','showPositionalEncoding','temperature']);
    const needsRebuild = Object.keys(partial).some(k => rebuildKeys.has(k));
    Object.assign(this.opts, partial);
    if (needsRebuild) {
      this._build();
    } else {
      if ('showNumbers' in partial) this._applyNumberVisibility();
    }
  }

  // ------------------------------------------------------------------ weights

  _genWeights(N, headIdx = 0, temperature = 1.0) {
    const seed = headIdx * 7.31;
    const W = [];
    for (let i = 0; i < N; i++) {
      const raw = [];
      for (let j = 0; j < N; j++) {
        const dist = Math.abs(i - j);
        let score;
        if (headIdx % 3 === 0) {
          // local / nearby attention
          score = -dist * 0.65 + Math.sin(i * 1.3 + j * 0.7 + seed) * 0.45;
        } else if (headIdx % 3 === 1) {
          // first-token / global summary attention
          score = (j === 0 ? 1.6 : -0.35) + Math.sin(i * 0.9 + j * 1.4 + seed) * 0.3;
        } else {
          // next-token look-ahead (or diagonal offset)
          score = -Math.abs(i - j - 1) * 0.65 + Math.sin(i * 1.5 + j * 0.85 + seed) * 0.35;
        }
        raw.push(Math.exp(score / Math.max(0.1, temperature)));
      }
      const sum = raw.reduce((a, b) => a + b, 0);
      W.push(raw.map(v => v / sum));
    }
    return W;
  }

  // ------------------------------------------------------------------ build

  _build() {
    clearGroup(this.root);
    this._perHeadCells  = [];
    this._perHeadLabels = [];
    this.queryTokens  = [];
    this.keyTokens    = [];
    this.valueTokens  = [];
    this.outputTokens = [];
    this.connLines = [];

    const N = Math.max(2, Math.min(12, this.opts.seqLen));
    const H = Math.max(1, Math.min(4, this.opts.heads));
    const cellSize = 0.7;
    const headGap  = 1.2;

    // Head accent colours (H heads, cycling through palette)
    const HEAD_COLORS = ['#67e8f9', '#fb923c', '#a78bfa', '#34d399'];

    // Per-head weight matrices
    const allWeights = [];
    for (let h = 0; h < H; h++) {
      allWeights.push(this._genWeights(N, h, this.opts.temperature));
    }

    const matrixW = N * cellSize;
    const matrixH = N * cellSize;

    // ---- Build each head's matrix ----
    for (let h = 0; h < H; h++) {
      const weights = allWeights[h];
      const headColor = HEAD_COLORS[h % HEAD_COLORS.length];
      const hc = new THREE.Color(headColor);
      const yOffset = h * (matrixH + headGap);

      const matRoot = new THREE.Group();
      matRoot.position.set(0, yOffset, 0);
      this.root.add(matRoot);

      const cells = [];
      const numLabels = [];

      for (let i = 0; i < N; i++) {
        cells.push([]);
        for (let j = 0; j < N; j++) {
          const x  = (j - (N - 1) / 2) * cellSize;
          const zc = (i - (N - 1) / 2) * cellSize;
          const w  = weights[i][j];

          const isMasked = this.opts.causalMask && j > i;
          const h_val = isMasked ? 0.05 : (0.05 + w * 1.6);

          // Cell color: head-tinted gradient of warm/cold for weight
          let cellColor, cellEmissive;
          if (isMasked) {
            cellColor   = new THREE.Color('#1e293b');
            cellEmissive = new THREE.Color('#0f172a');
          } else {
            const base = new THREE.Color().setHSL(
              0.62 - h * 0.15,   // hue shifts per head
              0.85,
              0.25 + w * 0.45,
            );
            const tinted = base.clone().lerp(hc, 0.28);
            cellColor   = tinted;
            cellEmissive = tinted.clone().multiplyScalar(0.55);
          }

          const geo = new THREE.BoxGeometry(cellSize * 0.88, h_val, cellSize * 0.88);
          const mat = new THREE.MeshPhysicalMaterial({
            color: cellColor,
            emissive: cellEmissive,
            emissiveIntensity: isMasked ? 0.0 : 0.55,
            roughness: 0.3,
            metalness: 0.15,
            clearcoat: 0.5,
            transparent: true,
            opacity: isMasked ? 0.22 : 0.92,
          });
          const cell = new THREE.Mesh(geo, mat);
          cell.position.set(x, h_val / 2, zc);
          cell.userData = {
            i, j, w, h,
            baseColor:    cellColor.clone(),
            baseEmissive: cellEmissive.clone(),
            isMasked,
          };
          matRoot.add(cell);
          cells[i].push(cell);

          if (!isMasked && this.opts.showNumbers) {
            const numLabel = makeTextSprite(w.toFixed(2), { fontSize: 22, color: '#f0f9ff', fontWeight: 600 });
            numLabel.position.set(x, h_val + 0.18, zc);
            numLabel.scale.multiplyScalar(0.36);
            matRoot.add(numLabel);
            numLabels.push(numLabel);
          }
        }
      }

      this._perHeadCells.push(cells);
      this._perHeadLabels.push(numLabels);

      // Head title label
      const headLbl = makeTextSprite(`Head ${h + 1}  (${
        h % 3 === 0 ? 'local' : h % 3 === 1 ? 'global' : 'offset'
      })`, { fontSize: 22, color: headColor });
      headLbl.position.set(-matrixW / 2 - 1.8, matrixH / 2, -matrixW / 2 - 0.5);
      matRoot.add(headLbl);

      // Axis hints
      if (h === 0) {
        const qAxis = makeTextSprite('queries →', { fontSize: 20, color: '#67e8f9' });
        qAxis.position.set(-matrixW / 2 - 1.0, 0.2, 0);
        matRoot.add(qAxis);
        const kAxis = makeTextSprite('← keys', { fontSize: 20, color: '#fb923c' });
        kAxis.position.set(0, 0.2, -matrixW / 2 - 1.0);
        matRoot.add(kAxis);
      }

      if (this.opts.causalMask && h === 0) {
        const maskLbl = makeTextSprite('▲ masked (causal)', { fontSize: 18, color: '#475569' });
        maskLbl.position.set(matrixW / 2 + 0.5, matrixH * 0.7, -matrixW / 2 - 0.5);
        matRoot.add(maskLbl);
      }
    }

    // Top label (placed above all heads)
    const totalH = H * (matrixH + headGap) - headGap;
    const topLabel = makeTextSprite(
      `Self-Attention  Q·K^T → softmax  |  ${H} head${H > 1 ? 's' : ''}  d_model=${this.opts.dModel}`,
      { fontSize: 24 }
    );
    topLabel.position.set(0, totalH + 1.5, -matrixW / 2 - 0.5);
    this.root.add(topLabel);

    // dK label
    const dK = Math.round(this.opts.dModel / H);
    const dkLbl = makeTextSprite(`d_k = ${dK}  |  scale = 1/√${dK} = ${(1 / Math.sqrt(dK)).toFixed(3)}`, { fontSize: 18, color: '#a78bfa' });
    dkLbl.position.set(0, totalH + 0.5, -matrixW / 2 - 0.5);
    this.root.add(dkLbl);

    if (this.opts.causalMask) {
      const modeLbl = makeTextSprite('decoder-only  (GPT / autoregressive)', { fontSize: 18, color: '#fbbf24' });
      modeLbl.position.set(0, -1.2, -matrixW / 2 - 0.5);
      this.root.add(modeLbl);
    }

    // ---- Token columns (shared across heads) ----
    const midY = (H - 1) * (matrixH + headGap) / 2;

    const tokenColors = { q: '#67e8f9', k: '#fb923c', v: '#a78bfa', o: '#4ade80' };
    const qX = -matrixW / 2 - 2.8;

    for (let i = 0; i < N; i++) {
      const zc = (i - (N - 1) / 2) * cellSize;
      const tok = this._makeTokenSphere(tokenColors.q);
      tok.position.set(qX, midY + 0.5, zc);
      this.root.add(tok);
      this.queryTokens.push(tok);

      if (this.opts.showPositionalEncoding) {
        this._addPEBars(tok, i, N, tokenColors.q);
      }
    }
    const qLabel = makeTextSprite('Q', { fontSize: 36, color: tokenColors.q, fontWeight: 700 });
    qLabel.position.set(qX, midY + 2.2, -matrixW / 2 - 0.5);
    this.root.add(qLabel);

    const kZ = -matrixW / 2 - 2.8;
    for (let j = 0; j < N; j++) {
      const x = (j - (N - 1) / 2) * cellSize;
      const tok = this._makeTokenSphere(tokenColors.k);
      tok.position.set(x, midY + 0.5, kZ);
      this.root.add(tok);
      this.keyTokens.push(tok);

      if (this.opts.showPositionalEncoding) {
        this._addPEBars(tok, j, N, tokenColors.k);
      }
    }
    const kLabel = makeTextSprite('K', { fontSize: 36, color: tokenColors.k, fontWeight: 700 });
    kLabel.position.set(-matrixW / 2 - 1.4, midY + 2.2, kZ);
    this.root.add(kLabel);

    const vX = matrixW / 2 + 2.2;
    for (let i = 0; i < N; i++) {
      const zc = (i - (N - 1) / 2) * cellSize;
      const tok = this._makeTokenSphere(tokenColors.v);
      tok.position.set(vX, midY + 0.5, zc);
      this.root.add(tok);
      this.valueTokens.push(tok);
    }
    const vLabel = makeTextSprite('V', { fontSize: 36, color: tokenColors.v, fontWeight: 700 });
    vLabel.position.set(vX, midY + 2.2, -matrixW / 2 - 0.5);
    this.root.add(vLabel);

    const oX = vX + 2.6;
    for (let i = 0; i < N; i++) {
      const zc = (i - (N - 1) / 2) * cellSize;
      const tok = this._makeTokenSphere(tokenColors.o, 0.65);
      tok.position.set(oX, midY + 0.55, zc);
      this.root.add(tok);
      this.outputTokens.push(tok);
    }
    const oLabel = makeTextSprite('Output', { fontSize: 28, color: tokenColors.o });
    oLabel.position.set(oX, midY + 2.2, -matrixW / 2 - 0.5);
    this.root.add(oLabel);

    // Temperature indicator
    if (this.opts.temperature !== 1.0) {
      const tempLbl = makeTextSprite(
        `τ = ${this.opts.temperature.toFixed(1)}  (${this.opts.temperature < 1 ? 'sharp' : 'uniform'})`,
        { fontSize: 20, color: '#fbbf24' }
      );
      tempLbl.position.set(oX + 1.5, midY + 1.0, 0);
      this.root.add(tempLbl);
    }

    // Frame camera
    const camDist = 18 + N * 1.6 + H * 2.2;
    this.camera.position.set(7, midY + 10, camDist);
    this.camera.lookAt(0, midY * 0.5, 0);
  }

  // ------------------------------------------------------------------ helpers

  _makeTokenSphere(color, size = 0.5) {
    const geo = new THREE.SphereGeometry(size / 2, 24, 18);
    const mat = new THREE.MeshPhysicalMaterial({
      color, emissive: color, emissiveIntensity: 0.4,
      metalness: 0.2, roughness: 0.25, clearcoat: 0.8,
    });
    const m = new THREE.Mesh(geo, mat);
    m.userData.baseEmissiveIntensity = 0.4;
    return m;
  }

  _addPEBars(parentMesh, posIdx, N, baseColor) {
    const numFreqs = 5;
    for (let f = 0; f < numFreqs; f++) {
      const val = f % 2 === 0
        ? Math.sin(posIdx / Math.pow(10000, (2 * f) / (this.opts.dModel || 256)))
        : Math.cos(posIdx / Math.pow(10000, (2 * f) / (this.opts.dModel || 256)));
      const h = 0.04 + Math.abs(val) * 0.28;
      const barGeo = new THREE.BoxGeometry(0.065, h, 0.065);
      const hue = f / numFreqs;
      const barMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(hue, 0.9, 0.65),
        transparent: true, opacity: 0.75,
      });
      const bar = new THREE.Mesh(barGeo, barMat);
      const angle = (f / numFreqs) * Math.PI * 2;
      bar.position.set(Math.cos(angle) * 0.42, h / 2 + 0.28, Math.sin(angle) * 0.42);
      parentMesh.add(bar);
    }
  }

  // ------------------------------------------------------------------ highlight

  _highlightRow(rowIdx) {
    const N = Math.max(2, Math.min(12, this.opts.seqLen));
    const H = Math.max(1, Math.min(4, this.opts.heads));

    // Reset all cells across all heads
    for (let h = 0; h < H; h++) {
      const cells = this._perHeadCells[h];
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          const cell = cells[i]?.[j];
          if (!cell || cell.userData.isMasked) continue;
          cell.material.color.copy(cell.userData.baseColor);
          cell.material.emissive.copy(cell.userData.baseEmissive);
          cell.material.emissiveIntensity = 0.5;
        }
      }
    }

    // Reset tokens
    this.queryTokens.forEach((t, i) => {
      t.material.emissiveIntensity = i === rowIdx ? 1.5 : 0.3;
      t.scale.setScalar(i === rowIdx ? 1.4 : 1.0);
    });
    this.outputTokens.forEach((t, i) => {
      t.material.emissiveIntensity = i === rowIdx ? 1.5 : 0.3;
      t.scale.setScalar(i === rowIdx ? 1.4 : 1.0);
    });

    // Highlight active row across ALL heads
    for (let h = 0; h < H; h++) {
      const cells = this._perHeadCells[h];
      const weights = this._genWeights(N, h, this.opts.temperature);
      for (let j = 0; j < N; j++) {
        const cell = cells[rowIdx]?.[j];
        if (!cell || cell.userData.isMasked) continue;
        const w = weights[rowIdx][j];
        cell.material.emissiveIntensity = 0.9 + w * 1.6;
      }
    }

    // K/V tokens: weighted by head-0 weights for visual
    const w0 = this._genWeights(N, 0, this.opts.temperature)[rowIdx];
    this.keyTokens.forEach((t, j) => {
      t.material.emissiveIntensity = 0.3 + w0[j] * 2.5;
      t.scale.setScalar(0.85 + w0[j] * 0.8);
    });
    this.valueTokens.forEach((t, j) => {
      t.material.emissiveIntensity = 0.3 + w0[j] * 2.5;
      t.scale.setScalar(0.85 + w0[j] * 0.8);
    });
  }

  // ------------------------------------------------------------------ visibility

  _applyNumberVisibility() {
    const show = this.opts.showNumbers;
    this._perHeadLabels.forEach(headLabels => {
      headLabels.forEach(lbl => { lbl.visible = show; });
    });
  }

  // ------------------------------------------------------------------ update

  update(dt, t) {
    if (!this.opts.animate || !this._perHeadCells.length) return;
    this.rowTimer += dt * this.opts.speed;
    const switchEvery = 1.6;
    if (this.rowTimer >= switchEvery) {
      this.rowTimer = 0;
      this.activeRow = (this.activeRow + 1) % Math.max(2, this.opts.seqLen);
      this._highlightRow(this.activeRow);
    }

    const allTokens = [
      ...this.queryTokens, ...this.keyTokens,
      ...this.valueTokens, ...this.outputTokens,
    ];
    allTokens.forEach((tok, idx) => {
      tok.position.y = (tok.userData.baseY ??= tok.position.y) + Math.sin(t * 1.5 + idx * 0.4) * 0.04;
    });
  }

  onActivate() { this._highlightRow(this.activeRow); }
  onDeactivate() {}
}
