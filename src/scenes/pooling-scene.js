import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * PoolingScene
 *
 * Visualises 2D max/avg pooling with explicit numeric labels on each
 * input and output cell. The user wanted a section that explains
 * pooling "visually AND mathematically" — so each input cell is
 * labelled with a number, the kernel reads the local window, and
 * the output cell is labelled with the resulting max / avg value.
 *
 * Controls (driven from the side panel):
 *   - inputSize (default 4) — input is N x N
 *   - kernelSize (default 2) — pooling window is K x K
 *   - stride (default = kernelSize, classic non-overlapping pool)
 *   - mode: 'max' | 'avg'
 */
export class PoolingScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#0a0820', 25, 90);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
    this.camera.position.set(10, 13, 20);
    this.camera.lookAt(0, 0, 0);

    setupLights(this.scene);
    addGroundGrid(this.scene, 50, 25, -3.5);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.opts = {
      inputSize: 4,
      kernelSize: 2,
      stride: 2,
      mode: 'max', // 'max' | 'avg'
      animate: true,
      speed: 1.0,
    };

    this._build();
  }

  setOptions(partial) {
    Object.assign(this.opts, partial);
    this._build();
  }

  _build() {
    clearGroup(this.root);
    this.kernelGroup = null;
    this.inputCells = [];
    this.outputCells = [];
    this.tickIdx = 0;
    this.tickTimer = 0;

    const N = Math.max(2, Math.min(8, this.opts.inputSize));
    const K = Math.max(1, Math.min(4, this.opts.kernelSize));
    const S = Math.max(1, Math.min(4, this.opts.stride));

    const outSize = Math.floor((N - K) / S) + 1;
    if (outSize <= 0) return;
    this.outSize = outSize;

    // Stable pseudo-random integer values 1..9 for the input grid —
    // small numbers read clearly when rendered as sprite labels.
    const values = [];
    for (let i = 0; i < N; i++) {
      const row = [];
      for (let j = 0; j < N; j++) {
        const seed = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453;
        const frac = seed - Math.floor(seed);
        row.push(Math.floor(frac * 9) + 1);
      }
      values.push(row);
    }
    this.inputValues = values;

    const cellSize = 0.95;

    // Input grid (left)
    const inputCenter = new THREE.Vector3(-(N * cellSize) / 2 - 3, 0, 0);
    const inputRoot = new THREE.Group();
    inputRoot.position.copy(inputCenter);
    this.root.add(inputRoot);

    for (let i = 0; i < N; i++) {
      const rowCells = [];
      for (let j = 0; j < N; j++) {
        const x = (j - (N - 1) / 2) * cellSize;
        const z = (i - (N - 1) / 2) * cellSize;
        const v = values[i][j];

        const h = 0.1 + (v / 9) * 1.5;
        const geo = new THREE.BoxGeometry(cellSize * 0.9, h, cellSize * 0.9);
        const mat = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color().setHSL(0.55, 0.6, 0.3 + (v / 9) * 0.35),
          emissive: new THREE.Color().setHSL(0.55, 0.6, 0.15 + (v / 9) * 0.2),
          emissiveIntensity: 0.45,
          roughness: 0.35,
          metalness: 0.15,
          clearcoat: 0.6,
        });
        const cell = new THREE.Mesh(geo, mat);
        cell.position.set(x, h / 2, z);
        cell.userData = { i, j, v, baseColor: mat.color.clone(), baseEmissive: mat.emissive.clone() };
        inputRoot.add(cell);

        // Big numeric label, positioned slightly above the cell
        const label = makeTextSprite(`${v}`, {
          fontSize: 56,
          color: '#ffffff',
          fontWeight: 700,
        });
        label.position.set(x, h + 0.45, z);
        label.scale.multiplyScalar(0.55);
        cell.userData.label = label;
        inputRoot.add(label);

        rowCells.push(cell);
      }
      this.inputCells.push(rowCells);
    }

    const inputLabel = makeTextSprite(`Input  ${N}×${N}`, { fontSize: 28 });
    inputLabel.position.set(0, 2.7, ((N) / 2) * cellSize + 0.8);
    inputRoot.add(inputLabel);

    // Pooling kernel (sliding window)
    const kernelGroup = new THREE.Group();
    kernelGroup.position.copy(inputCenter);
    this.root.add(kernelGroup);

    const kernelGeo = new THREE.BoxGeometry(K * cellSize, 0.7, K * cellSize);
    const kernelMat = new THREE.MeshPhysicalMaterial({
      color: '#fbbf24',
      emissive: '#fbbf24',
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.32,
      transmission: 0.5,
      thickness: 0.7,
      roughness: 0.05,
      clearcoat: 1.0,
    });
    const kernelBox = new THREE.Mesh(kernelGeo, kernelMat);
    kernelBox.position.y = 1.4;
    kernelGroup.add(kernelBox);
    const kernelEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(kernelGeo),
      new THREE.LineBasicMaterial({ color: '#fde68a', transparent: true, opacity: 1 }),
    );
    kernelEdges.position.y = 1.4;
    kernelGroup.add(kernelEdges);
    this.kernelGroup = kernelGroup;

    const kLabel = makeTextSprite(
      `${this.opts.mode === 'max' ? 'MAX' : 'AVG'} ${K}×${K}`,
      { fontSize: 22, color: '#fde68a', fontWeight: 700 },
    );
    kLabel.position.set(0, 2.3, 0);
    kernelGroup.add(kLabel);

    // Output grid (right)
    const outputCenter = new THREE.Vector3((N * cellSize) / 2 + 3, 0, 0);
    const outputRoot = new THREE.Group();
    outputRoot.position.copy(outputCenter);
    this.root.add(outputRoot);

    for (let i = 0; i < outSize; i++) {
      const rowCells = [];
      for (let j = 0; j < outSize; j++) {
        const x = (j - (outSize - 1) / 2) * cellSize * 1.1;
        const z = (i - (outSize - 1) / 2) * cellSize * 1.1;
        const geo = new THREE.BoxGeometry(cellSize * 0.95, 0.1, cellSize * 0.95);
        const mat = new THREE.MeshPhysicalMaterial({
          color: '#1a1d2b',
          emissive: '#1a1d2b',
          roughness: 0.4,
          metalness: 0.1,
          transparent: true,
          opacity: 0.7,
        });
        const cell = new THREE.Mesh(geo, mat);
        cell.position.set(x, 0.05, z);
        cell.userData = { i, j, filled: false, targetH: 0, label: null };
        outputRoot.add(cell);
        rowCells.push(cell);
      }
      this.outputCells.push(rowCells);
    }

    const outLabel = makeTextSprite(`Output  ${outSize}×${outSize}`, { fontSize: 28 });
    outLabel.position.set(0, 2.7, (outSize / 2) * cellSize + 0.8);
    outputRoot.add(outLabel);

    this._cellSize = cellSize;
    this._inputCenter = inputCenter;
    this._outputCenter = outputCenter;

    // Position kernel at first window
    this._setKernelPosition(0, 0);
  }

  _setKernelPosition(i, j) {
    if (!this.kernelGroup) return;
    const N = this.opts.inputSize;
    const K = this.opts.kernelSize;
    const cs = this._cellSize;
    const cx = ((j + (K - 1) / 2) - (N - 1) / 2) * cs;
    const cz = ((i + (K - 1) / 2) - (N - 1) / 2) * cs;
    this.kernelGroup.position.x = this._inputCenter.x + cx;
    this.kernelGroup.position.z = this._inputCenter.z + cz;

    // Highlight covered input cells; unhighlight others
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const cell = this.inputCells[r][c];
        if (!cell) continue;
        const inWindow = r >= i && r < i + K && c >= j && c < j + K;
        const mat = cell.material;
        if (inWindow) {
          mat.emissive.setHex(0xfbbf24);
          mat.emissiveIntensity = 1.4;
        } else {
          mat.emissive.copy(cell.userData.baseEmissive);
          mat.emissiveIntensity = 0.45;
        }
      }
    }
  }

  _computeAt(i, j) {
    const K = this.opts.kernelSize;
    const N = this.opts.inputSize;
    let max = -Infinity;
    let sum = 0; let count = 0;
    const contributing = [];
    for (let dr = 0; dr < K; dr++) {
      for (let dc = 0; dc < K; dc++) {
        const r = i + dr; const c = j + dc;
        if (r >= 0 && c >= 0 && r < N && c < N) {
          const v = this.inputValues[r][c];
          contributing.push(v);
          if (v > max) max = v;
          sum += v;
          count++;
        }
      }
    }
    if (this.opts.mode === 'max') return { value: max, contributing };
    return { value: count > 0 ? sum / count : 0, contributing };
  }

  _writeOutputCell(oi, oj, value) {
    const cell = this.outputCells[oi]?.[oj];
    if (!cell) return;
    cell.userData.targetH = 0.1 + (value / 9) * 1.5;
    cell.userData.targetColor = new THREE.Color().setHSL(
      this.opts.mode === 'max' ? 0.06 : 0.32,
      0.7,
      0.3 + (value / 9) * 0.4,
    );
    cell.userData.filled = true;
    cell.userData.value = value;

    // Replace label
    if (cell.userData.label) {
      cell.parent.remove(cell.userData.label);
    }
    const display = this.opts.mode === 'max' ? `${value}` : value.toFixed(1);
    const label = makeTextSprite(display, {
      fontSize: 56,
      color: '#ffffff',
      fontWeight: 700,
    });
    label.position.set(cell.position.x, cell.userData.targetH + 0.45, cell.position.z);
    label.scale.multiplyScalar(0.55);
    cell.parent.add(label);
    cell.userData.label = label;
  }

  update(dt, t) {
    if (!this.opts.animate || !this.kernelGroup) return;

    this.tickTimer += dt * this.opts.speed;
    const stepInterval = 0.85;
    if (this.tickTimer >= stepInterval) {
      this.tickTimer = 0;
      const totalSteps = this.outSize * this.outSize;
      const oi = Math.floor(this.tickIdx / this.outSize);
      const oj = this.tickIdx % this.outSize;
      const ii = oi * this.opts.stride;
      const jj = oj * this.opts.stride;
      this._setKernelPosition(ii, jj);
      const { value } = this._computeAt(ii, jj);
      this._writeOutputCell(oi, oj, value);
      this.tickIdx = (this.tickIdx + 1) % totalSteps;

      // Reset on wrap
      if (this.tickIdx === 0) {
        this.outputCells.forEach((row) =>
          row.forEach((c) => {
            c.userData.targetH = 0.1;
            c.userData.filled = false;
            c.userData.targetColor = new THREE.Color('#1a1d2b');
            if (c.userData.label) {
              c.parent.remove(c.userData.label);
              c.userData.label = null;
            }
          }),
        );
      }
    }

    // Smooth output cell heights
    this.outputCells.forEach((row) =>
      row.forEach((cell) => {
        const targetH = cell.userData.targetH ?? 0.1;
        const newScale = cell.scale.y + (targetH / 0.1 - cell.scale.y) * Math.min(1, dt * 6);
        cell.scale.y = newScale;
        cell.position.y = (newScale * 0.1) / 2;
        if (cell.userData.targetColor) {
          cell.material.color.lerp(cell.userData.targetColor, Math.min(1, dt * 4));
          cell.material.emissive.lerp(cell.userData.targetColor, Math.min(1, dt * 4));
          cell.material.emissiveIntensity = cell.userData.filled ? 0.85 : 0.05;
        }
      }),
    );

    if (this.kernelGroup) {
      this.kernelGroup.position.y = Math.sin(t * 2.0) * 0.06;
    }
  }

  onActivate() {}
  onDeactivate() {}
}
