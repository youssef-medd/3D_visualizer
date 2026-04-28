/**
 * Shared color system. Keep these in sync with --c-* CSS variables.
 * Single source of truth for layer category colors used across scenes.
 *
 * Palette inspired by Quantexa: deep indigo / royal purple base with a
 * vivid teal accent. Layer colors are tuned to remain distinguishable
 * against that background while reading as a single coherent family.
 */
export const layerColors = {
  input:      '#94a3b8', // cool slate
  conv:       '#ec4899', // pink magenta
  pool:       '#fbbf24', // amber
  norm:       '#c4b5fd', // soft violet
  dense:      '#22d3ee', // cyan
  output:     '#4ade80', // mint green
  flatten:    '#f59e0b', // saffron — for the flatten step
  token:      '#67e8f9',
  positional: '#fb923c',
  attention:  '#f472b6',
  ffn:        '#6ee7b7',
  residual:   '#d8b4fe',
  head:       '#fb7185',
};

// Brand palette
export const brand = {
  primary: '#7c3aed',  // royal purple
  primary2: '#3b1d6e', // deep indigo
  accent:   '#2dd4bf', // teal (Quantexa-style)
  accent2:  '#67e8f9', // cyan secondary
  accent3:  '#f472b6', // pink
  warn:     '#fbbf24',
  err:      '#f87171',
  bg0:      '#06060f',
  bg1:      '#0c0a1a',
  bg2:      '#161029',
};

export const accent     = brand.accent;
export const accent2    = brand.accent2;
export const accent3    = '#34d399';
export const accentWarn = brand.warn;
export const accentErr  = brand.err;

export const bgColor = brand.bg0;

/**
 * Linear interpolation between two hex colors. Returns a hex string.
 * Used by the styling panel for "edge color proportional to weight" type
 * controls where we map a scalar in [0, 1] to a gradient.
 */
export function lerpHexColor(a, b, t) {
  const ar = parseInt(a.slice(1, 3), 16);
  const ag = parseInt(a.slice(3, 5), 16);
  const ab = parseInt(a.slice(5, 7), 16);
  const br = parseInt(b.slice(1, 3), 16);
  const bg = parseInt(b.slice(3, 5), 16);
  const bb = parseInt(b.slice(5, 7), 16);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${bl.toString(16).padStart(2, '0')}`;
}
