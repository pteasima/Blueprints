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
  // With the switch gone, the old rule still reaches through the wall (PR 87).
  sw.visible = false;
  assert.deepEqual(tapAt(hiddenAt.x, hiddenAt.y), { kind: "legacy", press: "light@-1" });
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

console.log("tapTargets.test.mjs ok");
