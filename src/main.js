import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="layout">
    <header class="header">
      <h1>Neural Architecture 3D Visualizer</h1>
      <p>Design your own CNN or Transformer-like architecture in 3D.</p>
    </header>
    <main class="workspace">
      <aside class="panel">
        <div class="panel-card">
          <h2>Architecture Builder</h2>
          <div class="inline-actions">
            <button id="load-cnn" class="btn">Load CNN</button>
            <button id="load-transformer" class="btn">Load Transformer</button>
          </div>
          <div class="inline-actions">
            <button id="add-layer" class="btn btn-primary">Add Layer</button>
            <button id="clear-layers" class="btn btn-danger">Clear</button>
          </div>
          <p id="preset-desc">Edit layers and parameters below.</p>
        </div>
        <div class="panel-card">
          <h2>Layers</h2>
          <div id="layer-editor"></div>
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
const presetDescription = document.querySelector('#preset-desc');
const legendList = document.querySelector('#legend-list');
const layerEditor = document.querySelector('#layer-editor');
const viewport = document.querySelector('#viewport');

const layerColors = {
  input: '#7dd3fc',
  conv: '#f9a8d4',
  pool: '#facc15',
  norm: '#c4b5fd',
  dense: '#fca5a5',
  output: '#34d399',
  token: '#93c5fd',
  positional: '#fdba74',
  attention: '#f9a8d4',
  ffn: '#a7f3d0',
  residual: '#d8b4fe',
  head: '#86efac',
};

const presets = {
  cnn: {
    description: 'CNN preset loaded. Edit names, types, and dimensions freely.',
    layers: [
      { name: 'Input 224x224x3', type: 'input', w: 6, h: 6, d: 0.6 },
      { name: 'Conv 7x7, 64', type: 'conv', w: 5.4, h: 5.4, d: 0.9 },
      { name: 'MaxPool 3x3', type: 'pool', w: 4.8, h: 4.8, d: 0.7 },
      { name: 'Conv 3x3, 128', type: 'conv', w: 4.3, h: 4.3, d: 1.0 },
      { name: 'BatchNorm', type: 'norm', w: 4.1, h: 4.1, d: 0.45 },
      { name: 'Conv 3x3, 256', type: 'conv', w: 3.5, h: 3.5, d: 1.1 },
      { name: 'Global AvgPool', type: 'pool', w: 2.7, h: 2.7, d: 0.7 },
      { name: 'Dense 1024', type: 'dense', w: 2.1, h: 2.1, d: 1.0 },
      { name: 'Output 1000', type: 'output', w: 1.6, h: 1.6, d: 0.9 },
    ],
  },
  transformer: {
    description: 'Transformer preset loaded. Tune blocks to match your model.',
    layers: [
      { name: 'Token Embedding', type: 'token', w: 6.3, h: 2.0, d: 1.0 },
      { name: 'Positional Encoding', type: 'positional', w: 6.0, h: 1.8, d: 0.7 },
      { name: 'LayerNorm', type: 'norm', w: 5.8, h: 1.6, d: 0.5 },
      { name: 'Multi-Head Attention', type: 'attention', w: 5.5, h: 2.4, d: 1.4 },
      { name: 'Residual Add', type: 'residual', w: 5.3, h: 1.6, d: 0.5 },
      { name: 'Feed Forward', type: 'ffn', w: 4.7, h: 2.2, d: 1.1 },
      { name: 'Residual Add', type: 'residual', w: 4.5, h: 1.6, d: 0.5 },
      { name: 'LayerNorm', type: 'norm', w: 4.1, h: 1.5, d: 0.4 },
      { name: 'Classifier Head', type: 'head', w: 3.5, h: 1.7, d: 0.9 },
      { name: 'Output Tokens', type: 'output', w: 3.0, h: 1.4, d: 0.7 },
    ],
  },
};

const layerTypeOptions = Object.keys(layerColors);
let architectureState = structuredClone(presets.cnn.layers);

const scene = new THREE.Scene();
scene.background = new THREE.Color('#060917');
scene.fog = new THREE.Fog('#060917', 28, 52);

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
camera.position.set(0, 4.2, 26);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
viewport.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.minDistance = 9;
controls.maxDistance = 70;
controls.target.set(0, 0, 0);

const ambient = new THREE.AmbientLight('#dbeafe', 0.6);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight('#67e8f9', 0.95);
keyLight.position.set(8, 10, 10);
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight('#f5d0fe', 0.8);
rimLight.position.set(-10, 4, -10);
scene.add(rimLight);

const grid = new THREE.GridHelper(80, 40, '#334155', '#1f2937');
grid.position.y = -4.2;
grid.material.opacity = 0.23;
grid.material.transparent = true;
scene.add(grid);

const layerGroup = new THREE.Group();
scene.add(layerGroup);

const connectionGroup = new THREE.Group();
scene.add(connectionGroup);

const guiState = {
  explode: 1.2,
  opacity: 0.9,
  glow: 0.3,
  rotate: true,
};

const gui = new GUI({ title: 'Visual Controls' });
gui.add(guiState, 'explode', 0.7, 2.0, 0.01).name('Layer Spacing');
gui.add(guiState, 'opacity', 0.25, 1, 0.01).name('Layer Opacity');
gui.add(guiState, 'glow', 0, 1.2, 0.01).name('Emissive Glow');
gui.add(guiState, 'rotate').name('Auto Orbit');

function makeTextSprite(labelText) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const context = canvas.getContext('2d');
  context.fillStyle = 'rgba(7, 10, 22, 0.8)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = 'rgba(99, 102, 241, 0.8)';
  context.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
  context.font = '700 38px Segoe UI';
  context.fillStyle = '#e2e8f0';
  context.fillText(labelText, 20, 74);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(5.5, 1.4, 1);
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

function buildArchitecture(layers) {
  updateLegend(layers);
  clearGroup(layerGroup);
  clearGroup(connectionGroup);

  const startX = -((layers.length - 1) * guiState.explode) / 2;
  const points = [];

  layers.forEach((layer, index) => {
    const geometry = new THREE.BoxGeometry(layer.w, layer.h, layer.d);
    const material = new THREE.MeshStandardMaterial({
      color: layerColors[layer.type] || '#94a3b8',
      transparent: true,
      opacity: guiState.opacity,
      roughness: 0.4,
      metalness: 0.15,
      emissive: layerColors[layer.type] || '#94a3b8',
      emissiveIntensity: guiState.glow,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = startX + index * guiState.explode;
    mesh.position.y = (Math.sin(index * 0.5) * 0.5) - 0.15;
    mesh.rotation.y = index * 0.08;
    layerGroup.add(mesh);

    const edge = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: '#e2e8f0', transparent: true, opacity: 0.45 }),
    );
    mesh.add(edge);

    const label = makeTextSprite(layer.name);
    label.position.set(0, layer.h / 2 + 1.2, 0);
    mesh.add(label);

    points.push(mesh.position.clone());
  });

  const curve = new THREE.CatmullRomCurve3(points);
  const tubeGeometry = new THREE.TubeGeometry(curve, 200, 0.06, 8, false);
  const tubeMaterial = new THREE.MeshBasicMaterial({
    color: '#93c5fd',
    transparent: true,
    opacity: 0.55,
  });
  const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
  connectionGroup.add(tube);

  camera.position.z = Math.max(20, 14 + layers.length * 1.2);
  camera.position.y = 4.2;
  controls.target.set(0, 0, 0);
}

function rerenderScene() {
  if (!architectureState.length) {
    clearGroup(layerGroup);
    clearGroup(connectionGroup);
    legendList.innerHTML = '<li>No layers defined</li>';
    return;
  }
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

function loadPreset(presetName) {
  architectureState = structuredClone(presets[presetName].layers);
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
    type: 'conv',
    w: 3,
    h: 3,
    d: 0.8,
  });
  renderLayerEditor();
  rerenderScene();
});

clearLayersBtn.addEventListener('click', () => {
  architectureState = [];
  renderLayerEditor();
  rerenderScene();
});

gui.onChange(() => {
  rerenderScene();
});

window.addEventListener('resize', resizeRenderer);

let spin = 0;
function animate() {
  requestAnimationFrame(animate);
  if (guiState.rotate) {
    spin += 0.0028;
    const radius = camera.position.length();
    camera.position.x = Math.sin(spin) * radius * 0.18;
    camera.position.z = Math.cos(spin) * radius;
  }
  controls.update();
  renderer.render(scene, camera);
}

loadPreset('cnn');
resizeRenderer();
animate();
