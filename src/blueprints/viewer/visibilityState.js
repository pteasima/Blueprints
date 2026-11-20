/**
 * Remembered visibility per model (Petr, 2026-11-19: "remember state
 * locally (doesn't get reflected in URL, as that would be super verbose)").
 *
 * One localStorage entry per model holds the Parts opacities, the leaves
 * detached from their group, inspector hides, locks and the room isolate.
 * Nothing here touches the URL; an explicit `?cables=1` / `?<layer>=1`
 * still wins on load (main.js). The Parts panel's Reset clears the entry.
 *
 * Locks (docs/viewer/VisibilityState.md): a lock id is a Parts group or
 * leaf id, or `ifc:<GlobalId>` for an inspector row. A locked item keeps
 * whatever visibility it had: group toggles, scenes, inspector
 * hide-others and room isolate leave it alone, and its own control is
 * disabled until it is unlocked.
 */

export const VISIBILITY_STORAGE_PREFIX = "blueprints.visibility.";
export const VISIBILITY_VERSION = 1;
/** Prefix of lock ids that name an IFC element or group (inspector rows). */
export const IFC_LOCK_PREFIX = "ifc:";

/**
 * @param {string} modelId
 */
export function storageKey(modelId) {
  return `${VISIBILITY_STORAGE_PREFIX}${String(modelId || "").trim()}`;
}

/** @param {unknown} v */
function strings(v) {
  return Array.isArray(v) ? [...new Set(v.filter((s) => typeof s === "string" && s))] : [];
}

/**
 * Normalise a stored (or hand-made) state. Unknown keys are dropped; a
 * missing `locks` stays `null` so the model's default locks apply.
 * @param {unknown} raw
 */
export function sanitizeState(raw) {
  const src = raw && typeof raw === "object" ? /** @type {Record<string, any>} */ (raw) : {};
  /** @type {Record<string, number>} */
  const opacity = {};
  if (src.opacity && typeof src.opacity === "object") {
    for (const [k, v] of Object.entries(src.opacity)) {
      const n = Number(v);
      if (k && Number.isFinite(n)) opacity[k] = Math.max(0, Math.min(1, n));
    }
  }
  /** @type {Record<string, number>} */
  const groupSlider = {};
  if (src.groupSlider && typeof src.groupSlider === "object") {
    for (const [k, v] of Object.entries(src.groupSlider)) {
      const n = Number(v);
      if (k && Number.isFinite(n)) groupSlider[k] = Math.max(0, Math.min(1, n));
    }
  }
  return {
    v: VISIBILITY_VERSION,
    opacity,
    groupSlider,
    detached: strings(src.detached),
    locks: Array.isArray(src.locks) ? strings(src.locks) : null,
    ifcHidden: strings(src.ifcHidden),
    roomIsolate: Boolean(src.roomIsolate),
  };
}

/**
 * @param {Storage | null | undefined} storage
 * @param {string} modelId
 * @returns {ReturnType<typeof sanitizeState> | null}
 */
export function loadVisibility(storage, modelId) {
  if (!storage || !modelId) return null;
  try {
    const text = storage.getItem(storageKey(modelId));
    if (!text) return null;
    const raw = JSON.parse(text);
    if (!raw || typeof raw !== "object" || raw.v !== VISIBILITY_VERSION) return null;
    return sanitizeState(raw);
  } catch {
    return null;
  }
}

/**
 * @param {Storage | null | undefined} storage
 * @param {string} modelId
 * @param {unknown} state
 */
export function saveVisibility(storage, modelId, state) {
  if (!storage || !modelId) return false;
  try {
    storage.setItem(storageKey(modelId), JSON.stringify(sanitizeState(state)));
    return true;
  } catch {
    return false;
  }
}

/**
 * @param {Storage | null | undefined} storage
 * @param {string} modelId
 */
export function clearVisibility(storage, modelId) {
  if (!storage || !modelId) return;
  try {
    storage.removeItem(storageKey(modelId));
  } catch {
    /* private mode */
  }
}

/**
 * Ids of outline groups the model locks by default (`"locked": true` in
 * `<model>.parts.json`).
 * @param {object[]} outline resolved outline (materials.resolvePartOutline)
 * @returns {string[]}
 */
export function defaultLocks(outline) {
  /** @type {string[]} */
  const out = [];
  const walk = (nodes) => {
    for (const node of nodes || []) {
      if (!node || node.type !== "group") continue;
      if (node.locked) out.push(node.id);
      walk(node.children);
    }
  };
  walk(outline);
  return out;
}

/**
 * Where each outline row's lock comes from: "self" (its own padlock),
 * "inherited" (a locked ancestor group) or absent (unlocked). Keys are
 * group and leaf ids.
 * @param {object[]} outline
 * @param {Iterable<string>} locks
 * @returns {Map<string, "self" | "inherited">}
 */
export function lockStates(outline, locks) {
  const set = new Set(locks);
  /** @type {Map<string, "self" | "inherited">} */
  const out = new Map();
  const walk = (nodes, inherited) => {
    for (const node of nodes || []) {
      if (!node) continue;
      const self = set.has(node.id);
      if (self) out.set(node.id, "self");
      else if (inherited) out.set(node.id, "inherited");
      if (node.type === "group") walk(node.children, inherited || self);
    }
  };
  walk(outline, false);
  return out;
}

/**
 * Leaf ids that are locked, directly or through a group.
 * @param {object[]} outline
 * @param {Iterable<string>} locks
 * @returns {Set<string>}
 */
export function lockedLeafIds(outline, locks) {
  const states = lockStates(outline, locks);
  /** @type {Set<string>} */
  const out = new Set();
  const walk = (nodes) => {
    for (const node of nodes || []) {
      if (!node) continue;
      if (node.type === "group") walk(node.children);
      else if (states.has(node.id)) out.add(node.id);
    }
  };
  walk(outline);
  return out;
}

/**
 * True when an IFC element is locked through itself, a spatial ancestor,
 * or an IfcGroup it (or a group above it) belongs to.
 * @param {{ elements: Record<string, any> }} index
 * @param {string} globalId
 * @param {Set<string>} ifcLocks GlobalIds (without the `ifc:` prefix)
 */
export function ifcElementLocked(index, globalId, ifcLocks) {
  if (!ifcLocks || !ifcLocks.size) return false;
  const seen = new Set();
  const stack = [globalId];
  while (stack.length) {
    const id = stack.pop();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    if (ifcLocks.has(id)) return true;
    const el = index?.elements?.[id];
    if (!el) continue;
    if (el.parentId) stack.push(el.parentId);
    if (el.containerId) stack.push(el.containerId);
    for (const g of el.groups || []) stack.push(g);
    for (const g of el.parentGroupIds || []) stack.push(g);
  }
  return false;
}

/**
 * Explicit layer switches in the URL (`?cables=1`, `?gridfinity=0`).
 * @param {string} search location.search
 * @param {string} id
 * @returns {boolean | null} null when the URL says nothing
 */
export function urlLayerSwitch(search, id) {
  try {
    const v = new URLSearchParams(search || "").get(id);
    if (v === "1") return true;
    if (v === "0") return false;
  } catch {
    /* ignore */
  }
  return null;
}
