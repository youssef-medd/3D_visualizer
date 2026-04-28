import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * GradientDescentScene
 * Shows a 3D loss landscape with three optimizers running
 * simultaneously: vanilla SGD, Momentum, and Adam.
 *
 * The loss surface is a non-convex 2D function with multiple
 * minima — useful for showing how each optimizer escapes saddle
 * points and converges. Trails persist as fading line strips.
 */
export class GradientDescentScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#06070d', 30, 110);

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
    this.camera.position.set(14, 11, 18);
    this.camera.lookAt(0, 0, 0);

    setupLights(this.scene);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.opts = {
      learningRate: 0.05,
      animate: true,
      speed: 1.0,
      gridRes: 80,
      gridSize: 14,
    };

    this._build();
  }

  setOptions(partial) {
    Object.assign(this.opts, partial);
    if ('gridRes' in partial || 'gridSize' in partial) this._buildSurface();
    if ('learningRate' in partial) this._resetOptimizers();
  }

  // The loss function: smooth multimodal landscape, two minima + a saddle.
  // Gives interesting optimizer behavior without being chaotic.
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

  _build() {
    clearGroup(this.root);
    this._buildSurface();
    this._buildOptimizers();
  }

  _buildSurface() {
    if (this.surfaceMesh) {
      this.root.remove(this.surfaceMesh);
      this.surfaceMesh.geometry.dispose();
      this.surfaceMesh.material.dispose();
    }
    const { gridRes, gridSize } = this.opts;
    const geo = new THREE.PlaneGeometry(gridSize, gridSize, gridRes, gridRes);
    geo.rotateX(-Math.PI / 2);

    // Sample loss into Y coords + a per-vertex color attribute (height map).
    const positions = geo.attributes.position;
    const colors = new Float32Array(positions.count * 3);
    const colCold = new THREE.Color('#0e7490');
    const colMid = new THREE.Color('#a78bfa');
    const colHot = new THREE.Color('#f472b6');

    let yMin = Infinity, yMax = -Infinity;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      const y = this._loss(x, z);
      positions.setY(i, y);
      yMin = Math.min(yMin, y);
      yMax = Math.max(yMax, y);
    }
    for (let i = 0; i < positions.count; i++) {
      const y = positions.getY(i);
      const tNorm = (y - yMin) / (yMax - yMin || 1);
      const c = new THREE.Color();
      if (tNorm < 0.5) {
        c.copy(colCold).lerp(colMid, tNorm * 2);
      } else {
        c.copy(colMid).lerp(colHot, (tNorm - 0.5) * 2);
      }
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    const mat = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      roughness: 0.55,
      metalness: 0.1,
      clearcoat: 0.4,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    this.surfaceMesh = new THREE.Mesh(geo, mat);
    this.surfaceMesh.position.y = -1; // shift down so trails sit above
    this.root.add(this.surfaceMesh);

    // Wireframe overlay for definition
    const wireGeo = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({
      color: '#a78bfa',
      transparent: true,
      opacity: 0.12,
    });
    const wire = new THREE.LineSegments(wireGeo, wireMat);
    wire.position.y = this.surfaceMesh.position.y + 0.005;
    this.root.add(wire);
    this.wireMesh = wire;

    // Surface label
    const label = makeTextSprite('Loss Landscape', { fontSize: 26 });
    label.position.set(0, 4, -this.opts.gridSize / 2 - 0.4);
    this.root.add(label);
  }

  _buildOptimizers() {
    if (this.optimizerMarkers) {
      this.optimizerMarkers.forEach((m) => this.root.remove(m.marker));
      this.optimizerTrails.forEach((t) => {
        this.root.remove(t.line);
        t.line.geometry.dispose();
        t.line.material.dispose();
      });
    }
    this.optimizerMarkers = [];
    this.optimizerTrails = [];

    const startX = -5, startZ = -5;

    const optimizers = [
      { name: 'SGD',      color: '#38bdf8', kind: 'sgd' },
      { name: 'Momentum', color: '#fbbf24', kind: 'momentum' },
      { name: 'Adam',     color: '#34d399', kind: 'adam' },
    ];

    optimizers.forEach((opt, idx) => {
      // Marker: glowing sphere
      const geo = new THREE.SphereGeometry(0.28, 18, 14);
      const mat = new THREE.MeshPhysicalMaterial({
        color: opt.color,
        emissive: opt.color,
        emissiveIntensity: 1.0,
        metalness: 0.3,
        roughness: 0.2,
        clearcoat: 0.9,
      });
      const m = new THREE.Mesh(geo, mat);
      const offsetX = (idx - 1) * 0.5; // small spread so they don't overlap at start
      const x = startX + offsetX;
      const z = startZ + offsetX;
      m.position.set(x, this._loss(x, z) - 1 + 0.35, z);
      this.root.add(m);

      // Label sprite
      const label = makeTextSprite(opt.name, { fontSize: 22, color: opt.color });
      label.position.set(0, 0.7, 0);
      m.add(label);

      // Trail: BufferGeometry with growing point list
      const maxPoints = 400;
      const trailGeo = new THREE.BufferGeometry();
      const pos = new Float32Array(maxPoints * 3);
      trailGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      trailGeo.setDrawRange(0, 0);
      const trailMat = new THREE.LineBasicMaterial({
        color: opt.color,
        transparent: true,
        opacity: 0.85,
        linewidth: 2,
      });
      const trailLine = new THREE.Line(trailGeo, trailMat);
      this.root.add(trailLine);

      this.optimizerMarkers.push({
        marker: m,
        x, z,
        vx: 0, vz: 0,         // momentum velocity
        mx: 0, mz: 0,         // Adam first moment
        vAx: 0, vAz: 0,       // Adam second moment
        step: 0,
        kind: opt.kind,
        color: opt.color,
        name: opt.name,
        active: true,
      });
      this.optimizerTrails.push({ line: trailLine, points: [], maxPoints });
    });
  }

  _resetOptimizers() {
    if (!this.optimizerMarkers) return;
    const startX = -5, startZ = -5;
    this.optimizerMarkers.forEach((opt, idx) => {
      const offsetX = (idx - 1) * 0.5;
      opt.x = startX + offsetX;
      opt.z = startZ + offsetX;
      opt.vx = 0; opt.vz = 0;
      opt.mx = 0; opt.mz = 0;
      opt.vAx = 0; opt.vAz = 0;
      opt.step = 0;
      opt.active = true;
    });
    this.optimizerTrails.forEach((t) => {
      t.points = [];
      t.line.geometry.setDrawRange(0, 0);
    });
  }

  _stepOptimizer(opt) {
    const lr = this.opts.learningRate;
    const [gx, gz] = this._grad(opt.x, opt.z);

    if (opt.kind === 'sgd') {
      opt.x -= lr * gx;
      opt.z -= lr * gz;
    } else if (opt.kind === 'momentum') {
      const beta = 0.9;
      opt.vx = beta * opt.vx + gx;
      opt.vz = beta * opt.vz + gz;
      opt.x -= lr * opt.vx;
      opt.z -= lr * opt.vz;
    } else if (opt.kind === 'adam') {
      const b1 = 0.9, b2 = 0.999, eps = 1e-8;
      opt.step += 1;
      opt.mx = b1 * opt.mx + (1 - b1) * gx;
      opt.mz = b1 * opt.mz + (1 - b1) * gz;
      opt.vAx = b2 * opt.vAx + (1 - b2) * gx * gx;
      opt.vAz = b2 * opt.vAz + (1 - b2) * gz * gz;
      const mxh = opt.mx / (1 - Math.pow(b1, opt.step));
      const mzh = opt.mz / (1 - Math.pow(b1, opt.step));
      const vxh = opt.vAx / (1 - Math.pow(b2, opt.step));
      const vzh = opt.vAz / (1 - Math.pow(b2, opt.step));
      opt.x -= (lr * 4) * mxh / (Math.sqrt(vxh) + eps);
      opt.z -= (lr * 4) * mzh / (Math.sqrt(vzh) + eps);
    }

    // Clamp to grid bounds
    const half = this.opts.gridSize / 2 - 0.4;
    opt.x = Math.max(-half, Math.min(half, opt.x));
    opt.z = Math.max(-half, Math.min(half, opt.z));
  }

  update(dt, t) {
    if (!this.opts.animate || !this.optimizerMarkers) return;
    this._stepTimer = (this._stepTimer || 0) + dt * this.opts.speed;
    const stepEvery = 0.06;

    while (this._stepTimer >= stepEvery) {
      this._stepTimer -= stepEvery;
      this.optimizerMarkers.forEach((opt, idx) => {
        if (!opt.active) return;
        this._stepOptimizer(opt);

        // Position marker on surface (offset y)
        const y = this._loss(opt.x, opt.z) - 1 + 0.35;
        opt.marker.position.set(opt.x, y, opt.z);

        // Push trail point
        const trail = this.optimizerTrails[idx];
        trail.points.push(opt.x, y - 0.05, opt.z);
        if (trail.points.length > trail.maxPoints * 3) {
          trail.points.splice(0, 3);
        }
        const arr = trail.line.geometry.attributes.position.array;
        const n = trail.points.length / 3;
        for (let i = 0; i < n; i++) {
          arr[i * 3] = trail.points[i * 3];
          arr[i * 3 + 1] = trail.points[i * 3 + 1];
          arr[i * 3 + 2] = trail.points[i * 3 + 2];
        }
        trail.line.geometry.attributes.position.needsUpdate = true;
        trail.line.geometry.setDrawRange(0, n);
      });
    }

    // Pulse markers
    this.optimizerMarkers.forEach((opt, idx) => {
      const pulse = 0.85 + Math.sin(t * 3 + idx) * 0.15;
      opt.marker.material.emissiveIntensity = 0.7 + pulse * 0.4;
    });
  }

  reset() {
    this._resetOptimizers();
  }

  onActivate() {}
  onDeactivate() {}
}
