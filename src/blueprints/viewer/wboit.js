/**
 * Weighted Blended Order-Independent Transparency (McGuire / Bavoil).
 *
 * When nothing is faded → normal opaque render.
 * When any part is faded → all visible meshes go through WBOIT. UI-100% meshes
 * are drawn at SOLID_ALPHA for that frame only (true α=1 inside WBOIT breaks
 * occlusion).
 *
 * Opacity is aggressively remapped toward opaque before accum/reveal so that
 * high slider values read near-solid (WBOIT’s raw α under-covers CAD shells).
 */
import * as THREE from "three";

/** α for UI-solid meshes while WBOIT is active (must be < 1). */
export const SOLID_ALPHA = 0.9995;

/**
 * Crush transparency toward opaque so mid/high sliders read near-solid
 * (raw WBOIT α under-covers CAD shells). Low end still fades.
 * o'=1-(1-o)^K
 */
export const OPACITY_CRUSH_K = 8;

/** Shared across all patched materials; set per pass (0=off, 1=accum, 2=reveal). */
export const wboitStageUniform = { value: 0 };

/**
 * Crush transparency toward opaque so mid/high sliders read near-solid
 * (raw WBOIT α under-covers CAD shells). Low end still fades.
 * o'=1-(1-o)^K, then snap values above 0.85 toward 1.
 * @param {number} o 0–1 UI / material opacity
 * @returns {number}
 */
export function crushOpacity(o) {
  const x = Math.max(0, Math.min(1, o));
  let a = 1 - (1 - x) ** OPACITY_CRUSH_K;
  if (a > 0.85) {
    const t = (a - 0.85) / 0.15;
    a = a + (1 - a) * t * t;
  }
  return a;
}

/**
 * @param {THREE.Material} mat
 */
export function patchMaterialForWboit(mat) {
  if (!mat || mat.userData.wboitPatched) return;
  mat.userData.wboitPatched = true;

  const prevCacheKey = mat.customProgramCacheKey?.bind(mat);
  mat.customProgramCacheKey = () =>
    `${prevCacheKey ? prevCacheKey() : mat.type}|wboit8c`;

  const prevCompile = mat.onBeforeCompile?.bind(mat);
  mat.onBeforeCompile = (shader, renderer) => {
    prevCompile?.(shader, renderer);
    shader.uniforms.uWboitStage = wboitStageUniform;
    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      "uniform float uWboitStage;\nvoid main() {",
    );
    // Crush α again in-shader (belt + suspenders with CPU crushOpacity).
    // Reveal uses crushed α so ∏(1−α) collapses fast at high opacity.
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
	if (uWboitStage > 0.5) {
		float alpha = clamp(gl_FragColor.a, 0.0, 1.0);
		if (alpha < 1e-5) discard;
		// α' = 1-(1-α)^8 — near-opaque coverage for CAD shells.
		float oneMinus = 1.0 - alpha;
		oneMinus *= oneMinus; // ^2
		oneMinus *= oneMinus; // ^4
		oneMinus *= oneMinus; // ^8
		float a = 1.0 - oneMinus;
		a = max(a, alpha); // never less opaque than the material asked for
		// Extra snap for already-high α (the ghostly-at-90% problem).
		if (a > 0.85) {
			float t = (a - 0.85) / 0.15;
			a = mix(a, 1.0, t * t);
		}
		if (uWboitStage < 1.5) {
			float z = gl_FragCoord.z;
			float dz = max(1.0, 4000.0 * pow(max(0.0, 1.0 - z), 3.0));
			// Extreme α bias so high opacity dominates the weighted average.
			float weight = a * a * a * a * dz;
			gl_FragColor = vec4(gl_FragColor.rgb * a, a) * weight;
		} else {
			gl_FragColor = vec4(a);
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
        // When reveal is tiny, prefer accum colour hard (near-opaque).
        float cover = 1.0 - reveal;
        // Quartic coverage — overdone so near-zero reveal reads fully solid.
        cover = cover * cover;
        cover = cover * cover;
        vec3 avg = accum.rgb / max(accum.a, 1e-4);
        vec3 color = mix(uBackground, avg, clamp(cover, 0.0, 1.0));
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
   * @param {() => boolean} [shouldUseWboit] — prefer slider state over material flags
   * @returns {boolean} true if WBOIT ran this frame
   */
  function render(scene, camera, root, shouldUseWboit) {
    const useWboit =
      typeof shouldUseWboit === "function"
        ? shouldUseWboit()
        : (() => {
            if (!root) return false;
            let found = false;
            root.traverse((obj) => {
              if (found || !obj.isMesh || !obj.visible) return;
              const mats = Array.isArray(obj.material)
                ? obj.material
                : [obj.material];
              for (const m of mats) {
                if (m && m.transparent && m.opacity < 1 - 1e-4) {
                  found = true;
                  return;
                }
              }
            });
            return found;
          })();

    if (!useWboit) {
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
        const base =
          mat.transparent && mat.opacity < 1 - 1e-4
            ? mat.opacity
            : SOLID_ALPHA;
        mat.transparent = true;
        mat.opacity = crushOpacity(base);
        mat.depthWrite = false;
        mat.depthTest = true;
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

  return { render, dispose, SOLID_ALPHA, crushOpacity, OPACITY_CRUSH_K };
}
