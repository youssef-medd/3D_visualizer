import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * RAGScene — Retrieval-Augmented Generation pipeline
 *
 * Six-stage left-to-right pipeline:
 *   Document → Chunks → Embedding Space → Vector DB → Query/Retrieve → LLM
 *
 * Fully customisable:
 *   numChunks   — 2-6 colour-coded segments the document is split into
 *   topK        — how many chunks are retrieved (highlighted in the DB)
 *   showSimilarity — cosine score labels next to retrieved rows
 *   embDim      — embedding dimension shown in the embedding-space label
 *   animate / speed / showNumbers — standard controls
 */

const ALL_CHUNK_COLORS = ['#ec4899', '#a78bfa', '#22d3ee', '#fbbf24', '#fb923c', '#a3e635'];

export class RAGScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog('#06070d', 50, 150);

    this.camera = new THREE.PerspectiveCamera(44, 1, 0.1, 280);
    this.camera.position.set(2, 18, 40);
    this.camera.lookAt(2, 0, 0);

    setupLights(this.scene);
    addGroundGrid(this.scene, 110, 55, -6);

    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.opts = {
      animate: true,
      speed: 1.0,
      showNumbers: true,
      numChunks: 4,
      topK: 2,
      showSimilarity: true,
      embDim: 768,
    };

    this._flowDots    = [];
    this._embPoints   = [];
    this._dbCells     = [];
    this._dbCols      = 6;
    this._chunkMeshes = [];
    this._labels      = [];
    this._simLabels   = [];

    this._build();
  }

  setOptions(partial) {
    const rebuildKeys = new Set(['numChunks', 'embDim']);
    const needsRebuild = Object.keys(partial).some(k => rebuildKeys.has(k));
    Object.assign(this.opts, partial);

    if (needsRebuild) {
      this._build();
    } else {
      if ('showNumbers' in partial) this._applyLabelVisibility();
      if ('topK' in partial || 'showSimilarity' in partial) {
        this._applyTopK();
        this._buildSimilarityLabels();
      }
    }
  }

  // ------------------------------------------------------------------ build

  _build() {
    clearGroup(this.root);
    this._flowDots    = [];
    this._embPoints   = [];
    this._dbCells     = [];
    this._chunkMeshes = [];
    this._labels      = [];
    this._simLabels   = [];

    this._buildDocument();
    this._buildChunks();
    this._buildEmbeddingSpace();
    this._buildVectorDB();
    this._buildQuery();
    this._buildLLM();
    this._buildFlowConnectors();
    this._buildPipelineLabel();
    this._buildSimilarityLabels();
  }

  // ------------------------------------------------------------------ stage 1 — document

  _buildDocument() {
    const g = new THREE.Group();
    g.position.set(-18, 0, 0);
    this.root.add(g);

    const geo = new THREE.BoxGeometry(2.6, 3.8, 0.45);
    const mat = new THREE.MeshPhysicalMaterial({
      color: '#94a3b8', emissive: '#475569', emissiveIntensity: 0.5,
      roughness: 0.25, metalness: 0.2, clearcoat: 0.8,
      transparent: true, opacity: 0.92,
    });
    this._docMesh = new THREE.Mesh(geo, mat);
    g.add(this._docMesh);

    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: '#94a3b8', transparent: true, opacity: 0.5 }),
    );
    g.add(edges);

    for (let i = 0; i < 8; i++) {
      const lw = 0.5 + Math.random() * 1.4;
      const lmesh = new THREE.Mesh(
        new THREE.PlaneGeometry(lw, 0.075),
        new THREE.MeshBasicMaterial({ color: '#cbd5e1', transparent: true, opacity: 0.45 }),
      );
      lmesh.position.set(-0.6 + lw / 2 - 1.3, 1.55 - i * 0.42, 0.24);
      g.add(lmesh);
    }

    const ringGeo = new THREE.TorusGeometry(2.6, 0.035, 8, 48);
    this._docRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: '#94a3b8', transparent: true, opacity: 0.18 }));
    this._docRing.rotation.x = Math.PI / 2;
    g.add(this._docRing);

    const lbl = makeTextSprite('Document', { fontSize: 24, color: '#94a3b8' });
    lbl.position.set(0, 3.2, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite('raw text / PDF / HTML', { fontSize: 17, color: '#475569' });
    sub.position.set(0, -3.4, 0);
    sub.visible = this.opts.showNumbers;
    this._docSub = sub;
    g.add(sub);
  }

  // ------------------------------------------------------------------ stage 2 — chunks

  _buildChunks() {
    const n = Math.max(2, Math.min(6, this.opts.numChunks));
    const COLORS = ALL_CHUNK_COLORS.slice(0, n);
    const g = new THREE.Group();
    g.position.set(-9, 0, 0);
    this.root.add(g);
    this._chunkMeshes = [];

    const totalH = (n - 1) * 2.1;

    COLORS.forEach((col, i) => {
      const y = (i - (n - 1) / 2) * 2.1;
      const geo = new THREE.BoxGeometry(2.6, 1.3, 0.42);
      const mat = new THREE.MeshPhysicalMaterial({
        color: col, emissive: col, emissiveIntensity: 0.3,
        transparent: true, opacity: 0.8,
        roughness: 0.3, metalness: 0.1, clearcoat: 0.7,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = y;
      mesh.userData.phase = i * 0.9;
      g.add(mesh);
      this._chunkMeshes.push(mesh);

      const chunkEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.55 }),
      );
      chunkEdges.position.set(0, y, 0);
      g.add(chunkEdges);

      for (let j = 0; j < 3; j++) {
        const lw = 0.4 + Math.random() * 1.5;
        const lmesh = new THREE.Mesh(
          new THREE.PlaneGeometry(lw, 0.065),
          new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.38 }),
        );
        lmesh.position.set(-0.65 + lw / 2 - 1.3, y - 0.25 + j * 0.24, 0.22);
        g.add(lmesh);
      }

      // chunk index label on each slab
      const numLbl = makeTextSprite(`C${i + 1}`, { fontSize: 18, color: col });
      numLbl.position.set(1.6, y, 0.3);
      numLbl.visible = this.opts.showNumbers;
      g.add(numLbl);
    });

    const lbl = makeTextSprite(`Chunks  (n=${n})`, { fontSize: 24, color: '#c4b5fd' });
    lbl.position.set(0, totalH / 2 + 1.5, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite('text splitting → overlap', { fontSize: 17, color: '#6d28d9' });
    sub.position.set(0, -totalH / 2 - 1.4, 0);
    sub.visible = this.opts.showNumbers;
    this._chunkSub = sub;
    g.add(sub);
  }

  // ------------------------------------------------------------------ stage 3 — embedding space

  _buildEmbeddingSpace() {
    const n = Math.max(2, Math.min(6, this.opts.numChunks));
    const COLORS = ALL_CHUNK_COLORS.slice(0, n);
    const g = new THREE.Group();
    g.position.set(0, 0, 0);
    this.root.add(g);

    // n cluster centers, spread evenly
    const centers = [];
    for (let ci = 0; ci < n; ci++) {
      const angle = (ci / n) * Math.PI * 2;
      centers.push(new THREE.Vector3(
        Math.cos(angle) * 1.8,
        Math.sin(angle) * 1.4,
        (Math.random() - 0.5) * 1.6,
      ));
    }

    this._embPoints = [];
    COLORS.forEach((col, ci) => {
      const center = centers[ci];
      const count = 7 + Math.round(6 / n);
      for (let k = 0; k < count; k++) {
        const geo = new THREE.SphereGeometry(0.11, 6, 4);
        const mat = new THREE.MeshPhysicalMaterial({
          color: col, emissive: col, emissiveIntensity: 0.9,
          metalness: 0.1, roughness: 0.2,
        });
        const pt = new THREE.Mesh(geo, mat);
        pt.position.set(
          center.x + (Math.random() - 0.5) * 2.0,
          center.y + (Math.random() - 0.5) * 2.0,
          center.z + (Math.random() - 0.5) * 2.0,
        );
        pt.userData.phase = Math.random() * Math.PI * 2;
        g.add(pt);
        this._embPoints.push(pt);
      }
    });

    // Coordinate axes
    [[1,0,0],[0,1,0],[0,0,1]].forEach(dir => {
      const L = 3.8;
      g.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-dir[0]*L, -dir[1]*L, -dir[2]*L),
          new THREE.Vector3(dir[0]*L, dir[1]*L, dir[2]*L),
        ]),
        new THREE.LineBasicMaterial({ color: '#334155', transparent: true, opacity: 0.35 }),
      ));
    });

    g.add(new THREE.Mesh(
      new THREE.SphereGeometry(3.4, 10, 7),
      new THREE.MeshBasicMaterial({ color: '#1e293b', wireframe: true, transparent: true, opacity: 0.07 }),
    ));

    const lbl = makeTextSprite('Embedding Space', { fontSize: 24, color: '#22d3ee' });
    lbl.position.set(0, 4.6, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite(`${this.opts.embDim}-dim → 3D projection`, { fontSize: 17, color: '#155e75' });
    sub.position.set(0, -4.3, 0);
    sub.visible = this.opts.showNumbers;
    this._embSub = sub;
    g.add(sub);
  }

  // ------------------------------------------------------------------ stage 4 — vector db

  _buildVectorDB() {
    const n = Math.max(2, Math.min(6, this.opts.numChunks));
    const COLORS = ALL_CHUNK_COLORS.slice(0, n);
    const COLS = this._dbCols = 6;
    const ROWS = n;
    const g = new THREE.Group();
    g.position.set(10, 0, 0);
    this.root.add(g);
    this._dbCells = [];
    this._dbGroup = g;

    const panelW = COLS * 0.9 + 0.6;
    const panelH = ROWS * 0.9 + 0.6;

    g.add(new THREE.Mesh(
      new THREE.BoxGeometry(panelW, panelH, 0.25),
      new THREE.MeshPhysicalMaterial({
        color: '#0f172a', emissive: '#1e293b', emissiveIntensity: 0.4,
        transparent: true, opacity: 0.75, roughness: 0.6, metalness: 0.4,
      }),
    ));

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = (c - (COLS - 1) / 2) * 0.9;
        const y = (r - (ROWS - 1) / 2) * 0.9;
        const col = COLORS[r];
        const baseEmissive = 0.2 + Math.random() * 0.25;
        const mat = new THREE.MeshPhysicalMaterial({
          color: col, emissive: col, emissiveIntensity: baseEmissive,
          roughness: 0.3, metalness: 0.4, clearcoat: 0.9,
          transparent: true, opacity: 0.9,
        });
        const cell = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.74, 0.16), mat);
        cell.position.set(x, y, 0.22);
        cell.userData.phase = Math.random() * Math.PI * 2;
        cell.userData.baseEmissive = baseEmissive;
        cell.userData.row = r;
        g.add(cell);
        this._dbCells.push(cell);
      }
    }

    // Row labels (C1, C2, ...)
    for (let r = 0; r < ROWS; r++) {
      const y = (r - (ROWS - 1) / 2) * 0.9;
      const rowLbl = makeTextSprite(`C${r+1}`, { fontSize: 16, color: COLORS[r] });
      rowLbl.position.set(-panelW / 2 - 0.5, y, 0.5);
      rowLbl.visible = this.opts.showNumbers;
      g.add(rowLbl);
    }

    const lbl = makeTextSprite('Vector Store', { fontSize: 24, color: '#34d399' });
    lbl.position.set(0, panelH / 2 + 0.9, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite('pgvector / Pinecone / FAISS', { fontSize: 17, color: '#065f46' });
    sub.position.set(0, -panelH / 2 - 0.9, 0);
    sub.visible = this.opts.showNumbers;
    this._dbSub = sub;
    g.add(sub);

    this._applyTopK();
  }

  // Highlight the top-K retrieved rows in the vector DB
  _applyTopK() {
    if (!this._dbCells.length) return;
    const k = Math.max(1, Math.min(this.opts.numChunks, this.opts.topK));
    this._dbCells.forEach(cell => {
      const isTopK = cell.userData.row < k;
      cell.material.emissiveIntensity = isTopK
        ? Math.min(1.4, cell.userData.baseEmissive * 3.5)
        : cell.userData.baseEmissive * 0.35;
      cell.material.opacity = isTopK ? 1.0 : 0.45;
    });
  }

  // Cosine similarity labels near retrieved rows
  _buildSimilarityLabels() {
    this._simLabels.forEach(l => this.root.remove(l));
    this._simLabels = [];
    if (!this.opts.showSimilarity) return;

    const k = Math.max(1, Math.min(this.opts.numChunks, this.opts.topK));
    const n = Math.max(2, Math.min(6, this.opts.numChunks));
    const SIM_SCORES = [0.94, 0.87, 0.72, 0.61, 0.53, 0.44];
    const COLS = this._dbCols;
    const ROWS = n;
    const panelH = ROWS * 0.9 + 0.6;

    for (let r = 0; r < k; r++) {
      const score = SIM_SCORES[r] ?? (0.40 + Math.random() * 0.2);
      const y = (r - (ROWS - 1) / 2) * 0.9;
      const lbl = makeTextSprite(`sim=${score.toFixed(2)} ★`, { fontSize: 19, color: '#22d3ee' });
      lbl.position.set(10 + (COLS * 0.9 / 2) + 1.8, y, 0.5);
      this.root.add(lbl);
      this._simLabels.push(lbl);
    }
  }

  // ------------------------------------------------------------------ stage 5 — query + retrieve

  _buildQuery() {
    const g = new THREE.Group();
    g.position.set(18, 0, 0);
    this.root.add(g);

    const qGeo = new THREE.SphereGeometry(0.62, 14, 10);
    const qMat = new THREE.MeshPhysicalMaterial({
      color: '#f0f9ff', emissive: '#22d3ee', emissiveIntensity: 1.1,
      metalness: 0.05, roughness: 0.08, clearcoat: 1.0,
      transparent: true, opacity: 0.92,
    });
    this._querySphere = new THREE.Mesh(qGeo, qMat);
    g.add(this._querySphere);

    const mkRing = (r, col, op) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.03, 8, 48),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: op }),
      );
      g.add(m);
      return m;
    };
    this._qRing1 = mkRing(1.4, '#22d3ee', 0.42);
    this._qRing1.rotation.x = Math.PI / 2;
    this._qRing2 = mkRing(1.9, '#22d3ee', 0.18);
    this._qRing2.rotation.z = Math.PI / 4;
    this._qRing3 = mkRing(2.4, '#22d3ee', 0.09);
    this._qRing3.rotation.x = Math.PI / 3;

    // topK beam lines from query to DB
    const k = Math.max(1, Math.min(this.opts.numChunks, this.opts.topK));
    const n = this.opts.numChunks;
    for (let r = 0; r < k; r++) {
      const y = (r - (n - 1) / 2) * 0.9;
      const col = ALL_CHUNK_COLORS[r];
      const pts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(-8.5, y, 0)];
      g.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.22 }),
      ));
    }

    const lbl = makeTextSprite('Query + Retrieve', { fontSize: 24, color: '#67e8f9' });
    lbl.position.set(0, 3.4, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite(`Top-${this.opts.topK} cosine neighbours`, { fontSize: 17, color: '#164e63' });
    sub.position.set(0, -3.0, 0);
    sub.visible = this.opts.showNumbers;
    this._querySub = sub;
    g.add(sub);
  }

  // ------------------------------------------------------------------ stage 6 — llm

  _buildLLM() {
    const g = new THREE.Group();
    g.position.set(27, 0, 0);
    this.root.add(g);

    const geo = new THREE.BoxGeometry(3.0, 3.4, 0.55);
    const mat = new THREE.MeshPhysicalMaterial({
      color: '#4ade80', emissive: '#00ea64', emissiveIntensity: 0.4,
      roughness: 0.2, metalness: 0.1, clearcoat: 0.8,
      transparent: true, opacity: 0.85,
    });
    this._llmBox = new THREE.Mesh(geo, mat);
    g.add(this._llmBox);
    g.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: '#4ade80', transparent: true, opacity: 0.6 }),
    ));

    for (let i = 0; i < 5; i++) {
      const lw = 0.5 + Math.random() * 1.4;
      const lmesh = new THREE.Mesh(
        new THREE.PlaneGeometry(lw, 0.075),
        new THREE.MeshBasicMaterial({ color: '#4ade80', transparent: true, opacity: 0.5 }),
      );
      lmesh.position.set(-0.7 + lw / 2 - 1.5, 1.3 - i * 0.45, 0.29);
      g.add(lmesh);
    }

    // Show topK context windows being fed in
    const k = Math.max(1, Math.min(this.opts.numChunks, this.opts.topK));
    for (let r = 0; r < k; r++) {
      const col = ALL_CHUNK_COLORS[r];
      const ctx = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.35, 0.08),
        new THREE.MeshPhysicalMaterial({ color: col, emissive: col, emissiveIntensity: 0.8, transparent: true, opacity: 0.75 }),
      );
      ctx.position.set(-2.0, 1.2 - r * 0.42, 0.35);
      g.add(ctx);
    }

    const lbl = makeTextSprite('LLM + Answer', { fontSize: 24, color: '#4ade80' });
    lbl.position.set(0, 3.2, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite('context-augmented generation', { fontSize: 17, color: '#14532d' });
    sub.position.set(0, -3.0, 0);
    sub.visible = this.opts.showNumbers;
    this._llmSub = sub;
    g.add(sub);
  }

  // ------------------------------------------------------------------ flow connectors

  _buildFlowConnectors() {
    const n = Math.max(2, Math.min(6, this.opts.numChunks));
    const COLORS = ALL_CHUNK_COLORS.slice(0, n);

    const connections = [
      { from: new THREE.Vector3(-15.7, 0, 0), to: new THREE.Vector3(-11.4, 0, 0), col: '#94a3b8' },
      ...COLORS.map((col, i) => {
        const y = (i - (n - 1) / 2) * 2.1;
        return { from: new THREE.Vector3(-6.6, y, 0), to: new THREE.Vector3(-2.8, y * 0.55, 0), col };
      }),
      { from: new THREE.Vector3(2.4, 0, 0), to: new THREE.Vector3(7.0, 0, 0), col: '#22d3ee' },
      { from: new THREE.Vector3(13.0, 0, 0), to: new THREE.Vector3(17.2, 0, 0), col: '#34d399' },
      { from: new THREE.Vector3(19.0, 0, 0), to: new THREE.Vector3(25.2, 0, 0), col: '#67e8f9' },
    ];

    this._flowDots = [];
    connections.forEach((conn, ci) => {
      this.root.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([conn.from.clone(), conn.to.clone()]),
        new THREE.LineBasicMaterial({ color: conn.col, transparent: true, opacity: 0.18 }),
      ));

      const mkDot = (tOffset, r, opacity) => {
        const dMat = new THREE.MeshPhysicalMaterial({
          color: conn.col, emissive: conn.col, emissiveIntensity: 1.3 * opacity,
          metalness: 0.1, roughness: 0.1, transparent: opacity < 1, opacity,
        });
        const dot = new THREE.Mesh(new THREE.SphereGeometry(r, 6, 4), dMat);
        this.root.add(dot);
        this._flowDots.push({
          from: conn.from.clone(), to: conn.to.clone(), dot,
          t: (ci * 0.1 + tOffset) % 1,
          speed: 0.28 + Math.random() * 0.18,
        });
      };
      mkDot(0,    0.11, 1.0);
      mkDot(0.5,  0.08, 0.5);
    });
  }

  // ------------------------------------------------------------------ pipeline label

  _buildPipelineLabel() {
    const lbl = makeTextSprite('RAG Pipeline:  Ingest → Embed → Index → Retrieve → Generate', { fontSize: 21 });
    lbl.position.set(4.5, 8.0, 0);
    this.root.add(lbl);
    this._labels.push(lbl);
  }

  // ------------------------------------------------------------------ visibility

  _applyLabelVisibility() {
    const show = this.opts.showNumbers;
    [this._docSub, this._chunkSub, this._embSub, this._dbSub, this._querySub, this._llmSub]
      .forEach(s => { if (s) s.visible = show; });
  }

  // ------------------------------------------------------------------ update

  update(dt, t) {
    if (!this.opts.animate) return;
    const spd = this.opts.speed;

    if (this._docRing) this._docRing.rotation.z = t * 0.55;

    if (this._docMesh) {
      const p = Math.sin(t * 1.8) * 0.5 + 0.5;
      this._docMesh.material.emissiveIntensity = 0.3 + p * 0.35;
    }

    this._chunkMeshes.forEach(c => {
      const p = Math.sin(t * 2.1 + c.userData.phase) * 0.5 + 0.5;
      c.material.emissiveIntensity = 0.15 + p * 0.4;
    });

    this._embPoints.forEach(pt => {
      const p = Math.sin(t * 2.6 + pt.userData.phase) * 0.5 + 0.5;
      pt.material.emissiveIntensity = 0.55 + p * 0.65;
      pt.scale.setScalar(0.82 + p * 0.28);
    });

    const k = Math.max(1, Math.min(this.opts.numChunks, this.opts.topK));
    this._dbCells.forEach(cell => {
      const p = Math.sin(t * 2.0 + cell.userData.phase) * 0.5 + 0.5;
      const isTopK = cell.userData.row < k;
      const factor = isTopK ? (0.7 + p * 1.2) : (0.3 + p * 0.35);
      cell.material.emissiveIntensity = cell.userData.baseEmissive * factor;
    });

    if (this._querySphere) {
      const p = Math.sin(t * 2.4) * 0.5 + 0.5;
      this._querySphere.material.emissiveIntensity = 0.75 + p * 0.65;
      this._querySphere.scale.setScalar(0.9 + p * 0.14);
      this._qRing1.rotation.y = t * 0.95;
      this._qRing2.rotation.x = t * 0.7;
      this._qRing3.rotation.z = t * 0.55;
    }

    if (this._llmBox) {
      const p = Math.sin(t * 1.6) * 0.5 + 0.5;
      this._llmBox.material.emissiveIntensity = 0.28 + p * 0.42;
    }

    this._flowDots.forEach(fd => {
      fd.t = (fd.t + dt * spd * fd.speed) % 1;
      fd.dot.position.lerpVectors(fd.from, fd.to, fd.t);
    });
  }

  onActivate() {}
  onDeactivate() {}
}
