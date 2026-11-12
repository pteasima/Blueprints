/**
 * glTF fixture slots: catalogue material swap by slot name, slot selection,
 * and placing an asset in its element's box.
 * Run from this directory: node assetSlots.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { normalizeSlots, placeAsset, slotFor, swapCatalogueMaterials } from "./assetSlots.js";

// Slots named with catalogue ids get the catalogue material; others stay.
{
  const chrome = new THREE.MeshStandardMaterial({ name: "chrome-polished" });
  const own = new THREE.MeshStandardMaterial({ name: "rubber-from-vendor" });
  const group = new THREE.Group();
  group.add(new THREE.Mesh(new THREE.BoxGeometry(), chrome));
  group.add(new THREE.Mesh(new THREE.BoxGeometry(), [own, chrome]));
  const catalogue = new THREE.MeshPhysicalMaterial();
  const asked = [];
  const res = swapCatalogueMaterials(group, (id) => {
    asked.push(id);
    return id === "chrome-polished" ? catalogue : null;
  });
  assert.deepEqual(res, { swapped: ["chrome-polished"], kept: ["rubber-from-vendor"] });
  assert.equal(group.children[0].material, catalogue);
  assert.equal(group.children[1].material[0], own);
  assert.equal(group.children[1].material[1], catalogue);
  assert.deepEqual(asked, ["chrome-polished", "rubber-from-vendor"], "one lookup per slot name");
}

// Slot choice follows catalogue specificity; bad declarations are dropped.
{
  const slots = normalizeSlots([
    { selector: { label: "fixture" }, url: "generic.glb" },
    { selector: { label: "fixture", ids: ["MIX-SH"] }, url: "tango.glb", fit: "none" },
    { selector: { colour: "red" }, url: "x.glb" },
    { selector: { label: "light" } },
  ]);
  assert.equal(slots.length, 2);
  assert.equal(slotFor(slots, { part: "fixture", element: "MIX-SH" }).url, "tango.glb");
  assert.equal(slotFor(slots, { part: "fixture", element: "WC-1" }).url, "generic.glb");
  assert.equal(slotFor(slots, { part: "door", element: "D-OP03" }), null);
}

// Placement: bottom centre of the element's box, contained, upright.
{
  const parent = new THREE.Group();
  parent.position.set(10, 0, 5);
  const target = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.8, 0.2), new THREE.MeshBasicMaterial());
  target.position.set(1, 0.4, 0);
  parent.add(target);
  parent.updateMatrixWorld(true);
  const asset = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshBasicMaterial());
  const holder = placeAsset(asset, [target], "contain");
  assert.ok(holder);
  holder.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(holder);
  const near = (a, b) => Math.abs(a - b) < 1e-6;
  assert.ok(near(box.min.y, 0), `bottom ${box.min.y}`);
  assert.ok(near((box.min.x + box.max.x) / 2, 11) && near((box.min.z + box.max.z) / 2, 5));
  assert.ok(near(box.max.x - box.min.x, 0.2), "contained by the smallest extent");
  let hit = false;
  holder.traverse((o) => {
    if (o.isMesh) {
      const hits = [];
      o.raycast(new THREE.Raycaster(new THREE.Vector3(11, 5, 5), new THREE.Vector3(0, -1, 0)), hits);
      hit ||= hits.length > 0;
    }
  });
  assert.equal(hit, false, "asset meshes are display only");
}

console.log("assetSlots tests ok");
