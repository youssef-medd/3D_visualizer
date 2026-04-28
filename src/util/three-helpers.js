import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

/**
 * Recursively dispose of a Three.js object's geometries, materials, and
 * textures, then remove it from its parent. Essential for preventing GPU
 * memory leaks when swapping between scenes.
 */
export function disposeObject(obj) {
  if (!obj) return;
  obj.traverse((node) => {
    if (node.geometry) node.geometry.dispose();
    if (node.material) {
      const mats = Array.isArray(node.material) ? node.material : [node.material];
      mats.forEach((m) => {
        for (const key of Object.keys(m)) {
          const val = m[key];
          if (val && typeof val === 'object' && 'isTexture' in val && val.isTexture) {
            val.dispose();
          }
        }
        m.dispose();
      });
    }
  });
  if (obj.parent) obj.parent.remove(obj);
}

export function clearGroup(group) {
  while (group.children.length) {
    const child = group.children[0];
    disposeObject(child);
  }
}

/**
 * Build a HiDPI canvas-texture text label as a Sprite. Preserves
 * crispness by allocating canvas pixels at devicePixelRatio.
 */
export function makeTextSprite(text, opts = {}) {
  const {
    fontSize = 32,
    color = '#e8ecf5',
    fontWeight = 600,
    bgColor = null,
    padding = 8,
  } = opts;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const measure = document.createElement('canvas').getContext('2d');
  measure.font = `${fontWeight} ${fontSize}px Inter, system-ui, sans-serif`;
  const w = Math.ceil(measure.measureText(text).width) + padding * 2;
  const h = fontSize + padding * 2;

  const canvas = document.createElement('canvas');
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.font = `${fontWeight} ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.textBaseline = 'middle';
  if (bgColor) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);
  }
  ctx.shadowColor = 'rgba(0,0,0,0.6)';
  ctx.shadowBlur = 4;
  ctx.fillStyle = color;
  ctx.fillText(text, padding, h / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    depthTest: true,
  });
  const sprite = new THREE.Sprite(material);
  const scaleFactor = 0.012;
  sprite.scale.set(w * scaleFactor, h * scaleFactor, 1);
  return sprite;
}

/**
 * Three-point lighting rig optimized for the deep-purple aesthetic. The
 * fill is teal so highlights pick up the brand accent, the rim is purple
 * so layer cores read as sitting in a regal purple atmosphere.
 */
export function setupLights(scene) {
  const ambient = new THREE.AmbientLight('#ffffff', 0.32);
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight('#cbd5f5', '#1a0d2e', 0.5);
  scene.add(hemi);

  const key = new THREE.DirectionalLight('#ffffff', 1.0);
  key.position.set(8, 14, 14);
  scene.add(key);

  const rim = new THREE.DirectionalLight('#a78bfa', 0.55);
  rim.position.set(-12, 5, -8);
  scene.add(rim);

  const fill = new THREE.PointLight('#2dd4bf', 0.85, 60);
  fill.position.set(0, 5, 8);
  scene.add(fill);

  const fill2 = new THREE.PointLight('#7c3aed', 0.45, 50);
  fill2.position.set(0, -2, 12);
  scene.add(fill2);

  return { ambient, hemi, key, rim, fill, fill2 };
}

/**
 * A faint ground grid that picks up brand accent. Visible enough to
 * communicate "ground" but never competes with foreground geometry.
 */
export function addGroundGrid(scene, size = 60, divisions = 30, y = -4) {
  const grid = new THREE.GridHelper(size, divisions, '#3b1d6e', '#1a1029');
  grid.position.y = y;
  grid.material.transparent = true;
  grid.material.opacity = 0.55;
  scene.add(grid);
  return grid;
}

/**
 * Thick world-space line. Width is in pixels (so it survives
 * camera distance) — used for edges proportional to weights.
 */
export function makeFatLine({
  points,
  color = '#2dd4bf',
  width = 2,
  opacity = 0.8,
  resolution,
}) {
  const geo = new LineGeometry();
  const flat = [];
  for (const p of points) flat.push(p.x, p.y, p.z);
  geo.setPositions(flat);
  const mat = new LineMaterial({
    color: new THREE.Color(color).getHex(),
    linewidth: width,
    transparent: true,
    opacity,
    depthTest: true,
    dashed: false,
  });
  if (resolution) mat.resolution.copy(resolution);
  else mat.resolution.set(window.innerWidth, window.innerHeight);
  const line = new Line2(geo, mat);
  line.computeLineDistances();
  return line;
}

/**
 * Build a smooth Bezier-style curve between two points and return a
 * Line2 along it. The curve bends in the +Y direction for a graceful
 * arc — used when the user toggles "Use Bezier Curves".
 */
export function makeBezierLine({ from, to, color, width = 2, opacity = 0.85, segments = 32, resolution, bend = 0.4 }) {
  const dist = from.distanceTo(to);
  const mid1 = new THREE.Vector3().lerpVectors(from, to, 0.33);
  const mid2 = new THREE.Vector3().lerpVectors(from, to, 0.66);
  mid1.y += dist * bend;
  mid2.y += dist * bend;
  const curve = new THREE.CubicBezierCurve3(from.clone(), mid1, mid2, to.clone());
  const pts = curve.getPoints(segments);
  return makeFatLine({ points: pts, color, width, opacity, resolution });
}

/**
 * Build a "data-flow frustum" link between two stacked layers. Visually
 * this is a translucent truncated pyramid joining the OUT face of the
 * previous slab to the IN face of the next slab — communicating
 * "this region of the previous tensor maps to this region of the next".
 *
 * The receptive-field highlight is a small bright rectangle on the IN
 * face to show the kernel-reduction footprint (see request #2).
 *
 * Returns a Group containing the frustum, the highlight, and a faint
 * outline for crispness.
 */
export function makeFrustumLink({
  fromCenter,         // THREE.Vector3 — center of front face of previous slab
  fromSize,           // { w, h } size of front face of previous slab
  toCenter,           // THREE.Vector3 — center of back face of next slab
  toSize,             // { w, h } size of back face of next slab
  color = '#2dd4bf',
  opacity = 0.18,
  highlightSize = null, // { w, h } if you want a kernel-window patch on the IN face
}) {
  const group = new THREE.Group();
  const c = new THREE.Color(color);

  // Build a custom geometry: a truncated pyramid (4 trapezoid sides + caps).
  // We define 8 vertices: 4 on the from-face, 4 on the to-face.
  const fHW = fromSize.w / 2, fHH = fromSize.h / 2;
  const tHW = toSize.w / 2,   tHH = toSize.h / 2;

  // Local helper that returns a Vector3 in world coords.
  const fp = (sx, sy) => new THREE.Vector3(fromCenter.x + sx * fHW, fromCenter.y + sy * fHH, fromCenter.z);
  const tp = (sx, sy) => new THREE.Vector3(toCenter.x + sx * tHW, toCenter.y + sy * tHH, toCenter.z);

  const verts = [
    fp(-1, -1), fp(1, -1), fp(1, 1), fp(-1, 1), // 0..3 from-face (front of previous)
    tp(-1, -1), tp(1, -1), tp(1, 1), tp(-1, 1), // 4..7 to-face (back of next)
  ];

  const positions = new Float32Array(verts.flatMap(v => [v.x, v.y, v.z]));
  const indices = [
    // 4 trapezoidal sides
    0, 1, 5,  0, 5, 4, // bottom
    1, 2, 6,  1, 6, 5, // right
    2, 3, 7,  2, 7, 6, // top
    3, 0, 4,  3, 4, 7, // left
    // We deliberately skip the caps so the previous/next slab faces show through.
  ];

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mat = new THREE.MeshPhysicalMaterial({
    color: c,
    transparent: true,
    opacity,
    roughness: 0.2,
    metalness: 0.0,
    transmission: 0.55,
    thickness: 0.6,
    ior: 1.3,
    side: THREE.DoubleSide,
    depthWrite: false,
    emissive: c,
    emissiveIntensity: 0.05,
  });
  const mesh = new THREE.Mesh(geo, mat);
  group.add(mesh);

  // Outline edges — slightly emissive so they survive the bloom.
  const edgePts = [
    [verts[0], verts[4]], [verts[1], verts[5]], [verts[2], verts[6]], [verts[3], verts[7]],
  ];
  const edgeGeo = new THREE.BufferGeometry();
  const edgeFlat = [];
  for (const [a, b] of edgePts) edgeFlat.push(a.x, a.y, a.z, b.x, b.y, b.z);
  edgeGeo.setAttribute('position', new THREE.Float32BufferAttribute(edgeFlat, 3));
  const edgeMat = new THREE.LineBasicMaterial({
    color: c,
    transparent: true,
    opacity: 0.65,
  });
  const edges = new THREE.LineSegments(edgeGeo, edgeMat);
  group.add(edges);

  // Optional kernel-window highlight on the from-face. Communicates
  // "this is the chunk being reduced into one cell of the next layer."
  if (highlightSize) {
    const hg = new THREE.PlaneGeometry(highlightSize.w, highlightSize.h);
    const hm = new THREE.MeshBasicMaterial({
      color: '#fbbf24',
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const hl = new THREE.Mesh(hg, hm);
    hl.position.copy(fromCenter);
    hl.position.z += 0.01; // tiny offset to avoid z-fighting
    group.add(hl);
    // Outline
    const hle = new THREE.LineSegments(
      new THREE.EdgesGeometry(hg),
      new THREE.LineBasicMaterial({ color: '#fde68a', transparent: true, opacity: 1 }),
    );
    hle.position.copy(hl.position);
    group.add(hle);

    // Small label "kernel"
    group.userData.kernelHighlight = hl;
    group.userData.kernelEdges = hle;
  }

  group.userData.frustumMesh = mesh;
  group.userData.frustumEdges = edges;
  return group;
}
