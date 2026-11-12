/**
 * Windows: which panes open, and sliding them open and shut.
 *
 * Records come from the model (`docs/models/<id>.windows.json`,
 * models/ground_floor.py `_window_motion`): per window `operable` and its
 * `panels`, each with an IFC panel `operation` (FIXEDCASEMENT,
 * SLIDINGHORIZONTAL, or NOTDEFINED where the sources do not say), its world
 * box (`min`/`max`, glTF metres) and `slide`, the full opening move (zero
 * for a fixed pane). The glTF splits each pane into face meshes, so a mesh
 * belongs to the panel whose box holds its centre.
 *
 * Only moving panes animate, over the same 500 ms ease as a door leaf
 * (doors.js `sampleDoor`); every face of a pane moves together. A window
 * with no moving pane is fixed glazing: it claims no taps and has no tap
 * target, so a tap on it goes through to whatever is behind (main.js).
 *
 * A window without a record keeps the pre-panel behaviour: the whole pane
 * slides 80 % of its width along the parent's +X.
 */
import * as THREE from "three";
import { sampleDoor } from "./doors.js";

/** Share of the pane width a window slides when open (no record). */
export const WINDOW_TRAVEL = 0.8;
/** Pane width when the geometry has none. */
export const WINDOW_FALLBACK_WIDTH_M = 0.4;
/** Slack around a panel box when sorting face meshes into panels, metres. */
export const WINDOW_PANEL_SLACK_M = 0.01;

const ZERO_EPS = 1e-9;

/**
 * @param {{ slide?: number[] } | null | undefined} panel
 * @returns {boolean}
 */
export function panelMoves(panel) {
  const s = Array.isArray(panel?.slide) ? panel.slide.map(Number) : [];
  return s.length === 3 && s.some((v) => Math.abs(v) > ZERO_EPS);
}

/**
 * @param {{ operable?: boolean, panels?: object[] } | null | undefined} record
 * @returns {boolean} true when at least one pane of the window opens
 */
export function windowOperable(record) {
  if (!record) return true; // no record: legacy whole-pane slide
  if (record.operable === false) return false;
  return Array.isArray(record.panels) && record.panels.some(panelMoves);
}

/**
 * Index of the panel whose box holds `center` (world, metres), or -1.
 * @param {{ panels?: { min: number[], max: number[] }[] }} record
 * @param {number[]} center
 */
export function panelIndexAt(record, center) {
  const panels = Array.isArray(record?.panels) ? record.panels : [];
  let best = -1;
  let bestD = Infinity;
  panels.forEach((panel, i) => {
    if (!Array.isArray(panel.min) || !Array.isArray(panel.max)) return;
    let inside = true;
    let d = 0;
    for (let k = 0; k < 3; k++) {
      const lo = Number(panel.min[k]) - WINDOW_PANEL_SLACK_M;
      const hi = Number(panel.max[k]) + WINDOW_PANEL_SLACK_M;
      if (center[k] < lo || center[k] > hi) inside = false;
      const mid = (Number(panel.min[k]) + Number(panel.max[k])) / 2;
      d += (center[k] - mid) ** 2;
    }
    if (inside && d < bestD) {
      best = i;
      bestD = d;
    }
  });
  return best;
}

const _box = new THREE.Box3();
const _c = new THREE.Vector3();

function worldCenterOf(mesh) {
  const geom = mesh.geometry;
  if (geom && !geom.boundingBox) geom.computeBoundingBox?.();
  mesh.updateWorldMatrix?.(true, false);
  if (geom?.boundingBox) {
    _box.copy(geom.boundingBox).applyMatrix4(mesh.matrixWorld);
    _box.getCenter(_c);
  } else {
    mesh.getWorldPosition(_c);
  }
  return [_c.x, _c.y, _c.z];
}

/**
 * @param {object[]} [records] window records from the model
 */
export function createWindowSlides(records = []) {
  /** @type {Map<string, object>} */
  const byId = new Map();
  for (const record of Array.isArray(records) ? records : []) {
    if (record && record.id) byId.set(String(record.id), record);
  }
  /**
   * key → { moving: { mesh, slideLocal }[], fixed: Set<mesh>, panelOf: Map<mesh, number>, goal, anim, shown }
   * @type {Map<string, object>}
   */
  const slides = new Map();

  function legacyState(meshes) {
    let width = 0;
    for (const mesh of meshes) {
      const geom = mesh.geometry;
      if (geom && !geom.boundingBox) geom.computeBoundingBox?.();
      if (geom?.boundingBox) width = Math.max(width, geom.boundingBox.max.x - geom.boundingBox.min.x);
    }
    const travel = (width || WINDOW_FALLBACK_WIDTH_M) * WINDOW_TRAVEL;
    return {
      record: null,
      moving: meshes.map((mesh) => ({ mesh, slideLocal: new THREE.Vector3(travel, 0, 0), panel: 0 })),
      fixed: new Set(),
      panelOf: new Map(meshes.map((m) => [m, 0])),
    };
  }

  function recordState(record, meshes) {
    const moving = [];
    const fixed = new Set();
    const panelOf = new Map();
    for (const mesh of meshes) {
      const c = worldCenterOf(mesh);
      const i = panelIndexAt(record, c);
      const panel = i >= 0 ? record.panels[i] : null;
      panelOf.set(mesh, i);
      if (!panel || !panelMoves(panel)) {
        fixed.add(mesh);
        continue;
      }
      const s = panel.slide.map(Number);
      const parent = mesh.parent;
      let slideLocal = new THREE.Vector3(s[0], s[1], s[2]);
      if (parent) {
        parent.updateWorldMatrix(true, false);
        const a = parent.worldToLocal(new THREE.Vector3(c[0], c[1], c[2]));
        const b = parent.worldToLocal(new THREE.Vector3(c[0] + s[0], c[1] + s[1], c[2] + s[2]));
        slideLocal = b.sub(a);
      }
      moving.push({ mesh, slideLocal, panel: i });
    }
    return { record, moving, fixed, panelOf };
  }

  function stateOf(key, meshes) {
    let st = slides.get(key);
    if (st) return st;
    const record = byId.get(String(key)) || null;
    const parts = record ? recordState(record, meshes) : legacyState(meshes);
    for (const { mesh } of parts.moving) {
      if (!mesh.userData.bpSlideOrigin) mesh.userData.bpSlideOrigin = mesh.position.clone();
    }
    st = { ...parts, goal: 0, anim: null, shown: 0 };
    slides.set(key, st);
    return st;
  }

  /** @param {string} key */
  function recordOf(key) {
    return byId.get(String(key)) || null;
  }

  /**
   * True when the window has a pane that opens.
   * @param {string} key element yaml id
   */
  function isOperable(key) {
    return windowOperable(recordOf(key));
  }

  /**
   * The meshes of the panes that open (all of them without a record).
   * @param {string} key
   * @param {object[]} meshes every mesh of the window
   */
  function operableMeshes(key, meshes) {
    if (!isOperable(key)) return [];
    const st = stateOf(key, meshes);
    const set = new Set(st.moving.map((m) => m.mesh));
    return meshes.filter((m) => set.has(m));
  }

  /**
   * True when `obj` (a hit mesh or one of its children) is a pane of this
   * window that opens. Fixed glazing never accepts a tap.
   * @param {string} key
   * @param {object[]} meshes every mesh of the window
   * @param {object | null | undefined} obj
   */
  function acceptsHit(key, meshes, obj) {
    const opens = new Set(operableMeshes(key, meshes));
    if (!opens.size) return false;
    if (!obj) return true;
    for (let n = obj; n; n = n.parent) if (opens.has(n)) return true;
    return false;
  }

  /**
   * Start sliding the moving panes open or shut from wherever they are now.
   * A fixed window does nothing.
   * @param {string} key element yaml id
   * @param {object[]} meshes the window's meshes (used the first time only)
   * @param {boolean} open
   * @param {number} now
   * @returns {boolean} false when nothing can move
   */
  function slide(key, meshes, open, now) {
    if (!isOperable(key)) return false;
    const st = stateOf(key, meshes);
    if (!st.moving.length) return false;
    const from = sampleDoor(st, now);
    st.goal = open ? 1 : 0;
    st.anim = { from, to: st.goal, t0: now };
    st.shown = null;
    return true;
  }

  /**
   * World slide of the first moving pane (for the feedback arrow), or null.
   * @param {string} key
   * @returns {number[] | null}
   */
  function slideOf(key) {
    const record = recordOf(key);
    const panel = record?.panels?.find(panelMoves);
    return panel ? panel.slide.map(Number) : null;
  }

  /**
   * Place every moving pane for `now`.
   * @returns {boolean} true when anything moved this frame
   */
  function step(now) {
    let moved = false;
    for (const st of slides.values()) {
      if (!st.anim && st.shown === st.goal) continue;
      const amount = sampleDoor(st, now);
      for (const { mesh, slideLocal } of st.moving) {
        mesh.position.copy(mesh.userData.bpSlideOrigin).addScaledVector(slideLocal, amount);
      }
      st.shown = st.anim ? null : st.goal;
      moved = true;
    }
    return moved;
  }

  return { slide, step, slides, isOperable, operableMeshes, acceptsHit, slideOf, recordOf };
}
