/**
 * Window panes slide open and shut over the same 500 ms ease as a door leaf
 * (doors.js `sampleDoor`). A pane is several face meshes in the glTF (the
 * export splits a box into faces); all of them move together, by 80 % of
 * the widest face along the parent's +X. The end faces have no X extent, so
 * sizing each face on its own left them behind.
 */
import { sampleDoor } from "./doors.js";

/** Share of the pane width a window slides when open. */
export const WINDOW_TRAVEL = 0.8;
/** Pane width when the geometry has none. */
export const WINDOW_FALLBACK_WIDTH_M = 0.4;

export function createWindowSlides() {
  /** @type {Map<string, { meshes: object[], travel: number, goal: number, anim: object | null, shown: number | null }>} */
  const slides = new Map();

  function stateOf(key, meshes) {
    let st = slides.get(key);
    if (st) return st;
    let width = 0;
    for (const mesh of meshes) {
      if (!mesh.userData.bpSlideOrigin) mesh.userData.bpSlideOrigin = mesh.position.clone();
      const geom = mesh.geometry;
      if (geom && !geom.boundingBox) geom.computeBoundingBox?.();
      if (geom?.boundingBox) width = Math.max(width, geom.boundingBox.max.x - geom.boundingBox.min.x);
    }
    st = { meshes, travel: (width || WINDOW_FALLBACK_WIDTH_M) * WINDOW_TRAVEL, goal: 0, anim: null, shown: 0 };
    slides.set(key, st);
    return st;
  }

  /**
   * Start sliding a pane open or shut from wherever it is now.
   * @param {string} key element globalId
   * @param {object[]} meshes the pane's meshes (used the first time only)
   * @param {boolean} open
   * @param {number} now
   */
  function slide(key, meshes, open, now) {
    const st = stateOf(key, meshes);
    const from = sampleDoor(st, now);
    st.goal = open ? 1 : 0;
    st.anim = { from, to: st.goal, t0: now };
    st.shown = null;
  }

  /**
   * Place every pane for `now`.
   * @returns {boolean} true when anything moved this frame
   */
  function step(now) {
    let moved = false;
    for (const st of slides.values()) {
      if (!st.anim && st.shown === st.goal) continue;
      const amount = sampleDoor(st, now);
      for (const mesh of st.meshes) {
        mesh.position.copy(mesh.userData.bpSlideOrigin);
        mesh.position.x += st.travel * amount;
      }
      st.shown = st.anim ? null : st.goal;
      moved = true;
    }
    return moved;
  }

  return { slide, step, slides };
}
