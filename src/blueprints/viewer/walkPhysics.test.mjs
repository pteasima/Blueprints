/**
 * Walk mode physics: walls, doorways, doors, steps, falling, height slider
 * detents, eye height, figure placement. Run from this directory:
 * node walkPhysics.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  EYE_RATIO,
  HEIGHT_DEFAULT_CM,
  HEIGHT_MAX_CM,
  HEIGHT_MIN_CM,
  STEP_HEIGHT_M,
  bodyFits,
  bodyRadiusM,
  buildWalkWorld,
  createPlayer,
  eyeHeightM,
  eyePosition,
  figurePlacement,
  findSpawn,
  freeCameraAfterWalk,
  forwardOf,
  loadWalkHeight,
  saveWalkHeight,
  snapHeightCm,
  stepPlayer,
} from "./walkPhysics.js";

const mat = () => new THREE.MeshStandardMaterial();

/** Axis-aligned box from min/max corners (metres, Y up). */
function box(min, max, name = "masonry") {
  const size = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
  const m = new THREE.Mesh(new THREE.BoxGeometry(...size), mat());
  m.position.set((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2);
  m.name = name;
  return m;
}

/**
 * A 6 × 6 m room on a slab, floor top at y = 0, with a 0.2 m wall at z = 0
 * across it. The wall has a 0.9 m doorway between x = 2.55 and x = 3.45.
 */
function room({ door = false } = {}) {
  const root = new THREE.Group();
  root.add(box([-3, -0.25, -3], [9, 0, 3], "floor"));
  root.add(box([0, 0, -0.1], [2.55, 2.6, 0.1]));
  root.add(box([3.45, 0, -0.1], [6, 2.6, 0.1]));
  root.add(box([2.55, 2.1, -0.1], [3.45, 2.6, 0.1]));
  /** @type {THREE.Object3D | null} */
  let pivot = null;
  if (door) {
    // Leaf hinged at x = 2.55, closed across the opening.
    pivot = new THREE.Group();
    pivot.position.set(2.55, 0, 0);
    const leaf = box([0, 0.01, -0.02], [0.9, 2.09, 0.02], "door");
    leaf.userData.bpDoor = { id: "D1" };
    pivot.add(leaf);
    root.add(pivot);
  }
  root.updateMatrixWorld(true);
  return { root, pivot };
}

const isDynamic = (m) => Boolean(m.userData.bpDoor);

/** Walk with a fixed input for `seconds` at 60 fps. */
function walk(player, world, seconds, input = { forward: 1 }) {
  const frames = Math.round(seconds * 60);
  for (let i = 0; i < frames; i++) stepPlayer(player, input, 1 / 60, world);
  return player;
}

// --- Height slider and eye height ---
assert.equal(HEIGHT_DEFAULT_CM, 186);
assert.equal(snapHeightCm(186), 186);
assert.equal(snapHeightCm(184), 186, "within 3 cm snaps to the 186 detent");
assert.equal(snapHeightCm(189), 186);
assert.equal(snapHeightCm(176.4), 174, "snaps to 174");
assert.equal(snapHeightCm(171), 174);
assert.equal(snapHeightCm(180), 180, "between detents stays put");
assert.equal(snapHeightCm(170), 170);
assert.equal(snapHeightCm(50), HEIGHT_MIN_CM);
assert.equal(snapHeightCm(260), HEIGHT_MAX_CM);
assert.equal(snapHeightCm(Number.NaN), HEIGHT_DEFAULT_CM);
assert.ok(Math.abs(eyeHeightM(186) - 1.86 * 0.93) < 1e-9);
assert.ok(Math.abs(eyeHeightM(174) - 1.74 * EYE_RATIO) < 1e-9);
{
  const store = new Map();
  const storage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) };
  assert.equal(loadWalkHeight(storage), 186, "default before anything is saved");
  saveWalkHeight(175, storage);
  assert.equal(loadWalkHeight(storage), 174, "saved value is snapped");
}

// --- A wall blocks ---
{
  const { root } = room();
  const world = buildWalkWorld(root);
  assert.ok(world.triangleCount > 0);
  // Start south of the wall at x = 1, look north (−Z) at it.
  const p = createPlayer({ feet: new THREE.Vector3(1, 0, 1.5), yaw: 0 });
  walk(p, world, 4, { forward: 1, run: true });
  const r = bodyRadiusM(186);
  assert.ok(p.feet.z > 0.1 + r - 0.02, `stopped at the wall face, z=${p.feet.z}`);
  assert.ok(Math.abs(p.feet.y) < 1e-6, "still on the floor");
  // Sliding along the wall: forward-left diagonal keeps it on this side.
  walk(p, world, 0.6, { forward: 1, right: -1 });
  assert.ok(p.feet.x < 0.8, "slid along the wall");
  assert.ok(p.feet.z > 0.1, "diagonal walk stays on this side");
}

// --- An open doorway lets the walker through ---
{
  const { root } = room();
  const world = buildWalkWorld(root);
  const p = createPlayer({ feet: new THREE.Vector3(3, 0, 1.5), yaw: 0 });
  walk(p, world, 3);
  assert.ok(p.feet.z < -1, `through the doorway, z=${p.feet.z}`);
  assert.ok(Math.abs(p.feet.x - 3) < 0.05, "kept the line");
}

// --- A closed door blocks; the same door opened lets the walker through ---
{
  const { root, pivot } = room({ door: true });
  const world = buildWalkWorld(root, { isDynamic });
  assert.equal(world.dynamicCount, 1);
  const p = createPlayer({ feet: new THREE.Vector3(3, 0, 1.5), yaw: 0 });
  walk(p, world, 3);
  assert.ok(p.feet.z > 0.02, `closed door blocks, z=${p.feet.z}`);
  // Swing it 90° away from the walker: the collider follows the leaf.
  pivot.rotation.y = Math.PI / 2;
  pivot.updateMatrixWorld(true);
  walk(p, world, 3);
  assert.ok(p.feet.z < -1, `open door lets through, z=${p.feet.z}`);
}

// --- Steps: up a small one, not up a tall one ---
{
  const root = new THREE.Group();
  root.add(box([-3, -0.25, -6], [3, 0, 3], "floor"));
  root.add(box([-3, 0, -6], [0.5, 0.18, -1], "floor")); // 18 cm step at z < -1 for x < 0.5
  root.add(box([1.5, 0, -6], [3, 0.45, -1], "cabinet")); // 45 cm block
  root.updateMatrixWorld(true);
  const world = buildWalkWorld(root);
  const p = createPlayer({ feet: new THREE.Vector3(-1, 0, 1), yaw: 0 });
  walk(p, world, 3);
  assert.ok(p.feet.z < -1.5, `walked onto the step, z=${p.feet.z}`);
  assert.ok(Math.abs(p.feet.y - 0.18) < 1e-3, `standing on it, y=${p.feet.y}`);
  assert.ok(0.18 < STEP_HEIGHT_M);
  // Walk back off it: follows the floor down.
  p.yaw = Math.PI;
  walk(p, world, 3);
  assert.ok(Math.abs(p.feet.y) < 1e-3, `back down, y=${p.feet.y}`);
  // The 45 cm block stops the walker.
  const q = createPlayer({ feet: new THREE.Vector3(2.2, 0, 1), yaw: 0 });
  walk(q, world, 3);
  assert.ok(q.feet.z > -1 + 0.1, `blocked by the tall step, z=${q.feet.z}`);
  assert.ok(Math.abs(q.feet.y) < 1e-3);
}

// --- No fall-through: dropped from above, lands and stays ---
{
  const { root } = room();
  const world = buildWalkWorld(root);
  const p = createPlayer({ feet: new THREE.Vector3(1, 3, 1.5) });
  p.grounded = false;
  for (let i = 0; i < 600; i++) stepPlayer(p, {}, 1 / 60, world);
  assert.ok(Math.abs(p.feet.y) < 1e-6, `landed on the floor, y=${p.feet.y}`);
  // A huge frame time is clamped and still cannot tunnel.
  p.feet.y = 2;
  p.grounded = false;
  stepPlayer(p, {}, 5, world);
  for (let i = 0; i < 120; i++) stepPlayer(p, {}, 1 / 60, world);
  assert.ok(Math.abs(p.feet.y) < 1e-6, `long frame still lands, y=${p.feet.y}`);
  // Walking off the slab edge: the ground plane at the model's lowest point holds.
  const q = createPlayer({ feet: new THREE.Vector3(8.5, 0, 1.5), yaw: -Math.PI / 2 });
  walk(q, world, 3);
  assert.ok(q.feet.y >= world.groundY - 1e-9, `never below the model, y=${q.feet.y}`);
}

// --- Hidden and section-cut geometry does not collide ---
{
  const { root } = room();
  const wall = root.children[1];
  wall.visible = false;
  let world = buildWalkWorld(root);
  let p = createPlayer({ feet: new THREE.Vector3(1, 0, 1.5), yaw: 0 });
  walk(p, world, 3);
  assert.ok(p.feet.z < -1, "hidden wall does not block");
  wall.visible = true;
  // Keep only z > 0.5 (the wall is cut away).
  wall.material.clippingPlanes = [new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.5)];
  world = buildWalkWorld(root);
  p = createPlayer({ feet: new THREE.Vector3(1, 0, 1.5), yaw: 0 });
  walk(p, world, 3);
  assert.ok(p.feet.z < -1, "a wall cut away by a section plane does not block");
}

// --- Spawn: floor under the look ray, never inside geometry ---
{
  const { root } = room();
  const world = buildWalkWorld(root);
  // Looking down from above at a floor point.
  let spot = findSpawn(world, new THREE.Ray(new THREE.Vector3(1, 8, 1.5), new THREE.Vector3(0, -1, 0)), 186);
  assert.ok(spot && Math.abs(spot.y) < 1e-6 && Math.abs(spot.x - 1) < 1e-6);
  // Looking straight down onto the top of the wall: lands on the floor beside it.
  spot = findSpawn(world, new THREE.Ray(new THREE.Vector3(1, 8, 0), new THREE.Vector3(0, -1, 0)), 186);
  assert.ok(spot, "found a spot");
  assert.ok(Math.abs(spot.y) < 1e-6, `on the floor, not the wall top, y=${spot.y}`);
  assert.ok(bodyFits(world, spot, 186), "the body fits there");
  // Looking at the wall face from the side: spot is in front of the wall.
  spot = findSpawn(world, new THREE.Ray(new THREE.Vector3(1, 1.6, 2.5), new THREE.Vector3(0, 0, -1)), 186);
  assert.ok(spot && spot.z > 0.1 + bodyRadiusM(186) - 1e-6 && Math.abs(spot.y) < 1e-6, `in front of the wall, ${spot?.toArray()}`);
  assert.equal(bodyFits(world, new THREE.Vector3(1, 0, 0), 186), false, "inside the wall does not fit");
}

// --- Figure and free camera on exit ---
{
  const p = createPlayer({ feet: new THREE.Vector3(2, 0.1, -3), yaw: Math.PI / 2, heightCm: 174 });
  const fig = figurePlacement(p);
  assert.deepEqual(fig.position.toArray(), [2, 0.1, -3]);
  assert.equal(fig.yaw, Math.PI / 2);
  assert.equal(fig.scale, 1.74);
  const eye = eyePosition(p);
  assert.ok(Math.abs(eye.y - (0.1 + 1.74 * 0.93)) < 1e-9);
  const cam = freeCameraAfterWalk(p);
  const look = cam.target.clone().sub(cam.position);
  const fwd = forwardOf(p.yaw);
  assert.ok(look.y < 0, "looks down at the figure");
  assert.ok(look.setY(0).normalize().dot(fwd) > 0.99, "from behind the walker");
}

console.log("walkPhysics tests passed");

// --- No floor slab: the floor plane at elevation 0; sloped tiles win near it ---
{
  const root = new THREE.Group();
  root.add(box([0, 0, -0.1], [6, 2.6, 0.1])); // a wall standing on ±0.000
  root.add(box([0, -0.5, 4], [1, -0.3, 5], "footing")); // something lower
  const tile = box([3, -0.03, 1], [5, -0.02, 3], "floor_tile"); // 2 cm below ±0
  root.add(tile);
  root.updateMatrixWorld(true);
  const world = buildWalkWorld(root);
  assert.equal(world.groundY, 0, "plane at the finished floor, not the footing");
  const p = createPlayer({ feet: new THREE.Vector3(1, 0, 2), yaw: -Math.PI / 2 });
  walk(p, world, 0.2, {});
  assert.ok(Math.abs(p.feet.y) < 1e-6, `on the plane, y=${p.feet.y}`);
  walk(p, world, 2.2); // east onto the tiles
  assert.ok(p.feet.x > 3.2 && Math.abs(p.feet.y + 0.02) < 1e-4, `on the tile, ${p.feet.toArray()}`);
  // Spawn from a camera straight above empty floor lands on the plane.
  const spot = findSpawn(world, new THREE.Ray(new THREE.Vector3(1, 1.6, 2), new THREE.Vector3(0, -1, 0)), 186);
  assert.ok(spot && Math.abs(spot.y) < 1e-6, `spawn on the plane, ${spot?.toArray()}`);
}
console.log("walkPhysics floor-plane tests passed");
