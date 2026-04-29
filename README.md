# NeuralForge 3D

> An interactive 3D studio that makes deep learning tangible — built so anyone curious about AI can *see* what's actually happening inside neural networks, CNNs, Transformers, and modern LLM pipelines.

**Live, real-time 3D in your browser. No install. No Python. No math degree required.**

[![Live Demo](https://img.shields.io/badge/demo-live-00ea64?style=flat-square&logo=googlechrome&logoColor=white)](https://youssef-medd.github.io/3D_visualizer/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Built with Three.js](https://img.shields.io/badge/built%20with-Three.js-black?style=flat-square&logo=threedotjs)](https://threejs.org)
[![Bundled with Vite](https://img.shields.io/badge/bundled%20with-Vite-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)

---

## What is this?

NeuralForge 3D is a free, open-source visualization tool for understanding modern AI/ML concepts from the ground up. If you've ever read a blog post about "attention heads" or "gradient descent" and nodded along without really seeing it — this is for you.

Everything runs in Three.js inside a single browser tab. Drag sliders, watch geometry change, build intuition.

---

## Sections at a glance

### Splash / Landing

An animated 3D network graph greets you on load — nodes and edges auto-rotate in WebGL with GPU-accelerated rendering at a smooth 30 fps. Click anywhere to enter the studio.

---

### Architecture Builder (interactive)

Build any network layer-by-layer and watch it render in 3D instantly.

| Tab | What you can build |
|-----|--------------------|
| **Neural Net** | Perceptrons, MLPs, autoencoders, residual blocks |
| **CNN** | LeNet, VGG-style, ResNet-style feature stacks |
| **Transformer** | Encoder blocks, BERT-small, decoder-only |

Each tab has a **preset library** so you can start from a known architecture, then modify it. The right panel shows parameter counts, model size, and layer-by-layer insights.

---

### Theory Scenes (animated 3D explanations)

Each theory tab is a standalone animated 3D scene with controls:

#### Convolution
Watch a kernel slide across a feature map and see the output being built cell-by-cell.
Adjust: **kernel size**, **stride**, **padding**, **input size**, **speed**.
The formula `outSize = floor((N + 2P - K) / S) + 1` becomes obvious once you see it animate.

#### Pooling
Max vs Average pooling over a window — every cell shows its activation value as a 3D bar height.
Toggle between max and avg and watch how the output number changes.

#### Attention
Self-attention with Q/K/V tokens, the QK^T score matrix, and value mixing into outputs.
See exactly which token is attending to which at every step.
Formula: `Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) * V`

#### Gradient Descent
Three optimizers — **SGD**, **Momentum**, **Adam** — racing down the same 3D loss surface from the same start.
- Coloured **contour iso-lines** show equal-loss elevation bands
- **Gradient arrows** at each optimizer show the descent direction at every step
- Axis labels: theta_1, theta_2 (parameters), L (loss)

Crank up the learning rate and watch SGD diverge. Lower it and watch Adam win cleanly.

#### ML Pipeline
The full deep learning training loop in one view:
`NN -> Loss L(theta) -> CNN` with forward-pass dots and backpropagation arrows flowing backward.
One forward pass + one backward pass + one parameter update = one training step.

#### RAG — Retrieval-Augmented Generation
A full 6-stage pipeline showing how modern LLM applications work:

```
Document -> Chunks -> Embedding Space -> Vector Store -> Query/Retrieve -> LLM
```

| Stage | What you see |
|-------|-------------|
| Document | A glowing text slab — raw PDF / HTML / markdown |
| Chunks | 4 colour-coded text blocks — the document split into overlapping segments |
| Embedding Space | A 3D point cloud with 4 semantic clusters — high-dim vector space projected to 3D |
| Vector Store | A 6x4 grid of glowing cells — rows per chunk colour (pgvector / Pinecone / FAISS) |
| Query + Retrieve | A cyan sphere (the user question, embedded) with animated rings |
| LLM + Answer | The final green box — model generating an answer grounded in retrieved context |

Key equation: `sim(q, d) = (q . d) / (|q| * |d|)` — cosine similarity.
Nearest neighbours by cosine = most semantically relevant chunks.

---

## Getting started

**Live demo:** https://youssef-medd.github.io/3D_visualizer/

No install needed — open the link and it runs instantly in your browser.

### For contributors (local dev)

```bash
git clone https://github.com/youssef-medd/3D_visualizer
cd neural-forge-3d
npm install
npm run dev      # -> http://localhost:5173
```

```bash
npm run build    # production bundle -> /dist
npm run preview  # preview the build locally
npm run deploy   # build + push to GitHub Pages
```

**Requirements:** Node 18+, any modern browser (Chrome / Firefox / Edge).
No GPU required — Three.js uses WebGL which runs on integrated graphics.

---

## Project layout

```
src/
  main.js                       # App shell — tabs, state, sidebar renderers
  style.css                     # Full design system (CSS custom properties)

  scenes/
    architecture-scene.js       # NN / CNN / Transformer layer builder
    convolution-scene.js        # Sliding-kernel with animated output
    pooling-scene.js            # Max / avg pooling window sweep
    attention-scene.js          # Q / K / V dot-product attention
    gradient-descent-scene.js   # 3D loss surface + 3 optimizers + contours
    pipeline-scene.js           # Full training loop (NN -> Loss -> CNN)
    rag-scene.js                # RAG pipeline (6 stages, flow dots)

  ui/
    architecture-controller.js  # Presets, validation, param estimation
    icons.js                    # Inline SVG icon helpers

  util/
    scene-host.js               # One shared WebGLRenderer — zero-cost tab switches
    three-helpers.js            # Lights, ground grid, sprite labels, fat lines
    colors.js                   # Layer colour palette + brand tokens
    style-manager.js            # Global style state (bloom, edge width, etc.)
```

### How to add a new scene

Every scene implements this interface:

```js
export class MyScene {
  constructor() {
    this.scene  = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
    // build your geometry here
  }

  setOptions(partial) { /* react to sidebar controls */ }
  update(dt, t)       { /* called every frame: dt = delta seconds, t = total seconds */ }
  onActivate()   {}
  onDeactivate() {}
}
```

Then in `main.js`:
1. Import your scene
2. Add the tab key to `THEORY_TABS`
3. Add a label to `TAB_LABELS` and `TAB_SUBLABEL`
4. Add initial state to `state.theory`
5. Instantiate and register: `sceneHost.register('myTab', new MyScene())`
6. Handle it in `switchTab`, `applyTheoryOptions`, `renderTheorySidebarLeft`, `renderTheorySidebarRight`

---

## Core ML concepts (quick reference)

| Concept | One sentence |
|---------|-------------|
| Convolution | A shared kernel slides over the input computing one weighted-sum activation per position |
| Pooling | A window collapses K*K activations into one (max or average) — shrinks spatial dims |
| Self-Attention | Every token queries every other token; softmaxed scores weight values into a context vector |
| Gradient Descent | Step opposite to the gradient of the loss, repeatedly, until convergence |
| Backpropagation | Chain rule applied backward through the graph to compute dL/dtheta for every weight |
| RAG | Chunk docs -> embed -> index -> embed query -> retrieve top-K -> inject into LLM prompt |
| Embeddings | Dense vectors where semantic similarity equals geometric closeness (cosine distance) |
| Vector Database | An index optimized for approximate nearest-neighbour search in high-dimensional space |

---

## Why RAG instead of fine-tuning?

| | RAG | Fine-tuning |
|---|---|---|
| Update knowledge | Re-index documents (minutes) | Retrain (hours/days) |
| Cost | Inference + vector search | GPU training runs |
| Handles new facts | Yes, immediately | No, stale until next run |
| Risk of hallucination | Lower (grounded in retrieved text) | Higher |
| Best for | Dynamic knowledge, long documents | Style, tone, task-specific behaviour |

---

## Design system

- **Accent:** `#00ea64` (vibrant green)
- **Background:** `#060608` (near-pure black)
- **Fonts:** Sora (headings), Inter (body), JetBrains Mono (equations)
- All colours are CSS custom properties in `:root` — override to retheme

---

## Contributing

Issues and PRs welcome. Scene files are self-contained — the easiest contribution is a new theory scene (diffusion, LoRA, RLHF, tokenization, MoE, etc.) following the interface above.

---

## License

MIT — free to use, modify, and build on.
