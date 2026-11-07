/** Long-press versus tap. Movement past the slop cancels the hold. */

export const LONG_PRESS_MS = 500;
export const HOLD_SLOP_PX = 12;

/**
 * @param {{
 *   dt?: number,
 *   dx?: number,
 *   dy?: number,
 *   pointers?: number,
 *   button?: number,
 *   blocked?: boolean,
 *   modifiers?: boolean,
 *   released?: boolean,
 *   consumed?: boolean,
 *   slop?: number,
 *   longPressMs?: number,
 * }} g
 * @returns {"tap" | "longpress" | "drag" | "ignore" | "pending"}
 */
export function classifyHold(g) {
  if (g.blocked || g.modifiers) return "ignore";
  if (g.button !== undefined && g.button !== 0) return "ignore";
  if ((g.pointers ?? 1) > 1) return "ignore";
  if (g.consumed) return "ignore";
  const dist = Math.hypot(g.dx ?? 0, g.dy ?? 0);
  if (dist > (g.slop ?? HOLD_SLOP_PX)) return "drag";
  const limit = g.longPressMs ?? LONG_PRESS_MS;
  if (!g.released && (g.dt ?? 0) >= limit) return "longpress";
  if (g.released) return "tap";
  return "pending";
}
