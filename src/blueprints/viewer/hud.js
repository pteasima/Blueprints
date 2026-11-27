/**
 * Toolbar/chrome wiring, locale, sheet-safe framing, and resize.
 * Structural split from main.js; behavior is unchanged.
 */
import {
  applyStaticI18n,
  getLocale,
  setLocale,
  t as tr,
} from "./i18n.js";
import { setEdgeOverlayResolution } from "./edges.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachHud(ctx) {
  function computeFrameTargets() {
    const w = Math.max(1, ctx.canvas.clientWidth);
    const h = Math.max(1, ctx.canvas.clientHeight);
    if (!ctx.chromeApi) {
      return { zoom: 1, offX: 0, offY: 0, w, h };
    }
    const { bottom, right } = ctx.editMode?.active ? ctx.editMode.getSafeInsets() : ctx.chromeApi.getSafeInsets();
    if (bottom <= 0 && right <= 0) {
      return { zoom: 1, offX: 0, offY: 0, w, h };
    }
    const safeW = Math.max(1, w - right);
    const safeH = Math.max(1, h - bottom);
    // Zoom out so the previous full-frame content still fits in the safe rect.
    const zoom = Math.min(safeW / w, safeH / h);
    // Positive offsetY moves the frustum window down → content appears higher
    // (above the sheet). Same idea for a right-side sheet (offsetX).
    const offX = right / 2;
    const offY = bottom / 2;
    return { zoom, offX, offY, w, h };
  }

  function applyFrameProjection(w, h) {
    ctx.withSuppressedCameraChange(() => {
      ctx.suppressViewZoomSync = true;
      if (
        Math.abs(ctx.frameOffX) > 0.05 ||
        Math.abs(ctx.frameOffY) > 0.05 ||
        Math.abs(ctx.frameZoom - 1) > 0.001
      ) {
        ctx.camera.zoom = ctx.viewZoom * ctx.frameZoom;
        ctx.camera.setViewOffset(w, h, ctx.frameOffX, ctx.frameOffY, w, h);
      } else {
        ctx.camera.clearViewOffset();
        ctx.camera.zoom = ctx.viewZoom;
        ctx.frameZoom = 1;
        ctx.frameOffX = 0;
        ctx.frameOffY = 0;
      }
      ctx.camera.updateProjectionMatrix();
      ctx.suppressViewZoomSync = false;
    });
  }

  function applySafeViewOffset(animate = true) {
    const { zoom, offX, offY, w, h } = computeFrameTargets();
    ctx.frameZoomT = zoom;
    ctx.frameOffXT = offX;
    ctx.frameOffYT = offY;
    if (!animate) {
      ctx.frameZoom = zoom;
      ctx.frameOffX = offX;
      ctx.frameOffY = offY;
      ctx.frameAnim = 0;
      applyFrameProjection(w, h);
      return;
    }
    ctx.frameAnimFromZoom = ctx.frameZoom;
    ctx.frameAnimFromX = ctx.frameOffX;
    ctx.frameAnimFromY = ctx.frameOffY;
    ctx.frameAnim = performance.now();
  }

  function stepFrameAnim(now) {
    if (!ctx.frameAnim) return;
    const t = Math.min(1, (now - ctx.frameAnim) / ctx.FRAME_MS);
    const e = 1 - (1 - t) ** 3;
    ctx.frameZoom = ctx.frameAnimFromZoom + (ctx.frameZoomT - ctx.frameAnimFromZoom) * e;
    ctx.frameOffX = ctx.frameAnimFromX + (ctx.frameOffXT - ctx.frameAnimFromX) * e;
    ctx.frameOffY = ctx.frameAnimFromY + (ctx.frameOffYT - ctx.frameAnimFromY) * e;
    const w = Math.max(1, ctx.canvas.clientWidth);
    const h = Math.max(1, ctx.canvas.clientHeight);
    applyFrameProjection(w, h);
    if (t >= 1) ctx.frameAnim = 0;
  }

  function resize() {
    const w = Math.max(1, ctx.canvas.clientWidth);
    const h = Math.max(1, ctx.canvas.clientHeight);
    ctx.renderer.setSize(w, h, false);
    if (ctx.projection === "perspective") {
      ctx.applyPerspFovFromState();
    } else {
      ctx.refreshOrthoAspect();
    }
    applySafeViewOffset(false);
    const buf = ctx.edgeResolution();
    setEdgeOverlayResolution(ctx.root, buf.x, buf.y);
  }

  function syncWalkButton() {
    if (!ctx.walkBtn) return;
    ctx.walkBtn.hidden = !ctx.root;
    const on = Boolean(ctx.walk?.active);
    ctx.walkBtn.textContent = tr("ui.walk");
    ctx.walkBtn.classList.toggle("is-active", on);
    ctx.walkBtn.setAttribute("aria-pressed", on ? "true" : "false");
  }

  function buildLocaleToggle() {
    const host = document.getElementById("locale");
    if (!host) return;
    host.replaceChildren();
    for (const [id, label] of [
      ["cs", "CS"],
      ["en", "EN"],
    ]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.locale = id;
      btn.textContent = label;
      if (id === getLocale()) btn.classList.add("is-active");
      btn.addEventListener("click", () => {
        setLocale(/** @type {"en"|"cs"} */ (id));
      });
      host.append(btn);
    }
  }

  function relocalizeUi() {
    applyStaticI18n(document);
    if (ctx.arBtn && !ctx.arBusy) ctx.arBtn.textContent = tr("ui.ar");
    if (ctx.measureBtn) ctx.measureBtn.textContent = ctx.MEASURE_LABEL();
    syncWalkButton();
    syncDrawingButton();
    syncLabelButton();
    ctx.annotations.relocalize();
    try {
      ctx.buildMaterialToggle();
      ctx.buildEdgesToggle();
      ctx.buildCameraButtons();
      ctx.buildFovControl();
      ctx.buildWalkHeightControl();
      ctx.buildPartToggles();
      ctx.buildCutUI();
      buildLocaleToggle();
      ctx.buildHomeSection();
    } catch (err) {
      console.error("relocalizeUi", err);
      // Still refresh the locale control if an earlier rebuild failed.
      try {
        buildLocaleToggle();
      } catch {
        /* ignore */
      }
    }
    ctx.chromeApi?.refreshPartialHeight();
  }

  function showArButton() {
    if (ctx.arBtn) {
      ctx.arBtn.hidden = false;
      if (!ctx.arBusy) ctx.arBtn.textContent = tr("ui.ar");
    }
  }

  function showMeasureButton() {
    if (ctx.measureBtn) {
      ctx.measureBtn.hidden = false;
      ctx.measureBtn.textContent = ctx.MEASURE_LABEL();
    }
  }

  function syncDrawingButton() {
    if (!ctx.drawBtn) return;
    ctx.drawBtn.hidden = false;
    ctx.drawBtn.disabled = !ctx.activeSceneSpec || ctx.drawBusy;
    ctx.drawBtn.textContent = tr("ui.drawing");
  }

  function syncLabelButton() {
    if (!ctx.labelBtn) return;
    const has = Boolean(ctx.activeSceneSpec);
    ctx.labelBtn.hidden = !has;
    ctx.labelBtn.disabled = !has;
    ctx.labelBtn.setAttribute("aria-pressed", ctx.labelsOn ? "true" : "false");
    ctx.labelBtn.classList.toggle("is-active", has && ctx.labelsOn);
    ctx.labelBtn.textContent = tr("ui.labels");
  }

  ctx.computeFrameTargets = computeFrameTargets;
  ctx.applyFrameProjection = applyFrameProjection;
  ctx.applySafeViewOffset = applySafeViewOffset;
  ctx.stepFrameAnim = stepFrameAnim;
  ctx.resize = resize;
  ctx.syncWalkButton = syncWalkButton;
  ctx.buildLocaleToggle = buildLocaleToggle;
  ctx.relocalizeUi = relocalizeUi;
  ctx.showArButton = showArButton;
  ctx.showMeasureButton = showMeasureButton;
  ctx.syncDrawingButton = syncDrawingButton;
  ctx.syncLabelButton = syncLabelButton;
}
