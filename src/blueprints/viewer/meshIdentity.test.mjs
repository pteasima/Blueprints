import assert from "node:assert/strict";
import { gltfNodeKey, meshIdentity, nodeKeyMap } from "./meshIdentity.js";

// GLTFLoader drops dots from node names: outlet__SOCK-1.12-W__ → outlet__SOCK-112-W__.
assert.equal(gltfNodeKey("SOCK-1.12-W"), "SOCK-112-W");
assert.equal(gltfNodeKey("C10-V"), "C10-V");
assert.equal(gltfNodeKey("a b[c]:d/e"), "a_bcde");

const map = nodeKeyMap(["SOCK-1.12-W", "C10-V", "NC-1.07-S", null]);
assert.equal(map.get("SOCK-112-W"), "SOCK-1.12-W");
assert.equal(map.get("NC-107-S"), "NC-1.07-S");
assert.equal(map.has("C10-V"), false);

const ident = meshIdentity("outlet__SOCK-112-W__");
assert.equal(map.get(ident.element), "SOCK-1.12-W");

console.log("meshIdentity.test.mjs: ok");
