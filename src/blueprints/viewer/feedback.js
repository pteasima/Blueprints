/**
 * Interaction feedback: a short screen-space arrow at the thing that was just
 * driven, plus a haptic tap where the platform allows it (Petr, 2026-11-12).
 *
 * - Rocker: up or down arrow at the pressed half.
 * - Sliding parts (drawers, windows): a straight arrow along the slide, as
 *   projected on screen, for open and close alike.
 * - Hinged door: a quarter-arc arrow that follows the swing on screen,
 *   bending toward the hinge.
 * - Light: a ring pulse at the fixture.
 *
 * Every glyph is a fixed 36 CSS px whatever the camera. Each call spawns its
 * own element that drifts up about 36 px and fades over 700 ms, so a burst of
 * presses stays readable as separate arrows. With prefers-reduced-motion it
 * only fades. The anchor is a world point re-projected every frame, so an
 * arrow stays on its target while the camera moves.
 *
 * This file knows nothing about picking. Callers report actions where they
 * are dispatched (main.js: rocker press, light toggle, window slide; doors.js
 * `onToggle`: hinged doors and drawers).
 *
 * Haptics (`haptic()`): `navigator.vibrate(10)` where it exists (Android
 * Chrome / Firefox). iOS Safari has no Vibration API. Since iOS 18, toggling a
 * native `<input type="checkbox" switch>` plays the system "selection" haptic,
 * and that also happens when script clicks the switch's `<label>` inside a
 * user gesture. So on a touch device without `vibrate` we create a hidden
 * label+switch, click it, and remove it. It must run synchronously inside the
 * pointer handler (the tap path is: canvas `pointerup` → tap registry →
 * handler → `showFeedback`), or iOS drops it. Anything missing fails silently.
 */
import * as THREE from "three";

export const FEEDBACK_MS = 700;
export const FEEDBACK_RISE_PX = 36;
export const FEEDBACK_SIZE_PX = 36;

/** @typedef {"switch" | "slide" | "hinge" | "light"} FeedbackKind */

/**
 * Drift and opacity at time `t` (0…1 of the lifetime).
 * Holds full opacity for the first fifth, then fades. Ease-out rise.
 * @param {number} t
 * @param {boolean} [reducedMotion]
 * @returns {{ opacity: number, rise: number, scale: number }}
 */
export function feedbackFrame(t, reducedMotion = false) {
  const u = Math.min(Math.max(t, 0), 1);
  const opacity = u < 0.2 ? 1 : 1 - (u - 0.2) / 0.8;
  if (reducedMotion) return { opacity, rise: 0, scale: 1 };
  const ease = 1 - (1 - u) * (1 - u);
  const pop = u < 0.15 ? 0.7 + (0.3 * u) / 0.15 : 1;
  return { opacity, rise: FEEDBACK_RISE_PX * ease, scale: pop };
}

/**
 * Screen angle in degrees of the segment a→b, CSS convention (x right,
 * y down, 0° points right, 90° points down).
 * @param {{ x: number, y: number }} a
 * @param {{ x: number, y: number }} b
 * @returns {number | null} null when the segment is too short to read
 */
export function screenAngleDeg(a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  if (Math.hypot(dx, dy) < 1e-6) return null;
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

/**
 * Rocker position → arrow angle (CSS degrees): up is −90°, down 90°.
 * @param {"up" | "down" | string} position
 */
export function switchArrowAngle(position) {
  return position === "down" ? 90 : -90;
}

/**
 * Rotate a world point about the world vertical (+Y) through `pivot`.
 * Same sense as `THREE.Object3D.rotateOnAxis` with +Y (right-handed).
 * @param {number[]} p [x, y, z]
 * @param {number[]} pivot [x, y, z]
 * @param {number} angle radians
 * @returns {number[]}
 */
export function rotateAboutY(p, pivot, angle) {
  const dx = p[0] - pivot[0];
  const dz = p[2] - pivot[2];
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return [pivot[0] + c * dx + s * dz, p[1], pivot[2] - s * dx + c * dz];
}

/**
 * Hinged-door arc on screen. `from` and `to` are the leaf centre before and
 * after the swing, `hinge` the hinge point, all already projected (CSS px).
 * The glyph is a quarter arc whose chord runs from its tail to its tip at
 * −45° and that turns clockwise; `bend` −1 mirrors it (counter-clockwise).
 * @returns {{ angle: number, bend: 1 | -1 } | null}
 */
export function hingeArc(from, to, hinge) {
  const chord = screenAngleDeg(from, to);
  if (chord == null) return null;
  const cx = to.x - from.x;
  const cy = to.y - from.y;
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  // y-down: a positive cross means the hinge is to the right of the chord,
  // so travel turns clockwise around it.
  const cross = cx * (hinge.y - my) - cy * (hinge.x - mx);
  const bend = cross >= 0 ? 1 : -1;
  return { angle: chord + 45 * bend, bend };
}

/**
 * Live feedback items. Pure bookkeeping so the lifecycle is testable.
 * @param {number} [durationMs]
 */
export function createFeedbackQueue(durationMs = FEEDBACK_MS) {
  /** @type {{ id: number, t0: number, data: any }[]} */
  const items = [];
  let nextId = 1;
  return {
    items,
    /** @param {number} now @param {any} data */
    add(now, data) {
      const item = { id: nextId++, t0: now, data };
      items.push(item);
      return item;
    },
    /**
     * @param {number} now
     * @returns {{ alive: { item: any, t: number }[], expired: any[] }}
     */
    step(now) {
      const alive = [];
      const expired = [];
      for (let i = items.length - 1; i >= 0; i -= 1) {
        const t = (now - items[i].t0) / durationMs;
        if (t >= 1) expired.push(...items.splice(i, 1));
      }
      for (const item of items) alive.push({ item, t: (now - item.t0) / durationMs });
      return { alive, expired };
    },
  };
}

const SVG_NS = "http://www.w3.org/2000/svg";
// Dark fill, white outline: readable on white walls and on the dark background.
const STROKE = 'fill="#16181d" stroke="#fff" stroke-width="2.2" stroke-linejoin="round" paint-order="stroke"';

/** Glyph markup per kind, drawn pointing right (0°) in a 32×32 box. */
export const GLYPHS = {
  // Straight arrow: a thick shaft and a wide head.
  arrow: `<path ${STROKE} d="M4 12.5 H17 V6 L29 16 L17 26 V19.5 H4 Z"/>`,
  // Quarter arc around (8,28) r 15 from (−7…) tail to a right-pointing tip
  // at the top; chord tail→tip at −45°, turning clockwise.
  hinge:
    `<path fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/>` +
    `<path fill="none" stroke="#16181d" stroke-width="4.4" stroke-linecap="round" d="M5 27 A15 15 0 0 1 18 13"/>` +
    `<path ${STROKE} d="M17 5.5 L28 13 L17 20.5 Z"/>`,
  ring: `<circle cx="16" cy="16" r="9" fill="none" stroke="#fff" stroke-width="6"/><circle cx="16" cy="16" r="9" fill="none" stroke="#16181d" stroke-width="3"/><circle cx="16" cy="16" r="3" ${STROKE}/>`,
};

let hapticLabel = null;

/**
 * One light haptic tap. Call synchronously inside a user-gesture handler.
 * @param {{ navigator?: any, document?: any, matchMedia?: (q: string) => { matches: boolean } }} [env]
 * @returns {"vibrate" | "ios-switch" | "none"}
 */
export function haptic(env = globalThis) {
  try {
    const nav = env.navigator;
    if (nav && typeof nav.vibrate === "function") {
      if (nav.vibrate(10)) return "vibrate";
    }
    const doc = env.document;
    const coarse = env.matchMedia?.("(pointer: coarse)")?.matches;
    if (!doc || !coarse) return "none";
    // iOS 18+: clicking the label of a native switch plays the system
    // haptic. Older iOS and other browsers just toggle a hidden checkbox.
    if (!hapticLabel) {
      hapticLabel = doc.createElement("label");
      hapticLabel.setAttribute("aria-hidden", "true");
      hapticLabel.style.display = "none";
      const input = doc.createElement("input");
      input.type = "checkbox";
      input.setAttribute("switch", "");
      hapticLabel.appendChild(input);
    }
    doc.head.appendChild(hapticLabel);
    hapticLabel.click();
    hapticLabel.remove();
    return "ios-switch";
  } catch {
    return "none";
  }
}

/**
 * DOM overlay that draws feedback glyphs over the canvas.
 * @param {{
 *   canvas: HTMLCanvasElement,
 *   getCamera: () => THREE.Camera,
 *   document?: Document,
 *   now?: () => number,
 *   requestFrame?: (fn: FrameRequestCallback) => any,
 *   reducedMotion?: () => boolean,
 *   haptics?: () => void,
 * }} opts
 */
export function createFeedbackLayer(opts) {
  const doc = opts.document || globalThis.document;
  const now = opts.now || (() => performance.now());
  const requestFrame = opts.requestFrame || ((fn) => globalThis.requestAnimationFrame(fn));
  const reducedMotion =
    opts.reducedMotion ||
    (() => Boolean(globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches));
  const buzz = opts.haptics || (() => haptic());
  const queue = createFeedbackQueue();
  const v = new THREE.Vector3();
  let layer = null;
  let running = false;

  function ensureLayer() {
    if (layer) return layer;
    layer = doc.createElement("div");
    layer.className = "bp-feedback";
    layer.setAttribute("aria-hidden", "true");
    Object.assign(layer.style, {
      position: "fixed",
      left: "0",
      top: "0",
      width: "0",
      height: "0",
      pointerEvents: "none",
      zIndex: "40",
    });
    doc.body.appendChild(layer);
    return layer;
  }

  /**
   * World → client px. null when behind the camera.
   * @param {THREE.Vector3 | number[]} p
   */
  function project(p) {
    const camera = opts.getCamera();
    if (!camera) return null;
    if (Array.isArray(p)) v.set(p[0], p[1], p[2]);
    else v.copy(p);
    camera.updateMatrixWorld?.();
    v.project(camera);
    if (!Number.isFinite(v.x) || v.z > 1 || v.z < -1) return null;
    const rect = opts.canvas.getBoundingClientRect();
    return {
      x: rect.left + ((v.x + 1) / 2) * rect.width,
      y: rect.top + ((1 - v.y) / 2) * rect.height,
    };
  }

  /** Screen angle of a world direction at a world point. */
  function screenDirection(worldPos, worldDir) {
    const a = project(worldPos);
    const p = Array.isArray(worldPos) ? new THREE.Vector3(...worldPos) : worldPos.clone();
    const d = Array.isArray(worldDir) ? new THREE.Vector3(...worldDir) : worldDir.clone();
    // A short step keeps perspective from bending the angle.
    const len = d.length();
    if (len < 1e-9) return null;
    const b = project(p.add(d.multiplyScalar(0.1 / len)));
    if (!a || !b) return null;
    return screenAngleDeg(a, b);
  }

  /**
   * Resolve angle/bend now (camera at press time) and build the element.
   * @param {{
   *   worldPos: THREE.Vector3 | number[],
   *   kind: FeedbackKind,
   *   direction?: "up" | "down",
   *   worldDir?: THREE.Vector3 | number[],
   *   hinge?: THREE.Vector3 | number[],
   *   to?: THREE.Vector3 | number[],
   *   haptic?: boolean,
   * }} spec
   */
  function showFeedback(spec) {
    if (spec.haptic !== false) {
      try {
        buzz();
      } catch {
        /* never */
      }
    }
    try {
      return spawn(spec);
    } catch (err) {
      console.warn("feedback", err);
      return null;
    }
  }

  function spawn(spec) {
    if (!doc?.body || !spec?.worldPos) return null;
    let glyph = "arrow";
    let angle = -90;
    let bend = 1;
    if (spec.kind === "switch") {
      angle = switchArrowAngle(spec.direction || "up");
    } else if (spec.kind === "slide") {
      const a = spec.worldDir ? screenDirection(spec.worldPos, spec.worldDir) : null;
      if (a == null) return null;
      angle = a;
    } else if (spec.kind === "hinge") {
      const from = project(spec.worldPos);
      const to = spec.to ? project(spec.to) : null;
      const hinge = spec.hinge ? project(spec.hinge) : null;
      const arc = from && to && hinge ? hingeArc(from, to, hinge) : null;
      if (!arc) return null;
      glyph = "hinge";
      angle = arc.angle;
      bend = arc.bend;
    } else if (spec.kind === "light") {
      glyph = "ring";
      angle = 0;
    }
    const anchor = Array.isArray(spec.worldPos)
      ? new THREE.Vector3(...spec.worldPos)
      : spec.worldPos.clone();
    // The hinge arrow sits between the closed and open leaf.
    if (spec.kind === "hinge" && spec.to) {
      const to = Array.isArray(spec.to) ? new THREE.Vector3(...spec.to) : spec.to;
      anchor.lerp(to, 0.5);
    }
    const el = doc.createElement("div");
    el.className = `bp-feedback-item bp-feedback-${spec.kind}`;
    Object.assign(el.style, {
      position: "absolute",
      left: "0",
      top: "0",
      width: `${FEEDBACK_SIZE_PX}px`,
      height: `${FEEDBACK_SIZE_PX}px`,
      marginLeft: `${-FEEDBACK_SIZE_PX / 2}px`,
      marginTop: `${-FEEDBACK_SIZE_PX / 2}px`,
      willChange: "transform, opacity",
      filter: "drop-shadow(0 1px 2px rgba(0,0,0,.45))",
    });
    const svg = doc.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 32 32");
    svg.setAttribute("width", String(FEEDBACK_SIZE_PX));
    svg.setAttribute("height", String(FEEDBACK_SIZE_PX));
    svg.style.overflow = "visible";
    svg.style.transform = `rotate(${angle}deg) scale(1, ${bend})`;
    svg.innerHTML = GLYPHS[glyph];
    el.appendChild(svg);
    ensureLayer().appendChild(el);
    const item = queue.add(now(), { el, anchor, kind: spec.kind });
    place(item, 0);
    if (!running) {
      running = true;
      requestFrame(tick);
    }
    return item;
  }

  function place(item, t) {
    const { el, anchor, kind } = item.data;
    const p = project(anchor);
    if (!p) {
      el.style.opacity = "0";
      return;
    }
    const f = feedbackFrame(t, reducedMotion());
    const scale = kind === "light" ? 0.8 + 0.7 * Math.min(Math.max(t, 0), 1) : f.scale;
    const rise = kind === "light" ? 0 : f.rise;
    el.style.opacity = String(f.opacity);
    el.style.transform = `translate(${p.x.toFixed(1)}px, ${(p.y - rise).toFixed(1)}px) scale(${scale.toFixed(3)})`;
  }

  function tick() {
    const { alive, expired } = queue.step(now());
    for (const item of expired) item.data.el.remove();
    for (const { item, t } of alive) place(item, t);
    if (alive.length) requestFrame(tick);
    else running = false;
  }

  return {
    showFeedback,
    /** Visible items (tests and debugging). */
    count: () => queue.items.length,
    /** Advance one frame by hand (tests). */
    tick,
  };
}
