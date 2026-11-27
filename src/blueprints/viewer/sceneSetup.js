/**
 * Renderer, scene, lights, environment, and vertical exaggeration.
 * Structural split from main.js; behavior is unchanged.
 */
/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachSceneSetup(ctx) {
  /**
   * Drawing-buffer scale. Phones (coarse pointer, short side ≤ 500 CSS px)
   * stop at 1.5: an iPhone at 2× is 780×1688 with 4× MSAA plus the
   * full-size peel targets, and iOS Safari reloads the tab when GPU memory
   * runs out. Everything else stops at 2. docs/viewer/Performance.md.
   */
  function viewerPixelRatio() {
    const dpr = window.devicePixelRatio || 1;
    const coarse = typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches;
    const shortSide = Math.min(window.screen?.width || 1e4, window.screen?.height || 1e4);
    return Math.min(dpr, coarse && shortSide <= 500 ? 1.5 : 2);
  }

  function setVerticalExaggeration(factor) {
    const k = Number(factor);
    ctx.verticalExaggeration = Number.isFinite(k) && k > 0 ? k : 1;
    ctx.zScaleGroup.scale.set(1, ctx.verticalExaggeration, 1);
  }

  ctx.viewerPixelRatio = viewerPixelRatio;
  ctx.setVerticalExaggeration = setVerticalExaggeration;
}
