/**
 * Hinged-door tap vs drag, swing about a turned root, and splitting a merged leaf.
 * Run from this directory: node doors.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  DOOR_SWING_MS,
  DOOR_SWING_RAD,
  OPENING_LIVE,
  chooseOpeningAction,
  classifyPointerGesture,
  closeDoor,
  createDoorController,
  easeInOutCubic,
  hostClosedObb,
  matchDoorHosts,
  proxyMeshFromObb,
  rayObb,
  sampleDoor,
  setPivotSwing,
  splitDisconnectedMesh,
  swingAngle,
  toggleDoor,
  triangleComponents,
  bindHinge,
  applyDoorSwing,
  collectDoorHosts,
  isSlidingRecord,
  isSectionalRecord,
  sectionalTrack,
  sectionalTravel,
} from "./doors.js";
import { readFileSync } from "node:fs";
import { pickSurface } from "./pivotNav.js";

assert.equal(easeInOutCubic(0), 0);
assert.equal(easeInOutCubic(1), 1);
assert.ok(Math.abs(easeInOutCubic(0.5) - 0.5) < 1e-9);
assert.ok(easeInOutCubic(0.25) < 0.25);

assert.equal(classifyPointerGesture({ dx: 0, dy: 0 }), "tap");
assert.equal(classifyPointerGesture({ dx: 11, dy: 0 }), "tap");
assert.equal(classifyPointerGesture({ dx: 13, dy: 0 }), "drag");
assert.equal(classifyPointerGesture({ dx: 0, dy: 0, pointers: 2 }), "ignore");
assert.equal(classifyPointerGesture({ dx: 0, dy: 0, button: 2 }), "ignore");
assert.equal(classifyPointerGesture({ dx: 0, dy: 0, blocked: true }), "ignore");
assert.equal(classifyPointerGesture({ dx: 0, dy: 0, modifiers: true }), "ignore");

assert.equal(swingAngle(1, 1), DOOR_SWING_RAD);
assert.equal(swingAngle(1, -1), -DOOR_SWING_RAD);

const binding = { goal: 0, anim: null };
toggleDoor(binding, 1000);
assert.equal(sampleDoor(binding, 1000), 0);
assert.ok(sampleDoor(binding, 1000 + DOOR_SWING_MS / 2) > 0.4);
assert.equal(sampleDoor(binding, 1000 + DOOR_SWING_MS), 1);
assert.equal(binding.anim, null);

// Two panels welded into one index buffer stay two components.
const index = [0, 1, 2, 2, 1, 3, 4, 5, 6];
const groups = triangleComponents(index);
assert.equal(groups.length, 2);

function panelGeometry(w, t, h) {
  const geom = new THREE.BoxGeometry(w, t, h);
  geom.translate(w / 2, t / 2, h / 2);
  return geom;
}

// Merged mesh: two leaves with a gap. Split yields two pickable meshes.
{
  const a = panelGeometry(0.8, 0.04, 2.1);
  const b = panelGeometry(0.8, 0.04, 2.1);
  b.translate(3, 0, 0);
  const merged = new THREE.BufferGeometry();
  const pa = a.getAttribute("position");
  const pb = b.getAttribute("position");
  const positions = new Float32Array(pa.count * 3 + pb.count * 3);
  positions.set(pa.array, 0);
  positions.set(pb.array, pa.count * 3);
  merged.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const ia = a.getIndex().array;
  const ib = b.getIndex().array;
  const indices = new Uint32Array(ia.length + ib.length);
  indices.set(ia, 0);
  for (let i = 0; i < ib.length; i++) indices[ia.length + i] = ib[i] + pa.count;
  merged.setIndex(new THREE.BufferAttribute(indices, 1));
  const parent = new THREE.Group();
  const mesh = new THREE.Mesh(merged);
  mesh.name = "door";
  parent.add(mesh);
  const parts = splitDisconnectedMesh(mesh);
  assert.equal(parts.length, 2);
  assert.equal(parent.children.length, 2);
  const centers = parts.map((part) => {
    part.geometry.computeBoundingBox();
    return part.geometry.boundingBox.getCenter(new THREE.Vector3()).x;
  });
  centers.sort((p, q) => p - q);
  assert.ok(Math.abs(centers[0] - 0.4) < 1e-4);
  assert.ok(Math.abs(centers[1] - 3.4) < 1e-4);
}

// Root is the glTF Z-up rotation. The leaf's hinge is its start edge.
// +90° about world Y carries the free edge onto local +Y.
{
  const root = new THREE.Group();
  root.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
  const door = new THREE.Mesh(panelGeometry(0.8, 0.04, 2.1));
  door.name = "door";
  door.position.set(5, 1.2, 0);
  root.add(door);
  const scene = new THREE.Scene();
  scene.add(root);
  root.updateWorldMatrix(true, true);

  const hingeLocal = new THREE.Vector3(0, 0.02, 1.05);
  const farLocal = new THREE.Vector3(0.8, 0.02, 1.05);
  const hingeWorld = door.localToWorld(hingeLocal.clone());
  const farBefore = door.localToWorld(farLocal.clone());
  const centerWorld = new THREE.Box3().setFromObject(door).getCenter(new THREE.Vector3());

  const record = {
    id: "D-TEST",
    kind: "hinged",
    center: [centerWorld.x, centerWorld.y, centerWorld.z],
    hinge: [hingeWorld.x, hingeWorld.y, hingeWorld.z],
    axis: [0, 1, 0],
    sign: 1,
  };
  const host = { host: door, center: centerWorld };
  const pairs = matchDoorHosts([host], [record]);
  assert.equal(pairs.length, 1);

  const binding = bindHinge(door, record);
  assert.ok(binding);
  // Closed pose is unchanged.
  const farClosed = door.localToWorld(farLocal.clone());
  assert.ok(farClosed.distanceTo(farBefore) < 1e-4);

  setPivotSwing(binding.pivot, swingAngle(1, 1));
  binding.pivot.updateWorldMatrix(true, true);
  const farOpen = door.localToWorld(farLocal.clone());
  const hingeAfter = door.localToWorld(hingeLocal.clone());
  assert.ok(hingeAfter.distanceTo(hingeWorld) < 1e-4, "hinge stays put");

  const offset = farBefore.clone().sub(hingeWorld);
  const swung = offset.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
  const expected = hingeWorld.clone().add(swung);
  assert.ok(farOpen.distanceTo(expected) < 1e-4, `${farOpen.toArray()} vs ${expected.toArray()}`);
  // The free edge moved about 0.8 m, not through the floor.
  assert.ok(farOpen.distanceTo(farBefore) > 0.7);
  assert.ok(Math.abs(farOpen.y - farBefore.y) < 1e-4);
}

assert.ok(OPENING_LIVE < 0.01);

{
  const shut = { goal: 1, anim: null };
  assert.equal(closeDoor(shut, 50), true);
  assert.equal(shut.goal, 0);
  assert.equal(shut.anim.to, 0);
  assert.equal(shut.anim.t0, 50);
  assert.equal(closeDoor(shut, 80), true, "already closing still consumes the tap");
  assert.equal(shut.anim.t0, 50, "does not restart the swing");
  shut.anim = null;
  assert.equal(sampleDoor(shut, 80), 0);
  assert.equal(closeDoor(shut, 90), false);
}

assert.equal(
  chooseOpeningAction([
    { binding: "far", tEnter: 6 },
    { binding: "near", tEnter: 1.5 },
  ]),
  "far",
);
assert.equal(chooseOpeningAction([]), null);

function fakeCanvas() {
  const listeners = new Map();
  return {
    clientWidth: 200,
    clientHeight: 200,
    getBoundingClientRect() {
      return { left: 0, top: 0, width: 200, height: 200, right: 200, bottom: 200 };
    },
    addEventListener(type, fn) {
      const list = listeners.get(type) || [];
      list.push(fn);
      listeners.set(type, list);
    },
    removeEventListener() {},
    fire(type, ev) {
      for (const fn of listeners.get(type) || []) fn(ev);
    },
  };
}

function pointer(x, y, extra = {}) {
  return {
    button: 0,
    pointerId: 1,
    clientX: x,
    clientY: y,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    pointerType: "mouse",
    ...extra,
  };
}

function tapAt(canvas, x = 100, y = 100, extra = {}) {
  const ev = pointer(x, y, extra);
  canvas.fire("pointerdown", ev);
  canvas.fire("pointerup", { ...ev, ...extra });
}

function leafMesh(z) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2, 0.04));
  mesh.name = "door";
  mesh.position.set(0.4, 1, z);
  return mesh;
}

function leafRecord(mesh, id) {
  mesh.updateWorldMatrix(true, true);
  const center = new THREE.Box3().setFromObject(mesh).getCenter(new THREE.Vector3());
  return {
    id,
    kind: "hinged",
    center: [center.x, center.y, center.z],
    hinge: [center.x - 0.4, center.y, center.z],
    axis: [0, 1, 0],
    sign: 1,
  };
}

function lookThrough(camera) {
  camera.position.set(0.4, 1, 4);
  camera.lookAt(0.4, 1, 0);
  camera.updateMatrixWorld(true);
}

function swingOpen(binding) {
  binding.goal = 1;
  binding.anim = null;
  binding.shown = 1;
  setPivotSwing(binding.pivot, swingAngle(1, binding.sign));
  binding.pivot.updateWorldMatrix(true, true);
}

function centerHits(camera, root) {
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  return raycaster.intersectObject(root, true);
}

function hasDoor(hits) {
  return hits.some((hit) => {
    let node = hit.object;
    while (node) {
      if (node.userData?.bpDoor) return true;
      node = node.parent;
    }
    return false;
  });
}

// Turned root: the proxy is the shut leaf's box and stays put when it swings.
{
  const root = new THREE.Group();
  root.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
  const door = new THREE.Mesh(panelGeometry(0.8, 0.04, 2.1));
  door.name = "door";
  door.position.set(5, 1.2, 0);
  root.add(door);
  const scene = new THREE.Scene();
  scene.add(root);
  root.updateWorldMatrix(true, true);
  const centerWorld = new THREE.Box3().setFromObject(door).getCenter(new THREE.Vector3());
  const hingeWorld = door.localToWorld(new THREE.Vector3(0, 0.02, 1.05));
  const canvas = fakeCanvas();
  const ctrl = createDoorController({
    canvas,
    getCamera: () => new THREE.PerspectiveCamera(),
    records: [
      {
        id: "D-TURN",
        kind: "hinged",
        center: [centerWorld.x, centerWorld.y, centerWorld.z],
        hinge: [hingeWorld.x, hingeWorld.y, hingeWorld.z],
        axis: [0, 1, 0],
        sign: 1,
      },
    ],
  });
  assert.equal(ctrl.bind(scene), 1);
  const binding = ctrl.bindings[0];
  const obb = binding.obb;
  assert.ok(obb.center.distanceTo(centerWorld) < 1e-4);
  const half = [...obb.half].sort((a, b) => a - b);
  assert.ok(Math.abs(half[0] - 0.02) < 1e-3, `thin ${half[0]}`);
  assert.ok(Math.abs(half[1] - 0.4) < 1e-3);
  assert.ok(Math.abs(half[2] - 1.05) < 1e-3);
  assert.equal(binding.proxy.parent, null);
  assert.equal(binding.proxy.visible, false);
  assert.equal(hostClosedObb(binding.host).center.distanceTo(centerWorld) < 1e-4, true);

  let thin = 0;
  if (obb.half[1] < obb.half[thin]) thin = 1;
  if (obb.half[2] < obb.half[thin]) thin = 2;
  const dir = obb.axes[thin].clone().negate();
  const origin = obb.center.clone().addScaledVector(obb.axes[thin], 3);
  const span = rayObb(new THREE.Ray(origin, dir), obb);
  assert.ok(span && span.tExit > span.tEnter);
  const beside = origin.clone().addScaledVector(obb.axes[(thin + 1) % 3], obb.half[(thin + 1) % 3] + 0.25);
  assert.equal(rayObb(new THREE.Ray(beside, dir), obb), null);

  const raycaster = new THREE.Raycaster();
  raycaster.ray.origin.copy(origin);
  raycaster.ray.direction.copy(dir);
  const viaMesh = [];
  THREE.Mesh.prototype.raycast.call(binding.proxy, raycaster, viaMesh);
  assert.ok(viaMesh.length >= 1);
  assert.ok(Math.abs(viaMesh[0].distance - span.tEnter) < 1e-3);
  const blocked = [];
  binding.proxy.raycast(raycaster, blocked);
  assert.equal(blocked.length, 0, "proxy raycast must be a no-op");

  const frozen = obb.center.clone();
  swingOpen(binding);
  assert.ok(obb.center.distanceTo(frozen) < 1e-8, "opening stays in the closed pose");
  assert.equal(scene.children.includes(binding.proxy), false);
}

// Open doorway: far geometry does not block the close. An interactive anywhere does.
{
  const wall = new THREE.Mesh(new THREE.BoxGeometry(8, 6, 0.2));
  wall.position.set(0.4, 1, -20);
  const canvas = fakeCanvas();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 200);
  lookThrough(camera);
  const scene = new THREE.Scene();
  const door = leafMesh(0);
  scene.add(door, wall);
  const ctrl = createDoorController({
    canvas,
    getCamera: () => camera,
    records: [leafRecord(door, "D-NEAR")],
  });
  assert.equal(ctrl.bind(scene), 1);
  const binding = ctrl.bindings[0];
  swingOpen(binding);
  const openHits = centerHits(camera, scene).filter((hit) => hit.object.visible);
  assert.equal(hasDoor(openHits), false, "swung leaf is off the opening ray");
  assert.ok(openHits.some((hit) => hit.object === wall));
  tapAt(canvas);
  assert.equal(binding.goal, 0, "far wall must not block the close");
  assert.ok(binding.anim && binding.anim.to === 0);

  // Non-interactive solid in front of the hole still closes.
  binding.goal = 1;
  binding.anim = null;
  binding.shown = 1;
  const front = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 0.1));
  front.position.set(0.4, 1, 2);
  scene.add(front);
  scene.updateWorldMatrix(true, true);
  assert.ok(centerHits(camera, scene).some((hit) => hit.object === front));
  tapAt(canvas);
  assert.equal(binding.goal, 0, "non-interactive geometry in front does not block");

  binding.goal = 1;
  binding.anim = null;
  binding.shown = 1;
  const sw = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.05));
  sw.position.set(0.4, 1, -8);
  sw.userData.bpSwitch = true;
  scene.add(sw);
  scene.updateWorldMatrix(true, true);
  assert.ok(centerHits(camera, scene).some((hit) => hit.object === sw));
  let switches = 0;
  ctrl.taps.register({
    id: "switch",
    priority: 80,
    claim(hit) {
      if (!hit.object.userData?.bpSwitch) return null;
      return {
        onTap() {
          switches += 1;
        },
      };
    },
  });
  tapAt(canvas);
  assert.equal(switches, 1);
  assert.equal(binding.goal, 1, "a switch behind the opening wins");
}

{
  const canvas = fakeCanvas();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  lookThrough(camera);
  const scene = new THREE.Scene();
  const nearMesh = leafMesh(0);
  const farMesh = leafMesh(-3);
  scene.add(nearMesh, farMesh);
  const ctrl = createDoorController({
    canvas,
    getCamera: () => camera,
    records: [leafRecord(nearMesh, "NEAR"), leafRecord(farMesh, "FAR")],
  });
  assert.equal(ctrl.bind(scene), 2);
  const near = ctrl.bindings.find((b) => b.id === "NEAR");
  const far = ctrl.bindings.find((b) => b.id === "FAR");
  swingOpen(near);
  swingOpen(far);
  tapAt(canvas);
  assert.equal(near.goal, 1, "the nearer opening stays open");
  assert.equal(far.goal, 0, "the farthest opening closes");
}

{
  const canvas = fakeCanvas();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  lookThrough(camera);
  const scene = new THREE.Scene();
  const door = leafMesh(0);
  scene.add(door);
  const ctrl = createDoorController({
    canvas,
    getCamera: () => camera,
    records: [leafRecord(door, "SHUT")],
  });
  ctrl.bind(scene);
  const binding = ctrl.bindings[0];
  tapAt(canvas);
  assert.equal(binding.goal, 1, "tap on the shut leaf opens it");
  binding.goal = 0;
  binding.anim = null;
  // 16 px is still over the leaf, and past the tap slop, so a mistaken tap would open it.
  canvas.fire("pointerdown", pointer(100, 100));
  canvas.fire("pointerup", pointer(100, 116));
  assert.equal(binding.goal, 0, "a drag is not a tap");
  tapAt(canvas, 100, 100, { shiftKey: true });
  assert.equal(binding.goal, 0, "modified click is not a door tap");
}

// Orbit-pivot raycast ignores the proxy even if it is dropped into the scene.
{
  const canvas = fakeCanvas();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0);
  camera.updateMatrixWorld(true);
  const scene = new THREE.Scene();
  const wall = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 0.2));
  wall.position.set(0, 0, 0);
  scene.add(wall);
  const obb = {
    center: new THREE.Vector3(0, 0, 1.2),
    axes: [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)],
    half: [0.5, 0.8, 0.02],
  };
  const proxy = proxyMeshFromObb(obb, "opening:probe");
  scene.add(proxy);
  proxy.visible = true;
  proxy.raycast = THREE.Mesh.prototype.raycast;
  const picked = pickSurface(canvas, camera, scene, 100, 100);
  assert.ok(picked);
  assert.ok(Math.abs(picked.point.z - 0.1) < 1e-3, `pivot hit z=${picked && picked.point.z}`);
  proxy.raycast = () => {};
  proxy.visible = false;
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const hits = raycaster.intersectObject(scene, true);
  assert.ok(hits.every((hit) => hit.object !== proxy));
  assert.equal(proxyMeshFromObb(obb).userData.bpHitProxy, true);
}

// Drawer: found under its cabinet element node, matched by centre, slides
// along the record vector even under the Z-up glTF root rotation.
{
  const scene = new THREE.Scene();
  const root = new THREE.Group();
  root.rotation.x = -Math.PI / 2;
  scene.add(root);
  const mat = new THREE.MeshBasicMaterial();
  const carcass = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.8), mat);
  carcass.name = "cabinet__SF-X__";
  const drawer = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.55, 0.2), mat);
  drawer.name = "cabinet__SF-X__";
  drawer.position.set(0, 0, 0.3);
  root.add(carcass, drawer);
  scene.updateMatrixWorld(true);
  const c = new THREE.Box3().setFromObject(drawer).getCenter(new THREE.Vector3());
  const record = { id: "SF-X-D1", kind: "drawer", element: "SF-X", center: c.toArray(), slide: [-0.55, 0, 0] };
  const hosts = collectDoorHosts(root, [record]);
  assert.equal(hosts.length, 2);
  const entries = hosts.map((host) => ({ host, center: new THREE.Box3().setFromObject(host).getCenter(new THREE.Vector3()) }));
  const pairs = matchDoorHosts(entries, [record]);
  assert.equal(pairs.length, 1);
  assert.equal(pairs[0].entry.host, drawer);
  const binding = bindHinge(drawer, record);
  toggleDoor(binding, 0);
  applyDoorSwing(binding, DOOR_SWING_MS + 1);
  scene.updateMatrixWorld(true);
  const moved = new THREE.Box3().setFromObject(drawer).getCenter(new THREE.Vector3());
  assert.ok(Math.abs(moved.x - (c.x - 0.55)) < 1e-6, `drawer x ${moved.x}`);
  assert.ok(Math.abs(moved.y - c.y) < 1e-6 && Math.abs(moved.z - c.z) < 1e-6);
}

// Sliding: bedroom 1.11 OP03, the double pocket into the walk-in wardrobe
// (Petr, 2026-11-12: "I can't open the wardrobe door in the bedroom").
// The committed model record splits the 1.8 m slab into two halves that
// slide 0.9 m apart into W-018. Under the Z-up glTF root, a tap on the
// leaf opens it, it eases over DOOR_SWING_MS, and a tap through the empty
// opening closes it again.
{
  const records = JSON.parse(
    readFileSync(new URL("../../../docs/models/ground_floor.doors.json", import.meta.url), "utf8"),
  );
  const record = records.find((r) => r.id === "D-OP03");
  assert.ok(isSlidingRecord(record), "D-OP03 is a sliding record with panels");
  // The bedroom wardrobe and the three tall living-room pocket doors slide.
  for (const id of ["D-OP03", "D-OP24", "D-OP25", "D-OP33"]) {
    assert.ok(isSlidingRecord(records.find((r) => r.id === id)), `${id} slides`);
  }
  // The garage doors D5/D6 are sectional overhead doors, not sliding.
  for (const id of ["D-OP49", "D-OP50"]) {
    const r = records.find((x) => x.id === id);
    assert.equal(isSlidingRecord(r), false, `${id} does not slide`);
    assert.ok(isSectionalRecord(r), `${id} is sectional`);
  }
  const root = new THREE.Group();
  root.rotation.x = -Math.PI / 2;
  const scene = new THREE.Scene();
  scene.add(root);
  const node = new THREE.Group();
  node.name = "door__D-OP03__";
  // Root-local (x, y, z) is world (x, z, -y): 1.8 wide, 40 mm thick, 2.085 high.
  const slab = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.04, 2.085), new THREE.MeshBasicMaterial());
  slab.name = "door__D-OP03___1";
  node.position.set(2.3, 9.5625, 1.0425);
  node.add(slab);
  root.add(node);
  scene.updateMatrixWorld(true);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 100);
  camera.position.set(2.3, 1.0, -6.5);
  camera.lookAt(2.3, 1.0, -9.5625);
  camera.updateMatrixWorld(true);
  const canvas = fakeCanvas();
  const ctrl = createDoorController({ canvas, getCamera: () => camera, records: [record] });
  assert.equal(ctrl.bind(scene), 1);
  const binding = ctrl.bindings[0];
  assert.equal(binding.kind, "sliding");
  assert.equal(binding.panels.length, 2);
  const panelX = () =>
    binding.panels.map((panel) => {
      panel.pivot.updateWorldMatrix(true, true);
      const box = new THREE.Box3().setFromObject(panel.pivot);
      return [box.min.x, box.max.x];
    });
  const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 1e-4, `${msg}: ${a} vs ${b}`);
  let [left, right] = panelX();
  near(left[0], 1.4, "closed left");
  near(left[1], 2.3, "closed seam (left)");
  near(right[0], 2.3, "closed seam (right)");
  near(right[1], 3.2, "closed right");
  // Both copies keep the element id, so hide, inspect and taps still find it.
  const names = [];
  scene.traverse((o) => {
    if (o.isMesh) names.push(o.name);
  });
  assert.deepEqual(names, ["door__D-OP03___1", "door__D-OP03___1"]);

  // Tap the left panel, a little off the seam.
  const target = new THREE.Vector3(1.85, 1.0, -9.5625).project(camera);
  const px = ((target.x + 1) / 2) * 200;
  const py = ((1 - target.y) / 2) * 200;
  tapAt(canvas, px, py);
  assert.equal(binding.goal, 1, "tap on the wardrobe leaf opens it");
  const t0 = binding.anim.t0;
  applyDoorSwing(binding, t0 + DOOR_SWING_MS / 2);
  [left, right] = panelX();
  near(left[0], 1.4 - 0.45, "half-way left");
  near(right[1], 3.2 + 0.45, "half-way right");
  applyDoorSwing(binding, t0 + DOOR_SWING_MS + 1);
  [left, right] = panelX();
  near(left[0], 0.5, "open left in its pocket");
  near(left[1], 1.4, "open left inner edge");
  near(right[0], 3.2, "open right inner edge");
  near(right[1], 4.1, "open right in its pocket");

  // The centre ray now passes through the empty opening: that closes it.
  binding.shown = 1;
  tapAt(canvas);
  assert.equal(binding.goal, 0, "tap through the open doorway closes it");
}

// --- Track of a sectional door: up, a quarter bend, then level -----------
{
  const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 1e-9, `${msg}: ${a} vs ${b}`);
  let p = sectionalTrack(1, 2, 0.3);
  near(p.y, 1, "straight y");
  near(p.z, 0, "straight z");
  near(p.tilt, 0, "upright");
  p = sectionalTrack(2 + (Math.PI / 4) * 0.3, 2, 0.3);
  near(p.tilt, Math.PI / 4, "half-way round the bend");
  near(p.y, 2 + 0.3 * Math.SQRT1_2, "bend y");
  near(p.z, 0.3 * (1 - Math.SQRT1_2), "bend z");
  p = sectionalTrack(2 + (Math.PI / 2) * 0.3 + 1, 2, 0.3);
  near(p.y, 2.3, "level y");
  near(p.z, 1.3, "level z");
  near(p.tilt, Math.PI / 2, "level");
  near(sectionalTravel(2, 0.3), 2 + (Math.PI / 2) * 0.3, "travel");
}

/** A slab mesh under a Z-up glTF root, from a door record (root-local is CAD metres). */
function slabFor(record, size, name) {
  const root = new THREE.Group();
  root.rotation.x = -Math.PI / 2;
  const scene = new THREE.Scene();
  scene.add(root);
  const node = new THREE.Group();
  node.name = name;
  const slab = new THREE.Mesh(new THREE.BoxGeometry(...size), new THREE.MeshBasicMaterial());
  slab.name = `${name}_1`;
  const c = record.center;
  node.position.set(c[0], -c[2], c[1]);
  node.add(slab);
  root.add(node);
  scene.updateMatrixWorld(true);
  return { scene, root };
}

// Sectional: garage door D6 (D-OP49), Petr 2026-11-12: "garage doors should
// be sectional doors". From the committed record: a tap opens it; half-way
// the sections are partly up the wall and partly round the bend; open, every
// section lies level under the ceiling, inside the garage, above the head.
{
  const records = JSON.parse(
    readFileSync(new URL("../../../docs/models/ground_floor.doors.json", import.meta.url), "utf8"),
  );
  const record = records.find((r) => r.id === "D-OP49");
  const height = record.top[1] - record.bottom[1];
  const width = Math.hypot(record.end[0] - record.start[0], record.end[2] - record.start[2]);
  // Root-local x, y, z = CAD x, y, z: the leaf runs along CAD y on W-067.
  const { scene } = slabFor(record, [0.04, width, height], "door__D-OP49__");
  const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 100);
  camera.position.set(record.center[0] - 4, 1.2, record.center[2]);
  camera.lookAt(record.center[0], 1.2, record.center[2]);
  camera.updateMatrixWorld(true);
  const canvas = fakeCanvas();
  const ctrl = createDoorController({ canvas, getCamera: () => camera, records: [record] });
  assert.equal(ctrl.bind(scene), 1);
  const binding = ctrl.bindings[0];
  assert.equal(binding.kind, "sectional");
  assert.equal(binding.sections.length, record.sections);
  const near = (a, b, tol, msg) => assert.ok(Math.abs(a - b) < tol, `${msg}: ${a} vs ${b}`);
  const boxes = () =>
    binding.sections.map((section) => {
      section.pivot.updateWorldMatrix(true, true);
      return new THREE.Box3().setFromObject(section.pivot);
    });
  // Shut: the sections stack into the original leaf.
  let b = boxes();
  near(b[0].min.y, record.bottom[1], 1e-4, "bottom section on the floor");
  near(b[b.length - 1].max.y, record.top[1], 1e-4, "top section at the leaf head");
  for (const box of b) near((box.min.x + box.max.x) / 2, record.center[0], 1e-4, "shut in the leaf plane");
  tapAt(canvas);
  assert.equal(binding.goal, 1, "tap on the garage door opens it");
  const t0 = binding.anim.t0;
  applyDoorSwing(binding, t0 + DOOR_SWING_MS / 2);
  b = boxes();
  assert.ok(b[0].min.y > record.bottom[1] + 0.3, "half-way: the bottom section has risen");
  assert.ok(b[b.length - 1].min.x < record.center[0] - 0.1, "half-way: the top section runs inward");
  applyDoorSwing(binding, t0 + DOOR_SWING_MS + 1);
  b = boxes();
  for (const box of b) {
    const thick = box.max.y - box.min.y;
    assert.ok(thick < 0.06, `open: each section lies level (${thick})`);
    assert.ok(box.min.y > record.top[1], "open: above the leaf head");
    assert.ok(box.max.x < record.center[0] + 1e-6, "open: inside the garage (inward is −x)");
    near(box.max.z - box.min.z, width, 1e-4, "open: full width");
  }
  binding.shown = 1;
  tapAt(canvas);
  assert.equal(binding.goal, 0, "tap through the open garage doorway closes it");
}

// Pocket: living-room door OP24 (Petr 2026-11-12, the three tall living-room
// doors are pocket doors). The single leaf slides its own width north
// (glTF −z) into W-050, so the doorway is clear when open.
{
  const records = JSON.parse(
    readFileSync(new URL("../../../docs/models/ground_floor.doors.json", import.meta.url), "utf8"),
  );
  for (const [id, north] of [["D-OP24", true], ["D-OP25", false], ["D-OP33", true]]) {
    const record = records.find((r) => r.id === id);
    assert.equal(record.panels.length, 1, `${id}: single leaf`);
    const width = Math.abs(record.end[2] - record.start[2]);
    near1(Math.abs(record.panels[0].slide[2]), width, `${id}: slides its full width`);
    assert.equal(record.panels[0].slide[2] < 0, north, `${id}: slide direction`);
    const height = 2 * record.center[1];
    const { scene } = slabFor(record, [0.04, width, height], `door__${id}__`);
    const ctrl = createDoorController({ canvas: fakeCanvas(), getCamera: () => null, records: [record] });
    assert.equal(ctrl.bind(scene), 1);
    const binding = ctrl.bindings[0];
    toggleDoor(binding, 0);
    applyDoorSwing(binding, DOOR_SWING_MS + 1);
    binding.panels[0].pivot.updateWorldMatrix(true, true);
    const box = new THREE.Box3().setFromObject(binding.panels[0].pivot);
    const lo = Math.min(record.start[2], record.end[2]);
    const hi = Math.max(record.start[2], record.end[2]);
    if (north) near1(box.max.z, lo, `${id}: open leaf clears the doorway (north)`);
    else near1(box.min.z, hi, `${id}: open leaf clears the doorway (south)`);
  }
}

// Terrace balcony door D-OP32 (Petr, 2026-11-12: "a hinged door but made out
// of glass"): the GLB node holds a frame mesh and a glass mesh. Both are one
// host, matched to the hinged record, and they swing together.
{
  const records = JSON.parse(
    readFileSync(new URL("../../../docs/models/ground_floor.doors.json", import.meta.url), "utf8"),
  );
  const record = records.find((r) => r.id === "D-OP32");
  assert.equal(record.kind, "hinged");
  const scene = new THREE.Scene();
  const node = new THREE.Group();
  node.name = "door__D-OP32__";
  const c = new THREE.Vector3(...record.center);
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.04, 2.485, 1.12), new THREE.MeshBasicMaterial());
  frame.name = "door";
  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.024, 2.345, 0.98), new THREE.MeshBasicMaterial());
  glass.name = "glazing__D-OP32__";
  frame.position.copy(c);
  glass.position.copy(c);
  node.add(frame, glass);
  scene.add(node);
  scene.updateMatrixWorld(true);
  const hosts = collectDoorHosts(scene, [record]);
  assert.equal(hosts.length, 1, "frame and glass are one door host");
  assert.equal(hosts[0], node);
  const ctrl = createDoorController({ canvas: fakeCanvas(), getCamera: () => null, records: [record] });
  assert.equal(ctrl.bind(scene), 1);
  const binding = ctrl.bindings[0];
  toggleDoor(binding, 0);
  applyDoorSwing(binding, DOOR_SWING_MS + 1);
  scene.updateMatrixWorld(true);
  const f = new THREE.Box3().setFromObject(frame).getCenter(new THREE.Vector3());
  const g = new THREE.Box3().setFromObject(glass).getCenter(new THREE.Vector3());
  near1(f.distanceTo(g), 0, "glass stays in its frame");
  assert.ok(f.x < record.hinge[0] - 0.3, `opens west onto the terrace: ${f.x}`);
}

function near1(a, b, msg) {
  assert.ok(Math.abs(a - b) < 1e-4, `${msg}: ${a} vs ${b}`);
}

console.log("doors.test.mjs ok");
