/**
 * Surface-anchored zoom, pan, and close-up orbit.
 * Run from this directory: node pivotNav.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { TAP_PX } from "./doors.js";
import {
  PIVOT_LEAD_M,
  PIVOT_STALL_M,
  applyOrbitAroundPivot,
  createPivotNav,
  orbitDeltas,
  panDistance,
  pickSurface,
  placeTargetAlongView,
  shouldPivotOrbit,
  zoomRadius,
} from "./pivotNav.js";

assert.equal(zoomRadius(5, 20), 5, "zoom step follows the hit, not the far center");
assert.equal(zoomRadius(null, 20), 20, "sky zoom from outside keeps its radius");
assert.equal(zoomRadius(0.05, 20), PIVOT_LEAD_M, "a surface in your face leads forward");
assert.equal(zoomRadius(null, 0.02), PIVOT_LEAD_M, "a stalled miss leads forward");
assert.equal(zoomRadius(4, 0.02), 4, "a real wall replaces a stalled center");
assert.ok(zoomRadius(0.05, 0.02) >= PIVOT_STALL_M);

assert.equal(shouldPivotOrbit(null, 20), false);
assert.equal(shouldPivotOrbit(16, 22), false, "exterior facade stays on the framed center");
assert.equal(shouldPivotOrbit(2, 10), true, "a near wall inside a far center");
assert.equal(shouldPivotOrbit(2, 0.1), true, "dead-zone center");
assert.equal(panDistance(4, 20), 4);
assert.equal(panDistance(null, 20), null);
assert.equal(panDistance(null, 0.02), PIVOT_LEAD_M);

const { theta, phi } = orbitDeltas(10, -4, 800, 1);
assert.ok(theta < 0 && phi > 0);

function stubCanvas() {
  const doc = { addEventListener() {}, removeEventListener() {} };
  return {
    clientWidth: 800,
    clientHeight: 600,
    style: {},
    ownerDocument: doc,
    getRootNode() {
      return doc;
    },
    getBoundingClientRect() {
      return { left: 0, top: 0, width: 800, height: 600, right: 800, bottom: 600 };
    },
    addEventListener() {},
    removeEventListener() {},
    setPointerCapture() {},
    releasePointerCapture() {},
  };
}

function screenOf(camera, point, width, height) {
  const n = point.clone().project(camera);
  return {
    x: (n.x * 0.5 + 0.5) * width,
    y: (-n.y * 0.5 + 0.5) * height,
  };
}

function wall(x, y, z, depth = 0.2) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(8, 6, depth),
    new THREE.MeshBasicMaterial(),
  );
  mesh.position.set(x, y, z);
  return mesh;
}

function rig() {
  const canvas = stubCanvas();
  const camera = new THREE.PerspectiveCamera(50, 800 / 600, 0.01, 500);
  const scene = new THREE.Scene();
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = false;
  controls.zoomToCursor = false;
  const nav = createPivotNav({
    canvas,
    controls,
    getCamera: () => camera,
    getRoot: () => scene,
  });
  return { canvas, camera, scene, controls, nav };
}

function look(camera, controls) {
  camera.lookAt(controls.target);
  camera.updateMatrixWorld(true);
  controls.update();
}

// Orbit around the existing target matches OrbitControls' own spherical step.
{
  const { camera, controls } = rig();
  camera.position.set(4, 3, 8);
  controls.target.set(0.2, 0.4, 0);
  look(camera, controls);
  const startPos = camera.position.clone();
  const startTarget = controls.target.clone();
  const dTheta = -0.35;
  const dPhi = 0.12;

  controls._sphericalDelta.theta = dTheta;
  controls._sphericalDelta.phi = dPhi;
  controls.update();
  const expectPos = camera.position.clone();
  const expectTarget = controls.target.clone();

  camera.position.copy(startPos);
  controls.target.copy(startTarget);
  look(camera, controls);
  applyOrbitAroundPivot(camera, controls.target, startTarget, dTheta, dPhi);
  camera.lookAt(controls.target);
  assert.ok(
    camera.position.distanceTo(expectPos) < 1e-4,
    `pivot on the target drifted ${camera.position.distanceTo(expectPos)}`,
  );
  assert.ok(controls.target.distanceTo(expectTarget) < 1e-4);
}

// Off-center pivot stays on its pixel, and a zero step does not move the camera.
{
  const { camera, controls } = rig();
  camera.position.set(0, 2, 10);
  controls.target.set(0, 1, 0);
  look(camera, controls);
  const pivot = new THREE.Vector3(1.4, 0.6, 4);
  const before = screenOf(camera, pivot, 800, 600);
  const camBefore = camera.position.clone();
  applyOrbitAroundPivot(camera, controls.target, pivot, 0, 0);
  assert.ok(camera.position.distanceTo(camBefore) < 1e-8);

  const delta = orbitDeltas(80, -30, 600, 1);
  applyOrbitAroundPivot(camera, controls.target, pivot, delta.theta, delta.phi);
  camera.lookAt(controls.target);
  camera.updateMatrixWorld(true);
  const after = screenOf(camera, pivot, 800, 600);
  assert.ok(Math.abs(after.x - before.x) < 0.75, `pivot x ${before.x} → ${after.x}`);
  assert.ok(Math.abs(after.y - before.y) < 0.75, `pivot y ${before.y} → ${after.y}`);
  assert.ok(camera.position.distanceTo(camBefore) > 0.2);
}

// Exterior orbit is stock: no rotate lock, no camera move on finger down.
{
  const { camera, scene, controls, nav } = rig();
  camera.position.set(0, 2, 20);
  controls.target.set(0, 2, 0);
  scene.add(wall(0, 2, 1));
  look(camera, controls);
  const pos = camera.position.clone();
  const target = controls.target.clone();
  nav.onPointerDown({
    pointerId: 1,
    clientX: 400,
    clientY: 300,
    button: 0,
    pointerType: "mouse",
  });
  assert.equal(controls.enableRotate, true);
  assert.ok(camera.position.distanceTo(pos) < 1e-8);
  assert.ok(controls.target.distanceTo(target) < 1e-6);
  nav.onPointerMove({ pointerId: 1, clientX: 480, clientY: 340 });
  assert.ok(camera.position.distanceTo(pos) < 1e-8, "stock path must not also custom-orbit");
  nav.onPointerUp({ pointerId: 1 });
}

// Close-up orbit pivots on the hit, but a tap does not move the camera.
{
  const { camera, scene, controls, nav } = rig();
  camera.position.set(0, 1.5, 0.2);
  controls.target.set(0, 1.5, 0.1);
  scene.add(wall(0, 1.5, -2));
  look(camera, controls);
  const pos = camera.position.clone();
  const target = controls.target.clone();
  let started = 0;
  controls.addEventListener("start", () => {
    started += 1;
  });
  nav.onPointerDown({
    pointerId: 7,
    clientX: 400,
    clientY: 300,
    button: 0,
    pointerType: "touch",
  });
  assert.equal(controls.enableRotate, false);
  assert.equal(started, 1);
  assert.ok(camera.position.distanceTo(pos) < 1e-8, "finger down is not a camera move");
  nav.onPointerMove({ pointerId: 7, clientX: 400 + TAP_PX - 1, clientY: 300 });
  assert.ok(camera.position.distanceTo(pos) < 1e-8, "inside the tap slop the camera stays");
  nav.onPointerUp({ pointerId: 7 });
  assert.equal(controls.enableRotate, true);
  assert.ok(controls.target.distanceTo(target) < 1e-6);

  nav.onPointerDown({
    pointerId: 8,
    clientX: 420,
    clientY: 280,
    button: 0,
    pointerType: "touch",
  });
  const hit = pickSurface(stubCanvas(), camera, scene, 420, 280);
  assert.ok(hit);
  const pixelBefore = screenOf(camera, hit.point, 800, 600);
  nav.onPointerMove({ pointerId: 8, clientX: 420 + 70, clientY: 280 - 40 });
  camera.updateMatrixWorld(true);
  const pixelAfter = screenOf(camera, hit.point, 800, 600);
  assert.ok(camera.position.distanceTo(pos) > 0.05, "drag orbits");
  assert.ok(Math.abs(pixelAfter.x - pixelBefore.x) < 1.25, `hit x ${pixelBefore.x} → ${pixelAfter.x}`);
  assert.ok(Math.abs(pixelAfter.y - pixelBefore.y) < 1.25, `hit y ${pixelBefore.y} → ${pixelAfter.y}`);
  nav.onPointerUp({ pointerId: 8 });
  assert.equal(controls.enableRotate, true);
}

// Wheel on a wall uses the hit distance and keeps that point under the cursor.
{
  const { camera, scene, controls, nav } = rig();
  camera.position.set(0, 1.5, 0.25);
  controls.target.set(0, 1.5, 0.05);
  scene.add(wall(0, 1.5, -2));
  look(camera, controls);
  const before = camera.position.clone();
  const hit = pickSurface(stubCanvas(), camera, scene, 400, 300);
  assert.ok(hit && hit.slant > 1);
  const pixelBefore = screenOf(camera, hit.point, 800, 600);
  nav.onWheel({ clientX: 400, clientY: 300 });
  assert.equal(controls.zoomToCursor, true);
  assert.ok(
    Math.abs(camera.position.distanceTo(controls.target) - hit.slant) < 1e-3,
    "radius parked on the surface before the dolly",
  );
  controls._handleMouseWheel({ clientX: 400, clientY: 300, deltaY: -100 });
  const moved = camera.position.distanceTo(before);
  assert.ok(moved > 0.08, `zoom step ${moved} still in the dead zone`);
  assert.ok(moved < hit.slant * 0.2);
  camera.updateMatrixWorld(true);
  const pixelAfter = screenOf(camera, hit.point, 800, 600);
  assert.ok(Math.abs(pixelAfter.x - pixelBefore.x) < 1.5, `cursor x ${pixelBefore.x} → ${pixelAfter.x}`);
  assert.ok(Math.abs(pixelAfter.y - pixelBefore.y) < 1.5, `cursor y ${pixelBefore.y} → ${pixelAfter.y}`);
  nav.onWheelDone();
  assert.equal(controls.zoomToCursor, false);

  // Off-center notch keeps the surface point under the cursor.
  camera.position.copy(before);
  controls.target.set(0, 1.5, 0.05);
  look(camera, controls);
  const side = pickSurface(stubCanvas(), camera, scene, 560, 220);
  assert.ok(side);
  const sideBefore = screenOf(camera, side.point, 800, 600);
  nav.onWheel({ clientX: 560, clientY: 220 });
  controls._handleMouseWheel({ clientX: 560, clientY: 220, deltaY: -100 });
  camera.updateMatrixWorld(true);
  const sideAfter = screenOf(camera, side.point, 800, 600);
  assert.ok(Math.abs(sideAfter.x - sideBefore.x) < 1.5, `off-center x ${sideBefore.x} → ${sideAfter.x}`);
  assert.ok(Math.abs(sideAfter.y - sideBefore.y) < 1.5, `off-center y ${sideBefore.y} → ${sideAfter.y}`);
  nav.onWheelDone();
}

// Pinch start parks the radius on the surface between the fingers and
// gives rotate back if the first finger had taken it.
{
  const { camera, scene, controls, nav } = rig();
  camera.position.set(0, 1.5, 0.2);
  controls.target.set(0, 1.5, 0.05);
  scene.add(wall(0, 1.5, -2));
  look(camera, controls);
  nav.onPointerDown({
    pointerId: 1,
    clientX: 360,
    clientY: 300,
    button: 0,
    pointerType: "touch",
  });
  assert.equal(controls.enableRotate, false);
  const midHit = pickSurface(stubCanvas(), camera, scene, 430, 300);
  assert.ok(midHit);
  nav.onPointerDown({
    pointerId: 2,
    clientX: 500,
    clientY: 300,
    button: 0,
    pointerType: "touch",
  });
  assert.equal(controls.enableRotate, true);
  assert.equal(controls.zoomToCursor, true);
  assert.ok(
    Math.abs(camera.position.distanceTo(controls.target) - midHit.slant) < 0.05,
    "pinch radius follows the surface under the fingers",
  );
  assert.ok(camera.position.distanceTo(new THREE.Vector3(0, 1.5, 0.2)) < 1e-6);
  nav.onPointerUp({ pointerId: 2 });
  nav.onPointerUp({ pointerId: 1 });
  assert.equal(controls.zoomToCursor, false);
  assert.equal(controls.enableRotate, true);
}

// No surface and a stalled target: repeated wheel notches keep walking forward.
{
  const { camera, controls, nav } = rig();
  camera.position.set(1, 1.6, 3);
  controls.target.set(1, 1.6, 2.98);
  look(camera, controls);
  const start = camera.position.clone();
  const view = controls.target.clone().sub(camera.position).normalize();
  for (let i = 0; i < 40; i++) {
    nav.onWheel({ clientX: 400, clientY: 300 });
    controls._handleMouseWheel({ clientX: 400, clientY: 300, deltaY: -100 });
    nav.onWheelDone();
  }
  const travel = camera.position.clone().sub(start).dot(view);
  assert.ok(travel > 1, `dolly-through only moved ${travel.toFixed(3)} m`);
}

// Exterior sky zoom does not shrink to the lead distance.
{
  const { camera, controls, nav } = rig();
  camera.position.set(0, 2, 20);
  controls.target.set(0, 2, 0);
  look(camera, controls);
  const before = camera.position.clone();
  nav.onWheel({ clientX: 400, clientY: 300 });
  controls._handleMouseWheel({ clientX: 400, clientY: 300, deltaY: -100 });
  const moved = camera.position.distanceTo(before);
  assert.ok(moved > 0.7 && moved < 1.3, `exterior notch moved ${moved}`);
}

// Right-drag pan tracks the grabbed depth, and does not move the camera on down.
{
  const { camera, scene, controls, nav } = rig();
  camera.position.set(0, 2, 8);
  controls.target.set(0, 2, 0);
  scene.add(wall(0, 2, 4));
  look(camera, controls);
  const hit = pickSurface(stubCanvas(), camera, scene, 480, 240);
  assert.ok(hit);
  const cam = camera.position.clone();
  const lookDir = controls.target.clone().sub(camera.position).normalize();
  nav.onPointerDown({
    pointerId: 3,
    clientX: 480,
    clientY: 240,
    button: 2,
    pointerType: "mouse",
  });
  assert.ok(camera.position.distanceTo(cam) < 1e-8);
  const depth = camera.position.distanceTo(controls.target);
  assert.ok(Math.abs(depth - hit.depth) < 1e-3, `pan depth ${depth} vs hit ${hit.depth}`);
  const afterLook = controls.target.clone().sub(camera.position).normalize();
  assert.ok(lookDir.dot(afterLook) > 1 - 1e-8, "parking the target must not swing the view");
  const pixelBefore = screenOf(camera, hit.point, 800, 600);
  controls._handleMouseDownPan({ clientX: 480, clientY: 240 });
  controls._handleMouseMovePan({ clientX: 530, clientY: 240 });
  camera.updateMatrixWorld(true);
  const pixelAfter = screenOf(camera, hit.point, 800, 600);
  const dx = pixelAfter.x - pixelBefore.x;
  assert.ok(Math.abs(Math.abs(dx) - 50) < 2, `grabbed point moved ${dx} px, want 50`);
}

// A clipped near face is not the anchor; the kept face behind it is.
{
  const { camera, scene, controls } = rig();
  camera.position.set(0, 0, 5);
  controls.target.set(0, 0, 0);
  look(camera, controls);
  const mesh = wall(0, 0, -0.5, 1);
  mesh.material.side = THREE.DoubleSide;
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, -1), -0.5);
  mesh.material.clippingPlanes = [plane];
  scene.add(mesh);
  const hit = pickSurface(stubCanvas(), camera, scene, 400, 300);
  assert.ok(hit);
  assert.ok(hit.point.z < -0.4, `picked clipped z=${hit.point.z}`);
}

// Orthographic wheel does not retarget or enable zoom-to-cursor.
{
  const canvas = stubCanvas();
  const camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 0.01, 100);
  camera.position.set(0, 0, 10);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  camera.lookAt(controls.target);
  controls.update();
  const nav = createPivotNav({
    canvas,
    controls,
    getCamera: () => camera,
    getRoot: () => new THREE.Scene(),
  });
  const target = controls.target.clone();
  nav.onWheel({ clientX: 100, clientY: 100 });
  assert.equal(controls.zoomToCursor, false);
  assert.ok(controls.target.distanceTo(target) < 1e-8);
}

// placeTargetAlongView keeps the camera and the look ray.
{
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.set(1, 2, 3);
  const target = new THREE.Vector3(1, 2, 0);
  camera.lookAt(target);
  const pos = camera.position.clone();
  const dir = target.clone().sub(pos).normalize();
  assert.equal(placeTargetAlongView(camera, target, 4), true);
  assert.ok(camera.position.distanceTo(pos) < 1e-8);
  const next = target.clone().sub(camera.position).normalize();
  assert.ok(dir.dot(next) > 1 - 1e-8);
  assert.ok(Math.abs(camera.position.distanceTo(target) - 4) < 1e-6);
}

console.log("pivotNav tests ok");
