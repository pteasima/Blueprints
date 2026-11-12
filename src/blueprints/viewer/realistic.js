/**
 * Realistic render mode: PBR materials from the material catalogue
 * (`inputs/materials/catalogue.yaml`, published as `docs/materials/`),
 * textures at real-world scale, sun + image-based lighting with soft
 * shadows, and a staging floor. Everything here loads only when the mode is
 * first chosen, so Solid and Shaded pay nothing for it.
 *
 * Layers, so a later glTF fixture model can drop in without touching
 * materials (see README "Realistic mode"):
 *   catalogue.js   which catalogue entry a mesh gets (selectors, pure)
 *   registry       one set of textures per entry, one material per
 *                  (entry, part) because opacity sliders and depth bias are
 *                  per part
 *   assetSlots.js  optional glTF replacing a fixture's generated geometry;
 *                  asks the registry for catalogue materials by id
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { normalizeSlots, placeAsset, slotFor, swapCatalogueMaterials } from "./assetSlots.js";
import {
  catalogueCoverage,
  parseCatalogue,
  resolveEntry,
  resolveMapUrl,
} from "./catalogue.js";
import {
  LAYER_DEPTH_BIAS,
  applyOpacityToMeshes,
  disposeReplacedMaterials,
  finishMaterial,
} from "./materials.js";

/**
 * Look for meshes no catalogue entry claims. Plain, so a gap reads as
 * "not catalogued yet" rather than as a design choice.
 * @type {Record<string, { color: string, roughness: number, metalness: number, transmission?: number }>}
 */
const UNCATALOGUED = {
  glazing: { color: "#dfe9ec", roughness: 0.05, metalness: 0, transmission: 0.9 },
  screen: { color: "#e6eef0", roughness: 0.05, metalness: 0, transmission: 0.9 },
  default: { color: "#d9d5ce", roughness: 0.8, metalness: 0 },
};

/**
 * Catalogue id for the staging floor: the poured PU screed of the living
 * area (docs/materials/README.md, open question 2). Replace with real floor
 * slabs per room once the model builds them.
 */
export const STAGE_FLOOR_MATERIAL = "floor-pu-living";

/** Device tier. `?quality=low|high` overrides the guess. */
export function detectQuality() {
  try {
    const q = new URLSearchParams(location.search).get("quality");
    if (q === "low" || q === "high") return q;
  } catch {
    /* ignore */
  }
  try {
    const coarse = typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches;
    const ua = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
    if (coarse || /iPhone|iPad|iPod|Android/i.test(ua)) return "low";
  } catch {
    /* ignore */
  }
  return "high";
}

/**
 * Quality budget. Phones (low): textures capped at 1K, 4x anisotropy, a 1K
 * shadow map, and glass drawn as blended PBR (env reflections, opacity from
 * the transmission value) instead of transmission. three.js draws every
 * opaque object a second time into the transmission target whenever glass is
 * in view; on the kitchen view that doubled the draw calls (1395 to 2787) and
 * the frame time, which a phone can't afford. High: 2K, 8x, 2K, transmission
 * at full resolution.
 * @param {"low" | "high"} tier
 */
export function qualityBudget(tier) {
  return tier === "low"
    ? { maxTexture: 1024, anisotropy: 4, shadowMap: 1024, transmission: false, transmissionScale: 0.5 }
    : { maxTexture: 2048, anisotropy: 8, shadowMap: 2048, transmission: true, transmissionScale: 1 };
}

/**
 * Box-projected UVs in world metres (dominant axis of the face normal),
 * oriented so a texture is not mirrored when the face is seen from its
 * front. World origin, so grain and tiles run on across neighbouring walls.
 * Stored beside the GLB's own `uv` and swapped in only for Realistic.
 *
 * `alignLongest` (materials with a `rotation_deg`, i.e. a grain): on each
 * face V runs along the part's longer in-plane extent, so oak grain follows
 * a table top or a shelf board (catalogue contract: "the viewer aligns V
 * with the part's longest edge and then adds this rotation").
 * @param {THREE.Mesh} mesh
 * @param {THREE.Matrix4} rootInverse world → model space (undo exaggeration)
 * @param {boolean} [alignLongest]
 */
export function worldUvAttribute(mesh, rootInverse, alignLongest = false) {
  const geo = mesh.geometry;
  const pos = geo.getAttribute("position");
  if (!pos) return null;
  if (!geo.getAttribute("normal")) geo.computeVertexNormals();
  const nrm = geo.getAttribute("normal");
  const m = new THREE.Matrix4().multiplyMatrices(rootInverse, mesh.matrixWorld);
  const nm = new THREE.Matrix3().getNormalMatrix(m);
  const p = new THREE.Vector3();
  const n = new THREE.Vector3();
  const uv = new Float32Array(pos.count * 2);
  const ext = new THREE.Vector3(1, 1, 1);
  if (alignLongest) {
    const bb = new THREE.Box3();
    for (let i = 0; i < pos.count; i++) bb.expandByPoint(p.fromBufferAttribute(pos, i).applyMatrix4(m));
    bb.getSize(ext);
  }
  for (let i = 0; i < pos.count; i++) {
    p.fromBufferAttribute(pos, i).applyMatrix4(m);
    n.fromBufferAttribute(nrm, i).applyMatrix3(nm);
    const ax = Math.abs(n.x);
    const ay = Math.abs(n.y);
    const az = Math.abs(n.z);
    let u;
    let v;
    // Extents along the face's U and V before any swap.
    let eu;
    let ev;
    if (ay >= ax && ay >= az) {
      // Floors and tops: seen from above, north (−Z) is up the texture.
      u = p.x;
      v = n.y >= 0 ? -p.z : p.z;
      eu = ext.x;
      ev = ext.z;
    } else if (ax >= az) {
      u = n.x >= 0 ? -p.z : p.z;
      v = p.y;
      eu = ext.z;
      ev = ext.y;
    } else {
      u = n.z >= 0 ? p.x : -p.x;
      v = p.y;
      eu = ext.x;
      ev = ext.y;
    }
    if (alignLongest && eu > ev * 1.001) {
      // Quarter turn (not a mirror): V now runs along the longer side.
      const t = u;
      u = -v;
      v = t;
    }
    uv[i * 2] = u;
    uv[i * 2 + 1] = v;
  }
  return new THREE.BufferAttribute(uv, 2);
}

/**
 * @param {THREE.Texture} tex
 * @param {number} maxSize
 */
function capTextureSize(tex, maxSize) {
  const img = /** @type {any} */ (tex.image);
  const w = img?.width || 0;
  const h = img?.height || 0;
  if (!w || !h || Math.max(w, h) <= maxSize) return;
  const k = maxSize / Math.max(w, h);
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(w * k));
  canvas.height = Math.max(1, Math.round(h * k));
  canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
  tex.image = canvas;
}

/**
 * Textures and materials keyed by catalogue id. Textures are shared by every
 * material of an entry; a texture that fails to load leaves the entry on its
 * `base_color`.
 * @param {{
 *   renderer: THREE.WebGLRenderer,
 *   budget: ReturnType<typeof qualityBudget>,
 *   catalogueUrl: string,
 *   onTexture?: (entryId: string) => void,
 * }} opts
 */
export function createMaterialRegistry(opts) {
  const loader = new THREE.TextureLoader();
  const maxAniso = Math.min(opts.renderer.capabilities.getMaxAnisotropy?.() || 1, opts.budget.anisotropy);
  /** @type {Map<string, import("./catalogue.js").CatalogueEntry>} */
  const entries = new Map();
  /** entry id → loaded textures by slot */
  /** @type {Map<string, Partial<Record<"color" | "normal" | "roughness" | "ao", THREE.Texture>>>} */
  const textures = new Map();
  /** entry id → slots requested */
  const requested = new Set();
  /** @type {Set<string>} */
  const failed = new Set();
  /** @type {Set<THREE.Material>} live materials, to receive textures that arrive late */
  const live = new Set();

  /** @param {import("./catalogue.js").CatalogueEntry[]} list */
  function setEntries(list) {
    entries.clear();
    for (const e of list) entries.set(e.id, e);
  }

  /**
   * @param {import("./catalogue.js").CatalogueEntry} entry
   */
  function requestTextures(entry) {
    if (requested.has(entry.id)) return;
    requested.add(entry.id);
    const slots = /** @type {const} */ (["color", "normal", "roughness", "ao"]);
    for (const slot of slots) {
      const path = entry.maps[slot];
      if (!path) continue;
      const url = resolveMapUrl(path, opts.catalogueUrl);
      loader.load(
        url,
        (tex) => {
          capTextureSize(tex, opts.budget.maxTexture);
          // Colour is authored in sRGB; normal, roughness and AO are data.
          tex.colorSpace = slot === "color" ? THREE.SRGBColorSpace : THREE.NoColorSpace;
          tex.wrapS = THREE.RepeatWrapping;
          tex.wrapT = THREE.RepeatWrapping;
          tex.anisotropy = maxAniso;
          // UVs are metres (worldUvAttribute), so repeat = 1 / tile size.
          tex.repeat.set(1 / entry.tileSize[0], 1 / entry.tileSize[1]);
          tex.rotation = THREE.MathUtils.degToRad(entry.rotationDeg || 0);
          tex.userData.bpShared = true;
          tex.needsUpdate = true;
          if (!textures.has(entry.id)) textures.set(entry.id, {});
          textures.get(entry.id)[slot] = tex;
          for (const mat of live) {
            if (mat.userData.bpCatalogueId === entry.id) bindTextures(mat, entry);
          }
          opts.onTexture?.(entry.id);
        },
        undefined,
        () => {
          failed.add(`${entry.id}:${slot} (${url})`);
          console.warn(`Realistic: texture ${url} for ${entry.id} did not load; using base_color`);
        },
      );
    }
  }

  /**
   * @param {THREE.Material} mat
   * @param {import("./catalogue.js").CatalogueEntry} entry
   */
  function bindTextures(mat, entry) {
    const t = textures.get(entry.id);
    if (!t) return;
    const m = /** @type {THREE.MeshPhysicalMaterial} */ (mat);
    let changed = false;
    if (t.color && m.map !== t.color) {
      m.map = t.color;
      // The photo carries the colour; base_color is only the fallback.
      // A light that is drawn lit keeps the colour setLightLook gave it.
      if (m.userData.bpLightBase == null) m.color.set(0xffffff);
      changed = true;
    }
    if (t.normal && m.normalMap !== t.normal) {
      m.normalMap = t.normal;
      m.normalScale.set(entry.normalScale, entry.normalScale);
      changed = true;
    }
    if (t.roughness && m.roughnessMap !== t.roughness) {
      m.roughnessMap = t.roughness;
      // three multiplies; the map is the absolute roughness.
      m.roughness = 1;
      changed = true;
    }
    if (t.ao && m.aoMap !== t.ao) {
      m.aoMap = t.ao;
      m.aoMapIntensity = 1;
      changed = true;
    }
    if (changed) m.needsUpdate = true;
  }

  /**
   * New material for one entry. Fresh rather than cloned, so the depth-bias
   * and peel shader patches (installed by finishMaterial) are its own.
   * @param {import("./catalogue.js").CatalogueEntry} entry
   * @param {{ transmission: boolean }} caps
   */
  function create(entry, caps) {
    const physical =
      entry.transmission > 0 || entry.clearcoat > 0 || entry.sheen > 0 || entry.ior != null;
    /** @type {THREE.MeshStandardMaterial | THREE.MeshPhysicalMaterial} */
    const mat = physical ? new THREE.MeshPhysicalMaterial() : new THREE.MeshStandardMaterial();
    mat.color.set(entry.baseColor);
    mat.roughness = entry.roughness;
    mat.metalness = entry.metalness;
    if (mat instanceof THREE.MeshPhysicalMaterial) {
      if (entry.transmission > 0 && caps.transmission) {
        mat.transmission = entry.transmission;
        mat.thickness = entry.thickness ?? 0.004;
      }
      if (entry.ior != null) mat.ior = entry.ior;
      mat.clearcoat = entry.clearcoat;
      mat.clearcoatRoughness = entry.clearcoatRoughness;
      if (entry.sheen > 0) {
        mat.sheen = entry.sheen;
        mat.sheenRoughness = entry.sheenRoughness;
        mat.sheenColor.set(entry.sheenColor || entry.baseColor);
      }
    }
    mat.userData.bpCatalogueId = entry.id;
    mat.userData.bpRealistic = true;
    // Opacity from the catalogue (or glass where transmission is off).
    let opacity = entry.opacity;
    if (entry.transmission > 0 && !caps.transmission) {
      opacity = Math.min(opacity, Math.max(0.12, 1 - entry.transmission * 0.85));
    }
    mat.userData.presetOpacity = opacity;
    requestTextures(entry);
    bindTextures(mat, entry);
    live.add(mat);
    return mat;
  }

  /**
   * Material for a catalogue id, for callers such as glTF asset slots.
   * @param {string} id
   * @param {{ transmission: boolean }} caps
   */
  function materialFor(id, caps) {
    const entry = entries.get(id);
    return entry ? create(entry, caps) : null;
  }

  /** @param {THREE.Material} mat */
  function release(mat) {
    live.delete(mat);
  }

  /**
   * Late textures for a material made outside `create`, such as the clone
   * a lit light gets (main.js eachMaterial).
   * @param {THREE.Material} mat
   */
  function bind(mat) {
    const entry = entries.get(mat.userData.bpCatalogueId);
    if (entry) bindTextures(mat, entry);
  }

  return {
    setEntries,
    create,
    bind,
    materialFor,
    release,
    entry: (id) => entries.get(id),
    failedTextures: () => [...failed],
  };
}

/**
 * Lights, shadows and the staging floor for Realistic. Shaded and Solid keep
 * the viewer's original ambient + key + fill rig.
 * @param {{
 *   scene: THREE.Scene,
 *   renderer: THREE.WebGLRenderer,
 *   budget: ReturnType<typeof qualityBudget>,
 *   baseLights: THREE.Light[],
 * }} opts
 */
export function createRealisticStage(opts) {
  const { scene, renderer, budget } = opts;
  const sun = new THREE.DirectionalLight(0xfff4e5, 2.0);
  sun.name = "RealisticSun";
  sun.castShadow = true;
  sun.shadow.mapSize.set(budget.shadowMap, budget.shadowMap);
  sun.shadow.radius = 3;
  sun.shadow.blurSamples = 12;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.02;
  sun.visible = false;
  const sky = new THREE.HemisphereLight(0xdfe8f2, 0x8a7f72, 0.3);
  sky.name = "RealisticSky";
  sky.visible = false;
  scene.add(sun, sun.target, sky);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshStandardMaterial({ color: 0xa8a39b, roughness: 0.95, metalness: 0 }),
  );
  floor.name = "RealisticStageFloor";
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  floor.visible = false;
  // Staging only: never picked, measured, exported or used as an orbit pivot.
  floor.raycast = () => {};
  floor.userData.bpHitProxy = true;
  floor.userData.bpStage = true;
  scene.add(floor);

  /** @type {Map<THREE.Light, number>} */
  const baseIntensity = new Map(opts.baseLights.map((l) => [l, l.intensity]));
  const envIntensity = scene.environmentIntensity ?? 1;
  let on = false;

  /**
   * Fit sun shadow frustum and floor to the model.
   * @param {THREE.Box3} box model bounds, world space
   */
  function fit(box) {
    if (box.isEmpty()) return;
    const size = box.getSize(new THREE.Vector3());
    const c = box.getCenter(new THREE.Vector3());
    const r = Math.max(size.x, size.y, size.z) * 0.5 + 0.5;
    // Afternoon sun from the south-west, ~50° up, so interior walls throw
    // readable shadows into rooms seen from above.
    const dir = new THREE.Vector3(-0.55, 1.0, 0.65).normalize();
    sun.position.copy(c).addScaledVector(dir, r * 2.5);
    sun.target.position.copy(c);
    sun.target.updateMatrixWorld();
    const cam = sun.shadow.camera;
    cam.left = -r;
    cam.right = r;
    cam.top = r;
    cam.bottom = -r;
    cam.near = 0.1;
    cam.far = r * 5;
    cam.updateProjectionMatrix();
    const y = box.min.y <= 0 && box.max.y >= 0 ? 0 : box.min.y;
    floor.position.set(c.x, y - 0.002, c.z);
    floor.scale.set(Math.max(size.x, 4) * 3, Math.max(size.z, 4) * 3, 1);
    renderer.shadowMap.needsUpdate = true;
  }

  /** @param {boolean} enable */
  function setEnabled(enable) {
    on = enable;
    sun.visible = enable;
    sky.visible = enable;
    floor.visible = enable;
    for (const [light, k] of baseIntensity) {
      // Keep a little of the old key/fill for shape; the sun and IBL do the rest.
      light.intensity = enable ? k * (light.isAmbientLight ? 0 : 0.25) : k;
    }
    scene.environmentIntensity = enable ? 0.5 : envIntensity;
    renderer.shadowMap.enabled = enable;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    // Geometry is static apart from doors and windows; redraw the shadow
    // map only when something moved (markDirty), not every orbit frame.
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;
    renderer.transmissionResolutionScale = budget.transmissionScale;
  }

  return {
    fit,
    setEnabled,
    markDirty() {
      if (on) renderer.shadowMap.needsUpdate = true;
    },
    get enabled() {
      return on;
    },
    floor,
    sun,
  };
}

/**
 * Coordinates the mode: catalogue fetch (once), registry, stage, and the
 * per-part material assignment.
 * @param {{
 *   renderer: THREE.WebGLRenderer,
 *   scene: THREE.Scene,
 *   baseLights: THREE.Light[],
 *   catalogueUrl: string | null,
 *   catalogueText?: string | null,
 *   assetSlots?: unknown[],
 *   onChange: () => void,
 * }} opts
 */
export function createRealistic(opts) {
  const tier = detectQuality();
  const budget = qualityBudget(tier);
  const caps = { transmission: budget.transmission };
  const registry = createMaterialRegistry({
    renderer: opts.renderer,
    budget,
    catalogueUrl: opts.catalogueUrl || "",
    onTexture: () => opts.onChange(),
  });
  const stage = createRealisticStage({
    scene: opts.scene,
    renderer: opts.renderer,
    budget,
    baseLights: opts.baseLights,
  });
  /** @type {Promise<import("./catalogue.js").CatalogueEntry[]> | null} */
  let loading = null;
  /** @type {import("./catalogue.js").CatalogueEntry[]} */
  let entries = [];
  let errors = [];
  let warnings = [];
  /** @type {Map<THREE.Mesh, import("./catalogue.js").MeshInfo>} */
  const infoCache = new Map();
  /** @type {Set<THREE.Mesh>} meshes whose uv is currently the world one */
  const worldUvOn = new Set();
  const slots = normalizeSlots(opts.assetSlots || []);
  /** Drawn invisibly: generated geometry a glTF asset stands in for. */
  const hiddenMat = new THREE.MeshBasicMaterial({ visible: false });
  hiddenMat.userData.bpAssetHidden = true;
  /** @type {Map<string, Promise<THREE.Object3D | null>>} */
  const assetCache = new Map();
  /** element key → placed holder */
  /** @type {Map<string, THREE.Object3D>} */
  const placed = new Map();
  /** @type {Set<THREE.Mesh>} */
  const replaced = new Set();

  /** @param {string} url */
  function loadAsset(url) {
    if (!assetCache.has(url)) {
      assetCache.set(
        url,
        new GLTFLoader()
          .loadAsync(url)
          .then((g) => g.scene)
          .catch((err) => {
            console.warn(`Realistic: asset ${url} did not load; keeping generated geometry`, err);
            return null;
          }),
      );
    }
    return assetCache.get(url);
  }

  /**
   * Catalogue material for a glTF slot name, or null to keep the glTF's own.
   * @param {string} id
   */
  function slotMaterial(id) {
    const mat = registry.materialFor(id, caps);
    if (mat) finishMaterial(mat, null, 0);
    return mat;
  }

  /**
   * @param {string} key
   * @param {{ url: string, fit: "contain" | "none" }} slot
   * @param {THREE.Mesh[]} meshes
   */
  function mountSlot(key, slot, meshes) {
    if (placed.has(key)) {
      placed.get(key).visible = meshes.some((m) => m.visible);
      return;
    }
    loadAsset(slot.url).then((scene) => {
      if (!scene || placed.has(key) || !stage.enabled) {
        if (!scene) for (const m of meshes) replaced.delete(m);
        if (!scene) opts.onChange();
        return;
      }
      const clone = scene.clone(true);
      swapCatalogueMaterials(clone, slotMaterial);
      const holder = placeAsset(clone, meshes, slot.fit);
      if (holder) placed.set(key, holder);
      stage.markDirty();
      opts.onChange();
    });
  }

  function load() {
    if (loading) return loading;
    const text = opts.catalogueText
      ? Promise.resolve(opts.catalogueText)
      : opts.catalogueUrl
        ? fetch(opts.catalogueUrl).then((r) => (r.ok ? r.text() : ""))
        : Promise.resolve("");
    loading = text
      .catch(() => "")
      .then((t) => {
        if (!t) {
          warnings.push(`no catalogue at ${opts.catalogueUrl}; every surface uses its fallback colour`);
          return [];
        }
        const parsed = parseCatalogue(t);
        errors = parsed.errors;
        warnings = parsed.warnings;
        for (const e of errors) console.warn(`Realistic catalogue: ${e}`);
        entries = parsed.entries;
        registry.setEntries(entries);
        return entries;
      });
    return loading;
  }

  /** @param {THREE.Mesh} mesh */
  function infoOf(mesh) {
    let info = infoCache.get(mesh);
    if (!info) {
      info = { part: mesh.userData.bpPart || "part", element: mesh.userData.bpElementKey || null };
      infoCache.set(mesh, info);
    }
    return info;
  }

  /**
   * World-metre UVs in, GLB UVs kept for the other modes. A geometry shared
   * by two placements is split so each gets its own projection.
   * @param {THREE.Mesh} mesh
   * @param {THREE.Matrix4} rootInverse
   * @param {Map<THREE.BufferGeometry, THREE.Mesh>} owners
   */
  function useWorldUv(mesh, rootInverse, owners, align) {
    if (worldUvOn.has(mesh) && mesh.geometry.userData.bpWorldUvAlign === align) return;
    let geo = mesh.geometry;
    const owner = owners.get(geo) || geo.userData.bpWorldUvOwner;
    if (owner && owner !== mesh) {
      geo = geo.clone();
      mesh.geometry = geo;
      delete geo.userData.bpWorldUv;
    }
    owners.set(geo, mesh);
    geo.userData.bpWorldUvOwner = mesh;
    if (!geo.userData.bpWorldUv || geo.userData.bpWorldUvAlign !== align) {
      const attr = worldUvAttribute(mesh, rootInverse, align);
      if (!attr) return;
      if (!("bpModelUv" in geo.userData)) geo.userData.bpModelUv = geo.getAttribute("uv") || null;
      geo.userData.bpWorldUv = attr;
      geo.userData.bpWorldUvAlign = align;
    }
    geo.setAttribute("uv", geo.userData.bpWorldUv);
    worldUvOn.add(mesh);
  }

  function restoreUvs() {
    for (const mesh of worldUvOn) {
      const geo = mesh.geometry;
      if (geo.userData.bpModelUv) geo.setAttribute("uv", geo.userData.bpModelUv);
      else geo.deleteAttribute("uv");
    }
    worldUvOn.clear();
  }

  /**
   * Fallback entry for a mesh nothing in the catalogue claims.
   * @param {string} part
   * @returns {import("./catalogue.js").CatalogueEntry}
   */
  function uncatalogued(part) {
    const look = UNCATALOGUED[part] || UNCATALOGUED.default;
    return {
      id: `uncatalogued:${part}`,
      name: `${part} (not in catalogue)`,
      description: "",
      selectors: [],
      baseColor: look.color,
      roughness: look.roughness,
      metalness: look.metalness,
      transmission: look.transmission || 0,
      opacity: 1,
      ior: look.transmission ? 1.5 : null,
      thickness: null,
      clearcoat: 0,
      clearcoatRoughness: 0.1,
      sheen: 0,
      sheenColor: null,
      sheenRoughness: 0.8,
      normalScale: 1,
      maps: {},
      tileSize: [1, 1],
      rotationDeg: 0,
      directional: false,
      status: "assumed",
      source: "",
      notes: "",
      pending: "",
    };
  }

  /**
   * Paint every part with catalogue materials. Call after `load()` resolves.
   * @param {Map<string, THREE.Object3D[]>} partsMap
   * @param {THREE.Object3D} root
   * @param {{
   *   clippingPlanes?: THREE.Plane[] | null,
   *   opacityByLabel?: Map<string, number> | null,
   *   edgeMode?: "none" | "transparent" | "opaque",
   * }} applyOpts
   */
  function apply(partsMap, root, applyOpts = {}) {
    if (!stage.enabled) stage.setEnabled(true);
    const planes = applyOpts.clippingPlanes ?? null;
    const edgeMode = applyOpts.edgeMode ?? "transparent";
    root.updateMatrixWorld(true);
    const rootInverse = root.matrixWorld.clone().invert();
    /** @type {Map<THREE.BufferGeometry, THREE.Mesh>} */
    const owners = new Map();
    /** @type {Map<string, { slot: any, meshes: THREE.Mesh[] }>} */
    const slotMeshes = new Map();
    for (const [label, objs] of partsMap) {
      const depthBias = LAYER_DEPTH_BIAS[label] ?? 0;
      /** @type {Map<string, { entry: import("./catalogue.js").CatalogueEntry, meshes: THREE.Mesh[] }>} */
      const groups = new Map();
      for (const obj of objs) {
        const mesh = /** @type {THREE.Mesh} */ (obj);
        if (!mesh.isMesh) continue;
        const info = infoOf(mesh);
        const slot = slots.length ? slotFor(slots, info) : null;
        if (slot && info.element) {
          replaced.add(mesh);
          const key = `${info.part}__${info.element}`;
          slotMeshes.set(key, { slot, meshes: [...(slotMeshes.get(key)?.meshes || []), mesh] });
        }
        const hit = resolveEntry(entries, info);
        const entry = hit ? hit.entry : uncatalogued(label);
        if (!groups.has(entry.id)) groups.set(entry.id, { entry, meshes: [] });
        groups.get(entry.id).meshes.push(mesh);
        useWorldUv(mesh, rootInverse, owners, entry.directional);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
      /** @type {Set<THREE.Material>} */
      const previous = new Set();
      let uiOpacity = 1;
      const byLabel = applyOpts.opacityByLabel;
      if (byLabel && byLabel.has(label)) uiOpacity = Number(byLabel.get(label)) || 0;
      for (const { entry, meshes } of groups.values()) {
        const mat = registry.create(entry, caps);
        finishMaterial(mat, planes, depthBias);
        for (const mesh of meshes) {
          const prev = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          for (const m of prev) if (m) previous.add(m);
          mesh.material = mat;
          mesh.userData.opaqueRenderOrder = depthBias;
          mesh.renderOrder = depthBias;
        }
        // presetOpacity (glass without transmission) is applied per material.
        applyOpacityToMeshes(meshes, uiOpacity, { edgeMode });
        for (const mesh of meshes) {
          if (replaced.has(mesh)) mesh.material = hiddenMat;
        }
      }
      previous.delete(hiddenMat);
      for (const m of previous) registry.release(m);
      disposeReplacedMaterials(previous);
    }
    for (const holder of placed.values()) holder.visible = false;
    for (const [key, { slot, meshes }] of slotMeshes) mountSlot(key, slot, meshes);
    const box = new THREE.Box3().setFromObject(root);
    stage.fit(box);
    paintStageFloor(rootInverse);
  }

  /**
   * After edges and section caps are rebuilt: the generated box a glTF stands
   * in for keeps no visible outline or cut face.
   */
  function afterRefresh() {
    for (const mesh of replaced) {
      for (const child of mesh.children) {
        if (child.userData?.isEdgeOverlay || child.userData?.isSectionCap) child.visible = false;
      }
    }
  }

  /** @type {THREE.Material | null} */
  let floorMat = null;

  /**
   * The models have no floor slabs yet, so the staging floor wears the
   * catalogue's room-floor finish (`STAGE_FLOOR_MATERIAL`, a `pending` entry
   * for exactly that surface). Without it the floor stays a neutral grey.
   * @param {THREE.Matrix4} rootInverse
   */
  function paintStageFloor(rootInverse) {
    const floor = stage.floor;
    const entry = registry.entry(STAGE_FLOOR_MATERIAL);
    if (!entry) return;
    const hit = { entry };
    floor.updateMatrixWorld(true);
    floor.geometry.setAttribute("uv", worldUvAttribute(floor, rootInverse));
    if (floorMat?.userData.bpCatalogueId === hit.entry.id) return;
    if (floorMat) {
      registry.release(floorMat);
      disposeReplacedMaterials([floorMat]);
    }
    floorMat = registry.create(hit.entry, caps);
    finishMaterial(floorMat, null, 0);
    floor.material = floorMat;
  }

  /** Leave Realistic: GLB UVs back, shadows off, classic rig back. */
  function leave(partsMap) {
    restoreUvs();
    for (const holder of placed.values()) holder.visible = false;
    for (const objs of partsMap.values()) {
      for (const obj of objs) {
        obj.castShadow = false;
        obj.receiveShadow = false;
      }
    }
    stage.setEnabled(false);
  }

  /** Coverage of the loaded model, for `window.blueprintsRealistic.report()`. */
  function report(partsMap) {
    const infos = [];
    for (const objs of partsMap.values()) {
      for (const obj of objs) if (obj.isMesh) infos.push(infoOf(/** @type {THREE.Mesh} */ (obj)));
    }
    const cov = catalogueCoverage(entries, infos);
    return {
      tier,
      budget,
      entries: entries.length,
      errors,
      warnings,
      unused: cov.unused,
      unresolved: [...new Set(cov.unresolved.map((i) => `${i.part}${i.element ? `/${i.element}` : ""}`))],
      ties: cov.ties.map((t) => ({ mesh: `${t.info.part}/${t.info.element}`, ids: t.ids })),
      failedTextures: registry.failedTextures(),
    };
  }

  return { load, apply, afterRefresh, leave, stage, registry, report, tier, budget, caps };
}
