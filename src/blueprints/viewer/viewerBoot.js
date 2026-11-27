/**
 * Small viewer helpers shared by main.js: scene URL, lazy-feature loader,
 * and cable / on-demand layer constants.
 */
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

/** Layer leaf id of the cable routes (under the "electrical" group). */
const CABLE_LEAF = "cables";

/** The part groups with the cable leaf added under "electrical" (else it lands in "other"). */
function withCableLeaf(groups) {
  const src = Array.isArray(groups) ? groups : [];
  let placed = false;
  const walk = (nodes) =>
    nodes.map((node) => {
      if (!node || typeof node !== "object") return node;
      const children = walk(node.children || []);
      if (node.id === "electrical" && !placed) {
        placed = true;
        return { ...node, children: [...children, CABLE_LEAF] };
      }
      return { ...node, children };
    });
  return walk(src);
}

/**
 * On-demand layers start on (Petr, 2026-11-20: "put back gridfinity
 * baseplates"; cheap since mergePrimitives.js, docs/viewer/Performance.md).
 */
const LAZY_LAYER_DEFAULT_ON = true;

/**
 * Load a lazy feature chunk (build.mjs) and hand its module to `init`. A
 * failed load leaves that feature off instead of breaking the viewer.
 * @template T
 * @param {string} name
 * @param {() => Promise<T>} load
 * @param {(mod: T) => void} init
 */
function loadFeature(name, load, init) {
  return load()
    .then(init)
    .catch((err) => console.error(`Viewer feature "${name}" did not load:`, err));
}

export {
  SCENE_QUERY,
  readSceneQuery,
  writeSceneQuery,
  CABLE_LEAF,
  withCableLeaf,
  LAZY_LAYER_DEFAULT_ON,
  loadFeature,
};
