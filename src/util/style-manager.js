/**
 * StyleManager — a single, observable bag of visual settings that all
 * scenes read from. The Style sidebar in the UI is the only place that
 * writes to it. Whenever a setting changes, registered listeners (each
 * scene) are notified and can re-style themselves without rebuilding
 * the entire layer graph.
 *
 * This is the source of truth for everything the user listed in
 * request #7: edge width / opacity / color, node diameter / color,
 * direction, bezier curves, layer labels, arrowheads, layer spacing,
 * and the CNN/Conv-specific knobs (filter opacity, color1/2, sqrt
 * scaling, length scaling, etc.).
 */
export const defaultStyle = {
  // ---- Architecture (NN / CNN / Transformer) ----
  edgeWidthByWeight: true,
  edgeWidth: 2.0,                   // px
  edgeOpacityByWeight: true,
  edgeOpacity: 0.6,
  edgeColorByWeight: true,
  positiveEdgeColor: '#2dd4bf',     // teal
  negativeEdgeColor: '#fb7185',     // pink/red
  defaultEdgeColor: '#a78bfa',
  useBezierCurves: false,
  nodeDiameter: 0.36,
  nodeColor: '#22d3ee',
  nodeBorderColor: '#0c0a1a',
  nodeStyle: 'solid',               // 'solid' | 'empty'
  layerSpacing: 2.6,
  direction: 'horizontal',          // 'horizontal' | 'vertical'
  showBiasUnits: false,
  showLayerLabels: true,
  showArrowheads: true,
  showFrustumLinks: true,           // request #2 — kernel-reduction frustum
  showFlattenLayer: true,           // request #8

  // ---- CNN / Conv block style (request #7 — second list) ----
  convColor1: '#7c3aed',            // start of color ramp
  convColor2: '#2dd4bf',            // end of color ramp
  filterOpacity: 0.7,
  borderWidth: 1.0,
  spacingBetweenFilters: 0.12,
  showLayerLabelsConv: true,
  sqrtVectorLengthScaling: false,
  lengthSizeScaling: 1.0,           // 0..1.5

  // ---- Tensor / Conv-detail style (request #7 — third list) ----
  renderer: 'webGL',
  tensorColor1: '#7c3aed',
  tensorColor2: '#2dd4bf',
  tensorColor3: '#f472b6',
  tensorOpacity: 0.62,
  filterOpacityTensor: 0.7,
  spacingBetweenLayers: 2.6,
  logFeatureMapDepthScaling: false,
  depthSizeScaling: 10,
  logFeatureMapWidthScaling: false,
  widthSizeScaling: 10,
  logConvFilterSizeScaling: false,
  convolutionalFilterScaling: 1.0,
  showTensorDimensions: true,
  showConvDimensions: true,
  fontSize: 30,
  vectorLengthStyle: 'linear',      // 'linear' | 'sqrt'

  // ---- Cinematic / global ----
  cinematicGlow: true,              // bloom on/off
  bloomStrength: 0.55,
  autoOrbit: false,
  pulseSpeed: 1.1,
  wireframe: false,
};

export class StyleManager {
  constructor(initial = {}) {
    this._state = { ...defaultStyle, ...initial };
    this._listeners = new Set();
  }

  get state() { return this._state; }

  get(key) { return this._state[key]; }

  set(partial) {
    Object.assign(this._state, partial);
    this._listeners.forEach((fn) => fn(this._state, partial));
  }

  /**
   * Replace the whole style state (e.g. when the user picks a preset).
   * Triggers one notification with all keys.
   */
  reset(next = defaultStyle) {
    this._state = { ...defaultStyle, ...next };
    this._listeners.forEach((fn) => fn(this._state, this._state));
  }

  subscribe(fn) {
    this._listeners.add(fn);
    return () => this._listeners.delete(fn);
  }
}
