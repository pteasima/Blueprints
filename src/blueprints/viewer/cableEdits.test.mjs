/**
 * Cable route edits.
 * Run from this directory: node cableEdits.test.mjs
 */
import assert from "node:assert/strict";
import {
  cablePatch,
  cleanPoints,
  currentPoints,
  deleteVertex,
  editFor,
  insertVertex,
  moveSegment,
  moveVertex,
  nearestSegment,
  polylineLength,
  prepareSegmentMove,
  pruneCables,
  routeRecords,
  segmentAxis,
} from "./cableEdits.js";

const data = {
  routes: [
    { id: "C10", cable: 10, room: "1.11", kind: "data", from: "RS-2", to: "C10-V",
      points: [[6, 10, 2.1], [6, 10, 2.6], [0.4, 10, 2.6], [0.4, 8.3, 2.6], [0.4, 8.3, 1.35]] },
    { id: "C9>C9-M", cable: 9, room: "1.11", kind: "data", from: "C9-R", fromBox: "C32-V-1", to: "C9-M", tail: true,
      points: [[5.6, 9.4, 1.35], [1.4, 3.2, 1.0]] },
    { id: "C9", cable: 9, room: "1.11", kind: "data", from: "RS-2", to: "C9-R", toBox: "C32-V-1",
      points: [[6, 10, 2.1], [5.6, 9.4, 1.35]] },
  ],
};
const routes = routeRecords(data);
assert.deepEqual(routes.map((r) => r.id), ["C9", "C9>C9-M", "C10"], "room, cable, main before tail");

// The naive end rule: a fixture move drags only the end vertex.
const moves = { "C10-V": [0, -0.1, 0.05], "C32-V-1": [0, 0.2, 0] };
const delta = (id) => moves[id] || null;
const c10 = routes.find((r) => r.id === "C10");
const now = currentPoints(c10, null, delta);
assert.deepEqual(now[4], [0.4, 8.2, 1.4]);
assert.deepEqual(now[3], [0.4, 8.3, 2.6], "inner vertices stay");
// toBox: the radar's route follows its host box; the tail's start too.
assert.deepEqual(currentPoints(routes[0], null, delta)[1], [5.6, 9.6, 1.35]);
assert.deepEqual(currentPoints(routes[1], null, delta)[0], [5.6, 9.6, 1.35]);

// A stored edit keeps its points; a later fixture move still drags the end.
const edited = moveVertex(now, 2, [0.5, 10, 2.6]);
const entry = editFor(c10, edited, delta);
moves["C10-V"] = [0, -0.2, 0.05];
const later = currentPoints(c10, entry, delta);
assert.deepEqual(later[2], [0.5, 10, 2.6]);
assert.deepEqual(later[4], [0.4, 8.1, 1.4]);
// Ends cannot be moved as vertices.
assert.deepEqual(moveVertex(now, 0, [9, 9, 9])[0], now[0]);

// Insert and delete.
const ins = insertVertex(c10.points, 1);
assert.equal(ins.index, 2);
assert.deepEqual(ins.points[2], [3.2, 10, 2.6]);
assert.equal(deleteVertex(ins.points, 2).points.length, 5);
assert.equal(deleteVertex(ins.points, 0).points.length, 6, "the board end stays");

// Segment move along y of the x-run (segment 1→2): the risers become jogs,
// nothing tilts.
const prep = prepareSegmentMove(c10.points, 2, 1);
// Segment 2→3 runs along y already, so moving segment 1→2 along y …
const prep2 = prepareSegmentMove(c10.points, 1, 1);
const moved = moveSegment(prep2.points, prep2.a, prep2.b, [0, -0.5, 0]);
for (let i = 1; i < moved.length; i += 1) {
  const axis = segmentAxis(moved[i - 1], moved[i]);
  if (!(axis >= 0 || moved[i - 1].every((v, k) => v === moved[i][k]))) assert.fail(`segment ${i} tilted`);
}
// … stretches the y-run after it instead of adding a jog there.
assert.equal(prep2.points.length, 6, "one connector on the riser side, none on the y side");
assert.deepEqual(moved[prep2.b], [0.4, 9.5, 2.6]);
assert.ok(prep.points.length >= 5);
// A collapsed jog is cleaned away.
assert.equal(cleanPoints(prep2.points).length, 5);

// Patch: edited routes and routes whose end moved; nothing else.
const store = { cables: { C10: entry } };
const patch = cablePatch(store, routes, delta);
assert.deepEqual(Object.keys(patch), ["C9", "C9>C9-M", "C10"]);
assert.deepEqual(patch.C10.points[4], [0.4, 8.1, 1.4]);
moves["C32-V-1"] = null;
assert.deepEqual(Object.keys(cablePatch(store, routes, delta)), ["C10"]);

// Pruning: an edit the deployed model has is dropped, unknown ids too.
const stale = { cables: { C9: { points: routes[0].points }, gone: { points: [[0, 0, 0], [1, 0, 0]] }, C10: entry } };
assert.deepEqual(pruneCables(stale, routes, () => null).sort(), ["C9", "gone"]);
assert.ok(stale.cables.C10);

// Lengths and picking.
assert.equal(Math.round(polylineLength(c10.points) * 1000) / 1000, 0.5 + 5.6 + 1.7 + 1.25);
const near = nearestSegment([{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }], { x: 96, y: 50 });
assert.equal(near.segment, 1);
assert.equal(near.distance, 4);

console.log("cableEdits.test.mjs ok");
