/**
 * First-person walk physics (Petr, 2026-11-13: "let me set the person height
 * and give me a first person camera that walks around using arrows or wsad
 * and can collide with walls and furniture").
 *
 * No Three.js scene state and no DOM: this file takes meshes, builds a
 * collider, and moves a player. walkMode.js owns input, camera and figure.
 * The player state is separate from any camera so a third-person rig can be
 * added later on top of the same state.
 *
 * Collider (after three-mesh-bvh's `characterMovement` example):
 * - Static: every drawn solid merged into one world-space MeshBVH. Built when
 *   walk mode starts, disposed when it ends.
 * - Dynamic: door leaves, drawers and sliding panes. They are small, so each
 *   keeps its local triangles and is tested in its own frame against the
 *   capsule, with a world-box precheck. An open door therefore never blocks
 *   its doorway, and a closed one always does, with no BVH refit.
 *
 * Body: a vertical capsule from `STEP_HEIGHT_M` above the feet to the top of
 * the head. Anything lower than the step height is stepped onto by the
 * ground probe (five short rays down) instead of blocking. Gravity pulls the
 * player down to the highest walkable surface under it; a ground plane at
 * the model's lowest point stops any fall-through.
 *
 * What collides follows PR 117's drawn-surface rule (tapTargets.js): only
 * surfaces shown through every ancestor, not session-hidden, and not cut away
 * by a section plane. Glass collides (you cannot walk through a window), and
 * faded parts still collide: fading is a view setting, not demolition.
 */
import * as THREE from "three";
import { ExtendedTriangle, MeshBVH } from "three-mesh-bvh";
import { isSceneSolid } from "./interactions.js";
import { isClippedAt, isShownInScene } from "./tapTargets.js";

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
/** Highest ledge the walker steps onto instead of being blocked by. */
export const STEP_HEIGHT_M = 0.22;
/** How far the walker follows the floor down a step while grounded. */
export const SNAP_DOWN_M = 0.3;
export const WALK_SPEED_MPS = 1.4;
export const RUN_SPEED_MPS = 3.0;
export const GRAVITY_MPS2 = 9.81;
/** Longest physics sub-step; keeps travel per step far below a wall's width. */
export const MAX_SUBSTEP_S = 1 / 120;
/** Surfaces this flat or flatter can be stood on (|normal.y|). */
export const WALKABLE_NORMAL_Y = 0.6;

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
 * Capsule radius: about shoulder half-width, small enough for a 60 cm door
 * leaf in a bathroom (≈ 0.2 m at 186 cm).
 * @param {number} heightCm
 */
export function bodyRadiusM(heightCm) {
  return Math.min(0.22, Math.max(0.12, (snapHeightCm(heightCm) / 100) * 0.11));
}

const HEIGHT_KEY = "blueprints.walkHeightCm";

/** @param {Storage | null | undefined} [storage] */
export function loadWalkHeight(storage) {
  try {
    const s = storage ?? (typeof localStorage !== "undefined" ? localStorage : null);
    const raw = s?.getItem(HEIGHT_KEY);
    if (raw != null && raw !== "") return snapHeightCm(Number(raw));
  } catch {
    /* ignore */
  }
  return HEIGHT_DEFAULT_CM;
}

/**
 * @param {number} cm
 * @param {Storage | null | undefined} [storage]
 */
export function saveWalkHeight(cm, storage) {
  try {
    const s = storage ?? (typeof localStorage !== "undefined" ? localStorage : null);
    s?.setItem(HEIGHT_KEY, String(snapHeightCm(cm)));
  } catch {
    /* ignore */
  }
}

/**
 * Default collider filter: a drawn solid mesh (PR 117 rule) with geometry.
 * @param {THREE.Object3D} obj
 */
export function isCollidable(obj) {
  if (!obj || !obj.isMesh || obj.isInstancedMesh || obj.isSkinnedMesh) return false;
  if (!obj.geometry?.getAttribute?.("position")) return false;
  if (obj.userData?.bpWalkFigure) return false;
  if (!isSceneSolid(obj) || !isShownInScene(obj)) return false;
  return true;
}

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();

/**
 * Triangles of `mesh` as a flat array in the mesh's local frame.
 * @param {THREE.Mesh} mesh
 * @returns {Float32Array}
 */
function localTriangles(mesh) {
  const geom = mesh.geometry;
  const pos = geom.getAttribute("position");
  const index = geom.index;
  const count = index ? index.count : pos.count;
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const vi = index ? index.getX(i) : i;
    out[i * 3] = pos.getX(vi);
    out[i * 3 + 1] = pos.getY(vi);
    out[i * 3 + 2] = pos.getZ(vi);
  }
  return out;
}

/** How far a door leaf, drawer or pane can move from where it was at build. */
export const DYNAMIC_REACH_M = 2.5;

/**
 * Height of the virtual floor plane, used where the model has no floor
 * surface (ground_floor has no slabs outside the bathrooms). Elevation 0 is
 * the finished floor, datum ±0.000 (docs/design/ground-floor.md), so the
 * plane sits at 0 when the model spans it, else at the model's lowest point.
 * @param {THREE.Box3} bounds
 */
export function floorLevel(bounds) {
  if (bounds.isEmpty()) return 0;
  return bounds.min.y <= 1e-6 && bounds.max.y >= 0 ? 0 : bounds.min.y;
}

/**
 * Build the walk collider from a model root.
 * @param {THREE.Object3D} root
 * @param {{ isDynamic?: (mesh: THREE.Mesh) => boolean, keep?: (mesh: THREE.Mesh) => boolean }} [opts]
 */
export function buildWalkWorld(root, opts = {}) {
  const t0 = typeof performance !== "undefined" ? performance.now() : Date.now();
  const keep = opts.keep || isCollidable;
  const isDynamic = opts.isDynamic || (() => false);
  root.updateWorldMatrix(true, true);
  /** @type {Float32Array[]} */
  const parts = [];
  let total = 0;
  /** @type {{ mesh: THREE.Mesh, tris: Float32Array, box: THREE.Box3, reach: THREE.Box3 }[]} */
  const dynamic = [];
  const bounds = new THREE.Box3();

  root.traverse((obj) => {
    if (!keep(obj)) return;
    const mesh = /** @type {THREE.Mesh} */ (obj);
    const local = localTriangles(mesh);
    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    const worldBox = mesh.geometry.boundingBox.clone().applyMatrix4(mesh.matrixWorld);
    if (isDynamic(mesh)) {
      dynamic.push({
        mesh,
        tris: local,
        box: mesh.geometry.boundingBox.clone(),
        // Everywhere it can get to: where it is now plus its travel.
        reach: worldBox.clone().expandByScalar(DYNAMIC_REACH_M),
      });
      bounds.union(worldBox);
      return;
    }
    const world = new Float32Array(local.length);
    let n = 0;
    const m = mesh.matrixWorld;
    for (let i = 0; i < local.length; i += 9) {
      _a.set(local[i], local[i + 1], local[i + 2]).applyMatrix4(m);
      _b.set(local[i + 3], local[i + 4], local[i + 5]).applyMatrix4(m);
      _c.set(local[i + 6], local[i + 7], local[i + 8]).applyMatrix4(m);
      // A triangle cut away by a section plane does not collide. One that
      // straddles the plane stays whole (a few centimetres of slack).
      if (isClippedAt(mesh, _a) && isClippedAt(mesh, _b) && isClippedAt(mesh, _c)) continue;
      world[n++] = _a.x;
      world[n++] = _a.y;
      world[n++] = _a.z;
      world[n++] = _b.x;
      world[n++] = _b.y;
      world[n++] = _b.z;
      world[n++] = _c.x;
      world[n++] = _c.y;
      world[n++] = _c.z;
      bounds.expandByPoint(_a).expandByPoint(_b).expandByPoint(_c);
    }
    if (n) {
      parts.push(world.subarray(0, n));
      total += n;
    }
  });
  const merged = new Float32Array(Math.max(total, 9));
  let off = 0;
  for (const p of parts) {
    merged.set(p, off);
    off += p.length;
  }
  if (!total) {
    // An empty model still gets a (degenerate) BVH so queries work.
    merged.fill(0);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(merged, 3));
  const bvh = new MeshBVH(geometry, { targetLeafSize: 10 });
  const groundY = floorLevel(bounds);
  const t1 = typeof performance !== "undefined" ? performance.now() : Date.now();
  return {
    bvh,
    geometry,
    dynamic,
    /** Dynamic colliders near the player, refreshed once per `stepPlayer`. */
    nearby: dynamic.slice(),
    bounds,
    /** Virtual floor plane where there is no floor surface (`floorLevel`). */
    groundY,
    triangleCount: total / 9,
    dynamicCount: dynamic.length,
    buildMs: t1 - t0,
    dispose() {
      geometry.dispose();
      dynamic.length = 0;
    },
  };
}

/**
 * @typedef {ReturnType<typeof buildWalkWorld>} WalkWorld
 * @typedef {{
 *   feet: THREE.Vector3,
 *   velocity: THREE.Vector3,
 *   yaw: number,
 *   pitch: number,
 *   heightCm: number,
 *   grounded: boolean,
 * }} Player
 */

/**
 * @param {{ feet?: THREE.Vector3, yaw?: number, pitch?: number, heightCm?: number }} [init]
 * @returns {Player}
 */
export function createPlayer(init = {}) {
  return {
    feet: init.feet ? init.feet.clone() : new THREE.Vector3(),
    velocity: new THREE.Vector3(),
    yaw: init.yaw ?? 0,
    pitch: init.pitch ?? 0,
    heightCm: snapHeightCm(init.heightCm ?? HEIGHT_DEFAULT_CM),
    grounded: true,
  };
}

/** Eye position for a player. */
export function eyePosition(player, target = new THREE.Vector3()) {
  return target.copy(player.feet).setY(player.feet.y + eyeHeightM(player.heightCm));
}

/**
 * Horizontal look direction for `yaw` (0 looks along −Z, like a three.js camera).
 * @param {number} yaw
 */
export function forwardOf(yaw, target = new THREE.Vector3()) {
  return target.set(-Math.sin(yaw), 0, -Math.cos(yaw));
}

/** @param {number} yaw */
export function rightOf(yaw, target = new THREE.Vector3()) {
  return target.set(Math.cos(yaw), 0, -Math.sin(yaw));
}

const _seg = new THREE.Line3();
const _segLocal = new THREE.Line3();
const _box = new THREE.Box3();
const _dynBox = new THREE.Box3();
const _triPt = new THREE.Vector3();
const _capPt = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _n = new THREE.Vector3();
const _mid = new THREE.Vector3();
const _inv = new THREE.Matrix4();
const _tri = new ExtendedTriangle();
const _push = new THREE.Vector3();
const _sweep = new THREE.Box3();

/**
 * Push one segment out of a triangle (in the segment's frame). Mutates seg.
 * @returns {boolean} true when it touched
 */
function pushOut(tri, seg, radius) {
  const d = tri.closestPointToSegment(seg, _triPt, _capPt);
  if (d >= radius) return false;
  if (d > 1e-7) {
    _dir.subVectors(_capPt, _triPt).divideScalar(d);
  } else {
    // The capsule axis touches the triangle: push along its normal, toward
    // the side the capsule's middle is on.
    tri.getNormal(_n);
    seg.getCenter(_mid);
    if (_n.dot(_mid.sub(_triPt)) < 0) _n.negate();
    _dir.copy(_n);
  }
  const depth = radius - d;
  seg.start.addScaledVector(_dir, depth);
  seg.end.addScaledVector(_dir, depth);
  return true;
}

/**
 * The body capsule's axis for a feet position.
 * @param {THREE.Vector3} feet
 * @param {number} heightCm
 * @param {THREE.Line3} [target]
 */
export function bodySegment(feet, heightCm, target = new THREE.Line3()) {
  const r = bodyRadiusM(heightCm);
  const h = snapHeightCm(heightCm) / 100;
  const lo = feet.y + STEP_HEIGHT_M + r;
  const hi = Math.max(lo, feet.y + h - r);
  target.start.set(feet.x, lo, feet.z);
  target.end.set(feet.x, hi, feet.z);
  return target;
}

/**
 * Resolve the body capsule at `feet` against the world. Moves `feet`
 * horizontally out of anything it overlaps.
 * @param {WalkWorld} world
 * @param {THREE.Vector3} feet
 * @param {number} heightCm
 * @param {object[]} [dynamics] dynamic colliders to test (default: those
 *   near the player as of the last `stepPlayer`)
 * @returns {number} number of triangles touched
 */
export function resolveBody(world, feet, heightCm, dynamics = world.nearby || world.dynamic) {
  const r = bodyRadiusM(heightCm);
  bodySegment(feet, heightCm, _seg);
  const sx = _seg.start.x;
  const sz = _seg.start.z;
  let touched = 0;
  _box.makeEmpty();
  _box.expandByPoint(_seg.start).expandByPoint(_seg.end);
  _box.min.addScalar(-r);
  _box.max.addScalar(r);
  world.bvh.shapecast({
    intersectsBounds: (b) => b.intersectsBox(_box),
    intersectsTriangle: (tri) => {
      if (pushOut(tri, _seg, r)) touched++;
      return false;
    },
  });
  for (const dyn of dynamics) {
    const mesh = dyn.mesh;
    if (!isShownInScene(mesh) || mesh.userData?.bpIfcHidden) continue;
    // matrixWorld is as of the last render (or the caller's update), which
    // is when the leaf was last drawn.
    _dynBox.copy(dyn.box).applyMatrix4(mesh.matrixWorld);
    _box.makeEmpty();
    _box.expandByPoint(_seg.start).expandByPoint(_seg.end);
    _box.min.addScalar(-r);
    _box.max.addScalar(r);
    if (!_dynBox.intersectsBox(_box)) continue;
    _inv.copy(mesh.matrixWorld).invert();
    const scale = mesh.matrixWorld.getMaxScaleOnAxis() || 1;
    _segLocal.copy(_seg).applyMatrix4(_inv);
    const rl = r / scale;
    const t = dyn.tris;
    let hit = false;
    for (let i = 0; i < t.length; i += 9) {
      _tri.a.set(t[i], t[i + 1], t[i + 2]);
      _tri.b.set(t[i + 3], t[i + 4], t[i + 5]);
      _tri.c.set(t[i + 6], t[i + 7], t[i + 8]);
      _tri.needsUpdate = true;
      if (pushOut(_tri, _segLocal, rl)) {
        touched++;
        hit = true;
      }
    }
    if (hit) _seg.copy(_segLocal).applyMatrix4(mesh.matrixWorld);
  }
  // Only the horizontal part moves the walker; floors and ceilings are the
  // ground probe's business.
  _push.set(_seg.start.x - sx, 0, _seg.start.z - sz);
  feet.add(_push);
  return touched;
}

/**
 * True when the capsule at `feet` overlaps nothing (spawn check).
 * @param {WalkWorld} world
 * @param {THREE.Vector3} feet
 * @param {number} heightCm
 */
export function bodyFits(world, feet, heightCm) {
  const r = bodyRadiusM(heightCm);
  // Full height check from just above the floor, so a spawn never sits in a
  // low cabinet either.
  const seg = bodySegment(feet, heightCm, new THREE.Line3());
  seg.start.y = Math.min(seg.end.y, feet.y + 0.05 + r);
  const box = new THREE.Box3().expandByPoint(seg.start).expandByPoint(seg.end);
  box.min.addScalar(-r);
  box.max.addScalar(r);
  let hit = false;
  world.bvh.shapecast({
    intersectsBounds: (b) => b.intersectsBox(box),
    intersectsTriangle: (tri) => {
      if (tri.closestPointToSegment(seg, _triPt, _capPt) < r) hit = true;
      return hit;
    },
  });
  if (hit) return false;
  const probe = feet.clone();
  return resolveBody(world, probe, heightCm, world.dynamic) === 0;
}

const _ray = new THREE.Ray();
const _down = new THREE.Vector3(0, -1, 0);

/**
 * Highest walkable surface under (x, z) between `top` and `top - depth`, or
 * null. The world's ground plane counts too.
 * @param {WalkWorld} world
 * @param {number} x
 * @param {number} z
 * @param {number} top
 * @param {number} depth
 * @returns {number | null}
 */
export function groundHeightAt(world, x, z, top, depth) {
  _ray.origin.set(x, top, z);
  _ray.direction.copy(_down);
  const ys = walkableHits(world, top, depth);
  return ys.length ? ys[ys.length - 1] : null;
}

/** A modelled floor this close to the floor plane replaces it (sloped tiles). */
const PLANE_YIELD_M = 0.05;

/**
 * Walkable heights along `_ray` (already set), lowest first, plus the floor
 * plane unless a modelled surface lies within `PLANE_YIELD_M` of it, so a
 * tiled floor falling to a drain is walked on as modelled.
 * @param {WalkWorld} world
 * @param {number} top ray origin y
 * @param {number} depth
 */
function walkableHits(world, top, depth) {
  const ys = [];
  for (const h of world.bvh.raycast(_ray, THREE.DoubleSide, 0, depth)) {
    if (h.face && Math.abs(h.face.normal.y) >= WALKABLE_NORMAL_Y) ys.push(h.point.y);
  }
  const gy = world.groundY;
  if (
    Number.isFinite(gy) &&
    gy <= top &&
    gy >= top - depth &&
    !ys.some((y) => Math.abs(y - gy) < PLANE_YIELD_M)
  ) {
    ys.push(gy);
  }
  return ys.sort((a, b) => a - b);
}

/** Ground probe offsets as fractions of the body radius. */
const PROBES = [
  [0, 0],
  [0.6, 0],
  [-0.6, 0],
  [0, 0.6],
  [0, -0.6],
];

/**
 * @param {WalkWorld} world
 * @param {THREE.Vector3} feet
 * @param {number} heightCm
 * @param {number} depth below feet
 */
function probeGround(world, feet, heightCm, depth) {
  const r = bodyRadiusM(heightCm);
  const top = feet.y + STEP_HEIGHT_M + 0.01;
  let best = null;
  for (const [ox, oz] of PROBES) {
    const g = groundHeightAt(world, feet.x + ox * r, feet.z + oz * r, top, top - feet.y + depth);
    if (g !== null && (best === null || g > best)) best = g;
  }
  return best;
}

/**
 * One physics step. `input.forward` / `input.right` are −1…1 (joystick or
 * keys); `input.run` sprints.
 * @param {Player} player
 * @param {{ forward?: number, right?: number, run?: boolean }} input
 * @param {number} dt seconds
 * @param {WalkWorld} world
 */
export function stepPlayer(player, input, dt, world) {
  if (!(dt > 0)) return player;
  const steps = Math.max(1, Math.ceil(Math.min(dt, 0.1) / MAX_SUBSTEP_S));
  const h = Math.min(dt, 0.1) / steps;
  const fwd = forwardOf(player.yaw, new THREE.Vector3());
  const right = rightOf(player.yaw, new THREE.Vector3());
  let f = Number(input.forward) || 0;
  let s = Number(input.right) || 0;
  const len = Math.hypot(f, s);
  if (len > 1) {
    f /= len;
    s /= len;
  }
  const speed = input.run ? RUN_SPEED_MPS : WALK_SPEED_MPS;
  const want = new THREE.Vector3()
    .addScaledVector(fwd, f * speed)
    .addScaledVector(right, s * speed);
  player.velocity.x = want.x;
  player.velocity.z = want.z;
  if (world.dynamic.length) {
    // Leaves, drawers and panes this frame's movement could touch.
    const pad = bodyRadiusM(player.heightCm) + speed * Math.min(dt, 0.1) + 0.3;
    const f = player.feet;
    _sweep.min.set(f.x - pad, f.y - 0.5, f.z - pad);
    _sweep.max.set(f.x + pad, f.y + snapHeightCm(player.heightCm) / 100 + 0.5, f.z + pad);
    const near = [];
    for (const d of world.dynamic) {
      if (!d.reach.intersectsBox(_sweep)) continue;
      _dynBox.copy(d.box).applyMatrix4(d.mesh.matrixWorld);
      if (_dynBox.intersectsBox(_sweep)) near.push(d);
    }
    world.nearby = near;
  }
  for (let i = 0; i < steps; i++) {
    player.feet.x += player.velocity.x * h;
    player.feet.z += player.velocity.z * h;
    resolveBody(world, player.feet, player.heightCm);
    resolveBody(world, player.feet, player.heightCm);
    // Vertical: snap to the floor (up a step, or down while grounded), else fall.
    const vy = player.velocity.y - GRAVITY_MPS2 * h;
    const fall = Math.max(0, -vy * h);
    const reach = player.grounded ? Math.max(SNAP_DOWN_M, fall) : fall + 0.01;
    const g = probeGround(world, player.feet, player.heightCm, reach);
    if (g !== null && (g >= player.feet.y - 1e-6 || player.grounded || player.feet.y + vy * h <= g)) {
      player.feet.y = g;
      player.velocity.y = 0;
      player.grounded = true;
    } else {
      player.feet.y += vy * h;
      player.velocity.y = vy;
      player.grounded = false;
    }
    // Belt and braces: never below the model's lowest point.
    const lowest = world.bounds.isEmpty() ? world.groundY : Math.min(world.groundY, world.bounds.min.y);
    if (Number.isFinite(lowest) && player.feet.y < lowest) {
      player.feet.y = lowest;
      player.velocity.y = 0;
      player.grounded = true;
    }
  }
  return player;
}

/** A spawn this far above the lowest floor under the look point is a ledge. */
const SPAWN_LEDGE_M = STEP_HEIGHT_M;

/**
 * Walkable surface heights on a vertical line from `top` down `depth`,
 * lowest first. The world's ground plane counts too.
 * @param {WalkWorld} world
 */
function walkableOnLine(world, x, z, top, depth) {
  _ray.origin.set(x, top, z);
  _ray.direction.copy(_down);
  return walkableHits(world, top, depth);
}

/**
 * Lowest walkable surface on a vertical line where the body fits, no higher
 * than `maxY`. Lowest, so the top of a wall or wardrobe never wins over the
 * room floor beside it.
 * @returns {THREE.Vector3 | null}
 */
function floorOnLine(world, x, z, top, depth, heightCm, maxY = Infinity) {
  for (const y of walkableOnLine(world, x, z, top, depth)) {
    if (y > maxY) break;
    // Settle onto a finish lying on this surface (tile on slab).
    const feet = new THREE.Vector3(x, y, z);
    const settled = groundHeightAt(world, x, z, y + STEP_HEIGHT_M, STEP_HEIGHT_M + 0.01);
    if (settled !== null) feet.y = settled;
    if (bodyFits(world, feet, heightCm)) return feet;
  }
  return null;
}

/**
 * Where to put the walker for a look ray (camera through the screen centre).
 * Takes the floor under the first surface the ray reaches. When the body does
 * not fit there (a wall, a cabinet), searches rings around it, 25 cm apart
 * out to 3 m, first at that floor's level and only then on ledges. Never
 * returns a spot inside geometry; null when nothing fits.
 * @param {WalkWorld} world
 * @param {THREE.Ray} lookRay world space
 * @param {number} heightCm
 * @returns {THREE.Vector3 | null}
 */
export function findSpawn(world, lookRay, heightCm) {
  const b = world.bounds;
  let x;
  let z;
  let top;
  let hit = world.bvh.raycastFirst(lookRay, THREE.DoubleSide);
  // The floor plane counts as a surface where the model has none.
  const gy = world.groundY;
  const dy = lookRay.direction.y;
  if (Number.isFinite(gy) && dy < -1e-6 && lookRay.origin.y > gy) {
    const tPlane = (gy - lookRay.origin.y) / dy;
    if (!hit || tPlane < hit.distance - 1e-6) {
      hit = {
        point: lookRay.at(tPlane, new THREE.Vector3()),
        distance: tPlane,
        face: { normal: new THREE.Vector3(0, 1, 0) },
      };
    }
  }
  if (hit) {
    const p = hit.point.clone();
    // Hit a wall face: step back toward the viewer, off the wall.
    if (hit.face && Math.abs(hit.face.normal.y) < WALKABLE_NORMAL_Y) {
      const back = lookRay.direction.clone().setY(0);
      if (back.lengthSq() > 1e-9) p.addScaledVector(back.normalize(), -(bodyRadiusM(heightCm) + 0.1));
    }
    x = p.x;
    z = p.z;
    top = p.y + 0.05;
  } else if (!b.isEmpty()) {
    const c = b.getCenter(new THREE.Vector3());
    x = c.x;
    z = c.z;
    top = b.max.y + 0.05;
  } else {
    return null;
  }
  const low = Number.isFinite(world.groundY) ? world.groundY : top - 10;
  const depth = Math.max(0.1, top - low + 0.05);
  const under = walkableOnLine(world, x, z, top, depth);
  const floorY = under.length ? under[0] : low;
  const maxY = floorY + SPAWN_LEDGE_M;
  for (const ledges of [false, true]) {
    const cap = ledges ? Infinity : maxY;
    const first = floorOnLine(world, x, z, top, depth, heightCm, cap);
    if (first) return first;
    for (let ring = 1; ring <= 12; ring++) {
      const rad = ring * 0.25;
      const n = 8 * ring;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2;
        const spot = floorOnLine(world, x + Math.cos(a) * rad, z + Math.sin(a) * rad, top, depth, heightCm, cap);
        if (spot) return spot;
      }
    }
  }
  return null;
}

/**
 * Where the person figure stands when walk mode ends: at the feet, facing
 * the way the walker looked, scaled so its top is the body height (the
 * figure is modelled 1 m tall).
 * @param {Player} player
 */
export function figurePlacement(player) {
  return {
    position: player.feet.clone(),
    yaw: player.yaw,
    scale: snapHeightCm(player.heightCm) / 100,
  };
}

/**
 * Free-camera pose after walking: behind and above the walker, looking at
 * the figure's chest, so the figure is in view.
 * @param {Player} player
 */
export function freeCameraAfterWalk(player) {
  const h = snapHeightCm(player.heightCm) / 100;
  const target = player.feet.clone().setY(player.feet.y + h * 0.55);
  const back = forwardOf(player.yaw, new THREE.Vector3()).multiplyScalar(-4.2);
  const position = target.clone().add(back).setY(target.y + 4.2);
  return { position, target };
}
