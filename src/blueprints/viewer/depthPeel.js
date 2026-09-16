/**
 * Multi-pass depth peeling (Everitt-style) for part opacity.
 *
 * Fast path: all visible meshes opaque → single normal render.
 * Peel path: opaque pass (true depthWrite) + N peels of translucent meshes
 * ordered by linear eye-space Z, composited front-to-back with under-blending.
 *
 * Literal material opacity — no crush, no SOLID_ALPHA&lt;1 stand-in.
 */
import * as THREE from "three";

/** Max transparent layers per pixel. CAD stacks rarely need more. */
export const MAX_PEELS = 16;

/** Eye-space Z epsilon (metres) for coplanar translucent mates. */
export const VIEW_Z_EPSILON = 1e-4;

/** Sentinel “no fragment” for Min-blend view-Z targets. */
const VIEW_Z_FAR = 1e5;

/** Shared peel stage: 0=off, 1=peel depth (viewZ), 2=peel colour. */
export const peelStageUniform = { value: 0 };

const peelUniforms = {
  tPrevViewZ: { value: null },
  tPeelViewZ: { value: null },
  tOpaqueDepth: { value: null },
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
    `${prevCacheKey ? prevCacheKey() : mat.type}|depthPeel1`;

  const prevCompile = mat.onBeforeCompile?.bind(mat);
  mat.onBeforeCompile = (shader, renderer) => {
    prevCompile?.(shader, renderer);
    shader.uniforms.uPeelStage = peelStageUniform;
    shader.uniforms.tPrevViewZ = peelUniforms.tPrevViewZ;
    shader.uniforms.tPeelViewZ = peelUniforms.tPeelViewZ;
    shader.uniforms.tOpaqueDepth = peelUniforms.tOpaqueDepth;
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
uniform sampler2D tOpaqueDepth;
uniform float uViewZEps;
uniform vec2 uResolution;
varying float vPeelViewZ;`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
	if (uPeelStage > 0.5) {
		vec2 peelUv = gl_FragCoord.xy / uResolution;
		float opaqueD = texture2D(tOpaqueDepth, peelUv).r;
		// Discard fragments at/behind opaque solids (same depth encoding).
		if (gl_FragCoord.z >= opaqueD - 1e-6) discard;
		float prevZ = texture2D(tPrevViewZ, peelUv).r;
		if (vPeelViewZ <= prevZ + uViewZEps) discard;
		if (uPeelStage < 1.5) {
			// Depth peel: write linear eye-space Z (Min-blended by the RT pass).
			gl_FragColor = vec4(vPeelViewZ, 0.0, 0.0, 1.0);
		} else {
			float peelZ = texture2D(tPeelViewZ, peelUv).r;
			if (peelZ > ${VIEW_Z_FAR * 0.5}) discard;
			if (abs(vPeelViewZ - peelZ) > uViewZEps * 2.0) discard;
			// Leave unpremultiplied; blit under-blend premultiplies.
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
        // Opaque where drawn; else scene background.
        vec3 base = mix(uBackground, opaque.rgb, opaque.a);
        // Front-to-back under: transparent over opaque/background.
        vec3 color = accum.rgb + (1.0 - accum.a) * base;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
    toneMapped: true,
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
        // Premultiply for under blending into accum.
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

  // Float RTs cannot be cleared to >1 via THREE.Color (clamped); draw a quad.
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

  /**
   * @param {THREE.WebGLRenderTarget} target
   * @param {number} value
   */
  function clearViewZTarget(target, value) {
    clearViewZMat.uniforms.uValue.value = value;
    renderer.setRenderTarget(target);
    renderer.autoClear = false;
    renderer.render(clearViewZScene, compositeCamera);
    renderer.autoClear = true;
  }

  function disposeTargets() {
    opaqueRT?.dispose();
    peelViewZRT?.dispose();
    prevViewZRT?.dispose();
    accumRT?.dispose();
    layerRT?.dispose();
    opaqueRT = null;
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

    const depthTex = new THREE.DepthTexture(w, h);
    depthTex.type = THREE.UnsignedIntType;
    depthTex.format = THREE.DepthFormat;

    opaqueRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthTexture: depthTex,
      depthBuffer: true,
      stencilBuffer: false,
    });
    opaqueRT.texture.colorSpace = THREE.NoColorSpace;

    const viewZOpts = {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
      magFilter: THREE.NearestFilter,
      minFilter: THREE.NearestFilter,
    };
    peelViewZRT = new THREE.WebGLRenderTarget(w, h, viewZOpts);
    peelViewZRT.texture.colorSpace = THREE.NoColorSpace;
    prevViewZRT = new THREE.WebGLRenderTarget(w, h, viewZOpts);
    prevViewZRT.texture.colorSpace = THREE.NoColorSpace;

    accumRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
    });
    accumRT.texture.colorSpace = THREE.NoColorSpace;

    layerRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
    });
    layerRT.texture.colorSpace = THREE.NoColorSpace;

    compositeMat.uniforms.tOpaque.value = opaqueRT.texture;
    compositeMat.uniforms.tAccum.value = accumRT.texture;
    peelUniforms.tOpaqueDepth.value = opaqueRT.depthTexture;
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

  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {THREE.Object3D | null} root
   * @param {boolean | (() => boolean)} shouldPeel
   * @returns {boolean} true if peel path ran
   */
  function render(scene, camera, root, shouldPeel) {
    const usePeel =
      typeof shouldPeel === "function" ? shouldPeel() : Boolean(shouldPeel);

    if (!usePeel) {
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
    compositeMat.toneMapped = prevTone !== THREE.NoToneMapping;

    /** @type {{ mesh: THREE.Mesh, visible: boolean }[]} */
    const visBackup = [];
    for (const mesh of [...opaque, ...transparent]) {
      visBackup.push({ mesh, visible: mesh.visible });
    }

    /** @type {{ mat: THREE.Material, snap: object }[]} */
    const matBackup = [];
    for (const mesh of transparent) {
      const mats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      for (const mat of mats) {
        if (!mat) continue;
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
            depthWrite: mat.depthWrite,
            depthTest: mat.depthTest,
            transparent: mat.transparent,
            colorWrite: mat.colorWrite,
          },
        });
      }
    }

    scene.background = null;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.autoClear = true;
    peelStageUniform.value = 0;

    // Hide non-root extras (Measure overlays, etc.) during model peels.
    /** @type {{ obj: THREE.Object3D, visible: boolean }[]} */
    const extraBackup = [];
    for (const child of scene.children) {
      if (child === root) continue;
      if (child.isLight) continue;
      extraBackup.push({ obj: child, visible: child.visible });
      child.visible = false;
    }

    // --- Opaque pass (true solids) ---
    setMeshesVisible(transparent, false);
    setMeshesVisible(opaque, true);
    renderer.setRenderTarget(opaqueRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    // Restore scene background clear via clear colour only; model over empty.
    renderer.render(scene, camera);

    // --- Accum starts empty; peels under-blend; composite over opaque ---
    renderer.setRenderTarget(accumRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();

    // Prev view-Z = 0 (near) so first peel accepts any fragment.
    clearViewZTarget(prevViewZRT, 0);
    peelUniforms.tPrevViewZ.value = prevViewZRT.texture;
    peelUniforms.tOpaqueDepth.value = opaqueRT.depthTexture;

    setMeshesVisible(opaque, false);
    setMeshesVisible(transparent, true);

    for (let peel = 0; peel < MAX_PEELS; peel++) {
      peelUniforms.tPrevViewZ.value = prevViewZRT.texture;

      // Depth peel: Min-blend linear view-Z of next layer.
      peelStageUniform.value = 1;
      for (const { mat } of matBackup) {
        mat.depthWrite = false;
        mat.depthTest = false;
        mat.colorWrite = true;
        mat.transparent = true;
        applyBlend(mat, {
          blending: THREE.CustomBlending,
          blendSrc: THREE.OneFactor,
          blendDst: THREE.OneFactor,
          blendSrcAlpha: THREE.OneFactor,
          blendDstAlpha: THREE.OneFactor,
          blendEquation: THREE.MinEquation,
        });
      }
      clearViewZTarget(peelViewZRT, VIEW_Z_FAR);
      renderer.setRenderTarget(peelViewZRT);
      renderer.autoClear = false;
      renderer.render(scene, camera);
      renderer.autoClear = true;

      peelUniforms.tPeelViewZ.value = peelViewZRT.texture;

      // Colour peel into layer RT, then under-blend into accum.
      peelStageUniform.value = 2;
      for (const { mat } of matBackup) {
        mat.depthWrite = false;
        mat.depthTest = false;
        mat.colorWrite = true;
        mat.transparent = true;
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

      // Under-blend layer into accum (src premultiplied in shader).
      blitMat.uniforms.tSrc.value = layerRT.texture;
      renderer.setRenderTarget(accumRT);
      renderer.autoClear = false;
      renderer.render(blitScene, compositeCamera);
      renderer.autoClear = true;

      // Next peel: prev = current peel view-Z (swap RTs).
      const swap = prevViewZRT;
      prevViewZRT = peelViewZRT;
      peelViewZRT = swap;
    }

    // Restore material / visibility state.
    for (const { mat, snap } of matBackup) {
      applyBlend(mat, /** @type {any} */ (snap));
      mat.depthWrite = snap.depthWrite;
      mat.depthTest = snap.depthTest;
      mat.transparent = snap.transparent;
      mat.colorWrite = snap.colorWrite !== false;
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
  }

  return { render, dispose, MAX_PEELS, VIEW_Z_EPSILON };
}
