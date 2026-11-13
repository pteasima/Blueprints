/**
 * Tap dispatch, highest priority first. `resolve` decides, in this order:
 *
 * 1. Direct hit: the nearest solid a handler claims, unless an opaque solid
 *    sits more than OCCLUSION_TOLERANCE_M in front of it. Faded parts and
 *    glass do not hide anything. No extended target can steal a direct hit.
 * 2. Visible fallback: `fallback(solids, ctx)` with `ctx.maxT` set to just
 *    past the first opaque solid (an open door's closed-leaf proxy the ray
 *    reaches before any wall). Dry runs (long-press) call `probe` instead.
 * 3. Extended target: each handler's `targets(ctx)` lists centres; a 44 pt
 *    circle on screen around each, nearest to the camera wins
 *    (tapTargets.js). Needs `ctx.camera`, `ctx.root`, `ctx.tap`, `ctx.size`.
 *
 * Nothing reaches through opaque geometry (Petr, 2026-11-13: "I can
 * literally open doors through multiple walls"). The old fourth pass (the
 * nearest claimed solid anywhere on the ray, then doorways without `maxT`,
 * PR 87) is gone. Only hits on drawn surfaces count (`isRenderedHit`: shown
 * through every ancestor, not cut away by a section plane); glass never
 * blocks (`isOpaqueMaterialOf`).
 *
 * Proxies set `userData.bpHitProxy`. Zoom, pan, orbit pivot, and Measure skip
 * that flag, and the proxy's own `raycast` is a no-op.
 */

import {
  OCCLUSION_TOLERANCE_M,
  isClippedAt,
  isRenderedHit,
  TAP_TARGET_PX,
  centerOccluded,
  findDirectHit,
  isOpaqueMaterialOf,
  pickExtendedTarget,
  projectTarget,
} from "./tapTargets.js";

/**
 * @param {object | null | undefined} obj
 * @returns {boolean}
 */
export function isHitProxy(obj) {
  return Boolean(obj && obj.userData && obj.userData.bpHitProxy);
}

/**
 * A visible solid the user can tap or long-press.
 * Hit proxies (doorway slabs, enlarged fixture pads) and session-hidden
 * elements are not targets. Edges and section caps are not solids.
 * @param {object | null | undefined} obj
 */
export function isSceneSolid(obj) {
  if (!obj || !obj.visible || isHitProxy(obj)) return false;
  const ud = obj.userData || {};
  if (ud.bpIfcHidden || ud.isEdgeOverlay || ud.isSectionCap || ud.isPeeledEdgeBatch) {
    return false;
  }
  return true;
}

export function createTapRegistry() {
  /** @type {{ id?: string, priority?: number, claim?: Function, fallback?: Function, targets?: Function }[]} */
  const handlers = [];

  /**
   * @param {{ id?: string, priority?: number, claim?: Function, fallback?: Function, targets?: Function }} handler
   */
  function register(handler) {
    handlers.push(handler);
    handlers.sort((a, b) => (b.priority || 0) - (a.priority || 0));
  }

  function claimOf(hit, ctx) {
    for (const handler of handlers) {
      const claim = handler.claim?.(hit, ctx);
      if (claim) return claim;
    }
    return null;
  }

  function solidsOf(hits, keep) {
    /** @type {object[]} */
    const solids = [];
    for (const hit of hits) {
      if (!isRenderedHit(hit)) continue;
      if (keep && !keep(hit)) continue;
      solids.push(hit);
    }
    return solids;
  }

  /**
   * Pass 2 of Petr's rule: the 44 pt circles. Null when ctx lacks a camera.
   * @returns {{ hit: object, claim: object, target: object } | null}
   */
  function extendedTarget(ctx) {
    const { camera, root, tap, size } = ctx || {};
    if (!camera || !root || !tap || !size) return null;
    const candidates = [];
    for (const handler of handlers) {
      const list = handler.targets?.(ctx);
      if (!Array.isArray(list)) continue;
      for (const target of list) {
        if (!target?.center) continue;
        // A centre cut away by a section plane is not drawn: no target.
        if (target.hit?.object && isClippedAt(target.hit.object, target.center)) continue;
        const at = projectTarget(target.center, camera, size);
        if (!at) continue;
        candidates.push({ ...target, ...at, handler });
      }
    }
    if (!candidates.length) return null;
    const keep = (obj) => isSceneSolid(obj);
    const best = pickExtendedTarget(candidates, tap, {
      diameterPx: ctx.diameterPx ?? TAP_TARGET_PX,
      isOccluded: (c) =>
        centerOccluded(c.center, camera, root, (obj) => Boolean(c.owns?.(obj)), { keep }),
    });
    if (!best) return null;
    const hit = { ...best.hit, point: best.hit?.point ?? best.center, extended: true };
    const claim = best.handler.claim?.(hit, ctx);
    return claim ? { hit, claim, target: best } : null;
  }

  /**
   * Which target a tap means, without running it. `kind` is "direct",
   * "fallback" (a visible opening), or "extended".
   * @param {object[]} hits nearest first
   * @param {object} ctx
   * @param {(hit: object) => boolean} [keep]
   * @param {{ run?: boolean }} [opts] run the visible fallback for real
   * @returns {{ kind: string, hit?: object, claim?: object } | null}
   */
  function resolve(hits, ctx, keep, opts = {}) {
    const solids = solidsOf(hits, keep);
    const direct = findDirectHit(solids, (hit) => claimOf(hit, ctx), {
      isOccluder: (obj) => isOpaqueMaterialOf(obj),
    });
    if (direct.claim) return { kind: "direct", hit: direct.hit, claim: direct.claim };
    // A dry run asks `probe` (same answer, no side effects) instead.
    const visible = { ...ctx, maxT: direct.wallT + OCCLUSION_TOLERANCE_M };
    for (const handler of handlers) {
      const took = opts.run ? handler.fallback?.(solids, visible) : handler.probe?.(solids, visible);
      if (took) return { kind: "fallback" };
    }
    const ext = extendedTarget(ctx);
    if (ext) return { kind: "extended", hit: ext.hit, claim: ext.claim };
    return null;
  }

  /**
   * Run the tap. See the file header for the order.
   * @param {object[]} hits nearest first
   * @param {object} ctx
   * @param {(hit: object) => boolean} [keep]
   * @returns {boolean}
   */
  function dispatch(hits, ctx, keep) {
    const found = resolve(hits, ctx, keep, { run: true });
    if (found?.kind === "fallback") return true;
    if (found?.claim) {
      found.claim.onTap();
      return true;
    }
    return false;
  }

  /**
   * Buttons for the target a long-press means (direct or extended). Does not
   * run the tap.
   * @param {object[]} hits nearest first
   * @param {object} ctx
   * @param {(hit: object) => boolean} [keep]
   * @returns {{ id?: string, labelKey?: string, run: Function }[]}
   */
  function actionsFor(hits, ctx, keep) {
    const found = resolve(hits, ctx, keep);
    if (!found?.claim) return [];
    return Array.isArray(found.claim.actions) ? found.claim.actions.slice() : [];
  }

  return { register, dispatch, actionsFor, resolve, handlers };
}
