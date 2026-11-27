// node scripts/bundle_budget.test.mjs (run by .github/workflows/viewer-js.yml)
import assert from "node:assert/strict";
import { bundleStats, checkBundleBudget, initialFiles } from "./bundle_budget.mjs";

const KiB = 1024;
const meta = {
  outputs: {
    "dist/viewer.js": {
      bytes: 100 * KiB,
      imports: [
        { path: "dist/chunks/chunk-three.js", kind: "import-statement" },
        { path: "dist/chunks/editMode-x.js", kind: "dynamic-import" },
      ],
    },
    "dist/chunks/chunk-three.js": { bytes: 500 * KiB, imports: [] },
    // reached only through import(): not part of the initial load
    "dist/chunks/editMode-x.js": {
      bytes: 80 * KiB,
      imports: [{ path: "dist/chunks/chunk-three.js", kind: "import-statement" }],
    },
    "dist/meta.json": { bytes: 1 },
  },
};

assert.deepEqual(initialFiles(meta), ["dist/viewer.js", "dist/chunks/chunk-three.js"]);
const stats = bundleStats(meta, (f) => meta.outputs[f].bytes / 4);
assert.deepEqual(stats, {
  initialKiB: 600, initialGzipKiB: 150, totalKiB: 680, totalGzipKiB: 170, initialFiles: 2, files: 3,
});
assert.deepEqual(checkBundleBudget(stats, { initialKiB: 550, totalKiB: 700 }), ["initialKiB 600 > 550"]);
console.log("bundle_budget ok");
