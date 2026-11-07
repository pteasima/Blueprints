/**
 * Tap registry: nearest interactive wins, then fallbacks.
 * Run from this directory: node interactions.test.mjs
 */
import assert from "node:assert/strict";
import { createTapRegistry, isHitProxy } from "./interactions.js";

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

console.log("interactions.test.mjs ok");
