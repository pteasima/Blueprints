/**
 * Multi-pass depth peeling (Everitt-style) for part opacity.
 *
 * Default path: standard Three.js transparency (`applyOpacityToMeshes` sets
 * `transparent` + opacity + `depthWrite:false`). Depth peels are opt-in via
 * {@link USE_DEPTH_PEEL} — leave false until a verified GPU path works; broken
 * peels hide translucent meshes in the opaque pass and composite an empty
 * accum, so faded parts vanish entirely.
 *
 * When peels are enabled: opaque colour + linear eye-space Z, then N peels
 * ordered by hardware depth (LESS) while recording linear view-Z.
 *
 * Do **not** sample the logarithmic DepthTexture against gl_FragCoord.z —
 * that comparison is invalid with logarithmicDepthBuffer and discards every
 * translucent fragment. Do **not** rely on MinEquation blending (flaky on
 * some GPUs); nearest-layer selection uses the depth buffer instead.
 *
 * Literal material opacity — no crush, no SOLID_ALPHA&lt;1 stand-in.
 */
import * as THREE from "three";

/**
 * Opt-in Everitt peels. Keep false: sorted alpha from applyOpacityToMeshes
 * is visible; peels currently risk vanishing faded parts when view-Z / stage
 * inject fails.
 */
export const USE_DEPTH_PEEL = false;

/** Max transparent layers per pixel. */
export const MAX_PEELS = 12;

/** Absolute eye-space Z epsilon (metres). */
export const VIEW_Z_EPSILON = 1e-3;

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
export function patchMaterialForDepthPeel(mat) {
  if (!mat || mat.userData.depthPeelPatched) return;
  mat.userData.depthPeelPatched = true;

  const prevCacheKey = mat.customProgramCacheKey?.bind(mat);
  mat.customProgramCacheKey = () =>
    `${prevCacheKey ? prevCacheKey() : mat.type}|depthPeel3`;

  const prevCompile = mat.onBeforeCompile?.bind(mat);
  mat.onBeforeCompile = (shader, renderer) => {
    prevCompile?.(shader, renderer);
    shader.uniforms.uPeelStage = peelStageUniform;
    shader.uniforms.tPrevViewZ = peelUniforms.tPrevViewZ;
    shader.uniforms.tPeelViewZ = peelUniforms.tPeelViewZ;
    shader.uniforms.tOpaqueViewZ = peelUniforms.tOpaqueViewZ;
    shader.uniforms.uViewZEps = peelUniforms.uViewZEps;
    shader.uniforms.uResolution = peelUniforms.uResolution;

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
		// Behind an opaque solid (linear eye-space Z).
		if (vPeelViewZ >= opaqueZ - eps) discard;
		// Already peeled (at or in front of previous layer).
		if (vPeelViewZ <= prevZ + eps) discard;
		if (uPeelStage < 1.5) {
			// Depth peel: write linear view-Z; nearest wins via depthTest LESS.
			gl_FragColor = vec4(vPeelViewZ, 0.0, 0.0, 1.0);
		} else {
			float peelZ = texture2D(tPeelViewZ, peelUv).r;
			if (peelZ > ${VIEW_Z_FAR * 0.5}) discard;
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
        gl_FragColor = vec4(c.rgb * c.a, c.a);
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

  /**
   * @param {number} width
   * @param {number} height
   */
  function ensureTargets(width, height) {
    const w = Math.max(1, Math.floor(width));
    const h = Math.max(1, Math.floor(height));
    if (opaqueRT && opaqueRT.width === w && opaqueRT.height === h) return;

    disposeTargets();

    opaqueRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      colorSpace: THREE.SRGBColorSpace,
      depthBuffer: true,
      stencilBuffer: false,
    });

    const viewZWithDepth = {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      depthBuffer: true,
      stencilBuffer: false,
      magFilter: THREE.NearestFilter,
      minFilter: THREE.NearestFilter,
    };
    opaqueViewZRT = new THREE.WebGLRenderTarget(w, h, viewZWithDepth);
    peelViewZRT = new THREE.WebGLRenderTarget(w, h, viewZWithDepth);

    // Prev peel Z is only sampled as a colour texture (no depth needed).
    prevViewZRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      depthBuffer: false,
      stencilBuffer: false,
      magFilter: THREE.NearestFilter,
      minFilter: THREE.NearestFilter,
    });

    accumRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      colorSpace: THREE.SRGBColorSpace,
      depthBuffer: false,
      stencilBuffer: false,
    });
    layerRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      colorSpace: THREE.SRGBColorSpace,
      depthBuffer: false,
      stencilBuffer: false,
    });

    compositeMat.uniforms.tOpaque.value = opaqueRT.texture;
    compositeMat.uniforms.tAccum.value = accumRT.texture;
    peelUniforms.tOpaqueViewZ.value = opaqueViewZRT.texture;
    peelUniforms.uResolution.value.set(w, h);
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
   * Sample R (or A) from a float/half RT at the center pixel.
   * @param {THREE.WebGLRenderTarget} rt
   * @param {"r"|"a"} channel
   * @returns {number}
   */
  function sampleCenter(rt, channel = "r") {
    const buf = new Float32Array(4);
    const cx = Math.max(0, Math.floor(rt.width / 2));
    const cy = Math.max(0, Math.floor(rt.height / 2));
    try {
      renderer.readRenderTargetPixels(rt, cx, cy, 1, 1, buf);
    } catch {
      return Number.NaN;
    }
    return channel === "a" ? buf[3] : buf[0];
  }

  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {THREE.Object3D | null} root
   * @param {boolean | (() => boolean)} shouldPeel
   * @returns {boolean} true if peel compositing was used this frame
   */
  function render(scene, camera, root, shouldPeel) {
    const wantPeel =
      USE_DEPTH_PEEL &&
      (typeof shouldPeel === "function" ? shouldPeel() : Boolean(shouldPeel));

    // Safe default: materials already have transparent + opacity + depthWrite
    // off from applyOpacityToMeshes — one standard sorted-alpha render.
    if (!wantPeel) {
      peelStageUniform.value = 0;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
      return false;
    }

    const { opaque, transparent } = collectMeshes(root);
    if (!transparent.length) {
      peelStageUniform.value = 0;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
      return false;
    }

    renderer.getDrawingBufferSize(size);
    ensureTargets(size.x, size.y);

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
      peelStageUniform.value = 0;
      scene.background = prevBg;
      scene.overrideMaterial = null;
      renderer.toneMapping = prevTone;
      renderer.setRenderTarget(null);
      renderer.autoClear = true;
      renderer.render(scene, camera);
      renderer.autoClear = prevAutoClear;
      return false;
    }

    // --- Opaque colour ---
    setMeshesVisible(transparent, false);
    setMeshesVisible(opaque, true);
    renderer.setRenderTarget(opaqueRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camera);

    // --- Opaque linear view-Z (nearest via depth LESS) ---
    renderer.setRenderTarget(opaqueViewZRT);
    renderer.setClearColor(0x000000, 1);
    // Clear colour via draw (float far), then depth.
    clearViewZTarget(opaqueViewZRT, VIEW_Z_FAR, { clearDepth: true });
    const prevOverride = scene.overrideMaterial;
    scene.overrideMaterial = opaqueViewZMat;
    renderer.setRenderTarget(opaqueViewZRT);
    renderer.autoClear = false;
    renderer.render(scene, camera);
    renderer.autoClear = true;
    scene.overrideMaterial = prevOverride;
    peelUniforms.tOpaqueViewZ.value = opaqueViewZRT.texture;

    // Fail-safe: after clear-to-FAR, a corner pixel must still read ~FAR.
    // ~0 means float clear/RT failed → peel shader would discard all frags.
    {
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

    // --- Accum empty ---
    renderer.setRenderTarget(accumRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();

    clearViewZTarget(prevViewZRT, 0);
    peelUniforms.tPrevViewZ.value = prevViewZRT.texture;

    setMeshesVisible(opaque, false);
    setMeshesVisible(transparent, true);

    let anyLayerWritten = false;

    for (let peel = 0; peel < MAX_PEELS; peel++) {
      peelUniforms.tPrevViewZ.value = prevViewZRT.texture;

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

      // Colour peel into layer, then under-blend into accum.
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
      }
      renderer.setRenderTarget(layerRT);
      renderer.setClearColor(0x000000, 0);
      renderer.clear();
      renderer.render(scene, camera);

      const layerA = sampleCenter(layerRT, "a");
      const peelZ = sampleCenter(peelViewZRT, "r");
      if (
        peel === 0 &&
        (!Number.isFinite(layerA) || layerA < 1e-4) &&
        (!Number.isFinite(peelZ) || peelZ > VIEW_Z_FAR * 0.5)
      ) {
        // First peel wrote neither colour nor a near view-Z → peels failed.
        return abortToStandard();
      }
      if (Number.isFinite(layerA) && layerA > 1e-4) anyLayerWritten = true;

      blitMat.uniforms.tSrc.value = layerRT.texture;
      renderer.setRenderTarget(accumRT);
      renderer.autoClear = false;
      renderer.render(blitScene, compositeCamera);
      renderer.autoClear = true;

      // Next peel’s “prev” is this peel’s view-Z colour.
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

    peelStageUniform.value = 0;
    scene.background = prevBg;
    renderer.toneMapping = prevTone;

    renderer.setRenderTarget(null);
    renderer.autoClear = true;
    renderer.render(compositeScene, compositeCamera);

    renderOverlays(scene, camera, root);
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

  return { render, dispose, MAX_PEELS, VIEW_Z_EPSILON, USE_DEPTH_PEEL };
}
