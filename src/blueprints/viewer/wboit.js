/**
 * Weighted Blended Order-Independent Transparency (McGuire / Bavoil).
 *
 * When any part is faded:
 *  1. Solids (α≈1) draw first with depthWrite — establish occlusion.
 *  2. Fades draw with depthTest, depthWrite off — OIT among themselves,
 *     cannot paint over nearer solids.
 *
 * Both steps target the *same* render target so depth is the native FBO
 * buffer (no shared DepthTexture across FBOs — that was unreliable with
 * logarithmicDepthBuffer).
 */
import * as THREE from "three";

/** Shared across all patched materials; set per pass (0=off, 1=accum, 2=reveal). */
export const wboitStageUniform = { value: 0 };

/**
 * Patch a material so its fragment can emit WBOIT accumulation / reveal.
 * @param {THREE.Material} mat
 */
export function patchMaterialForWboit(mat) {
  if (!mat || mat.userData.wboitPatched) return;
  mat.userData.wboitPatched = true;

  const prevCacheKey = mat.customProgramCacheKey?.bind(mat);
  mat.customProgramCacheKey = () =>
    `${prevCacheKey ? prevCacheKey() : mat.type}|wboit5`;

  const prevCompile = mat.onBeforeCompile?.bind(mat);
  mat.onBeforeCompile = (shader, renderer) => {
    prevCompile?.(shader, renderer);
    shader.uniforms.uWboitStage = wboitStageUniform;
    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      "uniform float uWboitStage;\nvoid main() {",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <dithering_fragment>",
      `#include <dithering_fragment>
	if (uWboitStage > 0.5) {
		float alpha = gl_FragColor.a;
		if (alpha < 1e-4) discard;
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
 * @param {THREE.Material | THREE.Material[] | undefined} material
 * @returns {boolean}
 */
function materialIsFaded(material) {
  const mats = Array.isArray(material) ? material : [material];
  for (const m of mats) {
    if (m && m.transparent && m.opacity < 1 - 1e-4) return true;
  }
  return false;
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
      depthBuffer: true,
      stencilBuffer: false,
    });
    accumRT.texture.colorSpace = THREE.NoColorSpace;

    revealRT = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: true,
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
      if (materialIsFaded(obj.material)) found = true;
    });
    return found;
  }

  /**
   * @param {THREE.Object3D | null} root
   * @returns {{ solids: THREE.Mesh[], fades: THREE.Mesh[] }}
   */
  function partitionMeshes(root) {
    /** @type {THREE.Mesh[]} */
    const solids = [];
    /** @type {THREE.Mesh[]} */
    const fades = [];
    if (!root) return { solids, fades };
    root.traverse((obj) => {
      if (!obj.isMesh || !obj.visible) return;
      const mesh = /** @type {THREE.Mesh} */ (obj);
      if (materialIsFaded(mesh.material)) fades.push(mesh);
      else solids.push(mesh);
    });
    return { solids, fades };
  }

  /**
   * @param {THREE.Mesh[]} meshes
   * @param {boolean} visible
   */
  function setVisible(meshes, visible) {
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
   * @param {THREE.Material[]} mats
   * @param {"accum" | "reveal"} mode
   * @param {boolean} depthWrite
   */
  function prepMats(mats, mode, depthWrite) {
    for (const mat of mats) {
      if (mode === "accum") {
        applyBlend(mat, {
          blending: THREE.CustomBlending,
          blendSrc: THREE.OneFactor,
          blendDst: THREE.OneFactor,
          blendSrcAlpha: THREE.OneFactor,
          blendDstAlpha: THREE.OneFactor,
          blendEquation: THREE.AddEquation,
        });
      } else {
        applyBlend(mat, {
          blending: THREE.CustomBlending,
          blendSrc: THREE.ZeroFactor,
          blendDst: THREE.OneMinusSrcAlphaFactor,
          blendSrcAlpha: THREE.ZeroFactor,
          blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
          blendEquation: THREE.AddEquation,
        });
      }
      mat.transparent = true;
      mat.depthWrite = depthWrite;
      mat.depthTest = true;
      mat.side = THREE.FrontSide;
    }
  }

  /**
   * @param {THREE.Scene} scene
   * @param {THREE.Camera} camera
   * @param {THREE.Object3D | null} root
   */
  function render(scene, camera, root) {
    if (!anyFaded(root)) {
      wboitStageUniform.value = 0;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
      return;
    }

    const { solids, fades } = partitionMeshes(root);
    renderer.getDrawingBufferSize(size);
    ensureTargets(size.x, size.y);

    const prevAutoClear = renderer.autoClear;
    const prevTone = renderer.toneMapping;
    const prevBg = scene.background;
    if (prevBg instanceof THREE.Color) bgColor.copy(prevBg);
    else bgColor.set(0x111111);
    compositeMat.uniforms.uBackground.value.copy(bgColor);

    /** @type {{ mat: THREE.Material, snap: object }[]} */
    const blendBackup = [];
    /** @type {THREE.Material[]} */
    const allMats = [];
    for (const mesh of [...solids, ...fades]) {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const mat of mats) {
        if (!mat) continue;
        patchMaterialForWboit(mat);
        allMats.push(mat);
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
            transparent: mat.transparent,
            side: mat.side,
          },
        });
      }
    }

    scene.background = null;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.autoClear = false;

    function drawAccumReveal(rt, clearColor, clearAlpha, stage) {
      wboitStageUniform.value = stage;
      const mode = stage < 1.5 ? "accum" : "reveal";
      renderer.setRenderTarget(rt);
      renderer.setClearColor(clearColor, clearAlpha);
      renderer.clear(true, true, false);

      // Solids first — write depth so fades cannot draw through them.
      setVisible(fades, false);
      setVisible(solids, true);
      prepMats(allMats, mode, true);
      renderer.render(scene, camera);

      // Fades — test against solid depth, do not write depth; OIT among fades.
      setVisible(solids, false);
      setVisible(fades, true);
      prepMats(allMats, mode, false);
      renderer.render(scene, camera);

      setVisible(solids, true);
      setVisible(fades, true);
    }

    drawAccumReveal(accumRT, 0x000000, 0, 1);
    drawAccumReveal(revealRT, 0xffffff, 1, 2);

    for (const { mat, snap } of blendBackup) {
      applyBlend(mat, /** @type {any} */ (snap));
      mat.depthWrite = snap.depthWrite;
      mat.depthTest = snap.depthTest;
      mat.transparent = snap.transparent;
      mat.side = snap.side;
    }
    scene.background = prevBg;
    wboitStageUniform.value = 0;

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

  return { render, dispose };
}
