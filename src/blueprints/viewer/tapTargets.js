/**
 * Extended tap targets (Petr, 2026-11-12).
 *
 * The object itself is always a tap target. A tap that lands on no
 * interactive geometry is then matched against a flat 44 pt circle (Apple
 * HIG minimum hit target) drawn on screen around the centre of each
 * interactive target, as seen from the current camera, with no perspective.
 * Each rocker half is its own target, so on a switch seen from afar the up
 * half owns the space above and the down half the space below.
 *
 * When circles overlap, the target nearest the camera wins. Within
 * `DEPTH_TIE_M` (or between halves of one element) the centre nearest the
 * finger wins. A target whose centre is off screen, behind the camera, or
 * hidden behind an opaque solid is skipped.
 *
 * The pure selection (`pickExtendedTarget`, `findDirectHit`) has no Three.js
 * state; the projection and occlusion helpers below take a camera and root.
 */
import * as THREE from "three";

/** Apple HIG minimum hit target, in points (= CSS px on iOS). */
export const TAP_TARGET_PX = 44;
/**
 * An opaque solid must sit this far in front of an interactive before it
 * hides it. Covers faceplates flush with the wall and leaves inside a reveal;
 * interior walls are thicker than this.
 */
export const OCCLUSION_TOLERANCE_M = 0.05;
/** Depths closer than this count as a tie; the nearer centre on screen wins. */
export const DEPTH_TIE_M = 0.05;

/**
 * True when every material on `obj` would hide what is behind it. Faded parts
 * (opacity slider) and glass are see-through and do not occlude.
 * @param {object | null | undefined} obj
 */
export function isOpaqueMaterialOf(obj) {
  const mat = obj && obj.material;
  if (!mat) return false;
  const list = Array.isArray(mat) ? mat : [mat];
  if (!list.length) return false;
  return list.every((m) => m && m.visible !== false && !(m.transparent && (m.opacity ?? 1) < 0.99));
}

/**
 * Pass 1: the nearest interactive solid on the ray, unless an opaque solid
 * sits more than `tolerance` in front of it.
 * @param {{ object: object, distance?: number }[]} solids nearest first
 * @param {(hit: object) => object | null} claimOf
 * @param {{ isOccluder?: (obj: object) => boolean, tolerance?: number }} [opts]
 * @returns {{ hit: object | null, claim: object | null, wallT: number }}
 *   `wallT` is the distance to the first opaque non-interactive solid.
 */
export function findDirectHit(solids, claimOf, opts = {}) {
  const isOccluder = opts.isOccluder || isOpaqueMaterialOf;
  const tol = opts.tolerance ?? OCCLUSION_TOLERANCE_M;
  let wallT = Infinity;
  for (const hit of solids) {
    const d = Number.isFinite(hit.distance) ? hit.distance : 0;
    if (d > wallT + tol) break;
    const claim = claimOf(hit);
    if (claim) return { hit, claim, wallT };
    if (wallT === Infinity && isOccluder(hit.object)) wallT = d;
  }
  return { hit: null, claim: null, wallT };
}

/**
 * Pass 2 selection. Candidates carry their projected centre (`x`, `y` in CSS
 * px), camera depth, and an optional `group` (same element). `isOccluded` is
 * only asked about candidates whose circle contains the tap.
 * @template {{ x: number, y: number, depth: number, group?: string }} T
 * @param {T[]} candidates
 * @param {{ x: number, y: number }} tap
 * @param {{ diameterPx?: number, depthTie?: number, isOccluded?: (c: T) => boolean }} [opts]
 * @returns {T | null}
 */
export function pickExtendedTarget(candidates, tap, opts = {}) {
  const r = (opts.diameterPx ?? TAP_TARGET_PX) / 2;
  const tie = opts.depthTie ?? DEPTH_TIE_M;
  const inside = [];
  for (const c of candidates) {
    if (!c || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !(c.depth > 0)) continue;
    const dist = Math.hypot(c.x - tap.x, c.y - tap.y);
    if (dist > r) continue;
    inside.push({ c, dist });
  }
  const seen = opts.isOccluded ? inside.filter((item) => !opts.isOccluded(item.c)) : inside;
  if (!seen.length) return null;
  let front = seen[0];
  for (const item of seen) if (item.c.depth < front.c.depth) front = item;
  let best = null;
  for (const item of seen) {
    const tied =
      item.c.depth <= front.c.depth + tie ||
      (front.c.group != null && item.c.group === front.c.group);
    if (!tied) continue;
    if (!best || item.dist < best.dist || (item.dist === best.dist && item.c.depth < best.c.depth)) {
      best = item;
    }
  }
  return best ? best.c : null;
}

const _v = new THREE.Vector3();

/**
 * Screen position (CSS px from the canvas top-left) and view depth of a world
 * point, or null when it is behind the camera or off screen.
 * @param {THREE.Vector3} center
 * @param {THREE.Camera} camera
 * @param {{ w: number, h: number }} size
 */
export function projectTarget(center, camera, size) {
  camera.updateMatrixWorld?.();
  _v.copy(center).applyMatrix4(camera.matrixWorldInverse);
  const depth = -_v.z;
  if (!(depth > 0)) return null;
  _v.copy(center).project(camera);
  if (!(Math.abs(_v.x) <= 1 && Math.abs(_v.y) <= 1) || !(_v.z >= -1 && _v.z <= 1)) return null;
  return { x: ((_v.x + 1) / 2) * size.w, y: ((1 - _v.y) / 2) * size.h, depth };
}

const _occRay = new THREE.Raycaster();
const _ndc = new THREE.Vector2();

/**
 * True when an opaque solid that `owns` does not claim sits more than
 * `tolerance` in front of `center` on the line of sight.
 * @param {THREE.Vector3} center
 * @param {THREE.Camera} camera
 * @param {THREE.Object3D} root
 * @param {(obj: object) => boolean} owns
 * @param {{ keep?: (obj: object) => boolean, isOccluder?: (obj: object) => boolean, tolerance?: number }} [opts]
 */
export function centerOccluded(center, camera, root, owns, opts = {}) {
  const keep = opts.keep || (() => true);
  const isOccluder = opts.isOccluder || isOpaqueMaterialOf;
  const tol = opts.tolerance ?? OCCLUSION_TOLERANCE_M;
  let dist;
  if (camera.isOrthographicCamera) {
    _v.copy(center).project(camera);
    _ndc.set(_v.x, _v.y);
    _occRay.setFromCamera(_ndc, camera);
    dist = _v.copy(center).sub(_occRay.ray.origin).dot(_occRay.ray.direction);
  } else {
    const origin = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
    const dir = _v.copy(center).sub(origin);
    dist = dir.length();
    if (dist < 1e-9) return false;
    _occRay.set(origin, dir.normalize());
  }
  // Fat edge lines (LineSegments2) read the raycaster's camera; without it
  // their raycast throws and the whole tap is lost.
  _occRay.camera = camera;
  _occRay.near = 0;
  _occRay.far = Math.max(0, dist);
  const hits = _occRay.intersectObject(root, true);
  for (const hit of hits) {
    if (hit.distance >= dist - tol) break;
    if (!keep(hit.object) || owns(hit.object)) continue;
    if (isOccluder(hit.object)) return true;
  }
  return false;
}

/**
 * Centres of the rocker halves of a wall switch, from its world box. Up is
 * world +Y. Left/right runs along the box's longer horizontal side, oriented
 * by the camera's right vector, so `rocker-1` is the left half as seen
 * (homeLive.js `pressTarget`).
 * @param {THREE.Box3} box
 * @param {string[]} rockers
 * @param {THREE.Vector3} cameraRight
 * @returns {{ rocker: string, position: "up" | "down", center: THREE.Vector3 }[]}
 */
export function switchTargetCenters(box, rockers, cameraRight) {
  const c = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const qh = size.y / 4;
  const axis = size.x >= size.z ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 0, 1);
  if (axis.dot(cameraRight) < 0) axis.negate();
  const qw = Math.max(size.x, size.z) / 4;
  const out = [];
  rockers.forEach((rocker, i) => {
    const col = c.clone();
    if (rockers.length > 1) col.addScaledVector(axis, i === 0 ? -qw : qw);
    out.push({ rocker, position: "up", center: col.clone().setY(col.y + qh) });
    out.push({ rocker, position: "down", center: col.clone().setY(col.y - qh) });
  });
  return out;
}
