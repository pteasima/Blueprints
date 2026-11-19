import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { distanceToRing, hiddenForRoom, nearestRoom, pickRoom, pointInRing, roomAt } from "./roomIsolate.js";

const sq = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
const rooms = [
  { space: "SP-A", outlines: [sq(0, 0, 4, 4)], bounding: ["W-1", "D-1"] },
  { space: "SP-B", outlines: [sq(4.2, 0, 8, 4)], bounding: ["W-1"] },
];
assert.equal(pointInRing(1, 1, sq(0, 0, 2, 2)), true);
assert.equal(pointInRing(3, 1, sq(0, 0, 2, 2)), false);
assert.equal(distanceToRing(3, 1, sq(0, 0, 2, 2)), 1);
assert.equal(roomAt(rooms, 5, 1).space, "SP-B");
assert.equal(roomAt(rooms, 4.1, 1), null);
assert.equal(nearestRoom(rooms, 4.05, 1).room.space, "SP-A");

// Walk: camera position wins; orbit: target, then centre hit, then nearest.
assert.deepEqual(
  [pickRoom(rooms, { walk: true, eye: [1, 1], target: [5, 1] }).room.space, pickRoom(rooms, { walk: true, eye: [1, 1], target: [5, 1] }).source],
  ["SP-A", "camera"],
);
assert.equal(pickRoom(rooms, { walk: false, eye: [1, 1], target: [5, 1] }).room.space, "SP-B");
assert.deepEqual(
  pickRoom(rooms, { walk: false, eye: [0, 0], target: [20, 20], centreHit: () => [2, 2] }).source,
  "centre",
);
const far = pickRoom(rooms, { walk: false, eye: [0, 0], target: [20, 2], centreHit: () => null });
assert.deepEqual([far.room.space, far.source], ["SP-B", "nearest"]);
assert.equal(pickRoom([], { walk: false, eye: [0, 0], target: [0, 0] }), null);

// Containment, aggregation, bounding, position fallback, slabs.
{
  const el = (globalId, type, extra = {}) => ({ globalId, id: globalId, type, parentId: null, containerId: null, groups: [], ...extra });
  const index = {
    elements: {
      ST: el("ST", "IfcBuildingStorey"),
      A: el("A", "IfcSpace", { id: "SP-A", parentId: "ST" }),
      B: el("B", "IfcSpace", { id: "SP-B", parentId: "ST" }),
      lampA: el("lampA", "IfcLightFixture", { containerId: "A" }),
      lampB: el("lampB", "IfcLightFixture", { containerId: "B" }),
      cab: el("cab", "IfcFurniture", { containerId: "B" }),
      cabPart: el("cabPart", "IfcSystemFurnitureElement", { parentId: "cab" }),
      W1: el("W1", "IfcWall", { id: "W-1", containerId: "ST" }),
      W2: el("W2", "IfcWall", { id: "W-2", containerId: "ST" }),
      D1: el("D1", "IfcDoor", { id: "D-1", containerId: "ST" }),
      slab: el("slab", "IfcSlab", { containerId: "ST" }),
      sofa: el("sofa", "IfcFurniture", { containerId: "ST" }),
      G: el("G", "IfcGroup"),
    },
  };
  const centres = { W2: [6, 2], sofa: [1, 1], D1: [3.9, 2] };
  const hidden = hiddenForRoom(index, rooms[0], (gid) => centres[gid] || null);
  assert.deepEqual([...hidden].sort(), ["W2", "cab", "cabPart", "lampB"]);
  const hiddenB = hiddenForRoom(index, rooms[1], (gid) => centres[gid] || null);
  assert.deepEqual([...hiddenB].sort(), ["D1", "lampA", "sofa"]);
}

// The committed ground floor: every IfcSpace has an outline.
{
  const here = dirname(fileURLToPath(import.meta.url));
  const ifc = JSON.parse(readFileSync(join(here, "../../../docs/models/ground_floor.ifc.json"), "utf8"));
  const spaces = Object.values(ifc.elements).filter((e) => e.type === "IfcSpace").map((e) => e.id).sort();
  const outlined = (ifc.rooms || []).map((r) => r.space).sort();
  assert.deepEqual(outlined, spaces);
  for (const room of ifc.rooms) {
    assert.ok(room.area > 2 && room.area < 80, `${room.space} area ${room.area}`);
    assert.ok(room.bounding.length >= 4, `${room.space} bounding`);
  }
  // Bedroom 1.11: the pendant above the bed (C12-S, plan 2.57, 5.52).
  assert.equal(roomAt(ifc.rooms, 2.57, 5.52).space, "SP-1.11");
}

console.log("roomIsolate.test.mjs ok");
