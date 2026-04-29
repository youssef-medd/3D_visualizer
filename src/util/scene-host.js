import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { bgColor } from './colors.js';

/**
 * SceneHost: one shared WebGLRenderer + animation loop, with a cinematic
 * post-processing stack (RenderPass → UnrealBloom → FXAA → Output).
 *
 * Scenes register themselves and provide their own camera, scene graph,
 * update logic, and (optionally) a custom OrbitControls config.
 *
 * Why one renderer: cheap to switch tabs, no GPU context churn.
 *
 * Why post-processing here: bloom + FXAA make the slabs look like real
 * glass/data tensors instead of flat untextured boxes — the cinematic
 * glow the user asked for in request #4 / #6.
 */
export class SceneHost {
  constructor(domHost) {
    this.domHost = domHost;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(bgColor, 1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.domElement.style.display = 'block';
    domHost.appendChild(this.renderer.domElement);

    this.activeScene = null;
    this.scenes = new Map();
    this.controls = null;

    // ---- Post-processing pipeline ----
    // Built once; reattached to active scene/camera on every activate().
    this.composer = new EffectComposer(this.renderer);
    this.renderPass = null; // (re)created per scene
    // Reasonable bloom defaults — lifted at scene level if needed.
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(1, 1),
      0.55,   // strength
      0.55,   // radius
      0.85,   // threshold
    );
    this.fxaaPass = new ShaderPass(FXAAShader);
    this.outputPass = new OutputPass();
    // Pipeline assembled in _rebuildComposer()

    this.clock = new THREE.Clock();
    this._loop = this._loop.bind(this);

    this._resize = this._resize.bind(this);
    window.addEventListener('resize', this._resize);

    if (typeof ResizeObserver !== 'undefined') {
      this._ro = new ResizeObserver(this._resize);
      this._ro.observe(domHost);
    }

    this._resize();
    requestAnimationFrame(this._loop);
  }

  register(name, sceneObj) {
    this.scenes.set(name, sceneObj);
  }

  /**
   * Adjust bloom in real time. Useful for the "Cinematic glow" toggle
   * and the global Style panel.
   */
  setBloom({ strength, radius, threshold } = {}) {
    if (typeof strength === 'number') this.bloomPass.strength = strength;
    if (typeof radius === 'number') this.bloomPass.radius = radius;
    if (typeof threshold === 'number') this.bloomPass.threshold = threshold;
  }

  setBloomEnabled(enabled) {
    this.bloomPass.enabled = !!enabled;
  }

  activate(name) {
    const next = this.scenes.get(name);
    if (!next) {
      console.warn(`SceneHost: no scene named "${name}"`);
      return;
    }
    if (this.activeScene === next) return;

    if (this.activeScene && typeof this.activeScene.onDeactivate === 'function') {
      this.activeScene.onDeactivate();
    }

    if (this.controls) {
      this.controls.dispose();
      this.controls = null;
    }

    this.activeScene = next;
    this._rebuildComposer();

    if (next.camera) {
      this.controls = new OrbitControls(next.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.08;
      this.controls.minDistance = 4;
      this.controls.maxDistance = 120;
      if (next.controlsConfig) {
        Object.assign(this.controls, next.controlsConfig);
      }
    }

    if (typeof next.onActivate === 'function') {
      next.onActivate(this);
    }
    this._resize();
    // Deferred resize to handle first-paint scenarios where the canvas
    // has no dimensions yet when the DOM is freshly laid out.
    requestAnimationFrame(() => this._resize());
    setTimeout(() => this._resize(), 80);
  }

  _rebuildComposer() {
    // EffectComposer doesn't expose a public `removePass`, so swap the
    // internal passes array. Order matters: render → bloom → fxaa → out.
    this.composer.passes = [];
    if (!this.activeScene?.scene || !this.activeScene?.camera) return;
    this.renderPass = new RenderPass(this.activeScene.scene, this.activeScene.camera);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(this.fxaaPass);
    this.composer.addPass(this.outputPass);
  }

  _resize() {
    const { width, height } = this.domHost.getBoundingClientRect();
    if (width === 0 || height === 0) return;
    this.renderer.setSize(width, height, false);
    this.composer.setSize(width, height);
    this.bloomPass.setSize?.(width, height);
    if (this.fxaaPass.material?.uniforms?.resolution) {
      const pr = this.renderer.getPixelRatio();
      this.fxaaPass.material.uniforms.resolution.value.set(1 / (width * pr), 1 / (height * pr));
    }
    if (this.activeScene?.camera) {
      const cam = this.activeScene.camera;
      if (cam.isPerspectiveCamera) {
        cam.aspect = width / height;
        cam.updateProjectionMatrix();
      } else if (cam.isOrthographicCamera) {
        const half = (cam.userData.frustumSize ?? 10) / 2;
        const aspect = width / height;
        cam.left = -half * aspect;
        cam.right = half * aspect;
        cam.top = half;
        cam.bottom = -half;
        cam.updateProjectionMatrix();
      }
    }
  }

  _loop() {
    requestAnimationFrame(this._loop);
    const dt = this.clock.getDelta();
    const t = this.clock.getElapsedTime();

    if (!this.activeScene) return;
    if (typeof this.activeScene.update === 'function') {
      this.activeScene.update(dt, t);
    }
    if (this.controls) this.controls.update();

    // Render via composer (post-processing). Falls back to direct render
    // if composer somehow lost its passes.
    if (this.composer.passes.length > 0) {
      this.composer.render();
    } else {
      this.renderer.render(this.activeScene.scene, this.activeScene.camera);
    }
  }
}
