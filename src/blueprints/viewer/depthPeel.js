/**
 * Multi-pass depth peeling (Everitt-style) for part opacity.
 *
 * Fade path when {@link USE_DEPTH_PEEL} is true: opaque colour + float32
 * linear eye-space Z, then N peels ordered by hardware depth (LESS) while
 * recording linear view-Z into float colour targets. The live view always
 * passes `quality: "fast"`: one sorted-alpha draw, no peel targets. A
 * full-res 12-layer peel is ~20× the draw calls (gable is ~6k meshes and
 * ~128k draws) and blocks input for seconds, so it is only for an explicit
 * plate capture (`quality: "high"`). On any fail-safe abort, restore
 * visibility and fall back to one full `renderer.render` with standard
 * alpha so faded parts never vanish for a frame.
 *
 * Do **not** sample the logarithmic DepthTexture against gl_FragCoord.z —
 * that comparison is invalid with logarithmicDepthBuffer and discards every
 * translucent fragment. Do **not** rely on MinEquation blending (flaky on
 * some GPUs); nearest-layer selection uses the depth buffer instead.
 *
 * Literal material opacity — no crush, no SOLID_ALPHA&lt;1 stand-in.
 */
import * as THREE from "three";
import { isEdgeOverlay, renderEdgeOverlayPass, setEdgeOverlaysVisible } from "./edges.js";

/**
 * Everitt peels for CAD shell stacking. Sorted alpha remains the emergency
 * fallback via {@link createDepthPeelRenderer}'s abortToStandard.
 */
export const USE_DEPTH_PEEL = true;

/** Fast-path peel layers while the camera is moving. */
export const MAX_PEELS_FAST = 5;
/** Settled path — match proven main-branch layer count. */
export const MAX_PEELS_HIGH = 12;
/** @deprecated use MAX_PEELS_FAST / MAX_PEELS_HIGH — kept as the high cap. */
export const MAX_PEELS = MAX_PEELS_HIGH;

/** Absolute eye-space Z epsilon (metres). */
export const VIEW_Z_EPSILON = 1e-3;

/** Peel RT scale while moving (opaques stay full-res). */
export const PEEL_SCALE_FAST = 0.5;
/** Peel RT scale when the camera is settled. */
export const PEEL_SCALE_HIGH = 1;

/**
 * Sentinel “no fragment / far” for view-Z colour targets.
 * Fits comfortably in float32; avoid float16 for peel Z.
 */
const VIEW_Z_FAR = 1e5;

/** Shared peel stage: 0=off, 1=peel depth (viewZ), 2=peel colour. */
export const peelStageUniform = { value: 0 };

const peelUniforms = {
  tPrevViewZ: { value: null },
  tPeelViewZ: { value: null },
  tOpaqueViewZ: { value: null },
  uViewZEps: { value: VIEW_Z_EPSILON },
  uResolution: { value: new THREE.Vector2(1, 1) },
};

/**
 * @param {THREE.Material} mat
 */
/**
 * Push shared peel uniforms into a compiled material program for this draw.
 * Three may keep stale texture/stage values unless we refresh every pass.
 * @param {THREE.Material} mat
 */
function syncPeelUniforms(mat) {
  const shader = mat?.userData?.shader;
  if (!shader?.uniforms) return;
  const u = shader.uniforms;
  if (u.uPeelStage) u.uPeelStage.value = peelStageUniform.value;
  if (u.tPrevViewZ) u.tPrevViewZ.value = peelUniforms.tPrevViewZ.value;
  if (u.tPeelViewZ) u.tPeelViewZ.value = peelUniforms.tPeelViewZ.value;
  if (u.tOpaqueViewZ) u.tOpaqueViewZ.value = peelUniforms.tOpaqueViewZ.value;
  if (u.uViewZEps) u.uViewZEps.value = peelUniforms.uViewZEps.value;
  if (u.uResolution) {
    u.uResolution.value.copy(peelUniforms.uResolution.value);
  }
}

export function patchMaterialForDepthPeel(mat) {
  if (!mat || mat.userData.depthPeelPatched) return;
  mat.userData.depthPeelPatched = true;

  const prevCacheKey = mat.customProgramCacheKey?.bind(mat);
  mat.customProgramCacheKey = () =>
    `${prevCacheKey ? prevCacheKey() : mat.type}|depthPeel10`;

  const prevCompile = mat.onBeforeCompile?.bind(mat);
  mat.onBeforeCompile = (shader, renderer) => {
    prevCompile?.(shader, renderer);
    shader.uniforms.uPeelStage = peelStageUniform;
    shader.uniforms.tPrevViewZ = peelUniforms.tPrevViewZ;
    shader.uniforms.tPeelViewZ = peelUniforms.tPeelViewZ;
    shader.uniforms.tOpaqueViewZ = peelUniforms.tOpaqueViewZ;
    shader.uniforms.uViewZEps = peelUniforms.uViewZEps;
    shader.uniforms.uResolution = peelUniforms.uResolution;
    // Keep a live handle so onBeforeRender can refresh .value each peel pass.
    mat.userData.shader = shader;

    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `#include <common>
varying float vPeelViewZ;`,
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <project_vertex>",
      `#include <project_vertex>
	vPeelViewZ = -mvPosition.z;`,
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `#include <common>
uniform float uPeelStage;
uniform sampler2D tPrevViewZ;
uniform sampler2D tPeelViewZ;
uniform sampler2D tOpaqueViewZ;
uniform float uViewZEps;
uniform vec2 uResolution;
varying float vPeelViewZ;`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
	if (uPeelStage > 0.5) {
		vec2 peelUv = gl_FragCoord.xy / uResolution;
		float opaqueZ = texture2D(tOpaqueViewZ, peelUv).r;
		float prevZ = texture2D(tPrevViewZ, peelUv).r;
		float eps = max(uViewZEps, 1e-3 * max(vPeelViewZ, 1.0));
		// Behind an opaque solid (linear eye-space Z). Skip when opaqueZ is
		// ~0 (dead clear / failed float RT) so we do not discard every frag.
		if (opaqueZ > 1e-4 && vPeelViewZ >= opaqueZ - eps) discard;
		// Already peeled (at or in front of previous layer).
		if (vPeelViewZ <= prevZ + eps) discard;
		if (uPeelStage < 1.5) {
			// Depth peel: write linear view-Z; nearest wins via depthTest LESS.
			gl_FragColor = vec4(vPeelViewZ, 0.0, 0.0, 1.0);
		} else {
			float peelZ = texture2D(tPeelViewZ, peelUv).r;
			if (peelZ > ${(VIEW_Z_FAR * 0.5).toFixed(1)}) discard;
			// Tolerant band: anything from prev..peel that belongs to this layer.
			float peelEps = max(uViewZEps, 1e-3 * max(peelZ, 1.0));
			if (vPeelViewZ > peelZ + peelEps) discard;
		}
	}`,
    );
  };
  mat.needsUpdate = true;
}

/**
 * @param {THREE.WebGLRenderer} renderer
 */
export function createDepthPeelRenderer(renderer) {
  const size = new THREE.Vector2();
  const bgColor = new THREE.Color();

  /** @type {THREE.WebGLRenderTarget | null} */
  let opaqueRT = null;
  /** @type {THREE.WebGLRenderTarget | null} */
  let opaqueViewZRT = null;
  /** @type {THREE.WebGLRenderTarget | null} */
  let peelViewZRT = null;
  /** @type {THREE.WebGLRenderTarget | null} */
  let prevViewZRT = null;
  /** @type {THREE.WebGLRenderTarget | null} */
  let accumRT = null;
  /** @type {THREE.WebGLRenderTarget | null} */
  let layerRT = null;

  const compositeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const compositeScene = new THREE.Scene();
  const compositeMat = new THREE.ShaderMaterial({
    uniforms: {
      tOpaque: { value: null },
      tAccum: { value: null },
      uBackground: { value: new THREE.Color(0x111111) },
    },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D tOpaque;
      uniform sampler2D tAccum;
      uniform vec3 uBackground;
      varying vec2 vUv;
      void main() {
        vec4 opaque = texture2D(tOpaque, vUv);
        vec4 accum = texture2D(tAccum, vUv);
        vec3 base = mix(uBackground, opaque.rgb, opaque.a > 0.001 ? 1.0 : 0.0);
        vec3 color = accum.rgb + (1.0 - accum.a) * base;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  const compositeQuad = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    compositeMat,
  );
  compositeScene.add(compositeQuad);

  const blitMat = new THREE.ShaderMaterial({
    uniforms: { tSrc: { value: null } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D tSrc;
      varying vec2 vUv;
      void main() {
        vec4 c = texture2D(tSrc, vUv);
        // Colour pass uses NormalBlending into a cleared target, so rgb is
        // already premultiplied. Multiplying by alpha again crushes the tint
        // (a 0.35 wash of the mineral wool landed as muddy grey on the plate).
        gl_FragColor = vec4(c.rgb, c.a);
      }
    `,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneMinusDstAlphaFactor,
    blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.OneMinusDstAlphaFactor,
    blendDstAlpha: THREE.OneFactor,
    blendEquation: THREE.AddEquation,
  });
  const blitQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blitMat);
  const blitScene = new THREE.Scene();
  blitScene.add(blitQuad);

  const clearViewZMat = new THREE.ShaderMaterial({
    uniforms: { uValue: { value: 0 } },
    vertexShader: /* glsl */ `
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uValue;
      void main() {
        gl_FragColor = vec4(uValue, 0.0, 0.0, 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  const clearViewZQuad = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    clearViewZMat,
  );
  const clearViewZScene = new THREE.Scene();
  clearViewZScene.add(clearViewZQuad);

  // Linear eye-space Z for opaques; nearest wins via depthTest LESS.
  const opaqueViewZMat = new THREE.ShaderMaterial({
    vertexShader: /* glsl */ `
      #include <common>
      #include <batching_pars_vertex>
      #include <uv_pars_vertex>
      #include <displacementmap_pars_vertex>
      #include <morphtarget_pars_vertex>
      #include <skinning_pars_vertex>
      #include <clipping_planes_pars_vertex>
      varying float vViewZ;
      void main() {
        #include <uv_vertex>
        #include <batching_vertex>
        #include <skinbase_vertex>
        #include <begin_vertex>
        #include <morphtarget_vertex>
        #include <skinning_vertex>
        #include <displacementmap_vertex>
        #include <project_vertex>
        #include <clipping_planes_vertex>
        vViewZ = -mvPosition.z;
      }
    `,
    fragmentShader: /* glsl */ `
      #include <common>
      #include <clipping_planes_pars_fragment>
      varying float vViewZ;
      void main() {
        #include <clipping_planes_fragment>
        gl_FragColor = vec4(vViewZ, 0.0, 0.0, 1.0);
      }
    `,
    depthTest: true,
    depthWrite: true,
    toneMapped: false,
    side: THREE.DoubleSide,
    clipping: true,
    blending: THREE.NoBlending,
  });

  /**
   * @param {THREE.WebGLRenderTarget} target
   * @param {number} value
   * @param {{ clearDepth?: boolean }} [opts]
   */
  function clearViewZTarget(target, value, opts = {}) {
    clearViewZMat.uniforms.uValue.value = value;
    const prev = renderer.autoClear;
    renderer.setRenderTarget(target);
    if (opts.clearDepth) {
      renderer.setClearColor(0x000000, 1);
      renderer.clear(false, true, false);
    }
    renderer.autoClear = false;
    renderer.render(clearViewZScene, compositeCamera);
    renderer.autoClear = prev;
  }

  function disposeTargets() {
    opaqueRT?.dispose();
    opaqueViewZRT?.dispose();
    peelViewZRT?.dispose();
    prevViewZRT?.dispose();
    accumRT?.dispose();
    layerRT?.dispose();
    opaqueRT = null;
    opaqueViewZRT = null;
    peelViewZRT = null;
    prevViewZRT = null;
    accumRT = null;
    layerRT = null;
  }

  /** @type {number} */
  let targetsPeelScale = 0;

  /**
   * Full-res opaque colour; peel/view-Z/accum at `peelScale` of the drawing buffer.
   * @param {number} width drawing-buffer width
   * @param {number} height drawing-buffer height
   * @param {number} peelScale 0.25–1
   */
  function ensureTargets(width, height, peelScale) {
    const w = Math.max(1, Math.floor(width));
    const h = Math.max(1, Math.floor(height));
    const scale = Math.min(1, Math.max(0.25, peelScale));
    const pw = Math.max(1, Math.floor(w * scale));
    const ph = Math.max(1, Math.floor(h * scale));
    if (
      opaqueRT &&
      opaqueRT.width === w &&
      opaqueRT.height === h &&
      peelViewZRT &&
      peelViewZRT.width === pw &&
      peelViewZRT.height === ph &&
      targetsPeelScale === scale
    ) {
      return;
    }

    disposeTargets();
    targetsPeelScale = scale;

    opaqueRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      colorSpace: THREE.SRGBColorSpace,
      depthBuffer: true,
      stencilBuffer: false,
    });

    // Both ping-pong slots need depth so we can swap without a full-screen copy.
    const viewZWithDepth = {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      depthBuffer: true,
      stencilBuffer: false,
      magFilter: THREE.NearestFilter,
      minFilter: THREE.NearestFilter,
    };
    opaqueViewZRT = new THREE.WebGLRenderTarget(pw, ph, viewZWithDepth);
    peelViewZRT = new THREE.WebGLRenderTarget(pw, ph, viewZWithDepth);
    prevViewZRT = new THREE.WebGLRenderTarget(pw, ph, viewZWithDepth);

    accumRT = new THREE.WebGLRenderTarget(pw, ph, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      colorSpace: THREE.SRGBColorSpace,
      depthBuffer: false,
      stencilBuffer: false,
      magFilter: THREE.LinearFilter,
      minFilter: THREE.LinearFilter,
    });
    layerRT = new THREE.WebGLRenderTarget(pw, ph, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      colorSpace: THREE.SRGBColorSpace,
      depthBuffer: false,
      stencilBuffer: false,
      magFilter: THREE.LinearFilter,
      minFilter: THREE.LinearFilter,
    });

    compositeMat.uniforms.tOpaque.value = opaqueRT.texture;
    compositeMat.uniforms.tAccum.value = accumRT.texture;
    peelUniforms.tOpaqueViewZ.value = opaqueViewZRT.texture;
    // Must match gl_FragCoord while drawing into peel targets.
    peelUniforms.uResolution.value.set(pw, ph);
  }

  /**
   * @param {THREE.Object3D | null} root
   * @returns {{ opaque: THREE.Mesh[], transparent: THREE.Mesh[] }}
   */
  function collectMeshes(root) {
    /** @type {THREE.Mesh[]} */
    const opaque = [];
    /** @type {THREE.Mesh[]} */
    const transparent = [];
    if (!root) return { opaque, transparent };
    root.traverse((obj) => {
      if (!obj.isMesh || !obj.visible) return;
      if (isEdgeOverlay(obj)) return;
      const mesh = /** @type {THREE.Mesh} */ (obj);
      const mats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      let isTrans = false;
      for (const m of mats) {
        if (m && m.transparent && m.opacity < 1 - 1e-4) {
          isTrans = true;
          break;
        }
      }
      if (isTrans) transparent.push(mesh);
      else opaque.push(mesh);
    });
    return { opaque, transparent };
  }

  /**
   * @param {THREE.Mesh[]} meshes
   * @param {boolean} visible
   */
  function setMeshesVisible(meshes, visible) {
    for (const m of meshes) m.visible = visible;
  }

  /**
   * @param {THREE.Material} mat
   * @param {object} cfg
   */
  function applyBlend(mat, cfg) {
    mat.blending = cfg.blending;
    mat.blendSrc = cfg.blendSrc;
    mat.blendDst = cfg.blendDst;
    mat.blendSrcAlpha = cfg.blendSrcAlpha;
    mat.blendDstAlpha = cfg.blendDstAlpha;
    mat.blendEquation = cfg.blendEquation;
    mat.blendEquationAlpha = cfg.blendEquation;
  }

  /**
   * @param {THREE.Mesh[]} meshes
   * @returns {THREE.Material[]}
   */
  function uniqueMaterials(meshes) {
    /** @type {Set<THREE.Material>} */
    const set = new Set();
    for (const mesh of meshes) {
      const mats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      for (const mat of mats) {
        if (mat) set.add(mat);
      }
    }
    return [...set];
  }

  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {THREE.Object3D | null} root
   */
  function renderOverlays(scene, camera, root) {
    if (!root) return;
    const prevRoot = root.visible;
    const prevBg = scene.background;
    const prevAutoClear = renderer.autoClear;
    root.visible = false;
    scene.background = null;
    renderer.autoClear = false;
    renderer.clearDepth();
    renderer.render(scene, camera);
    root.visible = prevRoot;
    scene.background = prevBg;
    renderer.autoClear = prevAutoClear;
  }

  const copyMat = new THREE.ShaderMaterial({
    uniforms: { tSrc: { value: null } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D tSrc;
      varying vec2 vUv;
      void main() {
        gl_FragColor = texture2D(tSrc, vUv);
      }
    `,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
    blending: THREE.NoBlending,
  });
  const copyQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), copyMat);
  const copyScene = new THREE.Scene();
  copyScene.add(copyQuad);

  /**
   * @param {THREE.WebGLRenderTarget} src
   * @param {THREE.WebGLRenderTarget} dst
   */
  function copyColorRT(src, dst) {
    copyMat.uniforms.tSrc.value = src.texture;
    const prevAuto = renderer.autoClear;
    renderer.setRenderTarget(dst);
    renderer.setClearColor(0x000000, 1);
    renderer.clear();
    renderer.autoClear = false;
    renderer.render(copyScene, compositeCamera);
    renderer.autoClear = prevAuto;
  }

  /**
   * Callouts live on the scene, not the GLB root. Hide them for the colour and
   * edge passes, then draw them once so leaders sit on top of CAD edges and
   * are not composited twice.
   * @param {THREE.Scene} scene
   */
  function annotationNodes(scene) {
    return scene.children.filter((child) => child.userData?.blueprintAnnotations);
  }

  /**
   * @param {THREE.Object3D[]} nodes
   */
  function setNodesVisible(nodes, visible) {
    for (const node of nodes) node.visible = visible;
  }

  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {THREE.Object3D | null} root
   */
  function renderAnnotations(scene, camera, root) {
    if (!annotationNodes(scene).some((node) => node.visible)) return;
    renderOverlays(scene, camera, root);
  }

  /**
   * Faces first (edges hidden), then the depth-aware edge overlay pass.
   * Drawing fat lines in the same pass as coplanar CAD faces fails the depth
   * test on most opaque views; the soffit/peel path already used this split.
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {THREE.Object3D | null} root
   * @param {{ reuseDepth?: boolean, skipEdges?: boolean }} [opts]
   *   Opaque frames reuse face depth for edges. Abort-to-alpha and any path
   *   that did not write CAD depth keeps the depth refill.
   */
  function renderFacesThenEdges(scene, camera, root, opts = {}) {
    setEdgeOverlaysVisible(root, false);
    const notes = annotationNodes(scene);
    const prevNotes = notes.map((node) => node.visible);
    setNodesVisible(notes, false);
    renderer.setRenderTarget(null);
    renderer.autoClear = true;
    renderer.render(scene, camera);
    if (!opts.skipEdges) {
      renderEdgeOverlayPass(renderer, scene, camera, root, {
        reuseDepth: Boolean(opts.reuseDepth),
      });
    }
    notes.forEach((node, i) => {
      node.visible = prevNotes[i];
    });
    renderAnnotations(scene, camera, root);
  }

  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {THREE.Object3D | null} root
   * @param {boolean | (() => boolean)} shouldPeel
   * @param {{ quality?: "fast" | "high" }} [opts]
   * @returns {boolean} true if peel compositing was used this frame
   */
  function render(scene, camera, root, shouldPeel, opts = {}) {
    const wantPeel =
      USE_DEPTH_PEEL &&
      (typeof shouldPeel === "function" ? shouldPeel() : Boolean(shouldPeel));

    // Safe default: materials already have transparent + opacity + depthWrite
    // off from applyOpacityToMeshes — one standard sorted-alpha render.
    if (!wantPeel) {
      peelStageUniform.value = 0;
      renderFacesThenEdges(scene, camera, root, { reuseDepth: true });
      return false;
    }

    // Live view. Sorted alpha is approximate; a 12-layer peel of every
    // faded mesh blocks the page on complex scenes, so the orbit does not
    // upgrade. Return true so the caller does not reset materials.
    if (opts.quality !== "high") {
      peelStageUniform.value = 0;
      renderFacesThenEdges(scene, camera, root, { reuseDepth: true });
      return true;
    }

    const { opaque, transparent } = collectMeshes(root);
    if (!transparent.length) {
      peelStageUniform.value = 0;
      renderFacesThenEdges(scene, camera, root, { reuseDepth: true });
      return false;
    }

    const highQuality = opts.quality === "high";
    const peelScale = highQuality ? PEEL_SCALE_HIGH : PEEL_SCALE_FAST;
    const maxPeels = highQuality ? MAX_PEELS_HIGH : MAX_PEELS_FAST;

    renderer.getDrawingBufferSize(size);
    ensureTargets(size.x, size.y, peelScale);

    const prevAutoClear = renderer.autoClear;
    const prevTone = renderer.toneMapping;
    const prevBg = scene.background;
    if (prevBg instanceof THREE.Color) bgColor.copy(prevBg);
    else bgColor.set(0x111111);
    compositeMat.uniforms.uBackground.value.copy(bgColor);

    /** @type {{ mesh: THREE.Mesh, visible: boolean }[]} */
    const visBackup = [];
    for (const mesh of [...opaque, ...transparent]) {
      visBackup.push({ mesh, visible: mesh.visible });
    }

    const transMats = uniqueMaterials(transparent);
    /** @type {{ mat: THREE.Material, snap: object }[]} */
    const matBackup = [];
    for (const mat of transMats) {
      patchMaterialForDepthPeel(mat);
      matBackup.push({
        mat,
        snap: {
          blending: mat.blending,
          blendSrc: mat.blendSrc,
          blendDst: mat.blendDst,
          blendSrcAlpha: mat.blendSrcAlpha,
          blendDstAlpha: mat.blendDstAlpha,
          blendEquation: mat.blendEquation,
          blendEquationAlpha: mat.blendEquationAlpha,
          depthWrite: mat.depthWrite,
          depthTest: mat.depthTest,
          transparent: mat.transparent,
          opacity: mat.opacity,
          colorWrite: mat.colorWrite,
          side: mat.side,
          forceSinglePass: mat.forceSinglePass,
        },
      });
    }

    /** @type {Map<THREE.Mesh, Function | null | undefined>} */
    const onBeforeRenderBackup = new Map();
    for (const mesh of transparent) {
      onBeforeRenderBackup.set(mesh, mesh.onBeforeRender);
      mesh.onBeforeRender = function peelUniformSync(
        rendererArg,
        sceneArg,
        cameraArg,
        geometry,
        material,
        group,
      ) {
        const mats = Array.isArray(material) ? material : [material];
        for (const m of mats) {
          if (m) syncPeelUniforms(m);
        }
        const prev = onBeforeRenderBackup.get(mesh);
        if (typeof prev === "function") {
          prev.call(
            this,
            rendererArg,
            sceneArg,
            cameraArg,
            geometry,
            material,
            group,
          );
        }
      };
    }

    let clipPlanes = null;
    for (const mat of transMats) {
      if (mat.clippingPlanes?.length) {
        clipPlanes = mat.clippingPlanes;
        break;
      }
    }
    if (!clipPlanes) {
      for (const mesh of opaque) {
        const mats = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        for (const m of mats) {
          if (m?.clippingPlanes?.length) {
            clipPlanes = m.clippingPlanes;
            break;
          }
        }
        if (clipPlanes) break;
      }
    }
    opaqueViewZMat.clippingPlanes = clipPlanes || [];
    opaqueViewZMat.clipIntersection = false;

    scene.background = null;
    renderer.autoClear = true;
    peelStageUniform.value = 0;

    /** @type {{ obj: THREE.Object3D, visible: boolean }[]} */
    const extraBackup = [];
    for (const child of scene.children) {
      if (child === root) continue;
      if (child.isLight) continue;
      extraBackup.push({ obj: child, visible: child.visible });
      child.visible = false;
    }

    function restoreOnBeforeRender() {
      for (const [mesh, prev] of onBeforeRenderBackup) {
        mesh.onBeforeRender = prev;
      }
    }

    /**
     * Restore mesh/material/scene state and draw with standard alpha so
     * faded parts never stay hidden after a failed peel attempt.
     */
    function abortToStandard() {
      for (const { mat, snap } of matBackup) {
        applyBlend(mat, /** @type {any} */ (snap));
        mat.blendEquationAlpha = snap.blendEquationAlpha;
        mat.depthWrite = snap.depthWrite;
        mat.depthTest = snap.depthTest;
        mat.transparent = snap.transparent;
        mat.opacity = snap.opacity;
        mat.colorWrite = snap.colorWrite !== false;
        mat.side = snap.side;
        mat.forceSinglePass = snap.forceSinglePass;
        mat.needsUpdate = true;
      }
      for (const { mesh, visible } of visBackup) {
        mesh.visible = visible;
      }
      for (const { obj, visible } of extraBackup) {
        obj.visible = visible;
      }
      restoreOnBeforeRender();
      peelStageUniform.value = 0;
      scene.background = prevBg;
      scene.overrideMaterial = null;
      renderer.toneMapping = prevTone;
      renderer.setRenderTarget(null);
      renderer.autoClear = true;
      renderFacesThenEdges(scene, camera, root);
      renderer.autoClear = prevAutoClear;
      return false;
    }

    // --- Opaque colour (full-res) ---
    // Edge overlays stay off during peel RTs (mesh shaders / parent fades).
    // They are drawn once after composite via renderEdgeOverlayPass.
    setMeshesVisible(transparent, false);
    setMeshesVisible(opaque, true);
    setEdgeOverlaysVisible(root, false);
    renderer.setRenderTarget(opaqueRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camera);

    // --- Opaque linear view-Z at peel resolution ---
    renderer.setRenderTarget(opaqueViewZRT);
    renderer.setClearColor(0x000000, 1);
    clearViewZTarget(opaqueViewZRT, VIEW_Z_FAR, { clearDepth: true });

    // Fail-safe on the settled path only. readPixels stalls the GPU, so the
    // fast path (drag, scene change) must not sync. A bad float target shows
    // up on the next high frame and aborts to standard alpha.
    if (highQuality) {
      const corner = new Float32Array(4);
      try {
        renderer.readRenderTargetPixels(opaqueViewZRT, 2, 2, 1, 1, corner);
      } catch {
        corner[0] = 0;
      }
      if (!Number.isFinite(corner[0]) || corner[0] < VIEW_Z_FAR * 0.5) {
        return abortToStandard();
      }
    }

    const prevOverride = scene.overrideMaterial;
    scene.overrideMaterial = opaqueViewZMat;
    renderer.setRenderTarget(opaqueViewZRT);
    renderer.autoClear = false;
    renderer.render(scene, camera);
    renderer.autoClear = true;
    scene.overrideMaterial = prevOverride;
    peelUniforms.tOpaqueViewZ.value = opaqueViewZRT.texture;

    // --- Accum empty ---
    renderer.setRenderTarget(accumRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();

    clearViewZTarget(prevViewZRT, 0);
    peelUniforms.tPrevViewZ.value = prevViewZRT.texture;

    setMeshesVisible(opaque, false);
    setMeshesVisible(transparent, true);
    // Transparent peels also use mesh shaders; keep edge lines off.
    setEdgeOverlaysVisible(root, false);

    let anyLayerWritten = false;

    for (let peel = 0; peel < maxPeels; peel++) {
      peelUniforms.tPrevViewZ.value = prevViewZRT.texture;
      // Feedback-free: while rendering INTO peelViewZRT, do not also sample it.
      peelUniforms.tPeelViewZ.value = prevViewZRT.texture;

      // Depth peel: nearest remaining layer via hardware depth LESS.
      peelStageUniform.value = 1;
      for (const { mat } of matBackup) {
        mat.depthWrite = true;
        mat.depthTest = true;
        mat.colorWrite = true;
        mat.transparent = true;
        mat.forceSinglePass = true;
        applyBlend(mat, {
          blending: THREE.NoBlending,
          blendSrc: THREE.OneFactor,
          blendDst: THREE.ZeroFactor,
          blendSrcAlpha: THREE.OneFactor,
          blendDstAlpha: THREE.ZeroFactor,
          blendEquation: THREE.AddEquation,
        });
        syncPeelUniforms(mat);
      }
      renderer.setRenderTarget(peelViewZRT);
      renderer.setClearColor(0x000000, 1);
      renderer.clear(false, true, false);
      clearViewZTarget(peelViewZRT, VIEW_Z_FAR);
      renderer.setRenderTarget(peelViewZRT);
      renderer.autoClear = false;
      renderer.render(scene, camera);
      renderer.autoClear = true;

      peelUniforms.tPeelViewZ.value = peelViewZRT.texture;

      // Colour every layer. A per-layer readPixels used to stall the GPU,
      // and a centre-pixel probe aborted section views whose middle is void.
      peelStageUniform.value = 2;
        for (const { mat } of matBackup) {
          mat.depthWrite = false;
          mat.depthTest = false;
          mat.colorWrite = true;
          mat.transparent = true;
          mat.forceSinglePass = true;
          applyBlend(mat, {
            blending: THREE.NormalBlending,
            blendSrc: THREE.SrcAlphaFactor,
            blendDst: THREE.OneMinusSrcAlphaFactor,
            blendSrcAlpha: THREE.OneFactor,
            blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
            blendEquation: THREE.AddEquation,
          });
          syncPeelUniforms(mat);
        }
        renderer.setRenderTarget(layerRT);
        renderer.setClearColor(0x000000, 0);
        renderer.clear();
        renderer.render(scene, camera);

      anyLayerWritten = true;

      blitMat.uniforms.tSrc.value = layerRT.texture;
      renderer.setRenderTarget(accumRT);
      renderer.autoClear = false;
      renderer.render(blitScene, compositeCamera);
      renderer.autoClear = true;

      copyColorRT(peelViewZRT, prevViewZRT);
    }

    if (!anyLayerWritten) {
      return abortToStandard();
    }

    for (const { mat, snap } of matBackup) {
      applyBlend(mat, /** @type {any} */ (snap));
      mat.blendEquationAlpha = snap.blendEquationAlpha;
      mat.depthWrite = snap.depthWrite;
      mat.depthTest = snap.depthTest;
      mat.transparent = snap.transparent;
      mat.opacity = snap.opacity;
      mat.colorWrite = snap.colorWrite !== false;
      mat.side = snap.side;
      mat.forceSinglePass = snap.forceSinglePass;
      mat.needsUpdate = true;
    }
    for (const { mesh, visible } of visBackup) {
      mesh.visible = visible;
    }
    for (const { obj, visible } of extraBackup) {
      obj.visible = visible;
    }
    restoreOnBeforeRender();
    setEdgeOverlaysVisible(root, true);

    peelStageUniform.value = 0;
    scene.background = prevBg;
    renderer.toneMapping = prevTone;

    renderer.setRenderTarget(null);
    renderer.autoClear = true;
    renderer.render(compositeScene, compositeCamera);

    // Settled frames refill depth and draw CAD edges. Fast frames skip that
    // full-scene pass; the lines appear when the view settles.
    const notes = annotationNodes(scene);
    const prevNotes = notes.map((node) => node.visible);
    setNodesVisible(notes, false);
    if (highQuality) {
      renderEdgeOverlayPass(renderer, scene, camera, root, { reuseDepth: false });
    }
    notes.forEach((node, i) => {
      node.visible = prevNotes[i];
    });
    renderAnnotations(scene, camera, root);
    renderer.autoClear = prevAutoClear;
    return true;
  }

  function dispose() {
    disposeTargets();
    compositeMat.dispose();
    compositeQuad.geometry.dispose();
    blitMat.dispose();
    blitQuad.geometry.dispose();
    clearViewZMat.dispose();
    clearViewZQuad.geometry.dispose();
    opaqueViewZMat.dispose();
    copyMat.dispose();
    copyQuad.geometry.dispose();
  }

  return {
    render,
    dispose,
    MAX_PEELS,
    MAX_PEELS_FAST,
    MAX_PEELS_HIGH,
    VIEW_Z_EPSILON,
    USE_DEPTH_PEEL,
  };
}
