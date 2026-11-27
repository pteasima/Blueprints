/**
 * Parts tree, opacity, locks, material/edge modes, and remembered visibility.
 * Structural split from main.js; behavior is unchanged.
 */
import * as THREE from "three";
import { syncSectionCaps } from "./sectionCaps.js";
import { createCooperativeRange } from "./coopRange.js";
import {
  MODE_REALISTIC,
  MODE_SHADED,
  MODE_SOLID,
  applyMaterialMode,
  applyOpacityToMeshes,
  collectLeafIds,
  resolvePartOutline,
  saveMaterialMode,
} from "./materials.js";
import { t as tr } from "./i18n.js";
import { CABLE_LEAF, withCableLeaf } from "./viewerBoot.js";
import {
  clearEdgeOverlays,
  EDGE_MODE_NONE,
  EDGE_MODE_OPAQUE,
  EDGE_MODE_TRANSPARENT,
  saveEdgeMode,
  syncEdgeOverlays,
} from "./edges.js";
import { isSeeThroughOpacity } from "./depthPeel.js";
import {
  IFC_LOCK_PREFIX,
  clearVisibility,
  defaultLocks,
  ifcElementLocked,
  lockStates,
  lockedLeafIds,
  saveVisibility,
  VISIBILITY_VERSION,
} from "./visibilityState.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachPartsVisibility(ctx) {
  /** Iso and the other builtin views show every part. */
  function resetDefaultOpacities() {
    for (const name of ctx.parts.keys()) {
      if (ctx.lazyLayers.has(name) || ctx.lockedLeaves.has(name)) continue;
      ctx.partOpacity.set(name, 1);
      ctx.partLastNonZero.set(name, 1);
      applyOpacityToMeshes(ctx.parts.get(name) || [], 1, { edgeMode: ctx.edgeMode });
    }
    scheduleVisibilitySave();
    ctx.updateBox();
    syncPartOpacityUi();
  }

  /**
   * @param {string} name
   * @param {number} opacity
   * @param {{ skipUi?: boolean, detach?: boolean, skipClip?: boolean }} [opts]
   */
  function setPartOpacity(name, opacity, opts = {}) {
    // A locked leaf keeps its visibility until it is unlocked (or Reset).
    if (!opts.force && ctx.lockedLeaves.has(name)) return;
    const o = Math.max(0, Math.min(1, Number(opacity) || 0));
    ctx.partOpacity.set(name, o);
    if (o > 0) ctx.partLastNonZero.set(name, o);
    if (opts.detach) ctx.detachedLeaves.add(name);
    if (o > 0 && ctx.lazyLayers.get(name)?.state === "idle") void ctx.loadLazyLayer(name);
    applyOpacityToMeshes(ctx.parts.get(name) || [], o, { edgeMode: ctx.edgeMode });
    scheduleVisibilitySave();
    if (opts.skipClip) return;
    ctx.updateBox();
    if (!opts.skipUi) syncPartOpacityUi();
  }

  /**
   * @param {string[]} leafIds
   * @param {number} opacity 0–1
   * @param {string} [groupId]
   */
  function setGroupOpacity(leafIds, opacity, groupId) {
    const o = Math.max(0, Math.min(1, Number(opacity) || 0));
    if (groupId) ctx.groupSliderOpacity.set(groupId, o);
    for (const id of leafIds) {
      if (ctx.detachedLeaves.has(id) || ctx.lockedLeaves.has(id)) continue;
      ctx.partOpacity.set(id, o);
      if (o > 0) ctx.partLastNonZero.set(id, o);
      applyOpacityToMeshes(ctx.parts.get(id) || [], o, { edgeMode: ctx.edgeMode });
    }
    scheduleVisibilitySave();
    ctx.updateBox();
    syncPartOpacityUi();
  }

  /**
   * Reattach a leaf to its parent group and match the group's current opacity.
   * @param {string} leafId
   * @param {string} groupId
   * @param {string[]} groupLeafIds
   */
  function syncLeafToGroup(leafId, groupId, groupLeafIds) {
    if (ctx.lockedLeaves.has(leafId)) return;
    ctx.detachedLeaves.delete(leafId);
    const attached = groupLeafIds.filter((id) => !ctx.detachedLeaves.has(id));
    const o = groupDisplayOpacity(groupId, attached);
    ctx.partOpacity.set(leafId, o);
    if (o > 0) ctx.partLastNonZero.set(leafId, o);
    applyOpacityToMeshes(ctx.parts.get(leafId) || [], o, { edgeMode: ctx.edgeMode });
    scheduleVisibilitySave();
    ctx.updateBox();
    syncPartOpacityUi();
  }

  /**
   * @param {string[]} leafIds
   * @returns {number}
   */
  function commonOpacity(leafIds) {
    if (!leafIds.length) return 1;
    const first = ctx.partOpacity.get(leafIds[0]) ?? 1;
    for (let i = 1; i < leafIds.length; i++) {
      const v = ctx.partOpacity.get(leafIds[i]) ?? 1;
      if (Math.abs(v - first) > 1e-4) return NaN;
    }
    return first;
  }

  /**
   * @param {string} groupId
   * @param {string[]} leafIds
   * @returns {number}
   */
  function groupDisplayOpacity(groupId, leafIds) {
    const attached = leafIds.filter((id) => !ctx.detachedLeaves.has(id));
    const common = commonOpacity(attached.length ? attached : leafIds);
    if (!Number.isNaN(common)) return common;
    return ctx.groupSliderOpacity.get(groupId) ?? 1;
  }

  function syncPartOpacityUi() {
    for (const [id, range] of ctx.leafOpacityRanges) {
      range.value = (ctx.partOpacity.get(id) ?? 1) * 100;
    }
    for (const [gid, range] of ctx.groupOpacityRanges) {
      const leaves = (range.el.dataset.leaves || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      range.value = groupDisplayOpacity(gid, leaves) * 100;
    }
    for (const [id, btn] of ctx.leafSyncButtons) {
      const detached = ctx.detachedLeaves.has(id);
      btn.hidden = !detached;
      btn.setAttribute("aria-hidden", detached ? "false" : "true");
    }
  }

  function edgeResolution() {
    const size = new THREE.Vector2();
    ctx.renderer.getDrawingBufferSize(size);
    return { x: size.x, y: size.y };
  }

  function refreshEdges() {
    if (!ctx.parts.size) return;
    if (ctx.edgeMode === EDGE_MODE_NONE) {
      clearEdgeOverlays(ctx.root);
      return;
    }
    syncEdgeOverlays(ctx.parts, true, {
      clippingPlanes: ctx.lockedClipPlanes(),
      resolution: edgeResolution(),
      edgeMode: ctx.edgeMode,
    });
  }

  function refreshMaterials() {
    if (!ctx.parts.size) return;
    const request = ++ctx.materialsRequest;
    if (ctx.materialMode === MODE_REALISTIC) {
      const ctl = ctx.ensureRealistic();
      ctl.load().then(() => {
        if (request !== ctx.materialsRequest || ctx.materialMode !== MODE_REALISTIC || !ctx.root) return;
        ctl.apply(ctx.parts, ctx.root, {
          clippingPlanes: ctx.lockedClipPlanes(),
          opacityByLabel: ctx.partOpacity,
          edgeMode: ctx.edgeMode,
        });
        finishMaterialRefresh();
      });
      return;
    }
    if (ctx.realisticCtl?.stage.enabled) ctx.realisticCtl.leave(ctx.parts);
    applyMaterialMode(ctx.parts, ctx.materialMode, {
      isDark: ctx.isDarkTheme,
      clippingPlanes: ctx.lockedClipPlanes(),
      opacityByLabel: ctx.partOpacity,
      edgeMode: ctx.edgeMode,
    });
    finishMaterialRefresh();
  }

  function finishMaterialRefresh() {
    if (ctx.materialMode === MODE_REALISTIC) {
      // Filmic curve for PBR; exposure tuned against the staged sun + IBL.
      ctx.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      ctx.renderer.toneMappingExposure = 1.0;
    } else if (ctx.materialMode === MODE_SHADED) {
      ctx.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      ctx.renderer.toneMappingExposure = 1.05;
    } else {
      // Solid uses unlit MeshBasicMaterial — skip ACES so chroma stays punchy.
      ctx.renderer.toneMapping = THREE.NoToneMapping;
      ctx.renderer.toneMappingExposure = 1;
    }
    // Before edges and caps: a box a model stands in for gets neither.
    ctx.fixtureModels.sync(ctx.materialMode, ctx.lockedClipPlanes());
    refreshEdges();
    syncSectionCaps(ctx.parts, ctx.lockedClipPlanes());
    if (ctx.materialMode === MODE_REALISTIC) ctx.realisticCtl?.afterRefresh();
    ctx.reapplyLightLooks();
    ctx.viewDirty = true;
  }

  function buildMaterialToggle() {
    const host = document.getElementById("mats");
    if (!host) return;
    host.replaceChildren();
    for (const [id, labelKey] of [
      [MODE_SOLID, "ui.solid"],
      [MODE_SHADED, "ui.shaded"],
      [MODE_REALISTIC, "ui.realistic"],
    ]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.mode = id;
      btn.textContent = tr(labelKey);
      if (id === ctx.materialMode) btn.classList.add("is-active");
      btn.addEventListener("click", () => {
        ctx.materialMode = id;
        saveMaterialMode(id);
        host.querySelectorAll("button").forEach((el) => {
          el.classList.toggle("is-active", el.dataset.mode === id);
        });
        refreshMaterials();
      });
      host.append(btn);
    }
  }

  function buildEdgesToggle() {
    const host = document.getElementById("edges");
    if (!host) return;
    host.replaceChildren();
    for (const [id, labelKey] of [
      [EDGE_MODE_NONE, "ui.edgesNone"],
      [EDGE_MODE_TRANSPARENT, "ui.edgesTransparent"],
      [EDGE_MODE_OPAQUE, "ui.edgesOpaque"],
    ]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.edgeMode = id;
      btn.textContent = tr(labelKey);
      if (id === ctx.edgeMode) btn.classList.add("is-active");
      btn.addEventListener("click", () => {
        ctx.edgeMode = id;
        saveEdgeMode(id);
        host.querySelectorAll("button").forEach((el) => {
          el.classList.toggle("is-active", el.dataset.edgeMode === id);
        });
        // Rebuild overlays then re-apply face opacities so stroke alpha matches mode.
        refreshEdges();
        healOpacitiesFromState();
      });
      host.append(btn);
    }
  }

  /**
   * Tap toggles 0 ↔ lastNonZero; horizontal drag on the thumb scrubs.
   * Uses cooperative range (no native click-to-seek).
   * @param {string} aria
   * @param {number} pct0to100
   * @param {() => number} getLastNonZero 0–1
   * @param {(opacity: number) => void} apply
   * @returns {{ wrap: HTMLDivElement, range: ReturnType<typeof createCooperativeRange> }}
   */
  function makeOpacityRange(aria, pct0to100, getLastNonZero, apply) {
    const wrap = document.createElement("div");
    wrap.className = "part-opacity-wrap";

    /** @type {ReturnType<typeof createCooperativeRange>} */
    let range;
    const toggle = () => {
      const cur = range.value / 100;
      if (cur > 0) apply(0);
      else {
        const last = getLastNonZero();
        apply(last > 0 ? last : 1);
      }
    };

    range = createCooperativeRange({
      min: 0,
      max: 100,
      step: 1,
      value: Math.round(pct0to100),
      ariaLabel: aria,
      formatAriaValue: (v) => `${Math.round(v)}%`,
      thumbScrubOnly: true,
      onInput: (v) => apply(v / 100),
      onChange: (v) => apply(v / 100),
      onTap: toggle,
    });
    range.el.classList.add("part-opacity");
    wrap.append(range.el);
    return { wrap, range };
  }

  /**
   * Size the name column to the longest visible label; sliders fill the rest.
   */
  function relayoutPartNameColumn() {
    const host = document.getElementById("parts");
    if (!host) return;
    host.style.removeProperty("--part-name-col");
    let max = 0;
    for (const el of host.querySelectorAll(".part-name")) {
      const nest = el.closest(".part-children");
      if (nest?.hidden) continue;
      // Force intrinsic width so overflow:hidden does not shrink scrollWidth.
      const prev = el.style.width;
      el.style.width = "max-content";
      max = Math.max(max, Math.ceil(el.getBoundingClientRect().width));
      el.style.width = prev;
    }
    if (max > 0) {
      host.style.setProperty("--part-name-col", `${max}px`);
    }
  }

  /**
   * @param {import("./materials.js").OutlineNode} node
   * @param {HTMLElement} parent
   * @param {number} depth
   * @param {{ groupId: string, leafIds: string[] } | null} [parentGroup]
   */
  function appendOutlineNode(node, parent, depth, parentGroup = null) {
    if (node.type === "leaf") {
      const row = document.createElement("div");
      row.className = "part-row part-leaf";
      row.style.setProperty("--part-depth", String(depth));
      row.dataset.leaf = node.id;

      const spacer = document.createElement("span");
      spacer.className = "part-disclosure-spacer";
      spacer.setAttribute("aria-hidden", "true");

      const nameEl = document.createElement("span");
      nameEl.className = "part-name";
      nameEl.textContent = node.label;

      const { wrap, range } = makeOpacityRange(
        `${node.label} opacity`,
        (ctx.partOpacity.get(node.id) ?? 1) * 100,
        () => ctx.partLastNonZero.get(node.id) ?? 1,
        (o) => {
          if (ctx.lockedLeaves.has(node.id)) return;
          setPartOpacity(node.id, o, {
            detach: Boolean(parentGroup),
          });
        },
      );
      range.el.dataset.leaf = node.id;
      ctx.leafOpacityRanges.set(node.id, range);

      /** @type {HTMLButtonElement | null} */
      let syncBtn = null;
      if (parentGroup) {
        syncBtn = document.createElement("button");
        syncBtn.type = "button";
        syncBtn.className = "part-sync";
        syncBtn.textContent = tr("ui.sync");
        syncBtn.setAttribute("aria-label", `${tr("ui.sync")} ${node.label}`);
        const detached = ctx.detachedLeaves.has(node.id);
        syncBtn.hidden = !detached;
        syncBtn.setAttribute("aria-hidden", detached ? "false" : "true");
        syncBtn.addEventListener("click", (ev) => {
          ev.stopPropagation();
          syncLeafToGroup(
            node.id,
            parentGroup.groupId,
            parentGroup.leafIds,
          );
        });
        ctx.leafSyncButtons.set(node.id, syncBtn);
      }

      const lockBtn = makeLockButton(node.id, node.label, row);
      if (syncBtn) row.append(spacer, nameEl, wrap, syncBtn, lockBtn);
      else row.append(spacer, nameEl, wrap, lockBtn);
      parent.append(row);
      return;
    }

    // The cable layer is not driven by its group's slider.
    const leafIds = collectLeafIds(node).filter((id) => !ctx.isLayerLeaf(id));
    const groupWrap = document.createElement("div");
    groupWrap.className = "part-group";
    groupWrap.dataset.group = node.id;

    const row = document.createElement("div");
    row.className = "part-row part-group-row";
    row.style.setProperty("--part-depth", String(depth));
    row.setAttribute("role", "button");
    row.tabIndex = 0;

    const disclosure = document.createElement("button");
    disclosure.type = "button";
    disclosure.className = "part-disclosure";
    disclosure.setAttribute("aria-label", `Expand ${node.label}`);
    disclosure.setAttribute("aria-expanded", "false");

    const nameEl = document.createElement("span");
    nameEl.className = "part-name";
    nameEl.textContent = node.label;

    /** Last non-zero for the group slider itself. */
    let groupLastNonZero = groupDisplayOpacity(node.id, leafIds) || 1;
    if (groupLastNonZero <= 0) groupLastNonZero = 1;

    const { wrap, range } = makeOpacityRange(
      `${node.label} opacity`,
      groupDisplayOpacity(node.id, leafIds) * 100,
      () => groupLastNonZero,
      (o) => {
        if (lockStates(ctx.partOutline, ctx.partLocks || []).has(node.id)) return;
        if (o > 0) groupLastNonZero = o;
        setGroupOpacity(leafIds, o, node.id);
      },
    );
    range.el.dataset.group = node.id;
    range.el.dataset.leaves = leafIds.join(",");
    ctx.groupOpacityRanges.set(node.id, range);

    // Stop row toggle when interacting with the slider.
    wrap.addEventListener("click", (ev) => ev.stopPropagation());
    wrap.addEventListener("pointerdown", (ev) => ev.stopPropagation());

    const children = document.createElement("div");
    children.className = "part-children";
    children.hidden = true;

    function setExpanded(open) {
      if (open) ctx.expandedGroups.add(node.id);
      else ctx.expandedGroups.delete(node.id);
      children.hidden = !open;
      groupWrap.classList.toggle("is-expanded", open);
      disclosure.setAttribute("aria-expanded", open ? "true" : "false");
      disclosure.setAttribute(
        "aria-label",
        open ? `Collapse ${node.label}` : `Expand ${node.label}`,
      );
      requestAnimationFrame(() => relayoutPartNameColumn());
    }

    function toggleExpanded() {
      setExpanded(!ctx.expandedGroups.has(node.id));
    }

    disclosure.addEventListener("click", (ev) => {
      ev.stopPropagation();
      toggleExpanded();
    });
    row.addEventListener("click", (ev) => {
      if (wrap.contains(/** @type {Node} */ (ev.target))) {
        return;
      }
      toggleExpanded();
    });
    row.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        toggleExpanded();
      }
    });

    const lockBtn = makeLockButton(node.id, node.label, row);
    row.append(disclosure, nameEl, wrap, lockBtn);
    groupWrap.append(row, children);
    parent.append(groupWrap);

    const childParent = { groupId: node.id, leafIds };
    for (const child of node.children) {
      appendOutlineNode(child, children, depth + 1, ctx.isLayerLeaf(child.id) ? null : childParent);
    }

    // Restore expand state if rebuilding; default collapsed.
    setExpanded(ctx.expandedGroups.has(node.id));
  }

  function buildPartToggles() {
    const host = document.getElementById("parts");
    if (!host) return;
    host.replaceChildren();
    ctx.leafOpacityRanges.clear();
    ctx.groupOpacityRanges.clear();
    ctx.leafSyncButtons.clear();

    for (const name of ctx.parts.keys()) {
      if (!ctx.partOpacity.has(name)) {
        ctx.partOpacity.set(name, 1);
        applyOpacityToMeshes(ctx.parts.get(name) || [], 1, { edgeMode: ctx.edgeMode });
      }
      if (!ctx.partLastNonZero.has(name)) ctx.partLastNonZero.set(name, 1);
    }

    const lazyIds = [...ctx.lazyLayers.keys()].filter((id) => !ctx.parts.has(id));
    const outline = ctx.hasCables
      ? resolvePartOutline([...ctx.parts.keys(), ...lazyIds, CABLE_LEAF], withCableLeaf(ctx.partGroups), tr)
      : resolvePartOutline([...ctx.parts.keys(), ...lazyIds], ctx.partGroups, tr);
    ctx.partOutline = outline;
    if (!ctx.partLocks) ctx.partLocks = new Set(defaultLocks(outline));
    recomputeLocks();
    ctx.lockButtons.clear();
    for (const node of outline) {
      appendOutlineNode(node, host, 0, null);
    }
    const footer = document.createElement("div");
    footer.className = "parts-footer";
    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.id = "parts-reset";
    resetBtn.className = "parts-reset";
    resetBtn.textContent = tr("ui.resetVisibility");
    resetBtn.addEventListener("click", () => resetVisibility());
    footer.append(resetBtn);
    host.append(footer);
    syncLockUi();
    requestAnimationFrame(() => relayoutPartNameColumn());
  }

  /**
   * Padlock on a Parts row (44 pt target). Tap locks or unlocks that row;
   * a row locked by its group shows a dimmed closed padlock and is inert.
   * @param {string} id
   * @param {string} label
   * @param {HTMLElement} row
   */
  function makeLockButton(id, label, row) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "part-lock";
    btn.dataset.lock = id;
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      if (btn.disabled) return;
      toggleLock(id);
    });
    btn.addEventListener("pointerdown", (ev) => ev.stopPropagation());
    ctx.lockButtons.set(id, { row, btn, label });
    return btn;
  }

  function recomputeLocks() {
    const locks = ctx.partLocks || new Set();
    ctx.lockedLeaves = lockedLeafIds(ctx.partOutline, locks);
    ctx.ifcLocks = new Set(
      [...locks].filter((id) => id.startsWith(IFC_LOCK_PREFIX)).map((id) => id.slice(IFC_LOCK_PREFIX.length)),
    );
  }

  function syncLockUi() {
    const states = lockStates(ctx.partOutline, ctx.partLocks || []);
    for (const [id, { row, btn, label }] of ctx.lockButtons) {
      const state = states.get(id) || null;
      row.classList.toggle("is-locked", Boolean(state));
      row.classList.toggle("is-lock-inherited", state === "inherited");
      btn.classList.toggle("is-on", state === "self");
      btn.classList.toggle("is-inherited", state === "inherited");
      btn.disabled = state === "inherited";
      btn.setAttribute("aria-pressed", state ? "true" : "false");
      const verb = state === "inherited" ? tr("ui.lockedByGroup") : state ? tr("ui.unlock") : tr("ui.lock");
      btn.setAttribute("aria-label", `${verb} ${label}`);
      btn.title = verb;
      btn.innerHTML = state ? ctx.PADLOCK_CLOSED : ctx.PADLOCK_OPEN;
    }
  }

  /** @param {string} id Parts group/leaf id or `ifc:<GlobalId>` */
  function toggleLock(id) {
    if (!ctx.partLocks) ctx.partLocks = new Set(defaultLocks(ctx.partOutline));
    if (ctx.partLocks.has(id)) ctx.partLocks.delete(id);
    else ctx.partLocks.add(id);
    recomputeLocks();
    syncLockUi();
    // Locked meshes come back if a session hide had them.
    ctx.applyInspectorVisibility();
    ctx.ifcUiRef?.refresh();
    scheduleVisibilitySave();
  }

  /** True when this yaml id (mesh key) has a mesh on a locked leaf. */
  function keyLocked(key) {
    if (!key || !ctx.lockedLeaves.size) return false;
    for (const mesh of ctx.meshesByKey.get(key) || []) {
      if (ctx.lockedLeaves.has(mesh.userData.bpPart)) return true;
    }
    return false;
  }

  /** Inspector-side lock: an IFC lock, or any of its meshes on a locked leaf. */
  function elementLocked(globalId) {
    if (ifcElementLocked(ctx.ifcIndex, globalId, ctx.ifcLocks)) return true;
    const element = ctx.ifcIndex.elements?.[globalId];
    return Boolean(element?.id && keyLocked(element.id));
  }

  function collectVisibilityState() {
    /** @type {Record<string, number>} */
    const opacity = {};
    for (const [k, v] of ctx.partOpacity) opacity[k] = Number(Number(v).toFixed(3));
    /** @type {Record<string, number>} */
    const groupSlider = {};
    for (const [k, v] of ctx.groupSliderOpacity) groupSlider[k] = Number(Number(v).toFixed(3));
    const state = {
      v: VISIBILITY_VERSION,
      opacity,
      groupSlider,
      detached: [...ctx.detachedLeaves],
      locks: ctx.partLocks ? [...ctx.partLocks] : null,
      ifcHidden: ctx.ifcVisibilityRef ? ctx.ifcVisibilityRef.hiddenIds() : [],
    };
    return state;
  }

  function flushVisibilitySave() {
    if (ctx.visSaveTimer) clearTimeout(ctx.visSaveTimer);
    ctx.visSaveTimer = 0;
    if (!ctx.visModelId || ctx.visRestoring || !ctx.root) return;
    saveVisibility(ctx.visStorage, ctx.visModelId, collectVisibilityState());
  }

  function scheduleVisibilitySave() {
    if (!ctx.visModelId || ctx.visRestoring) return;
    if (ctx.visSaveTimer) clearTimeout(ctx.visSaveTimer);
    ctx.visSaveTimer = setTimeout(flushVisibilitySave, 300);
  }

  /** Put the remembered opacities back before the Parts panel is built. */
  function restoreSavedOpacities() {
    if (!ctx.savedVis) return;
    ctx.visRestoring = true;
    try {
      for (const name of ctx.parts.keys()) {
        if (ctx.isLayerLeaf(name)) continue;
        const v = ctx.savedVis.opacity[name];
        if (v == null) continue;
        setPartOpacity(name, v, { force: true, skipUi: true, skipClip: true });
      }
      for (const id of ctx.savedVis.detached) ctx.detachedLeaves.add(id);
      for (const [k, v] of Object.entries(ctx.savedVis.groupSlider)) ctx.groupSliderOpacity.set(k, v);
    } finally {
      ctx.visRestoring = false;
    }
  }

  /** Inspector hides, once the inspector exists. */
  function restoreSavedSession() {
    if (!ctx.savedVis) return;
    ctx.visRestoring = true;
    try {
      if (ctx.ifcVisibilityRef && ctx.savedVis.ifcHidden.length) {
        ctx.ifcVisibilityRef.restore(ctx.savedVis.ifcHidden.filter((id) => ctx.ifcIndex.elements?.[id]));
      }
    } finally {
      ctx.visRestoring = false;
    }
    ctx.applyInspectorVisibility();
    ctx.ifcUiRef?.refresh();
  }

  /**
   * Parts panel Reset: every part and on-demand layer (Gridfinity) on,
   * cables off, no inspector hides, the model's default locks. Clears the
   * remembered entry.
   */
  function resetVisibility() {
    if (ctx.visSaveTimer) clearTimeout(ctx.visSaveTimer);
    ctx.visSaveTimer = 0;
    clearVisibility(ctx.visStorage, ctx.visModelId);
    ctx.visRestoring = true;
    try {
      ctx.detachedLeaves.clear();
      ctx.groupSliderOpacity.clear();
      ctx.partLocks = new Set(defaultLocks(ctx.partOutline));
      recomputeLocks();
      const ids = new Set([...ctx.parts.keys(), ...ctx.lazyLayers.keys()]);
      if (ctx.hasCables) ids.add(CABLE_LEAF);
      for (const name of ids) {
        setPartOpacity(name, ctx.isLayerLeaf(name) ? ctx.layerDefaultOpacity(name) : 1, { force: true, skipUi: true, skipClip: true });
        ctx.partLastNonZero.set(name, 1);
      }
      ctx.ifcVisibilityRef?.showAll();
    } finally {
      ctx.visRestoring = false;
    }
    ctx.updateBox();
    buildPartToggles();
    ctx.applyInspectorVisibility();
    ctx.ifcUiRef?.refresh();
  }

  function anyPartFaded() {
    for (const [name, o] of ctx.partOpacity) {
      if (name === CABLE_LEAF) continue;
      // An on-demand layer that is off (or not in yet) has nothing to fade.
      if (ctx.lazyLayers.has(name) && (o <= 1e-4 || ctx.lazyLayers.get(name)?.state !== "loaded")) continue;
      // A part at 0% is hidden (visible = false), not see-through; it needs
      // no peel. Counting it sent every "hide this layer" view down the peel
      // path, whose still frame lost the Realistic floor (Petr, 2026-11-19).
      if (isSeeThroughOpacity(o)) return true;
    }
    return false;
  }

  function healOpacitiesFromState() {
    for (const [name, meshes] of ctx.parts) {
      const o = ctx.partOpacity.get(name) ?? 1;
      applyOpacityToMeshes(meshes, o, { edgeMode: ctx.edgeMode });
    }
  }

  ctx.resetDefaultOpacities = resetDefaultOpacities;
  ctx.setPartOpacity = setPartOpacity;
  ctx.setGroupOpacity = setGroupOpacity;
  ctx.syncLeafToGroup = syncLeafToGroup;
  ctx.commonOpacity = commonOpacity;
  ctx.groupDisplayOpacity = groupDisplayOpacity;
  ctx.syncPartOpacityUi = syncPartOpacityUi;
  ctx.edgeResolution = edgeResolution;
  ctx.refreshEdges = refreshEdges;
  ctx.refreshMaterials = refreshMaterials;
  ctx.finishMaterialRefresh = finishMaterialRefresh;
  ctx.buildMaterialToggle = buildMaterialToggle;
  ctx.buildEdgesToggle = buildEdgesToggle;
  ctx.makeOpacityRange = makeOpacityRange;
  ctx.relayoutPartNameColumn = relayoutPartNameColumn;
  ctx.appendOutlineNode = appendOutlineNode;
  ctx.buildPartToggles = buildPartToggles;
  ctx.makeLockButton = makeLockButton;
  ctx.recomputeLocks = recomputeLocks;
  ctx.syncLockUi = syncLockUi;
  ctx.toggleLock = toggleLock;
  ctx.keyLocked = keyLocked;
  ctx.elementLocked = elementLocked;
  ctx.collectVisibilityState = collectVisibilityState;
  ctx.flushVisibilitySave = flushVisibilitySave;
  ctx.scheduleVisibilitySave = scheduleVisibilitySave;
  ctx.restoreSavedOpacities = restoreSavedOpacities;
  ctx.restoreSavedSession = restoreSavedSession;
  ctx.resetVisibility = resetVisibility;
  ctx.anyPartFaded = anyPartFaded;
  ctx.healOpacitiesFromState = healOpacitiesFromState;
}
