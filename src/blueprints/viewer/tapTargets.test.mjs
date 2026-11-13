/**
 * Extended tap targets: direct hits first, then a 44 pt circle around each
 * target centre on screen; nearest to the camera wins (Petr, 2026-11-12).
 * Run from this directory: node tapTargets.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { LineSegments2 } from "three/addons/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { createTapRegistry, isSceneSolid } from "./interactions.js";
import { pressTarget } from "./homeLive.js";
import {
  TAP_TARGET_PX,
  centerOccluded,
  isClippedAt,
  isGlassLike,
  isRenderedHit,
  findDirectHit,
  isOpaqueMaterialOf,
  pickExtendedTarget,
  projectTarget,
  switchTargetCenters,
} from "./tapTargets.js";

assert.equal(TAP_TARGET_PX, 44, "Apple HIG minimum hit target");

// --- pure: findDirectHit -------------------------------------------------
{
  const opaque = { material: { transparent: false, opacity: 1 } };
  const glass = { material: { transparent: true, opacity: 0.3 } };
  const wall = { object: { ...opaque, id: "wall" }, distance: 1 };
  const flush = { object: { ...opaque, id: "switch", interactive: true }, distance: 1.02 };
  const behind = { object: { ...opaque, id: "light", interactive: true }, distance: 1.5 };
  const claimOf = (hit) => (hit.object.interactive ? { id: hit.object.id } : null);

  assert.equal(findDirectHit([flush, wall], claimOf).claim.id, "switch");
  assert.equal(
    findDirectHit([wall, flush], claimOf).claim.id,
    "switch",
    "a faceplate within 5 cm of the wall face is still a direct hit",
  );
  const blocked = findDirectHit([wall, behind], claimOf);
  assert.equal(blocked.claim, null, "an interactive behind an opaque wall is not a direct hit");
  assert.equal(blocked.wallT, 1);
  const faded = { object: { ...glass, id: "faded wall" }, distance: 1 };
  assert.equal(
    findDirectHit([faded, behind], claimOf).claim.id,
    "light",
    "faded parts and glass do not hide what is behind them",
  );
  assert.equal(isOpaqueMaterialOf({}), false);
  assert.equal(isOpaqueMaterialOf(opaque), true);
  assert.equal(isOpaqueMaterialOf({ material: [opaque.material, glass.material] }), false);
}

// --- pure: pickExtendedTarget --------------------------------------------
{
  const tap = { x: 100, y: 100 };
  const a = { id: "a", x: 100, y: 121, depth: 3 };
  assert.equal(pickExtendedTarget([a], tap)?.id, "a", "21 px from the centre is inside a 44 px circle");
  assert.equal(pickExtendedTarget([{ ...a, y: 123 }], tap), null, "23 px is outside");
  assert.equal(pickExtendedTarget([{ ...a, depth: -1 }], tap), null, "behind the camera");

  const near = { id: "near", x: 115, y: 100, depth: 2 };
  const far = { id: "far", x: 101, y: 100, depth: 4 };
  assert.equal(pickExtendedTarget([far, near], tap)?.id, "near", "closest to the camera wins");

  const up = { id: "up", x: 100, y: 96, depth: 3.0, group: "C10" };
  const down = { id: "down", x: 100, y: 104, depth: 3.06, group: "C10" };
  assert.equal(pickExtendedTarget([up, down], { x: 100, y: 80 })?.id, "up");
  assert.equal(pickExtendedTarget([up, down], { x: 100, y: 120 })?.id, "down");
  const sameDepth = { id: "socket", x: 120, y: 100, depth: 3.02 };
  assert.equal(
    pickExtendedTarget([{ ...up, group: undefined }, sameDepth], { x: 115, y: 100 })?.id,
    "socket",
    "on a near-tie in depth the nearer centre on screen wins",
  );

  const asked = [];
  const pick = pickExtendedTarget([near, far, { id: "out", x: 300, y: 300, depth: 1 }], tap, {
    isOccluded: (c) => {
      asked.push(c.id);
      return c.id === "near";
    },
  });
  assert.equal(pick?.id, "far", "an occluded centre is skipped");
  assert.ok(!asked.includes("out"), "occlusion is only checked inside the circle");
}

// --- three: rocker halves, projection, occlusion -------------------------
function frontCamera() {
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.set(0, 1.1, 3);
  camera.lookAt(0, 1.1, 0);
  camera.updateMatrixWorld(true);
  return camera;
}
const SIZE = { w: 400, h: 400 };

{
  const camera = frontCamera();
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
  const box = new THREE.Box3(new THREE.Vector3(-0.04, 1.06, 0), new THREE.Vector3(0.04, 1.14, 0.01));
  const single = switchTargetCenters(box, ["rocker"], right);
  assert.deepEqual(
    single.map((t) => `${t.rocker}:${t.position}`),
    ["rocker:up", "rocker:down"],
  );
  assert.ok(single[0].center.y > 1.1 && single[1].center.y < 1.1);
  const double = switchTargetCenters(box, ["rocker-1", "rocker-2"], right);
  const r1 = double.find((t) => t.rocker === "rocker-1" && t.position === "up");
  const r2 = double.find((t) => t.rocker === "rocker-2" && t.position === "up");
  assert.ok(r1.center.x < 0 && r2.center.x > 0, "rocker-1 is the left half as seen");
  // Viewed from behind, left and right swap with the camera.
  const back = switchTargetCenters(box, ["rocker-1", "rocker-2"], right.clone().negate());
  assert.ok(back.find((t) => t.rocker === "rocker-1").center.x > 0);
  // A sub-target centre fed back through pressTarget gives the same half.
  const c = box.getCenter(new THREE.Vector3());
  for (const t of double) {
    const d = t.center.clone().sub(c);
    const got = pressTarget({ objectType: "DoublePushButton" }, { dy: d.y, side: d.dot(right) });
    assert.equal(`${got.rocker}:${got.position}`, `${t.rocker}:${t.position}`);
  }

  const at = projectTarget(new THREE.Vector3(0, 1.1, 0), camera, SIZE);
  assert.ok(Math.abs(at.x - 200) < 1e-6 && Math.abs(at.y - 200) < 1e-6);
  assert.ok(Math.abs(at.depth - 3) < 1e-6);
  assert.equal(projectTarget(new THREE.Vector3(0, 1.1, 5), camera, SIZE), null, "behind the camera");
  assert.equal(projectTarget(new THREE.Vector3(50, 1.1, 0), camera, SIZE), null, "off screen");
}

{
  const camera = frontCamera();
  const scene = new THREE.Scene();
  const wall = new THREE.Mesh(new THREE.BoxGeometry(4, 3, 0.2), new THREE.MeshBasicMaterial());
  wall.position.set(0, 1.5, 0.5);
  scene.add(wall);
  scene.updateMatrixWorld(true);
  const owns = () => false;
  assert.equal(centerOccluded(new THREE.Vector3(0, 1.1, 0), camera, scene, owns), true);
  assert.equal(centerOccluded(new THREE.Vector3(0, 1.1, 0.62), camera, scene, owns), false, "on the wall face");
  wall.material.transparent = true;
  wall.material.opacity = 0.4;
  assert.equal(centerOccluded(new THREE.Vector3(0, 1.1, 0), camera, scene, owns), false, "faded wall");
}

// --- registry: the full rule on a switch, a light, and a wall ------------
{
  const camera = frontCamera();
  const scene = new THREE.Scene();
  const mat = () => new THREE.MeshBasicMaterial();
  const wall = new THREE.Mesh(new THREE.BoxGeometry(6, 3, 0.1), mat());
  wall.position.set(0, 1.5, -0.05);
  wall.name = "wall";
  // 8 x 8 cm rocker on the wall face, 3 m away: a few px on screen.
  const sw = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.01), mat());
  sw.position.set(0, 1.1, 0.005);
  sw.userData.kind = "switch";
  // Light 12 cm left of the switch, 1 m nearer the camera.
  const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), mat());
  lamp.position.set(-0.12, 1.1, 1);
  lamp.userData.kind = "light";
  // A light behind the wall (other room).
  const hidden = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), mat());
  hidden.position.set(0, 1.3, -1);
  hidden.userData.kind = "light";
  scene.add(wall, sw, lamp, hidden);
  scene.updateMatrixWorld(true);

  const presses = [];
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
  const registry = createTapRegistry();
  registry.register({
    id: "fixture",
    priority: 60,
    claim(hit) {
      const kind = hit.object.userData.kind;
      if (!kind) return null;
      return {
        onTap() {
          if (kind !== "switch") return presses.push(`${kind}@${hit.object.position.z}`);
          const c = new THREE.Box3().setFromObject(hit.object).getCenter(new THREE.Vector3());
          const d = hit.point.clone().sub(c);
          const t = pressTarget({}, { dy: d.y, side: d.dot(right) });
          presses.push(`switch:${t.position}`);
        },
        actions: [{ id: kind, run() {} }],
      };
    },
    targets() {
      const out = [];
      for (const obj of [sw, lamp, hidden]) {
        if (!obj.visible) continue;
        const box = new THREE.Box3().setFromObject(obj);
        const centers =
          obj === sw
            ? switchTargetCenters(box, ["rocker"], right).map((t) => t.center)
            : [box.getCenter(new THREE.Vector3())];
        for (const center of centers) {
          out.push({ center, group: obj.uuid, hit: { object: obj, point: center }, owns: (o) => o === obj });
        }
      }
      return out;
    },
  });

  const raycaster = new THREE.Raycaster();
  function tapAt(x, y) {
    raycaster.setFromCamera(new THREE.Vector2((x / SIZE.w) * 2 - 1, -(y / SIZE.h) * 2 + 1), camera);
    const hits = raycaster.intersectObject(scene, true);
    const ctx = { raycaster, now: 0, camera, root: scene, tap: { x, y }, size: SIZE };
    presses.length = 0;
    const kind = registry.resolve(hits, ctx, (h) => isSceneSolid(h.object))?.kind ?? null;
    registry.dispatch(hits, ctx, (h) => isSceneSolid(h.object));
    return { kind, press: presses[0] ?? null };
  }
  const swAt = projectTarget(new THREE.Vector3(0, 1.1, 0.005), camera, SIZE);
  const lampAt = projectTarget(new THREE.Vector3(-0.12, 1.1, 1), camera, SIZE);

  // The switch is ~10 px tall here; 20 px above and below still press it.
  assert.deepEqual(tapAt(swAt.x, swAt.y - 20), { kind: "extended", press: "switch:up" });
  assert.deepEqual(tapAt(swAt.x, swAt.y + 20), { kind: "extended", press: "switch:down" });
  assert.deepEqual(tapAt(swAt.x + 2, swAt.y - 2), { kind: "direct", press: "switch:up" });
  // Far from anything: the wall takes it and nothing runs.
  assert.deepEqual(tapAt(swAt.x + 150, swAt.y + 120), { kind: null, press: null });

  // The lamp is nearer the camera: where both circles reach, the lamp wins.
  const mid = { x: (swAt.x + lampAt.x) / 2, y: swAt.y };
  const gap = Math.abs(swAt.x - lampAt.x);
  assert.ok(gap < TAP_TARGET_PX, `test setup: circles overlap (${gap.toFixed(1)} px)`);
  assert.equal(tapAt(mid.x, mid.y).press, "light@1", "closest object wins between circles");
  // ...but a tap on the switch geometry is a direct hit and the lamp cannot steal it.
  assert.equal(tapAt(swAt.x - 2, swAt.y + 2).press, "switch:down");

  // The light behind the wall projects just above the switch, inside the up
  // half's circle, but its centre is hidden, so a tap there presses up.
  const hiddenAt = projectTarget(new THREE.Vector3(0, 1.3, -1), camera, SIZE);
  assert.ok(Math.hypot(hiddenAt.x - swAt.x, hiddenAt.y - swAt.y) < 60);
  assert.deepEqual(
    tapAt(hiddenAt.x, hiddenAt.y),
    { kind: "extended", press: "switch:up" },
    "an occluded centre never takes the tap as an extended target",
  );
  // With the switch gone nothing reaches through the wall (Petr, 2026-11-13;
  // the PR 87 fallback used to press the light behind it).
  sw.visible = false;
  assert.deepEqual(tapAt(hiddenAt.x, hiddenAt.y), { kind: null, press: null });
  sw.visible = true;

  // Long-press resolves the same way and exposes the target's buttons.
  raycaster.setFromCamera(
    new THREE.Vector2((swAt.x / SIZE.w) * 2 - 1, -((swAt.y - 20) / SIZE.h) * 2 + 1),
    camera,
  );
  const found = registry.resolve(raycaster.intersectObject(scene, true), {
    raycaster,
    camera,
    root: scene,
    tap: { x: swAt.x, y: swAt.y - 20 },
    size: SIZE,
  });
  assert.equal(found.kind, "extended");
  assert.equal(found.hit.object, sw);
  assert.deepEqual(found.claim.actions.map((a) => a.id), ["switch"]);
}

// --- centerOccluded with fat edge lines on the ray ------------------------
// LineSegments2 reads raycaster.camera; the perspective occlusion ray used to
// leave it unset and the tap threw (garzonka window, 2026-11-12).
{
  const scene = new THREE.Scene();
  const geom = new LineSegmentsGeometry().setPositions([-1, 0, -2, 1, 0, -2]);
  const line = new LineSegments2(geom, new LineMaterial({ linewidth: 2 }));
  line.computeLineDistances();
  scene.add(line);
  const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
  camera.position.set(0, 0, 0);
  camera.lookAt(0, 0, -5);
  camera.updateMatrixWorld(true);
  scene.updateMatrixWorld(true);
  const said = [];
  const real = { error: console.error, warn: console.warn };
  console.error = (...a) => said.push(a.join(" "));
  console.warn = (...a) => said.push(a.join(" "));
  try {
    centerOccluded(new THREE.Vector3(0, 0, -5), camera, scene, () => false);
  } finally {
    console.error = real.error;
    console.warn = real.warn;
  }
  assert.deepEqual(said.filter((m) => m.includes("Raycaster.camera")), [], "occlusion ray carries the camera");
}

// --- occlusion: doors behind walls, openings, switches, glass, cuts ------
// Petr, 2026-11-13: "I can literally open doors through multiple walls."
{
  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.set(0, 1.0, 5);
  camera.lookAt(0, 1.0, 0);
  camera.updateMatrixWorld(true);
  const scene = new THREE.Scene();
  const wallMat = () => new THREE.MeshStandardMaterial();
  // A 20 cm wall at z = 0 with a 1 m opening at x = -0.5..0.5, 2.1 m high.
  const wallGroup = new THREE.Group();
  wallGroup.name = "masonry__W-1__";
  const left = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 0.2), wallMat());
  left.position.set(-2, 1.5, 0);
  const right = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 0.2), wallMat());
  right.position.set(2, 1.5, 0);
  const header = new THREE.Mesh(new THREE.BoxGeometry(1, 0.9, 0.2), wallMat());
  header.position.set(0, 2.55, 0);
  wallGroup.add(left, right, header);
  // A door 1 m behind the opening, another 1 m behind the solid right part,
  // and a third behind two walls (the "multiple walls" case).
  const leaf = (x, z, id) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.8, 2, 0.04), wallMat());
    m.position.set(x, 1, z);
    m.userData.door = id;
    return m;
  };
  const doorSeen = leaf(0, -1, "seen");
  const doorHidden = leaf(2, -1, "hidden");
  const second = new THREE.Mesh(new THREE.BoxGeometry(10, 3, 0.2), wallMat());
  second.position.set(0, 1.5, -2);
  const doorFar = leaf(-3, -3, "far");
  // A switch on the near face of the wall (z = 0.1), and one recessed so its
  // centre sits 1 cm behind that face (flush-mounted box).
  const sw = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.01), wallMat());
  sw.position.set(1.2, 1.1, 0.105);
  sw.userData.door = "switch";
  const flush = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), wallMat());
  flush.position.set(-1.2, 1.1, 0.09);
  flush.userData.door = "flush";
  // A switch on the far face of the wall (other room).
  const backSw = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.01), wallMat());
  backSw.position.set(-1.8, 1.6, -0.105);
  backSw.userData.door = "back";
  scene.add(wallGroup, doorSeen, doorHidden, second, doorFar, sw, flush, backSw);
  scene.updateMatrixWorld(true);

  const tapped = [];
  const registry = createTapRegistry();
  const interactive = [doorSeen, doorHidden, doorFar, sw, flush, backSw];
  registry.register({
    id: "door",
    priority: 100,
    claim(hit) {
      const id = hit.object.userData.door;
      return id ? { onTap: () => tapped.push(id), actions: [{ id }] } : null;
    },
    targets() {
      return interactive
        .filter((o) => isShownInSceneForTest(o))
        .map((o) => {
          const center = new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3());
          return { center, group: o.uuid, hit: { object: o, point: center }, owns: (x) => x === o };
        });
    },
  });
  function isShownInSceneForTest(o) {
    for (let n = o; n; n = n.parent) if (!n.visible) return false;
    return true;
  }
  const raycaster = new THREE.Raycaster();
  const tapAt = (x, y) => {
    raycaster.setFromCamera(new THREE.Vector2((x / SIZE.w) * 2 - 1, -(y / SIZE.h) * 2 + 1), camera);
    const hits = raycaster.intersectObject(scene, true);
    const ctx = { raycaster, now: 0, camera, root: scene, tap: { x, y }, size: SIZE };
    const keep = (h) => isSceneSolid(h.object);
    tapped.length = 0;
    const kind = registry.resolve(hits, ctx, keep)?.kind ?? null;
    registry.dispatch(hits, ctx, keep);
    return { kind, tapped: tapped[0] ?? null };
  };
  const at = (obj, dx = 0, dy = 0) => {
    const c = new THREE.Box3().setFromObject(obj).getCenter(new THREE.Vector3());
    const p = projectTarget(c, camera, SIZE);
    return [p.x + dx, p.y + dy];
  };

  assert.deepEqual(tapAt(...at(doorHidden)), { kind: null, tapped: null }, "a door behind a wall is not tappable");
  assert.deepEqual(tapAt(...at(doorHidden, -6, 8)), { kind: null, tapped: null }, "nor near its centre");
  assert.deepEqual(tapAt(...at(doorFar)), { kind: null, tapped: null }, "nor a door behind two walls");
  assert.deepEqual(tapAt(...at(doorSeen)), { kind: "direct", tapped: "seen" }, "a door seen through the opening is");
  // The opening's edge: the leaf is visible just inside it.
  const edge = projectTarget(new THREE.Vector3(-0.38, 1, -1), camera, SIZE);
  assert.deepEqual(tapAt(edge.x, edge.y), { kind: "direct", tapped: "seen" });

  assert.deepEqual(tapAt(...at(sw, 1, 1)), { kind: "direct", tapped: "switch" }, "switch on a wall face, direct");
  assert.deepEqual(tapAt(...at(sw, 0, -18)), { kind: "extended", tapped: "switch" }, "and through its 44 pt target");
  assert.deepEqual(tapAt(...at(flush, 0, 18)), { kind: "extended", tapped: "flush" }, "a flush switch's centre sits in its own wall");
  assert.deepEqual(tapAt(...at(backSw, 0, 18)), { kind: null, tapped: null }, "a switch on the far face is hidden");

  // Glass never blocks: Realistic transmission (opacity 1), Solid's opaque
  // `glazing` part, and a translucent pane.
  const pane = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 0.01), new THREE.MeshPhysicalMaterial({ transmission: 0.9 }));
  pane.position.set(2, 1.2, 0.5);
  scene.add(pane);
  scene.updateMatrixWorld(true);
  assert.equal(isGlassLike(pane), true);
  assert.deepEqual(tapAt(...at(sw, 1, 1)), { kind: "direct", tapped: "switch" }, "Realistic glass in front does not block");
  pane.material = new THREE.MeshStandardMaterial();
  pane.name = "glazing__WIN-OP05__";
  assert.equal(isGlassLike(pane), true, "glazing part");
  assert.deepEqual(tapAt(...at(sw, 1, 1)), { kind: "direct", tapped: "switch" }, "Solid glazing does not block");
  assert.deepEqual(tapAt(...at(sw, 0, -18)), { kind: "extended", tapped: "switch" });
  pane.name = "";
  pane.material = new THREE.MeshStandardMaterial({ transparent: true, opacity: 0.2 });
  assert.deepEqual(tapAt(...at(sw, 1, 1)), { kind: "direct", tapped: "switch" }, "translucent pane");
  pane.material = new THREE.MeshStandardMaterial();
  assert.deepEqual(tapAt(...at(sw, 1, 1)), { kind: null, tapped: null }, "an opaque panel does block");
  scene.remove(pane);
  scene.updateMatrixWorld(true);

  // Hidden layers: a hidden parent group takes the wall out; so does a cut.
  wallGroup.visible = false;
  assert.deepEqual(tapAt(...at(doorHidden)), { kind: "direct", tapped: "hidden" }, "a hidden wall does not block");
  wallGroup.visible = true;
  left.userData.bpIfcHidden = right.userData.bpIfcHidden = true;
  assert.deepEqual(tapAt(...at(doorHidden)), { kind: "direct", tapped: "hidden" }, "a session-hidden wall does not block");
  left.userData.bpIfcHidden = right.userData.bpIfcHidden = false;

  // Section cut keeping z < -0.5 (near side removed): the wall is cut away.
  const cut = new THREE.Plane(new THREE.Vector3(0, 0, -1), -0.5);
  scene.traverse((o) => {
    if (o.isMesh) o.material.clippingPlanes = [cut];
  });
  assert.equal(isClippedAt(right, new THREE.Vector3(2, 1, 0.1)), true);
  assert.equal(isRenderedHit({ object: doorHidden, point: new THREE.Vector3(2, 1, -1) }), true);
  assert.deepEqual(tapAt(...at(doorHidden)), { kind: "direct", tapped: "hidden" }, "a cut-away wall does not block");
  assert.deepEqual(tapAt(...at(sw, 0, -18)), { kind: null, tapped: null }, "a cut-away switch has no target");
  assert.deepEqual(tapAt(...at(doorFar)), { kind: null, tapped: null }, "the uncut second wall still blocks");
  scene.traverse((o) => {
    if (o.isMesh) o.material.clippingPlanes = [];
  });

  // Orthographic (ISO) camera: same answers.
  const iso = new THREE.OrthographicCamera(-4, 4, 4, -4, 0.01, 100);
  iso.position.copy(camera.position);
  iso.lookAt(0, 1, 0);
  iso.updateMatrixWorld(true);
  const isoTap = (obj, dx = 0, dy = 0) => {
    const c = new THREE.Box3().setFromObject(obj).getCenter(new THREE.Vector3());
    const p = projectTarget(c, iso, SIZE);
    raycaster.setFromCamera(new THREE.Vector2((p.x + dx) / SIZE.w * 2 - 1, -((p.y + dy) / SIZE.h) * 2 + 1), iso);
    const hits = raycaster.intersectObject(scene, true);
    const ctx = { raycaster, now: 0, camera: iso, root: scene, tap: { x: p.x + dx, y: p.y + dy }, size: SIZE };
    return registry.resolve(hits, ctx, (h) => isSceneSolid(h.object))?.claim?.actions?.[0]?.id ?? null;
  };
  assert.equal(isoTap(doorHidden), null, "ISO: door behind a wall");
  assert.equal(isoTap(doorSeen), "seen", "ISO: door through the opening");
  assert.equal(isoTap(sw, 0, -18), "switch", "ISO: switch 44 pt target");
}

console.log("tapTargets.test.mjs ok");
