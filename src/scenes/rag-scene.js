import * as THREE from 'three';
import { setupLights, addGroundGrid, makeTextSprite, clearGroup } from '../util/three-helpers.js';

/**
 * RAGScene — Retrieval-Augmented Generation pipeline
 *
 * Left-to-right pipeline with 5 stages:
 *
 *  [Document]  →  [Chunks]  →  [Embedding Space]  →  [Vector DB]  →  [Query/Retrieve]  →  [LLM]
 *
 * Stage 1 — Document: a glowing book slab that "splits" into chunks.
 * Stage 2 — Chunks: 4 coloured text-block slabs, each a semantic segment.
 * Stage 3 — Embedding Space: 3D point cloud, 4 colour-coded clusters.
 *            Represents a projected view of the high-dimensional vector space.
 * Stage 4 — Vector Store: a grid of glowing cells, rows per chunk colour.
 *            Represents indexed vectors in a DB like Pinecone / pgvector.
 * Stage 5 — Query + Retrieve: a cyan sphere (the query embedding) with
 *            animated rings. Highlight beam finds nearest neighbours in the DB.
 * Stage 6 — LLM + Answer: the final green box — context-augmented generation.
 *
 * Animated flow dots travel between stages showing data movement.
 */
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
    };

    this._flowDots  = [];
    this._embPoints = [];
    this._dbCells   = [];
    this._chunkMeshes = [];
    this._labels    = [];

    this._build();
  }

  setOptions(partial) {
    Object.assign(this.opts, partial);
    if ('showNumbers' in partial) this._applyLabelVisibility();
  }

  // ------------------------------------------------------------------ build

  _build() {
    clearGroup(this.root);
    this._flowDots  = [];
    this._embPoints = [];
    this._dbCells   = [];
    this._chunkMeshes = [];
    this._labels    = [];

    this._buildDocument();
    this._buildChunks();
    this._buildEmbeddingSpace();
    this._buildVectorDB();
    this._buildQuery();
    this._buildLLM();
    this._buildFlowConnectors();
    this._buildPipelineLabel();
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

    // Faint text lines
    for (let i = 0; i < 8; i++) {
      const lw = 0.5 + Math.random() * 1.4;
      const lm = new THREE.MeshBasicMaterial({ color: '#cbd5e1', transparent: true, opacity: 0.45 });
      const lmesh = new THREE.Mesh(new THREE.PlaneGeometry(lw, 0.075), lm);
      lmesh.position.set(-0.6 + lw / 2 - 1.3, 1.55 - i * 0.42, 0.24);
      g.add(lmesh);
    }

    const ringGeo = new THREE.TorusGeometry(2.6, 0.035, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: '#94a3b8', transparent: true, opacity: 0.18 });
    this._docRing = new THREE.Mesh(ringGeo, ringMat);
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
    const COLORS = ['#ec4899', '#a78bfa', '#22d3ee', '#fbbf24'];
    const g = new THREE.Group();
    g.position.set(-9, 0, 0);
    this.root.add(g);
    this._chunkMeshes = [];

    COLORS.forEach((col, i) => {
      const y = (i - 1.5) * 2.2;
      const geo = new THREE.BoxGeometry(2.6, 1.35, 0.42);
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
        const lm = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.38 });
        const lmesh = new THREE.Mesh(new THREE.PlaneGeometry(lw, 0.065), lm);
        lmesh.position.set(-0.65 + lw / 2 - 1.3, y - 0.28 + j * 0.26, 0.22);
        g.add(lmesh);
      }
    });

    const lbl = makeTextSprite('Chunks', { fontSize: 24, color: '#c4b5fd' });
    lbl.position.set(0, 4.1, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite('text splitting → overlap', { fontSize: 17, color: '#6d28d9' });
    sub.position.set(0, -3.9, 0);
    sub.visible = this.opts.showNumbers;
    this._chunkSub = sub;
    g.add(sub);
  }

  // ------------------------------------------------------------------ stage 3 — embedding space

  _buildEmbeddingSpace() {
    const g = new THREE.Group();
    g.position.set(0, 0, 0);
    this.root.add(g);

    const COLORS = ['#ec4899', '#a78bfa', '#22d3ee', '#fbbf24'];
    const centers = [
      new THREE.Vector3(-1.4, 1.6, -0.8),
      new THREE.Vector3(1.6, 1.4, 0.9),
      new THREE.Vector3(-1.6, -1.4, 0.9),
      new THREE.Vector3(1.4, -1.6, -0.8),
    ];

    this._embPoints = [];
    COLORS.forEach((col, ci) => {
      const center = centers[ci];
      for (let k = 0; k < 9; k++) {
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
    [
      [1, 0, 0], [0, 1, 0], [0, 0, 1],
    ].forEach(dir => {
      const L = 3.8;
      const pts = [
        new THREE.Vector3(-dir[0] * L, -dir[1] * L, -dir[2] * L),
        new THREE.Vector3(dir[0] * L, dir[1] * L, dir[2] * L),
      ];
      g.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: '#334155', transparent: true, opacity: 0.35 }),
      ));
    });

    // Bounding wireframe sphere
    g.add(new THREE.Mesh(
      new THREE.SphereGeometry(3.4, 10, 7),
      new THREE.MeshBasicMaterial({ color: '#1e293b', wireframe: true, transparent: true, opacity: 0.07 }),
    ));

    const lbl = makeTextSprite('Embedding Space', { fontSize: 24, color: '#22d3ee' });
    lbl.position.set(0, 4.6, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite('768-dim → 3D projection', { fontSize: 17, color: '#155e75' });
    sub.position.set(0, -4.3, 0);
    sub.visible = this.opts.showNumbers;
    this._embSub = sub;
    g.add(sub);
  }

  // ------------------------------------------------------------------ stage 4 — vector db

  _buildVectorDB() {
    const g = new THREE.Group();
    g.position.set(10, 0, 0);
    this.root.add(g);

    const COLORS = ['#ec4899', '#a78bfa', '#22d3ee', '#fbbf24'];
    const COLS = 6, ROWS = 4;
    this._dbCells = [];

    // Back panel
    g.add(new THREE.Mesh(
      new THREE.BoxGeometry(COLS * 0.9 + 0.6, ROWS * 0.9 + 0.6, 0.25),
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
        g.add(cell);
        this._dbCells.push(cell);
      }
    }

    const lbl = makeTextSprite('Vector Store', { fontSize: 24, color: '#34d399' });
    lbl.position.set(0, 3.4, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite('pgvector / Pinecone / FAISS', { fontSize: 17, color: '#065f46' });
    sub.position.set(0, -3.5, 0);
    sub.visible = this.opts.showNumbers;
    this._dbSub = sub;
    g.add(sub);
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

    // Animated rings
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

    const lbl = makeTextSprite('Query + Retrieve', { fontSize: 24, color: '#67e8f9' });
    lbl.position.set(0, 3.4, 0);
    g.add(lbl);
    this._labels.push(lbl);

    const sub = makeTextSprite('Top-K cosine neighbours', { fontSize: 17, color: '#164e63' });
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

    // Token output lines
    for (let i = 0; i < 5; i++) {
      const lw = 0.5 + Math.random() * 1.4;
      const lmesh = new THREE.Mesh(
        new THREE.PlaneGeometry(lw, 0.075),
        new THREE.MeshBasicMaterial({ color: '#4ade80', transparent: true, opacity: 0.5 }),
      );
      lmesh.position.set(-0.7 + lw / 2 - 1.5, 1.3 - i * 0.45, 0.29);
      g.add(lmesh);
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
    const connections = [
      // doc → chunks (single, middle)
      { from: new THREE.Vector3(-15.7, 0, 0), to: new THREE.Vector3(-11.4, 0, 0), col: '#94a3b8' },
      // chunks → embedding (4 coloured lines)
      { from: new THREE.Vector3(-6.6, 3.3, 0), to: new THREE.Vector3(-2.8, 2.2, 0), col: '#ec4899' },
      { from: new THREE.Vector3(-6.6, 1.1, 0), to: new THREE.Vector3(-2.8, 0.8, 0), col: '#a78bfa' },
      { from: new THREE.Vector3(-6.6, -1.1, 0), to: new THREE.Vector3(-2.8, -0.8, 0), col: '#22d3ee' },
      { from: new THREE.Vector3(-6.6, -3.3, 0), to: new THREE.Vector3(-2.8, -2.2, 0), col: '#fbbf24' },
      // embedding → vector db
      { from: new THREE.Vector3(2.4, 0, 0), to: new THREE.Vector3(7.0, 0, 0), col: '#22d3ee' },
      // vector db → query
      { from: new THREE.Vector3(13.0, 0, 0), to: new THREE.Vector3(17.2, 0, 0), col: '#34d399' },
      // query → llm
      { from: new THREE.Vector3(19.0, 0, 0), to: new THREE.Vector3(25.2, 0, 0), col: '#67e8f9' },
    ];

    this._flowDots = [];
    connections.forEach((conn, ci) => {
      this.root.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([conn.from.clone(), conn.to.clone()]),
        new THREE.LineBasicMaterial({ color: conn.col, transparent: true, opacity: 0.18 }),
      ));

      // Primary dot
      const dMat = new THREE.MeshPhysicalMaterial({
        color: conn.col, emissive: conn.col, emissiveIntensity: 1.3,
        metalness: 0.1, roughness: 0.1,
      });
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.11, 6, 4), dMat);
      this.root.add(dot);
      this._flowDots.push({
        from: conn.from.clone(), to: conn.to.clone(), dot,
        t: (ci * 0.125) % 1,
        speed: 0.28 + Math.random() * 0.18,
      });

      // Second trailing dot for denser visual
      const dMat2 = new THREE.MeshPhysicalMaterial({
        color: conn.col, emissive: conn.col, emissiveIntensity: 0.6,
        metalness: 0.1, roughness: 0.2, transparent: true, opacity: 0.5,
      });
      const dot2 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 4), dMat2);
      this.root.add(dot2);
      this._flowDots.push({
        from: conn.from.clone(), to: conn.to.clone(), dot: dot2,
        t: ((ci * 0.125) + 0.5) % 1,
        speed: 0.28 + Math.random() * 0.18,
      });
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

    // Document ring spin
    if (this._docRing) this._docRing.rotation.z = t * 0.55;

    // Doc pulse
    if (this._docMesh) {
      const p = Math.sin(t * 1.8) * 0.5 + 0.5;
      this._docMesh.material.emissiveIntensity = 0.3 + p * 0.35;
    }

    // Chunk pulse
    this._chunkMeshes.forEach(c => {
      const p = Math.sin(t * 2.1 + c.userData.phase) * 0.5 + 0.5;
      c.material.emissiveIntensity = 0.15 + p * 0.4;
    });

    // Embedding point breathe
    this._embPoints.forEach(pt => {
      const p = Math.sin(t * 2.6 + pt.userData.phase) * 0.5 + 0.5;
      pt.material.emissiveIntensity = 0.55 + p * 0.65;
      pt.scale.setScalar(0.82 + p * 0.28);
    });

    // DB cell twinkle
    this._dbCells.forEach(cell => {
      const p = Math.sin(t * 2.0 + cell.userData.phase) * 0.5 + 0.5;
      cell.material.emissiveIntensity = cell.userData.baseEmissive * (0.55 + p * 0.9);
    });

    // Query pulse + ring spin
    if (this._querySphere) {
      const p = Math.sin(t * 2.4) * 0.5 + 0.5;
      this._querySphere.material.emissiveIntensity = 0.75 + p * 0.65;
      this._querySphere.scale.setScalar(0.9 + p * 0.14);
      this._qRing1.rotation.y = t * 0.95;
      this._qRing2.rotation.x = t * 0.7;
      this._qRing3.rotation.z = t * 0.55;
    }

    // LLM pulse
    if (this._llmBox) {
      const p = Math.sin(t * 1.6) * 0.5 + 0.5;
      this._llmBox.material.emissiveIntensity = 0.28 + p * 0.42;
    }

    // Flow dots
    this._flowDots.forEach(fd => {
      fd.t = (fd.t + dt * spd * fd.speed) % 1;
      fd.dot.position.lerpVectors(fd.from, fd.to, fd.t);
    });
  }

  onActivate() {}
  onDeactivate() {}
}
