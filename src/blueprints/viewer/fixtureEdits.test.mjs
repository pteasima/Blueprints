/**
 * Edit-mode rows and the overrides patch.
 * Run from this directory: node fixtureEdits.test.mjs
 */
import assert from "node:assert/strict";
import {
  addElementFrom,
  buildPatch,
  facingOf,
  fixtureRows,
  isFixture,
  nextFixtureId,
  parseStore,
  pruneAbsorbed,
  snap,
} from "./fixtureEdits.js";

const yaml = (props) => ({ name: "yaml-ifc", properties: props });
const pset = (props) => ({ name: "Pset_YamlIfc", properties: props });
const index = {
  elements: {
    sp: { globalId: "sp", id: "SP-1.11", type: "IfcSpace", name: "1.11 Ložnice" },
    a: {
      globalId: "a",
      id: "C32-V-2",
      type: "IfcSwitchingDevice",
      name: "Vypínač 32 chodba",
      containerId: "sp",
      propertySets: [
        yaml({ OriginX: 5.75, OriginY: 9.4355, Elevation: 1.3145, RefDirectionX: 0, RefDirectionY: -1, Width: 0.071, Depth: 0.015, Height: 0.071 }),
        pset({ CableNumber: 32, Panel: 2, DeviceCode: "V", CableSpec: "UTP Cat6a", CableLength: 2 }),
      ],
    },
    b: {
      globalId: "b",
      id: "C32-V-1",
      type: "IfcSwitchingDevice",
      name: "Vypínač 32 ložnice",
      containerId: "sp",
      propertySets: [yaml({ OriginX: 5.625, OriginY: 9.3645, Elevation: 1.3145 }), pset({ CableNumber: 32, DeviceCode: "V" })],
    },
    c: {
      globalId: "c",
      id: "C7-S",
      type: "IfcLightFixture",
      name: "Pásek 7",
      containerId: "sp",
      propertySets: [yaml({}), pset({ CableNumber: 7, DeviceCode: "S", X0: 0.45 })],
    },
    s: { globalId: "s", id: "SOCK-N", type: "IfcOutlet", name: "Zásuvka", containerId: "sp", propertySets: [yaml({ OriginX: 0.45, OriginY: 8.3955 })] },
    k: { globalId: "k", id: "EA-KT200", type: "IfcElectricAppliance", name: "Kettle", containerId: "sp" },
    l: { globalId: "l", id: "LIGHT-K", type: "IfcLightFixture", name: "Kitchen light", containerId: "sp" },
  },
};

// Rows: one per fixture, sorted by room, cable (sockets without one last), id.
const rows = fixtureRows(index);
assert.deepEqual(
  rows.map((r) => r.id),
  ["C7-S", "C32-V-1", "C32-V-2", "SOCK-N"],
);
assert.equal(isFixture(index.elements.k), false, "kitchen appliances are not on the cable list");
assert.equal(isFixture(index.elements.l), false, "a light without a cable is not on the cable list");
const hall = rows.find((r) => r.id === "C32-V-2");
assert.equal(hall.room, "1.11");
assert.equal(hall.roomYamlId, "SP-1.11");
assert.equal(hall.cable, 32);
assert.equal(hall.spec, "UTP Cat6a");
assert.deepEqual(hall.placement.origin, [5.75, 9.4355, 1.3145]);
assert.equal(rows.find((r) => r.id === "C7-S").placement, null, "strips have no Origin");

// Facing: C10-V on the west wall, RefDirection (0, −1), faces east.
assert.deepEqual(facingOf([0, -1]), [1, 0]);
assert.deepEqual(facingOf([0, 1]), [-1, 0]);
assert.equal(facingOf(null), null);

// Snap keeps clean decimals.
assert.equal(snap(0.0349), 0.03);
assert.equal(snap(-0.016), -0.02);
assert.equal(snap(0.00049, 0.001), 0);

// Patch: absolute Origin for placed fixtures, Move for strips, schedule keys.
const rowsById = new Map(rows.map((r) => [r.id, r]));
const store = parseStore(
  JSON.stringify({
    version: 1,
    model: "ground_floor",
    fixtures: {
      "C32-V-2": { base: [5.75, 9.4355, 1.3145], target: [5.75, 9.4355, 1.2145], props: { CableLength: 3 } },
      "C7-S": { base: [2, 5, 2.494], target: [2, 5.05, 2.494] },
      "SOCK-N": { deleted: true },
    },
  }),
  "ground_floor",
);
const patch = buildPatch(store, rowsById, { exportedAt: "2026-11-19T00:00:00Z" });
assert.deepEqual(patch.fixtures["C32-V-2"], { Origin: [5.75, 9.4355], Elevation: 1.2145, CableLength: 3 });
assert.deepEqual(patch.fixtures["C7-S"], { Move: [0, 0.05, 0] });
assert.deepEqual(patch.fixtures["SOCK-N"], { delete: true });
assert.equal(patch.version, 1);

// A copy on the same cable: next free id, full YAML element.
const id = nextFixtureId(hall, new Set(["C32-V-1", "C32-V-2"]));
assert.equal(id, "C32-V-3");
const add = addElementFrom(hall, id);
assert.equal(add.list, "switchingDevices");
assert.equal(add.ContainedInStructure, "SP-1.11");
assert.deepEqual(add.Origin, [5.75, 9.4355]);
assert.deepEqual(add.RefDirection, [0, -1]);
assert.equal(add.PropertySets[0].Properties.CableNumber, 32);

// Pruning: an edit the deployed model already has is dropped; a model that
// moved under an edit keeps Petr's absolute target.
const stale = parseStore(
  JSON.stringify({
    version: 1,
    fixtures: {
      done: { base: [0, 0, 1], target: [0, 0, 1.2] },
      moved: { base: [0, 0, 1], target: [0, 0, 1.2] },
      props: { props: { CableLength: 3 } },
      gone: { base: [0, 0, 0], target: [1, 0, 0] },
      dead: { deleted: true },
    },
  }),
  "m",
);
const dropped = pruneAbsorbed(
  stale,
  new Map([
    ["done", { base: [0, 0, 1.2], props: {}, exists: true }],
    ["moved", { base: [0, 0, 1.1], props: {}, exists: true }],
    ["props", { base: [0, 0, 0], props: { CableLength: 3 }, exists: true }],
    ["gone", { base: null, props: {}, exists: false }],
    ["dead", { base: null, props: {}, exists: false }],
  ]),
);
assert.deepEqual(dropped.sort(), ["dead", "done", "gone", "props"]);
assert.deepEqual(stale.fixtures.moved, { base: [0, 0, 1.1], target: [0, 0, 1.2] });

// Garbage in localStorage starts empty.
assert.deepEqual(parseStore("{nope", "m").fixtures, {});
assert.deepEqual(parseStore(JSON.stringify({ version: 2, fixtures: { a: {} } }), "m").fixtures, {});

console.log("fixtureEdits.test.mjs ok");
