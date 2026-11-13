/**
 * First-person walk mode: input, camera rig, person figure and on-screen
 * controls. Physics and collider live in walkPhysics.js.
 *
 * - Desktop: the Walk button locks the mouse (Pointer Lock API). Mouse looks,
 *   W A S D or the arrow keys walk, Shift runs. A click acts on what the
 *   centre dot is on (doors, switches, windows). Esc releases the mouse; a
 *   second Esc, or the Walk button, leaves walk mode. Without a lock, drag
 *   to look.
 * - Touch (iPhone): a joystick bottom left walks; dragging anywhere else
 *   looks; a tap acts on what it lands on, as in the free camera.
 *
 * Structure for a later third-person camera: `player` (walkPhysics
 * `createPlayer`) is the only state that moves; `applyFirstPersonCamera`
 * is one rig reading it. A third-person rig would read the same player and
 * show the figure instead of hiding it.
 */
import * as THREE from "three";
import { createPersonFigure } from "./personFigure.js";
import {
  buildWalkWorld,
  createPlayer,
  eyeHeightM,
  figurePlacement,
  findSpawn,
  freeCameraAfterWalk,
  loadWalkHeight,
  saveWalkHeight,
  snapHeightCm,
  stepPlayer,
} from "./walkPhysics.js";

/** Radians of turn per pixel of locked mouse movement. */
export const MOUSE_LOOK_RAD_PER_PX = 0.0022;
/** A drag across the full canvas width turns this far (touch / unlocked). */
export const DRAG_LOOK_RAD_PER_WIDTH = Math.PI * 0.9;
export const PITCH_LIMIT_RAD = (85 * Math.PI) / 180;
/** Joystick travel radius, CSS px. */
const STICK_R = 46;

/** Keys that walk (KeyboardEvent.code). */
const KEYMAP = {
  KeyW: ["forward", 1],
  ArrowUp: ["forward", 1],
  KeyS: ["forward", -1],
  ArrowDown: ["forward", -1],
  KeyA: ["right", -1],
  ArrowLeft: ["right", -1],
  KeyD: ["right", 1],
  ArrowRight: ["right", 1],
};

/**
 * Point the camera out of the player's eyes.
 * @param {THREE.Camera} camera
 * @param {{ feet: THREE.Vector3, yaw: number, pitch: number }} player
 * @param {number} eyeY world eye height (smoothed)
 */
export function applyFirstPersonCamera(camera, player, eyeY) {
  camera.position.set(player.feet.x, eyeY, player.feet.z);
  camera.up.set(0, 1, 0);
  camera.quaternion.setFromEuler(new THREE.Euler(player.pitch, player.yaw, 0, "YXZ"));
  camera.updateMatrixWorld();
}

/**
 * Yaw and pitch of a camera's look direction.
 * @param {THREE.Camera} camera
 */
export function yawPitchOf(camera) {
  const d = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
  return { yaw: Math.atan2(-d.x, -d.z), pitch: Math.asin(Math.max(-1, Math.min(1, d.y))) };
}

/**
 * The ray walk mode spawns along. A camera inside the model, below the wall
 * tops (a room view), drops the walker straight down where it is. Otherwise
 * (a view from outside or above) the walker lands where the screen centre
 * points.
 * @param {THREE.Camera} camera
 * @param {THREE.Box3} bounds
 */
export function spawnRay(camera, bounds) {
  camera.updateMatrixWorld();
  const p = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
  if (
    !bounds.isEmpty() &&
    p.x > bounds.min.x &&
    p.x < bounds.max.x &&
    p.z > bounds.min.z &&
    p.z < bounds.max.z &&
    p.y > bounds.min.y &&
    p.y < bounds.max.y
  ) {
    return new THREE.Ray(p, new THREE.Vector3(0, -1, 0));
  }
  const ray = new THREE.Raycaster();
  ray.setFromCamera(new THREE.Vector2(0, 0), /** @type {THREE.PerspectiveCamera} */ (camera));
  return ray.ray.clone();
}

/** Sum the pressed keys into joystick axes. */
export function keysToInput(pressed, run = false) {
  let forward = 0;
  let right = 0;
  for (const code of pressed) {
    const m = KEYMAP[code];
    if (!m) continue;
    if (m[0] === "forward") forward += m[1];
    else right += m[1];
  }
  return {
    forward: Math.max(-1, Math.min(1, forward)),
    right: Math.max(-1, Math.min(1, right)),
    run,
  };
}

function isEditable(target) {
  const el = /** @type {HTMLElement | null} */ (target);
  if (!el || !el.tagName) return false;
  return el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
}

const CSS = `
.walk-crosshair { position: fixed; z-index: 2; width: 6px; height: 6px; margin: -3px 0 0 -3px;
  border-radius: 50%; background: rgba(255,255,255,0.92); box-shadow: 0 0 0 1.5px rgba(0,0,0,0.45);
  pointer-events: none; }
.walk-hint { position: fixed; z-index: 2; left: 50%; transform: translateX(-50%);
  top: calc(var(--safe-t, 0px) + 4.2rem); max-width: min(34rem, calc(100vw - 2rem));
  padding: 0.5rem 0.9rem; border-radius: 999px; font-size: 0.85rem; line-height: 1.25;
  text-align: center; color: var(--fg, #fff); background: var(--glass-strong, rgba(40,40,40,0.8));
  border: 1px solid var(--glass-border, rgba(255,255,255,0.3)); box-shadow: var(--shadow, none);
  -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px);
  pointer-events: none; transition: opacity 0.4s ease; }
.walk-hint[data-faded="1"] { opacity: 0; }
@media (max-width: 720px) { .walk-hint { top: calc(var(--safe-t, 0px) + 6.8rem); font-size: 0.78rem; } }
.walk-stick { position: fixed; z-index: 2; width: ${STICK_R * 2 + 40}px; height: ${STICK_R * 2 + 40}px;
  left: calc(var(--safe-l, 0px) + 18px);
  bottom: calc(var(--safe-b, 0px) + var(--walk-stick-bottom, 7.5rem));
  border-radius: 50%; background: var(--glass, rgba(30,30,30,0.35));
  border: 1px solid var(--glass-border, rgba(255,255,255,0.4)); box-shadow: var(--shadow, none);
  -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px);
  touch-action: none; -webkit-user-select: none; user-select: none; }
.walk-stick-knob { position: absolute; left: 50%; top: 50%; width: 54px; height: 54px;
  margin: -27px 0 0 -27px; border-radius: 50%; background: var(--glass-strong, rgba(255,255,255,0.75));
  box-shadow: 0 2px 8px rgba(0,0,0,0.3); pointer-events: none; }
`;

/**
 * @param {{
 *   canvas: HTMLCanvasElement,
 *   scene: THREE.Scene,
 *   getRoot: () => THREE.Object3D | null,
 *   getCamera: () => THREE.Camera,
 *   isDynamic?: (mesh: THREE.Mesh) => boolean,
 *   pickAt?: (clientX: number, clientY: number) => void,
 *   onBeforeEnter?: () => void,
 *   onEnter?: () => void,
 *   onExit?: (pose: { position: THREE.Vector3, target: THREE.Vector3 } | null) => void,
 *   onCamera?: (target: THREE.Vector3) => void,
 *   onChange?: () => void,
 *   t?: (key: string) => string,
 *   storage?: Storage | null,
 * }} opts
 */
export function createWalkMode(opts) {
  const { canvas, scene } = opts;
  const t = opts.t || ((k) => k);
  let heightCm = loadWalkHeight(opts.storage);
  let active = false;
  /** @type {ReturnType<typeof buildWalkWorld> | null} */
  let world = null;
  let worldStale = false;
  /** @type {ReturnType<typeof createPlayer> | null} */
  let player = null;
  let eyeY = 0;
  let lastNow = 0;
  let viewChanged = false;
  const pressed = new Set();
  let shift = false;
  const stick = { x: 0, y: 0, id: /** @type {number | null} */ (null) };
  /** Last pointer type seen on the canvas (mouse taps are ours in walk mode). */
  let lastPointerType = "mouse";
  /** Drag-to-look pointer. */
  let look = /** @type {{ id: number, x: number, y: number } | null} */ (null);
  const stats = { buildMs: 0, triangles: 0, dynamic: 0, stepMs: 0, steps: 0, stepMsTotal: 0 };
  const figure = createPersonFigure();
  scene.add(figure.object);

  // --- DOM: crosshair, hint, joystick ---
  if (typeof document !== "undefined" && !document.getElementById("walk-css")) {
    const style = document.createElement("style");
    style.id = "walk-css";
    style.textContent = CSS;
    document.head.append(style);
  }
  const crosshair = document.createElement("div");
  crosshair.className = "walk-crosshair";
  crosshair.hidden = true;
  const hint = document.createElement("div");
  hint.className = "walk-hint";
  hint.hidden = true;
  const stickEl = document.createElement("div");
  stickEl.className = "walk-stick";
  stickEl.hidden = true;
  stickEl.setAttribute("aria-hidden", "true");
  const knob = document.createElement("div");
  knob.className = "walk-stick-knob";
  stickEl.append(knob);
  document.body.append(crosshair, hint, stickEl);
  /** @type {ReturnType<typeof setTimeout> | null} */
  let hintTimer = null;

  const isTouch = () =>
    lastPointerType === "touch" ||
    (typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches);
  const canLock = () => typeof canvas.requestPointerLock === "function" && !isTouch();
  const isLocked = () => typeof document !== "undefined" && document.pointerLockElement === canvas;

  function placeOverlays() {
    const r = canvas.getBoundingClientRect();
    crosshair.style.left = `${r.left + r.width / 2}px`;
    crosshair.style.top = `${r.top + r.height / 2}px`;
  }

  function showHint(key, fadeMs = 0) {
    hint.textContent = t(key);
    hint.hidden = false;
    hint.dataset.faded = "0";
    if (hintTimer) clearTimeout(hintTimer);
    hintTimer = null;
    if (fadeMs > 0) {
      hintTimer = setTimeout(() => {
        hint.dataset.faded = "1";
      }, fadeMs);
    }
  }

  function syncOverlays() {
    placeOverlays();
    crosshair.hidden = !active;
    stickEl.hidden = !(active && isTouch());
    if (!active) {
      hint.hidden = true;
      return;
    }
    if (isTouch()) showHint("walk.hintTouch", 5000);
    else if (isLocked()) showHint("walk.hintLocked", 4000);
    else if (canLock()) showHint("walk.hintClick");
    else showHint("walk.hintDrag", 5000);
  }

  // --- Collider ---
  function ensureWorld() {
    const root = opts.getRoot();
    if (!root) return null;
    if (world && !worldStale) return world;
    world?.dispose();
    world = buildWalkWorld(root, { isDynamic: opts.isDynamic });
    worldStale = false;
    stats.buildMs = world.buildMs;
    stats.triangles = world.triangleCount;
    stats.dynamic = world.dynamicCount;
    return world;
  }

  // --- Enter / exit ---
  /**
   * @param {{ lock?: boolean }} [o]
   * @returns {boolean}
   */
  function enter(o = {}) {
    if (active) return true;
    if (!opts.getRoot()) return false;
    opts.onBeforeEnter?.();
    const w = ensureWorld();
    if (!w) return false;
    const camera = opts.getCamera();
    camera.updateMatrixWorld();
    const spot = findSpawn(w, spawnRay(camera, w.bounds), heightCm);
    if (!spot) {
      showHint("walk.noSpot", 3000);
      return false;
    }
    const { yaw } = yawPitchOf(camera);
    player = createPlayer({ feet: spot, yaw, pitch: -0.08, heightCm });
    eyeY = spot.y + eyeHeightM(heightCm);
    active = true;
    lastNow = 0;
    figure.show(false);
    opts.onEnter?.();
    applyCamera();
    if (o.lock && canLock()) requestLock();
    syncOverlays();
    opts.onChange?.();
    return true;
  }

  /**
   * @param {{ keepCamera?: boolean }} [o] keepCamera: something else (a
   *   preset) is about to place the camera
   */
  function exit(o = {}) {
    if (!active) return;
    active = false;
    pressed.clear();
    resetStick();
    look = null;
    if (isLocked()) document.exitPointerLock?.();
    let pose = null;
    if (player) {
      figure.place(figurePlacement(player));
      figure.show(true);
      if (!o.keepCamera) pose = freeCameraAfterWalk(player, world);
    }
    world?.dispose();
    world = null;
    syncOverlays();
    opts.onExit?.(pose);
    opts.onChange?.();
  }

  function requestLock() {
    try {
      const p = canvas.requestPointerLock();
      if (p && typeof p.catch === "function") p.catch(() => syncOverlays());
    } catch {
      /* unsupported */
    }
  }

  const _target = new THREE.Vector3();
  function applyCamera() {
    if (!player) return;
    const camera = opts.getCamera();
    applyFirstPersonCamera(camera, player, eyeY);
    // Keep the orbit target one metre ahead so near/far and anything else
    // that reads it stay sensible.
    _target.set(0, 0, -1).applyQuaternion(camera.quaternion).add(camera.position);
    opts.onCamera?.(_target);
  }

  /**
   * Advance one frame. Returns true when the camera moved.
   * @param {number} now ms
   */
  function update(now) {
    if (!active || !player) return false;
    const dt = lastNow ? Math.min(0.1, Math.max(0, (now - lastNow) / 1000)) : 0;
    lastNow = now;
    if (worldStale) ensureWorld();
    const w = world;
    if (!w) return false;
    const input = keysToInput(pressed, shift);
    if (stick.id != null) {
      input.forward = Math.max(-1, Math.min(1, input.forward - stick.y));
      input.right = Math.max(-1, Math.min(1, input.right + stick.x));
    }
    const before = [player.feet.x, player.feet.y, player.feet.z, eyeY];
    const t0 = performance.now();
    if (dt > 0) stepPlayer(player, input, dt, w);
    const ms = performance.now() - t0;
    stats.stepMs = ms;
    stats.steps += 1;
    stats.stepMsTotal += ms;
    const goal = player.feet.y + eyeHeightM(player.heightCm);
    // Ease the eye over steps; jump on a teleport.
    if (Math.abs(goal - eyeY) > 1) eyeY = goal;
    else eyeY += (goal - eyeY) * (1 - Math.exp(-dt / 0.07));
    if (Math.abs(goal - eyeY) < 1e-4) eyeY = goal;
    applyCamera();
    const moved =
      viewChanged ||
      before[0] !== player.feet.x ||
      before[1] !== player.feet.y ||
      before[2] !== player.feet.z ||
      before[3] !== eyeY;
    viewChanged = false;
    return moved;
  }

  function turn(dYaw, dPitch) {
    if (!player) return;
    player.yaw += dYaw;
    player.pitch = Math.max(-PITCH_LIMIT_RAD, Math.min(PITCH_LIMIT_RAD, player.pitch + dPitch));
    viewChanged = true;
    applyCamera();
    opts.onChange?.();
  }

  // --- Input ---
  function onKeyDown(ev) {
    if (!active || isEditable(ev.target)) return;
    if (ev.key === "Shift") shift = true;
    if (ev.code === "Escape" && !isLocked()) {
      exit();
      return;
    }
    if (KEYMAP[ev.code]) {
      pressed.add(ev.code);
      ev.preventDefault();
    }
  }
  function onKeyUp(ev) {
    if (ev.key === "Shift") shift = false;
    pressed.delete(ev.code);
  }
  function onBlur() {
    pressed.clear();
    shift = false;
  }
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  window.addEventListener("blur", onBlur);

  document.addEventListener("pointerlockchange", () => {
    if (active) syncOverlays();
  });
  document.addEventListener("mousemove", (ev) => {
    if (!active || !isLocked()) return;
    turn(-ev.movementX * MOUSE_LOOK_RAD_PER_PX, -ev.movementY * MOUSE_LOOK_RAD_PER_PX);
  });

  // Window capture runs before the canvas listeners (doors.js), so the door
  // controller already knows the pointer type when it asks `blocksPointerTaps`.
  window.addEventListener(
    "pointerdown",
    (ev) => {
      if (ev.target === canvas) lastPointerType = ev.pointerType || "mouse";
    },
    true,
  );
  let downAt = /** @type {{ x: number, y: number } | null} */ (null);
  canvas.addEventListener("pointerdown", (ev) => {
    if (!active) return;
    if (ev.pointerType === "mouse" && isLocked()) {
      if (ev.button === 0) {
        const r = canvas.getBoundingClientRect();
        opts.pickAt?.(r.left + r.width / 2, r.top + r.height / 2);
      }
      return;
    }
    downAt = { x: ev.clientX, y: ev.clientY };
    if (look) return;
    look = { id: ev.pointerId, x: ev.clientX, y: ev.clientY };
  });
  canvas.addEventListener("pointermove", (ev) => {
    if (!active || !look || ev.pointerId !== look.id) return;
    const w = Math.max(1, canvas.clientWidth);
    const k = DRAG_LOOK_RAD_PER_WIDTH / w;
    const dx = ev.clientX - look.x;
    const dy = ev.clientY - look.y;
    look.x = ev.clientX;
    look.y = ev.clientY;
    // Same sense as mouse look: drag right turns right, drag up looks up.
    turn(-dx * k, -dy * k);
  });
  const endLook = (ev) => {
    if (look && ev.pointerId === look.id) look = null;
    if (!active || ev.type !== "pointerup") return;
    const moved = downAt ? Math.hypot(ev.clientX - downAt.x, ev.clientY - downAt.y) : 99;
    downAt = null;
    // A mouse click without the lock takes the lock.
    if (ev.pointerType === "mouse" && moved < 6 && canLock() && !isLocked()) requestLock();
  };
  canvas.addEventListener("pointerup", endLook);
  canvas.addEventListener("pointercancel", endLook);

  function resetStick() {
    stick.x = 0;
    stick.y = 0;
    stick.id = null;
    knob.style.transform = "";
  }
  function moveStick(ev) {
    const r = stickEl.getBoundingClientRect();
    let dx = ev.clientX - (r.left + r.width / 2);
    let dy = ev.clientY - (r.top + r.height / 2);
    const len = Math.hypot(dx, dy);
    if (len > STICK_R) {
      dx = (dx / len) * STICK_R;
      dy = (dy / len) * STICK_R;
    }
    stick.x = dx / STICK_R;
    stick.y = dy / STICK_R;
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
  }
  stickEl.addEventListener("pointerdown", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    stick.id = ev.pointerId;
    try {
      stickEl.setPointerCapture?.(ev.pointerId);
    } catch {
      /* synthetic or already released pointer */
    }
    moveStick(ev);
  });
  stickEl.addEventListener("pointermove", (ev) => {
    if (ev.pointerId !== stick.id) return;
    ev.preventDefault();
    moveStick(ev);
  });
  const endStick = (ev) => {
    if (ev.pointerId !== stick.id) return;
    resetStick();
  };
  stickEl.addEventListener("pointerup", endStick);
  stickEl.addEventListener("pointercancel", endStick);
  window.addEventListener("resize", () => {
    if (active) placeOverlays();
  });

  return {
    figure,
    enter,
    exit,
    toggle(o) {
      if (active) exit();
      else enter(o);
      return active;
    },
    update,
    get active() {
      return active;
    },
    get player() {
      return player;
    },
    get heightCm() {
      return heightCm;
    },
    /** @param {number} cm */
    setHeight(cm) {
      heightCm = snapHeightCm(cm);
      saveWalkHeight(heightCm, opts.storage);
      if (player) {
        player.heightCm = heightCm;
        viewChanged = true;
      }
      if (!active && figure.visible && player) figure.place(figurePlacement(player));
      opts.onChange?.();
      return heightCm;
    },
    /** True when a mouse tap on the canvas is walk mode's, not the door controller's. */
    blocksPointerTaps() {
      return active && lastPointerType === "mouse" && (isLocked() || canLock());
    },
    /** Rebuild the collider before the next step (cuts, hides, opacities changed). */
    markColliderStale() {
      if (world) worldStale = true;
    },
    /** Debug / headless checks: set the pose directly. */
    setPose({ feet, yaw, pitch }) {
      if (!player) return;
      if (feet) player.feet.set(feet[0], feet[1], feet[2]);
      if (yaw != null) player.yaw = yaw;
      if (pitch != null) player.pitch = pitch;
      eyeY = player.feet.y + eyeHeightM(player.heightCm);
      viewChanged = true;
      applyCamera();
      opts.onChange?.();
    },
    /** Debug: hold keys as if pressed (`["KeyW"]`), for headless runs. */
    hold(codes = []) {
      pressed.clear();
      for (const c of codes) pressed.add(c);
    },
    /**
     * Debug / headless checks: true when the static collider has a surface
     * between two feet positions at hip height (a walk crossed a wall).
     * @param {number[]} a feet [x, y, z]
     * @param {number[]} b feet [x, y, z]
     */
    crossesStatic(a, b) {
      if (!world) return null;
      const from = new THREE.Vector3(a[0], a[1] + 1, a[2]);
      const to = new THREE.Vector3(b[0], b[1] + 1, b[2]);
      const len = from.distanceTo(to);
      if (len < 1e-6) return false;
      const ray = new THREE.Ray(from, to.sub(from).normalize());
      return Boolean(world.bvh.raycastFirst(ray, THREE.DoubleSide, 0, len));
    },
    stats,
    get world() {
      return world;
    },
  };
}
