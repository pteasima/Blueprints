/**
 * Edit-mode helpers: hold-to-repeat rate and the shared file name.
 * Run from this directory: node editModeHelpers.test.mjs
 */
import assert from "node:assert/strict";
import { HOLD_DELAY_MS, holdRate, shareFileName } from "./editMode.js";

assert.equal(HOLD_DELAY_MS, 400);
assert.equal(holdRate(0).factor, 1);
assert.equal(holdRate(1500).factor, 5);
assert.equal(holdRate(5000).factor, 10);
assert.ok(holdRate(5000).interval < holdRate(0).interval, "repeats speed up");
assert.equal(shareFileName(new Date(2026, 10, 19, 9, 5)), "FixtureEdits-20261119-0905.json");
console.log("editModeHelpers.test.mjs ok");
