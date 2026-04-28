# Neural Forge 3D

A modern 3D visualization studio for neural network architectures and ML
fundamentals. Built with Vite + Three.js.

## Tabs

**Architectures** (interactive builders with layer editor + presets)
- **NN** — Fully-connected MLPs (Perceptron, MNIST classifier, Autoencoder, Tiny Transformer Block, Deep ResNet)
- **CNN** — Convolutional stacks (LeNet-style, VGG-style, ResNet-style)
- **Transformer** — Encoder block, BERT-small, decoder-only

**Theory** (precise 3D scenes that explain ML fundamentals)
- **Convolution** — Watch a kernel slide over a feature map and progressively build the output. Adjust kernel size, stride, padding live.
- **Attention** — Self-attention with Q/K/V tokens, the central QK^T heat-map matrix, and softmax-weighted value mixing into outputs.
- **Gradient Descent** — Three optimizers (SGD, Momentum, Adam) descending the same colored 3D loss surface side-by-side, with learning rate control.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production bundle in /dist
npm run preview  # preview the build
```

## Project layout

```
src/
  main.js                     # app shell + tab routing
  style.css                   # design system + components
  scenes/
    architecture-scene.js     # NN / CNN / Transformer layer renderer
    convolution-scene.js      # sliding-kernel theory scene
    attention-scene.js        # Q/K/V attention theory scene
    gradient-descent-scene.js # 3D loss surface + 3 optimizers
  ui/
    architecture-controller.js  # presets, validation, param estimation
    icons.js                  # inline SVG icons
  util/
    scene-host.js             # one shared WebGLRenderer, scene swap
    three-helpers.js          # lights, grid, sprite labels
    colors.js                 # layer color palette
```

All scenes implement `{ scene, camera, update(dt,t), onActivate, onDeactivate }`
and are managed by a single `SceneHost` so tab switches are zero-cost.
