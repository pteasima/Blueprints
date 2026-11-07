/**
 * Tap registry: nearest interactive wins, then fallbacks.
 * Run from this directory: node interactions.test.mjs
 */
import assert from "node:assert/strict";
import {
  TAP_TARGET_PX,
  chooseTapTarget,
  createTapRegistry,
  distanceToRect,
  isHitProxy,
  scoreTapTarget,
  tapSlopPx,
} from "./interactions.js";

assert.equal(isHitProxy(null), false);
assert.equal(isHitProxy({}), false);
assert.equal(isHitProxy({ userData: { bpHitProxy: true } }), true);

const taps = [];
const registry = createTapRegistry();
registry.register({
  id: "low",
  priority: 10,
  claim(hit) {
    if (hit.object.id !== "shared") return null;
    return { onTap() { taps.push("low"); } };
  },
});
registry.register({
  id: "high",
  priority: 80,
  claim(hit) {
    if (!hit.object.interactive) return null;
    return { onTap() { taps.push(`high:${hit.object.id}`); } };
  },
});
let fell = 0;
registry.register({
  id: "gap",
  priority: 1,
  fallback() {
    fell += 1;
    return true;
  },
});

const wall = { object: { id: "wall", interactive: false } };
const sw = { object: { id: "switch", interactive: true } };
const shared = { object: { id: "shared", interactive: true } };

assert.equal(registry.dispatch([wall, sw], {}), true);
assert.deepEqual(taps, ["high:switch"]);
assert.equal(fell, 0, "a claimed hit skips fallbacks");

taps.length = 0;
assert.equal(registry.dispatch([shared], {}), true);
assert.deepEqual(taps, ["high:shared"], "higher priority claims the same solid");

taps.length = 0;
assert.equal(registry.dispatch([wall], {}), true);
assert.equal(fell, 1);
assert.deepEqual(taps, []);

assert.equal(TAP_TARGET_PX, 44);
assert.equal(tapSlopPx(10, 80), (44 - 10) / 2);
assert.equal(tapSlopPx(200, 400), 0);
assert.equal(distanceToRect(5, 5, { minX: 0, minY: 0, maxX: 10, maxY: 10 }), 0);
assert.equal(distanceToRect(12, 5, { minX: 0, minY: 0, maxX: 10, maxY: 10 }), 2);

const tiny = { minX: 100, minY: 100, maxX: 110, maxY: 110, cx: 105, cy: 105 };
assert.ok(scoreTapTarget(105, 105, tiny));
assert.ok(scoreTapTarget(110 + 16, 105, tiny), "a near miss on a small control still hits");
assert.equal(scoreTapTarget(110 + 30, 105, tiny), null);
const wide = { minX: 0, minY: 0, maxX: 200, maxY: 400, cx: 100, cy: 200 };
assert.equal(scoreTapTarget(210, 200, wide), null, "a large control does not grow past its rectangle");

const nearer = { visualDist: 4, centerDist: 10, priority: 10, id: "near" };
const farther = { visualDist: 12, centerDist: 2, priority: 100, id: "far" };
assert.equal(chooseTapTarget([farther, nearer]).id, "near");
const tieLow = { visualDist: 0, centerDist: 5, priority: 10, id: "low" };
const tieHigh = { visualDist: 0, centerDist: 5, priority: 90, id: "high" };
assert.equal(chooseTapTarget([tieLow, tieHigh]).id, "high");

{
  const reg = createTapRegistry();
  let hit = null;
  let fellScreen = 0;
  const pads = {
    near: { minX: 0, minY: 0, maxX: 8, maxY: 8, cx: 4, cy: 4 },
    far: { minX: 40, minY: 0, maxX: 48, maxY: 8, cx: 44, cy: 4 },
  };
  reg.register({
    id: "near",
    priority: 10,
    targets() {
      return [{ object: { name: "near" }, onTap() { hit = "near"; } }];
    },
  });
  reg.register({
    id: "far",
    priority: 100,
    targets() {
      return [{ object: { name: "far" }, onTap() { hit = "far"; } }];
    },
    fallback() {
      fellScreen += 1;
      return true;
    },
  });
  const project = (obj) => pads[obj.name];
  assert.equal(reg.dispatch([], { clientX: 10, clientY: 4, project }), true);
  assert.equal(hit, "near", "the nearer pad wins over a higher priority farther away");
  assert.equal(fellScreen, 0, "a screen hit does not close an opening");
  hit = null;
  assert.equal(reg.dispatch([], { clientX: 200, clientY: 4, project }), true);
  assert.equal(hit, null);
  assert.equal(fellScreen, 1, "a tap outside every pad still uses the opening fallback");
}

console.log("interactions.test.mjs ok");
