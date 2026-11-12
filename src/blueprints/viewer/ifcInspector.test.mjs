/**
 * IFC tree, session hide, and long-press versus tap.
 * Run from this directory: node ifcInspector.test.mjs
 */
import assert from "node:assert/strict";
import { createTapRegistry } from "./interactions.js";
import { registerElementActions } from "./elementActions.js";
import { classifyHold, LONG_PRESS_MS } from "./gesture.js";
import { createVisibility } from "./ifcHide.js";
import { identityOf, meshIdentity } from "./meshIdentity.js";
import {
  INDENT_CAP,
  INDENT_PX,
  ancestorIds,
  childIds,
  containmentOf,
  dimensionLines,
  flattenGroupTree,
  flattenTree,
  groupAncestorIds,
  isGroup,
  noteLines,
  pathTo,
  rowIndent,
  rowTapEffect,
  subtreeIds,
  topLevelGroupIds,
  visibleRange,
} from "./ifcTree.js";

const index = {
  roots: ["p"],
  elements: {
    p: { globalId: "p", id: "PRJ", type: "IfcProject", name: "House", order: 0 },
    s: { globalId: "s", id: "SITE", type: "IfcSite", name: "Site", parentId: "p", order: 1 },
    b: { globalId: "b", id: "BLD", type: "IfcBuilding", name: "Building", parentId: "s", order: 2 },
    st: {
      globalId: "st",
      id: "ST",
      type: "IfcBuildingStorey",
      name: "1.NP",
      parentId: "b",
      order: 3,
    },
    sp: {
      globalId: "sp",
      id: "SP",
      type: "IfcSpace",
      name: "Room",
      parentId: "st",
      order: 4,
    },
    w: {
      globalId: "w",
      id: "W-1",
      type: "IfcWall",
      name: "Wall",
      containerId: "st",
      order: 5,
    },
    L: {
      globalId: "L",
      id: "C12-S",
      type: "IfcLightFixture",
      name: "Lamp",
      containerId: "sp",
      order: 6,
      role: "POINTSOURCE",
      cables: ["12"],
      circuits: ["Lights"],
      dimensions: [{ name: "Width", value: 0.36 }],
      propertySets: [
        { name: "Pset_YamlIfc", properties: { id: "C12-S", CableNumber: 12, Panel: 2 } },
      ],
    },
    port: {
      globalId: "port",
      id: "port:1",
      type: "IfcDistributionPort",
      name: "Port",
      parentId: "L",
      order: 7,
    },
  },
};

assert.deepEqual(childIds(index, "st"), ["sp", "w"]);
assert.deepEqual(childIds(index, "sp"), ["L"]);
assert.deepEqual(childIds(index, "L"), ["port"]);
assert.deepEqual(childIds(index, "w"), []);
assert.ok(!childIds(index, "st").includes("L"), "a nested or contained child is not duplicated");
assert.ok(!childIds(index, "sp").includes("port"));

assert.deepEqual(pathTo(index, "L"), ["p", "s", "b", "st", "sp", "L"]);
assert.deepEqual(ancestorIds(index, "L"), ["p", "s", "b", "st", "sp"]);
assert.deepEqual(subtreeIds(index, "sp"), ["sp", "L", "port"]);

const collapsed = flattenTree(index, new Set());
assert.deepEqual(collapsed.map((row) => row.id), ["p"]);
const revealed = flattenTree(index, new Set(ancestorIds(index, "L")));
assert.deepEqual(
  revealed.map((row) => row.id),
  ["p", "s", "b", "st", "sp", "L", "w"],
);
assert.equal(revealed.find((row) => row.id === "L").depth, 5);
assert.equal(revealed.find((row) => row.id === "w").depth, 4);
assert.equal(rowIndent(0), 0);
assert.equal(rowIndent(3), 3 * INDENT_PX);
assert.equal(rowIndent(INDENT_CAP), INDENT_CAP * INDENT_PX);
assert.equal(rowIndent(9), INDENT_CAP * INDENT_PX);

const where = containmentOf(index, "L");
assert.equal(where.space.id, "SP");
assert.equal(where.storey.id, "ST");
assert.deepEqual(dimensionLines(index.elements.L), ["Width: 0.36"]);
const notes = noteLines(index.elements.L);
assert.ok(notes.some((line) => line.includes("Cable: 12")));
assert.ok(notes.some((line) => line.includes("Circuit: Lights")));
assert.ok(notes.some((line) => line.includes("CableNumber: 12")));
assert.ok(notes.every((line) => !line.startsWith("id:")));

const range = visibleRange(200, 100, 40, 20, 44, 1);
assert.ok(range.start >= 0 && range.end <= 20 && range.start < range.end);

const vis = createVisibility(index);
assert.equal(vis.anyHidden(), false);
vis.hide("w");
assert.deepEqual(vis.hiddenIds(), ["w"]);
vis.unhide("w");
assert.equal(vis.anyHidden(), false);
vis.hide("sp");
assert.deepEqual(new Set(vis.hiddenIds()), new Set(["sp", "L", "port"]));
vis.unhide("L");
assert.deepEqual(new Set(vis.hiddenIds()), new Set(["sp"]));
vis.hideOthers("w");
assert.equal(vis.isHidden("w"), false);
assert.equal(vis.isHidden("L"), true);
assert.equal(vis.isHidden("p"), true);
vis.unhideOthers("w");
assert.equal(vis.anyHidden(), false);
vis.hide("w");
vis.hideOthers("L");
assert.equal(vis.isHidden("w"), true);
assert.equal(vis.isHidden("L"), false);
vis.showAll();
assert.equal(vis.anyHidden(), false);

assert.equal(classifyHold({ dt: 0, dx: 0, dy: 0, released: true }), "tap");
assert.equal(classifyHold({ dt: LONG_PRESS_MS - 1, dx: 0, dy: 0, released: true }), "tap");
assert.equal(classifyHold({ dt: LONG_PRESS_MS, dx: 0, dy: 0, released: false }), "longpress");
assert.equal(classifyHold({ dt: 100, dx: 0, dy: 0, released: false }), "pending");
assert.equal(classifyHold({ dt: 800, dx: 13, dy: 0, released: false }), "drag");
assert.equal(classifyHold({ dt: 20, dx: 0, dy: 20, released: true }), "drag");
assert.equal(
  classifyHold({ dt: 800, dx: 0, dy: 0, released: true, consumed: true }),
  "ignore",
);
assert.equal(classifyHold({ dt: LONG_PRESS_MS, dx: 0, dy: 0, pointers: 2, released: false }), "ignore");

assert.deepEqual(meshIdentity("masonry"), { part: "masonry", element: null });
assert.deepEqual(meshIdentity("masonry_3"), { part: "masonry", element: null });
assert.deepEqual(meshIdentity("masonry__W-001__"), { part: "masonry", element: "W-001" });
assert.deepEqual(meshIdentity("masonry__W-001___1"), { part: "masonry", element: "W-001" });
assert.deepEqual(meshIdentity("switch__C9-1__"), { part: "switch", element: "C9-1" });
assert.equal(rowTapEffect(null, "w"), "pulse");
assert.equal(rowTapEffect("sp", "w"), "pulse");
assert.equal(rowTapEffect("w", "w"), "frame");

assert.deepEqual(meshIdentity("door"), { part: "door", element: null });

const wallNode = { name: "masonry__W-001__" };
const wallMesh = { name: "masonry_2", parent: wallNode };
const edgeMesh = { name: "masonry__edges", parent: wallNode };
assert.deepEqual(identityOf(wallMesh), { part: "masonry", element: "W-001" });
assert.deepEqual(identityOf(edgeMesh), { part: "masonry", element: "W-001" });
assert.deepEqual(identityOf({ name: "door", parent: { name: "door__D-OP40__", parent: { name: "ground_floor" } } }), {
  part: "door",
  element: "D-OP40",
});

// An id-less mesh keeps its own label, not the outermost group's name.
assert.deepEqual(
  identityOf({ name: "grout_12", parent: { name: "ground_floor", parent: { name: "VerticalExaggeration" } } }),
  { part: "grout", element: null },
);

const taps = [];
const registry = createTapRegistry();
const state = { on: false, open: false, pressed: 0 };
registerElementActions(registry, {
  elementOf: (obj) => obj.element,
  isOn: () => state.on,
  isOpen: () => state.open,
  onLight: () => {
    state.on = !state.on;
    taps.push("light");
  },
  onSwitch: () => {
    state.pressed += 1;
    taps.push("switch");
  },
  onWindow: () => {
    state.open = !state.open;
    taps.push("window");
  },
});
registry.register({
  id: "door",
  priority: 100,
  claim(hit) {
    if (hit.object.element?.type !== "IfcDoor") return null;
    return {
      onTap() {
        taps.push("door");
      },
      actions: [{ id: "door", labelKey: "ui.open", run() { taps.push("door"); } }],
    };
  },
});

const wall = { object: { element: { type: "IfcWall", globalId: "w" } } };
const lamp = { object: { element: { type: "IfcLightFixture", globalId: "L" } } };
const sw = { object: { element: { type: "IfcSwitchingDevice", globalId: "s" } } };
const win = { object: { element: { type: "IfcWindow", globalId: "n" } } };
const door = { object: { element: { type: "IfcDoor", globalId: "d" } } };

assert.deepEqual(registry.actionsFor([wall], {}), []);
assert.equal(registry.dispatch([wall], {}), false);

let actions = registry.actionsFor([lamp], {});
assert.equal(actions.length, 1);
assert.equal(actions[0].labelKey, "ui.turnOn");
actions[0].run();
assert.equal(state.on, true);
actions = registry.actionsFor([lamp], {});
assert.equal(actions[0].labelKey, "ui.turnOff");

actions = registry.actionsFor([sw], {});
assert.equal(actions.length, 1);
assert.equal(actions[0].labelKey, "ui.press");
actions[0].run();
assert.equal(state.pressed, 1);

actions = registry.actionsFor([win], {});
assert.equal(actions[0].labelKey, "ui.open");
actions[0].run();
assert.equal(actionsAfter(registry, win)[0].labelKey, "ui.close");

actions = registry.actionsFor([door], {});
assert.equal(actions.length, 1);
assert.equal(actions[0].labelKey, "ui.open");
assert.deepEqual(taps.filter((item) => item === "door"), []);

function actionsAfter(reg, hit) {
  return reg.actionsFor([hit], {});
}


// Kitchen monoblock: a bay is an IfcGroup; a shared divider is aggregated
// into the run and assigned to both neighbouring bays. Groups are not in
// the spatial tree; Furniture holds the bays, Electrical is empty.
{
  const kitchen = {
    roots: ["run"],
    groups: ["furn", "elec", "bayA", "bayB"],
    elements: {
      run: { globalId: "run", id: "KR-ISL", type: "IfcFurniture", order: 0 },
      furn: {
        globalId: "furn",
        id: "GRP-FURNITURE",
        type: "IfcGroup",
        name: "Furniture",
        childGroupIds: ["bayA", "bayB"],
        memberIds: [],
        parentGroupIds: [],
        order: 0,
      },
      elec: {
        globalId: "elec",
        id: "GRP-ELECTRICAL",
        type: "IfcGroup",
        name: "Electrical",
        childGroupIds: [],
        memberIds: [],
        parentGroupIds: [],
        order: 1,
      },
      bayA: {
        globalId: "bayA",
        id: "SF-A",
        type: "IfcGroup",
        groups: ["furn"],
        parentGroupIds: ["furn"],
        childGroupIds: [],
        memberIds: ["endA", "div", "back"],
        order: 2,
      },
      bayB: {
        globalId: "bayB",
        id: "SF-B",
        type: "IfcGroup",
        groups: ["furn"],
        parentGroupIds: ["furn"],
        childGroupIds: [],
        memberIds: ["div", "endB", "back"],
        order: 3,
      },
      endA: { globalId: "endA", id: "END-N", parentId: "run", groups: ["bayA"], order: 1 },
      div: { globalId: "div", id: "DIV", parentId: "run", groups: ["bayA", "bayB"], order: 2 },
      endB: { globalId: "endB", id: "END-S", parentId: "run", groups: ["bayB"], order: 3 },
      back: { globalId: "back", id: "BACK", parentId: "run", groups: ["bayA", "bayB"], order: 4 },
      top: { globalId: "top", id: "WORKTOP", parentId: "run", order: 5 },
    },
  };
  assert.equal(isGroup(kitchen.elements.bayB), true);
  assert.equal(isGroup(kitchen.elements.run), false);
  assert.deepEqual(childIds(kitchen, "run"), ["endA", "div", "endB", "back", "top"]);
  assert.ok(!childIds(kitchen, "run").includes("bayA"), "groups stay out of the spatial tree");
  assert.deepEqual(topLevelGroupIds(kitchen), ["furn", "elec"]);
  assert.deepEqual(flattenGroupTree(kitchen, new Set(["furn"])).map((row) => row.id), [
    "furn",
    "bayA",
    "bayB",
    "elec",
  ]);
  assert.deepEqual(groupAncestorIds(kitchen, "bayB"), ["furn"]);
  assert.deepEqual(new Set(subtreeIds(kitchen, "bayB")), new Set(["bayB", "div", "endB", "back"]));
  assert.ok(subtreeIds(kitchen, "furn").includes("endA"));
  assert.ok(subtreeIds(kitchen, "furn").includes("bayB"));
  const vis = createVisibility(kitchen);
  vis.hideOthers("bayB");
  for (const id of ["div", "endB", "back"]) assert.equal(vis.isHidden(id), false, id);
  for (const id of ["endA", "top"]) assert.equal(vis.isHidden(id), true, id);
  // Isolating a bay does not strike through Furniture, and hides bayA
  // only once all of its unique members are hidden (the shared divider remains).
  assert.equal(vis.isHidden("furn"), false);
  assert.equal(vis.isHidden("bayA"), false);
  vis.showAll();
  vis.hideOthers("run");
  assert.equal(vis.anyHidden(), false);
  vis.hideOthers("furn");
  assert.equal(vis.isHidden("top"), true);
  assert.equal(vis.isHidden("endA"), false);
  vis.showAll();
  vis.hide("elec");
  assert.equal(vis.isHidden("elec"), true);
  vis.showAll();
}

// A circuit is a group; an empty parent still appears; windows stay a filter.
{
  const model = {
    roots: ["p"],
    groups: ["windowsWouldBeAFilter", "elec", "cir"],
    elements: {
      p: { globalId: "p", id: "PRJ", type: "IfcProject", order: 0 },
      elec: {
        globalId: "elec",
        id: "GRP-ELECTRICAL",
        type: "IfcGroup",
        childGroupIds: ["cir"],
        memberIds: [],
        parentGroupIds: [],
        order: 0,
      },
      cir: {
        globalId: "cir",
        id: "CIR-1",
        type: "IfcDistributionCircuit",
        name: "Lights",
        groups: ["elec"],
        parentGroupIds: ["elec"],
        childGroupIds: [],
        memberIds: ["lamp"],
        order: 1,
      },
      lamp: {
        globalId: "lamp",
        id: "C12-S",
        type: "IfcLightFixture",
        parentId: "p",
        groups: ["cir"],
        order: 2,
      },
    },
  };
  assert.equal(isGroup(model.elements.cir), true);
  assert.deepEqual(topLevelGroupIds(model), ["elec"]);
  assert.deepEqual(new Set(subtreeIds(model, "elec")), new Set(["elec", "cir", "lamp"]));
  assert.deepEqual(flattenGroupTree(model, new Set(["elec"])).map((row) => row.id), [
    "elec",
    "cir",
  ]);
  assert.ok(!childIds(model, "p").includes("elec"));
}

console.log("ifcInspector.test.mjs ok");
