import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="layout">
    <header class="header">
      <div class="header-content">
        <span class="badge">Neural Architecture Playground</span>
        <h1>Model Atlas 3D</h1>
        <p>Craft expressive CNN and Transformer diagrams with precise, interactive control.</p>
      </div>
      <div class="header-metrics">
        <div class="metric">
          <span>Mode</span>
          <strong>Editable</strong>
        </div>
        <div class="metric">
          <span>Validation</span>
          <strong id="validation-state">Pending</strong>
        </div>
      </div>
    </header>
    <main class="workspace">
      <aside class="panel">
        <div class="panel-card">
          <h2>Architecture</h2>
          <div class="inline-actions">
            <button id="load-cnn" class="btn">Load CNN</button>
            <button id="load-transformer" class="btn">Load Transformer</button>
          </div>
          <div class="inline-actions">
            <button id="add-layer" class="btn btn-primary">Add Layer</button>
            <button id="clear-layers" class="btn btn-danger">Clear</button>
          </div>
          <div class="inline-actions">
            <button id="auto-fix" class="btn">Auto Fix</button>
            <button id="shape-layout" class="btn">Shape Layout</button>
          </div>
          <p id="preset-desc">Pick a preset then refine each layer manually.</p>
        </div>
        <div class="panel-card">
          <h2>Visual Controls</h2>
          <div class="control-list">
            <label class="control-row">Layer Spacing
              <input id="spacing-control" type="range" min="1.5" max="4.8" step="0.05" value="2.6" />
            </label>
            <label class="control-row">Tensor Opacity
              <input id="opacity-control" type="range" min="0.14" max="0.95" step="0.01" value="0.62" />
            </label>
            <label class="control-row">Depth Scale
              <input id="depth-control" type="range" min="0.4" max="1.7" step="0.05" value="1" />
            </label>
            <label class="control-row">Flow Wave
              <input id="wave-control" type="range" min="0" max="2" step="0.01" value="0.9" />
            </label>
            <label class="control-row">Pulse Speed
              <input id="pulse-control" type="range" min="0.2" max="2.4" step="0.01" value="1.1" />
            </label>
            <label class="toggle-row">
              <input id="rotate-control" type="checkbox" />
              Auto Orbit
            </label>
          </div>
        </div>
        <div class="panel-card">
          <h2>Layers</h2>
          <div id="layer-editor"></div>
        </div>
        <div class="panel-card">
          <h2>Architecture Diagnostics</h2>
          <p id="shape-summary">No architecture analyzed yet.</p>
          <ul id="diagnostics-list"></ul>
        </div>
        <div class="panel-card legend">
          <h2>Layer Legend</h2>
          <ul id="legend-list"></ul>
        </div>
      </aside>
      <section class="viewport-wrap">
        <div id="viewport"></div>
      </section>
    </main>
  </div>
`;

const loadCnnBtn = document.querySelector('#load-cnn');
const loadTransformerBtn = document.querySelector('#load-transformer');
const addLayerBtn = document.querySelector('#add-layer');
const clearLayersBtn = document.querySelector('#clear-layers');
const autoFixBtn = document.querySelector('#auto-fix');
const shapeLayoutBtn = document.querySelector('#shape-layout');
const presetDescription = document.querySelector('#preset-desc');
const legendList = document.querySelector('#legend-list');
const layerEditor = document.querySelector('#layer-editor');
const viewport = document.querySelector('#viewport');
const spacingControl = document.querySelector('#spacing-control');
const opacityControl = document.querySelector('#opacity-control');
const depthControl = document.querySelector('#depth-control');
const waveControl = document.querySelector('#wave-control');
const pulseControl = document.querySelector('#pulse-control');
const rotateControl = document.querySelector('#rotate-control');
const diagnosticsList = document.querySelector('#diagnostics-list');
const shapeSummary = document.querySelector('#shape-summary');
const validationState = document.querySelector('#validation-state');

const layerColors = {
  input: '#93c5fd',
  conv: '#f9a8d4',
  pool: '#fcd34d',
  norm: '#c4b5fd',
  dense: '#86efac',
  output: '#fda4af',
  token: '#67e8f9',
  positional: '#fdba74',
  attention: '#f9a8d4',
  ffn: '#6ee7b7',
  residual: '#d8b4fe',
  head: '#fb7185',
};

const presets = {
  cnn: {
    description: 'CNN preset loaded. Edit names, types, and dimensions freely.',
    mode: 'cnn',
    layers: [
      { name: 'Input 224x224x3', type: 'input', w: 6, h: 6, d: 0.6, params: { h: 224, w: 224, c: 3 } },
      { name: 'Conv 7x7, 64', type: 'conv', w: 5.4, h: 5.4, d: 0.9, params: { k: 7, s: 2, p: 3, filters: 64 } },
      { name: 'MaxPool 3x3', type: 'pool', w: 4.8, h: 4.8, d: 0.7, params: { k: 3, s: 2, p: 1 } },
      { name: 'Conv 3x3, 128', type: 'conv', w: 4.3, h: 4.3, d: 1.0, params: { k: 3, s: 1, p: 1, filters: 128 } },
      { name: 'BatchNorm', type: 'norm', w: 4.1, h: 4.1, d: 0.45, params: {} },
      { name: 'Conv 3x3, 256', type: 'conv', w: 3.5, h: 3.5, d: 1.1, params: { k: 3, s: 2, p: 1, filters: 256 } },
      { name: 'Global AvgPool', type: 'pool', w: 2.7, h: 2.7, d: 0.7, params: { k: 7, s: 1, p: 0 } },
      { name: 'Dense 1024', type: 'dense', w: 2.1, h: 2.1, d: 1.0, params: { units: 1024 } },
      { name: 'Output 1000', type: 'output', w: 1.6, h: 1.6, d: 0.9, params: { classes: 1000 } },
    ],
  },
  transformer: {
    description: 'Transformer preset loaded. Tune blocks to match your model.',
    mode: 'transformer',
    layers: [
      { name: 'Token Embedding', type: 'token', w: 6.3, h: 2.0, d: 1.0, params: { seq: 128, dModel: 512 } },
      { name: 'Positional Encoding', type: 'positional', w: 6.0, h: 1.8, d: 0.7, params: {} },
      { name: 'LayerNorm', type: 'norm', w: 5.8, h: 1.6, d: 0.5, params: {} },
      { name: 'Multi-Head Attention', type: 'attention', w: 5.5, h: 2.4, d: 1.4, params: { heads: 8 } },
      { name: 'Residual Add', type: 'residual', w: 5.3, h: 1.6, d: 0.5, params: {} },
      { name: 'Feed Forward', type: 'ffn', w: 4.7, h: 2.2, d: 1.1, params: { hidden: 2048 } },
      { name: 'Residual Add', type: 'residual', w: 4.5, h: 1.6, d: 0.5, params: {} },
      { name: 'LayerNorm', type: 'norm', w: 4.1, h: 1.5, d: 0.4, params: {} },
      { name: 'Classifier Head', type: 'head', w: 3.5, h: 1.7, d: 0.9, params: { classes: 10 } },
      { name: 'Output Tokens', type: 'output', w: 3.0, h: 1.4, d: 0.7, params: { classes: 10 } },
    ],
  },
};

const layerTypeOptions = Object.keys(layerColors);
let architectureState = structuredClone(presets.cnn.layers);
let architectureMode = 'cnn';
let lastShapeInfo = [];

function defaultParamsForType(type) {
  const defaults = {
    input: { h: 224, w: 224, c: 3 },
    conv: { k: 3, s: 1, p: 1, filters: 64 },
    pool: { k: 2, s: 2, p: 0 },
    norm: {},
    dense: { units: 512 },
    output: { classes: 10 },
    token: { seq: 128, dModel: 512 },
    positional: {},
    attention: { heads: 8 },
    ffn: { hidden: 2048 },
    residual: {},
    head: { classes: 10 },
  };
  return structuredClone(defaults[type] || {});
}

function cnnOutDim(size, k, s, p) {
  return Math.floor((size + 2 * p - k) / s) + 1;
}

function validateArchitecture(layers, mode) {
  const messages = [];
  const shapes = [];
  let state = null;

  for (let index = 0; index < layers.length; index += 1) {
    const layer = layers[index];
    const params = layer.params || {};
    let descriptor = 'unknown';

    if (mode === 'cnn') {
      if (layer.type === 'input') {
        state = { h: params.h || 224, w: params.w || 224, c: params.c || 3 };
        descriptor = `${state.h}x${state.w}x${state.c}`;
      } else if (!state) {
        messages.push(`Layer ${index + 1} (${layer.name}) needs an input layer first.`);
      } else if (layer.type === 'conv') {
        const k = Number(params.k || 3);
        const s = Number(params.s || 1);
        const p = Number(params.p || 0);
        const filters = Number(params.filters || state.c);
        const outH = cnnOutDim(state.h, k, s, p);
        const outW = cnnOutDim(state.w, k, s, p);
        if (outH <= 0 || outW <= 0) {
          messages.push(`Conv at layer ${index + 1} has invalid kernel/stride/padding for current tensor.`);
        } else {
          state = { h: outH, w: outW, c: filters };
        }
        descriptor = `${state.h}x${state.w}x${state.c}`;
      } else if (layer.type === 'pool') {
        const k = Number(params.k || 2);
        const s = Number(params.s || 2);
        const p = Number(params.p || 0);
        const outH = cnnOutDim(state.h, k, s, p);
        const outW = cnnOutDim(state.w, k, s, p);
        if (outH <= 0 || outW <= 0) {
          messages.push(`Pooling at layer ${index + 1} collapses spatial dimensions.`);
        } else {
          state = { ...state, h: outH, w: outW };
        }
        descriptor = `${state.h}x${state.w}x${state.c}`;
      } else if (layer.type === 'dense') {
        state = { h: 1, w: 1, c: Number(params.units || 512) };
        descriptor = `${state.c} units`;
      } else if (layer.type === 'output') {
        const classes = Number(params.classes || 10);
        state = { h: 1, w: 1, c: classes };
        descriptor = `${classes} classes`;
      } else {
        descriptor = state ? `${state.h}x${state.w}x${state.c}` : 'pending';
      }
    } else {
      if (layer.type === 'token') {
        state = { seq: Number(params.seq || 128), dModel: Number(params.dModel || 512) };
        descriptor = `${state.seq}x${state.dModel}`;
      } else if (!state) {
        messages.push(`Layer ${index + 1} (${layer.name}) needs a token embedding layer first.`);
      } else if (layer.type === 'attention') {
        const heads = Number(params.heads || 8);
        if (state.dModel % heads !== 0) {
          messages.push(`Attention at layer ${index + 1}: dModel (${state.dModel}) must divide by heads (${heads}).`);
        }
        descriptor = `${state.seq}x${state.dModel}`;
      } else if (layer.type === 'ffn') {
        const hidden = Number(params.hidden || 2048);
        descriptor = `${state.seq}x${state.dModel} (ffn:${hidden})`;
      } else if (layer.type === 'head' || layer.type === 'output') {
        const classes = Number(params.classes || 10);
        descriptor = `${state.seq}x${classes}`;
      } else {
        descriptor = `${state.seq}x${state.dModel}`;
      }
    }

    shapes.push({ index, descriptor });
  }

  const status = messages.length ? 'invalid' : 'valid';
  return { messages, shapes, status };
}

function updateDiagnostics(result) {
  validationState.textContent = result.status === 'valid' ? 'Valid' : 'Issues';
  validationState.style.color = result.status === 'valid' ? '#86efac' : '#fca5a5';

  shapeSummary.textContent = result.shapes.length
    ? `Computed shape trail across ${result.shapes.length} layers.`
    : 'No layers to validate.';

  diagnosticsList.innerHTML = '';
  if (!result.messages.length) {
    const li = document.createElement('li');
    li.textContent = 'No validation errors detected.';
    li.className = 'diag-ok';
    diagnosticsList.appendChild(li);
    return;
  }

  result.messages.forEach((message) => {
    const li = document.createElement('li');
    li.textContent = message;
    li.className = 'diag-error';
    diagnosticsList.appendChild(li);
  });
}

const scene = new THREE.Scene();
scene.background = new THREE.Color('#050713');
scene.fog = new THREE.Fog('#050713', 34, 96);

const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 260);
camera.position.set(0, 4, 36);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
viewport.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.minDistance = 15;
controls.maxDistance = 100;
controls.enablePan = true;
controls.target.set(0, 0.3, 0);

const ambient = new THREE.AmbientLight('#e2e8f0', 0.28);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight('#60a5fa', 1.2);
keyLight.position.set(12, 12, 22);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight('#c084fc', 1.0);
rimLight.position.set(-14, 8, -14);
scene.add(rimLight);

const fillLight = new THREE.PointLight('#22d3ee', 1.2, 90);
fillLight.position.set(0, 8, 8);
scene.add(fillLight);

const floorGlow = new THREE.Mesh(
  new THREE.PlaneGeometry(180, 180),
  new THREE.MeshBasicMaterial({
    color: '#0b1026',
    transparent: true,
    opacity: 0.45,
    side: THREE.DoubleSide,
  }),
);
floorGlow.rotation.x = Math.PI / 2;
floorGlow.position.y = -4.2;
scene.add(floorGlow);

const grid = new THREE.GridHelper(150, 90, '#374151', '#111827');
grid.position.y = -4.1;
grid.material.opacity = 0.33;
grid.material.transparent = true;
scene.add(grid);

const layerGroup = new THREE.Group();
scene.add(layerGroup);

const connectionGroup = new THREE.Group();
scene.add(connectionGroup);

const guiState = {
  spacing: 2.6,
  opacity: 0.62,
  depthScale: 1.0,
  wave: 0.9,
  pulseSpeed: 1.1,
  rotate: false,
};

function makeTextSprite(labelText) {
  const canvas = document.createElement('canvas');
  canvas.width = 700;
  canvas.height = 92;
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = '600 30px Segoe UI';
  context.fillStyle = '#e2e8f0';
  context.shadowColor = 'rgba(0, 0, 0, 0.35)';
  context.shadowBlur = 10;
  context.fillText(labelText, 12, 58);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(7.2, 0.92, 1);
  return sprite;
}

function clearGroup(group) {
  while (group.children.length) {
    const item = group.children.pop();
    if (item.geometry) item.geometry.dispose();
    if (item.material) {
      if (Array.isArray(item.material)) item.material.forEach((mat) => mat.dispose());
      else item.material.dispose();
    }
    if (item.children?.length) {
      item.children.forEach((child) => {
        if (child.material?.map) child.material.map.dispose();
        if (child.material) child.material.dispose();
      });
    }
    group.remove(item);
  }
}

function updateLegend(layers) {
  const uniqueTypes = [...new Set(layers.map((layer) => layer.type))];
  legendList.innerHTML = '';
  uniqueTypes.forEach((type) => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="swatch" style="background:${layerColors[type]}"></span>${type}`;
    legendList.appendChild(li);
  });
}

function addArrow(start, end) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  if (length < 0.05) return;
  direction.normalize();

  const shaftLength = Math.max(0.2, length - 0.28);
  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, shaftLength, 8),
    new THREE.MeshBasicMaterial({ color: '#7dd3fc', transparent: true, opacity: 0.75 }),
  );
  shaft.position.copy(start).addScaledVector(direction, shaftLength / 2);
  shaft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
  connectionGroup.add(shaft);

  const head = new THREE.Mesh(
    new THREE.ConeGeometry(0.09, 0.24, 8),
    new THREE.MeshBasicMaterial({ color: '#c4b5fd', transparent: true, opacity: 0.88 }),
  );
  head.position.copy(start).addScaledVector(direction, shaftLength + 0.11);
  head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
  connectionGroup.add(head);
}

function buildArchitecture(layers) {
  updateLegend(layers);
  clearGroup(layerGroup);
  clearGroup(connectionGroup);

  const startX = -((layers.length - 1) * guiState.spacing) / 2;
  const points = [];
  const baseY = 0.1;

  layers.forEach((layer, index) => {
    const geometry = new THREE.BoxGeometry(layer.w, layer.h, layer.d * guiState.depthScale);
    const color = layerColors[layer.type] || '#94a3b8';
    const material = new THREE.MeshStandardMaterial({
      color,
      transparent: true,
      opacity: guiState.opacity,
      roughness: 0.24,
      metalness: 0.2,
      emissive: color,
      emissiveIntensity: 0.24,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = startX + index * guiState.spacing;
    mesh.position.y = baseY + Math.sin(index * 0.6) * 0.15 * guiState.wave;
    mesh.rotation.y = -0.32;
    mesh.userData.baseY = mesh.position.y;
    mesh.userData.index = index;
    layerGroup.add(mesh);

    const aura = new THREE.Mesh(
      new THREE.BoxGeometry(layer.w * 1.03, layer.h * 1.03, layer.d * guiState.depthScale * 1.12),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.09,
        side: THREE.BackSide,
      }),
    );
    mesh.add(aura);

    const edge = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: '#dbeafe', transparent: true, opacity: 0.62 }),
    );
    mesh.add(edge);

    const label = makeTextSprite(layer.name);
    label.position.set(0, layer.h / 2 + 0.85, 0);
    mesh.add(label);

    points.push({
      in: new THREE.Vector3(mesh.position.x - layer.w / 2, mesh.position.y, 0),
      out: new THREE.Vector3(mesh.position.x + layer.w / 2, mesh.position.y, 0),
    });
  });

  for (let index = 0; index < points.length - 1; index += 1) {
    addArrow(points[index].out, points[index + 1].in);
  }

  camera.position.z = Math.max(32, 16 + layers.length * 1.55);
  camera.position.y = 3.5;
  controls.target.set(0, 0.2, 0);
}

function rerenderScene() {
  if (!architectureState.length) {
    clearGroup(layerGroup);
    clearGroup(connectionGroup);
    legendList.innerHTML = '<li>No layers defined</li>';
    return;
  }
  const validation = validateArchitecture(architectureState, architectureMode);
  lastShapeInfo = validation.shapes;
  updateDiagnostics(validation);
  buildArchitecture(architectureState);
}

function createField(labelText, value, onChange, { min = 0.2, max = 10, step = 0.1 } = {}) {
  const row = document.createElement('div');
  row.className = 'field-row';

  const label = document.createElement('label');
  label.textContent = labelText;
  row.appendChild(label);

  const input = document.createElement('input');
  input.type = 'number';
  input.value = String(value);
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.addEventListener('input', () => {
    const parsed = Number(input.value);
    if (!Number.isFinite(parsed)) return;
    onChange(parsed);
  });
  row.appendChild(input);
  return row;
}

function renderLayerEditor() {
  layerEditor.innerHTML = '';

  architectureState.forEach((layer, index) => {
    const card = document.createElement('div');
    card.className = 'layer-card';

    const topRow = document.createElement('div');
    topRow.className = 'layer-top';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = layer.name;
    nameInput.className = 'name-input';
    nameInput.addEventListener('input', () => {
      architectureState[index].name = nameInput.value || `Layer ${index + 1}`;
      rerenderScene();
    });
    topRow.appendChild(nameInput);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger';
    removeBtn.textContent = 'Delete';
    removeBtn.addEventListener('click', () => {
      architectureState.splice(index, 1);
      renderLayerEditor();
      rerenderScene();
    });
    topRow.appendChild(removeBtn);
    card.appendChild(topRow);

    const typeField = document.createElement('div');
    typeField.className = 'field-row';
    const typeLabel = document.createElement('label');
    typeLabel.textContent = 'Type';
    const typeSelect = document.createElement('select');
    layerTypeOptions.forEach((option) => {
      const opt = document.createElement('option');
      opt.value = option;
      opt.textContent = option;
      if (option === layer.type) opt.selected = true;
      typeSelect.appendChild(opt);
    });
    typeSelect.addEventListener('change', () => {
      architectureState[index].type = typeSelect.value;
      architectureState[index].params = defaultParamsForType(typeSelect.value);
      renderLayerEditor();
      rerenderScene();
    });
    typeField.append(typeLabel, typeSelect);
    card.appendChild(typeField);

    card.appendChild(
      createField('Width', layer.w, (value) => {
        architectureState[index].w = Math.max(0.2, value);
        rerenderScene();
      }),
    );
    card.appendChild(
      createField('Height', layer.h, (value) => {
        architectureState[index].h = Math.max(0.2, value);
        rerenderScene();
      }),
    );
    card.appendChild(
      createField('Depth', layer.d, (value) => {
        architectureState[index].d = Math.max(0.2, value);
        rerenderScene();
      }),
    );

    const params = architectureState[index].params || {};
    architectureState[index].params = params;

    const addParamField = (label, key, fallback = 1, min = 1) => {
      card.appendChild(
        createField(label, Number(params[key] ?? fallback), (value) => {
          architectureState[index].params[key] = Math.max(min, Math.round(value));
          rerenderScene();
        }, { min, max: 4096, step: 1 }),
      );
    };

    if (layer.type === 'input') {
      addParamField('H', 'h', 224, 1);
      addParamField('W', 'w', 224, 1);
      addParamField('C', 'c', 3, 1);
    } else if (layer.type === 'conv') {
      addParamField('Kernel', 'k', 3, 1);
      addParamField('Stride', 's', 1, 1);
      addParamField('Pad', 'p', 1, 0);
      addParamField('Filters', 'filters', 64, 1);
    } else if (layer.type === 'pool') {
      addParamField('Kernel', 'k', 2, 1);
      addParamField('Stride', 's', 2, 1);
      addParamField('Pad', 'p', 0, 0);
    } else if (layer.type === 'dense') {
      addParamField('Units', 'units', 512, 1);
    } else if (layer.type === 'output' || layer.type === 'head') {
      addParamField('Classes', 'classes', 10, 1);
    } else if (layer.type === 'token') {
      addParamField('Seq', 'seq', 128, 1);
      addParamField('dModel', 'dModel', 512, 1);
    } else if (layer.type === 'attention') {
      addParamField('Heads', 'heads', 8, 1);
    } else if (layer.type === 'ffn') {
      addParamField('Hidden', 'hidden', 2048, 1);
    }

    const shapePill = document.createElement('p');
    shapePill.className = 'shape-pill';
    shapePill.textContent = `Derived: ${lastShapeInfo[index]?.descriptor || 'n/a'}`;
    card.appendChild(shapePill);

    const moveRow = document.createElement('div');
    moveRow.className = 'inline-actions';

    const upBtn = document.createElement('button');
    upBtn.className = 'btn';
    upBtn.textContent = 'Up';
    upBtn.disabled = index === 0;
    upBtn.addEventListener('click', () => {
      [architectureState[index - 1], architectureState[index]] = [
        architectureState[index],
        architectureState[index - 1],
      ];
      renderLayerEditor();
      rerenderScene();
    });

    const downBtn = document.createElement('button');
    downBtn.className = 'btn';
    downBtn.textContent = 'Down';
    downBtn.disabled = index === architectureState.length - 1;
    downBtn.addEventListener('click', () => {
      [architectureState[index + 1], architectureState[index]] = [
        architectureState[index],
        architectureState[index + 1],
      ];
      renderLayerEditor();
      rerenderScene();
    });

    moveRow.append(upBtn, downBtn);
    card.appendChild(moveRow);
    layerEditor.appendChild(card);
  });
}

function shapeToVisual(shape, mode) {
  if (!shape) return { w: 3, h: 3, d: 1 };
  if (mode === 'cnn') {
    const match = shape.match(/^(\d+)x(\d+)x(\d+)$/);
    if (match) {
      const [, h, w, c] = match.map(Number);
      return {
        w: Math.max(1.2, Math.log2(w + 1) * 0.75),
        h: Math.max(1.2, Math.log2(h + 1) * 0.75),
        d: Math.max(0.3, Math.log2(c + 1) * 0.15),
      };
    }
  } else {
    const match = shape.match(/^(\d+)x(\d+)/);
    if (match) {
      const [, seq, dModel] = match.map(Number);
      return {
        w: Math.max(2.0, Math.log2(seq + 1) * 0.9),
        h: Math.max(1.3, Math.log2(dModel + 1) * 0.45),
        d: Math.max(0.4, Math.log2(dModel + 1) * 0.22),
      };
    }
  }
  return { w: 3, h: 3, d: 1 };
}

function applyShapeLayout() {
  const result = validateArchitecture(architectureState, architectureMode);
  architectureState = architectureState.map((layer, index) => {
    const visual = shapeToVisual(result.shapes[index]?.descriptor, architectureMode);
    return {
      ...layer,
      w: Number(visual.w.toFixed(2)),
      h: Number(visual.h.toFixed(2)),
      d: Number(visual.d.toFixed(2)),
    };
  });
  renderLayerEditor();
  rerenderScene();
}

function autoFixArchitecture() {
  architectureState = architectureState.map((layer, index) => {
    const params = { ...defaultParamsForType(layer.type), ...(layer.params || {}) };

    if (architectureMode === 'cnn') {
      if (layer.type === 'conv' || layer.type === 'pool') {
        params.k = Math.max(1, Math.round(Number(params.k || 3)));
        params.s = Math.max(1, Math.round(Number(params.s || 1)));
        params.p = Math.max(0, Math.round(Number(params.p || 0)));
      }
      if (layer.type === 'conv') params.filters = Math.max(1, Math.round(Number(params.filters || 64)));
      if (layer.type === 'dense') params.units = Math.max(1, Math.round(Number(params.units || 512)));
      if (layer.type === 'output') params.classes = Math.max(1, Math.round(Number(params.classes || 10)));
      if (layer.type === 'input') {
        params.h = Math.max(1, Math.round(Number(params.h || 224)));
        params.w = Math.max(1, Math.round(Number(params.w || 224)));
        params.c = Math.max(1, Math.round(Number(params.c || 3)));
      }
    } else {
      if (layer.type === 'token') {
        params.seq = Math.max(1, Math.round(Number(params.seq || 128)));
        params.dModel = Math.max(8, Math.round(Number(params.dModel || 512)));
      }
      if (layer.type === 'attention') {
        params.heads = Math.max(1, Math.round(Number(params.heads || 8)));
      }
      if (layer.type === 'ffn') {
        params.hidden = Math.max(4, Math.round(Number(params.hidden || 2048)));
      }
      if (layer.type === 'head' || layer.type === 'output') {
        params.classes = Math.max(1, Math.round(Number(params.classes || 10)));
      }
    }

    return { ...layer, params };
  });

  if (architectureMode === 'cnn' && architectureState[0]?.type !== 'input') {
    architectureState.unshift({
      name: 'Input Layer',
      type: 'input',
      w: 6,
      h: 6,
      d: 0.6,
      params: defaultParamsForType('input'),
    });
  }
  if (architectureMode === 'transformer' && architectureState[0]?.type !== 'token') {
    architectureState.unshift({
      name: 'Token Embedding',
      type: 'token',
      w: 6,
      h: 2,
      d: 1,
      params: defaultParamsForType('token'),
    });
  }

  // Ensure attention heads divide model width when possible.
  if (architectureMode === 'transformer') {
    let dModel = 512;
    architectureState.forEach((layer) => {
      if (layer.type === 'token') dModel = Number(layer.params?.dModel || dModel);
      if (layer.type === 'attention') {
        let heads = Number(layer.params?.heads || 8);
        while (heads > 1 && dModel % heads !== 0) heads -= 1;
        layer.params.heads = heads;
      }
    });
  }

  renderLayerEditor();
  rerenderScene();
}

function loadPreset(presetName) {
  architectureState = structuredClone(presets[presetName].layers);
  architectureMode = presets[presetName].mode;
  presetDescription.textContent = presets[presetName].description;
  renderLayerEditor();
  rerenderScene();
}

function resizeRenderer() {
  const { width, height } = viewport.getBoundingClientRect();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

loadCnnBtn.addEventListener('click', () => {
  loadPreset('cnn');
});

loadTransformerBtn.addEventListener('click', () => {
  loadPreset('transformer');
});

addLayerBtn.addEventListener('click', () => {
  architectureState.push({
    name: `Layer ${architectureState.length + 1}`,
    type: architectureMode === 'cnn' ? 'conv' : 'attention',
    w: 3,
    h: 3,
    d: 0.8,
    params: defaultParamsForType(architectureMode === 'cnn' ? 'conv' : 'attention'),
  });
  renderLayerEditor();
  rerenderScene();
});

clearLayersBtn.addEventListener('click', () => {
  architectureState = [];
  renderLayerEditor();
  rerenderScene();
});

autoFixBtn.addEventListener('click', () => {
  autoFixArchitecture();
});

shapeLayoutBtn.addEventListener('click', () => {
  applyShapeLayout();
});

function syncControlsToScene() {
  guiState.spacing = Number(spacingControl.value);
  guiState.opacity = Number(opacityControl.value);
  guiState.depthScale = Number(depthControl.value);
  guiState.wave = Number(waveControl.value);
  guiState.pulseSpeed = Number(pulseControl.value);
  guiState.rotate = rotateControl.checked;
  rerenderScene();
}

[
  spacingControl,
  opacityControl,
  depthControl,
  waveControl,
  pulseControl,
  rotateControl,
].forEach((control) => {
  control.addEventListener('input', syncControlsToScene);
  control.addEventListener('change', syncControlsToScene);
});

window.addEventListener('resize', resizeRenderer);

let spin = 0;
let pulseClock = 0;
const pointer = { x: 0, y: 0 };

window.addEventListener('pointermove', (event) => {
  const rect = viewport.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
});

function animate() {
  requestAnimationFrame(animate);
  pulseClock += 0.018 * guiState.pulseSpeed;

  fillLight.position.x = Math.sin(pulseClock * 0.6) * 9 + pointer.x * 2.5;
  fillLight.position.z = 7 + Math.cos(pulseClock * 0.45) * 5;
  keyLight.position.x = 12 + pointer.x * 4;
  keyLight.position.y = 12 + pointer.y * 2;
  rimLight.intensity = 0.86 + Math.sin(pulseClock * 0.8) * 0.12;

  layerGroup.children.forEach((mesh) => {
    if (!(mesh instanceof THREE.Mesh)) return;
    const wobble = Math.sin(pulseClock + mesh.userData.index * 0.8) * 0.07 * guiState.wave;
    mesh.position.y = mesh.userData.baseY + wobble;
    mesh.material.emissiveIntensity =
      0.15 + (Math.sin(pulseClock * 1.3 + mesh.userData.index) + 1) * 0.1;
  });

  connectionGroup.children.forEach((part, index) => {
    if (!part.material) return;
    part.material.opacity = 0.35 + (Math.sin(pulseClock * 1.9 + index * 0.5) + 1) * 0.18;
  });

  if (guiState.rotate) {
    spin += 0.0024;
    const radius = Math.max(30, 16 + architectureState.length * 1.4);
    camera.position.x = Math.sin(spin) * radius * 0.18;
    camera.position.z = Math.cos(spin) * radius;
  }
  controls.update();
  renderer.render(scene, camera);
}

loadPreset('cnn');
syncControlsToScene();
resizeRenderer();
animate();
