/**
 * Session-only edit store, JSON patch export, and discard.
 * Structural split from editMode.js; behavior is unchanged.
 */
import { buildPatch, onUnsavedLeave, storeHasEdits } from "./fixtureEdits.js";
import { cablePatch } from "./cableEdits.js";

/**
 * @param {object} em edit-mode session bag shared with createEditMode and the other attach* modules
 */
export function attachEditExport(em) {
  const ctx = em.ctx;
  const canvas = em.canvas;
  const controls = em.controls;
  const t = em.t;

  // --- store (session-only: a refresh cancels unsaved edits) ---
  function hasUnsavedEdits() {
    return storeHasEdits(em.store);
  }

  function save() {
    // Do not write fixture edits to localStorage. Any leftover key from
    // before this change was already removed on load; keep it gone.
    try {
      em.storage?.removeItem(em.storageKey);
    } catch {
      /* private mode */
    }
    em.renderExportCount();
  }

  function onLeave(event) {
    onUnsavedLeave(event, hasUnsavedEdits());
  }
  window.addEventListener("beforeunload", onLeave);

  function currentPatch() {
    return buildPatch(em.store, em.rowsById, { cables: cablePatch(em.store, em.routes, em.fixtureDelta) });
  }

  function patchText() {
    return JSON.stringify(currentPatch(), null, 2) + "\n";
  }

  function compactPatchText() {
    return JSON.stringify(buildPatch(em.store, em.rowsById));
  }

  /** Runs navigator.share synchronously (no await first: iOS Safari opens
   * the sheet only inside the tap's user activation) and reports back. */
  function runShare(data) {
    let promise = null;
    try {
      promise = navigator.share(data);
    } catch (err) {
      promise = Promise.reject(err);
    }
    Promise.resolve(promise).then(
      () => em.flash(t("edit.shared")),
      (err) => {
        if (err && err.name === "AbortError") return;
        // The share sheet refused: leave the text selected for Copy.
        em.exportText.focus();
        em.exportText.select();
        em.flash(t("edit.shareFailed"));
      },
    );
  }

  function discardAll() {
    for (const [id, meshes] of em.addedMeshes) {
      for (const mesh of meshes) mesh.parent?.remove(mesh);
      em.rowsById.delete(id);
    }
    em.addedMeshes.clear();
    em.rows = em.rows.filter((row) => !row.added);
    const ids = Object.keys(em.store.fixtures);
    em.store.fixtures = {};
    em.store.cables = {};
    for (const id of ids) if (em.rowsById.has(id)) em.applyEdit(id);
    for (const route of em.routes) em.cableLayer.update(route, em.routePoints(route.id));
    save();
    em.renderRows();
    if (em.cableSel) em.selectRoute(em.cableSel.id);
    else em.select(em.selectedId && em.rowsById.has(em.selectedId) ? em.selectedId : null);
  }

  Object.assign(em, {
    hasUnsavedEdits,
    save,
    onLeave,
    currentPatch,
    patchText,
    compactPatchText,
    runShare,
    discardAll,
  });
}
