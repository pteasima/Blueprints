/**
 * Weighted Blended Order-Independent Transparency (McGuire / Bavoil).
 *
 * Opaque meshes render as usual. Translucent meshes accumulate into weighted
 * buffers and composite over opaque — draw order no longer decides who wins,
 * so coplanar CAD stacks fade continuously instead of tearing / punching.
 *
 * Approximate (weights are heuristic); good enough for part-opacity fading.
 */
import * as THREE from "three";

/** Shared across all patched materials; set per pass (0=off, 1=accum, 2=reveal). */
export const wboitStageUniform = { value: 0 };
/** Opaque-pass depth texture for manual depth test in accum/reveal. */
export const wboitOpaqueDepthUniform = { value: null };
/** Drawing-buffer size in pixels (for depth UV). */
export const wboitResolutionUniform = { value: new THREE.Vector2(1, 1) };

/**
 * Patch a material so its fragment can emit WBOIT accumulation / reveal.
 * Safe to call repeatedly; no-op when already patched.
 * @param {THREE.Material} mat
 */
export function patchMaterialForWboit(mat) {
  if (!mat || mat.userData.wboitPatched) return;
  mat.userData.wboitPatched = true;

  const prevCacheKey = mat.customProgramCacheKey?.bind(mat);
  mat.customProgramCacheKey = () =>
    `${prevCacheKey ? prevCacheKey() : mat.type}|wboit2`;

  const prevCompile = mat.onBeforeCompile?.bind(mat);
  mat.onBeforeCompile = (shader, renderer) => {
    prevCompile?.(shader, renderer);
    shader.uniforms.uWboitStage = wboitStageUniform;
    shader.uniforms.tOpaqueDepth = wboitOpaqueDepthUniform;
    shader.uniforms.uWboitResolution = wboitResolutionUniform;
    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      `uniform float uWboitStage;
uniform sampler2D tOpaqueDepth;
uniform vec2 uWboitResolution;
void main() {`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
	if (uWboitStage > 0.5) {
		float alpha = gl_FragColor.a;
		if (alpha < 1e-4) discard;
		// Depth-test against the opaque buffer (shared depth attachments are flaky).
		vec2 depthUv = gl_FragCoord.xy / uWboitResolution;
		float opaqueZ = texture2D(tOpaqueDepth, depthUv).r;
		if (gl_FragCoord.z > opaqueZ + 1e-5) discard;
		if (uWboitStage < 1.5) {
			float z = gl_FragCoord.z;
			float weight = alpha * max(0.01, 3000.0 * pow(max(0.0, 1.0 - z), 3.0));
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
  let opaqueRT = null;
  /** @type {THREE.WebGLRenderTarget | null} */
  let accumRT = null;
  /** @type {THREE.WebGLRenderTarget | null} */
  let revealRT = null;

  const compositeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const compositeScene = new THREE.Scene();
  const compositeMat = new THREE.ShaderMaterial({
    uniforms: {
      tOpaque: { value: null },
      tAccum: { value: null },
      tReveal: { value: null },
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
      uniform sampler2D tReveal;
      varying vec2 vUv;
      void main() {
        vec4 opaque = texture2D(tOpaque, vUv);
        vec4 accum = texture2D(tAccum, vUv);
        float reveal = texture2D(tReveal, vUv).r;
        vec3 avg = accum.rgb / max(accum.a, 1e-4);
        // reveal = ∏(1−α); mix opaque back where nothing translucent covered.
        vec3 color = mix(avg, opaque.rgb, reveal);
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
    opaqueRT?.dispose();
    accumRT?.dispose();
    revealRT?.dispose();
    opaqueRT = null;
    accumRT = null;
    revealRT = null;
    wboitOpaqueDepthUniform.value = null;
  }

  function ensureTargets(width, height) {
    const w = Math.max(1, Math.floor(width));
    const h = Math.max(1, Math.floor(height));
    if (opaqueRT && opaqueRT.width === w && opaqueRT.height === h) return;

    disposeTargets();

    const depthTexture = new THREE.DepthTexture(w, h);
    depthTexture.format = THREE.DepthFormat;
    depthTexture.type = THREE.UnsignedIntType;

    opaqueRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthTexture,
      depthBuffer: true,
      stencilBuffer: false,
    });
    opaqueRT.texture.colorSpace = THREE.LinearSRGBColorSpace;

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

    compositeMat.uniforms.tOpaque.value = opaqueRT.texture;
    compositeMat.uniforms.tAccum.value = accumRT.texture;
    compositeMat.uniforms.tReveal.value = revealRT.texture;
    wboitOpaqueDepthUniform.value = depthTexture;
    wboitResolutionUniform.value.set(w, h);
  }

  /**
   * @param {THREE.Object3D | null} root
   * @returns {THREE.Mesh[]}
   */
  function collectTransparent(root) {
    /** @type {THREE.Mesh[]} */
    const list = [];
    if (!root) return list;
    root.traverse((obj) => {
      if (!obj.isMesh || !obj.visible) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        if (m && m.transparent && m.opacity < 1 - 1e-4) {
          list.push(/** @type {THREE.Mesh} */ (obj));
          return;
        }
      }
    });
    return list;
  }

  /**
   * @param {THREE.Material} mat
   * @param {{
   *   blending: number,
   *   blendSrc: number,
   *   blendDst: number,
   *   blendSrcAlpha: number,
   *   blendDstAlpha: number,
   *   blendEquation: number,
   * }} cfg
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
  function render(scene, camera, root) {
    const transparent = collectTransparent(root);
    if (!transparent.length) {
      wboitStageUniform.value = 0;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
      return;
    }

    renderer.getDrawingBufferSize(size);
    ensureTargets(size.x, size.y);

    const prevAutoClear = renderer.autoClear;
    const prevTone = renderer.toneMapping;
    const prevBg = scene.background;
    const transparentSet = new Set(transparent);

    /** @type {{ mat: THREE.Material, snap: object }[]} */
    const blendBackup = [];
    for (const mesh of transparent) {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const mat of mats) {
        if (!mat) continue;
        blendBackup.push({
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
          },
        });
      }
    }

    // --- Opaque ---
    for (const mesh of transparent) mesh.visible = false;
    wboitStageUniform.value = 0;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.autoClear = true;
    renderer.setRenderTarget(opaqueRT);
    renderer.setClearColor(
      prevBg instanceof THREE.Color ? prevBg : new THREE.Color(0x111111),
      1,
    );
    renderer.clear();
    renderer.render(scene, camera);

    // --- Prepare translucent-only scene ---
    for (const mesh of transparent) mesh.visible = true;
    /** @type {THREE.Object3D[]} */
    const hiddenOpaque = [];
    if (root) {
      root.traverse((obj) => {
        if (!obj.isMesh || !obj.visible) return;
        if (transparentSet.has(/** @type {THREE.Mesh} */ (obj))) return;
        obj.visible = false;
        hiddenOpaque.push(obj);
      });
    }
    scene.background = null;

    // --- Accumulation (additive) ---
    wboitStageUniform.value = 1;
    for (const { mat } of blendBackup) {
      applyBlend(mat, {
        blending: THREE.CustomBlending,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneFactor,
        blendSrcAlpha: THREE.OneFactor,
        blendDstAlpha: THREE.OneFactor,
        blendEquation: THREE.AddEquation,
      });
      mat.depthWrite = false;
      mat.depthTest = false; // manual depth vs opaque texture
    }
    renderer.setRenderTarget(accumRT);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camera);

    // --- Revealage ∏(1−α) ---
    wboitStageUniform.value = 2;
    for (const { mat } of blendBackup) {
      applyBlend(mat, {
        blending: THREE.CustomBlending,
        blendSrc: THREE.ZeroFactor,
        blendDst: THREE.OneMinusSrcAlphaFactor,
        blendSrcAlpha: THREE.ZeroFactor,
        blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
        blendEquation: THREE.AddEquation,
      });
      mat.depthWrite = false;
      mat.depthTest = false;
    }
    renderer.setRenderTarget(revealRT);
    renderer.setClearColor(0xffffff, 1);
    renderer.clear();
    renderer.render(scene, camera);

    // Restore
    for (const { mat, snap } of blendBackup) {
      applyBlend(mat, /** @type {any} */ (snap));
      mat.depthWrite = snap.depthWrite;
      mat.depthTest = snap.depthTest;
    }
    for (const obj of hiddenOpaque) obj.visible = true;
    scene.background = prevBg;
    wboitStageUniform.value = 0;

    // --- Composite ---
    renderer.setRenderTarget(null);
    renderer.toneMapping = prevTone;
    renderer.autoClear = true;
    renderer.render(compositeScene, compositeCamera);
    renderer.autoClear = prevAutoClear;
  }

  function dispose() {
    disposeTargets();
    compositeMat.dispose();
    compositeQuad.geometry.dispose();
  }

  return { render, dispose, collectTransparent };
}
