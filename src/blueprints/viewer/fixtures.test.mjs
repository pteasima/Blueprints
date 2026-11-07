/**
 * Fixture roles, pale/on colours, and taps on the shared registry.
 * Run from this directory: node fixtures.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { createTapRegistry } from "./interactions.js";
import { SOLID_COLORS } from "./materials.js";
import {
  FIXTURE_ROLES,
  PALE_MIX,
  SWITCH_FLASH_MS,
  SWITCH_GLOW,
  createFixtureController,
  matchFixtureHosts,
  paleTint,
} from "./fixtures.js";

assert.deepEqual(FIXTURE_ROLES.light.on, SOLID_COLORS.light);
assert.deepEqual(FIXTURE_ROLES.light.on, [255, 210, 40]);
assert.equal(FIXTURE_ROLES.power.tap, null);
assert.equal(FIXTURE_ROLES.data.tap, null);
assert.equal(FIXTURE_ROLES.sensor.tap, null);
assert.equal(FIXTURE_ROLES.switch.tap, "flash");
assert.equal(FIXTURE_ROLES.switch.glow, true);
assert.equal(FIXTURE_ROLES.light.tap, "toggle");
assert.equal(FIXTURE_ROLES.blind.tap, "toggle");
assert.equal(SWITCH_FLASH_MS, 250);

const paleLight = paleTint(FIXTURE_ROLES.light.on);
assert.ok(paleLight[1] > FIXTURE_ROLES.light.on[1], "off yellow is paler");
assert.ok(paleLight[2] > FIXTURE_ROLES.light.on[2]);
assert.ok(paleLight.every((channel, i) => channel >= FIXTURE_ROLES.light.on[i]));
const paleWhite = paleTint([255, 255, 255]);
assert.ok(paleWhite.every((channel) => channel < 250 && channel > 200));
const paleRed = paleTint(FIXTURE_ROLES.power.on);
assert.ok(paleRed[0] > FIXTURE_ROLES.power.on[0]);
assert.ok(paleRed[1] > 180 && paleRed[2] > 180);

function box(name, x) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.07, 0.07, 0.015),
    new THREE.MeshBasicMaterial({ color: 0x888888 }),
  );
  mesh.name = name;
  mesh.position.set(x, 1.35, 0);
  return mesh;
}

function centerOf(mesh) {
  mesh.updateWorldMatrix(true, true);
  return new THREE.Box3().setFromObject(mesh).getCenter(new THREE.Vector3());
}

// Two segments of one light, plus a socket that must not be claimed.
{
  const scene = new THREE.Scene();
  const stripA = box("light", 0);
  const stripB = box("light", 1.2);
  const socket = box("outlet", 2.4);
  const sw = box("switch", 3.0);
  const blind = box("actuator", 3.6);
  scene.add(stripA, stripB, socket, sw, blind);
  const records = [
    { id: "C3-S", role: "light", center: centerOf(stripA).toArray() },
    { id: "C3-S", role: "light", center: centerOf(stripB).toArray() },
    { id: "SOCK", role: "power", center: centerOf(socket).toArray() },
    { id: "C1-2V", role: "switch", center: centerOf(sw).toArray() },
    { id: "C16-B", role: "blind", center: centerOf(blind).toArray() },
  ];
  const entries = [stripA, stripB, socket, sw, blind].map((host) => ({
    host,
    center: centerOf(host),
  }));
  assert.equal(matchFixtureHosts(entries, records).length, 5);
  // A neighbour 71 mm away must not steal the record.
  const shifted = centerOf(socket).clone();
  shifted.y += 0.071;
  assert.equal(
    matchFixtureHosts([{ host: socket, center: shifted }], [records[2]]).length,
    0,
  );

  const taps = createTapRegistry();
  const ctrl = createFixtureController({ records });
  ctrl.attach(taps);
  assert.equal(ctrl.bind(scene), 5);
  ctrl.syncMaterials();

  function rgb(mesh) {
    const c = mesh.material.color;
    return [c.r, c.g, c.b].map((v) => Math.round(v * 255));
  }
  const off = paleTint(FIXTURE_ROLES.light.on);
  assert.deepEqual(rgb(stripA), off);
  // A device exported as a group of faces (one mesh per side) all take the tint.
  {
    const group = new THREE.Group();
    group.name = "outlet";
    const faceA = box("outlet", 0);
    const faceB = box("outlet_1", 0.02);
    group.add(faceA, faceB);
    scene.add(group);
    const grouped = createFixtureController({
      records: [{ id: "SOCK-G", role: "power", center: centerOf(group).toArray() }],
    });
    assert.equal(grouped.bind(scene), 1);
    grouped.syncMaterials();
    const palePower = paleTint(FIXTURE_ROLES.power.on);
    assert.deepEqual(rgb(faceA), palePower);
    assert.deepEqual(rgb(faceB), palePower);
    assert.equal(faceA.material, faceB.material);
  }
  assert.deepEqual(rgb(socket), paleTint(FIXTURE_ROLES.power.on));
  assert.deepEqual(rgb(sw), paleTint(FIXTURE_ROLES.switch.on));

  const ctx = { now: 1000 };
  assert.equal(
    taps.dispatch([{ object: socket }], ctx),
    false,
    "a socket is not interactive",
  );
  assert.equal(ctrl.step(1000), false);

  assert.equal(taps.dispatch([{ object: stripA }], ctx), true);
  assert.equal(stripA.userData.bpFixture.on, true);
  assert.equal(stripB.userData.bpFixture.on, true, "segments that share an id toggle together");
  assert.equal(sw.userData.bpFixture.on, false, "a light tap does not change a switch");
  assert.deepEqual(rgb(stripA), FIXTURE_ROLES.light.on);
  assert.equal(ctrl.step(1000), true);

  assert.equal(taps.dispatch([{ object: sw }], { now: 2000 }), true);
  assert.equal(sw.userData.bpFixture.on, true);
  assert.equal(stripA.userData.bpFixture.on, true, "a switch does not change a light");
  const glow = sw.material;
  assert.equal(glow.emissiveIntensity, SWITCH_GLOW);
  assert.ok(glow.emissive && glow.emissive.r > 0.9, "active switch glows");
  assert.equal(ctrl.step(2000 + SWITCH_FLASH_MS - 1), true);
  assert.equal(sw.userData.bpFixture.on, true);
  assert.equal(ctrl.step(2000 + SWITCH_FLASH_MS), true);
  assert.equal(sw.userData.bpFixture.on, false);
  assert.deepEqual(rgb(sw), paleTint(FIXTURE_ROLES.switch.on));

  assert.equal(taps.dispatch([{ object: blind }], { now: 3000 }), true);
  assert.equal(blind.userData.bpFixture.on, true);
  assert.deepEqual(rgb(blind), FIXTURE_ROLES.blind.on);
  assert.equal(taps.dispatch([{ object: blind }], { now: 3100 }), true);
  assert.equal(blind.userData.bpFixture.on, false);
}

// A nearer switch beats a door leaf on the same ray. The wall does not stop it.
{
  const wall = { object: { id: "wall", userData: {} } };
  const sw = { object: { id: "switch", userData: { bpFixture: { id: "S", role: "switch", on: false, host: { material: new THREE.MeshBasicMaterial() } } } } };
  const door = { object: { id: "door", userData: { bpDoor: { goal: 0 } } } };
  // The controller's claim walks userData.bpFixture. Build a real controller
  // so the priority sits next to a door claim the way main.js does.
  const taps = createTapRegistry();
  const ctrl = createFixtureController({ records: [] });
  ctrl.attach(taps);
  taps.register({
    id: "door",
    priority: 100,
    claim(hit) {
      if (!hit.object.userData?.bpDoor) return null;
      return { onTap() { hit.object.userData.bpDoor.goal = 1; } };
    },
  });
  // Give the switch a host the painter can colour.
  const host = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.02), new THREE.MeshBasicMaterial());
  host.userData.bpFixture = {
    id: "S",
    role: "switch",
    on: false,
    until: null,
    host,
    base: null,
    owned: null,
    ownedSource: null,
    glow: null,
  };
  ctrl.bindings.push(host.userData.bpFixture);
  sw.object = host;
  assert.equal(taps.dispatch([wall, sw, door], { now: 1 }), true);
  assert.equal(host.userData.bpFixture.on, true, "the switch, not the door, took the tap");
  assert.equal(door.object.userData.bpDoor.goal, 0);
}

console.log("fixtures.test.mjs ok");
