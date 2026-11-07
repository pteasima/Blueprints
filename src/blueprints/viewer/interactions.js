/**
 * Tap dispatch, highest priority first.
 *
 * The nearest solid a handler claims takes the tap. Non-interactive solids
 * do not stop the scan, so a switch behind a wall is still reached. Handlers
 * may also set `fallback`, which runs only when nothing was claimed — for a
 * target that is not in the scene raycast (an open door's closed-leaf proxy).
 *
 * Proxies set `userData.bpHitProxy`. Zoom, pan, orbit pivot, and Measure skip
 * that flag, and the proxy's own `raycast` is a no-op.
 */

/**
 * @param {object | null | undefined} obj
 * @returns {boolean}
 */
export function isHitProxy(obj) {
  return Boolean(obj && obj.userData && obj.userData.bpHitProxy);
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
    for (const hit of solids) {
      for (const handler of handlers) {
        const claim = handler.claim?.(hit, ctx);
        if (!claim) continue;
        claim.onTap();
        return true;
      }
    }
    for (const handler of handlers) {
      if (handler.fallback?.(solids, ctx)) return true;
    }
    return false;
  }

  return { register, dispatch, handlers };
}
