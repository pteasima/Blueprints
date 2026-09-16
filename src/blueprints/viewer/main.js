/**
 * Custom WebGL viewer for Blueprints GLB exports.
 * Owns UI and animation; Three.js is only the renderer/loader toolkit.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { USDZExporter } from "three/addons/exporters/USDZExporter.js";
import { meshToClippedExportMesh } from "./clipGeometry.js";
import { applyArPlacement, computeArPlacement } from "./arPlacement.js";
import { BG_DARK, BG_LIGHT, initSheetChrome } from "./chrome.js";
import { createCooperativeRange } from "./coopRange.js";
import {
  MODE_REALISTIC,
  MODE_SOLID,
  applyMaterialMode,
  applyOpacityToMeshes,
  collectLeafIds,
  loadMaterialMode,
  resolvePartOutline,
  saveMaterialMode,
} from "./materials.js";
import { createDepthPeelRenderer } from "./depthPeel.js";
import { createMeasureTool } from "./measure.js";

/**
 * @param {HTMLCanvasElement} canvas
 * @param {ArrayBuffer} glbBuffer
 */
export function mountViewer(canvas, glbBuffer) {
  /** @type {THREE.Scene | null} */
  let scene = null;
  let sceneBg = BG_DARK;
  let isDarkTheme = true;
  /** @type {string} */
  let materialMode = loadMaterialMode();
  /** @type {Map<string, THREE.Object3D[]>} */
  const parts = new Map();
  /** Current opacity 0–1 per leaf label. */
  const partOpacity = new Map();
  /** Last non-zero opacity per leaf (for tap-toggle). */
  const partLastNonZero = new Map();
  /** Last opacity written via a group slider (when children diverge). */
  const groupSliderOpacity = new Map();
  /** Expanded disclosure group ids. */
  const expandedGroups = new Set();

  /** @type {ReturnType<typeof initSheetChrome> | null} */
  let chromeApi = null;

  chromeApi = initSheetChrome((isDark) => {
    isDarkTheme = isDark;
    sceneBg = isDark ? BG_DARK : BG_LIGHT;
    if (scene) scene.background = new THREE.Color(sceneBg);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    if (parts.size) refreshMaterials();
  });

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    // Room-scale models in metres need better depth precision than a fixed
    // 24-bit buffer — coplanar CAD faces otherwise flicker while orbiting.
    logarithmicDepthBuffer: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.localClippingEnabled = true;

  const depthPeel = createDepthPeelRenderer(renderer);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(sceneBg);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1e6);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.screenSpacePanning = true;

  scene.add(new THREE.AmbientLight(0xffffff, 0.45));
  const key = new THREE.DirectionalLight(0xffffff, 1.15);
  key.position.set(0.6, 1.0, 0.4);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.4);
  fill.position.set(-0.5, 0.2, -0.6);
  scene.add(fill);
  // Soft IBL so Realistic metal/clearcoat/roughness differences read clearly.
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  /** @type {THREE.Object3D | null} */
  let root = null;
  const box = new THREE.Box3();
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  const _look = new THREE.Vector3();
  const _point = new THREE.Vector3();
  const _corner = new THREE.Vector3();

  /**
   * @typedef {{
   *   id: number,
   *   normal: THREE.Vector3,
   *   t: number,
   *   locked: boolean,
   *   label: string,
   * }} Cut
   */
  /** @type {Cut[]} */
  const cuts = [];
  let nextCutId = 1;
  /** After a lock, camera must move before a new draft slider appears. */
  let cameraMovedSinceLock = false;
  /** Ignore OrbitControls change events caused by framing / presets. */
  let suppressCameraChange = false;
  /** True while a section slider is being dragged (avoid rebuilding that row). */
  let cutSliderActive = false;

  const loader = new GLTFLoader();
  loader.parse(
    glbBuffer,
    "",
    (gltf) => {
      root = gltf.scene;
      scene.add(root);
      root.traverse((obj) => {
        if (!obj.isMesh) return;
        const raw = obj.name || obj.parent?.name || "part";
        // OCCT/Three may uniquify duplicate labels (krov, krov_1, …); group for toggles.
        const name = raw.replace(/_\d+$/, "") || raw;
        if (!parts.has(name)) parts.set(name, []);
        parts.get(name).push(obj);
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          for (const m of mats) {
            if ("side" in m) m.side = THREE.DoubleSide;
          }
        }
      });
      frameIso();
      buildMaterialToggle();
      buildPartToggles();
      buildCameraButtons();
      ensureDraftCut();
      buildCutUI();
      refreshMaterials();
      chromeApi?.refreshPartialHeight();
      showArButton();
      showMeasureButton();
    },
    (err) => {
      fail(String(err?.message || err));
    },
  );

  function fail(msg) {
    const el = document.getElementById("err");
    if (!el) return;
    el.style.display = "block";
    el.textContent = msg;
  }

  function updateBox() {
    if (!root) return;
    box.setFromObject(root);
    box.getSize(size);
    box.getCenter(center);
  }

  /** Keep near/far tight around the model so depth precision stays usable. */
  function updateCameraClipPlanes() {
    const span = Math.max(size.x, size.y, size.z, 0.01);
    const dist = camera.position.distanceTo(controls.target);
    // Pull near plane in when close; keep far just past the far side of the model.
    camera.near = Math.min(Math.max(dist / 200, span / 5000, 0.001), dist / 10);
    camera.far = Math.max(dist + span * 4, span * 8, 10);
    camera.updateProjectionMatrix();
  }

  function withSuppressedCameraChange(fn) {
    suppressCameraChange = true;
    try {
      fn();
    } finally {
      requestAnimationFrame(() => {
        suppressCameraChange = false;
      });
    }
  }

  function frameIso() {
    if (!root) return;
    withSuppressedCameraChange(() => {
      updateBox();
      controls.target.copy(center);
      const span = Math.max(size.x, size.y, size.z, 1);
      const dist = span * 1.85;
      camera.position.set(
        center.x + dist * 0.75,
        center.y + dist * 0.55,
        center.z + dist * 0.75,
      );
      updateCameraClipPlanes();
      controls.update();
    });
    maybeSpawnDraftFromCamera();
  }

  function setCameraPreset(name) {
    if (!root) return;
    if (name === "iso") {
      frameIso();
      return;
    }
    withSuppressedCameraChange(() => {
      updateBox();
      const span = Math.max(size.x, size.y, size.z, 1);
      const dist = span * 1.85;
      const c = center;
      if (name === "front") {
        camera.position.set(c.x, c.y + span * 0.15, c.z + dist);
      } else if (name === "top") {
        camera.position.set(c.x, c.y + dist, c.z + span * 0.01);
      } else if (name === "side") {
        camera.position.set(c.x + dist, c.y + span * 0.15, c.z);
      }
      controls.target.copy(c);
      updateCameraClipPlanes();
      controls.update();
    });
    maybeSpawnDraftFromCamera();
  }

  function setPartOpacity(name, opacity, opts = {}) {
    const o = Math.max(0, Math.min(1, Number(opacity) || 0));
    partOpacity.set(name, o);
    if (o > 0) partLastNonZero.set(name, o);
    applyOpacityToMeshes(parts.get(name) || [], o);
    updateBox();
    applyClipping();
    if (!opts.skipUi) syncPartOpacityUi();
  }

  /**
   * @param {string[]} leafIds
   * @param {number} opacity 0–1
   * @param {string} [groupId]
   */
  function setGroupOpacity(leafIds, opacity, groupId) {
    const o = Math.max(0, Math.min(1, Number(opacity) || 0));
    if (groupId) groupSliderOpacity.set(groupId, o);
    for (const id of leafIds) {
      partOpacity.set(id, o);
      if (o > 0) partLastNonZero.set(id, o);
      applyOpacityToMeshes(parts.get(id) || [], o);
    }
    updateBox();
    applyClipping();
    syncPartOpacityUi();
  }

  /**
   * @param {string[]} leafIds
   * @returns {number}
   */
  function commonOpacity(leafIds) {
    if (!leafIds.length) return 1;
    const first = partOpacity.get(leafIds[0]) ?? 1;
    for (let i = 1; i < leafIds.length; i++) {
      const v = partOpacity.get(leafIds[i]) ?? 1;
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
    const common = commonOpacity(leafIds);
    if (!Number.isNaN(common)) return common;
    return groupSliderOpacity.get(groupId) ?? 1;
  }

  function syncPartOpacityUi() {
    const host = document.getElementById("parts");
    if (!host) return;
    host.querySelectorAll("input.part-opacity[data-leaf]").forEach((el) => {
      if (!(el instanceof HTMLInputElement)) return;
      const id = el.dataset.leaf;
      if (!id) return;
      const pct = Math.round((partOpacity.get(id) ?? 1) * 100);
      el.value = String(pct);
      el.setAttribute("aria-valuenow", String(pct));
    });
    host.querySelectorAll("input.part-opacity[data-group]").forEach((el) => {
      if (!(el instanceof HTMLInputElement)) return;
      const gid = el.dataset.group;
      if (!gid) return;
      const leaves = (el.dataset.leaves || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      const pct = Math.round(groupDisplayOpacity(gid, leaves) * 100);
      el.value = String(pct);
      el.setAttribute("aria-valuenow", String(pct));
    });
  }

  function lockedClipPlanes() {
    return cuts.filter((c) => c.locked).map((c) => planeForCut(c));
  }

  function refreshMaterials() {
    if (!parts.size) return;
    applyMaterialMode(parts, materialMode, {
      isDark: isDarkTheme,
      clippingPlanes: lockedClipPlanes(),
      opacityByLabel: partOpacity,
    });
    // Solid uses unlit MeshBasicMaterial — skip ACES so chroma stays punchy.
    if (materialMode === MODE_REALISTIC) {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
    } else {
      renderer.toneMapping = THREE.NoToneMapping;
      renderer.toneMappingExposure = 1;
    }
  }

  function buildMaterialToggle() {
    const host = document.getElementById("mats");
    if (!host) return;
    host.replaceChildren();
    for (const [id, label] of [
      [MODE_SOLID, "Solid"],
      [MODE_REALISTIC, "Realistic"],
    ]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.mode = id;
      btn.textContent = label;
      if (id === materialMode) btn.classList.add("is-active");
      btn.addEventListener("click", () => {
        materialMode = id;
        saveMaterialMode(id);
        host.querySelectorAll("button").forEach((el) => {
          el.classList.toggle("is-active", el.dataset.mode === id);
        });
        refreshMaterials();
      });
      host.append(btn);
    }
  }

  /**
   * Tap without drag toggles 0 ↔ lastNonZero; drag/scrub adjusts opacity.
   * Do not setPointerCapture — it breaks native trackpad/mouse scrubbing
   * (same issue as section cut ranges).
   * @param {HTMLInputElement} range
   * @param {() => number} getLastNonZero 0–1
   * @param {(opacity: number) => void} apply
   */
  function bindOpacitySlider(range, getLastNonZero, apply) {
    let pointerDown = false;
    let startX = 0;
    let startY = 0;
    let startVal = 0;
    let moved = false;
    let inputCount = 0;
    const MOVE_PX = 6;

    /** @param {PointerEvent} ev */
    const onWinMove = (ev) => {
      if (!pointerDown || moved) return;
      if (
        Math.abs(ev.clientX - startX) > MOVE_PX ||
        Math.abs(ev.clientY - startY) > MOVE_PX
      ) {
        moved = true;
      }
    };

    range.addEventListener("pointerdown", (ev) => {
      pointerDown = true;
      moved = false;
      inputCount = 0;
      startX = ev.clientX;
      startY = ev.clientY;
      startVal = Number(range.value) || 0;
      window.addEventListener("pointermove", onWinMove);
      const end = (upEv) => {
        window.removeEventListener("pointermove", onWinMove);
        if (!pointerDown) return;
        if (upEv.pointerType === "mouse" && upEv.button !== 0) {
          pointerDown = false;
          return;
        }
        pointerDown = false;
        if (moved) {
          apply((Number(range.value) || 0) / 100);
          return;
        }
        // Pure tap: undo click-seek and toggle 0 ↔ last non-zero.
        if (startVal > 0) apply(0);
        else {
          const last = getLastNonZero();
          apply(last > 0 ? last : 1);
        }
      };
      window.addEventListener("pointerup", end, { once: true });
      window.addEventListener("pointercancel", end, { once: true });
    });

    range.addEventListener("input", () => {
      inputCount += 1;
      // First input while down may be click-to-seek; wait for drag or a
      // second input (trackpad/mouse scrub) before committing.
      if (pointerDown && !moved) {
        if (inputCount <= 1) return;
        moved = true;
      }
      apply((Number(range.value) || 0) / 100);
    });
  }

  /**
   * @param {string} aria
   * @param {number} pct0to100
   * @returns {{ wrap: HTMLDivElement, range: HTMLInputElement }}
   */
  function makeOpacityRange(aria, pct0to100) {
    const wrap = document.createElement("div");
    wrap.className = "part-opacity-wrap";
    const range = document.createElement("input");
    range.type = "range";
    range.className = "part-opacity";
    range.min = "0";
    range.max = "100";
    range.step = "1";
    range.value = String(Math.round(pct0to100));
    range.setAttribute("aria-label", aria);
    range.setAttribute("role", "slider");
    wrap.append(range);
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
   */
  function appendOutlineNode(node, parent, depth) {
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
        (partOpacity.get(node.id) ?? 1) * 100,
      );
      range.dataset.leaf = node.id;

      bindOpacitySlider(
        range,
        () => partLastNonZero.get(node.id) ?? 1,
        (o) => setPartOpacity(node.id, o),
      );

      row.append(spacer, nameEl, wrap);
      parent.append(row);
      return;
    }

    const leafIds = collectLeafIds(node);
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

    const { wrap, range } = makeOpacityRange(
      `${node.label} opacity`,
      groupDisplayOpacity(node.id, leafIds) * 100,
    );
    range.dataset.group = node.id;
    range.dataset.leaves = leafIds.join(",");

    /** Last non-zero for the group slider itself. */
    let groupLastNonZero = groupDisplayOpacity(node.id, leafIds) || 1;
    if (groupLastNonZero <= 0) groupLastNonZero = 1;

    bindOpacitySlider(
      range,
      () => groupLastNonZero,
      (o) => {
        if (o > 0) groupLastNonZero = o;
        setGroupOpacity(leafIds, o, node.id);
      },
    );

    // Stop row toggle when interacting with the slider.
    wrap.addEventListener("click", (ev) => ev.stopPropagation());
    wrap.addEventListener("pointerdown", (ev) => ev.stopPropagation());

    const children = document.createElement("div");
    children.className = "part-children";
    children.hidden = true;

    function setExpanded(open) {
      if (open) expandedGroups.add(node.id);
      else expandedGroups.delete(node.id);
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
      setExpanded(!expandedGroups.has(node.id));
    }

    disclosure.addEventListener("click", (ev) => {
      ev.stopPropagation();
      toggleExpanded();
    });
    row.addEventListener("click", (ev) => {
      if (ev.target === range || wrap.contains(/** @type {Node} */ (ev.target))) {
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

    row.append(disclosure, nameEl, wrap);
    groupWrap.append(row, children);
    parent.append(groupWrap);

    for (const child of node.children) {
      appendOutlineNode(child, children, depth + 1);
    }

    // Restore expand state if rebuilding; default collapsed.
    setExpanded(expandedGroups.has(node.id));
  }

  function buildPartToggles() {
    const host = document.getElementById("parts");
    if (!host) return;
    host.replaceChildren();

    for (const name of parts.keys()) {
      if (!partOpacity.has(name)) partOpacity.set(name, 1);
      if (!partLastNonZero.has(name)) partLastNonZero.set(name, 1);
    }

    const outline = resolvePartOutline(parts.keys());
    for (const node of outline) {
      appendOutlineNode(node, host, 0);
    }
    requestAnimationFrame(() => relayoutPartNameColumn());
  }

  /** @type {string | null} */
  let activeCameraPreset = "iso";

  function clearCameraPresetHighlight() {
    if (activeCameraPreset == null) return;
    activeCameraPreset = null;
    const host = document.getElementById("cams");
    host?.querySelectorAll("button").forEach((el) => {
      el.classList.remove("is-active");
    });
  }

  function buildCameraButtons() {
    const host = document.getElementById("cams");
    if (!host) return;
    host.replaceChildren();
    for (const [id, label] of [
      ["iso", "Iso"],
      ["front", "Front"],
      ["side", "Side"],
      ["top", "Top"],
    ]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.preset = id;
      btn.textContent = label;
      if (id === activeCameraPreset) btn.classList.add("is-active");
      btn.addEventListener("click", () => {
        activeCameraPreset = id;
        host.querySelectorAll("button").forEach((el) => {
          el.classList.toggle("is-active", el.dataset.preset === id);
        });
        setCameraPreset(id);
      });
      host.append(btn);
    }
  }

  function lookDirection(out = _look) {
    return out.copy(controls.target).sub(camera.position).normalize();
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
    return cuts.some((c) => !c.locked);
  }

  function lockedCuts() {
    return cuts.filter((c) => c.locked);
  }

  function ensureDraftCut() {
    if (hasDraftCut()) return;
    const shouldHaveDraft =
      lockedCuts().length === 0 || cameraMovedSinceLock;
    if (!shouldHaveDraft) return;
    cuts.push({
      id: nextCutId++,
      normal: new THREE.Vector3(0, 0, 1),
      t: 0,
      locked: false,
      label: "Cut",
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
    if (labelEl) labelEl.textContent = cut.locked ? cut.label : "Cut";
    if (cut.locked && !row.querySelector(".cut-remove")) {
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "cut-remove";
      remove.setAttribute("aria-label", "Remove section");
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
    cameraMovedSinceLock = false;
    applyClipping();
    // Update in place so an active slider drag is not destroyed.
    refreshCutRow(cut);
  }

  function maybeSpawnDraftFromCamera() {
    if (lockedCuts().length === 0) return;
    if (hasDraftCut()) return;
    cameraMovedSinceLock = true;
    if (cutSliderActive) return;
    ensureDraftCut();
    buildCutUI();
  }

  function flushDeferredDraft() {
    // Called when a slider drag ends: only create a draft if the camera moved
    // while the thumb was held (deferred by cutSliderActive).
    if (!cameraMovedSinceLock) return;
    if (hasDraftCut()) return;
    if (lockedCuts().length === 0) return;
    ensureDraftCut();
    buildCutUI();
  }

  function setCutT(id, t) {
    const cut = cuts.find((c) => c.id === id);
    if (!cut) return;
    if (!cut.locked) lockCut(cut);
    cut.t = Math.min(1, Math.max(0, Number(t)));
    applyClipping();
  }

  function removeCut(id) {
    const idx = cuts.findIndex((c) => c.id === id);
    if (idx < 0) return;
    cuts.splice(idx, 1);
    if (lockedCuts().length === 0) {
      cameraMovedSinceLock = false;
      if (!hasDraftCut()) ensureDraftCut();
    } else if (cameraMovedSinceLock && !hasDraftCut()) {
      ensureDraftCut();
    }
    applyClipping();
    buildCutUI();
    chromeApi?.refreshPartialHeight();
  }

  function projectBoxOntoNormal(normal) {
    updateBox();
    if (box.isEmpty()) {
      return { near: -1, far: 1 };
    }
    const min = box.min;
    const max = box.max;
    let minS = Infinity;
    let maxS = -Infinity;
    for (let ix = 0; ix < 2; ix++) {
      for (let iy = 0; iy < 2; iy++) {
        for (let iz = 0; iz < 2; iz++) {
          _corner.set(ix ? max.x : min.x, iy ? max.y : min.y, iz ? max.z : min.z);
          const s = _corner.dot(normal);
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
    const { near, far } = projectBoxOntoNormal(cut.normal);
    const s = near + (far - near) * cut.t;
    _point.copy(cut.normal).multiplyScalar(s);
    return new THREE.Plane().setFromNormalAndCoplanarPoint(cut.normal, _point);
  }

  function applyClipping() {
    const planes = lockedClipPlanes();
    if (!root) return;
    root.traverse((obj) => {
      if (!obj.isMesh || !obj.material) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        m.clippingPlanes = planes;
        m.clipIntersection = false;
        m.needsUpdate = true;
      }
    });
  }

  function buildCutUI() {
    const host = document.getElementById("cuts");
    if (!host) return;
    host.replaceChildren();
    for (const cut of cuts) {
      const row = document.createElement("div");
      row.className = "cut-row";
      row.dataset.cutId = String(cut.id);

      const label = document.createElement("span");
      label.className = "cut-label";
      label.textContent = cut.locked ? cut.label : "Cut";

      const endSlider = () => {
        if (!cutSliderActive) return;
        cutSliderActive = false;
        flushDeferredDraft();
      };
      const range = createCooperativeRange({
        min: 0,
        max: 1,
        step: 0.001,
        value: cut.t,
        ariaLabel: cut.locked ? `Section ${cut.label}` : "Section cut",
        onScrubStart: () => {
          cutSliderActive = true;
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
        remove.setAttribute("aria-label", "Remove section");
        remove.textContent = "×";
        remove.addEventListener("click", () => removeCut(cut.id));
        row.append(remove);
      }

      host.append(row);
    }
    chromeApi?.refreshPartialHeight();
  }

  // Spawn a draft after the user finishes orbiting/panning — not on every
  // damping `change`, which would rebuild the cut UI mid-slider-drag.
  // `start` is user-gesture only (programmatic framing does not fire it).
  let peelOrbiting = false;
  /** After orbit `end`, stay on fast peels until damping has settled. */
  let peelHighAfterMs = 0;
  const PEEL_SETTLE_MS = 320;

  controls.addEventListener("start", () => {
    clearCameraPresetHighlight();
    peelOrbiting = true;
  });
  controls.addEventListener("end", () => {
    peelOrbiting = false;
    peelHighAfterMs = performance.now() + PEEL_SETTLE_MS;
    if (suppressCameraChange) return;
    maybeSpawnDraftFromCamera();
  });

  /** Animated safe-area framing: shift into uncovered rect + slight zoom-out. */
  let frameZoom = 1;
  let frameOffX = 0;
  let frameOffY = 0;
  let frameZoomT = 1;
  let frameOffXT = 0;
  let frameOffYT = 0;
  let frameAnimFromZoom = 1;
  let frameAnimFromX = 0;
  let frameAnimFromY = 0;
  let frameAnim = 0;
  const FRAME_MS = 280;

  function computeFrameTargets() {
    const w = Math.max(1, canvas.clientWidth);
    const h = Math.max(1, canvas.clientHeight);
    if (!chromeApi) {
      return { zoom: 1, offX: 0, offY: 0, w, h };
    }
    const { bottom, right } = chromeApi.getSafeInsets();
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
    withSuppressedCameraChange(() => {
      if (
        Math.abs(frameOffX) > 0.05 ||
        Math.abs(frameOffY) > 0.05 ||
        Math.abs(frameZoom - 1) > 0.001
      ) {
        camera.zoom = frameZoom;
        camera.setViewOffset(w, h, frameOffX, frameOffY, w, h);
      } else {
        camera.clearViewOffset();
        camera.zoom = 1;
        frameZoom = 1;
        frameOffX = 0;
        frameOffY = 0;
      }
      camera.updateProjectionMatrix();
    });
  }

  function applySafeViewOffset(animate = true) {
    const { zoom, offX, offY, w, h } = computeFrameTargets();
    frameZoomT = zoom;
    frameOffXT = offX;
    frameOffYT = offY;
    if (!animate) {
      frameZoom = zoom;
      frameOffX = offX;
      frameOffY = offY;
      frameAnim = 0;
      applyFrameProjection(w, h);
      return;
    }
    frameAnimFromZoom = frameZoom;
    frameAnimFromX = frameOffX;
    frameAnimFromY = frameOffY;
    frameAnim = performance.now();
  }

  function stepFrameAnim(now) {
    if (!frameAnim) return;
    const t = Math.min(1, (now - frameAnim) / FRAME_MS);
    const e = 1 - (1 - t) ** 3;
    frameZoom = frameAnimFromZoom + (frameZoomT - frameAnimFromZoom) * e;
    frameOffX = frameAnimFromX + (frameOffXT - frameAnimFromX) * e;
    frameOffY = frameAnimFromY + (frameOffYT - frameAnimFromY) * e;
    const w = Math.max(1, canvas.clientWidth);
    const h = Math.max(1, canvas.clientHeight);
    applyFrameProjection(w, h);
    if (t >= 1) frameAnim = 0;
  }

  function resize() {
    const w = Math.max(1, canvas.clientWidth);
    const h = Math.max(1, canvas.clientHeight);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    applySafeViewOffset(false);
  }
  resize();
  window.addEventListener("resize", resize);
  chromeApi?.onDetentChange(() => {
    applySafeViewOffset(true);
  });

  /** @type {HTMLButtonElement | null} */
  const arBtn = document.getElementById("ar");
  /** @type {HTMLButtonElement | null} */
  const measureBtn = document.getElementById("measure");
  let arBusy = false;
  const MEASURE_LABEL = "Measure";

  function showArButton() {
    if (arBtn) arBtn.hidden = false;
  }

  function showMeasureButton() {
    if (measureBtn) measureBtn.hidden = false;
  }

  /** @type {ReturnType<typeof createMeasureTool> | null} */
  let measureTool = null;
  if (scene) {
    measureTool = createMeasureTool({
      scene,
      canvas,
      camera,
      controls,
      getRoot: () => root,
      getClipPlanes: () => lockedClipPlanes(),
      onLiveLength: (label) => {
        if (!measureBtn) return;
        if (label) {
          measureBtn.textContent = label;
          measureBtn.classList.add("is-live");
        } else {
          measureBtn.textContent = MEASURE_LABEL;
          measureBtn.classList.remove("is-live");
        }
      },
      onActiveChange: (on) => {
        if (!measureBtn) return;
        measureBtn.classList.toggle("is-active", on);
        measureBtn.setAttribute("aria-pressed", on ? "true" : "false");
        if (!on) {
          measureBtn.textContent = MEASURE_LABEL;
          measureBtn.classList.remove("is-live");
        }
      },
    });
  }

  if (measureBtn) {
    measureBtn.addEventListener("click", () => {
      if (!measureTool) return;
      measureTool.setActive(!measureTool.isActive());
    });
  }

  function buildArExportScene() {
    if (!root) return null;
    root.updateWorldMatrix(true, true);
    const planes = lockedCuts().map((c) => planeForCut(c));
    const content = new THREE.Group();
    content.name = "ARContent";

    root.traverse((obj) => {
      if (!obj.isMesh || !obj.visible) return;
      const clipped = meshToClippedExportMesh(obj, planes);
      if (clipped) content.add(clipped);
    });

    if (!content.children.length) return null;

    // Meshes are already in world space from clipping; reset local xforms.
    content.updateMatrixWorld(true);
    const placement = computeArPlacement(content);
    const group = new THREE.Group();
    group.name = "ARExport";
    group.add(content);
    applyArPlacement(content, placement);
    group.userData.arPlacement = placement;
    return group;
  }

  async function openArQuickLook() {
    if (arBusy || !root) return;
    arBusy = true;
    const label = arBtn?.textContent || "AR";
    if (arBtn) {
      arBtn.disabled = true;
      arBtn.textContent = "…";
    }
    try {
      const exportScene = buildArExportScene();
      if (!exportScene) {
        throw new Error("Nothing visible to export. Show at least one part.");
      }
      const exporter = new USDZExporter();
      const arrayBuffer = await exporter.parseAsync(exportScene, {
        quickLookCompatible: true,
        includeAnchoringProperties: true,
        ar: {
          anchoring: { type: "plane" },
          planeAnchoring: { alignment: "horizontal" },
        },
      });
      const blob = new Blob([arrayBuffer], { type: "model/vnd.usdz+zip" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.rel = "ar";
      a.href = url;
      a.download = "view.usdz";
      const img = document.createElement("img");
      img.alt = "AR";
      a.appendChild(img);
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch (err) {
      fail(String(err?.message || err));
    } finally {
      arBusy = false;
      if (arBtn) {
        arBtn.disabled = false;
        arBtn.textContent = label;
      }
    }
  }

  if (arBtn) {
    arBtn.addEventListener("click", () => {
      void openArQuickLook();
    });
  }

  // Public hook for future agent-driven features (flyover, blink, …).
  const api = {
    scene,
    camera,
    controls,
    parts,
    partOpacity,
    cuts,
    setPartOpacity,
    setCameraPreset,
    setCutT,
    removeCut,
    frameIso,
    openArQuickLook,
    buildArExportScene,
  };
  window.BlueprintsViewer = api;

  function anyPartFaded() {
    for (const o of partOpacity.values()) {
      if (o < 1 - 1e-4) return true;
    }
    return false;
  }

  function healOpacitiesFromState() {
    for (const [name, meshes] of parts) {
      const o = partOpacity.get(name) ?? 1;
      applyOpacityToMeshes(meshes, o);
    }
  }

  let prevUsedPeel = false;

  function tick() {
    const now = performance.now();
    stepFrameAnim(now);
    controls.update();
    // Orbit damping keeps the camera moving briefly after release — refresh
    // clip planes so depth precision tracks the current view distance.
    if (root) updateCameraClipPlanes();
    measureTool?.update();

    // Fast while dragging / damping / framing; high once settled (matches
    // main-branch peel algorithm — not the half-res early-out path).
    const peelBusy =
      peelOrbiting ||
      now < peelHighAfterMs ||
      frameAnim !== 0 ||
      cutSliderActive;
    const peelQuality = peelBusy ? "fast" : "high";

    const usedPeel = depthPeel.render(scene, camera, root, anyPartFaded, {
      quality: peelQuality,
    });
    // Re-apply slider opacities when leaving peel mode so materials cannot
    // stay stuck translucent / depthWrite-off after a 100% scrub.
    if (prevUsedPeel && !usedPeel) healOpacitiesFromState();
    prevUsedPeel = usedPeel;
    requestAnimationFrame(tick);
  }
  tick();
  return api;
}
