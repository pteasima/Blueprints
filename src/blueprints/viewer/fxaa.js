/**
 * One fullscreen FXAA pass from a linear colour target to the canvas.
 *
 * Logarithmic depth writes `gl_FragDepth`, which disables hardware MSAA on
 * many GPUs. Faces and edges are drawn into {@link createFxaaPresenter}'s
 * target (linear, with depth). This blit is the only place the image is
 * encoded for the display, so labels drawn afterwards stay sharp.
 */
import * as THREE from "three";
import { FXAAShader } from "three/addons/shaders/FXAAShader.js";

/**
 * @param {THREE.WebGLRenderer} renderer
 */
export function createFxaaPresenter(renderer) {
  const material = new THREE.ShaderMaterial({
    name: "BlueprintsFXAA",
    uniforms: THREE.UniformsUtils.clone(FXAAShader.uniforms),
    vertexShader: FXAAShader.vertexShader,
    fragmentShader: FXAAShader.fragmentShader.replace(
      "gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );",
      "gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );\n#include <colorspace_fragment>",
    ),
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  const scene = new THREE.Scene();
  scene.add(quad);
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const size = new THREE.Vector2();

  /** @type {THREE.WebGLRenderTarget | null} */
  let rt = null;

  /**
   * Colour + depth target the size of the drawing buffer.
   * Non-XR render targets stay linear in Three r172; the blit encodes sRGB.
   * @returns {THREE.WebGLRenderTarget}
   */
  function colorTarget() {
    renderer.getDrawingBufferSize(size);
    const w = Math.max(1, Math.floor(size.x));
    const h = Math.max(1, Math.floor(size.y));
    if (rt && rt.width === w && rt.height === h) return rt;
    rt?.dispose();
    rt = new THREE.WebGLRenderTarget(w, h, {
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
      depthBuffer: true,
      stencilBuffer: false,
      magFilter: THREE.LinearFilter,
      minFilter: THREE.LinearFilter,
      generateMipmaps: false,
    });
    rt.texture.colorSpace = THREE.LinearSRGBColorSpace;
    material.uniforms.tDiffuse.value = rt.texture;
    material.uniforms.resolution.value.set(1 / w, 1 / h);
    return rt;
  }

  /**
   * FXAA the colour target onto the canvas and leave the render target there
   * so callouts can draw on top of the antialiased image.
   */
  function blitToCanvas() {
    const prevAuto = renderer.autoClear;
    renderer.setRenderTarget(null);
    renderer.autoClear = true;
    renderer.render(scene, camera);
    renderer.autoClear = prevAuto;
  }

  function dispose() {
    rt?.dispose();
    rt = null;
    material.dispose();
    quad.geometry.dispose();
  }

  return { colorTarget, blitToCanvas, dispose };
}
