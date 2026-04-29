// Tiny inline SVGs. All 24x24 viewBox, 1.5px stroke, currentColor.
export const icons = {
  library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/></svg>',
  controls: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8h6M14 8h6M4 16h2M10 16h10" stroke-linecap="round"/><circle cx="12" cy="8" r="2"/><circle cx="8" cy="16" r="2"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 4l8 4-8 4-8-4 8-4z"/><path d="M4 12l8 4 8-4M4 16l8 4 8-4"/></svg>',
  diagnostics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg>',
  insight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z"/></svg>',
  add: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" stroke-linecap="round"/><path d="M3 3v5h5" stroke-linecap="round"/></svg>',
  randomize: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.5" fill="currentColor"/><circle cx="12"   cy="12"  r="1.5" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" stroke-linecap="round"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 14l6-6 6 6" stroke-linecap="round"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 10l6 6 6-6" stroke-linecap="round"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 10v2a3 3 0 0 0 1 2.2V16a3 3 0 0 0 3 3h1V4z"/><path d="M15 4a3 3 0 0 1 3 3v.5A3 3 0 0 1 20 10v2a3 3 0 0 1-1 2.2V16a3 3 0 0 1-3 3h-1V4z"/></svg>',
  reset_play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" stroke-linecap="round"/><path d="M3 3v5h5" stroke-linecap="round"/></svg>',
  // New icons
  style: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2.4 6.6 6.6.5-5 4.4 1.5 6.5-5.5-3.5-5.5 3.5 1.5-6.5-5-4.4 6.6-.5z"/></svg>',
  cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 7l-9-4-9 4 9 4 9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>',
  flow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="9" width="6" height="6" rx="1"/><rect x="16" y="9" width="6" height="6" rx="1"/><path d="M8 12h8M14 9l2 3-2 3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  pool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="8" height="8" rx="0.5"/><rect x="13" y="3" width="8" height="8" rx="0.5"/><rect x="3" y="13" width="8" height="8" rx="0.5"/><rect x="13" y="13" width="8" height="8" rx="0.5"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l1.5 5L18 9.5l-4.5 1.5L12 16l-1.5-5L6 9.5 10.5 8z"/><path d="M19 16l.7 1.8L21.5 18.5l-1.8.7L19 21l-.7-1.8L16.5 18.5l1.8-.7z" /></svg>',
  expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6" stroke-linecap="round"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22a10 10 0 1 1 10-10c0 2-2 3-4 3h-2a2 2 0 0 0-2 2c0 1 .5 1.5 1 2 .5.5 1 1 1 2a1 1 0 0 1-1 1z"/><circle cx="7.5" cy="10.5" r="1" fill="currentColor"/><circle cx="12" cy="6.5" r="1" fill="currentColor"/><circle cx="16.5" cy="10.5" r="1" fill="currentColor"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
};

export function iconHTML(name) {
  return icons[name] || '';
}
