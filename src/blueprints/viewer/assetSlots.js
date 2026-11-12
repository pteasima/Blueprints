/**
 * Asset slots: a real glTF fixture model (a tap, a light, a chair) replacing
 * the generated box geometry of matching elements, in Realistic mode only.
 * Solid and Shaded keep the generated geometry and its colour coding.
 *
 * Materials stay the catalogue's job: a glTF names its material slots with
 * catalogue ids (`chrome-polished`, `oak-natural-kaplan`, …) and
 * `swapCatalogueMaterials` puts the catalogue material in each such slot. A
 * slot whose name is not a catalogue id keeps the glTF's own material
 * (docs/materials/README.md, "Real 3D fixtures later").
 *
 * Interaction is unchanged: the generated meshes stay in the scene as the
 * tap / long-press / door / light targets, only drawn invisibly. The glTF
 * copy is display only (no raycast), follows its element (it is parented
 * next to the generated mesh, so door swings carry it) and casts shadows.
 *
 * A slot is `{ selector, url, fit? }`: `selector` is a catalogue selector
 * (`{label, ids?, id_pattern?}`), `url` the glTF/GLB, and `fit`
 * `"contain"` (uniform scale into the element's box, the default) or
 * `"none"` (the asset is authored in metres at real size). The asset is
 * placed bottom-centre in the element's box; author it Y-up, front facing
 * +Z, origin at the bottom centre.
 */
import * as THREE from "three";
import { parseSelector, selectorScore } from "./catalogue.js";

/**
 * Put catalogue materials into glTF slots named with catalogue ids.
 * @param {THREE.Object3D} object
 * @param {(id: string) => THREE.Material | null} materialFor catalogue id → material, or null
 * @returns {{ swapped: string[], kept: string[] }}
 */
export function swapCatalogueMaterials(object, materialFor) {
  const swapped = new Set();
  const kept = new Set();
  /** @type {Map<string, THREE.Material | null>} */
  const cache = new Map();
  object.traverse((obj) => {
    const mesh = /** @type {THREE.Mesh} */ (obj);
    if (!mesh.isMesh) return;
    const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const next = list.map((mat) => {
      const name = String(mat?.name || "").trim();
      if (!name) return mat;
      if (!cache.has(name)) cache.set(name, materialFor(name));
      const replacement = cache.get(name);
      if (!replacement) {
        kept.add(name);
        return mat;
      }
      swapped.add(name);
      return replacement;
    });
    mesh.material = Array.isArray(mesh.material) ? next : next[0];
  });
  return { swapped: [...swapped], kept: [...kept] };
}

/**
 * Which slot (if any) claims a mesh. Same specificity as the catalogue.
 * @param {{ selector: import("./catalogue.js").Selector }[]} slots
 * @param {import("./catalogue.js").MeshInfo} info
 */
export function slotFor(slots, info) {
  let best = null;
  let bestScore = 0;
  for (const slot of slots) {
    const s = selectorScore(slot.selector, info);
    if (s > bestScore) {
      best = slot;
      bestScore = s;
    }
  }
  return best;
}

/**
 * Normalise slot declarations; bad ones are dropped with a warning.
 * @param {unknown[]} raw
 */
export function normalizeSlots(raw) {
  const out = [];
  for (const [i, item] of (Array.isArray(raw) ? raw : []).entries()) {
    const r = /** @type {any} */ (item) || {};
    const errors = [];
    const selector = parseSelector(r.selector, errors, `asset slot ${i}`);
    if (!selector || !r.url) {
      console.warn(`Realistic: asset slot ${i} ignored`, errors.join("; ") || "missing url");
      continue;
    }
    out.push({ selector, url: String(r.url), fit: r.fit === "none" ? "none" : "contain" });
  }
  return out;
}

/**
 * Fit a loaded asset into the world box of its element and hang it from the
 * element's parent.
 * @param {THREE.Object3D} asset fresh clone of the glTF scene
 * @param {THREE.Mesh[]} targets generated meshes of one element
 * @param {"contain" | "none"} fit
 */
export function placeAsset(asset, targets, fit) {
  const parent = targets[0].parent;
  if (!parent) return null;
  const target = new THREE.Box3();
  for (const m of targets) target.expandByObject(m);
  const size = target.getSize(new THREE.Vector3());
  asset.updateMatrixWorld(true);
  const own = new THREE.Box3().setFromObject(asset);
  const ownSize = own.getSize(new THREE.Vector3());
  let k = 1;
  if (fit === "contain") {
    k = Math.min(
      size.x / Math.max(ownSize.x, 1e-6),
      size.y / Math.max(ownSize.y, 1e-6),
      size.z / Math.max(ownSize.z, 1e-6),
    );
  }
  const holder = new THREE.Group();
  holder.name = "bpAssetSlot";
  holder.userData.bpAsset = true;
  asset.scale.multiplyScalar(k);
  const ownCenter = own.getCenter(new THREE.Vector3()).multiplyScalar(k);
  asset.position.set(-ownCenter.x, -own.min.y * k, -ownCenter.z);
  holder.add(asset);
  // Bottom centre of the element, in the parent's frame.
  const anchor = new THREE.Vector3((target.min.x + target.max.x) / 2, target.min.y, (target.min.z + target.max.z) / 2);
  parent.updateMatrixWorld(true);
  holder.position.copy(parent.worldToLocal(anchor));
  // Undo the parent's rotation/scale so the asset stays upright at size.
  const pq = new THREE.Quaternion();
  const ps = new THREE.Vector3();
  parent.matrixWorld.decompose(new THREE.Vector3(), pq, ps);
  holder.quaternion.copy(pq).invert();
  holder.scale.set(1 / ps.x, 1 / ps.y, 1 / ps.z);
  holder.traverse((o) => {
    if (/** @type {any} */ (o).isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
      o.raycast = () => {};
      o.userData.bpHitProxy = true;
    }
  });
  parent.add(holder);
  return holder;
}
