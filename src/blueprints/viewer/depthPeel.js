/**
 * Multi-pass depth peeling (Everitt-style) for part opacity.
 *
 * Fast path: all visible meshes opaque → single normal render.
 * Peel path: opaque colour + linear eye-space Z occlusion, then N peels of
 * translucent meshes ordered by view-Z, composited front-to-back.
 *
 * Important: do **not** sample the hardware depth buffer for peel decisions.
 * This viewer uses logarithmicDepthBuffer, so DepthTexture values are not
 * comparable to gl_FragCoord.z (that bug made every fade discard).
 *
 * Literal material opacity — no crush, no SOLID_ALPHA&lt;1 stand-in.
 */
import * as THREE from "three";

/** Max transparent layers per pixel. CAD stacks rarely need more. */
export const MAX_PEELS = 12;

/** Eye-space Z epsilon (metres) for coplanar translucent mates. */
export const VIEW_Z_EPSILON = 2e-4;

/**
 * Sentinel “no fragment” for Min-blend view-Z targets.
 * Must fit in float16 (max ≈ 65504).
 */
const VIEW_Z_FAR = 1e4;

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
    `${prevCacheKey ? prevCacheKey() : mat.type}|depthPeel2`;

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
		// Discard behind / at opaque solids (linear eye-space Z).
		if (vPeelViewZ >= opaqueZ - uViewZEps) discard;
		float prevZ = texture2D(tPrevViewZ, peelUv).r;
		if (vPeelViewZ <= prevZ + uViewZEps) discard;
		if (uPeelStage < 1.5) {
			gl_FragColor = vec4(vPeelViewZ, vPeelViewZ, vPeelViewZ, 1.0);
		} else {
			float peelZ = texture2D(tPeelViewZ, peelUv).r;
			if (peelZ > ${VIEW_Z_FAR * 0.5}) discard;
			if (abs(vPeelViewZ - peelZ) > uViewZEps * 2.0) discard;
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
        // Opaque where drawn (a>0); else background. Both already display-referred
        // when colour targets use SRGBColorSpace.
        vec3 base = mix(uBackground, opaque.rgb, opaque.a > 0.001 ? 1.0 : 0.0);
        vec3 color = accum.rgb + (1.0 - accum.a) * base;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
    // Never tone-map the blit — that darkened the whole frame (incl. background).
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
        gl_FragColor = vec4(uValue, uValue, uValue, 1.0);
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

  // Writes linear eye-space Z for opaque occlusion (Min-blend).
  const opaqueViewZMat = new THREE.ShaderMaterial({
    vertexShader: /* glsl */ `
      varying float vViewZ;
      #include <clipping_planes_pars_vertex>
      void main() {
        #include <begin_vertex>
        #include <project_vertex>
        vViewZ = -mvPosition.z;
        #include <clipping_planes_vertex>
      }
    `,
    fragmentShader: /* glsl */ `
      varying float vViewZ;
      #include <clipping_planes_pars_fragment>
      void main() {
        #include <clipping_planes_fragment>
        gl_FragColor = vec4(vViewZ, vViewZ, vViewZ, 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
    side: THREE.DoubleSide,
    clipping: true,
    blending: THREE.CustomBlending,
    blendSrc: THREE.OneFactor,
    blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.OneFactor,
    blendDstAlpha: THREE.OneFactor,
    blendEquation: THREE.MinEquation,
  });

  /**
   * @param {THREE.WebGLRenderTarget} target
   * @param {number} value
   */
  function clearViewZTarget(target, value) {
    clearViewZMat.uniforms.uValue.value = value;
    const prev = renderer.autoClear;
    renderer.setRenderTarget(target);
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

    // Display-referred colour like a normal canvas blit — avoids the “whole
    // scene went dark” look from linear RT + toneMapped composite.
    opaqueRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      colorSpace: THREE.SRGBColorSpace,
      depthBuffer: true,
      stencilBuffer: false,
    });

    const viewZOpts = {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
      magFilter: THREE.NearestFilter,
      minFilter: THREE.NearestFilter,
    };
    opaqueViewZRT = new THREE.WebGLRenderTarget(w, h, viewZOpts);
    peelViewZRT = new THREE.WebGLRenderTarget(w, h, viewZOpts);
    prevViewZRT = new THREE.WebGLRenderTarget(w, h, viewZOpts);

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
   * Deduplicate materials (labels share one mat across meshes).
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
    // Composite samples display-referred colours; keep background in sRGB.
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
        },
      });
    }

    // Gather clipping planes from any transparent mat (shared with opaques).
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
    // Keep the same tone mapping as the normal path so Solid/Realistic match.
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

    // --- Opaque colour (true solids) ---
    setMeshesVisible(transparent, false);
    setMeshesVisible(opaque, true);
    renderer.setRenderTarget(opaqueRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camera);

    // --- Opaque view-Z (linear) for occlusion of fades ---
    clearViewZTarget(opaqueViewZRT, VIEW_Z_FAR);
    const prevOverride = scene.overrideMaterial;
    scene.overrideMaterial = opaqueViewZMat;
    renderer.setRenderTarget(opaqueViewZRT);
    renderer.autoClear = false;
    renderer.render(scene, camera);
    renderer.autoClear = true;
    scene.overrideMaterial = prevOverride;
    peelUniforms.tOpaqueViewZ.value = opaqueViewZRT.texture;

    // --- Accum starts empty ---
    renderer.setRenderTarget(accumRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();

    clearViewZTarget(prevViewZRT, 0);
    peelUniforms.tPrevViewZ.value = prevViewZRT.texture;

    setMeshesVisible(opaque, false);
    setMeshesVisible(transparent, true);

    for (let peel = 0; peel < MAX_PEELS; peel++) {
      peelUniforms.tPrevViewZ.value = prevViewZRT.texture;

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

      blitMat.uniforms.tSrc.value = layerRT.texture;
      renderer.setRenderTarget(accumRT);
      renderer.autoClear = false;
      renderer.render(blitScene, compositeCamera);
      renderer.autoClear = true;

      const swap = prevViewZRT;
      prevViewZRT = peelViewZRT;
      peelViewZRT = swap;
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
  }

  return { render, dispose, MAX_PEELS, VIEW_Z_EPSILON };
}
