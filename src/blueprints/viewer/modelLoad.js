/**
 * GLB mesh registry, on-demand layers, and Realistic catalogue hook-up.
 * Structural split from main.js; behavior is unchanged.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { createRealistic } from "./realistic.js";
import { windowOperable } from "./windows.js";
import { identityOf, meshIdentity } from "./meshIdentity.js";
import { gltfPrimitiveTest, mergeSiblingPrimitives } from "./mergePrimitives.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachModelLoad(ctx) {
  function ensureRealistic() {
    if (ctx.realisticCtl) return ctx.realisticCtl;
    ctx.realisticCtl = createRealistic({
      renderer: ctx.renderer,
      scene: ctx.scene,
      baseLights: [ctx.ambient, ctx.key, ctx.fill],
      catalogueUrl: ctx.options.materialsUrl || null,
      catalogueText: ctx.options.materialsText || null,
      assetSlots: Array.isArray(ctx.options.fixtureAssets) ? ctx.options.fixtureAssets : [],
      onChange: () => {
        // A texture arrived. Lit lights wear clones (eachMaterial); give
        // them the texture too, then redraw.
        ctx.root?.traverse((obj) => {
          if (!obj.isMesh) return;
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          for (const m of mats) {
            if (m?.userData?.bpOwned && m.userData.bpCatalogueId) ctx.realisticCtl?.registry.bind(m);
          }
        });
        ctx.viewDirty = true;
      },
    });
    return ctx.realisticCtl;
  }

  /**
   * Index one model mesh by part label and element (Parts rows, inspector,
   * hides). The node is `masonry__W-001__`; the mesh under it is just
   * `masonry`.
   * @param {THREE.Object3D} obj
   */
  function registerMesh(obj) {
    if (!obj.isMesh) return;
    const ident = identityOf(obj);
    if (ident.element) ident.element = ctx.idForNodeKey.get(ident.element) || ident.element;
    obj.userData.bpPart = ident.part;
    obj.userData.bpElementKey = ident.element;
    if (ident.element) {
      if (!ctx.meshesByKey.has(ident.element)) ctx.meshesByKey.set(ident.element, []);
      ctx.meshesByKey.get(ident.element).push(obj);
    }
    const name = ident.part;
    if (!ctx.parts.has(name)) ctx.parts.set(name, []);
    ctx.parts.get(name).push(obj);
    if (obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        if ("side" in m) m.side = THREE.DoubleSide;
      }
    }
  }

  /**
   * The element node (`cabinet__SF-E700-D1__`) a mesh belongs to.
   * @param {THREE.Object3D} obj
   * @returns {THREE.Object3D}
   */
  function elementNodeOf(obj) {
    let node = obj;
    while (node && !meshIdentity(node.name || "").element) node = node.parent;
    return node || obj;
  }

  /**
   * Fetch, parse and hang in one on-demand layer (`lazyLayers`). Each node
   * (`gridfinity__SF-E700-D1__`) is in the main GLB's frame and goes under
   * its element's own node in the model (the drawer), placed as if that
   * drawer were shut, so it slides, hides and highlights with it. A node
   * with no such element goes under the model root.
   * @param {string} id
   * @returns {Promise<void>}
   */
  function loadLazyLayer(id) {
    const layer = ctx.lazyLayers.get(id);
    if (!layer) return Promise.resolve();
    if (layer.promise) return layer.promise;
    layer.state = "loading";
    layer.promise = new GLTFLoader()
      .loadAsync(layer.url)
      .then((gltf) => {
        if (!ctx.root) throw new Error("model not loaded");
        const holder = gltf.scene;
        // One draw per element and material, not per CAD face (mergePrimitives.js).
        mergeSiblingPrimitives(holder, { isPrimitive: gltfPrimitiveTest(gltf) });
        // Same parent and frame as the main model's scene.
        ctx.zScaleGroup.add(holder);
        holder.updateMatrixWorld(true);
        /** @type {THREE.Object3D[]} */
        const nodes = [];
        holder.traverse((obj) => {
          const ident = meshIdentity(obj.name || "");
          if (ident.element && !meshIdentity(obj.parent?.name || "").element) nodes.push(obj);
        });
        for (const node of nodes) {
          const raw = meshIdentity(node.name || "").element;
          const key = ctx.idForNodeKey.get(raw) || raw;
          const anchor = (ctx.meshesByKey.get(key) || []).find((m) => m.userData.bpPart !== id);
          const host = anchor ? elementNodeOf(anchor) : ctx.root;
          const binding = anchor ? anchor.userData.bpDoor : null;
          // Attach as if shut: a drawer pivot rests at its parent's origin.
          const pivot = binding?.kind === "drawer" ? binding.pivot : null;
          const saved = pivot ? pivot.position.clone() : null;
          if (pivot) {
            pivot.position.set(0, 0, 0);
            pivot.updateMatrixWorld(true);
          }
          host.attach(node);
          if (pivot && saved) {
            pivot.position.copy(saved);
            pivot.updateMatrixWorld(true);
          }
          node.traverse((obj) => {
            if (binding) obj.userData.bpDoor = binding;
            registerMesh(obj);
          });
        }
        ctx.zScaleGroup.remove(holder);
        if (!ctx.parts.has(id)) ctx.parts.set(id, []);
        layer.state = "loaded";
        ctx.lazyRevision += 1;
        ctx.applyInspectorVisibility();
        ctx.refreshMaterials();
        updateBox();
        ctx.walk?.markColliderStale();
        ctx.realisticCtl?.stage.markDirty();
        ctx.viewDirty = true;
      })
      .catch((err) => {
        layer.state = "failed";
        layer.promise = null;
        console.warn(`Layer ${id} did not load:`, err);
      });
    return layer.promise;
  }

  /**
   * Windows with a pane that opens keep one mesh per face: windows.js sorts
   * meshes into panes by their centre, and a merged node spanning two panes
   * would slide whole. (Today every pane is its own node, so this is a guard
   * for future models, ~70 extra draws.)
   * @param {THREE.Object3D} node
   */
  function keepFacesSeparate(node) {
    const raw = meshIdentity(node.name || "").element;
    if (!raw) return false;
    const key = ctx.idForNodeKey.get(raw) || raw;
    const record = ctx.windowRecords.find((r) => String(r?.id ?? "") === key);
    return Boolean(record) && windowOperable(record);
  }

  function updateBox() {
    if (!ctx.root) return;
    ctx.box.setFromObject(ctx.root);
    ctx.box.getSize(ctx.size);
    ctx.box.getCenter(ctx.center);
  }

  ctx.ensureRealistic = ensureRealistic;
  ctx.registerMesh = registerMesh;
  ctx.elementNodeOf = elementNodeOf;
  ctx.loadLazyLayer = loadLazyLayer;
  ctx.keepFacesSeparate = keepFacesSeparate;
  ctx.updateBox = updateBox;
}
