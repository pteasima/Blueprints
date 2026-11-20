import assert from "node:assert/strict";
import {
  clearVisibility,
  defaultLocks,
  ifcElementLocked,
  loadVisibility,
  lockStates,
  lockedLeafIds,
  sanitizeState,
  saveVisibility,
  storageKey,
  urlLayerSwitch,
} from "./visibilityState.js";
import { resolvePartOutline } from "./materials.js";
import { createVisibility } from "./ifcHide.js";
import { normalizeIndex } from "./ifcTree.js";

function memoryStorage() {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, String(v)),
    removeItem: (k) => m.delete(k),
    map: m,
  };
}

// Round trip, per model, versioned.
{
  const s = memoryStorage();
  assert.equal(loadVisibility(s, "ground_floor"), null);
  saveVisibility(s, "ground_floor", {
    opacity: { masonry: 0, door: 2, bad: "x" },
    detached: ["door", "door"],
    locks: ["enclosure"],
    ifcHidden: ["abc"],
    roomIsolate: 1,
  });
  const got = loadVisibility(s, "ground_floor");
  assert.deepEqual(got.opacity, { masonry: 0, door: 1 });
  assert.deepEqual(got.detached, ["door"]);
  assert.deepEqual(got.locks, ["enclosure"]);
  assert.deepEqual(got.ifcHidden, ["abc"]);
  assert.equal(got.roomIsolate, true);
  assert.equal(loadVisibility(s, "obyvak"), null);
  assert.ok(s.map.has(storageKey("ground_floor")));
  clearVisibility(s, "ground_floor");
  assert.equal(loadVisibility(s, "ground_floor"), null);
  // A different version or garbage is ignored, not thrown.
  s.setItem(storageKey("x"), JSON.stringify({ v: 99, opacity: {} }));
  assert.equal(loadVisibility(s, "x"), null);
  s.setItem(storageKey("x"), "{nope");
  assert.equal(loadVisibility(s, "x"), null);
  assert.equal(loadVisibility(null, "x"), null);
}

// Missing locks stay null so the model defaults apply.
assert.equal(sanitizeState({}).locks, null);
assert.deepEqual(sanitizeState({ locks: [] }).locks, []);

// Locks: defaults from the parts tree, inheritance to leaves.
{
  const groups = [
    { id: "enclosure", locked: true, children: ["masonry", "glazing", "door"] },
    { id: "electrical", children: ["switch", "outlet"] },
  ];
  const outline = resolvePartOutline(
    ["masonry", "glazing", "door", "switch", "outlet"],
    groups,
    (id) => id,
  );
  assert.deepEqual(defaultLocks(outline), ["enclosure"]);
  const states = lockStates(outline, ["enclosure", "switch"]);
  assert.equal(states.get("enclosure"), "self");
  assert.equal(states.get("door"), "inherited");
  assert.equal(states.get("switch"), "self");
  assert.equal(states.has("outlet"), false);
  assert.deepEqual(
    [...lockedLeafIds(outline, ["enclosure", "switch"])].sort(),
    ["door", "glazing", "masonry", "switch"],
  );
  assert.equal(lockedLeafIds(outline, []).size, 0);
}

// IFC locks follow containment and group membership.
{
  const index = {
    elements: {
      S: { globalId: "S", parentId: null, containerId: null, groups: [] },
      R: { globalId: "R", parentId: "S", containerId: null, groups: [] },
      W: { globalId: "W", parentId: null, containerId: "R", groups: ["G"] },
      G: { globalId: "G", parentId: null, containerId: null, groups: [] },
      X: { globalId: "X", parentId: null, containerId: "S", groups: [] },
    },
  };
  assert.equal(ifcElementLocked(index, "W", new Set(["G"])), true);
  assert.equal(ifcElementLocked(index, "W", new Set(["R"])), true);
  assert.equal(ifcElementLocked(index, "X", new Set(["R"])), false);
  assert.equal(ifcElementLocked(index, "X", new Set()), false);
}

assert.equal(urlLayerSwitch("?cables=1", "cables"), true);
assert.equal(urlLayerSwitch("?cables=0", "cables"), false);
assert.equal(urlLayerSwitch("?m=x", "cables"), null);

// Inspector hide / hide-others never hide a locked element; restore() puts
// remembered hides back.
{
  const el = (globalId, type, extra = {}) => ({ globalId, id: globalId, type, parentId: null, containerId: null, groups: [], ...extra });
  const index = normalizeIndex({
    elements: {
      ST: el("ST", "IfcBuildingStorey"),
      W1: el("W1", "IfcWall", { containerId: "ST" }),
      L1: el("L1", "IfcLightFixture", { containerId: "ST" }),
      L2: el("L2", "IfcLightFixture", { containerId: "ST" }),
    },
    roots: ["ST"],
  });
  const vis = createVisibility(index, { isLocked: (id) => id === "W1" });
  vis.hideOthers("L1");
  assert.equal(vis.isHidden("W1"), false);
  assert.equal(vis.isHidden("L2"), true);
  vis.hide("W1");
  assert.equal(vis.isHidden("W1"), false);
  vis.showAll();
  vis.restore(["L2", "nope"]);
  assert.deepEqual(vis.hiddenIds(), ["L2"]);
}

console.log("visibilityState.test.mjs ok");
