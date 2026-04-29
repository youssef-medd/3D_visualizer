import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * ConvolutionScene
 * Visualizes a 2D convolution operation in 3D:
 *   - Input feature map: a grid of cells, height = activation value
 *   - Sliding kernel: a translucent box that moves over the input
 *   - Output feature map: a separate grid being progressively built
 *     as the kernel sweeps across the input
 *
 * Designed to make stride, padding, and receptive field intuitive.
 */
export class ConvolutionScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#06070d', 25, 90);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
    this.camera.position.set(12, 14, 22);
    this.camera.lookAt(0, 0, 0);

    setupLights(this.scene);
    addGroundGrid(this.scene, 50, 25, -3.5);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.opts = {
      inputSize: 8,    // NxN input
      kernelSize: 3,   // KxK kernel
      stride: 1,
      padding: 0,
      animate: true,
      speed: 1.0,
      showNumbers: true,
    };

    this._build();
  }

  setOptions(partial) {
    const rebuildNeeded = Object.keys(partial).some(k => k !== 'showNumbers' && k !== 'animate' && k !== 'speed');
    Object.assign(this.opts, partial);
    if (rebuildNeeded) {
      this._build();
    } else {
      if ('showNumbers' in partial) this._applyNumberVisibility();
    }
  }

  _applyNumberVisibility() {
    const show = this.opts.showNumbers;
    this.inputCells.forEach(row => row.forEach(cell => {
      if (cell.userData.numLabel) cell.userData.numLabel.visible = show;
    }));
    this.outputCells.forEach(row => row.forEach(cell => {
      if (cell.userData.numLabel) cell.userData.numLabel.visible = show;
    }));
  }

  _build() {
    clearGroup(this.root);
    this.kernelGroup = null;
    this.outputCells = [];
    this.inputCells = [];
    this.tickIdx = 0;
    this.tickTimer = 0;

    const { inputSize: N, kernelSize: K, stride: S, padding: P } = this.opts;
    const outSize = Math.floor((N + 2 * P - K) / S) + 1;
    if (outSize <= 0) return;
    this.outSize = outSize;

    // ---- Input feature map (left side) ----
    const cellSize = 0.55;
    const inputCenter = new THREE.Vector3(-7.5, 0, 0);
    const inputRoot = new THREE.Group();
    inputRoot.position.copy(inputCenter);
    this.root.add(inputRoot);

    // Generate stable pseudo-random activations (deterministic from i,j)
    const inputValues = [];
    for (let i = 0; i < N; i++) {
      const row = [];
      for (let j = 0; j < N; j++) {
        // Smooth gradient + noise — gives a recognizable "image-like" pattern
        const v = 0.5 + 0.4 * Math.sin(i * 0.7) * Math.cos(j * 0.6) + 0.1 * Math.sin(i * 2.3 + j * 1.7);
        row.push(Math.max(0, Math.min(1, v)));
      }
      inputValues.push(row);
    }
    this.inputValues = inputValues;

    // Padding cells (rendered subtly, distinguished from real input)
    if (P > 0) {
      const padTotal = N + 2 * P;
      for (let i = 0; i < padTotal; i++) {
        for (let j = 0; j < padTotal; j++) {
          const isPad = i < P || i >= N + P || j < P || j >= N + P;
          if (!isPad) continue;
          const x = (j - (padTotal - 1) / 2) * cellSize;
          const z = (i - (padTotal - 1) / 2) * cellSize;
          const cell = new THREE.Mesh(
            new THREE.BoxGeometry(cellSize * 0.94, 0.05, cellSize * 0.94),
            new THREE.MeshStandardMaterial({
              color: '#1a1d2b',
              transparent: true,
              opacity: 0.5,
              wireframe: false,
            }),
          );
          cell.position.set(x, 0.025, z);
          inputRoot.add(cell);
        }
      }
    }

    // Real input cells — height encodes activation
    const padOffset = P;
    for (let i = 0; i < N; i++) {
      const rowCells = [];
      for (let j = 0; j < N; j++) {
        const totalSize = N + 2 * P;
        const x = ((j + padOffset) - (totalSize - 1) / 2) * cellSize;
        const z = ((i + padOffset) - (totalSize - 1) / 2) * cellSize;
        const v = inputValues[i][j];
        const h = 0.05 + v * 1.2;
        const geo = new THREE.BoxGeometry(cellSize * 0.92, h, cellSize * 0.92);
        const mat = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color().setHSL(0.55, 0.7, 0.3 + v * 0.4),
          emissive: new THREE.Color().setHSL(0.55, 0.7, 0.15 + v * 0.25),
          emissiveIntensity: 0.5,
          roughness: 0.35,
          metalness: 0.15,
          clearcoat: 0.6,
        });
        const cell = new THREE.Mesh(geo, mat);
        cell.position.set(x, h / 2, z);
        cell.userData = { i, j, baseColor: mat.color.clone(), baseEmissive: mat.emissive.clone() };
        inputRoot.add(cell);

        // Numeric label showing activation value
        const numLabel = makeTextSprite((v).toFixed(1), {
          fontSize: 32, color: '#e2e8f0', fontWeight: 600,
        });
        numLabel.position.set(x, h + 0.3, z);
        numLabel.scale.multiplyScalar(0.45);
        numLabel.visible = this.opts.showNumbers;
        cell.userData.numLabel = numLabel;
        inputRoot.add(numLabel);

        rowCells.push(cell);
      }
      this.inputCells.push(rowCells);
    }

    // Input label
    const inputLabel = makeTextSprite(`Input  ${N}×${N}`, { fontSize: 28 });
    inputLabel.position.set(0, 2.4, ((N + 2 * P) / 2) * cellSize + 0.4);
    inputRoot.add(inputLabel);

    // ---- Kernel (sliding window) ----
    const kernelGroup = new THREE.Group();
    kernelGroup.position.copy(inputCenter);
    this.root.add(kernelGroup);

    const kernelGeo = new THREE.BoxGeometry(K * cellSize, 0.85, K * cellSize);
    const kernelMat = new THREE.MeshPhysicalMaterial({
      color: '#ec4899',
      emissive: '#ec4899',
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.32,
      transmission: 0.5,
      thickness: 0.85,
      roughness: 0.05,
      clearcoat: 1.0,
    });
    const kernelBox = new THREE.Mesh(kernelGeo, kernelMat);
    kernelBox.position.y = 1.2;
    kernelGroup.add(kernelBox);

    const kernelEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(kernelGeo),
      new THREE.LineBasicMaterial({ color: '#ec4899', transparent: true, opacity: 1 }),
    );
    kernelEdges.position.y = 1.2;
    kernelGroup.add(kernelEdges);

    // Vertical "spotlight" cylinder showing the receptive field
    const spotGeo = new THREE.CylinderGeometry(K * cellSize * 0.55, K * cellSize * 0.4, 2.4, 10, 1, true);
    const spotMat = new THREE.MeshBasicMaterial({
      color: '#f472b6',
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const spot = new THREE.Mesh(spotGeo, spotMat);
    spot.position.y = 1.2;
    kernelGroup.add(spot);

    this.kernelGroup = kernelGroup;
    this.kernelOffset = inputCenter.clone();

    const kLabel = makeTextSprite(`Kernel  ${K}×${K}`, { fontSize: 24, color: '#f9a8d4' });
    kLabel.position.set(0, 3.0, 0);
    kernelGroup.add(kLabel);

    // ---- Output feature map (right side) ----
    const outputCenter = new THREE.Vector3(7.5, 0, 0);
    const outputRoot = new THREE.Group();
    outputRoot.position.copy(outputCenter);
    this.root.add(outputRoot);

    for (let i = 0; i < outSize; i++) {
      const rowCells = [];
      for (let j = 0; j < outSize; j++) {
        const x = (j - (outSize - 1) / 2) * cellSize;
        const z = (i - (outSize - 1) / 2) * cellSize;
        const geo = new THREE.BoxGeometry(cellSize * 0.92, 0.05, cellSize * 0.92);
        const mat = new THREE.MeshPhysicalMaterial({
          color: '#1a1d2b',
          emissive: '#1a1d2b',
          emissiveIntensity: 0.0,
          roughness: 0.4,
          metalness: 0.1,
          transparent: true,
          opacity: 0.7,
        });
        const cell = new THREE.Mesh(geo, mat);
        cell.position.set(x, 0.025, z);
        cell.userData = { filled: false, targetH: 0 };
        outputRoot.add(cell);
        rowCells.push(cell);
      }
      this.outputCells.push(rowCells);
    }

    const outLabel = makeTextSprite(`Output  ${outSize}×${outSize}`, { fontSize: 28 });
    outLabel.position.set(0, 2.4, (outSize / 2) * cellSize + 0.4);
    outputRoot.add(outLabel);

    // Cache cell geometry params for animation
    this._cellSize = cellSize;
    this._inputCenter = inputCenter;
    this._outputCenter = outputCenter;
    this._padOffset = padOffset;
    this._totalInputSize = N + 2 * P;

    // Position kernel at first valid step
    this._setKernelPosition(0, 0);
  }

  _setKernelPosition(i, j) {
    if (!this.kernelGroup) return;
    const { kernelSize: K } = this.opts;
    const cs = this._cellSize;
    // Top-left corner of kernel sits at (j, i) in input grid coords
    const totalSize = this._totalInputSize;
    const cx = ((j + (K - 1) / 2) - (totalSize - 1) / 2) * cs;
    const cz = ((i + (K - 1) / 2) - (totalSize - 1) / 2) * cs;
    this.kernelGroup.position.x = this._inputCenter.x + cx;
    this.kernelGroup.position.z = this._inputCenter.z + cz;
    this.kernelGroup.position.y = 0;

    // Highlight covered input cells; unhighlight others
    const { padding: P, inputSize: N } = this.opts;
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const cell = this.inputCells[r][c];
        const inWindow =
          r + P >= i && r + P < i + K &&
          c + P >= j && c + P < j + K;
        const mat = cell.material;
        if (inWindow) {
          mat.emissive.setHex(0xec4899);
          mat.emissiveIntensity = 1.2;
        } else {
          mat.emissive.copy(cell.userData.baseEmissive);
          mat.emissiveIntensity = 0.5;
        }
      }
    }
  }

  _writeOutputCell(oi, oj, value) {
    const cell = this.outputCells[oi]?.[oj];
    if (!cell) return;
    const v = Math.max(0, Math.min(1, value));
    const h = 0.1 + v * 1.0;
    cell.userData.targetH = h;
    cell.userData.targetColor = new THREE.Color().setHSL(0.92, 0.7, 0.3 + v * 0.4);
    cell.userData.filled = true;

    // Create or refresh output numeric label
    if (cell.userData.numLabel) cell.parent.remove(cell.userData.numLabel);
    const numLabel = makeTextSprite(v.toFixed(2), {
      fontSize: 28, color: '#34d399', fontWeight: 600,
    });
    numLabel.position.set(cell.position.x, h + 0.3, cell.position.z);
    numLabel.scale.multiplyScalar(0.45);
    numLabel.visible = this.opts.showNumbers;
    cell.parent.add(numLabel);
    cell.userData.numLabel = numLabel;
  }

  _computeConvAt(i, j) {
    // Simple sum of activations over receptive window; emulates the kernel.
    const { kernelSize: K, padding: P } = this.opts;
    let sum = 0; let count = 0;
    for (let dr = 0; dr < K; dr++) {
      for (let dc = 0; dc < K; dc++) {
        const r = i + dr - P;
        const c = j + dc - P;
        if (r >= 0 && c >= 0 && r < this.opts.inputSize && c < this.opts.inputSize) {
          // Use a Sobel-ish edge kernel: center positive, edges negative
          const w = (dr === Math.floor(K / 2) && dc === Math.floor(K / 2)) ? 1.0 : -1.0 / (K * K - 1);
          sum += this.inputValues[r][c] * w;
        }
        count++;
      }
    }
    return Math.abs(sum) * 1.6;
  }

  update(dt, t) {
    if (!this.opts.animate || !this.kernelGroup) return;

    // Step the kernel forward at a fixed rate
    this.tickTimer += dt * this.opts.speed;
    const stepInterval = 0.55;
    if (this.tickTimer >= stepInterval) {
      this.tickTimer = 0;
      const totalSteps = this.outSize * this.outSize;
      const oi = Math.floor(this.tickIdx / this.outSize);
      const oj = this.tickIdx % this.outSize;
      const ii = oi * this.opts.stride;
      const jj = oj * this.opts.stride;
      this._setKernelPosition(ii, jj);
      const v = this._computeConvAt(ii, jj);
      this._writeOutputCell(oi, oj, v);
      this.tickIdx = (this.tickIdx + 1) % totalSteps;

      // When wrapping, reset all output cells with a quick fade
      if (this.tickIdx === 0) {
        this.outputCells.forEach((row) =>
          row.forEach((c) => {
            c.userData.targetH = 0;
            c.userData.filled = false;
            c.userData.targetColor = new THREE.Color('#1a1d2b');
          }),
        );
      }
    }

    // Smoothly animate output cell heights & colors
    this.outputCells.forEach((row) =>
      row.forEach((cell) => {
        const targetH = cell.userData.targetH ?? 0.05;
        const cs = this._cellSize;
        const currentH = cell.scale.y * 0.05;
        const targetScale = targetH / 0.05;
        const newScale = cell.scale.y + (targetScale - cell.scale.y) * Math.min(1, dt * 6);
        // Clamp to avoid scale=0 which produces degenerate matrices (NaN normals → black screen)
        const clampedScale = Math.max(0.001, newScale);
        cell.scale.y = clampedScale;
        cell.position.y = (clampedScale * 0.05) / 2;
        if (cell.userData.targetColor) {
          cell.material.color.lerp(cell.userData.targetColor, Math.min(1, dt * 4));
          cell.material.emissive.lerp(cell.userData.targetColor, Math.min(1, dt * 4));
          cell.material.emissiveIntensity = cell.userData.filled ? 0.7 : 0.05;
        }
      }),
    );

    // Subtle kernel hover bob
    if (this.kernelGroup) {
      this.kernelGroup.position.y = Math.sin(t * 2.0) * 0.05;
    }
  }

  onActivate() {}
  onDeactivate() {}
}
