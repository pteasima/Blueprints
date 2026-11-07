/**
 * SketchUp-style orbit target for the viewer.
 *
 * OrbitControls dollies, pans, and (when zoomed in) feels stuck because every
 * step is a fraction of the camera–target distance. Parking that target on the
 * surface under the pointer makes the step the distance to the wall you are
 * actually looking at.
 *
 * Wheel and pinch use three's zoom-to-cursor, after the radius is set from a
 * raycast. A miss, or a hit closer than PIVOT_STALL_M, leads the target
 * forward so zoom cannot asymptote to zero. Two-finger / right-button pan uses
 * the view-depth of the grabbed point so that point stays under the fingers.
 *
 * One-finger orbit keeps the framed target while you are outside: the surface
 * under the finger is then about as far as the model center, and stock
 * OrbitControls is left alone. Once that surface is much closer (or the target
 * is already inside the stall distance), the drag turns around the hit point.
 * The camera is not moved until the finger travels past the door-tap slop, so
 * a tap still hits the same pixel.
 */
import * as THREE from "three";
import { TAP_PX } from "./doors.js";

/** Closer than this, a 5% zoom step is only millimetres. Metres. */
export const PIVOT_STALL_M = 0.3;
/**
 * Radius used when the ray has nothing solid far enough to anchor a step.
 * One wheel notch (scale 0.95) then moves about 7 cm. Metres.
 */
export const PIVOT_LEAD_M = 1.5;
/**
 * Finger-pivot only when the hit is closer than this fraction of the current
 * orbit radius. Framed exterior views stay above it (the near corner of a
 * model framed by frameIso is still ~0.6 of the radius), so outside orbit
 * keeps the model center.
 */
export const PIVOT_DEPTH_RATIO = 0.5;

const _ndc = new THREE.Vector2();
const _hitPoint = new THREE.Vector3();
const _viewDir = new THREE.Vector3();
const _ahead = new THREE.Vector3();
const _offset = new THREE.Vector3();
const _oldOffset = new THREE.Vector3();
const _up = new THREE.Vector3();
const _right = new THREE.Vector3();
const _yaw = new THREE.Quaternion();
const _pitch = new THREE.Quaternion();
const _swing = new THREE.Quaternion();
const _align = new THREE.Quaternion();
const _spherical = new THREE.Spherical();
const _yAxis = new THREE.Vector3(0, 1, 0);
const _raycaster = new THREE.Raycaster();

/**
 * Distance to park the target along the view before a zoom step.
 * `hitDist` is the slant range to the surface, or null on a miss.
 * @param {number | null | undefined} hitDist
 * @param {number} targetDist
 * @param {number} [stall]
 * @param {number} [lead]
 */
export function zoomRadius(hitDist, targetDist, stall = PIVOT_STALL_M, lead = PIVOT_LEAD_M) {
  const current = Number.isFinite(targetDist) && targetDist > 0 ? targetDist : 0;
  const hit = Number.isFinite(hitDist) && hitDist > 0 ? hitDist : null;
  if (hit != null && hit >= stall) return hit;
  if (hit != null) return Math.max(lead, stall);
  if (current >= stall) return current;
  return Math.max(lead, stall);
}

/**
 * Pan depth. A real hit wins so the grabbed point tracks the fingers.
 * With no surface and a stalled target, lead the depth so the pan is not microscopic.
 * @param {number | null | undefined} viewDepth
 * @param {number} targetDist
 * @param {number} [stall]
 * @param {number} [lead]
 * @returns {number | null} null keeps the current target
 */
export function panDistance(viewDepth, targetDist, stall = PIVOT_STALL_M, lead = PIVOT_LEAD_M) {
  if (Number.isFinite(viewDepth) && viewDepth > 1e-3) return viewDepth;
  if (!(targetDist >= stall)) return Math.max(lead, stall);
  return null;
}

/**
 * @param {number | null | undefined} hitDist slant range, null on a miss
 * @param {number} targetDist
 * @param {number} [stall]
 * @param {number} [depthRatio]
 */
export function shouldPivotOrbit(
  hitDist,
  targetDist,
  stall = PIVOT_STALL_M,
  depthRatio = PIVOT_DEPTH_RATIO,
) {
  if (!(Number.isFinite(hitDist) && hitDist > 0)) return false;
  if (!(targetDist > 0) || targetDist < stall) return true;
  return hitDist < targetDist * depthRatio;
}

/**
 * Spherical deltas matching OrbitControls rotate (right drag → negative theta).
 * @param {number} dx
 * @param {number} dy
 * @param {number} clientHeight
 * @param {number} [rotateSpeed]
 */
export function orbitDeltas(dx, dy, clientHeight, rotateSpeed = 1) {
  const k = (2 * Math.PI * rotateSpeed) / Math.max(1, clientHeight);
  return { theta: -dx * k, phi: -dy * k };
}

/**
 * Turntable step around `pivot`. Yaw about `camera.up`, then pitch about the
 * camera's right — the same rotation OrbitControls applies to its target.
 * Position, target, and orientation share that rotation, so a zero delta does
 * not jump and the pivot stays on its pixel. `controls.update()` → lookAt
 * repeats this orientation instead of rolling it.
 * @param {THREE.Camera} camera
 * @param {THREE.Vector3} target
 * @param {THREE.Vector3} pivot
 * @param {number} dTheta spherical theta delta (right drag is negative)
 * @param {number} dPhi spherical phi delta
 */
export function applyOrbitAroundPivot(camera, target, pivot, dTheta, dPhi) {
  if (!dTheta && !dPhi) return false;
  _oldOffset.copy(camera.position).sub(pivot);
  if (_oldOffset.lengthSq() < 1e-12) return false;

  _up.copy(camera.up);
  if (_up.lengthSq() < 1e-12) _up.set(0, 1, 0);
  else _up.normalize();
  // Same pole stop as OrbitControls' makeSafe, so a long drag cannot tumble.
  _align.setFromUnitVectors(_up, _yAxis);
  _offset.copy(_oldOffset).applyQuaternion(_align);
  _spherical.setFromVector3(_offset);
  const pole = 1e-6;
  const nextPhi = Math.min(Math.PI - pole, Math.max(pole, _spherical.phi + dPhi));
  dPhi = nextPhi - _spherical.phi;
  _yaw.setFromAxisAngle(_up, dTheta);
  _right.set(1, 0, 0).applyQuaternion(camera.quaternion).applyQuaternion(_yaw);
  if (_right.lengthSq() < 1e-12) return false;
  _right.normalize();
  _pitch.setFromAxisAngle(_right, dPhi);
  _swing.copy(_pitch).multiply(_yaw);

  _offset.copy(_oldOffset).applyQuaternion(_swing);
  camera.position.copy(pivot).add(_offset);
  target.sub(pivot).applyQuaternion(_swing).add(pivot);
  camera.quaternion.premultiply(_swing);
  return true;
}

/**
 * Park `target` on the view ray at `distance`. Look direction is unchanged,
 * so the picture does not jump; the orbit radius becomes `distance`.
 * @param {THREE.Camera} camera
 * @param {THREE.Vector3} target
 * @param {number} distance
 */
export function placeTargetAlongView(camera, target, distance) {
  if (!(distance > 0)) return false;
  camera.getWorldDirection(_viewDir);
  _ahead.copy(camera.position).addScaledVector(_viewDir, distance);
  if (_ahead.distanceToSquared(target) < 1e-12) return false;
  target.copy(_ahead);
  return true;
}

/**
 * @param {THREE.Object3D} obj
 * @param {THREE.Vector3} point
 */
function pointKept(obj, point) {
  const mats = obj.material;
  const list = Array.isArray(mats) ? mats : [mats];
  for (const mat of list) {
    const planes = mat && mat.clippingPlanes;
    if (!planes) continue;
    for (const plane of planes) {
      if (plane.distanceToPoint(point) < -1e-4) return false;
    }
  }
  return true;
}

/**
 * @param {HTMLElement} canvas
 * @param {THREE.Camera} camera
 * @param {THREE.Object3D | null} root
 * @param {number} clientX
 * @param {number} clientY
 * @returns {{ point: THREE.Vector3, slant: number, depth: number } | null}
 */
export function pickSurface(canvas, camera, root, clientX, clientY) {
  if (!camera || !root || camera.isOrthographicCamera) return null;
  const rect = canvas.getBoundingClientRect();
  const w = rect.width || canvas.clientWidth || 1;
  const h = rect.height || canvas.clientHeight || 1;
  _ndc.x = ((clientX - rect.left) / w) * 2 - 1;
  _ndc.y = -((clientY - rect.top) / h) * 2 + 1;
  root.updateWorldMatrix(true, true);
  _raycaster.setFromCamera(_ndc, camera);
  const hits = _raycaster.intersectObject(root, true);
  camera.getWorldDirection(_viewDir);
  for (const hit of hits) {
    const obj = hit.object;
    if (!obj.visible) continue;
    const ud = obj.userData;
    if (ud && (ud.isEdgeOverlay || ud.isSectionCap || ud.isPeeledEdgeBatch)) continue;
    if (!pointKept(obj, hit.point)) continue;
    const slant = hit.distance;
    if (!(slant > 1e-4)) continue;
    const depth = _hitPoint.copy(hit.point).sub(camera.position).dot(_viewDir);
    if (!(depth > 1e-4)) continue;
    return { point: hit.point.clone(), slant, depth };
  }
  return null;
}

/**
 * @param {{
 *   canvas: HTMLElement,
 *   controls: import("three/addons/controls/OrbitControls.js").OrbitControls,
 *   getCamera: () => THREE.Camera,
 *   getRoot: () => THREE.Object3D | null,
 *   isBlocked?: () => boolean,
 * }} opts
 */
export function createPivotNav(opts) {
  const { canvas, controls } = opts;
  const isBlocked = opts.isBlocked || (() => false);
  /** @type {Map<number, { x: number, y: number }>} */
  const pointers = new Map();
  /**
   * @type {{
   *   id: number,
   *   x: number,
   *   y: number,
   *   lastX: number,
   *   lastY: number,
   *   point: THREE.Vector3,
   *   dragging: boolean,
   * } | null}
   */
  let pivot = null;

  function live() {
    return controls.enabled !== false && !isBlocked();
  }

  function perspective() {
    const camera = opts.getCamera();
    return Boolean(camera && camera.isPerspectiveCamera);
  }

  /**
   * @param {number} clientX
   * @param {number} clientY
   */
  function pick(clientX, clientY) {
    return pickSurface(canvas, opts.getCamera(), opts.getRoot(), clientX, clientY);
  }

  /**
   * @param {number | null} distance
   */
  function park(distance) {
    const camera = opts.getCamera();
    if (!camera || !perspective() || distance == null) return;
    placeTargetAlongView(camera, controls.target, distance);
  }

  /**
   * @param {number} clientX
   * @param {number} clientY
   */
  function armZoom(clientX, clientY) {
    const camera = opts.getCamera();
    if (!camera || !perspective()) return;
    const hit = pick(clientX, clientY);
    const targetDist = camera.position.distanceTo(controls.target);
    park(zoomRadius(hit ? hit.slant : null, targetDist));
  }

  /**
   * @param {number} clientX
   * @param {number} clientY
   */
  function armPan(clientX, clientY) {
    const camera = opts.getCamera();
    if (!camera || !perspective()) return;
    const hit = pick(clientX, clientY);
    const targetDist = camera.position.distanceTo(controls.target);
    park(panDistance(hit ? hit.depth : null, targetDist));
  }

  function endPivot() {
    pivot = null;
    controls.enableRotate = true;
  }

  /**
   * @param {PointerEvent | { pointerId: number, clientX: number, clientY: number, button?: number, pointerType?: string, shiftKey?: boolean, ctrlKey?: boolean, metaKey?: boolean, altKey?: boolean }} ev
   */
  function onPointerDown(ev) {
    pointers.set(ev.pointerId, { x: ev.clientX, y: ev.clientY });
    if (!live()) {
      endPivot();
      controls.zoomToCursor = false;
      return;
    }
    if (!perspective()) {
      endPivot();
      controls.zoomToCursor = false;
      return;
    }

    if (pointers.size >= 2) {
      endPivot();
      controls.zoomToCursor = true;
      const mid = midpoint(ev);
      armZoom(mid.x, mid.y);
      return;
    }

    const touch = ev.pointerType === "touch";
    const button = ev.button ?? 0;
    if (!touch && button === 2) {
      endPivot();
      armPan(ev.clientX, ev.clientY);
      return;
    }
    if (!touch && button === 1) {
      endPivot();
      armZoom(ev.clientX, ev.clientY);
      return;
    }
    if (!touch && button !== 0) return;
    if (!touch && (ev.shiftKey || ev.ctrlKey || ev.metaKey)) {
      endPivot();
      armPan(ev.clientX, ev.clientY);
      return;
    }

    const camera = opts.getCamera();
    const hit = pick(ev.clientX, ev.clientY);
    const targetDist = camera ? camera.position.distanceTo(controls.target) : 0;
    if (!hit || !shouldPivotOrbit(hit.slant, targetDist)) {
      endPivot();
      return;
    }
    controls.enableRotate = false;
    pivot = {
      id: ev.pointerId,
      x: ev.clientX,
      y: ev.clientY,
      lastX: ev.clientX,
      lastY: ev.clientY,
      point: hit.point.clone(),
      dragging: false,
    };
    controls.dispatchEvent({ type: "start" });
  }

  /**
   * @param {PointerEvent | { pointerId: number, clientX: number, clientY: number }} ev
   */
  function midpoint(ev) {
    let x = ev.clientX;
    let y = ev.clientY;
    let n = 1;
    for (const [id, p] of pointers) {
      if (id === ev.pointerId) continue;
      x += p.x;
      y += p.y;
      n += 1;
    }
    return { x: x / n, y: y / n };
  }

  /**
   * @param {PointerEvent | { pointerId: number, clientX: number, clientY: number }} ev
   */
  function onPointerMove(ev) {
    const known = pointers.get(ev.pointerId);
    if (known) {
      known.x = ev.clientX;
      known.y = ev.clientY;
    }
    if (!pivot || ev.pointerId !== pivot.id || pointers.size !== 1) return;
    if (!live()) return;
    const camera = opts.getCamera();
    if (!camera) return;
    const dx = ev.clientX - pivot.lastX;
    const dy = ev.clientY - pivot.lastY;
    if (!pivot.dragging) {
      const traveled = Math.hypot(ev.clientX - pivot.x, ev.clientY - pivot.y);
      if (traveled <= TAP_PX) return;
      pivot.dragging = true;
    }
    if (!dx && !dy) return;
    const delta = orbitDeltas(dx, dy, canvas.clientHeight || 1, controls.rotateSpeed);
    applyOrbitAroundPivot(camera, controls.target, pivot.point, delta.theta, delta.phi);
    camera.lookAt(controls.target);
    pivot.lastX = ev.clientX;
    pivot.lastY = ev.clientY;
  }

  /**
   * @param {PointerEvent | { pointerId: number }} ev
   */
  function onPointerUp(ev) {
    pointers.delete(ev.pointerId);
    if (pivot && pivot.id === ev.pointerId) endPivot();
    if (pointers.size < 2) controls.zoomToCursor = false;
    if (pointers.size === 0) controls.enableRotate = true;
  }

  /**
   * @param {PointerEvent | { pointerId: number }} ev
   */
  function onPointerCancel(ev) {
    onPointerUp(ev);
  }

  /**
   * @param {WheelEvent | { clientX: number, clientY: number }} ev
   */
  function onWheel(ev) {
    if (!live() || !perspective()) {
      controls.zoomToCursor = false;
      return;
    }
    // A drag already owns the pointer. OrbitControls ignores the wheel then;
    // parking the target anyway would slide the orbit center mid-gesture.
    if (controls.state !== -1 || (pivot && pivot.dragging)) {
      controls.zoomToCursor = false;
      return;
    }
    controls.zoomToCursor = true;
    armZoom(ev.clientX, ev.clientY);
  }

  function onWheelDone() {
    if (pointers.size < 2) controls.zoomToCursor = false;
  }

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    onWheel,
    onWheelDone,
  };
}

/**
 * @param {{
 *   canvas: HTMLElement,
 *   controls: import("three/addons/controls/OrbitControls.js").OrbitControls,
 *   getCamera: () => THREE.Camera,
 *   getRoot: () => THREE.Object3D | null,
 *   isBlocked?: () => boolean,
 * }} opts
 */
export function attachPivotNav(opts) {
  const nav = createPivotNav(opts);
  const cap = { capture: true };
  opts.canvas.addEventListener("pointerdown", nav.onPointerDown, cap);
  opts.canvas.addEventListener("pointermove", nav.onPointerMove, cap);
  opts.canvas.addEventListener("pointerup", nav.onPointerUp, cap);
  opts.canvas.addEventListener("pointercancel", nav.onPointerCancel, cap);
  opts.canvas.addEventListener("wheel", nav.onWheel, cap);
  opts.canvas.addEventListener("wheel", nav.onWheelDone);
  return nav;
}
