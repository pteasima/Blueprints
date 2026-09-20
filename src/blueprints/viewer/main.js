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
  expandOpacityGroups,
  loadMaterialMode,
  resolvePartOutline,
  saveMaterialMode,
} from "./materials.js";
import {
  applyStaticI18n,
  getLocale,
  initLocale,
  onLocaleChange,
  setLocale,
  t as tr,
} from "./i18n.js";
import {
  applyEdgeClipping,
  clearEdgeOverlays,
  EDGE_MODE_NONE,
  EDGE_MODE_OPAQUE,
  EDGE_MODE_TRANSPARENT,
  isEdgeOverlay,
  loadEdgeMode,
  saveEdgeMode,
  setEdgeOverlayResolution,
  syncEdgeOverlays,
} from "./edges.js";
import { createDepthPeelRenderer } from "./depthPeel.js";
import { createMeasureTool } from "./measure.js";

/** Query param for a named custom scene (`?m=<id>&scene=<sceneId>`). */
const SCENE_QUERY = "scene";

/**
 * @returns {string}
 */
function readSceneQuery() {
  try {
    return (new URLSearchParams(location.search).get(SCENE_QUERY) || "").trim();
  } catch {
    return "";
  }
}

/**
 * Keep the address bar in sync so a selected scene is copy-paste shareable.
 * Builtin presets / orbit clear the param (same lifetime as the View highlight).
 * @param {string | null | undefined} sceneId
 */
function writeSceneQuery(sceneId) {
  try {
    const url = new URL(location.href);
    const id = sceneId != null ? String(sceneId).trim() : "";
    if (id) url.searchParams.set(SCENE_QUERY, id);
    else url.searchParams.delete(SCENE_QUERY);
    const next = `${url.pathname}${url.search}${url.hash}`;
    const cur = `${location.pathname}${location.search}${location.hash}`;
    if (next !== cur) history.replaceState(null, "", next);
  } catch {
    /* file:// or opaque origins may reject history writes */
  }
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {ArrayBuffer} glbBuffer
 * @param {{ scenes?: object[], scene?: string, partGroups?: object[] }} [options]
 */
export function mountViewer(canvas, glbBuffer, options = {}) {
  /** Custom named scenes (model-specific); shown alongside Iso/Front/Side/Top. */
  const customScenes = Array.isArray(options.scenes) ? options.scenes : [];
  /** Model-owned Parts tree (ids only); empty → leftovers under Other. */
  const partGroups = Array.isArray(options.partGroups) ? options.partGroups : [];
  /** Prefer explicit option; otherwise `?scene=` from the current URL. */
  const initialSceneId = String(
    options.scene != null ? options.scene : readSceneQuery(),
  ).trim();

  initLocale();
  applyStaticI18n(document);

  /** @type {import("./materials.js").OutlineNode[]} */
  let partOutline = [];

  /** @type {THREE.Scene | null} */
  let scene = null;
  let sceneBg = BG_DARK;
  let isDarkTheme = true;
  /** @type {string} */
  let materialMode = loadMaterialMode();
  /** CAD hard-edge overlay mode: none | transparent | opaque. */
  let edgeMode = loadEdgeMode();
  /** @type {Map<string, THREE.Object3D[]>} */
  const parts = new Map();
  /** Current opacity 0–1 per leaf label. */
  const partOpacity = new Map();
  /** Last non-zero opacity per leaf (for tap-toggle). */
  const partLastNonZero = new Map();
  /** Last opacity written via a group slider (when children diverge). */
  const groupSliderOpacity = new Map();
  /**
   * Leaf ids whose opacity was edited independently of their parent group.
   * Group slider skips these until the user taps Sync.
   */
  const detachedLeaves = new Set();
  /** @type {Map<string, ReturnType<typeof createCooperativeRange>>} */
  const leafOpacityRanges = new Map();
  /** @type {Map<string, ReturnType<typeof createCooperativeRange>>} */
  const groupOpacityRanges = new Map();
  /** @type {Map<string, HTMLButtonElement>} */
  const leafSyncButtons = new Map();
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

  /** Horizontal FOV degrees (user-facing). Three.js uses vertical FOV. */
  const FOV_MIN = 30;
  const FOV_MAX = 120;
  const FOV_DEFAULT = 75;
  /** Slider value past FOV_MAX — orthographic ISO detent. */
  const ISO_SLIDER = 125;

  /** @type {"perspective" | "ortho"} */
  let projection = "perspective";
  let hFovDeg = FOV_DEFAULT;
  let lastHFovDeg = FOV_DEFAULT;
  /** Orbit dolly zoom for ortho (perspective keeps this at 1). */
  let viewZoom = 1;
  /** True while applying sheet frame / FOV so OrbitControls zoom sync is ignored. */
  let suppressViewZoomSync = false;

  const perspCamera = new THREE.PerspectiveCamera(45, 1, 0.01, 1e6);
  const orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 1e6);
  /** @type {THREE.PerspectiveCamera | THREE.OrthographicCamera} */
  let camera = perspCamera;
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = false;
  controls.screenSpacePanning = true;

  /** @type {ReturnType<typeof createCooperativeRange> | null} */
  let fovRange = null;
  /** @type {HTMLElement | null} */
  let fovValueEl = null;

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
      buildEdgesToggle();
      buildPartToggles();
      buildLocaleToggle();
      // Resolve ?scene= / options.scene before building View buttons so the
      // matching custom scene starts highlighted.
      const initialSpec = findCustomScene(initialSceneId);
      if (initialSpec) {
        activeCameraPreset = `scene:${String(initialSpec.id).trim()}`;
      }
      buildCameraButtons();
      buildFovControl();
      ensureDraftCut();
      buildCutUI();
      refreshMaterials();
      if (initialSpec) applyScene(initialSpec);
      syncSceneUrl();
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

  function canvasAspect() {
    const w = Math.max(1, canvas.clientWidth);
    const h = Math.max(1, canvas.clientHeight);
    return w / h;
  }

  /**
   * Horizontal FOV (deg) → vertical FOV (rad) for Three.js PerspectiveCamera.
   * @param {number} hDeg
   * @param {number} aspect
   */
  function hFovDegToVFovRad(hDeg, aspect) {
    const hRad = (hDeg * Math.PI) / 180;
    return 2 * Math.atan(Math.tan(hRad / 2) / Math.max(aspect, 1e-6));
  }

  /** Apply stored horizontal FOV onto the perspective camera. */
  function applyPerspFovFromState() {
    const aspect = canvasAspect();
    perspCamera.aspect = aspect;
    perspCamera.fov = (hFovDegToVFovRad(hFovDeg, aspect) * 180) / Math.PI;
    perspCamera.updateProjectionMatrix();
  }

  /**
   * Size ortho frustum so visible height at `dist` matches perspective FOV.
   * @param {number} dist
   * @param {number} vFovRad
   */
  function sizeOrthoFrustum(dist, vFovRad) {
    const aspect = canvasAspect();
    const halfH = Math.max(dist, 1e-6) * Math.tan(vFovRad / 2);
    const halfW = halfH * aspect;
    orthoCamera.left = -halfW;
    orthoCamera.right = halfW;
    orthoCamera.top = halfH;
    orthoCamera.bottom = -halfH;
    orthoCamera.updateProjectionMatrix();
  }

  /** Keep ortho width/height ratio after resize (preserve half-height). */
  function refreshOrthoAspect() {
    const aspect = canvasAspect();
    const halfH = Math.max(orthoCamera.top, 1e-6);
    const halfW = halfH * aspect;
    orthoCamera.left = -halfW;
    orthoCamera.right = halfW;
    orthoCamera.updateProjectionMatrix();
  }

  /**
   * Size ortho frustum to cover content half-extents (metres) with letterboxing.
   * @param {number} contentHalfW
   * @param {number} contentHalfH
   */
  function sizeOrthoToContent(contentHalfW, contentHalfH) {
    const aspect = canvasAspect();
    const wantW = Math.max(contentHalfW, 1e-6);
    const wantH = Math.max(contentHalfH, 1e-6);
    let halfH = wantH;
    let halfW = halfH * aspect;
    if (halfW < wantW) {
      halfW = wantW;
      halfH = halfW / Math.max(aspect, 1e-6);
    }
    viewZoom = 1;
    orthoCamera.left = -halfW;
    orthoCamera.right = halfW;
    orthoCamera.top = halfH;
    orthoCamera.bottom = -halfH;
    orthoCamera.updateProjectionMatrix();
    applyCombinedZoom();
  }

  /**
   * Move camera along the look vector so distance to target becomes `dist`.
   * @param {number} dist
   */
  function setCameraDistance(dist) {
    const d = Math.max(dist, 1e-4);
    const dir = _look.copy(camera.position).sub(controls.target);
    if (dir.lengthSq() < 1e-12) dir.set(0, 0, 1);
    else dir.normalize();
    camera.position.copy(controls.target).addScaledVector(dir, d);
  }

  /**
   * @param {THREE.PerspectiveCamera | THREE.OrthographicCamera} next
   */
  function setActiveCamera(next) {
    if (next === camera) return;
    next.position.copy(camera.position);
    next.quaternion.copy(camera.quaternion);
    next.up.copy(camera.up);
    next.near = camera.near;
    next.far = camera.far;
    camera = next;
    controls.object = camera;
    controls.update();
  }

  function combinedZoom() {
    const fz =
      Math.abs(frameOffX) > 0.05 ||
      Math.abs(frameOffY) > 0.05 ||
      Math.abs(frameZoom - 1) > 0.001
        ? frameZoom
        : 1;
    return viewZoom * fz;
  }

  function applyCombinedZoom() {
    camera.zoom = combinedZoom();
    camera.updateProjectionMatrix();
  }

  function syncViewZoomFromCamera() {
    if (suppressViewZoomSync || suppressCameraChange) return;
    if (!camera.isOrthographicCamera) return;
    const fz =
      Math.abs(frameOffX) > 0.05 ||
      Math.abs(frameOffY) > 0.05 ||
      Math.abs(frameZoom - 1) > 0.001
        ? frameZoom
        : 1;
    viewZoom = Math.max(camera.zoom / Math.max(fz, 1e-6), 1e-6);
  }

  function enterOrtho() {
    // Known issues (see viewer README “Known ISO issues”):
    // - Steep angles: opaque coplanar/near-coplanar faces can Z-fight (e.g.
    //   interior podlehy bleeding through roof) even with no transparency.
    // - FOV → ISO: sometimes a phantom near-plane clip looks like a section
    //   cut with no cut active; orbiting alone in ISO usually does not.
    //   Likely near/far or frustum handoff below — not fixed yet.
    if (projection === "ortho") return;
    lastHFovDeg = hFovDeg;
    const dist = camera.position.distanceTo(controls.target);
    const vFovRad = hFovDegToVFovRad(hFovDeg, canvasAspect());
    sizeOrthoFrustum(dist, vFovRad);
    viewZoom = 1;
    withSuppressedCameraChange(() => {
      suppressViewZoomSync = true;
      setActiveCamera(orthoCamera);
      projection = "ortho";
      applyCombinedZoom();
      suppressViewZoomSync = false;
    });
    syncFovUi();
  }

  /**
   * @param {number} [restoreHFov]
   */
  function leaveOrtho(restoreHFov) {
    if (projection !== "ortho") return;
    const targetFov = clampFov(
      restoreHFov != null ? restoreHFov : lastHFovDeg,
    );
    const halfH = Math.max(orthoCamera.top, 1e-6) / Math.max(viewZoom, 1e-6);
    const vFovRad = hFovDegToVFovRad(targetFov, canvasAspect());
    const dist = halfH / Math.max(Math.tan(vFovRad / 2), 1e-8);
    hFovDeg = targetFov;
    lastHFovDeg = targetFov;
    viewZoom = 1;
    withSuppressedCameraChange(() => {
      suppressViewZoomSync = true;
      setActiveCamera(perspCamera);
      projection = "perspective";
      applyPerspFovFromState();
      setCameraDistance(dist);
      applyCombinedZoom();
      updateCameraClipPlanes();
      controls.update();
      suppressViewZoomSync = false;
    });
    syncFovUi();
  }

  /**
   * @param {number} deg
   * @param {{ reframe?: boolean }} [opts]
   */
  function setHFov(deg, opts = {}) {
    const next = clampFov(deg);
    if (projection === "ortho") {
      leaveOrtho(next);
      return;
    }
    const aspect = canvasAspect();
    const oldV = hFovDegToVFovRad(hFovDeg, aspect);
    const newV = hFovDegToVFovRad(next, aspect);
    const dist = camera.position.distanceTo(controls.target);
    hFovDeg = next;
    lastHFovDeg = next;
    withSuppressedCameraChange(() => {
      applyPerspFovFromState();
      if (opts.reframe !== false) {
        const scale = Math.tan(oldV / 2) / Math.max(Math.tan(newV / 2), 1e-8);
        setCameraDistance(dist * scale);
        updateCameraClipPlanes();
        controls.update();
      }
      applyCombinedZoom();
    });
    syncFovUi();
  }

  function toggleFovIso() {
    if (projection === "ortho") leaveOrtho(lastHFovDeg);
    else enterOrtho();
  }

  /**
   * @param {number} v
   */
  function clampFov(v) {
    return Math.min(FOV_MAX, Math.max(FOV_MIN, v));
  }

  function sliderValueFromState() {
    return projection === "ortho" ? ISO_SLIDER : hFovDeg;
  }

  function formatFovSlider(v) {
    if (v > FOV_MAX) return "ISO";
    return `${Math.round(v)}°`;
  }

  function syncFovUi() {
    if (fovRange) fovRange.value = sliderValueFromState();
    if (fovValueEl) {
      fovValueEl.textContent =
        projection === "ortho" ? "ISO" : `${Math.round(hFovDeg)}°`;
    }
    fovRange?.refresh();
  }

  /**
   * @param {number} v
   */
  function applyFovSliderValue(v) {
    if (v > FOV_MAX) {
      if (projection !== "ortho") enterOrtho();
      else syncFovUi();
      return;
    }
    const fov = clampFov(v);
    if (projection === "ortho") leaveOrtho(fov);
    else setHFov(fov, { reframe: true });
  }

  function buildFovControl() {
    const host = document.getElementById("fov");
    if (!host) return;
    host.replaceChildren();

    const row = document.createElement("div");
    row.className = "fov-row";

    const label = document.createElement("span");
    label.className = "fov-label";
    label.textContent = tr("ui.fov");

    fovValueEl = document.createElement("span");
    fovValueEl.className = "fov-value";
    fovValueEl.textContent = `${Math.round(hFovDeg)}°`;

    fovRange = createCooperativeRange({
      min: FOV_MIN,
      max: ISO_SLIDER,
      step: 1,
      value: sliderValueFromState(),
      ariaLabel: "Field of view",
      formatAriaValue: formatFovSlider,
      onInput: (v) => applyFovSliderValue(v),
      onChange: (v) => applyFovSliderValue(v),
      onTap: () => toggleFovIso(),
    });
    fovRange.el.classList.add("fov-range");

    // Visual detent mark at the FOV→ISO boundary.
    const detent = document.createElement("div");
    detent.className = "fov-detent";
    detent.setAttribute("aria-hidden", "true");
    const t = (FOV_MAX - FOV_MIN) / (ISO_SLIDER - FOV_MIN);
    detent.style.left = `${t * 100}%`;
    const track = fovRange.el.querySelector(".coop-range-track");
    track?.append(detent);

    row.append(label, fovRange.el, fovValueEl);
    host.append(row);
    syncFovUi();
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

  // Default FOV before first frame / GLB load.
  applyPerspFovFromState();

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
    // Builtin presets assume default world-up (Three Y).
    perspCamera.up.set(0, 1, 0);
    orthoCamera.up.set(0, 1, 0);
    camera.up.set(0, 1, 0);
    if (name === "iso") {
      frameIso();
      return;
    }
    withSuppressedCameraChange(() => {
      updateBox();
      const span = Math.max(size.x, size.y, size.z, 1);
      const dist = span * 1.85;
      const c = center;
      // Front/side: eye-level (same Y as target) so look is horizontal —
      // true elevation in ISO; no foreshortened floor. Top keeps a tiny
      // Z nudge so OrbitControls up does not align with the look axis.
      // Side from −X (window wall), not +X.
      if (name === "front") {
        camera.position.set(c.x, c.y, c.z + dist);
      } else if (name === "top") {
        camera.position.set(c.x, c.y + dist, c.z + span * 0.01);
      } else if (name === "side") {
        camera.position.set(c.x - dist, c.y, c.z);
      }
      controls.target.copy(c);
      updateCameraClipPlanes();
      controls.update();
    });
    maybeSpawnDraftFromCamera();
  }

  /**
   * Apply a named custom scene (camera, optional FOV/ISO, cuts, opacities).
   * @param {object} spec
   */
  function applyScene(spec) {
    if (!root || !spec) return;

    const hasOpacity =
      spec.opacityDefault != null ||
      (spec.opacity && typeof spec.opacity === "object");
    if (hasOpacity) {
      const def =
        spec.opacityDefault != null ? Number(spec.opacityDefault) : 1;
      const rawOverrides =
        spec.opacity && typeof spec.opacity === "object" ? spec.opacity : {};
      const overrides = expandOpacityGroups(rawOverrides, partOutline);
      for (const name of parts.keys()) {
        const raw =
          Object.prototype.hasOwnProperty.call(overrides, name)
            ? overrides[name]
            : def;
        setPartOpacity(name, raw, { skipUi: true });
      }
      syncPartOpacityUi();
    }

    if (Object.prototype.hasOwnProperty.call(spec, "cuts")) {
      const list = Array.isArray(spec.cuts) ? spec.cuts : [];
      cuts.length = 0;
      for (const c of list) {
        const n = c?.normal;
        if (!Array.isArray(n) || n.length < 3) continue;
        const normal = new THREE.Vector3(
          Number(n[0]) || 0,
          Number(n[1]) || 0,
          Number(n[2]) || 0,
        );
        if (normal.lengthSq() < 1e-12) continue;
        normal.normalize();
        const cutT = Math.min(1, Math.max(0, Number(c.t) || 0));
        cuts.push({
          id: nextCutId++,
          normal,
          t: cutT,
          locked: true,
          label: formatAngleLabel(normal),
        });
      }
      cameraMovedSinceLock = false;
      applyClipping();
      ensureDraftCut();
      buildCutUI();
      chromeApi?.refreshPartialHeight();
    }

    if (spec.projection === "ortho") {
      if (projection !== "ortho") enterOrtho();
      else syncFovUi();
    } else if (spec.hFovDeg != null && Number.isFinite(Number(spec.hFovDeg))) {
      setHFov(Number(spec.hFovDeg), { reframe: false });
    }

    const cam = spec.camera;
    if (cam && Array.isArray(cam.target) && Array.isArray(cam.position)) {
      withSuppressedCameraChange(() => {
        suppressViewZoomSync = true;
        const up = new THREE.Vector3(0, 1, 0);
        if (Array.isArray(cam.up) && cam.up.length >= 3) {
          up.set(
            Number(cam.up[0]) || 0,
            Number(cam.up[1]) || 0,
            Number(cam.up[2]) || 0,
          );
          if (up.lengthSq() < 1e-12) up.set(0, 1, 0);
          else up.normalize();
        }
        // Keep both projection cameras in sync — enterOrtho switches objects.
        perspCamera.up.copy(up);
        orthoCamera.up.copy(up);
        camera.up.copy(up);
        controls.target.set(
          Number(cam.target[0]) || 0,
          Number(cam.target[1]) || 0,
          Number(cam.target[2]) || 0,
        );
        camera.position.set(
          Number(cam.position[0]) || 0,
          Number(cam.position[1]) || 0,
          Number(cam.position[2]) || 0,
        );
        camera.lookAt(controls.target);
        if (
          projection === "ortho" &&
          Array.isArray(cam.orthoFit) &&
          cam.orthoFit.length >= 2
        ) {
          sizeOrthoToContent(
            Number(cam.orthoFit[0]) || 0.1,
            Number(cam.orthoFit[1]) || 0.1,
          );
        }
        updateBox();
        updateCameraClipPlanes();
        controls.update();
        suppressViewZoomSync = false;
      });
    }

    maybeSpawnDraftFromCamera();
  }

  /**
   * @param {string} name
   * @param {number} opacity
   * @param {{ skipUi?: boolean, detach?: boolean }} [opts]
   */
  function setPartOpacity(name, opacity, opts = {}) {
    const o = Math.max(0, Math.min(1, Number(opacity) || 0));
    partOpacity.set(name, o);
    if (o > 0) partLastNonZero.set(name, o);
    if (opts.detach) detachedLeaves.add(name);
    applyOpacityToMeshes(parts.get(name) || [], o, { edgeMode });
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
      if (detachedLeaves.has(id)) continue;
      partOpacity.set(id, o);
      if (o > 0) partLastNonZero.set(id, o);
      applyOpacityToMeshes(parts.get(id) || [], o, { edgeMode });
    }
    updateBox();
    applyClipping();
    syncPartOpacityUi();
  }

  /**
   * Reattach a leaf to its parent group and match the group's current opacity.
   * @param {string} leafId
   * @param {string} groupId
   * @param {string[]} groupLeafIds
   */
  function syncLeafToGroup(leafId, groupId, groupLeafIds) {
    detachedLeaves.delete(leafId);
    const attached = groupLeafIds.filter((id) => !detachedLeaves.has(id));
    const o = groupDisplayOpacity(groupId, attached);
    partOpacity.set(leafId, o);
    if (o > 0) partLastNonZero.set(leafId, o);
    applyOpacityToMeshes(parts.get(leafId) || [], o, { edgeMode });
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
    const attached = leafIds.filter((id) => !detachedLeaves.has(id));
    const common = commonOpacity(attached.length ? attached : leafIds);
    if (!Number.isNaN(common)) return common;
    return groupSliderOpacity.get(groupId) ?? 1;
  }

  function syncPartOpacityUi() {
    for (const [id, range] of leafOpacityRanges) {
      range.value = (partOpacity.get(id) ?? 1) * 100;
    }
    for (const [gid, range] of groupOpacityRanges) {
      const leaves = (range.el.dataset.leaves || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      range.value = groupDisplayOpacity(gid, leaves) * 100;
    }
    for (const [id, btn] of leafSyncButtons) {
      const detached = detachedLeaves.has(id);
      btn.hidden = !detached;
      btn.setAttribute("aria-hidden", detached ? "false" : "true");
    }
  }

  function lockedClipPlanes() {
    return cuts.filter((c) => c.locked).map((c) => planeForCut(c));
  }

  function edgeResolution() {
    const size = new THREE.Vector2();
    renderer.getDrawingBufferSize(size);
    return { x: size.x, y: size.y };
  }

  function refreshEdges() {
    if (!parts.size) return;
    if (edgeMode === EDGE_MODE_NONE) {
      clearEdgeOverlays(root);
      return;
    }
    syncEdgeOverlays(parts, true, {
      clippingPlanes: lockedClipPlanes(),
      resolution: edgeResolution(),
      edgeMode,
    });
  }

  function refreshMaterials() {
    if (!parts.size) return;
    applyMaterialMode(parts, materialMode, {
      isDark: isDarkTheme,
      clippingPlanes: lockedClipPlanes(),
      opacityByLabel: partOpacity,
      edgeMode,
    });
    // Solid uses unlit MeshBasicMaterial — skip ACES so chroma stays punchy.
    if (materialMode === MODE_REALISTIC) {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
    } else {
      renderer.toneMapping = THREE.NoToneMapping;
      renderer.toneMappingExposure = 1;
    }
    refreshEdges();
  }

  function buildMaterialToggle() {
    const host = document.getElementById("mats");
    if (!host) return;
    host.replaceChildren();
    for (const [id, labelKey] of [
      [MODE_SOLID, "ui.solid"],
      [MODE_REALISTIC, "ui.realistic"],
    ]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.mode = id;
      btn.textContent = tr(labelKey);
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
      if (id === edgeMode) btn.classList.add("is-active");
      btn.addEventListener("click", () => {
        edgeMode = id;
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
        (partOpacity.get(node.id) ?? 1) * 100,
        () => partLastNonZero.get(node.id) ?? 1,
        (o) =>
          setPartOpacity(node.id, o, {
            detach: Boolean(parentGroup),
          }),
      );
      range.el.dataset.leaf = node.id;
      leafOpacityRanges.set(node.id, range);

      /** @type {HTMLButtonElement | null} */
      let syncBtn = null;
      if (parentGroup) {
        syncBtn = document.createElement("button");
        syncBtn.type = "button";
        syncBtn.className = "part-sync";
        syncBtn.textContent = tr("ui.sync");
        syncBtn.setAttribute("aria-label", `${tr("ui.sync")} ${node.label}`);
        const detached = detachedLeaves.has(node.id);
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
        leafSyncButtons.set(node.id, syncBtn);
      }

      if (syncBtn) row.append(spacer, nameEl, wrap, syncBtn);
      else row.append(spacer, nameEl, wrap);
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

    /** Last non-zero for the group slider itself. */
    let groupLastNonZero = groupDisplayOpacity(node.id, leafIds) || 1;
    if (groupLastNonZero <= 0) groupLastNonZero = 1;

    const { wrap, range } = makeOpacityRange(
      `${node.label} opacity`,
      groupDisplayOpacity(node.id, leafIds) * 100,
      () => groupLastNonZero,
      (o) => {
        if (o > 0) groupLastNonZero = o;
        setGroupOpacity(leafIds, o, node.id);
      },
    );
    range.el.dataset.group = node.id;
    range.el.dataset.leaves = leafIds.join(",");
    groupOpacityRanges.set(node.id, range);

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

    row.append(disclosure, nameEl, wrap);
    groupWrap.append(row, children);
    parent.append(groupWrap);

    const childParent = { groupId: node.id, leafIds };
    for (const child of node.children) {
      appendOutlineNode(child, children, depth + 1, childParent);
    }

    // Restore expand state if rebuilding; default collapsed.
    setExpanded(expandedGroups.has(node.id));
  }

  function buildPartToggles() {
    const host = document.getElementById("parts");
    if (!host) return;
    host.replaceChildren();
    leafOpacityRanges.clear();
    groupOpacityRanges.clear();
    leafSyncButtons.clear();

    for (const name of parts.keys()) {
      if (!partOpacity.has(name)) partOpacity.set(name, 1);
      if (!partLastNonZero.has(name)) partLastNonZero.set(name, 1);
    }

    const outline = resolvePartOutline(parts.keys(), partGroups, tr);
    partOutline = outline;
    for (const node of outline) {
      appendOutlineNode(node, host, 0, null);
    }
    requestAnimationFrame(() => relayoutPartNameColumn());
  }

  /** @type {string | null} */
  let activeCameraPreset = "iso";

  /**
   * @param {string} sceneId
   * @returns {object | null}
   */
  function findCustomScene(sceneId) {
    const want = String(sceneId || "").trim();
    if (!want) return null;
    for (const spec of customScenes) {
      if (String(spec?.id || "").trim() === want) return spec;
    }
    return null;
  }

  /** Mirror the active custom scene (or lack of one) into `?scene=`. */
  function syncSceneUrl() {
    const preset = activeCameraPreset;
    if (preset && preset.startsWith("scene:")) {
      writeSceneQuery(preset.slice("scene:".length));
    } else {
      writeSceneQuery(null);
    }
  }

  function clearCameraPresetHighlight() {
    if (activeCameraPreset == null) return;
    activeCameraPreset = null;
    const host = document.getElementById("cams");
    host?.querySelectorAll("button").forEach((el) => {
      el.classList.remove("is-active");
    });
    syncSceneUrl();
  }

  function buildCameraButtons() {
    const host = document.getElementById("cams");
    if (!host) return;
    host.replaceChildren();

    /** @param {string} id @param {string} label @param {() => void} onClick */
    function addBtn(id, label, onClick) {
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
        onClick();
        syncSceneUrl();
      });
      host.append(btn);
    }

    for (const [id, labelKey] of [
      ["iso", "ui.iso"],
      ["front", "ui.front"],
      ["side", "ui.side"],
      ["top", "ui.top"],
    ]) {
      addBtn(id, tr(labelKey), () => setCameraPreset(id));
    }
    for (const spec of customScenes) {
      const id = String(spec?.id || "").trim();
      if (!id) continue;
      const label = tr(`scene.${id}`);
      addBtn(`scene:${id}`, label, () => applyScene(spec));
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

  function setCutT(id, cutT) {
    const cut = cuts.find((c) => c.id === id);
    if (!cut) return;
    if (!cut.locked) lockCut(cut);
    cut.t = Math.min(1, Math.max(0, Number(cutT)));
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
      if (isEdgeOverlay(obj)) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        m.clippingPlanes = planes;
        m.clipIntersection = false;
        m.needsUpdate = true;
      }
    });
    // Rebuild hard+cut edge geometry so section faces get silhouette strokes.
    if (edgeMode !== EDGE_MODE_NONE) refreshEdges();
    else applyEdgeClipping(root, planes);
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
      label.textContent = cut.locked ? cut.label : tr("ui.cut");

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
        remove.setAttribute("aria-label", tr("ui.removeSection"));
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
  //
  // Peel quality: OrbitControls `end` is unreliable on some touch/Safari
  // paths (pointercancel without end → stuck in fast forever). Drive settle
  // from canvas pointer lifecycle + window up/cancel instead.
  let peelPointerDown = false;
  /** @type {"fast" | "high"} */
  let lastPeelQuality = "high";
  const PEEL_SETTLE_MS = 10;
  /** Squared metres — ignore float noise only (no orbit damping). */
  const PEEL_MOVE_EPS2 = 1e-5;
  const peelCamPos = new THREE.Vector3();
  const peelCamTarget = new THREE.Vector3();
  let peelCamInited = false;
  let peelLastMoveMs = 0;

  function notePeelPointerDown() {
    peelPointerDown = true;
  }
  function notePeelPointerUp() {
    peelPointerDown = false;
    peelLastMoveMs = performance.now();
  }

  canvas.addEventListener("pointerdown", notePeelPointerDown, { capture: true });
  window.addEventListener("pointerup", notePeelPointerUp, { capture: true });
  window.addEventListener("pointercancel", notePeelPointerUp, { capture: true });
  window.addEventListener("touchend", notePeelPointerUp, { capture: true });
  window.addEventListener("touchcancel", notePeelPointerUp, { capture: true });

  controls.addEventListener("start", () => {
    clearCameraPresetHighlight();
    notePeelPointerDown();
  });
  controls.addEventListener("change", () => {
    syncViewZoomFromCamera();
  });
  controls.addEventListener("end", () => {
    notePeelPointerUp();
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
      suppressViewZoomSync = true;
      if (
        Math.abs(frameOffX) > 0.05 ||
        Math.abs(frameOffY) > 0.05 ||
        Math.abs(frameZoom - 1) > 0.001
      ) {
        camera.zoom = viewZoom * frameZoom;
        camera.setViewOffset(w, h, frameOffX, frameOffY, w, h);
      } else {
        camera.clearViewOffset();
        camera.zoom = viewZoom;
        frameZoom = 1;
        frameOffX = 0;
        frameOffY = 0;
      }
      camera.updateProjectionMatrix();
      suppressViewZoomSync = false;
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
    if (projection === "perspective") {
      applyPerspFovFromState();
    } else {
      refreshOrthoAspect();
    }
    applySafeViewOffset(false);
    const buf = edgeResolution();
    setEdgeOverlayResolution(root, buf.x, buf.y);
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
  const MEASURE_LABEL = () => tr("ui.measure");

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
    if (arBtn && !arBusy) arBtn.textContent = tr("ui.ar");
    if (measureBtn) measureBtn.textContent = MEASURE_LABEL();
    try {
      buildMaterialToggle();
      buildEdgesToggle();
      buildCameraButtons();
      buildFovControl();
      buildPartToggles();
      buildCutUI();
      buildLocaleToggle();
    } catch (err) {
      console.error("relocalizeUi", err);
      // Still refresh the locale control if an earlier rebuild failed.
      try {
        buildLocaleToggle();
      } catch {
        /* ignore */
      }
    }
    chromeApi?.refreshPartialHeight();
  }

  onLocaleChange(() => relocalizeUi());

  function showArButton() {
    if (arBtn) {
      arBtn.hidden = false;
      if (!arBusy) arBtn.textContent = tr("ui.ar");
    }
  }

  function showMeasureButton() {
    if (measureBtn) {
      measureBtn.hidden = false;
      measureBtn.textContent = MEASURE_LABEL();
    }
  }

  /** @type {ReturnType<typeof createMeasureTool> | null} */
  let measureTool = null;
  if (scene) {
    measureTool = createMeasureTool({
      scene,
      canvas,
      getCamera: () => camera,
      controls,
      getRoot: () => root,
      getClipPlanes: () => lockedClipPlanes(),
      onLiveLength: (label) => {
        if (!measureBtn) return;
        if (label) {
          measureBtn.textContent = label;
          measureBtn.classList.add("is-live");
        } else {
          measureBtn.textContent = MEASURE_LABEL();
          measureBtn.classList.remove("is-live");
        }
      },
      onActiveChange: (on) => {
        if (!measureBtn) return;
        measureBtn.classList.toggle("is-active", on);
        measureBtn.setAttribute("aria-pressed", on ? "true" : "false");
        if (!on) {
          measureBtn.textContent = MEASURE_LABEL();
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
      if (isEdgeOverlay(obj)) return;
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
    get camera() {
      return camera;
    },
    controls,
    parts,
    partOpacity,
    cuts,
    scenes: customScenes,
    setPartOpacity,
    setCameraPreset,
    applyScene,
    setHFov,
    toggleFovIso,
    get projection() {
      return projection;
    },
    get hFovDeg() {
      return hFovDeg;
    },
    setCutT,
    removeCut,
    frameIso,
    openArQuickLook,
    buildArExportScene,
    /** @returns {"fast" | "high"} */
    getPeelQuality: () => lastPeelQuality,
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
      applyOpacityToMeshes(meshes, o, { edgeMode });
    }
  }

  let prevUsedPeel = false;

  function tick() {
    const now = performance.now();
    stepFrameAnim(now);
    controls.update();
    // Keep near/far tight as orbit distance changes.
    if (root) updateCameraClipPlanes();
    measureTool?.update();

    // Fast while pointer-down or camera moving; high ~10ms after last move.
    // Settled path matches main-branch peels (full-res, 12 layers, no early-out).
    if (!peelCamInited) {
      peelCamPos.copy(camera.position);
      peelCamTarget.copy(controls.target);
      peelCamInited = true;
      peelLastMoveMs = now;
    }
    const camMoved =
      camera.position.distanceToSquared(peelCamPos) > PEEL_MOVE_EPS2 ||
      controls.target.distanceToSquared(peelCamTarget) > PEEL_MOVE_EPS2;
    peelCamPos.copy(camera.position);
    peelCamTarget.copy(controls.target);
    if (peelPointerDown || camMoved) peelLastMoveMs = now;

    const peelBusy =
      peelPointerDown ||
      now - peelLastMoveMs < PEEL_SETTLE_MS ||
      frameAnim !== 0 ||
      cutSliderActive;
    lastPeelQuality = peelBusy ? "fast" : "high";

    const usedPeel = depthPeel.render(scene, camera, root, anyPartFaded, {
      quality: lastPeelQuality,
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
