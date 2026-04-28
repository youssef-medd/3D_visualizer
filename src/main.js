import './style.css';

import { SceneHost } from './util/scene-host.js';
import { ArchitectureScene } from './scenes/architecture-scene.js';
import { ConvolutionScene } from './scenes/convolution-scene.js';
import { AttentionScene } from './scenes/attention-scene.js';
import { GradientDescentScene } from './scenes/gradient-descent-scene.js';
import { PoolingScene } from './scenes/pooling-scene.js';
import { PipelineScene } from './scenes/pipeline-scene.js';
import { StyleManager } from './util/style-manager.js';

import {
  presets,
  presetsByTab,
  defaultParamsForType,
  validateArchitecture,
  estimateParams,
  insightsByMode,
} from './ui/architecture-controller.js';

import { iconHTML } from './ui/icons.js';

/* ==========================================================================
   App shell — Neural Forge 3D
   --------------------------------------------------------------------------
   Seven tabs split into two groups:
     • Architectures: NN  · CNN  · Transformer
     • Theory:        Convolution · Pooling · Attention · Gradient Descent

   The architecture tabs share ONE ArchitectureScene with a `mode` switch
   and are driven by the layer editor in the right sidebar plus a global
   Style panel on the LEFT sidebar that controls every visual aspect of
   the rendering (edge colors, node diameter, layer spacing, bezier
   curves, bloom, etc).

   Theory tabs each have their own scene plus a contextual control panel
   in the left sidebar and a floating math card on the viewport.
   ========================================================================== */

const ARCH_TABS = ['nn', 'cnn', 'transformer'];
const THEORY_TABS = ['convolution', 'pooling', 'attention', 'gradientDescent', 'pipeline'];

const TAB_LABELS = {
  nn: 'Neural Net',
  cnn: 'CNN',
  transformer: 'Transformer',
  convolution: 'Convolution',
  pooling: 'Pooling',
  attention: 'Attention',
  gradientDescent: 'Gradient Descent',
  pipeline: 'ML Pipeline',
};

const TAB_SUBLABEL = {
  nn: 'Fully-connected MLPs',
  cnn: 'Spatial feature stacks',
  transformer: 'Sequence + attention',
  convolution: 'Kernel · stride · padding',
  pooling: 'Max / Avg over windows',
  attention: 'Q · K · V dot products',
  gradientDescent: 'Loss landscapes',
  pipeline: 'NN → Loss → CNN chain',
};

const LAYER_CSS_VAR = {
  input: 'var(--c-input)',
  conv: 'var(--c-conv)',
  pool: 'var(--c-pool)',
  norm: 'var(--c-norm)',
  dense: 'var(--c-dense)',
  flatten: 'var(--c-flatten)',
  output: 'var(--c-output)',
  token: 'var(--c-token)',
  positional: 'var(--c-pos)',
  attention: 'var(--c-attn)',
  ffn: 'var(--c-ffn)',
  residual: 'var(--c-residual)',
  head: 'var(--c-head)',
};
function cssVarForLayer(type) {
  return LAYER_CSS_VAR[type] || 'var(--text-3)';
}

const LAYER_TYPES_BY_MODE = {
  nn: ['input', 'dense', 'attention', 'ffn', 'residual', 'output'],
  cnn: ['input', 'conv', 'pool', 'norm', 'dense', 'flatten', 'output'],
  transformer: ['token', 'positional', 'norm', 'attention', 'ffn', 'residual', 'head', 'output'],
};

/* --------------------------------------------------------------------------
   App-wide state
   -------------------------------------------------------------------------- */
const style = new StyleManager();
const state = {
  activeTab: 'cnn',
  activePresetId: 'cnnLeNet',
  selectedLayerIdx: 0,
  expandedLayerIdx: 0,
  layers: structuredClone(presets.cnnLeNet.layers),
  // Per-tab UI state for the LEFT sidebar (which sub-section is open).
  archSidebarSection: 'library', // 'library' | 'style'
  theory: {
    convolution: { kernelSize: 3, stride: 1, padding: 1, inputSize: 8, animate: true, speed: 1.0, showNumbers: true },
    pooling:     { kernelSize: 2, stride: 2, inputSize: 4, mode: 'max', animate: true, speed: 1.0, showNumbers: true },
    attention:   { seqLen: 6, animate: true, speed: 1.0, showNumbers: true },
    gradientDescent: { learningRate: 0.05, animate: true, speed: 1.0, showNumbers: true },
    pipeline: { animate: true, speed: 1.0, showNumbers: true },
  },
};

/* --------------------------------------------------------------------------
   Custom cursor — ring + dot following mouse
   -------------------------------------------------------------------------- */
function mountCursor() {
  const ring = document.createElement('div');
  ring.id = 'cursor-ring';
  const dot  = document.createElement('div');
  dot.id  = 'cursor-dot';
  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  // Smooth ring follows with lag; dot snaps instantly
  function tickCursor() {
    requestAnimationFrame(tickCursor);
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  }
  tickCursor();

  // Grow ring over interactive elements
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('button, a, input, select, label, [data-action], .nav-tab, .preset-item, .layer-card');
    if (el) {
      ring.style.width  = '48px';
      ring.style.height = '48px';
      ring.style.borderColor = 'rgba(0,255,209,0.9)';
    } else {
      ring.style.width  = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(0,255,209,0.55)';
    }
  });
}

/* --------------------------------------------------------------------------
   CINEMATIC 3D ENTRY — perspective-projected rotating neural network
   -------------------------------------------------------------------------- */
function mountSplash() {
  const splash = document.createElement('div');
  splash.id = 'splash';
  splash.className = 'splash';

  const PILLS = [
    { label: 'Neural Networks', color: '#22d3ee' },
    { label: 'CNN',             color: '#ec4899' },
    { label: 'Transformer',     color: '#a78bfa' },
    { label: 'Convolution',     color: '#38bdf8' },
    { label: 'Pooling',         color: '#fbbf24' },
    { label: 'Gradient Descent',color: '#34d399' },
  ];

  splash.innerHTML = `
    <canvas id="splash-canvas-3d"></canvas>

    <div class="splash-scanline"></div>

    <!-- HUD corners -->
    <div class="splash-corner tl"></div>
    <div class="splash-corner tr"></div>
    <div class="splash-corner bl"></div>
    <div class="splash-corner br"></div>
    <div class="splash-hud tl">
      SYS / NEURAL-FORGE-3D<br>
      BUILD 2026.04
    </div>
    <div class="splash-hud tr">
      MODE / VISUALIZER<br>
      STATUS READY
    </div>
    <div class="splash-hud bl">LAT 0.000° · LON 0.000°</div>
    <div class="splash-hud br">GPU ACCELERATED · WebGL</div>

    <!-- Main UI -->
    <div class="splash-ui">
      <div class="splash-title-wrap">
        <div class="splash-title" id="splash-title">
          <span>Neural&nbsp;</span><span class="t-forge">Forge</span><span class="t-3d">&nbsp;3D</span>
        </div>
      </div>
      <p class="splash-tagline" id="splash-tagline">
        Interactive 3D visualizations of neural networks, CNNs,
        Transformers, and ML theory — running live in your browser.
      </p>
      <div class="splash-pills" id="splash-pills">
        ${PILLS.map(p => `
          <div class="splash-pill">
            <span class="splash-pill-dot" style="background:${p.color};color:${p.color};"></span>
            ${p.label}
          </div>`).join('')}
      </div>
      <div class="splash-launch-wrap" id="splash-launch-wrap">
        <button class="splash-launch" id="splash-enter">LAUNCH</button>
      </div>
    </div>
  `;

  document.body.appendChild(splash);

  /* ---- 3D perspective neural network ---- */
  const canvas = document.getElementById('splash-canvas-3d');
  const ctx = canvas.getContext('2d');

  const resize3D = () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize3D();
  window.addEventListener('resize', resize3D);

  // Build 3D node positions: layers of neurons
  const NET_LAYERS = [4, 7, 9, 9, 7, 4];
  const LAYER_GAP  = 260;
  const SPREAD_Y   = 220;
  const SPREAD_Z   = 90;
  const FOV        = 700;

  const nodes3d = [];
  const edges3d = [];

  const totalW = (NET_LAYERS.length - 1) * LAYER_GAP;
  NET_LAYERS.forEach((count, li) => {
    const x3 = li * LAYER_GAP - totalW / 2;
    for (let ni = 0; ni < count; ni++) {
      const t = count === 1 ? 0 : ni / (count - 1) - 0.5;
      const y3 = t * SPREAD_Y;
      const z3 = (Math.sin(ni * 1.3 + li * 0.7) * 0.5) * SPREAD_Z;
      nodes3d.push({
        x: x3, y: y3, z: z3,
        r: 3.5 + Math.random() * 2,
        phase: li * 0.55 + ni * 0.28,
        li,
        hue: 165 + li * 22,
      });
    }
  });

  // Connect adjacent layers
  let off = 0;
  for (let li = 0; li < NET_LAYERS.length - 1; li++) {
    const nA = NET_LAYERS[li], nB = NET_LAYERS[li + 1];
    const oA = off, oB = off + nA;
    for (let a = 0; a < nA; a++) {
      for (let b = 0; b < nB; b++) {
        edges3d.push({
          a: oA + a, b: oB + b,
          progress: Math.random(),
          speed: 0.004 + Math.random() * 0.006,
        });
      }
    }
    off += nA;
  }

  // Project 3D → 2D
  function project3d(x, y, z, rotY, W, H) {
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const rx = x * cosY - z * sinY;
    const rz = x * sinY + z * cosY;
    const scale = FOV / (FOV + rz + 400);
    return {
      sx: W / 2 + rx * scale,
      sy: H / 2 + y * scale * 0.85 - 60, // shift center up a bit
      scale,
      depth: (rz + 500) / 1000,
    };
  }

  let rotY = 0;
  let t3d  = 0;
  let rafId;

  function draw3D() {
    rafId = requestAnimationFrame(draw3D);
    t3d  += 0.008;
    rotY += 0.004;

    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Ambient glow behind network
    const gBg = ctx.createRadialGradient(W / 2, H / 2 - 60, 0, W / 2, H / 2 - 60, Math.min(W, H) * 0.55);
    gBg.addColorStop(0,   'rgba(0,200,160,0.06)');
    gBg.addColorStop(0.4, 'rgba(100,50,220,0.05)');
    gBg.addColorStop(1,   'rgba(2,2,8,0)');
    ctx.fillStyle = gBg;
    ctx.fillRect(0, 0, W, H);

    // Project all nodes
    const projected = nodes3d.map(n => project3d(n.x, n.y, n.z, rotY, W, H));

    // Sort by depth (back-to-front)
    const sortedEdges = [...edges3d].sort((ea, eb) => {
      const dA = (projected[ea.a].depth + projected[ea.b].depth) / 2;
      const dB = (projected[eb.a].depth + projected[eb.b].depth) / 2;
      return dA - dB;
    });

    // Draw edges
    sortedEdges.forEach(e => {
      const pA = projected[e.a], pB = projected[e.b];
      const avgDepth = (pA.depth + pB.depth) / 2;
      const alpha = Math.max(0, avgDepth * 0.18 - 0.02);

      // Static edge line
      ctx.beginPath();
      ctx.moveTo(pA.sx, pA.sy);
      ctx.lineTo(pB.sx, pB.sy);
      ctx.strokeStyle = `rgba(0,255,209,${alpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Traveling pulse
      e.progress = (e.progress + e.speed) % 1;
      const px = pA.sx + (pB.sx - pA.sx) * e.progress;
      const py = pA.sy + (pB.sy - pA.sy) * e.progress;
      const pulseR = 3 * avgDepth;
      const gPulse = ctx.createRadialGradient(px, py, 0, px, py, pulseR * 3);
      gPulse.addColorStop(0, `rgba(0,255,209,${avgDepth * 0.85})`);
      gPulse.addColorStop(1, 'rgba(0,255,209,0)');
      ctx.beginPath();
      ctx.arc(px, py, pulseR * 3, 0, Math.PI * 2);
      ctx.fillStyle = gPulse;
      ctx.fill();
    });

    // Draw nodes (sorted back-to-front)
    const sortedNodes = nodes3d
      .map((n, i) => ({ n, p: projected[i], i }))
      .sort((a, b) => a.p.depth - b.p.depth);

    sortedNodes.forEach(({ n, p }) => {
      const pulse = Math.sin(t3d * 2.2 + n.phase) * 0.22 + 0.78;
      const r = n.r * p.scale * 2.2 * pulse;
      const brightness = 35 + p.depth * 45;
      const alpha = 0.4 + p.depth * 0.6;

      // Outer glow
      const gNode = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 3.5);
      gNode.addColorStop(0, `hsla(${n.hue},90%,${brightness}%,${alpha * pulse * 0.7})`);
      gNode.addColorStop(1, `hsla(${n.hue},90%,${brightness}%,0)`);
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, r * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = gNode;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${n.hue},100%,${Math.min(80, brightness + 20)}%,${alpha})`;
      ctx.fill();

      // Specular highlight
      ctx.beginPath();
      ctx.arc(p.sx - r * 0.25, p.sy - r * 0.25, r * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${0.4 * p.depth})`;
      ctx.fill();
    });
  }

  draw3D();

  // ---- Staggered reveal of UI elements ----
  const reveal = (id, delay) => setTimeout(() => {
    const el = document.getElementById(id) || splash.querySelector('.' + id);
    if (el) el.classList.add('in');
  }, delay);

  setTimeout(() => {
    document.getElementById('splash-title').classList.add('in');
  }, 600);

  // Reveal HUD overlays
  splash.querySelectorAll('.splash-hud, .splash-corner').forEach(el => {
    setTimeout(() => el.classList.add('in'), 1200);
  });

  reveal('splash-tagline',     1000);
  reveal('splash-pills',       1500);
  reveal('splash-launch-wrap', 2200);

  // ---- Dismiss ----
  splash.querySelector('#splash-enter').addEventListener('click', () => {
    cancelAnimationFrame(rafId);
    splash.classList.add('hidden');
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      splash.remove();
    }, 950);
  });
}

mountCursor();
mountSplash();

/* --------------------------------------------------------------------------
   Mount the app shell HTML.
   -------------------------------------------------------------------------- */
const app = document.querySelector('#app');

app.innerHTML = `
  <div class="topbar">
    <div class="brand">
      <div class="brand-mark">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
          <circle cx="6" cy="7" r="2.2" fill="currentColor"/>
          <circle cx="6" cy="17" r="2.2" fill="currentColor"/>
          <circle cx="18" cy="12" r="2.2" fill="currentColor"/>
          <circle cx="12" cy="5" r="1.5" fill="currentColor" opacity=".7"/>
          <circle cx="12" cy="19" r="1.5" fill="currentColor" opacity=".7"/>
          <path d="M6 7 L18 12 M6 17 L18 12 M12 5 L18 12 M12 19 L18 12 M6 7 L12 5 M6 17 L12 19" stroke="currentColor" stroke-width="1.4" opacity=".75"/>
        </svg>
      </div>
      <div class="brand-name">Neural<em>Forge</em><span class="brand-3d">3D</span></div>
    </div>

    <nav class="nav-tabs" id="nav-tabs">
      ${ARCH_TABS.map(t => navTab(t)).join('')}
      <div class="nav-tab-divider"></div>
      ${THEORY_TABS.map(t => navTab(t)).join('')}
    </nav>

    <div class="topbar-right" id="topbar-stats"></div>
  </div>

  <div class="workspace">
    <aside class="sidebar" id="sidebar-left"></aside>

    <div class="viewport-wrap">
      <div class="viewport-toolbar" id="viewport-toolbar"></div>
      <div class="canvas-host" id="canvas-host"></div>
      <div class="viewport-corner" id="viewport-corner"></div>
      <div class="viewport-overlay-bottom" id="viewport-legend"></div>
      <div class="theory-overlay" id="theory-overlay" style="display:none"></div>
    </div>

    <aside class="sidebar right" id="sidebar-right"></aside>
  </div>
`;

function navTab(id) {
  return `
    <button class="nav-tab" data-tab="${id}">
      <span class="nav-tab-dot"></span>
      <span>${TAB_LABELS[id]}</span>
    </button>
  `;
}

/* --------------------------------------------------------------------------
   Wire up the SceneHost and register all five scenes.
   -------------------------------------------------------------------------- */
const canvasHost = document.querySelector('#canvas-host');
const sceneHost = new SceneHost(canvasHost);

const archScene = new ArchitectureScene({ style });
const convScene = new ConvolutionScene();
const attnScene = new AttentionScene();
const gradScene = new GradientDescentScene();
const poolScene = new PoolingScene();
const pipeScene = new PipelineScene();

sceneHost.register('architecture', archScene);
sceneHost.register('convolution', convScene);
sceneHost.register('attention', attnScene);
sceneHost.register('gradientDescent', gradScene);
sceneHost.register('pooling', poolScene);
sceneHost.register('pipeline', pipeScene);

// React to global style changes that affect the renderer (bloom, etc.)
style.subscribe((s, partial) => {
  if ('cinematicGlow' in partial) sceneHost.setBloomEnabled(s.cinematicGlow);
  if ('bloomStrength' in partial) sceneHost.setBloom({ strength: s.bloomStrength });
});
sceneHost.setBloomEnabled(style.get('cinematicGlow'));
sceneHost.setBloom({ strength: style.get('bloomStrength') });

/* --------------------------------------------------------------------------
   Tab navigation
   -------------------------------------------------------------------------- */
document.querySelector('#nav-tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('.nav-tab');
  if (!btn) return;
  const tab = btn.dataset.tab;
  if (!tab || tab === state.activeTab) return;
  switchTab(tab);
});

function switchTab(tab) {
  state.activeTab = tab;

  if (ARCH_TABS.includes(tab)) {
    const presetIds = presetsByTab[tab];
    if (!presetIds.includes(state.activePresetId)) {
      state.activePresetId = presetIds[0];
      state.layers = structuredClone(presets[presetIds[0]].layers);
      state.selectedLayerIdx = 0;
      state.expandedLayerIdx = 0;
    }
    archScene.setOptions({ mode: tab });
    archScene.build(state.layers);
    sceneHost.activate('architecture');
  } else {
    const opts = state.theory[tab];
    if (tab === 'convolution') convScene.setOptions(opts);
    else if (tab === 'attention') attnScene.setOptions(opts);
    else if (tab === 'gradientDescent') gradScene.setOptions(opts);
    else if (tab === 'pooling') poolScene.setOptions(opts);
    else if (tab === 'pipeline') pipeScene.setOptions(opts);
    sceneHost.activate(tab);
  }

  rerenderAll();
}

/* --------------------------------------------------------------------------
   Top-level render — dispatches to mode-specific renderers.
   -------------------------------------------------------------------------- */
function rerenderAll() {
  document.querySelectorAll('.nav-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === state.activeTab);
  });

  const isArch = ARCH_TABS.includes(state.activeTab);
  document.querySelector('#theory-overlay').style.display = isArch ? 'none' : 'block';

  renderTopbarStats();
  renderViewportToolbar();
  renderViewportCorner();
  renderLegend();

  if (isArch) {
    renderArchSidebarLeft();
    renderArchSidebarRight();
  } else {
    renderTheorySidebarLeft();
    renderTheorySidebarRight();
    renderTheoryOverlay();
  }
}

/* ==========================================================================
   TOPBAR / VIEWPORT CHROME
   ========================================================================== */

function renderTopbarStats() {
  const el = document.querySelector('#topbar-stats');
  if (ARCH_TABS.includes(state.activeTab)) {
    const v = validateArchitecture(state.layers, state.activeTab);
    const params = estimateParams(state.layers, state.activeTab);
    const depth = state.layers.length;
    const totalNeurons = state.layers.reduce((s, l) => s + (l.params?.neurons ?? 0), 0);

    let chipDot = 'chip-dot';
    let chipText = 'Valid';
    if (v.status === 'warn') { chipDot += ' warn'; chipText = 'Warnings'; }
    if (v.status === 'invalid') { chipDot += ' err'; chipText = 'Invalid'; }

    el.innerHTML = `
      <div class="chip"><strong>${depth}</strong> layers</div>
      <div class="chip"><strong>${totalNeurons}</strong> neurons</div>
      <div class="chip"><strong>${params}</strong> params</div>
      <div class="chip"><span class="${chipDot}"></span>${chipText}</div>
    `;
  } else {
    el.innerHTML = `
      <div class="chip"><strong>${TAB_LABELS[state.activeTab]}</strong></div>
      <div class="chip">${TAB_SUBLABEL[state.activeTab]}</div>
    `;
  }
}

function renderViewportToolbar() {
  const el = document.querySelector('#viewport-toolbar');
  if (ARCH_TABS.includes(state.activeTab)) {
    const v = validateArchitecture(state.layers, state.activeTab);
    const params = estimateParams(state.layers, state.activeTab);
    const statusClass = v.status === 'valid' ? 'ok' : (v.status === 'invalid' ? 'err' : '');
    const statusLabel = v.status === 'valid' ? 'Valid' : v.status === 'invalid' ? 'Invalid' : 'Warnings';

    el.innerHTML = `
      <div class="stat"><span class="stat-label">Tab</span><span class="stat-value">${TAB_LABELS[state.activeTab]}</span></div>
      <div class="stat"><span class="stat-label">Layers</span><span class="stat-value">${state.layers.length}</span></div>
      <div class="stat"><span class="stat-label">Params</span><span class="stat-value">${params}</span></div>
      <div class="stat"><span class="stat-label">Status</span><span class="stat-value ${statusClass}">${statusLabel}</span></div>
    `;
  } else {
    const o = state.theory[state.activeTab];
    let stats = '';
    if (state.activeTab === 'convolution') {
      stats = `
        <div class="stat"><span class="stat-label">Input</span><span class="stat-value">${o.inputSize}×${o.inputSize}</span></div>
        <div class="stat"><span class="stat-label">Kernel</span><span class="stat-value">${o.kernelSize}×${o.kernelSize}</span></div>
        <div class="stat"><span class="stat-label">Stride</span><span class="stat-value">${o.stride}</span></div>
        <div class="stat"><span class="stat-label">Padding</span><span class="stat-value">${o.padding}</span></div>
      `;
    } else if (state.activeTab === 'pooling') {
      const out = Math.max(0, Math.floor((o.inputSize - o.kernelSize) / o.stride) + 1);
      stats = `
        <div class="stat"><span class="stat-label">Input</span><span class="stat-value">${o.inputSize}×${o.inputSize}</span></div>
        <div class="stat"><span class="stat-label">Window</span><span class="stat-value">${o.kernelSize}×${o.kernelSize}</span></div>
        <div class="stat"><span class="stat-label">Stride</span><span class="stat-value">${o.stride}</span></div>
        <div class="stat"><span class="stat-label">Output</span><span class="stat-value">${out}×${out}</span></div>
        <div class="stat"><span class="stat-label">Op</span><span class="stat-value">${o.mode.toUpperCase()}</span></div>
      `;
    } else if (state.activeTab === 'attention') {
      stats = `
        <div class="stat"><span class="stat-label">Tokens</span><span class="stat-value">${o.seqLen}</span></div>
        <div class="stat"><span class="stat-label">Mode</span><span class="stat-value">Self-attention</span></div>
      `;
    } else if (state.activeTab === 'gradientDescent') {
      stats = `
        <div class="stat"><span class="stat-label">η</span><span class="stat-value">${o.learningRate.toFixed(3)}</span></div>
        <div class="stat"><span class="stat-label">Optimizers</span><span class="stat-value">SGD · Momentum · Adam</span></div>
      `;
    }
    el.innerHTML = `
      <div class="stat"><span class="stat-label">Theory</span><span class="stat-value">${TAB_LABELS[state.activeTab]}</span></div>
      ${stats}
    `;
  }
}

function renderViewportCorner() {
  const el = document.querySelector('#viewport-corner');
  if (ARCH_TABS.includes(state.activeTab)) {
    el.innerHTML = `
      <button class="btn btn-icon" data-action="randomize" title="Randomize layout">${iconHTML('randomize')}</button>
      <button class="btn btn-icon" data-action="reset-view" title="Reset view">${iconHTML('reset')}</button>
    `;
  } else {
    el.innerHTML = `
      <button class="btn btn-icon" data-action="reset-theory" title="Reset animation">${iconHTML('reset_play')}</button>
    `;
  }

  el.onclick = (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === 'randomize') randomizeArch();
    else if (action === 'reset-view') resetCamera();
    else if (action === 'reset-theory') resetTheoryScene();
  };
}

function renderLegend() {
  const el = document.querySelector('#viewport-legend');
  if (ARCH_TABS.includes(state.activeTab)) {
    if (state.activeTab === 'cnn') {
      el.innerHTML = `
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-input);color:var(--c-input)"></span>Input</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-conv);color:var(--c-conv)"></span>Conv</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-pool);color:var(--c-pool)"></span>Pool</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-flatten);color:var(--c-flatten)"></span>Flatten</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-dense);color:var(--c-dense)"></span>Dense</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-output);color:var(--c-output)"></span>Output</span>
      `;
    } else if (state.activeTab === 'transformer') {
      el.innerHTML = `
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-token);color:var(--c-token)"></span>Token</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-pos);color:var(--c-pos)"></span>Pos</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-norm);color:var(--c-norm)"></span>Norm</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-attn);color:var(--c-attn)"></span>Attention</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-ffn);color:var(--c-ffn)"></span>FFN</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-residual);color:var(--c-residual)"></span>Residual</span>
      `;
    } else {
      el.innerHTML = `
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-input);color:var(--c-input)"></span>Input</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-dense);color:var(--c-dense)"></span>Dense</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-attn);color:var(--c-attn)"></span>Attention</span>
        <span class="legend-divider"></span>
        <span class="legend-item"><span class="legend-swatch" style="background:var(--c-output);color:var(--c-output)"></span>Output</span>
      `;
    }
  } else if (state.activeTab === 'convolution') {
    el.innerHTML = `
      <span class="legend-item"><span class="legend-swatch" style="background:#38bdf8;color:#38bdf8"></span>Input map</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#f472b6;color:#f472b6"></span>Kernel window</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#34d399;color:#34d399"></span>Output activations</span>
    `;
  } else if (state.activeTab === 'pooling') {
    el.innerHTML = `
      <span class="legend-item"><span class="legend-swatch" style="background:#38bdf8;color:#38bdf8"></span>Input cells (numbers)</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#fbbf24;color:#fbbf24"></span>Pooling window</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#fb7185;color:#fb7185"></span>Output (max/avg)</span>
    `;
  } else if (state.activeTab === 'attention') {
    el.innerHTML = `
      <span class="legend-item"><span class="legend-swatch" style="background:#67e8f9;color:#67e8f9"></span>Queries</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#fb923c;color:#fb923c"></span>Keys</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#a78bfa;color:#a78bfa"></span>Values</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#4ade80;color:#4ade80"></span>Output</span>
    `;
  } else if (state.activeTab === 'gradientDescent') {
    el.innerHTML = `
      <span class="legend-item"><span class="legend-swatch" style="background:#38bdf8;color:#38bdf8"></span>SGD</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#fbbf24;color:#fbbf24"></span>Momentum</span>
      <span class="legend-divider"></span>
      <span class="legend-item"><span class="legend-swatch" style="background:#34d399;color:#34d399"></span>Adam</span>
    `;
  }
}

/* ==========================================================================
   ARCHITECTURE MODE — left sidebar (Library + Style)
   ========================================================================== */

function renderArchSidebarLeft() {
  const left = document.querySelector('#sidebar-left');
  const presetIds = presetsByTab[state.activeTab];
  const sec = state.archSidebarSection;

  left.innerHTML = `
    <div class="seg" style="margin-bottom: 16px; width: 100%;">
      <button class="seg-item ${sec === 'library' ? 'active' : ''}" data-section="library" style="flex:1;">Library</button>
      <button class="seg-item ${sec === 'style' ? 'active' : ''}" data-section="style" style="flex:1;">Style</button>
    </div>
    <div id="sidebar-content"></div>
  `;

  // Section selector wiring
  left.querySelectorAll('[data-section]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.archSidebarSection = btn.dataset.section;
      renderArchSidebarLeft();
    });
  });

  const content = left.querySelector('#sidebar-content');
  if (sec === 'library') {
    content.innerHTML = renderLibrarySection(presetIds);
    wireLibrarySection(content);
  } else {
    content.innerHTML = renderStyleSection();
    wireStyleSection(content);
  }
}

function renderLibrarySection(presetIds) {
  return `
    <div class="section">
      <div class="section-title">${iconHTML('library')}<span>Architectures</span></div>
      <div class="preset-list" id="preset-list">
        ${presetIds.map(id => `
          <button class="preset-item ${id === state.activePresetId ? 'active' : ''}" data-preset="${id}">
            <div class="preset-icon"></div>
            <div class="preset-item-content">
              <div class="preset-item-name">${presets[id].label}</div>
              <div class="preset-item-desc">${presets[id].description}</div>
            </div>
          </button>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-title">${iconHTML('insight')}<span>ML Insights</span></div>
      ${insightsByMode[state.activeTab].map(t => `<div class="insight">${t}</div>`).join('')}
    </div>
  `;
}

function wireLibrarySection(root) {
  root.querySelector('#preset-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.preset-item');
    if (!btn) return;
    loadPreset(btn.dataset.preset);
  });
}

/**
 * The Style section is the big delivery for user request #7. Every
 * checkbox / range / color in here writes to the StyleManager, which
 * notifies the active scene, which restyles in place.
 */
function renderStyleSection() {
  const s = style.state;
  const isCnn = state.activeTab === 'cnn';

  // Sub-section: General style (edges, nodes, layout)
  const general = `
    <div class="section">
      <div class="section-title">${iconHTML('style')}<span>Edges & Nodes</span></div>
      <div class="card">
        ${toggle('Edge width by weight', 'edgeWidthByWeight', s.edgeWidthByWeight)}
        ${range('Edge width (px)', 'edgeWidth', s.edgeWidth, 0.5, 6, 0.1)}
        ${toggle('Edge opacity by weight', 'edgeOpacityByWeight', s.edgeOpacityByWeight)}
        ${range('Edge opacity', 'edgeOpacity', s.edgeOpacity, 0.05, 1, 0.05)}
        ${toggle('Edge color by weight', 'edgeColorByWeight', s.edgeColorByWeight)}
        ${color('Positive edge color', 'positiveEdgeColor', s.positiveEdgeColor)}
        ${color('Negative edge color', 'negativeEdgeColor', s.negativeEdgeColor)}
        ${color('Default edge color', 'defaultEdgeColor', s.defaultEdgeColor)}
        ${toggle('Use Bezier curves', 'useBezierCurves', s.useBezierCurves)}
        ${toggle('Show arrowheads', 'showArrowheads', s.showArrowheads)}
        ${toggle('Show frustum links (kernel area)', 'showFrustumLinks', s.showFrustumLinks)}
      </div>

      <div class="subheader">Nodes</div>
      <div class="card">
        ${range('Node diameter', 'nodeDiameter', s.nodeDiameter, 0.1, 0.9, 0.02)}
        ${color('Node color', 'nodeColor', s.nodeColor)}
        ${color('Node border color', 'nodeBorderColor', s.nodeBorderColor)}
        ${segment('Node style', 'nodeStyle', s.nodeStyle, [['solid','solid'],['empty','empty']])}
        ${toggle('Show bias units', 'showBiasUnits', s.showBiasUnits)}
      </div>

      <div class="subheader">Layout</div>
      <div class="card">
        ${range('Layer spacing', 'layerSpacing', s.layerSpacing, 1.4, 6.0, 0.1)}
        ${segment('Direction', 'direction', s.direction, [['horizontal','horizontal'],['vertical','vertical']])}
        ${toggle('Show layer labels', 'showLayerLabels', s.showLayerLabels)}
        ${toggle('Show flatten layer (CNN)', 'showFlattenLayer', s.showFlattenLayer)}
      </div>
    </div>
  `;

  // CNN/Tensor-specific style controls
  const cnnPanel = isCnn ? `
    <div class="section">
      <div class="section-title">${iconHTML('cube')}<span>Conv Filter Style</span></div>
      <div class="card">
        ${color('Filter color 1 (start)', 'convColor1', s.convColor1)}
        ${color('Filter color 2 (end)', 'convColor2', s.convColor2)}
        ${range('Filter opacity', 'filterOpacity', s.filterOpacity, 0.1, 1.0, 0.02)}
        ${range('Border width', 'borderWidth', s.borderWidth, 0, 3, 0.1)}
        ${range('Spacing between filters', 'spacingBetweenFilters', s.spacingBetweenFilters, 0, 0.4, 0.01)}
        ${toggle('√ Vector length scaling', 'sqrtVectorLengthScaling', s.sqrtVectorLengthScaling)}
        ${range('Length size scaling', 'lengthSizeScaling', s.lengthSizeScaling, 0.4, 2.0, 0.05)}
      </div>

      <div class="subheader">Tensor Display</div>
      <div class="card">
        ${range('Tensor opacity', 'tensorOpacity', s.tensorOpacity, 0.1, 1.0, 0.02)}
        ${range('Spacing between layers', 'spacingBetweenLayers', s.spacingBetweenLayers, 1.4, 6.0, 0.1, true)}
        ${toggle('Log feature-map depth scaling', 'logFeatureMapDepthScaling', s.logFeatureMapDepthScaling)}
        ${range('Depth size scaling', 'depthSizeScaling', s.depthSizeScaling, 1, 20, 0.5)}
        ${toggle('Log feature-map width scaling', 'logFeatureMapWidthScaling', s.logFeatureMapWidthScaling)}
        ${range('Width size scaling', 'widthSizeScaling', s.widthSizeScaling, 1, 20, 0.5)}
        ${toggle('Show tensor dimensions', 'showTensorDimensions', s.showTensorDimensions)}
        ${toggle('Show conv dimensions', 'showConvDimensions', s.showConvDimensions)}
        ${range('Font size', 'fontSize', s.fontSize, 16, 48, 1)}
      </div>
    </div>
  ` : '';

  // Cinematic / global
  const cinematic = `
    <div class="section">
      <div class="section-title">${iconHTML('sparkle')}<span>Cinematic</span></div>
      <div class="card">
        ${toggle('Cinematic glow (bloom)', 'cinematicGlow', s.cinematicGlow)}
        ${range('Bloom strength', 'bloomStrength', s.bloomStrength, 0, 1.5, 0.05)}
        ${range('Pulse speed', 'pulseSpeed', s.pulseSpeed, 0, 3, 0.05)}
        ${toggle('Auto orbit', 'autoOrbit', s.autoOrbit)}
        ${toggle('Wireframe blocks', 'wireframe', s.wireframe)}
      </div>
    </div>
  `;

  return general + cnnPanel + cinematic;
}

function wireStyleSection(root) {
  // Generic helper: any input with [data-style-key]
  root.querySelectorAll('[data-style-key]').forEach((input) => {
    const key = input.dataset.styleKey;
    const event = (input.type === 'checkbox' || input.type === 'color') ? 'change' : 'input';
    input.addEventListener(event, () => {
      let val;
      if (input.type === 'checkbox') val = input.checked;
      else if (input.type === 'range' || input.type === 'number') val = parseFloat(input.value);
      else val = input.value;

      // Update the visible value chip if any
      const valueEl = input.parentElement?.querySelector('.control-value');
      if (valueEl && (input.type === 'range' || input.type === 'number')) {
        const fixed = Math.abs(val) < 1 ? 2 : (Number.isInteger(val) ? 0 : 2);
        valueEl.textContent = val.toFixed(fixed);
      }
      // Special: spacingBetweenLayers also drives layerSpacing for arch scene
      const update = { [key]: val };
      if (key === 'spacingBetweenLayers') update.layerSpacing = val;
      style.set(update);
    });
  });

  // Segmented buttons
  root.querySelectorAll('.seg[data-style-seg]').forEach((seg) => {
    const key = seg.dataset.styleSeg;
    seg.querySelectorAll('.seg-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        seg.querySelectorAll('.seg-item').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        style.set({ [key]: btn.dataset.value });
      });
    });
  });
}

function range(label, key, value, min, max, step, mirror = false) {
  const display = step >= 1 ? Math.round(value).toString() : value.toFixed(2);
  return `
    <div class="control">
      <div class="control-label">${label}<span class="control-value">${display}</span></div>
      <input type="range" data-style-key="${key}" min="${min}" max="${max}" step="${step}" value="${value}">
    </div>
  `;
}

function toggle(label, key, checked) {
  return `
    <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
      <div class="control-label" style="margin-bottom:0;">${label}</div>
      <label class="toggle">
        <input type="checkbox" data-style-key="${key}" ${checked ? 'checked' : ''}>
        <span class="toggle-track"></span>
      </label>
    </div>
  `;
}

function color(label, key, value) {
  return `
    <div class="color-row">
      <label>${label}</label>
      <input type="color" data-style-key="${key}" value="${value}">
    </div>
  `;
}

function segment(label, key, value, options) {
  return `
    <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
      <div class="control-label" style="margin-bottom:0;">${label}</div>
      <div class="seg" data-style-seg="${key}">
        ${options.map(([v, lab]) => `
          <button class="seg-item ${v === value ? 'active' : ''}" data-value="${v}">${lab}</button>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   ARCHITECTURE MODE — right sidebar (layer editor + diagnostics)
   ========================================================================== */

function renderArchSidebarRight() {
  const right = document.querySelector('#sidebar-right');
  const v = validateArchitecture(state.layers, state.activeTab);

  right.innerHTML = `
    <div class="section">
      <div class="section-title">${iconHTML('layers')}<span>Layers</span></div>
      <div class="btn-row" style="margin-bottom:10px;">
        <button class="btn btn-primary btn-compact" id="btn-add-layer">${iconHTML('add')}<span>Add Layer</span></button>
        <button class="btn btn-danger btn-compact btn-icon" id="btn-clear-layers" title="Clear all">${iconHTML('trash')}</button>
      </div>
      <div id="layer-list"></div>
    </div>

    <div class="section">
      <div class="section-title">${iconHTML('diagnostics')}<span>Diagnostics</span></div>
      <div id="diag-list"></div>
    </div>
  `;

  // ---- Layer list ----
  const layerListEl = right.querySelector('#layer-list');
  layerListEl.innerHTML = state.layers.map((layer, i) => {
    const shape = v.shapes[i]?.descriptor || '';
    const isExpanded = i === state.expandedLayerIdx;
    const isSelected = i === state.selectedLayerIdx;
    const allowedTypes = LAYER_TYPES_BY_MODE[state.activeTab];
    return `
      <div class="layer-card ${isSelected ? 'selected' : ''} ${isExpanded ? 'expanded' : ''}"
           data-idx="${i}" style="--swatch: ${cssVarForLayer(layer.type)};">
        <div class="layer-card-head" data-action="toggle">
          <div class="layer-card-num">${i + 1}</div>
          <div class="layer-card-title">
            <span>${layer.name}</span>
            <span class="layer-card-type">${layer.type}</span>
          </div>
          <div class="layer-card-actions">
            <button class="btn btn-icon" data-action="up" title="Move up" ${i === 0 ? 'disabled' : ''}>${iconHTML('up')}</button>
            <button class="btn btn-icon" data-action="down" title="Move down" ${i === state.layers.length - 1 ? 'disabled' : ''}>${iconHTML('down')}</button>
            <button class="btn btn-icon" data-action="del" title="Delete" ${state.layers.length === 1 ? 'disabled' : ''}>${iconHTML('trash')}</button>
          </div>
        </div>
        <div class="layer-card-detail">
          <div class="field-text">
            <label>Name</label>
            <input data-field="name" type="text" value="${layer.name}">
          </div>
          <div class="field-text">
            <label>Type</label>
            <select data-field="type">
              ${allowedTypes.map(t => `<option value="${t}" ${t === layer.type ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
          </div>
          ${renderLayerParams(layer)}
          ${shape ? `<div class="layer-shape">${shape}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Layer card events (delegated)
  layerListEl.addEventListener('click', (e) => {
    const card = e.target.closest('.layer-card');
    if (!card) return;
    const idx = parseInt(card.dataset.idx, 10);
    const btn = e.target.closest('button[data-action]');
    if (btn) {
      const action = btn.dataset.action;
      if (action === 'up' && idx > 0) {
        [state.layers[idx - 1], state.layers[idx]] = [state.layers[idx], state.layers[idx - 1]];
        state.selectedLayerIdx = idx - 1;
        state.expandedLayerIdx = idx - 1;
      } else if (action === 'down' && idx < state.layers.length - 1) {
        [state.layers[idx + 1], state.layers[idx]] = [state.layers[idx], state.layers[idx + 1]];
        state.selectedLayerIdx = idx + 1;
        state.expandedLayerIdx = idx + 1;
      } else if (action === 'del' && state.layers.length > 1) {
        state.layers.splice(idx, 1);
        state.selectedLayerIdx = Math.min(state.selectedLayerIdx, state.layers.length - 1);
        state.expandedLayerIdx = -1;
      }
      e.stopPropagation();
      rebuildAndRerender();
      return;
    }

    const head = e.target.closest('[data-action="toggle"]');
    if (head) {
      state.selectedLayerIdx = idx;
      state.expandedLayerIdx = state.expandedLayerIdx === idx ? -1 : idx;
      rerenderAll();
    }
  });

  // Field changes
  layerListEl.addEventListener('input', (e) => {
    const card = e.target.closest('.layer-card');
    if (!card) return;
    const idx = parseInt(card.dataset.idx, 10);
    const field = e.target.dataset.field;
    const paramKey = e.target.dataset.param;
    if (field) {
      if (field === 'type') {
        state.layers[idx].type = e.target.value;
        state.layers[idx].params = defaultParamsForType(e.target.value);
      } else if (field === 'name') {
        state.layers[idx].name = e.target.value;
      }
      rebuildAndRerender();
    } else if (paramKey) {
      const val = e.target.type === 'number' || e.target.type === 'range'
        ? parseFloat(e.target.value)
        : e.target.value;
      state.layers[idx].params = { ...(state.layers[idx].params || {}), [paramKey]: isNaN(val) ? e.target.value : val };
      rebuildAndRerender();
    }
  });
  layerListEl.addEventListener('change', (e) => {
    if (e.target.dataset.field === 'type') {
      rerenderAll();
    }
  });

  // ---- Add layer / clear all ----
  right.querySelector('#btn-add-layer').addEventListener('click', () => {
    const allowed = LAYER_TYPES_BY_MODE[state.activeTab];
    const defaultType = state.activeTab === 'cnn' ? 'conv' : state.activeTab === 'transformer' ? 'attention' : 'dense';
    const t = allowed.includes(defaultType) ? defaultType : allowed[0];
    state.layers.push({
      name: t.charAt(0).toUpperCase() + t.slice(1),
      type: t,
      w: 3, h: 3, d: 0.8,
      params: defaultParamsForType(t),
    });
    state.selectedLayerIdx = state.layers.length - 1;
    state.expandedLayerIdx = state.layers.length - 1;
    rebuildAndRerender();
  });
  right.querySelector('#btn-clear-layers').addEventListener('click', () => {
    if (state.layers.length <= 1) return;
    state.layers = [state.layers[0]];
    state.selectedLayerIdx = 0;
    state.expandedLayerIdx = 0;
    rebuildAndRerender();
  });

  // ---- Diagnostics ----
  const diagEl = right.querySelector('#diag-list');
  if (v.messages.length === 0 || (v.messages.length === 1 && v.messages[0].level === 'ok')) {
    diagEl.innerHTML = `<div class="diag ok">No validation issues. Architecture looks healthy.</div>`;
  } else {
    diagEl.innerHTML = v.messages.map(m => `<div class="diag ${m.level}">${m.text}</div>`).join('');
  }
}

function renderLayerParams(layer) {
  const params = layer.params || {};
  const order = ['neurons', 'units', 'k', 's', 'p', 'filters', 'h', 'w', 'c', 'classes', 'heads', 'hidden', 'seq', 'dModel', 'activation'];
  const keys = Object.keys(params).sort((a, b) => {
    const ia = order.indexOf(a); const ib = order.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
  if (keys.length === 0) return '';
  return `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;">
      ${keys.map(k => {
        const v = params[k];
        if (typeof v === 'number') {
          return `<div class="field"><label>${k}</label><input type="number" data-param="${k}" value="${v}" min="0" step="1"></div>`;
        }
        if (typeof v === 'string') {
          if (k === 'activation') {
            const opts = ['Linear', 'ReLU', 'GELU', 'Tanh', 'Sigmoid', 'Softmax'];
            return `<div class="field"><label>${k}</label><select data-param="${k}">${opts.map(o => `<option ${o === v ? 'selected' : ''}>${o}</option>`).join('')}</select></div>`;
          }
          return `<div class="field"><label>${k}</label><input type="text" data-param="${k}" value="${v}"></div>`;
        }
        return '';
      }).join('')}
    </div>
  `;
}

/* ==========================================================================
   THEORY MODE — sidebars + overlay
   ========================================================================== */

function renderTheorySidebarLeft() {
  const left = document.querySelector('#sidebar-left');
  const tab = state.activeTab;

  if (tab === 'convolution') {
    const o = state.theory.convolution;
    left.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('controls')}<span>Convolution Controls</span></div>
        <div class="card">
          ${rangeControlGeneric('Input size', 'inputSize', o.inputSize, 4, 14, 1, 'convolution')}
          ${rangeControlGeneric('Kernel size', 'kernelSize', o.kernelSize, 1, 7, 2, 'convolution')}
          ${rangeControlGeneric('Stride', 'stride', o.stride, 1, 4, 1, 'convolution')}
          ${rangeControlGeneric('Padding', 'padding', o.padding, 0, 3, 1, 'convolution')}
          ${rangeControlGeneric('Speed', 'speed', o.speed, 0.2, 3.0, 0.1, 'convolution')}
          ${theoryToggle('Animate', 'animate', o.animate, 'convolution')}
          ${theoryToggle('Show numbers', 'showNumbers', o.showNumbers, 'convolution')}
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>What to look for</span></div>
        <div class="insight">The kernel slides across the input, computing one weighted-sum activation per position.</div>
        <div class="insight">Larger strides skip positions and shrink the output. Padding lets the kernel reach the edges.</div>
        <div class="insight">Output size = ⌊(N + 2P − K) / S⌋ + 1.</div>
      </div>
    `;
  } else if (tab === 'pooling') {
    const o = state.theory.pooling;
    left.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('controls')}<span>Pooling Controls</span></div>
        <div class="card">
          ${rangeControlGeneric('Input size', 'inputSize', o.inputSize, 2, 8, 1, 'pooling')}
          ${rangeControlGeneric('Window size', 'kernelSize', o.kernelSize, 1, 4, 1, 'pooling')}
          ${rangeControlGeneric('Stride', 'stride', o.stride, 1, 4, 1, 'pooling')}
          ${rangeControlGeneric('Speed', 'speed', o.speed, 0.2, 3.0, 0.1, 'pooling')}
          <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
            <div class="control-label" style="margin-bottom:0;">Mode</div>
            <div class="seg" id="pool-mode-seg">
              <button class="seg-item ${o.mode === 'max' ? 'active' : ''}" data-mode="max">MAX</button>
              <button class="seg-item ${o.mode === 'avg' ? 'active' : ''}" data-mode="avg">AVG</button>
            </div>
          </div>
          ${theoryToggle('Animate', 'animate', o.animate, 'pooling')}
          ${theoryToggle('Show numbers', 'showNumbers', o.showNumbers, 'pooling')}
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>What to look for</span></div>
        <div class="insight">Each input cell shows its value as a tall coloured block. The pooling window slides across them.</div>
        <div class="insight">Max-pool picks the highest number in the window. Avg-pool computes the mean — see how the output cell's number reflects the operation.</div>
        <div class="insight">Output size = ⌊(N − K) / S⌋ + 1. With K=S the windows tile the input without overlap.</div>
      </div>
    `;
    // Wire mode segmented buttons
    left.querySelector('#pool-mode-seg').addEventListener('click', (e) => {
      const btn = e.target.closest('.seg-item');
      if (!btn) return;
      const mode = btn.dataset.mode;
      state.theory.pooling.mode = mode;
      poolScene.setOptions({ mode });
      renderTheorySidebarLeft();
      renderViewportToolbar();
      renderTopbarStats();
    });
  } else if (tab === 'attention') {
    const o = state.theory.attention;
    left.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('controls')}<span>Attention Controls</span></div>
        <div class="card">
          ${rangeControlGeneric('Sequence length', 'seqLen', o.seqLen, 3, 10, 1, 'attention')}
          ${rangeControlGeneric('Speed', 'speed', o.speed, 0.2, 3.0, 0.1, 'attention')}
          ${theoryToggle('Animate', 'animate', o.animate, 'attention')}
          ${theoryToggle('Show numbers', 'showNumbers', o.showNumbers, 'attention')}
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>What to look for</span></div>
        <div class="insight">Each query token (cyan) compares with every key token (orange) to produce a row of scores.</div>
        <div class="insight">After softmax, those scores become weights that mix the value tokens (purple) into one output (green).</div>
        <div class="insight">The active row highlight shows attention being computed for one query at a time.</div>
      </div>
    `;
  } else if (tab === 'gradientDescent') {
    const o = state.theory.gradientDescent;
    left.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('controls')}<span>Optimizer Controls</span></div>
        <div class="card">
          ${rangeControlGeneric('Learning rate', 'learningRate', o.learningRate, 0.005, 0.25, 0.005, 'gradientDescent')}
          ${rangeControlGeneric('Speed', 'speed', o.speed, 0.2, 3.0, 0.1, 'gradientDescent')}
          ${theoryToggle('Animate', 'animate', o.animate, 'gradientDescent')}
          ${theoryToggle('Show numbers', 'showNumbers', o.showNumbers, 'gradientDescent')}
        </div>
        <div class="btn-row" style="margin-top:12px;">
          <button class="btn btn-primary" id="btn-reset-optim">${iconHTML('reset_play')}<span>Reset optimizers</span></button>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>What to look for</span></div>
        <div class="insight">SGD (cyan) follows the steepest descent and gets stuck oscillating in narrow valleys.</div>
        <div class="insight">Momentum (yellow) accumulates velocity, skating past local wiggles.</div>
        <div class="insight">Adam (green) adapts the step per parameter, often the smoothest path to a minimum.</div>
      </div>
    `;
    left.querySelector('#btn-reset-optim').addEventListener('click', () => {
      gradScene.reset();
    });
  } else if (tab === 'pipeline') {
    const o = state.theory.pipeline;
    left.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('controls')}<span>Pipeline Controls</span></div>
        <div class="card">
          ${rangeControlGeneric('Speed', 'speed', o.speed, 0.2, 3.0, 0.1, 'pipeline')}
          ${theoryToggle('Animate', 'animate', o.animate, 'pipeline')}
          ${theoryToggle('Show labels', 'showNumbers', o.showNumbers, 'pipeline')}
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>What to look for</span></div>
        <div class="insight">Left: fully-connected NN. Pulsing nodes signal forward propagation through layers.</div>
        <div class="insight">Center: the loss scalar L(θ). All training optimizes this number toward zero.</div>
        <div class="insight">Right: CNN layers (Conv → Pool → FC). Gradient arrows flow backwards — that's backpropagation updating weights.</div>
      </div>
    `;
  }

  // Wire theory range/toggle inputs
  left.querySelectorAll('input[type="range"][data-theory-key]').forEach(input => {
    input.addEventListener('input', () => {
      const key = input.dataset.theoryKey;
      const tab = input.dataset.tab;
      const val = parseFloat(input.value);
      state.theory[tab][key] = val;
      input.parentElement.querySelector('.control-value').textContent =
        Number.isInteger(val) ? val.toString() : val.toFixed(key === 'learningRate' ? 3 : 2);
      applyTheoryOptions(tab);
      renderViewportToolbar();
      renderTopbarStats();
    });
  });
  left.querySelectorAll('input[type="checkbox"][data-theory-key]').forEach(input => {
    input.addEventListener('change', () => {
      const key = input.dataset.theoryKey;
      const tab = input.dataset.tab;
      state.theory[tab][key] = input.checked;
      applyTheoryOptions(tab);
    });
  });
}

function rangeControlGeneric(label, key, value, min, max, step, tab) {
  const display = Number.isInteger(value) && step >= 1
    ? value.toString()
    : value.toFixed(key === 'learningRate' ? 3 : 2);
  return `
    <div class="control">
      <div class="control-label">${label}<span class="control-value">${display}</span></div>
      <input type="range" data-theory-key="${key}" data-tab="${tab}" min="${min}" max="${max}" step="${step}" value="${value}">
    </div>
  `;
}

function theoryToggle(label, key, checked, tab) {
  return `
    <div class="control" style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 0;">
      <div class="control-label" style="margin-bottom:0;">${label}</div>
      <label class="toggle">
        <input type="checkbox" data-theory-key="${key}" data-tab="${tab}" ${checked ? 'checked' : ''}>
        <span class="toggle-track"></span>
      </label>
    </div>
  `;
}

function applyTheoryOptions(tab) {
  const o = state.theory[tab];
  if (tab === 'convolution') convScene.setOptions(o);
  else if (tab === 'attention') attnScene.setOptions(o);
  else if (tab === 'gradientDescent') gradScene.setOptions(o);
  else if (tab === 'pooling') poolScene.setOptions(o);
  else if (tab === 'pipeline') pipeScene.setOptions(o);
}

function renderTheorySidebarRight() {
  const right = document.querySelector('#sidebar-right');
  if (state.activeTab === 'convolution') {
    right.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('brain')}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">Convolution</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            A small weight matrix (the kernel) slides across the input, multiplying its entries with the matching window
            and summing the result into one output cell. The same kernel is reused at every position — that's
            <strong style="color:var(--text);">parameter sharing</strong> — which is why CNNs need so few weights for image data.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            Stride controls the step size. Padding adds a border of zeros so the kernel can reach the edges and so the output
            size can be controlled.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>Why it matters</span></div>
        <div class="insight">Translation equivariance — a feature is detected the same way wherever it appears.</div>
        <div class="insight">Local connectivity captures spatial structure that fully-connected layers miss.</div>
        <div class="insight">Stacking convolutions builds a hierarchy: edges → textures → parts → objects.</div>
      </div>
    `;
  } else if (state.activeTab === 'pooling') {
    right.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('brain')}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">Pooling — visually & mathematically</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            Each input cell is labelled with a number. The pooling window (yellow) slides across the input.
            For every window position the operation collapses K×K cells into one output cell.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            <strong style="color:var(--text);">Max pool</strong> takes the maximum value in the window —
            picks the strongest activation and is robust to small translations.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            <strong style="color:var(--text);">Avg pool</strong> takes the mean — smoother, used at the very end of
            classifiers (Global Average Pooling) to summarize each feature map.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>Why it matters</span></div>
        <div class="insight">Pooling shrinks spatial dimensions and reduces parameter count for downstream layers.</div>
        <div class="insight">It introduces a small amount of translation invariance — exact pixel position no longer matters.</div>
        <div class="insight">Pooling has no learnable parameters: it's a fixed reduction over a window.</div>
      </div>
    `;
  } else if (state.activeTab === 'attention') {
    right.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('brain')}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">Scaled dot-product attention</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            Each token produces three vectors: a <strong style="color:var(--text);">query</strong>, a
            <strong style="color:var(--text);">key</strong>, and a <strong style="color:var(--text);">value</strong>.
            Queries dot-product against all keys to produce raw scores, scaled by √d to keep the gradient stable, then
            softmaxed into a row of weights.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            Those weights mix the value vectors into one output per query. Every token can attend to every other token —
            that's what makes Transformers powerful for long-range structure.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>Why it matters</span></div>
        <div class="insight">No recurrence — all positions are processed in parallel during training.</div>
        <div class="insight">Multi-head attention lets different heads specialize in different relationships.</div>
        <div class="insight">Self-attention is permutation-equivariant; positional encodings bring order back in.</div>
      </div>
    `;
  } else if (state.activeTab === 'gradientDescent') {
    right.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('brain')}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">Optimization on a loss surface</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            Training a neural net is searching for parameters that minimize a loss. The 3D surface here is one such loss
            in two parameters — colored hot where loss is high, cold where it's low.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            The three markers are different optimizers descending the same surface from the same start. Watch how
            momentum and Adam handle valleys and saddles compared to plain SGD.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>Why it matters</span></div>
        <div class="insight">Learning rate is the single most important hyperparameter — too high diverges, too low crawls.</div>
        <div class="insight">Adaptive optimizers (Adam, RMSProp) help when gradients differ wildly across parameters.</div>
        <div class="insight">Loss surfaces of real networks are extremely high-dimensional, but local geometry still matters.</div>
      </div>
    `;
  } else if (state.activeTab === 'pipeline') {
    right.innerHTML = `
      <div class="section">
        <div class="section-title">${iconHTML('brain')}<span>Concept</span></div>
        <div class="card">
          <div class="card-title">The ML training loop</div>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0 0 10px;">
            Every deep-learning training run follows the same cycle: a <strong style="color:var(--text);">forward pass</strong>
            computes predictions, the <strong style="color:var(--text);">loss</strong> measures how wrong they are, and
            <strong style="color:var(--text);">backpropagation</strong> computes gradients flowing from output back to input layers.
          </p>
          <p style="color:var(--text-2);font-size:13px;line-height:1.6;margin:0;">
            The colored arrows on the arches show this gradient flow — purple traveling right → left from the loss through the NN;
            pink from the loss back through the CNN feature extractor.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="section-title">${iconHTML('insight')}<span>Why it matters</span></div>
        <div class="insight">NN weights and CNN filters are all updated by the same gradient — one backward pass updates the entire model.</div>
        <div class="insight">The loss is the single number that drives everything. Choosing the right loss function is a design decision.</div>
        <div class="insight">In practice the model is ONE network; the NN and CNN here represent different architectural blocks in the same graph.</div>
      </div>
    `;
  }
}

function renderTheoryOverlay() {
  const el = document.querySelector('#theory-overlay');
  if (state.activeTab === 'convolution') {
    el.innerHTML = `
      <h3>Convolution</h3>
      <p>Kernel slides over the input, computing local weighted sums. Same kernel everywhere — parameter sharing.</p>
      <div class="equation">y[i,j] = &Sigma;<sub>k,l</sub> x[i&middot;s+k&minus;p, j&middot;s+l&minus;p] &middot; w[k,l]</div>
      <div class="equation">outSize = &lfloor;(N + 2P &minus; K) / S&rfloor; + 1</div>
    `;
  } else if (state.activeTab === 'pooling') {
    const mode = state.theory.pooling.mode;
    el.innerHTML = `
      <h3>Pooling &mdash; ${mode === 'max' ? 'max' : 'average'}</h3>
      <p>Collapses K&times;K cells into one. Watch the active window and result number.</p>
      <div class="equation">${mode === 'max'
        ? 'y[i,j] = max<sub>k,l</sub> x[i&middot;s+k, j&middot;s+l]'
        : 'y[i,j] = (1/K&sup2;) &middot; &Sigma;<sub>k,l</sub> x[i&middot;s+k, j&middot;s+l]'
      }</div>
      <div class="equation">outSize = &lfloor;(N &minus; K) / S&rfloor; + 1</div>
    `;
  } else if (state.activeTab === 'attention') {
    el.innerHTML = `
      <h3>Self-attention</h3>
      <p>Each query attends to all keys. Softmaxed scores weight the values into a context vector.</p>
      <div class="equation">Attention(Q,K,V) = softmax(QK<sup>T</sup> / &radic;d<sub>k</sub>) &middot; V</div>
    `;
  } else if (state.activeTab === 'gradientDescent') {
    el.innerHTML = `
      <h3>Gradient descent</h3>
      <p>Step opposite to the gradient. &eta; is the learning rate.</p>
      <div class="equation">&theta; &larr; &theta; &minus; &eta; &middot; &nabla;<sub>&theta;</sub> L(&theta;)</div>
      <div class="equation">SGD: v = &beta;v + g &nbsp;&nbsp; &theta; &larr; &theta; &minus; &eta;v</div>
    `;
  } else if (state.activeTab === 'pipeline') {
    el.innerHTML = `
      <h3>Training Loop</h3>
      <p>One full iteration: forward pass computes &ycirc;, loss measures error, backprop flows gradients.</p>
      <div class="equation">Forward:  &ycirc; = f(x; &theta;)</div>
      <div class="equation">Loss:     L = &ell;(&ycirc;, y)</div>
      <div class="equation">Backward: &nabla;&theta; = &part;L / &part;&theta;</div>
      <div class="equation">Update:   &theta; &larr; &theta; &minus; &eta; &nabla;&theta;</div>
    `;
  }
}

/* ==========================================================================
   Actions
   ========================================================================== */

function loadPreset(id) {
  const p = presets[id];
  if (!p) return;
  state.activePresetId = id;
  state.layers = structuredClone(p.layers);
  state.selectedLayerIdx = 0;
  state.expandedLayerIdx = 0;
  rebuildAndRerender();
}

function rebuildAndRerender() {
  archScene.setOptions({ mode: state.activeTab });
  archScene.build(state.layers);
  rerenderAll();
}

function randomizeArch() {
  // Wiggle all numeric per-layer params a bit; preserves architecture shape.
  state.layers.forEach(l => {
    const p = l.params || {};
    Object.keys(p).forEach(k => {
      if (typeof p[k] === 'number' && k !== 's' && k !== 'p') {
        const jitter = 0.7 + Math.random() * 0.6;
        p[k] = Math.max(1, Math.round(p[k] * jitter));
      }
    });
    l.w = Math.max(1, l.w * (0.85 + Math.random() * 0.3));
    l.h = Math.max(1, l.h * (0.85 + Math.random() * 0.3));
    l.d = Math.max(0.4, l.d * (0.85 + Math.random() * 0.3));
  });
  rebuildAndRerender();
}

function resetCamera() {
  if (sceneHost.controls) {
    sceneHost.controls.reset();
  }
}

function resetTheoryScene() {
  const tab = state.activeTab;
  if (tab === 'gradientDescent') gradScene.reset();
  else applyTheoryOptions(tab);
}

/* ==========================================================================
   Boot
   ========================================================================== */

archScene.setOptions({ mode: state.activeTab });
archScene.build(state.layers);
sceneHost.activate('architecture');
rerenderAll();
