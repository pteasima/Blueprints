/**
 * Walk mode camera rig, keys, spawn ray, and the person figure.
 * Run from this directory: node walkMode.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { applyFirstPersonCamera, keysToInput, spawnRay, yawPitchOf } from "./walkMode.js";
import { createPersonFigure, FIGURE_SHAPE } from "./personFigure.js";
import { createPlayer, eyeHeightM, figurePlacement } from "./walkPhysics.js";

// Keys: WASD and arrows, opposite keys cancel.
assert.deepEqual(keysToInput(new Set(["KeyW"])), { forward: 1, right: 0, run: false });
assert.deepEqual(keysToInput(new Set(["ArrowUp", "ArrowLeft"]), true), { forward: 1, right: -1, run: true });
assert.deepEqual(keysToInput(new Set(["KeyW", "KeyS", "KeyD"])), { forward: 0, right: 1, run: false });
assert.deepEqual(keysToInput(new Set(["KeyW", "ArrowUp"])), { forward: 1, right: 0, run: false });

// Camera at eye height, looking along yaw / pitch; yawPitchOf inverts it.
{
  const cam = new THREE.PerspectiveCamera();
  const p = createPlayer({ feet: new THREE.Vector3(1, 0.2, -2), yaw: 0.7, pitch: -0.2, heightCm: 186 });
  applyFirstPersonCamera(cam, p, p.feet.y + eyeHeightM(p.heightCm));
  assert.ok(Math.abs(cam.position.y - (0.2 + 1.86 * 0.93)) < 1e-9, "eye at 0.93 × 186 cm above the feet");
  const yp = yawPitchOf(cam);
  assert.ok(Math.abs(yp.yaw - 0.7) < 1e-9 && Math.abs(yp.pitch + 0.2) < 1e-9);
  const up = new THREE.Vector3(0, 1, 0).applyQuaternion(cam.quaternion);
  assert.ok(up.y > 0.9, "no roll");
}

// Spawn ray: inside the model drops straight down; outside aims at the centre.
{
  const bounds = new THREE.Box3(new THREE.Vector3(0, 0, -10), new THREE.Vector3(20, 3, 0));
  const cam = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  cam.position.set(5, 1.6, -5);
  cam.lookAt(10, 1, -5);
  let ray = spawnRay(cam, bounds);
  assert.deepEqual(ray.direction.toArray(), [0, -1, 0]);
  assert.ok(ray.origin.distanceTo(cam.position) < 1e-9);
  cam.position.set(30, 20, 20);
  cam.lookAt(10, 0, -5);
  ray = spawnRay(cam, bounds);
  const want = new THREE.Vector3(10, 0, -5).sub(cam.position).normalize();
  assert.ok(ray.direction.dot(want) > 0.9999, "screen centre ray from outside");
}

// Figure: stands at the feet, scaled to the height, faces the walk direction.
{
  const fig = createPersonFigure();
  assert.equal(fig.object.visible, false, "hidden until walk mode ends");
  const p = createPlayer({ feet: new THREE.Vector3(3, 0, -4), yaw: 1.2, heightCm: 174 });
  fig.place(figurePlacement(p));
  fig.show(true);
  const box = new THREE.Box3().setFromObject(fig.object);
  assert.ok(Math.abs(box.min.y - 0) < 1e-6, `feet on the floor, ${box.min.y}`);
  const top = (FIGURE_SHAPE.headY + FIGURE_SHAPE.headRadius) * 1.74;
  assert.ok(Math.abs(box.max.y - top) < 0.005 && Math.abs(top - 1.74) < 0.02, `about 174 cm tall, ${box.max.y}`);
  const c = box.getCenter(new THREE.Vector3());
  assert.ok(Math.hypot(c.x - 3, c.z + 4) < 0.1, "centred on the feet");
  // Its nose points where the walker looked.
  const nose = fig.object.children[0].children[2];
  const nosePos = nose.getWorldPosition(new THREE.Vector3());
  const fwd = new THREE.Vector3(-Math.sin(1.2), 0, -Math.cos(1.2));
  assert.ok(nosePos.sub(new THREE.Vector3(3, nosePos.y, -4)).normalize().dot(fwd) > 0.99);
  // Nothing in it can be hit by a ray (taps, Measure, orbit pivot).
  const rc = new THREE.Raycaster(new THREE.Vector3(3, 1, 0), new THREE.Vector3(0, 0, -1));
  assert.equal(rc.intersectObject(fig.object, true).length, 0);
  // Swappable model keeps the placement.
  const stand = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1, 0.3));
  stand.position.y = 0.5;
  const g = new THREE.Group();
  g.add(stand);
  fig.setModel(g);
  const box2 = new THREE.Box3().setFromObject(fig.object);
  assert.ok(Math.abs(box2.max.y - 1.74) < 1e-6, "glTF stand-in scaled to the height");
  assert.equal(rc.intersectObject(fig.object, true).length, 0, "stand-in does not raycast either");
}

console.log("walkMode tests passed");
