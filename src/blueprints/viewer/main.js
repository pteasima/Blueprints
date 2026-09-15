/**
 * Custom WebGL viewer for Blueprints GLB exports.
 * Owns UI and animation; Three.js is only the renderer/loader toolkit.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { USDZExporter } from "three/addons/exporters/USDZExporter.js";
import { meshToClippedExportMesh } from "./clipGeometry.js";
import { applyArPlacement, computeArPlacement } from "./arPlacement.js";
import { BG_DARK, BG_LIGHT, initSheetChrome } from "./chrome.js";
import {
  MODE_REALISTIC,
  MODE_SOLID,
  applyMaterialMode,
  loadMaterialMode,
  saveMaterialMode,
} from "./materials.js";

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
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.localClippingEnabled = true;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(sceneBg);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1e6);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.screenSpacePanning = true;

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.05);
  key.position.set(0.6, 1.0, 0.4);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.35);
  fill.position.set(-0.5, 0.2, -0.6);
  scene.add(fill);

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
      camera.near = Math.max(span / 1000, 0.01);
      camera.far = Math.max(span * 100, 1000);
      camera.position.set(
        center.x + dist * 0.75,
        center.y + dist * 0.55,
        center.z + dist * 0.75,
      );
      camera.updateProjectionMatrix();
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
      camera.updateProjectionMatrix();
      controls.update();
    });
    maybeSpawnDraftFromCamera();
  }

  function setPartVisible(name, visible) {
    const list = parts.get(name) || [];
    for (const obj of list) obj.visible = visible;
    updateBox();
    applyClipping();
  }

  function lockedClipPlanes() {
    return cuts.filter((c) => c.locked).map((c) => planeForCut(c));
  }

  function refreshMaterials() {
    if (!parts.size) return;
    applyMaterialMode(parts, materialMode, {
      isDark: isDarkTheme,
      clippingPlanes: lockedClipPlanes(),
    });
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

  function buildPartToggles() {
    const host = document.getElementById("parts");
    if (!host) return;
    host.replaceChildren();
    const names = [...parts.keys()].sort((a, b) => a.localeCompare(b));
    for (const name of names) {
      const id = `part-${name}`;
      const label = document.createElement("label");
      label.className = "part";
      const nameEl = document.createElement("span");
      nameEl.className = "part-name";
      nameEl.textContent = name;
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = true;
      input.id = id;
      input.setAttribute("role", "switch");
      input.setAttribute("aria-label", name);
      input.addEventListener("change", () => setPartVisible(name, input.checked));
      label.append(nameEl, input);
      host.append(label);
    }
  }

  /** @type {string} */
  let activeCameraPreset = "iso";

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

      const range = document.createElement("input");
      range.type = "range";
      range.min = "0";
      range.max = "1";
      range.step = "0.001";
      range.value = String(cut.t);
      range.setAttribute(
        "aria-label",
        cut.locked ? `Section ${cut.label}` : "Section cut",
      );
      range.addEventListener("pointerdown", (ev) => {
        cutSliderActive = true;
        try {
          range.setPointerCapture(ev.pointerId);
        } catch (_) {
          /* ignore */
        }
        if (!cut.locked) lockCut(cut);
      });
      const endSlider = () => {
        if (!cutSliderActive) return;
        cutSliderActive = false;
        flushDeferredDraft();
      };
      range.addEventListener("pointerup", endSlider);
      range.addEventListener("pointercancel", endSlider);
      range.addEventListener("lostpointercapture", endSlider);
      range.addEventListener("input", () => {
        setCutT(cut.id, range.value);
      });
      // Also keep the model in sync if the user commits via change (keyboard).
      range.addEventListener("change", () => {
        setCutT(cut.id, range.value);
      });

      row.append(label, range);

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
  controls.addEventListener("end", () => {
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
  let arBusy = false;

  function showArButton() {
    if (arBtn) arBtn.hidden = false;
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
    cuts,
    setPartVisible,
    setCameraPreset,
    setCutT,
    removeCut,
    frameIso,
    openArQuickLook,
    buildArExportScene,
  };
  window.BlueprintsViewer = api;

  function tick() {
    const now = performance.now();
    stepFrameAnim(now);
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();
  return api;
}
