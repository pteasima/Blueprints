import assert from "node:assert/strict";
import {
  CAMERA_BOUNDS_SPANS,
  CAMERA_VERSION,
  cameraStorageKey,
  loadCamera,
  saveCamera,
  sanitizeCameraState,
  urlOverridesCamera,
} from "./cameraState.js";

function memoryStorage() {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, String(v)),
    removeItem: (k) => m.delete(k),
    map: m,
  };
}

const house = { min: [0, 0, 0], max: [10, 3, 8] };

{
  const s = memoryStorage();
  assert.equal(loadCamera(s, "ground_floor"), null);
  const pose = {
    mode: "orbit",
    position: [12, 8, 14],
    target: [5, 1.5, 4],
    heightCm: 186,
  };
  assert.equal(saveCamera(s, "ground_floor", pose), true);
  const got = loadCamera(s, "ground_floor", house);
  assert.equal(got.v, CAMERA_VERSION);
  assert.equal(got.mode, "orbit");
  assert.deepEqual(got.position, [12, 8, 14]);
  assert.deepEqual(got.target, [5, 1.5, 4]);
  assert.equal(got.heightCm, 186);
  assert.equal(loadCamera(s, "obyvak"), null);
  assert.ok(s.map.has(cameraStorageKey("ground_floor")));
}

// Walk pose, height in range; a missing or bad height is dropped.
{
  const walk = sanitizeCameraState({
    mode: "walk",
    position: [2, 1.7, 3],
    target: [2, 1.7, 2],
    heightCm: 174,
  });
  assert.equal(walk.mode, "walk");
  assert.equal(walk.heightCm, 174);
  assert.equal(sanitizeCameraState({ mode: "walk", position: [2, 1.7, 3], target: [2, 1.7, 2] }).heightCm, undefined);
  assert.equal(
    sanitizeCameraState({ mode: "walk", position: [2, 1.7, 3], target: [2, 1.7, 2], heightCm: 12 }).heightCm,
    undefined,
  );
}

// Corrupt, incomplete, unknown version, or coincident orbit: ignored.
{
  const s = memoryStorage();
  assert.equal(sanitizeCameraState(null), null);
  assert.equal(sanitizeCameraState({ mode: "orbit", position: [1, 2, 3] }), null);
  assert.equal(sanitizeCameraState({ mode: "orbit", position: [1, 2, "x"], target: [0, 0, 0] }), null);
  assert.equal(sanitizeCameraState({ mode: "fly", position: [1, 2, 3], target: [0, 0, 0] }), null);
  assert.equal(sanitizeCameraState({ mode: "orbit", position: [1, 2, 3], target: [1, 2, 3] }), null);
  // Walk may look with yaw/pitch even if target equals position.
  assert.equal(sanitizeCameraState({ mode: "walk", position: [1, 2, 3], target: [1, 2, 3] }).mode, "walk");
  s.setItem(cameraStorageKey("x"), JSON.stringify({ v: 99, mode: "orbit", position: [1, 2, 3], target: [0, 0, 0] }));
  assert.equal(loadCamera(s, "x"), null);
  s.setItem(cameraStorageKey("x"), "{nope");
  assert.equal(loadCamera(s, "x"), null);
  assert.equal(loadCamera(null, "x"), null);
  assert.equal(saveCamera(s, "x", { mode: "orbit", position: [1, 1, 1], target: [1, 1, 1] }), false);
}

// Out of bounds (far from the model) is ignored on load, not thrown.
{
  const s = memoryStorage();
  const far = 1 * CAMERA_BOUNDS_SPANS * 2; // house span is ~10, but we use min span 1 in the check when... 
  // house span = max(10, 3, 8) = 10; limit = 10 * 50 = 500
  saveCamera(s, "ground_floor", { mode: "orbit", position: [0, 0, 10000], target: [0, 0, 0] });
  assert.equal(loadCamera(s, "ground_floor", house), null);
  // The same entry still loads when no bounds are given (sanitize on save kept it).
  assert.equal(loadCamera(s, "ground_floor").position[2], 10000);
  // A pose just inside the limit loads.
  const limit = 10 * CAMERA_BOUNDS_SPANS;
  saveCamera(s, "ground_floor", { mode: "orbit", position: [5, 1.5, 4 + limit * 0.9], target: [5, 1.5, 4] });
  assert.ok(loadCamera(s, "ground_floor", house));
}

assert.equal(urlOverridesCamera("?m=ground_floor&scene=bedroom"), true);
assert.equal(urlOverridesCamera("?scene=bathroom-plan"), true);
assert.equal(urlOverridesCamera("?scene="), false);
assert.equal(urlOverridesCamera("?m=ground_floor"), false);
assert.equal(urlOverridesCamera(""), false);

console.log("cameraState.test.mjs ok");
