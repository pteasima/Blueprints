/**
 * Animation tick, dirty signatures, and depth-peel quality.
 * Structural split from main.js; behavior is unchanged.
 */
import { getLocale } from "./i18n.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachRenderLoop(ctx) {
  const notePeelPointerUp = () => {
    ctx.peelPointerDown = false;
  };

  /**
   * Camera, projection, and drawing-buffer size. Idle frames compare this
   * so a still view does not resubmit the scene.
   * @returns {number[]}
   */
  function readCameraSig() {
    const v = ctx.camera.view;
    return [
      ctx.camera.position.x,
      ctx.camera.position.y,
      ctx.camera.position.z,
      ctx.camera.quaternion.x,
      ctx.camera.quaternion.y,
      ctx.camera.quaternion.z,
      ctx.camera.quaternion.w,
      ctx.camera.zoom,
      ctx.camera.near,
      ctx.camera.far,
      ctx.camera.fov || 0,
      ctx.camera.left,
      ctx.camera.right,
      ctx.camera.top,
      ctx.camera.bottom,
      ctx.controls.target.x,
      ctx.controls.target.y,
      ctx.controls.target.z,
      ctx.canvas.width,
      ctx.canvas.height,
      v && v.enabled ? 1 : 0,
      v ? v.offsetX : 0,
      v ? v.offsetY : 0,
      v ? v.fullWidth : 0,
      v ? v.fullHeight : 0,
      ctx.projection === "ortho" ? 1 : 0,
    ];
  }

  function cameraSigChanged() {
    const next = readCameraSig();
    const prev = ctx.camSig;
    let changed = !prev || prev.length !== next.length;
    if (!changed && prev) {
      for (let i = 0; i < next.length; i++) {
        if (next[i] !== prev[i]) {
          changed = true;
          break;
        }
      }
    }
    if (changed) ctx.camSig = next;
    return changed;
  }

  /**
   * Cuts, opacities, material/edge mode, labels, locale, background.
   * @returns {string}
   */
  function readContentSig() {
    const bits = [
      ctx.materialMode,
      ctx.edgeMode,
      getLocale(),
      ctx.labelsOn ? "1" : "0",
      String(ctx.sceneBg),
      // Moved fixtures change the merged peel batches and the walk collider.
      `edit${ctx.editMode ? ctx.editMode.revision() : 0}`,
      // Meshes that arrive with an on-demand layer.
      `lazy${ctx.lazyRevision}`,
    ];
    const bg = ctx.scene?.background;
    if (bg && bg.isColor) bits.push(bg.getHexString());
    for (const [k, v] of ctx.partOpacity) bits.push(k, Number(v).toFixed(3));
    for (const c of ctx.cuts) {
      bits.push(String(c.id), c.locked ? "1" : "0", Number(c.t).toFixed(4));
    }
    // The settled frame is a merged peel. Its cache key has to change when
    // a session hide flips mesh visibility, or the old triangles stay drawn.
    const hidden = ctx.ifcVisibility.hiddenIds();
    bits.push(hidden.length ? hidden.slice().sort().join(",") : "-");
    // Locks flip mesh visibility the same way.
    bits.push(`x${ctx.visibilitySigRevision}`);
    return bits.join("|");
  }

  function tick() {
    if (ctx.pauseTick) return;
    const now = performance.now();
    if (ctx.doorCtrl.step(now)) {
      ctx.viewDirty = true;
      ctx.realisticCtl?.stage.markDirty();
    }
    if (ctx.windowSlides.step(now)) {
      ctx.viewDirty = true;
      ctx.realisticCtl?.stage.markDirty();
    }
    ctx.stepPulse(now);
    if (ctx.fixtureModels.step(now)) {
      ctx.viewDirty = true;
      ctx.realisticCtl?.stage.markDirty();
    }
    ctx.stepCamFly(now);
    ctx.stepFrameAnim(now);
    if (ctx.walk?.active) {
      const w0 = performance.now();
      if (ctx.walk.update(now)) ctx.viewDirty = true;
      ctx.walkFrameMs = performance.now() - w0;
    }
    ctx.controls.update();
    // Keep near/far tight as orbit distance changes.
    if (ctx.root) ctx.updateCameraClipPlanes();

    if (!ctx.peelCamInited) {
      ctx.peelCamPos.copy(ctx.camera.position);
      ctx.peelCamTarget.copy(ctx.controls.target);
      ctx.peelCamInited = true;
    }
    const camMoved =
      ctx.camera.position.distanceToSquared(ctx.peelCamPos) > 1e-8 ||
      ctx.controls.target.distanceToSquared(ctx.peelCamTarget) > 1e-8;
    ctx.peelCamPos.copy(ctx.camera.position);
    ctx.peelCamTarget.copy(ctx.controls.target);

    const contentNow = readContentSig();
    const contentChanged = contentNow !== ctx.contentSig;
    if (contentChanged) ctx.walk?.markColliderStale();
    // Cuts and hides change what casts a shadow.
    if (contentChanged) ctx.realisticCtl?.stage.markDirty();
    const camChanged = cameraSigChanged();
    // Still frame, after the first picture: correct transparency. Anything
    // in motion stays on one sorted-alpha draw.
    if (contentChanged) ctx.holdFastForPrime = true;
    const wantHigh =
      !ctx.peelPointerDown &&
      !camMoved &&
      !contentChanged &&
      !ctx.cutSliderActive &&
      !ctx.frameAnim &&
      !ctx.holdFastForPrime;
    ctx.lastPeelQuality = wantHigh ? "high" : "fast";
    const qualityUpgrade = ctx.lastPeelQuality !== ctx.renderedPeelQuality;
    if (!ctx.viewDirty && !contentChanged && !camChanged && !qualityUpgrade && !ctx.holdFastForPrime) {
      requestAnimationFrame(tick);
      return;
    }
    ctx.viewDirty = false;
    ctx.contentSig = contentNow;
    ctx.renderedPeelQuality = ctx.lastPeelQuality;
    if (!contentChanged) ctx.holdFastForPrime = false;

    ctx.measureTool?.update();
    ctx.annotations.update();

    const r0 = performance.now();
    const usedPeel = ctx.depthPeel.render(ctx.scene, ctx.camera, ctx.root, ctx.anyPartFaded, {
      quality: ctx.lastPeelQuality,
      batchKey: contentNow,
      // The frame that shows a new scene or slider value should paint before
      // the geometry merge. The following still frame peels.
      // While the thumb is down the clip plane moves and the filled cut face
      // stays put until release. A snapshot from that pause is the leftover
      // face once the view settles.
      deferPrime: contentChanged || ctx.cutSliderActive,
    });
    // Re-apply slider opacities when leaving peel mode so materials cannot
    // stay stuck translucent / depthWrite-off after a 100% scrub. The abort
    // path already presented sorted alpha, so a forced redraw just runs the
    // failing peel a second time.
    if (ctx.prevUsedPeel && !usedPeel) {
      ctx.healOpacitiesFromState();
    }
    ctx.prevUsedPeel = usedPeel;
    // Selection outline and move arrows, drawn over the finished frame.
    ctx.editMode?.renderOverlay(ctx.renderer, ctx.camera);
    const r1 = performance.now();
    ctx.frameStats.frames += 1;
    ctx.frameStats.renderMs += r1 - r0;
    ctx.frameStats.walkMs += ctx.walk?.active ? ctx.walkFrameMs : 0;
    ctx.frameStats.totalMs += r1 - now;
    requestAnimationFrame(tick);
  }

  ctx.notePeelPointerUp = notePeelPointerUp;
  ctx.readCameraSig = readCameraSig;
  ctx.cameraSigChanged = cameraSigChanged;
  ctx.readContentSig = readContentSig;
  ctx.tick = tick;
}
