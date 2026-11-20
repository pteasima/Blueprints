/**
 * Remembered camera per model (Petr, 2026-11-20: "make it remember last
 * camera position locally. No need for a reset button, as I can use
 * scenes to reset.").
 *
 * One localStorage entry per model, `blueprints.camera.<model>`, next to
 * `blueprints.visibility.<model>`. Nothing here touches the URL; an
 * explicit `?scene=` still wins on load (main.js). Applying a scene or
 * a built-in view just moves the camera, and that new pose is then saved.
 */

export const CAMERA_STORAGE_PREFIX = "blueprints.camera.";
export const CAMERA_VERSION = 1;
const READABLE_VERSIONS = new Set([CAMERA_VERSION]);
/** How far from the model centre, in model spans, a saved camera may be. */
export const CAMERA_BOUNDS_SPANS = 50;

/**
 * @param {string} modelId
 */
export function cameraStorageKey(modelId) {
  return `${CAMERA_STORAGE_PREFIX}${String(modelId || "").trim()}`;
}

/** @param {unknown} v */
function vec3(v) {
  if (!Array.isArray(v) || v.length < 3) return null;
  const x = Number(v[0]);
  const y = Number(v[1]);
  const z = Number(v[2]);
  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) return null;
  return [x, y, z];
}

/** @param {number[]} a @param {number[]} b */
function distSq(a, b) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  const dz = a[2] - b[2];
  return dx * dx + dy * dy + dz * dz;
}

/**
 * @param {{ min?: unknown, max?: unknown, center?: unknown, span?: unknown } | null | undefined} bounds
 * @returns {{ center: number[], span: number } | null}
 */
export function boundsFromBox(bounds) {
  if (!bounds || typeof bounds !== "object") return null;
  const min = vec3(bounds.min);
  const max = vec3(bounds.max);
  if (min && max) {
    return {
      center: [
        (min[0] + max[0]) / 2,
        (min[1] + max[1]) / 2,
        (min[2] + max[2]) / 2,
      ],
      span: Math.max(max[0] - min[0], max[1] - min[1], max[2] - min[2], 0),
    };
  }
  const center = vec3(bounds.center);
  const span = Number(bounds.span);
  if (center && Number.isFinite(span) && span >= 0) return { center, span };
  return null;
}

/**
 * @param {number[]} position
 * @param {number[]} target
 * @param {{ min?: unknown, max?: unknown, center?: unknown, span?: unknown } | null | undefined} bounds
 */
export function cameraInBounds(position, target, bounds) {
  const b = boundsFromBox(bounds);
  if (!b) return true;
  const limit = Math.max(b.span, 1) * CAMERA_BOUNDS_SPANS;
  const limitSq = limit * limit;
  return distSq(position, b.center) <= limitSq && distSq(target, b.center) <= limitSq;
}

/**
 * Normalise a stored (or hand-made) camera. Corrupt, incomplete, or
 * out-of-bounds values become `null`.
 * @param {unknown} raw
 * @param {{ min?: unknown, max?: unknown, center?: unknown, span?: unknown } | null | undefined} [bounds]
 */
export function sanitizeCameraState(raw, bounds) {
  const src = raw && typeof raw === "object" ? /** @type {Record<string, any>} */ (raw) : null;
  if (!src) return null;
  const position = vec3(src.position);
  const target = vec3(src.target);
  if (!position || !target) return null;
  const mode = src.mode === "walk" ? "walk" : src.mode === "orbit" ? "orbit" : null;
  if (!mode) return null;
  // An orbit camera needs a direction; a walk pose can look with yaw/pitch.
  if (mode === "orbit" && distSq(position, target) < 1e-12) return null;
  if (!cameraInBounds(position, target, bounds)) return null;
  /** @type {{ v: number, mode: "orbit" | "walk", position: number[], target: number[], heightCm?: number }} */
  const out = { v: CAMERA_VERSION, mode, position, target };
  const height = Number(src.heightCm);
  if (Number.isFinite(height) && height >= 50 && height <= 250) out.heightCm = height;
  return out;
}

/**
 * @param {Storage | null | undefined} storage
 * @param {string} modelId
 * @param {{ min?: unknown, max?: unknown, center?: unknown, span?: unknown } | null | undefined} [bounds]
 * @returns {ReturnType<typeof sanitizeCameraState>}
 */
export function loadCamera(storage, modelId, bounds) {
  if (!storage || !modelId) return null;
  try {
    const text = storage.getItem(cameraStorageKey(modelId));
    if (!text) return null;
    const raw = JSON.parse(text);
    if (!raw || typeof raw !== "object" || !READABLE_VERSIONS.has(raw.v)) return null;
    return sanitizeCameraState(raw, bounds);
  } catch {
    return null;
  }
}

/**
 * @param {Storage | null | undefined} storage
 * @param {string} modelId
 * @param {unknown} state
 */
export function saveCamera(storage, modelId, state) {
  if (!storage || !modelId) return false;
  const clean = sanitizeCameraState(state);
  if (!clean) return false;
  try {
    storage.setItem(cameraStorageKey(modelId), JSON.stringify(clean));
    return true;
  } catch {
    return false;
  }
}

/**
 * True when the URL itself asks for a camera: a non-empty `?scene=`.
 * That wins over a remembered camera (main.js only applies it when the
 * id matches a known scene).
 * @param {string} search location.search
 */
export function urlOverridesCamera(search) {
  try {
    const v = new URLSearchParams(search || "").get("scene");
    if (v != null && String(v).trim()) return true;
  } catch {
    /* ignore */
  }
  return false;
}
