/**
 * Tap dispatch, highest priority first.
 *
 * Interactive elements also accept a tap inside a 44 CSS-pixel target
 * (the iOS minimum). A control smaller than that grows equally on every
 * side; a larger one is only its own screen rectangle. When two of those
 * pads overlap, the one closer to the finger in screen space wins. On a
 * tie, the higher `priority` wins, which is the same rule as two handlers
 * claiming one solid.
 *
 * The ray still walks through non-interactive solids, so a switch behind a
 * wall is reached when the finger is on it. Handlers may set `fallback`,
 * which runs only when nothing was claimed — an open door's closed-leaf
 * proxy. That proxy is not a 44px target: the ray has to cross it, and the
 * farthest opening wins.
 *
 * Proxies set `userData.bpHitProxy`. Zoom, pan, orbit pivot, and Measure skip
 * that flag, and the proxy's own `raycast` is a no-op.
 */
import * as THREE from "three";

/** iOS minimum control size, in CSS pixels (1pt = 1 CSS pixel). */
export const TAP_TARGET_PX = 44;

/**
 * @param {object | null | undefined} obj
 * @returns {boolean}
 */
export function isHitProxy(obj) {
  return Boolean(obj && obj.userData && obj.userData.bpHitProxy);
}

/**
 * How far outside the screen rectangle a tap may land and still hit.
 * Small controls grow until the target is {@link TAP_TARGET_PX} on the
 * short side. Large ones do not grow.
 * @param {number} widthPx
 * @param {number} heightPx
 * @param {number} [targetPx]
 */
export function tapSlopPx(widthPx, heightPx, targetPx = TAP_TARGET_PX) {
  const minSide = Math.min(Math.max(widthPx, 0), Math.max(heightPx, 0));
  return Math.max(0, (targetPx - minSide) / 2);
}

/**
 * CSS-pixel distance from a point to a rectangle. 0 when the point is inside.
 * @param {number} x
 * @param {number} y
 * @param {{ minX: number, minY: number, maxX: number, maxY: number }} rect
 */
export function distanceToRect(x, y, rect) {
  const dx = x < rect.minX ? rect.minX - x : x > rect.maxX ? x - rect.maxX : 0;
  const dy = y < rect.minY ? rect.minY - y : y > rect.maxY ? y - rect.maxY : 0;
  return Math.hypot(dx, dy);
}

/**
 * @param {number} clientX
 * @param {number} clientY
 * @param {{ minX: number, minY: number, maxX: number, maxY: number, cx: number, cy: number }} bounds
 * @param {number} [targetPx]
 * @returns {{ visualDist: number, centerDist: number } | null}
 */
export function scoreTapTarget(clientX, clientY, bounds, targetPx = TAP_TARGET_PX) {
  const visualDist = distanceToRect(clientX, clientY, bounds);
  const slop = tapSlopPx(bounds.maxX - bounds.minX, bounds.maxY - bounds.minY, targetPx);
  if (visualDist > slop) return null;
  return {
    visualDist,
    centerDist: Math.hypot(clientX - bounds.cx, clientY - bounds.cy),
  };
}

/**
 * Nearest screen target. `visualDist` 0 is a tap on the element itself.
 * Then the closer centre. Then the higher priority.
 * @param {{ visualDist: number, centerDist: number, priority?: number, onTap: Function }[]} candidates
 */
export function chooseTapTarget(candidates) {
  if (!candidates.length) return null;
  let best = candidates[0];
  for (let i = 1; i < candidates.length; i++) {
    const item = candidates[i];
    const closer =
      item.visualDist < best.visualDist - 1e-6 ||
      (Math.abs(item.visualDist - best.visualDist) <= 1e-6 &&
        item.centerDist < best.centerDist - 1e-6) ||
      (Math.abs(item.visualDist - best.visualDist) <= 1e-6 &&
        Math.abs(item.centerDist - best.centerDist) <= 1e-6 &&
        (item.priority || 0) > (best.priority || 0));
    if (closer) best = item;
  }
  return best;
}

const _corner = new THREE.Vector3();
const _view = new THREE.Vector3();

/**
 * Screen rectangle of an object's world bounds, in client pixels.
 * Corners behind the camera are dropped. Null when none are in front.
 * @param {THREE.Object3D} object
 * @param {THREE.Camera} camera
 * @param {{ left: number, top: number, width: number, height: number }} rect
 */
export function projectObjectToClientRect(object, camera, rect) {
  if (!object || !camera || !rect) return null;
  object.updateWorldMatrix(true, true);
  const box = new THREE.Box3().setFromObject(object);
  if (box.isEmpty()) return null;
  const xs = [box.min.x, box.max.x];
  const ys = [box.min.y, box.max.y];
  const zs = [box.min.z, box.max.z];
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  let any = false;
  const near = camera.near > 0 ? camera.near : 1e-4;
  for (const x of xs) {
    for (const y of ys) {
      for (const z of zs) {
        _view.set(x, y, z);
        _view.applyMatrix4(camera.matrixWorldInverse);
        if (_view.z >= -near) continue;
        _corner.set(x, y, z).project(camera);
        const sx = (_corner.x * 0.5 + 0.5) * rect.width + rect.left;
        const sy = (-_corner.y * 0.5 + 0.5) * rect.height + rect.top;
        if (sx < minX) minX = sx;
        if (sy < minY) minY = sy;
        if (sx > maxX) maxX = sx;
        if (sy > maxY) maxY = sy;
        any = true;
      }
    }
  }
  if (!any) return null;
  return {
    minX,
    minY,
    maxX,
    maxY,
    cx: (minX + maxX) / 2,
    cy: (minY + maxY) / 2,
  };
}

/**
 * @param {{ targets?: Function, priority?: number }[]} handlers
 * @param {{ clientX?: number, clientY?: number, project?: Function }} ctx
 */
function screenTarget(handlers, ctx) {
  if (ctx.clientX == null || ctx.clientY == null || typeof ctx.project !== "function") {
    return null;
  }
  /** @type {{ visualDist: number, centerDist: number, priority: number, onTap: Function }[]} */
  const candidates = [];
  for (const handler of handlers) {
    const list = handler.targets?.(ctx);
    if (!list) continue;
    for (const item of list) {
      if (!item?.object || typeof item.onTap !== "function") continue;
      const bounds = ctx.project(item.object);
      if (!bounds) continue;
      const score = scoreTapTarget(ctx.clientX, ctx.clientY, bounds);
      if (!score) continue;
      candidates.push({
        ...score,
        priority: item.priority ?? handler.priority ?? 0,
        onTap: item.onTap,
      });
    }
  }
  return chooseTapTarget(candidates);
}

export function createTapRegistry() {
  /** @type {{ id?: string, priority?: number, claim?: Function, fallback?: Function }[]} */
  const handlers = [];

  /**
   * @param {{ id?: string, priority?: number, claim?: Function, fallback?: Function }} handler
   */
  function register(handler) {
    handlers.push(handler);
    handlers.sort((a, b) => (b.priority || 0) - (a.priority || 0));
  }

  /**
   * Nearest claimed solid wins. On one solid, higher `priority` wins.
   * @param {object[]} hits nearest first
   * @param {object} ctx
   * @param {(hit: object) => boolean} [keep]
   * @returns {boolean}
   */
  function dispatch(hits, ctx, keep) {
    /** @type {object[]} */
    const solids = [];
    for (const hit of hits) {
      if (keep && !keep(hit)) continue;
      solids.push(hit);
    }
    // A real hit wins, including a switch seen through an opening. The 44px
    // pad is only for a miss. It runs before the opening fallback so a pad
    // still beats a doorway close; a leaf omits itself from that pad while
    // the ray is inside its own opening.
    for (const hit of solids) {
      for (const handler of handlers) {
        const claim = handler.claim?.(hit, ctx);
        if (!claim) continue;
        claim.onTap();
        return true;
      }
    }
    const screen = ctx ? screenTarget(handlers, ctx) : null;
    if (screen) {
      screen.onTap();
      return true;
    }
    for (const handler of handlers) {
      if (handler.fallback?.(solids, ctx)) return true;
    }
    return false;
  }

  return { register, dispatch, handlers };
}
