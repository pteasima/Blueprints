/**
 * AR Quick Look placement for GLB meshes (already Y-up, millimetres).
 * Matches the Python USDZ path: metres, XZ-centred, grounded, optional tabletop scale.
 */
import * as THREE from "three";

/** CAD millimetres → metres (RealityKit treats 1 unit as 1 m). */
export const CAD_MM_TO_M = 0.001;
/** Real-world span above this gets shrunk for indoor plane detection. */
export const AR_REAL_SPAN_LIMIT_M = 2.0;
/** Target max span after tabletop shrink. */
export const AR_TABLETOP_SPAN_M = 0.45;
/** Lift above the detected plane so the model does not Z-fight the floor. */
export const AR_LIFT_M = 0.015;

/**
 * @param {THREE.Object3D} object
 * @returns {{
 *   cx: number,
 *   cz: number,
 *   minY: number,
 *   spanMm: number,
 *   spanM: number,
 *   scale: number,
 *   liftM: number,
 * }}
 */
export function computeArPlacement(object) {
  const box = new THREE.Box3().setFromObject(object);
  if (box.isEmpty()) {
    return {
      cx: 0,
      cz: 0,
      minY: 0,
      spanMm: 0,
      spanM: 0,
      scale: CAD_MM_TO_M,
      liftM: AR_LIFT_M,
    };
  }
  const size = new THREE.Vector3();
  box.getSize(size);
  const spanMm = Math.max(size.x, size.y, size.z, 1e-9);
  const spanM = spanMm * CAD_MM_TO_M;
  const tabletop =
    spanM > AR_REAL_SPAN_LIMIT_M ? AR_TABLETOP_SPAN_M / spanM : 1.0;
  return {
    cx: (box.min.x + box.max.x) / 2,
    cz: (box.min.z + box.max.z) / 2,
    minY: box.min.y,
    spanMm,
    spanM,
    scale: CAD_MM_TO_M * tabletop,
    liftM: AR_LIFT_M,
  };
}

/**
 * Centre XZ, ground to Y=0, mm→m (+ tabletop if needed), then lift slightly.
 * @param {THREE.Object3D} object
 * @param {ReturnType<typeof computeArPlacement>} [placement]
 */
export function applyArPlacement(object, placement = computeArPlacement(object)) {
  const { cx, cz, minY, scale, liftM } = placement;
  object.position.set(-cx * scale, -minY * scale + liftM, -cz * scale);
  object.scale.setScalar(scale);
  object.updateMatrixWorld(true);
  return placement;
}
