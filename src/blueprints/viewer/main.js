/**
 * Custom WebGL viewer for Blueprints GLB exports.
 * Owns UI and animation; Three.js is only the renderer/loader toolkit.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

import { syncSectionCaps } from "./sectionCaps.js";

import { BG_DARK, BG_LIGHT, initSheetChrome } from "./chrome.js";
import { createCooperativeRange } from "./coopRange.js";
import { loadMaterialMode } from "./materials.js";
import {
  applyStaticI18n,
  getLocale,
  initLocale,
  onLocaleChange,
  t as tr,
} from "./i18n.js";
import { loadEdgeMode } from "./edges.js";
import { createDepthPeelRenderer } from "./depthPeel.js";
import { createRealistic } from "./realistic.js";
import { eyeHeightM, yawPitchOf } from "./walkBasics.js";
import { createDoorController } from "./doors.js";
import { createWindowSlides } from "./windows.js";
import { createFeedbackLayer } from "./feedback.js";
import { registerElementActions } from "./elementActions.js";
import {
  createHomeClient,
  deviceLines,
  indexHasHomeDevices,
  LIGHT_OFF_HEX,
  lightOnHex,
  resolveHomeConfig,
} from "./homeLive.js";
import { mountIfcInspector } from "./ifcInspector.js";
import { createVisibility } from "./ifcHide.js";
import { IFC_LOCK_PREFIX, loadVisibility, urlLayerSwitch } from "./visibilityState.js";

import { normalizeIndex } from "./ifcTree.js";
import { isSceneSolid } from "./interactions.js";
import {
  centerOccluded,
  isOpaqueMaterialOf,
  isRenderedHit,
  projectTarget,
} from "./tapTargets.js";
import { createFixtureModels } from "./fixtureModels.js";
import { nodeKeyMap } from "./meshIdentity.js";
import { gltfPrimitiveTest, mergeSiblingPrimitives } from "./mergePrimitives.js";
import { attachPivotNav } from "./pivotNav.js";
import { createAnnotations } from "./annotations.js";
import { downloadBlob } from "./drawing.js";
import {
  CABLE_LEAF,
  LAZY_LAYER_DEFAULT_ON,
  loadFeature,
  readSceneQuery,
} from "./viewerBoot.js";
import { attachSceneSetup } from "./sceneSetup.js";
import { attachModelLoad } from "./modelLoad.js";
import { attachCameraNav } from "./cameraNav.js";
import { attachScenes } from "./scenes.js";
import { attachPartsVisibility } from "./partsVisibility.js";
import { attachSectionCuts } from "./sectionCuts.js";
import { attachHud } from "./hud.js";
import { attachDrawingExport } from "./drawingExport.js";
import { attachInspect } from "./inspect.js";
import { attachHomeInteractions } from "./homeInteractions.js";
import { attachRenderLoop } from "./renderLoop.js";

/**
 * @param {HTMLCanvasElement} canvas
 * @param {ArrayBuffer} glbBuffer
 * @param {{ scenes?: object[], scene?: string, partGroups?: object[], doors?: object[], windows?: object[], ifc?: object, modelId?: string, materialsUrl?: string, materialsText?: string, fixtureAssets?: object[], fixtureModelsUrl?: string, lazyLayers?: { id: string, url: string }[] }} [options]
 */
export function mountViewer(canvas, glbBuffer, options = {}) {
  const ctx = { canvas, glbBuffer, options };

  /** Custom named scenes (model-specific); shown alongside Iso/Front/Side/Top. */
  ctx.customScenes = Array.isArray(options.scenes) ? options.scenes : [];
  /** Model-owned Parts tree (ids only); empty → leftovers under Other. */
  ctx.partGroups = Array.isArray(options.partGroups) ? options.partGroups : [];
  /** Hinged leaves: centre, hinge, sign. Empty for models without doors. */
  ctx.doorRecords = Array.isArray(options.doors) ? options.doors : [];
  /** Window panes: which open and how (`<id>.windows.json`, windows.js). */
  ctx.windowRecords = Array.isArray(options.windows) ? options.windows : [];
  ctx.ifcIndex = normalizeIndex(options.ifc);
  /** Node-name key → yaml id for ids GLTFLoader renamed (dots dropped). */
  ctx.idForNodeKey = nodeKeyMap(Object.values(ctx.ifcIndex.elements || {}).map((element) => element?.id));
  /** yaml id → meshes. Filled when the GLB arrives. */
  ctx.meshesByKey = new Map();
  /** @type {(pt: { clientX: number, clientY: number }) => void} */
  ctx.inspectAt = () => {};
  /** Prefer explicit option; otherwise `?scene=` from the current URL. */
  ctx.initialSceneId = String(
    options.scene != null ? options.scene : readSceneQuery(),
  ).trim();

  initLocale();
  applyStaticI18n(document);

  /** @type {import("./materials.js").OutlineNode[]} */
  ctx.partOutline = [];

  /** @type {THREE.Scene | null} */
  ctx.scene = null;
  ctx.sceneBg = BG_DARK;
  ctx.isDarkTheme = true;
  /** @type {string} */
  ctx.materialMode = loadMaterialMode();
  /** CAD hard-edge overlay mode: none | transparent | opaque. */
  ctx.edgeMode = loadEdgeMode();
  /** @type {Map<string, THREE.Object3D[]>} */
  ctx.parts = new Map();
  /** Current opacity 0–1 per leaf label. */
  ctx.partOpacity = new Map();
  /** Last non-zero opacity per leaf (for tap-toggle). */
  ctx.partLastNonZero = new Map();
  // Cable routes (docs/electrical/CableRoutes.md): a layer leaf under
  // Electrical with no meshes of its own; cables.js draws them. Hidden by
  // default (Petr, 2026-11-19: "make cables a layer under "electrical",
  // hidden by default but I can show them without going to edit"); views and
  // scenes leave it alone, and ?cables=1 starts with it on.
  ctx.hasCables = Array.isArray(options.cables?.routes) && options.cables.routes.length > 0;
  // Remembered visibility (visibilityState.js; Petr, 2026-11-19: "remember
  // state locally (doesn't get reflected in URL ...)"). Per model, in
  // localStorage; an explicit `?cables=1` / `?<layer>=1` still wins.
  /** @type {Storage | null} */
  ctx.visStorage = null;
  try {
    ctx.visStorage = typeof localStorage !== "undefined" ? localStorage : null;
  } catch {
    ctx.visStorage = null;
  }
  ctx.visModelId = String(options.modelId || "").trim();
  ctx.savedVis = ctx.visModelId ? loadVisibility(ctx.visStorage, ctx.visModelId) : null;
  /**
   * Layer leaf on at start: URL switch, else remembered, else `fallback`.
   * `ignoreV1` skips an opacity remembered by a v1 entry (on-demand layers
   * were off by default then, so its 0 was rarely a choice).
   */
  ctx.layerOnAtStart = (id, fallback = false, ignoreV1 = false) => {
    const fromUrl = urlLayerSwitch(typeof location !== "undefined" ? location.search : "", id);
    if (fromUrl != null) return fromUrl;
    const saved = ignoreV1 && ctx.savedVis?.fromVersion === 1 ? undefined : ctx.savedVis?.opacity?.[id];
    return saved == null ? fallback : saved > 1e-3;
  };
  if (ctx.hasCables) {
    const on = ctx.layerOnAtStart(CABLE_LEAF);
    ctx.partOpacity.set(CABLE_LEAF, on ? 1 : 0);
    ctx.partLastNonZero.set(CABLE_LEAF, 1);
  }
  // On-demand layers (README "On-demand layers"; `<model>.layers.json`):
  // a Parts leaf whose meshes live in their own GLB, fetched and parsed
  // after the main model so the first picture does not wait for it. On by
  // default (Petr, 2026-11-20, after the per-element merge: "put back
  // gridfinity baseplates"); `?<id>=0` or a remembered off skips the fetch
  // until the leaf is switched on. Like the cables, outside group sliders,
  // views and scenes. ground_floor's Gridfinity baseplates are the one
  // layer (docs/viewer/Performance.md).
  /** @type {Map<string, { url: string, state: "idle" | "loading" | "loaded" | "failed", promise: Promise<void> | null }>} */
  ctx.lazyLayers = new Map();
  /** Lazy leaves to load as soon as the model is in (default, `?<id>=1`). */
  ctx.lazyAtStart = [];
  for (const entry of Array.isArray(options.lazyLayers) ? options.lazyLayers : []) {
    const id = String(entry?.id || "").trim();
    const url = String(entry?.url || "").trim();
    if (!id || !url || id === CABLE_LEAF || ctx.lazyLayers.has(id)) continue;
    ctx.lazyLayers.set(id, { url, state: "idle", promise: null });
    const on = ctx.layerOnAtStart(id, LAZY_LAYER_DEFAULT_ON, true);
    ctx.partOpacity.set(id, on ? 1 : 0);
    ctx.partLastNonZero.set(id, 1);
    if (on) ctx.lazyAtStart.push(id);
  }
  /** Bumped when a lazy layer's meshes arrive (peel batches, colliders). */
  ctx.lazyRevision = 0;
  /** Cables and on-demand layers: leaves no group slider, view or scene drives. */
  ctx.isLayerLeaf = (name) => name === CABLE_LEAF || ctx.lazyLayers.has(name);
  /** Reset / first-load opacity of a layer leaf: cables off, on-demand layers on. */
  ctx.layerDefaultOpacity = (name) => (ctx.lazyLayers.has(name) ? (LAZY_LAYER_DEFAULT_ON ? 1 : 0) : 0);
  /** Last opacity written via a group slider (when children diverge). */
  ctx.groupSliderOpacity = new Map();
  /**
   * Leaf ids whose opacity was edited independently of their parent group.
   * Group slider skips these until the user taps Sync.
   */
  ctx.detachedLeaves = new Set();
  /** @type {Map<string, ReturnType<typeof createCooperativeRange>>} */
  ctx.leafOpacityRanges = new Map();
  /** @type {Map<string, ReturnType<typeof createCooperativeRange>>} */
  ctx.groupOpacityRanges = new Map();
  /** @type {Map<string, HTMLButtonElement>} */
  ctx.leafSyncButtons = new Map();
  /** Expanded disclosure group ids. */
  ctx.expandedGroups = new Set();
  /**
   * Lock ids: Parts group/leaf ids and `ifc:<GlobalId>` inspector rows
   * (visibilityState.js). null until the Parts outline exists, then the
   * model's default locks (`"locked": true` in parts.json).
   * @type {Set<string> | null}
   */
  ctx.partLocks = ctx.savedVis?.locks ? new Set(ctx.savedVis.locks) : null;
  /** Leaf ids locked directly or through a group (derived from partLocks). */
  ctx.lockedLeaves = new Set();
  /** GlobalIds locked from the inspector (derived from partLocks). */
  ctx.ifcLocks = new Set();
  /** @type {Map<string, { row: HTMLElement, btn: HTMLButtonElement, label: string }>} */
  ctx.lockButtons = new Map();

  /** @type {ReturnType<typeof initSheetChrome> | null} */
  ctx.chromeApi = null;

  attachSceneSetup(ctx);
  attachModelLoad(ctx);
  attachCameraNav(ctx);
  attachScenes(ctx);
  attachPartsVisibility(ctx);
  attachSectionCuts(ctx);
  attachHud(ctx);
  attachDrawingExport(ctx);
  attachInspect(ctx);
  attachHomeInteractions(ctx);
  attachRenderLoop(ctx);

  ctx.chromeApi = initSheetChrome((isDark) => {
    ctx.isDarkTheme = isDark;
    ctx.sceneBg = isDark ? BG_DARK : BG_LIGHT;
    if (ctx.scene) ctx.scene.background = new THREE.Color(ctx.sceneBg);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    if (ctx.parts.size) ctx.refreshMaterials();
  });
  ctx.renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
    // Drawing capture reads the canvas after the frame; without this the
    // buffer is cleared before toBlob and the plate is blank.
    preserveDrawingBuffer: true,
    // Room-scale models in metres need better depth precision than a fixed
    // 24-bit buffer — coplanar CAD faces otherwise flicker while orbiting.
    logarithmicDepthBuffer: true,
  });
  ctx.renderer.setPixelRatio(ctx.viewerPixelRatio());
  ctx.renderer.outputColorSpace = THREE.SRGBColorSpace;
  ctx.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  ctx.renderer.toneMappingExposure = 1.05;
  ctx.renderer.localClippingEnabled = true;

  ctx.depthPeel = createDepthPeelRenderer(ctx.renderer);

  ctx.scene = new THREE.Scene();
  ctx.scene.background = new THREE.Color(ctx.sceneBg);
  /** Scales glTF Y (CAD Z) about elevation 0. 1 on every scene that does not ask. */
  ctx.verticalExaggeration = 1;
  ctx.zScaleGroup = new THREE.Group();
  ctx.zScaleGroup.name = "VerticalExaggeration";
  ctx.scene.add(ctx.zScaleGroup);

  /** Horizontal FOV degrees (user-facing). Three.js uses vertical FOV. */
  ctx.FOV_MIN = 30;
  ctx.FOV_MAX = 120;
  ctx.FOV_DEFAULT = 75;
  /** Slider value past FOV_MAX — orthographic ISO detent. */
  ctx.ISO_SLIDER = 125;

  /** @type {"perspective" | "ortho"} */
  ctx.projection = "perspective";
  ctx.hFovDeg = ctx.FOV_DEFAULT;
  ctx.lastHFovDeg = ctx.FOV_DEFAULT;
  /** Orbit dolly zoom for ortho (perspective keeps this at 1). */
  ctx.viewZoom = 1;
  /** True while applying sheet frame / FOV so OrbitControls zoom sync is ignored. */
  ctx.suppressViewZoomSync = false;

  ctx.perspCamera = new THREE.PerspectiveCamera(45, 1, 0.01, 1e6);
  ctx.orthoCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 1e6);
  /** @type {THREE.PerspectiveCamera | THREE.OrthographicCamera} */
  ctx.camera = ctx.perspCamera;
  ctx.controls = new OrbitControls(ctx.camera, canvas);
  ctx.controls.enableDamping = false;
  ctx.controls.screenSpacePanning = true;
  /** Measure owns taps while it is on; set once that tool exists. */
  ctx.doorInputBlocked = () => false;
  /**
   * Fixture edit mode (editMode.js). Owns taps while it is on.
   * @type {ReturnType<typeof createEditMode> | null}
   */
  ctx.editMode = null;
  ctx.doorCtrl = createDoorController({
    canvas,
    getCamera: () => ctx.camera,
    records: ctx.doorRecords,
    // Edit mode blocks door and switch taps but not pivotNav's zoom and pan.
    isBlocked: () => ctx.doorInputBlocked() || Boolean(ctx.editMode?.blocksTaps()),
    onLongPress: (pt) => ctx.inspectAt(pt),
    onToggle: (binding, move) => ctx.doorFeedback(binding, move),
  });
  ctx.feedback = createFeedbackLayer({ canvas, getCamera: () => ctx.camera });
  /** Debugging: `blueprintsFeedback.showFeedback({ worldPos: [x, y, z], kind: "switch", direction: "up" })`. */
  window.blueprintsFeedback = ctx.feedback;
  /**
   * Real fixture models instead of boxes (fixtureModels.js,
   * docs/electrical/FixtureModels.md). Off without `fixtureModelsUrl`.
   */
  ctx.fixtureModels = createFixtureModels({
    baseUrl: options.fixtureModelsUrl || "",
    elements: () => Object.values(ctx.ifcIndex.elements || {}),
    meshesForElement: (element) => ctx.meshesForElement(element),
    onChange: () => {
      if (!ctx.root) return;
      // A model arrived: put it in the current mode, then redraw.
      ctx.fixtureModels.sync(ctx.materialMode, ctx.lockedClipPlanes());
      ctx.refreshEdges();
      syncSectionCaps(ctx.parts, ctx.lockedClipPlanes());
      ctx.viewDirty = true;
      ctx.realisticCtl?.stage.markDirty();
    },
  });
  ctx.lightOn = new Map();
  ctx.windowOpen = new Map();
  /** Pane slide animation per window (windows.js). */
  ctx.windowSlides = createWindowSlides(ctx.windowRecords);
  /**
   * Offline tap toggles between these. On is a warm 3000 K glow, off a dull
   * grey, the same looks live mode uses (homeLive.js lightOnHex).
   */
  ctx.OFFLINE_LIGHT = { on: true, level: 1, color: lightOnHex(3000) };
  ctx.OFFLINE_LIGHT_OFF = { on: false, level: 1, color: LIGHT_OFF_HEX };
  /** globalId → look applied, so material rebuilds can re-apply it. */
  ctx.lightLooks = new Map();

  /** Set once the Home client exists (after the inspector mounts). */
  /** @type {ReturnType<typeof createHomeClient> | null} */
  ctx.home = null;
  registerElementActions(ctx.doorCtrl.taps, {
    elementOf: (obj) => ctx.elementFromMesh(obj),
    isOn: (el) => Boolean(ctx.lightOn.get(el.globalId)),
    isOpen: (el) => {
      const cover = ctx.liveDevice(el);
      if (cover?.deviceType === "WindowCovering") {
        const pos = cover.state?.windowCovering?.targetPositionLiftPercent100ths;
        return pos != null && pos < 5000;
      }
      return Boolean(ctx.windowOpen.get(el.globalId));
    },
    isLive: (el) => Boolean(ctx.liveDevice(el)),
    onLight: (el) => ctx.liveLightTap(el),
    onSwitch: (el, hit) => ctx.liveSwitchTap(el, hit),
    switchActions: (el) => ctx.liveSwitchActions(el),
    onCover: (el) => ctx.liveCoverTap(el),
    coverActions: (el) => ctx.liveCoverActions(el),
    onWindow: (el) => ctx.toggleWindow(el),
    // Fixed glazing (and the fixed pane of a part-opening window) claims no
    // tap; only a pane that opens does (windows.js).
    windowAccepts: (el, hit) => ctx.windowPaneOperable(el, hit?.object),
    targetsFor: (type, tapCtx) => ctx.tapTargetsFor(type, tapCtx),
  });

  ctx.annotations = createAnnotations({
    scene: ctx.scene,
    getCamera: () => ctx.camera,
    getCanvas: () => canvas,
    getLocale,
    getVisibleWidthM: () => {
      if (!ctx.camera.isOrthographicCamera) return null;
      const zoom = Math.max(ctx.camera.zoom, 1e-6);
      return (ctx.camera.right - ctx.camera.left) / zoom;
    },
    getTarget: () => ctx.controls.target,
    getExaggeration: () => ctx.verticalExaggeration,
  });

  /** @type {ReturnType<typeof createCooperativeRange> | null} */
  ctx.fovRange = null;
  /** @type {HTMLElement | null} */
  ctx.fovValueEl = null;

  ctx.ambient = new THREE.AmbientLight(0xffffff, 0.45);
  ctx.scene.add(ctx.ambient);
  ctx.key = new THREE.DirectionalLight(0xffffff, 1.15);
  ctx.key.position.set(0.6, 1.0, 0.4);
  ctx.scene.add(ctx.key);
  ctx.fill = new THREE.DirectionalLight(0xffffff, 0.4);
  ctx.fill.position.set(-0.5, 0.2, -0.6);
  ctx.scene.add(ctx.fill);
  // Soft IBL so Realistic metal/clearcoat/roughness differences read clearly.
  ctx.pmrem = new THREE.PMREMGenerator(ctx.renderer);
  ctx.scene.environment = ctx.pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  ctx.pmrem.dispose();

  /**
   * Realistic mode (realistic.js). Created on first use, so the catalogue,
   * textures, sun and shadow map cost nothing until the mode is chosen.
   * @type {ReturnType<typeof createRealistic> | null}
   */
  ctx.realisticCtl = null;
  /** Debugging and checks: `blueprintsRealistic.report()` lists catalogue gaps. */
  window.blueprintsRealistic = {
    report: () => (ctx.realisticCtl ? ctx.realisticCtl.report(ctx.parts) : null),
    renderer: ctx.renderer,
    /** Light elements in the model: `[{ globalId, name }]`. */
    lights: () =>
      Object.values(ctx.ifcIndex.elements)
        .filter((el) => {
          const meshes = el ? ctx.meshesForElement(el) : [];
          return meshes.length > 0 && meshes.every((m) => m.userData.bpPart === "light");
        })
        .map((el) => ({ globalId: el.globalId, name: el.name })),
    /** Toggle one light as a tap would offline. */
    toggleLight: (globalId) => {
      const element = ctx.ifcIndex.elements[globalId];
      if (element) ctx.toggleLight(element);
    },
    get controller() {
      return ctx.realisticCtl;
    },
  };

  /** @type {THREE.Object3D | null} */
  ctx.root = null;
  /**
   * First-person walk mode (walkMode.js). Created after the Measure tool.
   * @type {ReturnType<typeof createWalkMode> | null}
   */
  ctx.walk = null;
  /** A saved walk pose that arrived before walkMode.js did (restoreSavedCamera). */
  ctx.pendingWalkRestore = null;
  // Surface-anchored zoom / pan / close-up orbit. Installed after `root` exists
  // in the closure; the GLB is assigned later, and taps still reach the doors.
  attachPivotNav({
    canvas,
    controls: ctx.controls,
    getCamera: () => ctx.camera,
    getRoot: () => ctx.root,
    isBlocked: () => ctx.doorInputBlocked() || ctx.controls.enabled === false,
  });
  ctx.box = new THREE.Box3();
  ctx.size = new THREE.Vector3();
  ctx.center = new THREE.Vector3();
  ctx._look = new THREE.Vector3();
  ctx._point = new THREE.Vector3();
  ctx._corner = new THREE.Vector3();

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
  ctx.cuts = [];
  ctx.nextCutId = 1;
  /** After a lock, camera must move before a new draft slider appears. */
  ctx.cameraMovedSinceLock = false;
  /** Ignore OrbitControls change events caused by framing / presets. */
  ctx.suppressCameraChange = false;
  /** True while a section slider is being dragged (avoid rebuilding that row). */
  ctx.cutSliderActive = false;
  /** Meshes before/after mergeSiblingPrimitives (exposed for perf checks). */
  ctx.mergeStats = { before: 0, after: 0 };
  ctx.loader = new GLTFLoader();
  ctx.loader.parse(
    glbBuffer,
    "",
    (gltf) => {
      ctx.root = gltf.scene;
      // One draw per element and material, not per CAD face: 8,850 meshes →
      // 1,299 on ground_floor (mergePrimitives.js, docs/viewer/Performance.md).
      ctx.mergeStats = mergeSiblingPrimitives(ctx.root, { isPrimitive: gltfPrimitiveTest(gltf), keepSeparate: ctx.keepFacesSeparate });
      ctx.zScaleGroup.add(ctx.root);
      ctx.doorCtrl.bind(ctx.root);
      ctx.root.traverse(ctx.registerMesh);
      ctx.frameIso();
      ctx.buildMaterialToggle();
      ctx.buildEdgesToggle();
      ctx.restoreSavedOpacities();
      ctx.buildPartToggles();
      ctx.buildLocaleToggle();
      // Resolve ?scene= / options.scene before building View buttons so the
      // matching custom scene starts highlighted.
      const initialSpec = ctx.findCustomScene(ctx.initialSceneId);
      if (initialSpec) {
        ctx.activeCameraPreset = `scene:${String(initialSpec.id).trim()}`;
      }
      ctx.buildCameraButtons();
      ctx.buildFovControl();
      ctx.buildWalkHeightControl();
      ctx.ensureDraftCut();
      ctx.buildCutUI();
      ctx.refreshMaterials();
      // Real fixture models (fixtureModels.js); boxes until they arrive.
      void ctx.fixtureModels.install();
      for (const id of ctx.lazyAtStart) void ctx.loadLazyLayer(id);
      ctx.restoreSavedSession();
      ctx.cameraReady = true;
      if (initialSpec) ctx.applyScene(initialSpec);
      else ctx.restoreSavedCamera();
      ctx.syncSceneUrl();
      ctx.chromeApi?.refreshPartialHeight();
      ctx.showArButton();
      ctx.showMeasureButton();
      ctx.syncWalkButton();
      ctx.syncDrawingButton();
      ctx.syncLabelButton();
      ctx.editMode?.showButton(ctx.editMode.hasFixtures());
    },
    (err) => {
      ctx.fail(String(err?.message || err));
    },
  );

  function fail(msg) {
    const el = document.getElementById("err");
    if (!el) return;
    el.style.display = "block";
    el.textContent = msg;
  }
  ctx.fail = fail;

  /** @type {ReturnType<typeof createCooperativeRange> | null} */
  ctx.walkHeightRange = null;

  // Default FOV before first frame / GLB load.
  ctx.applyPerspFovFromState();

  /** Bumped per refresh so a slow catalogue fetch cannot paint a stale mode. */
  ctx.materialsRequest = 0;

  // ---- Locks and remembered visibility (visibilityState.js) ----

  ctx.PADLOCK_CLOSED =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M7 10V7a5 5 0 0 1 10 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1zm2 0h6V7a3 3 0 0 0-6 0v3z"/></svg>';
  ctx.PADLOCK_OPEN =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M8 11V7a4 4 0 0 1 7.75-1.4"/><rect x="5" y="11" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

  /** @type {{ refresh: () => void } | null} */
  ctx.ifcUiRef = null;
  /** @type {ReturnType<typeof createVisibility> | null} */
  ctx.ifcVisibilityRef = null;
  /** Bumped whenever applyInspectorVisibility runs (content signature). */
  ctx.visibilitySigRevision = 0;
  ctx.visSaveTimer = 0;
  ctx.visRestoring = false;
  ctx.camSaveTimer = 0;
  ctx.camRestoring = false;
  /** False until the initial scene or remembered camera has been applied. */
  ctx.cameraReady = false;

  if (typeof window !== "undefined") {
    window.addEventListener("pagehide", () => {
      if (ctx.visSaveTimer) ctx.flushVisibilitySave();
      ctx.flushCameraSave();
    });
  }

  /** @type {string | null} */
  ctx.activeCameraPreset = "iso";
  /** Last custom scene, kept across orbit so Drawing can restore its camera. */
  /** @type {object | null} */
  ctx.activeSceneSpec = null;
  /** While true, the animation loop does not render (drawing capture). */
  ctx.pauseTick = false;

  // Spawn a draft after the user finishes orbiting/panning — not on every
  // damping `change`, which would rebuild the cut UI mid-slider-drag.
  // `start` is user-gesture only (programmatic framing does not fire it).
  //
  // Peel the frame after the camera, pointer, and opacity/cut edits have
  // stopped. A timer here just delays a hitch; the settled frame itself has
  // to be cheap. Pointer-down forces the single sorted-alpha draw so a touch
  // is never stuck behind the peel.
  ctx.peelPointerDown = false;
  ctx.peelCamPos = new THREE.Vector3();
  ctx.peelCamTarget = new THREE.Vector3();
  ctx.peelCamInited = false;

  canvas.addEventListener(
    "pointerdown",
    () => {
      ctx.peelPointerDown = true;
    },
    { capture: true },
  );
  window.addEventListener("pointerup", ctx.notePeelPointerUp, { capture: true });
  window.addEventListener("pointercancel", ctx.notePeelPointerUp, { capture: true });

  ctx.controls.addEventListener("start", () => {
    ctx.clearCameraPresetHighlight();
    ctx.peelPointerDown = true;
  });
  ctx.controls.addEventListener("change", () => {
    ctx.syncViewZoomFromCamera();
  });
  ctx.controls.addEventListener("end", () => {
    ctx.peelPointerDown = false;
    if (ctx.suppressCameraChange) return;
    ctx.maybeSpawnDraftFromCamera();
    ctx.flushCameraSave();
  });

  /** Animated safe-area framing: shift into uncovered rect + slight zoom-out. */
  ctx.frameZoom = 1;
  ctx.frameOffX = 0;
  ctx.frameOffY = 0;
  ctx.frameZoomT = 1;
  ctx.frameOffXT = 0;
  ctx.frameOffYT = 0;
  ctx.frameAnimFromZoom = 1;
  ctx.frameAnimFromX = 0;
  ctx.frameAnimFromY = 0;
  ctx.frameAnim = 0;
  ctx.FRAME_MS = 280;
  ctx.resize();
  window.addEventListener("resize", ctx.resize);
  ctx.chromeApi?.onDetentChange(() => {
    ctx.applySafeViewOffset(true);
  });

  /** @type {HTMLButtonElement | null} */
  ctx.arBtn = document.getElementById("ar");
  /** @type {HTMLButtonElement | null} */
  ctx.measureBtn = document.getElementById("measure");
  /** @type {HTMLButtonElement | null} */
  ctx.walkBtn = document.getElementById("walk");
  ctx.arBusy = false;
  ctx.MEASURE_LABEL = () => tr("ui.measure");

  onLocaleChange(() => ctx.relocalizeUi());

  ctx.drawBtn = document.getElementById("drawing");
  ctx.labelBtn = document.getElementById("labels");
  ctx.labelsOn = true;

  ctx.drawBusy = false;

  window.blueprintCaptureDrawing = async () => {
    const plate = await ctx.captureDrawing();
    if (!plate) return null;
    return { png: plate.png, pdf: plate.pdf, stem: plate.stem };
  };

  /**
   * Headless camera for preview captures. position/target/up are glTF metres.
   * @param {{
   *   position?: number[],
   *   target?: number[],
   *   up?: number[],
   *   projection?: "perspective" | "ortho",
   *   hFovDeg?: number,
   * }} opts
   */
  window.blueprintSetView = (opts = {}) => {
    if (!ctx.root || !opts) return false;
    const proj = opts.projection === "ortho" ? "ortho" : "perspective";
    const fov = Number.isFinite(Number(opts.hFovDeg)) ? Number(opts.hFovDeg) : ctx.hFovDeg;
    if (proj === "perspective" && ctx.projection === "ortho") ctx.leaveOrtho(fov);
    if (proj === "perspective") ctx.setHFov(fov, { reframe: false });
    ctx.withSuppressedCameraChange(() => {
      ctx.suppressViewZoomSync = true;
      const up = new THREE.Vector3(0, 1, 0);
      if (Array.isArray(opts.up) && opts.up.length >= 3) {
        up.set(Number(opts.up[0]) || 0, Number(opts.up[1]) || 0, Number(opts.up[2]) || 0);
        if (up.lengthSq() > 1e-12) up.normalize();
        else up.set(0, 1, 0);
      }
      ctx.perspCamera.up.copy(up);
      ctx.orthoCamera.up.copy(up);
      ctx.camera.up.copy(up);
      if (Array.isArray(opts.target)) {
        ctx.controls.target.set(
          Number(opts.target[0]) || 0,
          Number(opts.target[1]) || 0,
          Number(opts.target[2]) || 0,
        );
      }
      if (Array.isArray(opts.position)) {
        ctx.camera.position.set(
          Number(opts.position[0]) || 0,
          Number(opts.position[1]) || 0,
          Number(opts.position[2]) || 0,
        );
      }
      ctx.camera.lookAt(ctx.controls.target);
      if (proj === "ortho") {
        const dist = ctx.camera.position.distanceTo(ctx.controls.target);
        const vFovRad = ctx.hFovDegToVFovRad(fov, ctx.canvasAspect());
        ctx.sizeOrthoFrustum(dist, vFovRad);
        ctx.viewZoom = 1;
        if (ctx.projection !== "ortho") {
          ctx.setActiveCamera(ctx.orthoCamera);
          ctx.projection = "ortho";
        }
        ctx.applyCombinedZoom();
        ctx.syncFovUi();
      }
      ctx.updateBox();
      ctx.updateCameraClipPlanes();
      ctx.controls.update();
      ctx.suppressViewZoomSync = false;
    });
    ctx.viewDirty = true;
    return true;
  };

  if (ctx.labelBtn) {
    ctx.labelBtn.addEventListener("click", () => {
      ctx.labelsOn = !ctx.labelsOn;
      ctx.annotations.setVisible(ctx.labelsOn);
      ctx.syncLabelButton();
    });
  }

  if (ctx.drawBtn) {
    ctx.drawBtn.addEventListener("click", () => {
      void (async () => {
        const plate = await ctx.captureDrawing();
        if (!plate) return;
        downloadBlob(plate.png, `${plate.stem}.png`);
        downloadBlob(plate.pdf, `${plate.stem}.pdf`);
      })();
    });
  }

  /**
   * Measure (measure.js), a lazy chunk like walk and edit mode (build.mjs):
   * null until it loads, and every caller already allows that.
   * @type {ReturnType<typeof import("./measure.js").createMeasureTool> | null}
   */
  ctx.measureTool = null;
  ctx.measureReady = Promise.resolve();
  if (ctx.scene) {
    ctx.measureReady = loadFeature("measure", () => import("./measure.js"), ({ createMeasureTool }) => {
      ctx.measureTool = createMeasureTool({
        scene: ctx.scene,
        canvas,
        getCamera: () => ctx.camera,
        controls: ctx.controls,
        getRoot: () => ctx.root,
        getClipPlanes: () => ctx.lockedClipPlanes(),
        onLiveLength: (label) => {
          if (!ctx.measureBtn) return;
          if (label) {
            ctx.measureBtn.textContent = label;
            ctx.measureBtn.classList.add("is-live");
          } else {
            ctx.measureBtn.textContent = ctx.MEASURE_LABEL();
            ctx.measureBtn.classList.remove("is-live");
          }
        },
        onActiveChange: (on) => {
          ctx.viewDirty = true;
          if (!ctx.measureBtn) return;
          ctx.measureBtn.classList.toggle("is-active", on);
          ctx.measureBtn.setAttribute("aria-pressed", on ? "true" : "false");
          if (!on) {
            ctx.measureBtn.textContent = ctx.MEASURE_LABEL();
            ctx.measureBtn.classList.remove("is-live");
          }
        },
      });
      ctx.viewDirty = true;
    });
  }

  if (ctx.measureBtn) {
    ctx.measureBtn.addEventListener("click", () => {
      if (!ctx.measureTool) return;
      if (ctx.editMode?.active) ctx.editMode.setActive(false);
      ctx.measureTool.setActive(!ctx.measureTool.isActive());
    });
  }
  /** Window elements whose panes slide: they collide where they are now. */
  ctx.slidingWindowKeys = new Set(ctx.windowRecords.map((r) => String(r?.id ?? "")));
  // Walk (walkMode.js, walkPhysics.js, three-mesh-bvh) is a lazy chunk
  // (build.mjs). Height and yaw helpers it shares with the entry live in
  // walkBasics.js.
  ctx.walkReady = loadFeature("walk", () => import("./walkMode.js"), ({ createWalkMode }) => {
    ctx.walk = createWalkMode({
      canvas,
      scene: ctx.scene,
      getRoot: () => ctx.root,
      getCamera: () => ctx.camera,
      isDynamic: (mesh) =>
        Boolean(mesh.userData.bpDoor) || ctx.slidingWindowKeys.has(String(mesh.userData.bpElementKey ?? "")),
      pickAt: (x, y) => ctx.doorCtrl.pickAt(x, y),
      onBeforeEnter: () => {
        if (ctx.measureTool?.isActive()) ctx.measureTool.setActive(false);
        if (ctx.projection === "ortho") ctx.leaveOrtho(ctx.lastHFovDeg);
        ctx.camFly = null;
        ctx.clearCameraPresetHighlight();
      },
      onEnter: () => {
        ctx.controls.enabled = false;
        ctx.syncWalkButton();
        ctx.realisticCtl?.stage.markDirty();
        ctx.scheduleCameraSave();
      },
      onExit: (pose) => {
        ctx.controls.enabled = true;
        if (pose) {
          ctx.withSuppressedCameraChange(() => {
            ctx.camera.position.copy(pose.position);
            ctx.controls.target.copy(pose.target);
            ctx.updateCameraClipPlanes();
            ctx.controls.update();
          });
        }
        ctx.syncWalkButton();
        ctx.realisticCtl?.stage.markDirty();
        ctx.flushCameraSave();
      },
      onCamera: (target) => ctx.controls.target.copy(target),
      onChange: () => {
        ctx.viewDirty = true;
        ctx.scheduleCameraSave();
      },
      t: tr,
    });
    if (ctx.root) ctx.buildWalkHeightControl();
    ctx.syncWalkButton();
    if (ctx.pendingWalkRestore && ctx.root) {
      const saved = ctx.pendingWalkRestore;
      ctx.pendingWalkRestore = null;
      ctx.camRestoring = true;
      try {
        if (saved.heightCm != null) ctx.walk.setHeight(saved.heightCm);
        const eye = eyeHeightM(ctx.walk.heightCm);
        const feet = [saved.position[0], saved.position[1] - eye, saved.position[2]];
        const look = yawPitchOf(ctx.camera);
        ctx.walk.enter({ pose: { feet, yaw: look.yaw, pitch: look.pitch }, lock: false });
      } finally {
        ctx.camRestoring = false;
      }
    }
    ctx.viewDirty = true;
  });
  ctx.doorInputBlocked = () => Boolean(ctx.measureTool?.isActive()) || Boolean(ctx.walk?.blocksPointerTaps());

  if (ctx.walkBtn) {
    ctx.walkBtn.addEventListener("click", () => {
      if (ctx.editMode?.active) ctx.editMode.setActive(false);
      ctx.walk?.toggle({ lock: true });
      ctx.syncWalkButton();
    });
  }

  if (ctx.arBtn) {
    ctx.arBtn.addEventListener("click", () => {
      void ctx.openArQuickLook();
    });
  }

  // Public hook for future agent-driven features (flyover, blink, …).
  ctx.api = {
    scene: ctx.scene,
    /** Real fixture models (fixtureModels.js). */
    fixtureModels: ctx.fixtureModels,
    get camera() {
      return ctx.camera;
    },
    controls: ctx.controls,
    parts: ctx.parts,
    partOpacity: ctx.partOpacity,
    /** Meshes before/after the per-face primitive merge (mergePrimitives.js). */
    get mergeStats() {
      return { ...ctx.mergeStats };
    },
    /** renderer.info for perf checks (draws, triangles, GPU geometries/textures). */
    get rendererInfo() {
      return { render: { ...ctx.renderer.info.render }, memory: { ...ctx.renderer.info.memory }, programs: ctx.renderer.info.programs?.length || 0, pixelRatio: ctx.renderer.getPixelRatio() };
    },
    cuts: ctx.cuts,
    scenes: ctx.customScenes,
    setPartOpacity: ctx.setPartOpacity,
    setCameraPreset: ctx.setCameraPreset,
    applyScene: ctx.applyScene,
    setHFov: ctx.setHFov,
    toggleFovIso: ctx.toggleFovIso,
    get projection() {
      return ctx.projection;
    },
    get hFovDeg() {
      return ctx.hFovDeg;
    },
    setCutT: ctx.setCutT,
    removeCut: ctx.removeCut,
    frameIso: ctx.frameIso,
    openArQuickLook: ctx.openArQuickLook,
    buildArExportScene: ctx.buildArExportScene,
    /** @returns {"fast" | "high"} */
    getPeelQuality: () => ctx.lastPeelQuality,
    /** First-person walk mode (walkMode.js). */
    get walk() {
      return ctx.walk;
    },
    /** Remembered camera (cameraState.js); headless checks. */
    cameraState: {
      state: () => ctx.collectCameraState(),
      flush: () => ctx.flushCameraSave(),
    },
    /** Remembered visibility and locks (visibilityState.js); headless checks. */
    visibility: {
      state: () => ctx.collectVisibilityState(),
      reset: () => ctx.resetVisibility(),
      toggleLock: (id) => ctx.toggleLock(id),
      lockedLeaves: () => [...ctx.lockedLeaves],
      elementLocked: (globalId) => ctx.elementLocked(globalId),
      /** Same as the inspector row menu's "Hide all others". */
      hideOthers: (globalId) => {
        ctx.ifcVisibility.hideOthers(globalId);
        ctx.applyInspectorVisibility();
        ctx.ifcUi.refresh();
      },
      hiddenMeshCount: () => {
        let n = 0;
        for (const meshes of ctx.meshesByKey.values()) for (const m of meshes) if (m.userData.bpIfcHidden) n++;
        return n;
      },
    },
  };
  window.BlueprintsViewer = ctx.api;

  ctx.prevUsedPeel = false;
  /** Force a redraw (measure cursor, anything the stamps miss). */
  ctx.viewDirty = true;
  /** @type {{ meshes: object[], clones: object[], t0: number } | null} */
  ctx.pulse = null;

  ctx.ifcVisibility = createVisibility(ctx.ifcIndex, {
    // Locked rows and leaves never go hidden from the inspector.
    isLocked: (id) => ctx.elementLocked(id),
  });
  ctx.ifcVisibilityRef = ctx.ifcVisibility;
  ctx.ifcRaycaster = new THREE.Raycaster();
  ctx.ifcPointer = new THREE.Vector2();
  ctx.ifcUi = mountIfcInspector({
    index: ctx.ifcIndex,
    visibility: ctx.ifcVisibility,
    t: tr,
    openSheet() {
      const wide = window.matchMedia("(min-width: 768px)").matches;
      // Phone: half-height detent, so the framed element stays in the
      // visible band above the sheet. Wide layout has only an open pane.
      ctx.chromeApi?.setDetent(wide ? "open" : "partial");
    },
    onFrame: (id, detail) => {
      if (detail?.move) ctx.frameElement(id);
      else ctx.pulseElement(id);
    },
    onVisibility: () => ctx.applyInspectorVisibility(),
    locks: {
      isLocked: (id) => ctx.elementLocked(id),
      isLockedSelf: (id) => Boolean(ctx.partLocks?.has(IFC_LOCK_PREFIX + id)),
      toggle: (id) => ctx.toggleLock(IFC_LOCK_PREFIX + id),
    },
    actionsFor: (element) => ctx.actionsForElement(element),
    liveLines: (element) => {
      const device = ctx.home?.lastKnown(element.globalId);
      return device ? deviceLines(device, tr) : [];
    },
  });
  ctx.ifcUiRef = ctx.ifcUi;

  ctx.CAM_FLY_MS = 480;
  /** @type {{ t0: number, fromPos: THREE.Vector3, toPos: THREE.Vector3, fromTarget: THREE.Vector3, toTarget: THREE.Vector3, span: number } | null} */
  ctx.camFly = null;

  /** @type {Map<string, object[]>} IFC elements by type, built on first use. */
  ctx.elementsByType = new Map();

  /** globalId → time of our own press, so Home's echo does not animate twice. */
  ctx.localPressAt = new Map();
  ctx.inspectAt = ctx.inspectAtPointer;

  // --- Home section and client lifecycle ---
  ctx.homeConfig = resolveHomeConfig({
    search: typeof location !== "undefined" ? location.search : "",
    storage: typeof localStorage !== "undefined" ? localStorage : null,
  });
  ctx.homeCapable = indexHasHomeDevices(ctx.ifcIndex);
  ctx.homeMode = ctx.homeConfig.mode;
  ctx.homeFlash = "";
  /** @type {HTMLElement | null} */
  ctx.homeStatusEl = null;

  if (ctx.homeCapable) {
    ctx.home = createHomeClient({
      baseUrl: ctx.homeConfig.baseUrl,
      onStatus: () => {
        ctx.syncHomeStatus();
        ctx.viewDirty = true;
      },
      onDevice: (device) => ctx.applyLiveDevice(device),
      onSwitch: (event) => {
        if (event.event !== "initialPress") return;
        const element = ctx.ifcIndex.elements[event.globalId];
        const ours = performance.now() - (ctx.localPressAt.get(event.globalId) ?? -Infinity) < 3000;
        ctx.localPressAt.delete(event.globalId);
        if (element && !ours) {
          // Someone else pressed it: same arrow, no haptic.
          if (event.position === "up" || event.position === "down") {
            ctx.switchFeedback(element, { rocker: event.rocker, position: event.position }, false);
          }
          ctx.pressSwitch(element);
        }
      },
    });
    ctx.buildHomeSection();
    if (ctx.homeMode === "live") ctx.home.start();
    window.blueprintsHome = ctx.home;
  }

  onLocaleChange(() => ctx.ifcUi.refresh());
  /** @type {number[] | null} */
  ctx.camSig = null;
  /** @type {string | null} */
  ctx.contentSig = null;
  /** @type {"fast" | "high"} */
  ctx.lastPeelQuality = "fast";
  /** @type {"fast" | "high" | null} */
  ctx.renderedPeelQuality = null;
  /**
   * After a scene or setting change, show one fast frame before merging
   * batches, then peel on the following still frame. Camera let-go does not
   * set this, so a warm peel still happens on the next still frame.
   */
  ctx.holdFastForPrime = false;

  canvas.addEventListener("pointermove", () => {
    if (ctx.measureTool?.isActive()) ctx.viewDirty = true;
  });
  canvas.addEventListener("pointerup", () => {
    if (ctx.measureTool?.isActive()) ctx.viewDirty = true;
  });

  /** Walk physics time of the last frame (ms); `BlueprintsViewer.frameStats`. */
  ctx.walkFrameMs = 0;
  /** Rolling frame timings for headless checks. */
  ctx.frameStats = { frames: 0, totalMs: 0, renderMs: 0, walkMs: 0, reset() {
    this.frames = 0;
    this.totalMs = 0;
    this.renderMs = 0;
    this.walkMs = 0;
  } };
  ctx.api.frameStats = ctx.frameStats;
  // Edit mode (editMode.js, TransformControls, fixture and cable edits) is a
  // lazy chunk (build.mjs). It also draws the cable routes for the Parts
  // leaf and ?cables=1, so it starts loading now rather than on first tap.
  ctx.editReady = loadFeature("edit", () => import("./editMode.js"), ({ createEditMode }) => {
    ctx.editMode = createEditMode({
      canvas,
      renderer: ctx.renderer,
      controls: ctx.controls,
      getCamera: () => ctx.camera,
      getRoot: () => ctx.root,
      index: ctx.ifcIndex,
      modelId: String(options.modelId || ""),
      meshesForElement: ctx.meshesForElement,
      elementFromMesh: ctx.elementFromMesh,
      isSceneSolid,
      isRenderedHit,
      isOpaque: (obj) => isOpaqueMaterialOf(obj),
      centerOccluded,
      projectTarget,
      flyTo: (pose) => ctx.flyCamera(pose),
      pulse: (meshes) => ctx.startPulse(meshes),
      markDirty: () => {
        ctx.viewDirty = true;
        ctx.realisticCtl?.stage.markDirty();
      },
      beforeEnter: () => {
        if (ctx.walk?.active) ctx.walk.exit();
        if (ctx.measureTool?.isActive()) ctx.measureTool.setActive(false);
        ctx.syncWalkButton();
      },
      onLayout: () => ctx.applySafeViewOffset(true),
      t: tr,
      cablesLayer: () => ctx.hasCables && (ctx.partOpacity.get(CABLE_LEAF) ?? 0) > 1e-3,
      cables: options.cables && typeof options.cables === "object" ? options.cables : null,
    });
    if (ctx.root) ctx.editMode.showButton(ctx.editMode.hasFixtures());
    ctx.viewDirty = true;
  });
  onLocaleChange(() => ctx.editMode?.refreshLocale());
  /** Fixture edit mode, for headless checks: `BlueprintsViewer.edit` (null until loaded). */
  Object.defineProperty(ctx.api, "edit", { get: () => ctx.editMode, enumerable: true, configurable: true });
  /** Resolves once the lazy feature chunks (edit, measure, walk) are in. */
  ctx.api.featuresReady = Promise.all([ctx.editReady, ctx.measureReady, ctx.walkReady]).then(() => undefined);
  ctx.tick();
  return ctx.api;
}
