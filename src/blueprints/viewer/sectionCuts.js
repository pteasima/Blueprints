/**
 * Section/cutaway planes, clipping, and the cut sheet UI.
 * Structural split from main.js; behavior is unchanged.
 */
import * as THREE from "three";
import { isSectionCap, syncSectionCaps } from "./sectionCaps.js";
import { createCooperativeRange } from "./coopRange.js";
import { t as tr } from "./i18n.js";
import { applyEdgeClipping, EDGE_MODE_NONE, isEdgeOverlay } from "./edges.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachSectionCuts(ctx) {
  function lookDirection(out = ctx._look) {
    return out.copy(ctx.controls.target).sub(ctx.camera.position).normalize();
  }

  function formatAngleLabel(normal) {
    const horiz = Math.hypot(normal.x, normal.z);
    const bearing = ((Math.atan2(normal.x, normal.z) * 180) / Math.PI + 360) % 360;
    const elev = (Math.atan2(normal.y, horiz) * 180) / Math.PI;
    const elevAbs = Math.abs(elev).toFixed(0);
    const elevMark = elev >= 0 ? "↑" : "↓";
    return `${bearing.toFixed(0)}° / ${elevAbs}°${elevMark}`;
  }

  function hasDraftCut() {
    return ctx.cuts.some((c) => !c.locked);
  }

  function lockedCuts() {
    return ctx.cuts.filter((c) => c.locked);
  }

  function ensureDraftCut() {
    if (hasDraftCut()) return;
    const shouldHaveDraft =
      lockedCuts().length === 0 || ctx.cameraMovedSinceLock;
    if (!shouldHaveDraft) return;
    ctx.cuts.push({
      id: ctx.nextCutId++,
      normal: new THREE.Vector3(0, 0, 1),
      t: 0,
      locked: false,
      label: tr("ui.cut"),
    });
  }

  function refreshCutRow(cut) {
    const host = document.getElementById("cuts");
    if (!host) return;
    const row = host.querySelector(`[data-cut-id="${cut.id}"]`);
    if (!row) {
      buildCutUI();
      return;
    }
    const labelEl = row.querySelector(".cut-label");
    if (labelEl) labelEl.textContent = cut.locked ? cut.label : tr("ui.cut");
    if (cut.locked && !row.querySelector(".cut-remove")) {
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "cut-remove";
      remove.setAttribute("aria-label", tr("ui.removeSection"));
      remove.textContent = "×";
      remove.addEventListener("click", () => removeCut(cut.id));
      row.append(remove);
    }
  }

  function lockCut(cut) {
    if (cut.locked) return;
    lookDirection(cut.normal);
    cut.locked = true;
    cut.label = formatAngleLabel(cut.normal);
    ctx.cameraMovedSinceLock = false;
    applyClipping();
    // Update in place so an active slider drag is not destroyed.
    refreshCutRow(cut);
  }

  function maybeSpawnDraftFromCamera() {
    if (lockedCuts().length === 0) return;
    if (hasDraftCut()) return;
    ctx.cameraMovedSinceLock = true;
    if (ctx.cutSliderActive) return;
    ensureDraftCut();
    buildCutUI();
  }

  function flushDeferredDraft() {
    // Called when a slider drag ends: only create a draft if the camera moved
    // while the thumb was held (deferred by cutSliderActive).
    if (!ctx.cameraMovedSinceLock) return;
    if (hasDraftCut()) return;
    if (lockedCuts().length === 0) return;
    ensureDraftCut();
    buildCutUI();
  }

  function setCutT(id, cutT) {
    const cut = ctx.cuts.find((c) => c.id === id);
    if (!cut) return;
    if (!cut.locked) lockCut(cut);
    cut.t = Math.min(1, Math.max(0, Number(cutT)));
    cut.anchor = null;
    // While the thumb is down, only move the clip planes. Rebuilding every
    // fat line on each tick is what made the slider feel stuck. Silhouettes
    // and caps catch up once, on release.
    if (ctx.cutSliderActive) {
      applyClipPlanes();
      return;
    }
    applyClipping();
  }

  function removeCut(id) {
    const idx = ctx.cuts.findIndex((c) => c.id === id);
    if (idx < 0) return;
    ctx.cuts.splice(idx, 1);
    if (lockedCuts().length === 0) {
      ctx.cameraMovedSinceLock = false;
      if (!hasDraftCut()) ensureDraftCut();
    } else if (ctx.cameraMovedSinceLock && !hasDraftCut()) {
      ensureDraftCut();
    }
    applyClipping();
    buildCutUI();
    ctx.chromeApi?.refreshPartialHeight();
  }

  function projectBoxOntoNormal(normal) {
    ctx.updateBox();
    if (ctx.box.isEmpty()) {
      return { near: -1, far: 1 };
    }
    const min = ctx.box.min;
    const max = ctx.box.max;
    let minS = Infinity;
    let maxS = -Infinity;
    for (let ix = 0; ix < 2; ix++) {
      for (let iy = 0; iy < 2; iy++) {
        for (let iz = 0; iz < 2; iz++) {
          ctx._corner.set(ix ? max.x : min.x, iy ? max.y : min.y, iz ? max.z : min.z);
          const s = ctx._corner.dot(normal);
          if (s < minS) minS = s;
          if (s > maxS) maxS = s;
        }
      }
    }
    const span = Math.max(maxS - minS, 1e-6);
    const margin = span * 0.02;
    return { near: minS - margin, far: maxS + margin };
  }

  function planeForCut(cut) {
    if (cut.anchor) {
      return new THREE.Plane().setFromNormalAndCoplanarPoint(cut.normal, cut.anchor);
    }
    const { near, far } = projectBoxOntoNormal(cut.normal);
    const s = near + (far - near) * cut.t;
    ctx._point.copy(cut.normal).multiplyScalar(s);
    return new THREE.Plane().setFromNormalAndCoplanarPoint(cut.normal, ctx._point);
  }

  /**
   * Point materials and edge strokes at the current cut planes.
   * Does not rebuild line geometry or caps.
   * @returns {THREE.Plane[]}
   */
  function applyClipPlanes() {
    const planes = lockedClipPlanes();
    if (!ctx.root) return planes;
    ctx.root.traverse((obj) => {
      if (!obj.isMesh || !obj.material) return;
      if (isEdgeOverlay(obj) || isSectionCap(obj)) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        if (!m) continue;
        const prevCount = m.clippingPlanes ? m.clippingPlanes.length : 0;
        m.clippingPlanes = planes;
        m.clipIntersection = false;
        if (prevCount !== planes.length) m.needsUpdate = true;
      }
    });
    applyEdgeClipping(ctx.root, planes);
    return planes;
  }

  function applyClipping() {
    const planes = applyClipPlanes();
    if (!ctx.root) return;
    // Fill the cut. Clipping only discards fragments; without these faces a
    // solid opened on both ends reads as an empty tube.
    syncSectionCaps(ctx.parts, planes);
    // Rebuild hard+cut edge geometry so section faces get silhouette strokes.
    if (ctx.edgeMode !== EDGE_MODE_NONE) ctx.refreshEdges();
    else applyEdgeClipping(ctx.root, planes);
  }

  function lockedClipPlanes() {
    return ctx.cuts.filter((c) => c.locked).map((c) => planeForCut(c));
  }

  function buildCutUI() {
    const host = document.getElementById("cuts");
    if (!host) return;
    host.replaceChildren();
    for (const cut of ctx.cuts) {
      const row = document.createElement("div");
      row.className = "cut-row";
      row.dataset.cutId = String(cut.id);

      const label = document.createElement("span");
      label.className = "cut-label";
      label.textContent = cut.locked ? cut.label : tr("ui.cut");

      const endSlider = () => {
        if (!ctx.cutSliderActive) return;
        ctx.cutSliderActive = false;
        applyClipping();
        flushDeferredDraft();
      };
      const range = createCooperativeRange({
        min: 0,
        max: 1,
        step: 0.001,
        value: cut.t,
        ariaLabel: cut.locked ? `Section ${cut.label}` : "Section cut",
        onScrubStart: () => {
          ctx.cutSliderActive = true;
          if (!cut.locked) lockCut(cut);
        },
        onScrubEnd: endSlider,
        onInput: (v) => setCutT(cut.id, v),
        onChange: (v) => {
          setCutT(cut.id, v);
          endSlider();
        },
      });

      row.append(label, range.el);

      if (cut.locked) {
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "cut-remove";
        remove.setAttribute("aria-label", tr("ui.removeSection"));
        remove.textContent = "×";
        remove.addEventListener("click", () => removeCut(cut.id));
        row.append(remove);
      }

      host.append(row);
    }
    ctx.chromeApi?.refreshPartialHeight();
  }

  ctx.lookDirection = lookDirection;
  ctx.formatAngleLabel = formatAngleLabel;
  ctx.hasDraftCut = hasDraftCut;
  ctx.lockedCuts = lockedCuts;
  ctx.ensureDraftCut = ensureDraftCut;
  ctx.refreshCutRow = refreshCutRow;
  ctx.lockCut = lockCut;
  ctx.maybeSpawnDraftFromCamera = maybeSpawnDraftFromCamera;
  ctx.flushDeferredDraft = flushDeferredDraft;
  ctx.setCutT = setCutT;
  ctx.removeCut = removeCut;
  ctx.projectBoxOntoNormal = projectBoxOntoNormal;
  ctx.planeForCut = planeForCut;
  ctx.applyClipPlanes = applyClipPlanes;
  ctx.applyClipping = applyClipping;
  ctx.lockedClipPlanes = lockedClipPlanes;
  ctx.buildCutUI = buildCutUI;
}
