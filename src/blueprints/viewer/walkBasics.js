/**
 * The walk-mode pieces the viewer entry needs before walk mode loads: person
 * height limits and snapping (View → Height slider), eye height, and a
 * camera's yaw and pitch (restoring a saved walk pose). walkMode.js and
 * walkPhysics.js (with three-mesh-bvh) are a lazy chunk (build.mjs); both
 * re-export these, so their callers and tests are unchanged.
 */
import * as THREE from "three";

/** Person-height slider (cm). */
export const HEIGHT_MIN_CM = 100;
export const HEIGHT_MAX_CM = 210;
export const HEIGHT_DEFAULT_CM = 186;
/** Snap points Petr asked for (2026-11-13). */
export const HEIGHT_DETENTS_CM = [174, 186];
/** A slider value this close to a detent lands on it. */
export const HEIGHT_SNAP_CM = 3;
/** Eye height as a share of body height (adult anthropometry, ~0.93). */
export const EYE_RATIO = 0.93;

/**
 * Clamp, round to whole cm, then snap to a detent within `HEIGHT_SNAP_CM`.
 * @param {number} cm
 */
export function snapHeightCm(cm) {
  let v = Number(cm);
  if (!Number.isFinite(v)) v = HEIGHT_DEFAULT_CM;
  v = Math.round(Math.min(HEIGHT_MAX_CM, Math.max(HEIGHT_MIN_CM, v)));
  let best = v;
  let bestD = Infinity;
  for (const d of HEIGHT_DETENTS_CM) {
    const dist = Math.abs(v - d);
    if (dist <= HEIGHT_SNAP_CM && dist < bestD) {
      best = d;
      bestD = dist;
    }
  }
  return best;
}

/** @param {number} heightCm */
export function eyeHeightM(heightCm) {
  return (snapHeightCm(heightCm) / 100) * EYE_RATIO;
}

/**
 * Yaw and pitch of a camera's look direction.
 * @param {THREE.Camera} camera
 */
export function yawPitchOf(camera) {
  const d = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  return { yaw: Math.atan2(-d.x, -d.z), pitch: Math.asin(Math.max(-1, Math.min(1, d.y))) };
}
