/**
 * Weighted Blended Order-Independent Transparency (McGuire / Bavoil).
 *
 * When nothing is faded → normal opaque render (DoubleSide, depthWrite).
 * When any part is faded → all visible meshes go through WBOIT. UI-100% meshes
 * are drawn at SOLID_ALPHA for that frame only (true α=1 inside WBOIT breaks
 * occlusion). Uses DoubleSide like the opaque path — FrontSide punched holes
 * through shells and read as “way too transparent.”
 *
 * render() returns whether WBOIT ran, so the caller can heal materials after
 * leaving the WBOIT path (restore can race with slider updates).
 */
import * as THREE from "three";

/** α for UI-solid meshes while WBOIT is active (must be < 1). */
export const SOLID_ALPHA = 0.995;

/** Shared across all patched materials; set per pass (0=off, 1=accum, 2=reveal). */
export const wboitStageUniform = { value: 0 };

/**
 * @param {THREE.Material} mat
 */
export function patchMaterialForWboit(mat) {
  if (!mat || mat.userData.wboitPatched) return;
  mat.userData.wboitPatched = true;

  const prevCacheKey = mat.customProgramCacheKey?.bind(mat);
  mat.customProgramCacheKey = () =>
    `${prevCacheKey ? prevCacheKey() : mat.type}|wboit7`;

  const prevCompile = mat.onBeforeCompile?.bind(mat);
  mat.onBeforeCompile = (shader, renderer) => {
    prevCompile?.(shader, renderer);
    shader.uniforms.uWboitStage = wboitStageUniform;
    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      "uniform float uWboitStage;\nvoid main() {",
    );
    // Emphasize high alpha so 0.99+ reads near-opaque. Depth weight alone is
    // unreliable with logarithmicDepthBuffer (z clusters near 1).
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
	if (uWboitStage > 0.5) {
		float alpha = gl_FragColor.a;
		if (alpha < 1e-4) discard;
		if (uWboitStage < 1.5) {
			float z = gl_FragCoord.z;
			float dz = max(0.01, 3000.0 * pow(max(0.0, 1.0 - z), 3.0));
			// Extra bias toward opaque coverage (McGuire eq.9 is too soft here).
			float weight = alpha * alpha * dz;
			gl_FragColor = vec4(gl_FragColor.rgb * alpha, alpha) * weight;
		} else {
			gl_FragColor = vec4(alpha);
		}
	}`,
    );
  };
  mat.needsUpdate = true;
}

/**
 * @param {THREE.WebGLRenderer} renderer
 */
export function createWboitRenderer(renderer) {
  const size = new THREE.Vector2();
  /** @type {THREE.WebGLRenderTarget | null} */
  let accumRT = null;
  /** @type {THREE.WebGLRenderTarget | null} */
  let revealRT = null;
  const bgColor = new THREE.Color();

  const compositeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const compositeScene = new THREE.Scene();
  const compositeMat = new THREE.ShaderMaterial({
    uniforms: {
      tAccum: { value: null },
      tReveal: { value: null },
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
      uniform sampler2D tAccum;
      uniform sampler2D tReveal;
      uniform vec3 uBackground;
      varying vec2 vUv;
      void main() {
        vec4 accum = texture2D(tAccum, vUv);
        float reveal = texture2D(tReveal, vUv).r;
        vec3 avg = accum.rgb / max(accum.a, 1e-4);
        vec3 color = mix(avg, uBackground, reveal);
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

  function disposeTargets() {
    accumRT?.dispose();
    revealRT?.dispose();
    accumRT = null;
    revealRT = null;
  }

  function ensureTargets(width, height) {
    const w = Math.max(1, Math.floor(width));
    const h = Math.max(1, Math.floor(height));
    if (accumRT && accumRT.width === w && accumRT.height === h) return;

    disposeTargets();

    accumRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
    });
    accumRT.texture.colorSpace = THREE.NoColorSpace;

    revealRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: false,
      stencilBuffer: false,
    });
    revealRT.texture.colorSpace = THREE.NoColorSpace;

    compositeMat.uniforms.tAccum.value = accumRT.texture;
    compositeMat.uniforms.tReveal.value = revealRT.texture;
  }

  /**
   * @param {THREE.Object3D | null} root
   */
  function anyFaded(root) {
    if (!root) return false;
    let found = false;
    root.traverse((obj) => {
      if (found || !obj.isMesh || !obj.visible) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        if (m && m.transparent && m.opacity < 1 - 1e-4) {
          found = true;
          return;
        }
      }
    });
    return found;
  }

  /**
   * @param {THREE.Object3D | null} root
   * @returns {THREE.Mesh[]}
   */
  function collectVisibleMeshes(root) {
    /** @type {THREE.Mesh[]} */
    const list = [];
    if (!root) return list;
    root.traverse((obj) => {
      if (!obj.isMesh || !obj.visible) return;
      list.push(/** @type {THREE.Mesh} */ (obj));
    });
    return list;
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
   * @returns {boolean} true if WBOIT ran this frame
   */
  function render(scene, camera, root) {
    if (!anyFaded(root)) {
      wboitStageUniform.value = 0;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
      return false;
    }

    const meshes = collectVisibleMeshes(root);
    renderer.getDrawingBufferSize(size);
    ensureTargets(size.x, size.y);

    const prevAutoClear = renderer.autoClear;
    const prevTone = renderer.toneMapping;
    const prevBg = scene.background;
    if (prevBg instanceof THREE.Color) bgColor.copy(prevBg);
    else bgColor.set(0x111111);
    compositeMat.uniforms.uBackground.value.copy(bgColor);

    /** @type {{ mat: THREE.Material, snap: object }[]} */
    const backup = [];
    for (const mesh of meshes) {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const mat of mats) {
        if (!mat) continue;
        patchMaterialForWboit(mat);
        backup.push({
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
            opacity: mat.opacity,
            side: mat.side,
          },
        });
        const opacity =
          mat.transparent && mat.opacity < 1 - 1e-4
            ? mat.opacity
            : SOLID_ALPHA;
        mat.transparent = true;
        mat.opacity = opacity;
        mat.depthWrite = false;
        mat.depthTest = true;
        // Match the opaque viewer path — FrontSide opened holes in wall/roof shells.
        mat.side = THREE.DoubleSide;
      }
    }

    scene.background = null;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.autoClear = true;

    wboitStageUniform.value = 1;
    for (const { mat } of backup) {
      applyBlend(mat, {
        blending: THREE.CustomBlending,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneFactor,
        blendSrcAlpha: THREE.OneFactor,
        blendDstAlpha: THREE.OneFactor,
        blendEquation: THREE.AddEquation,
      });
    }
    renderer.setRenderTarget(accumRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camera);

    wboitStageUniform.value = 2;
    for (const { mat } of backup) {
      applyBlend(mat, {
        blending: THREE.CustomBlending,
        blendSrc: THREE.ZeroFactor,
        blendDst: THREE.OneMinusSrcAlphaFactor,
        blendSrcAlpha: THREE.ZeroFactor,
        blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
        blendEquation: THREE.AddEquation,
      });
    }
    renderer.setRenderTarget(revealRT);
    renderer.setClearColor(0xffffff, 1);
    renderer.clear();
    renderer.render(scene, camera);

    for (const { mat, snap } of backup) {
      applyBlend(mat, /** @type {any} */ (snap));
      mat.depthWrite = snap.depthWrite;
      mat.depthTest = snap.depthTest;
      mat.transparent = snap.transparent;
      mat.opacity = snap.opacity;
      mat.side = snap.side;
    }
    scene.background = prevBg;
    wboitStageUniform.value = 0;

    renderer.setRenderTarget(null);
    renderer.toneMapping = prevTone;
    renderer.autoClear = true;
    renderer.render(compositeScene, compositeCamera);
    renderer.autoClear = prevAutoClear;
    return true;
  }

  function dispose() {
    disposeTargets();
    compositeMat.dispose();
    compositeQuad.geometry.dispose();
  }

  return { render, dispose, SOLID_ALPHA };
}
