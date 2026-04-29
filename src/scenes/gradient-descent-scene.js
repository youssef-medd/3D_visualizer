import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * GradientDescentScene
 *
 * Loss landscape with three optimizers (SGD / Momentum / Adam) racing
 * toward the minimum. Camera sits above the surface for a clear bird's-eye
 * view of how each algorithm navigates valleys and saddle points.
 */
export class GradientDescentScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#06070d', 25, 90);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
    this.camera.position.set(0, 13, 22);
    this.camera.lookAt(0, 0, 0);

    setupLights(this.scene);
    addGroundGrid(this.scene, 60, 30, -4);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.opts = {
      learningRate: 0.05,
      animate: true,
      speed: 1.0,
      gridRes: 55,
      gridSize: 14,
      showNumbers: true,
    };

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
    this._buildSurface();
    this._buildContours();
    this._buildOptimizers();
    this._buildAxisLabels();
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
      clearcoat: 0.4, transparent: true, opacity: 0.88, side: THREE.DoubleSide,
    });
    this.surfaceMesh = new THREE.Mesh(geo, mat);
    this.surfaceMesh.position.y = -1;
    this.root.add(this.surfaceMesh);

    const wireGeo = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({ color: '#a78bfa', transparent: true, opacity: 0.07 });
    this.wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    this.wireMesh.position.y = -1 + 0.005;
    this.root.add(this.wireMesh);

    const surfLabel = makeTextSprite('Loss  L(θ₁, θ₂)', { fontSize: 26 });
    surfLabel.position.set(0, 4.5, -gridSize / 2 - 0.5);
    this.root.add(surfLabel);
  }

  // ------------------------------------------------------------------ contour rings

  _buildContours() {
    if (this._contourGroup) this.root.remove(this._contourGroup);
    const g = new THREE.Group();
    g.position.y = -1;
    this.root.add(g);
    this._contourGroup = g;

    // Sample the loss surface and draw iso-lines at fixed heights
    const { gridSize } = this.opts;
    const levels = [0.3, 0.6, 0.9, 1.2, 1.55];
    const contourColors = ['#67e8f9', '#a78bfa', '#f472b6', '#fbbf24', '#f87171'];
    const samples = 180;

    levels.forEach((level, li) => {
      const pts = [];
      for (let i = 0; i <= samples; i++) {
        const angle = (i / samples) * Math.PI * 2;
        // Trace a circle in parameter space; scale radius so contour matches the level
        // We use a march-approximation: radiate from origin until loss ≈ level
        const dir = [Math.cos(angle), Math.sin(angle)];
        let r = 0.2;
        let best = null;
        while (r < gridSize / 2 - 0.3) {
          const lv = this._loss(dir[0] * r, dir[1] * r);
          if (best === null || Math.abs(lv - level) < Math.abs(best.d)) {
            best = { r, d: lv - level };
          }
          r += 0.12;
        }
        if (best) {
          const x = dir[0] * best.r;
          const z = dir[1] * best.r;
          pts.push(new THREE.Vector3(x, this._loss(x, z) + 0.04, z));
        }
      }
      if (pts.length > 2) {
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const mat = new THREE.LineBasicMaterial({
          color: contourColors[li], transparent: true, opacity: 0.28,
        });
        g.add(new THREE.Line(geo, mat));
      }
    });
  }

  // ------------------------------------------------------------------ axis labels

  _buildAxisLabels() {
    const { gridSize } = this.opts;
    const half = gridSize / 2;

    const θ1 = makeTextSprite('θ₁', { fontSize: 22, color: '#94a3b8' });
    θ1.position.set(half + 0.8, -1, 0);
    this.root.add(θ1);

    const θ2 = makeTextSprite('θ₂', { fontSize: 22, color: '#94a3b8' });
    θ2.position.set(0, -1, half + 0.8);
    this.root.add(θ2);

    const L = makeTextSprite('L↑', { fontSize: 22, color: '#f472b6' });
    L.position.set(-half - 0.8, 2, -half - 0.8);
    this.root.add(L);

    this._axisLabels = [θ1, θ2, L];
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
      const geo = new THREE.SphereGeometry(0.28, 10, 8);
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

      // Gradient arrow — points in direction of -∇L (steepest descent)
      const arrowDir = new THREE.Vector3(0, 0, -1);
      const arrowColor = new THREE.Color(opt.color);
      const startY = this._loss(x, z) - 1 + 0.35;
      const arrow = new THREE.ArrowHelper(arrowDir, new THREE.Vector3(x, startY, z), 1.2, arrowColor, 0.35, 0.2);
      this.root.add(arrow);

      this.optimizerMarkers.push({ marker: m, x, z, vx: 0, vz: 0, mx: 0, mz: 0, vAx: 0, vAz: 0, step: 0, kind: opt.kind, color: opt.color, name: opt.name, active: true, arrow });
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
      if (opt.arrow) opt.arrow.position.set(opt.x, this._loss(opt.x, opt.z) - 1 + 0.35, opt.z);
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

  // ------------------------------------------------------------------ number visibility

  _applyNumberVisibility() {
    const show = this.opts.showNumbers;
    this.optimizerMarkers?.forEach(opt => {
      if (opt.marker.userData.nameLabel) opt.marker.userData.nameLabel.visible = show;
      if (opt.arrow) opt.arrow.visible = show;
    });
  }

  // ------------------------------------------------------------------ update

  update(dt, t) {
    if (!this.opts.animate) return;

    if (this.optimizerMarkers) {
      this._stepTimer = (this._stepTimer || 0) + dt * this.opts.speed;
      const stepEvery = 0.06;
      while (this._stepTimer >= stepEvery) {
        this._stepTimer -= stepEvery;
        this.optimizerMarkers.forEach((opt, idx) => {
          if (!opt.active) return;
          this._stepOptimizer(opt);
          const lossVal = this._loss(opt.x, opt.z);
          const y = lossVal - 1 + 0.35;
          opt.marker.position.set(opt.x, y, opt.z);

          // Update gradient arrow — direction of -∇L in XZ plane
          if (opt.arrow) {
            const [gx, gz] = this._grad(opt.x, opt.z);
            const gradLen = Math.sqrt(gx * gx + gz * gz);
            if (gradLen > 1e-4) {
              const dir = new THREE.Vector3(-gx / gradLen, 0, -gz / gradLen);
              opt.arrow.position.set(opt.x, y, opt.z);
              opt.arrow.setDirection(dir);
              const arrowLen = Math.min(2.0, 0.4 + gradLen * 0.55);
              opt.arrow.setLength(arrowLen, arrowLen * 0.28, arrowLen * 0.16);
            }
          }

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
      this.optimizerMarkers.forEach((opt, idx) => {
        const pulse = 0.85 + Math.sin(t * 3 + idx) * 0.15;
        opt.marker.material.emissiveIntensity = 0.7 + pulse * 0.4;
      });
    }
  }

  reset() { this._resetOptimizers(); }
  onActivate() {}
  onDeactivate() {}
}
