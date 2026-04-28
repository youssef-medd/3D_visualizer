import { layerColors } from '../util/colors.js';

/**
 * ArchitectureController
 * Owns the layer state for the NN/CNN/Transformer tabs.
 * Knows about presets, validation, parameter estimation, and
 * how to re-render the editor UI. The 3D scene is told what to
 * draw via the `scene.build(layers)` method on rerender().
 */

export const presets = {
  // -------- NN (fully-connected MLP) ----------
  perceptron: {
    label: 'Perceptron',
    description: 'Single linear neuron — the simplest classifier.',
    mode: 'nn',
    layers: [
      { name: 'Input',   type: 'input',  w: 3, h: 3, d: 0.5, params: { neurons: 4 } },
      { name: 'Output',  type: 'output', w: 2, h: 2, d: 0.5, params: { neurons: 1 } },
    ],
  },
  mnist: {
    label: 'MNIST Classifier',
    description: 'Three-layer MLP for handwritten digit classification.',
    mode: 'nn',
    layers: [
      { name: 'Input 784',   type: 'input',  w: 4.5, h: 4.5, d: 0.6, params: { neurons: 16 } },
      { name: 'Hidden 128',  type: 'dense',  w: 4,   h: 4,   d: 0.9, params: { neurons: 12, activation: 'ReLU' } },
      { name: 'Hidden 64',   type: 'dense',  w: 3.2, h: 3.2, d: 0.9, params: { neurons: 9,  activation: 'ReLU' } },
      { name: 'Output 10',   type: 'output', w: 2.4, h: 2.4, d: 0.6, params: { neurons: 10, activation: 'Softmax' } },
    ],
  },
  autoencoder: {
    label: 'Autoencoder',
    description: 'Encoder-decoder with bottleneck for representation learning.',
    mode: 'nn',
    layers: [
      { name: 'Input',     type: 'input',     w: 4,   h: 4,   d: 0.5, params: { neurons: 16 } },
      { name: 'Encoder 1', type: 'dense',     w: 3.2, h: 3.2, d: 0.8, params: { neurons: 8 } },
      { name: 'Latent',    type: 'attention', w: 2,   h: 2,   d: 0.6, params: { neurons: 4 } },
      { name: 'Decoder 1', type: 'dense',     w: 3.2, h: 3.2, d: 0.8, params: { neurons: 8 } },
      { name: 'Output',    type: 'output',    w: 4,   h: 4,   d: 0.5, params: { neurons: 16 } },
    ],
  },
  tinyTransformer: {
    label: 'Tiny Transformer Block',
    description: 'A minimal attention block with FFN for sequence data.',
    mode: 'nn',
    layers: [
      { name: 'Embedding',  type: 'token',     w: 4, h: 3, d: 0.6, params: { neurons: 12 } },
      { name: 'Attention',  type: 'attention', w: 4, h: 3, d: 1.0, params: { neurons: 12 } },
      { name: 'FFN',        type: 'ffn',       w: 4, h: 3, d: 1.0, params: { neurons: 16 } },
      { name: 'Output',     type: 'output',    w: 3, h: 2, d: 0.6, params: { neurons: 8 } },
    ],
  },
  resnet: {
    label: 'Deep ResNet (Toy)',
    description: 'Stacked residual blocks — illustrates depth + skip paths.',
    mode: 'nn',
    layers: [
      { name: 'Input',       type: 'input',    w: 4, h: 3, d: 0.5, params: { neurons: 12 } },
      { name: 'Conv Block',  type: 'conv',     w: 4, h: 3, d: 1.0, params: { neurons: 24 } },
      { name: 'Res Block 1', type: 'residual', w: 4, h: 3, d: 1.0, params: { neurons: 24 } },
      { name: 'Res Block 2', type: 'residual', w: 4, h: 3, d: 1.0, params: { neurons: 24 } },
      { name: 'Res Block 3', type: 'residual', w: 4, h: 3, d: 1.0, params: { neurons: 24 } },
      { name: 'Output',      type: 'output',   w: 3, h: 2, d: 0.6, params: { neurons: 8 } },
    ],
  },

  // -------- CNN ----------
  // Sizing convention: input slab is the largest face-on canvas. As
  // spatial dims shrink, slab w/h shrinks; as filter count grows, slab
  // depth grows. This is how the user wants it visually (image 6).
  cnnLeNet: {
    label: 'LeNet-5',
    description: 'Classic CNN for digit recognition (LeCun, 1998).',
    mode: 'cnn',
    layers: [
      { name: 'Input 32×32',  type: 'input', w: 4.6, h: 4.6, d: 0.4, params: { h: 32, w: 32, c: 1 } },
      { name: 'Conv 5×5, 6',  type: 'conv',  w: 4.0, h: 4.0, d: 1.2, params: { k: 5, s: 1, p: 0, filters: 6 } },
      { name: 'Pool 2×2',     type: 'pool',  w: 3.2, h: 3.2, d: 1.0, params: { k: 2, s: 2, p: 0 } },
      { name: 'Conv 5×5, 16', type: 'conv',  w: 2.6, h: 2.6, d: 1.6, params: { k: 5, s: 1, p: 0, filters: 16 } },
      { name: 'Pool 2×2',     type: 'pool',  w: 2.0, h: 2.0, d: 1.4, params: { k: 2, s: 2, p: 0 } },
      { name: 'Dense 120',    type: 'dense', w: 0.8, h: 4.0, d: 0.8, params: { units: 120 } },
      { name: 'Dense 84',     type: 'dense', w: 0.8, h: 3.4, d: 0.8, params: { units: 84 } },
      { name: 'Output 10',    type: 'output',w: 0.8, h: 1.6, d: 0.8, params: { classes: 10 } },
    ],
  },
  cnnVgg: {
    label: 'VGG-Style',
    description: 'Stacked 3×3 conv blocks — the VGG recipe.',
    mode: 'cnn',
    layers: [
      { name: 'Input 224×224×3', type: 'input', w: 5.0, h: 5.0, d: 0.5, params: { h: 224, w: 224, c: 3 } },
      { name: 'Conv 3×3, 64',    type: 'conv',  w: 4.6, h: 4.6, d: 1.4, params: { k: 3, s: 1, p: 1, filters: 16 } },
      { name: 'Conv 3×3, 64',    type: 'conv',  w: 4.6, h: 4.6, d: 1.4, params: { k: 3, s: 1, p: 1, filters: 16 } },
      { name: 'MaxPool 2×2',     type: 'pool',  w: 3.6, h: 3.6, d: 1.2, params: { k: 2, s: 2, p: 0 } },
      { name: 'Conv 3×3, 128',   type: 'conv',  w: 3.0, h: 3.0, d: 1.8, params: { k: 3, s: 1, p: 1, filters: 18 } },
      { name: 'Conv 3×3, 128',   type: 'conv',  w: 3.0, h: 3.0, d: 1.8, params: { k: 3, s: 1, p: 1, filters: 18 } },
      { name: 'MaxPool 2×2',     type: 'pool',  w: 2.2, h: 2.2, d: 1.6, params: { k: 2, s: 2, p: 0 } },
      { name: 'Dense 1024',      type: 'dense', w: 0.8, h: 4.4, d: 0.9, params: { units: 1024 } },
      { name: 'Output 1000',     type: 'output',w: 0.8, h: 1.8, d: 0.9, params: { classes: 1000 } },
    ],
  },
  cnnResnet: {
    label: 'ResNet (Toy)',
    description: 'Conv blocks with residual skip connections.',
    mode: 'cnn',
    layers: [
      { name: 'Input 224×224×3', type: 'input',    w: 5.0, h: 5.0, d: 0.5, params: { h: 224, w: 224, c: 3 } },
      { name: 'Conv 7×7, 64',    type: 'conv',     w: 4.4, h: 4.4, d: 1.4, params: { k: 7, s: 2, p: 3, filters: 16 } },
      { name: 'Pool 3×3',        type: 'pool',     w: 3.6, h: 3.6, d: 1.2, params: { k: 3, s: 2, p: 1 } },
      { name: 'ResBlock ×3',     type: 'residual', w: 3.2, h: 3.2, d: 1.6, params: { filters: 64 } },
      { name: 'ResBlock ×4',     type: 'residual', w: 2.6, h: 2.6, d: 1.8, params: { filters: 128 } },
      { name: 'ResBlock ×6',     type: 'residual', w: 2.0, h: 2.0, d: 2.0, params: { filters: 256 } },
      { name: 'GAP',             type: 'pool',     w: 1.4, h: 1.4, d: 1.6, params: { k: 7, s: 1, p: 0 } },
      { name: 'Output 1000',     type: 'output',   w: 0.8, h: 1.8, d: 0.9, params: { classes: 1000 } },
    ],
  },

  // -------- Transformer (more precise: thinner blocks, taller for sequences) ----------
  encoderBlock: {
    label: 'Encoder Block',
    description: 'Pre-LayerNorm encoder block: attention + FFN.',
    mode: 'transformer',
    layers: [
      { name: 'Token Embedding',     type: 'token',     w: 1.6, h: 5.2, d: 0.7, params: { seq: 128, dModel: 512 } },
      { name: 'Positional Encoding', type: 'positional',w: 1.6, h: 5.0, d: 0.5, params: {} },
      { name: 'LayerNorm',           type: 'norm',      w: 1.6, h: 4.8, d: 0.4, params: {} },
      { name: 'Multi-Head Attention',type: 'attention', w: 2.6, h: 4.8, d: 1.4, params: { heads: 8 } },
      { name: 'Residual Add',        type: 'residual',  w: 1.6, h: 4.6, d: 0.4, params: {} },
      { name: 'Feed Forward',        type: 'ffn',       w: 2.4, h: 4.4, d: 1.2, params: { hidden: 2048 } },
      { name: 'Residual Add',        type: 'residual',  w: 1.6, h: 4.2, d: 0.4, params: {} },
      { name: 'Output Tokens',       type: 'output',    w: 1.4, h: 4.0, d: 0.6, params: { classes: 10 } },
    ],
  },
  bertSmall: {
    label: 'BERT-Small',
    description: 'Small BERT encoder stack (4 layers).',
    mode: 'transformer',
    layers: [
      { name: 'Token Embedding', type: 'token',     w: 1.6, h: 5.2, d: 0.8, params: { seq: 128, dModel: 512 } },
      { name: 'Pos Encoding',    type: 'positional',w: 1.6, h: 5.0, d: 0.5, params: {} },
      { name: 'Encoder × 4',     type: 'attention', w: 2.6, h: 4.8, d: 1.6, params: { heads: 8 } },
      { name: 'LayerNorm',       type: 'norm',      w: 1.6, h: 4.6, d: 0.4, params: {} },
      { name: 'Pooler',          type: 'ffn',       w: 2.2, h: 4.4, d: 1.0, params: { hidden: 512 } },
      { name: 'Classifier',      type: 'head',      w: 1.4, h: 3.8, d: 0.7, params: { classes: 2 } },
    ],
  },
  decoderOnly: {
    label: 'Decoder-Only (GPT)',
    description: 'Causal decoder stack with masked attention.',
    mode: 'transformer',
    layers: [
      { name: 'Token Embedding', type: 'token',     w: 1.6, h: 5.6, d: 0.8, params: { seq: 256, dModel: 768 } },
      { name: 'Pos Encoding',    type: 'positional',w: 1.6, h: 5.4, d: 0.5, params: {} },
      { name: 'Masked Attn',     type: 'attention', w: 2.8, h: 5.2, d: 1.6, params: { heads: 12 } },
      { name: 'FFN',             type: 'ffn',       w: 2.6, h: 5.0, d: 1.2, params: { hidden: 3072 } },
      { name: 'Residual',        type: 'residual',  w: 1.6, h: 4.8, d: 0.4, params: {} },
      { name: 'LM Head',         type: 'head',      w: 1.4, h: 4.4, d: 0.7, params: { classes: 50000 } },
    ],
  },
};

// Which presets to show under each top-level tab
export const presetsByTab = {
  nn: ['perceptron', 'mnist', 'autoencoder', 'tinyTransformer', 'resnet'],
  cnn: ['cnnLeNet', 'cnnVgg', 'cnnResnet'],
  transformer: ['encoderBlock', 'bertSmall', 'decoderOnly'],
};

const cnnTypes = new Set(['input', 'conv', 'pool', 'norm', 'dense', 'flatten', 'output']);
const transformerTypes = new Set(['token', 'positional', 'norm', 'attention', 'ffn', 'residual', 'head', 'output']);
const nnTypes = new Set(['input', 'dense', 'attention', 'ffn', 'residual', 'conv', 'output']);

export function defaultParamsForType(type) {
  const defaults = {
    input:      { h: 224, w: 224, c: 3, neurons: 8 },
    conv:       { k: 3, s: 1, p: 1, filters: 64 },
    pool:       { k: 2, s: 2, p: 0 },
    norm:       {},
    dense:      { units: 256, neurons: 8, activation: 'ReLU' },
    flatten:    { units: 0 },
    output:     { classes: 10, neurons: 4, activation: 'Softmax' },
    token:      { seq: 128, dModel: 512, neurons: 12 },
    positional: {},
    attention:  { heads: 8, neurons: 8 },
    ffn:        { hidden: 2048, neurons: 12 },
    residual:   { neurons: 8 },
    head:       { classes: 10 },
  };
  return structuredClone(defaults[type] || {});
}

export function cnnOutDim(size, k, s, p) {
  return Math.floor((size + 2 * p - k) / s) + 1;
}

export function validateArchitecture(layers, mode) {
  const messages = [];
  const shapes = [];
  let state = null;
  const allowed = mode === 'cnn' ? cnnTypes : mode === 'transformer' ? transformerTypes : nnTypes;

  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    const params = layer.params || {};
    let descriptor = '—';

    if (!allowed.has(layer.type)) {
      messages.push({
        level: 'warn',
        text: `Layer ${i + 1} "${layer.name}" type "${layer.type}" is unusual for ${mode.toUpperCase()} mode.`,
      });
    }

    if (mode === 'cnn') {
      if (layer.type === 'input') {
        state = { h: params.h || 224, w: params.w || 224, c: params.c || 3 };
        descriptor = `${state.h}×${state.w}×${state.c}`;
      } else if (!state) {
        messages.push({ level: 'err', text: `Layer ${i + 1} needs an input layer first.` });
      } else if (layer.type === 'conv') {
        const k = +params.k || 3, s = +params.s || 1, p = +params.p || 0;
        const filters = +params.filters || state.c;
        const oh = cnnOutDim(state.h, k, s, p);
        const ow = cnnOutDim(state.w, k, s, p);
        if (oh <= 0 || ow <= 0) {
          messages.push({ level: 'err', text: `Conv at layer ${i + 1} produces invalid spatial dims.` });
        } else state = { h: oh, w: ow, c: filters };
        descriptor = `${state.h}×${state.w}×${state.c}`;
      } else if (layer.type === 'pool') {
        const k = +params.k || 2, s = +params.s || 2, p = +params.p || 0;
        const oh = cnnOutDim(state.h, k, s, p);
        const ow = cnnOutDim(state.w, k, s, p);
        if (oh <= 0 || ow <= 0) {
          messages.push({ level: 'err', text: `Pooling at layer ${i + 1} collapses spatial dims.` });
        } else state = { ...state, h: oh, w: ow };
        descriptor = `${state.h}×${state.w}×${state.c}`;
      } else if (layer.type === 'flatten') {
        state = { h: 1, w: 1, c: state.h * state.w * state.c };
        descriptor = `${state.c} units (flat)`;
      } else if (layer.type === 'dense') {
        state = { h: 1, w: 1, c: +params.units || 512 };
        descriptor = `${state.c} units`;
      } else if (layer.type === 'output') {
        state = { h: 1, w: 1, c: +params.classes || 10 };
        descriptor = `${params.classes || 10} classes`;
      } else {
        descriptor = state ? `${state.h}×${state.w}×${state.c}` : '—';
      }
    } else if (mode === 'transformer') {
      if (layer.type === 'token') {
        state = { seq: +params.seq || 128, dModel: +params.dModel || 512 };
        descriptor = `${state.seq}×${state.dModel}`;
      } else if (!state) {
        messages.push({ level: 'err', text: `Layer ${i + 1} needs a token embedding first.` });
      } else if (layer.type === 'attention') {
        const heads = +params.heads || 8;
        if (state.dModel % heads !== 0) {
          messages.push({ level: 'err', text: `Attention layer ${i + 1}: dModel (${state.dModel}) must divide by heads (${heads}).` });
        }
        descriptor = `${state.seq}×${state.dModel}`;
      } else if (layer.type === 'ffn') {
        const hidden = +params.hidden || 2048;
        descriptor = `${state.seq}×${state.dModel} (ffn:${hidden})`;
      } else if (layer.type === 'head' || layer.type === 'output') {
        const classes = +params.classes || 10;
        descriptor = `${state.seq}×${classes}`;
      } else {
        descriptor = `${state.seq}×${state.dModel}`;
      }
    } else {
      // NN mode — just show neuron count
      const n = params.neurons || 0;
      descriptor = `${n} neurons${params.activation ? '  ·  ' + params.activation : ''}`;
    }

    shapes.push({ index: i, descriptor });
  }

  const status = messages.some((m) => m.level === 'err')
    ? 'invalid'
    : messages.some((m) => m.level === 'warn')
    ? 'warn'
    : 'valid';

  if (!messages.length) {
    messages.push({ level: 'ok', text: 'No validation errors detected.' });
  }
  return { messages, shapes, status };
}

export function estimateParams(layers, mode) {
  let total = 0;
  let prevC = 3;
  let dModel = 512;

  layers.forEach((layer) => {
    const p = layer.params || {};
    if (layer.type === 'input') prevC = +p.c || 3;
    if (layer.type === 'conv') {
      const k = +p.k || 3;
      const filters = +p.filters || 64;
      total += k * k * prevC * filters + filters;
      prevC = filters;
    }
    if (layer.type === 'dense') total += prevC * (+p.units || 512);
    if (layer.type === 'token') dModel = +p.dModel || 512;
    if (layer.type === 'attention') total += 4 * dModel * dModel;
    if (layer.type === 'ffn') {
      const hidden = +p.hidden || 2048;
      total += dModel * hidden + hidden * dModel;
    }
    if (mode === 'nn' && layer.type !== 'input') {
      const n = +p.neurons || 0;
      total += prevC * n + n;
      prevC = n;
    } else if (mode === 'nn' && layer.type === 'input') {
      prevC = +p.neurons || 0;
    }
  });

  if (total > 1_000_000) return `${(total / 1_000_000).toFixed(1)}M`;
  if (total > 1_000) return `${(total / 1_000).toFixed(1)}K`;
  return String(Math.round(total));
}

export const insightsByMode = {
  nn: [
    'Each layer applies y = activation(W·x + b). Stacking depth lets the network compose features.',
    'Width (neurons per layer) controls capacity; depth controls hierarchy of abstraction.',
    'Without a non-linear activation, stacked layers collapse into one linear mapping.',
  ],
  cnn: [
    'Convolution depth should generally increase as spatial dimensions shrink.',
    'Early aggressive pooling can collapse details and hurt accuracy.',
    'Most CNN parameters live in the final dense layers, not in the convs.',
    'Flatten is the bridge between spatial feature maps and dense classifiers.',
  ],
  transformer: [
    'dModel must be divisible by the number of attention heads.',
    'FFN hidden size is typically 4× dModel in standard Transformer recipes.',
    'Pre-LN (LayerNorm before attention) trains more stably than Post-LN.',
  ],
};
