/**
 * Contractor-plate drawings and AR Quick Look export.
 * Structural split from main.js; behavior is unchanged.
 */
import * as THREE from "three";
import { meshToClippedExportMesh } from "./clipGeometry.js";
import { applyArPlacement, computeArPlacement } from "./arPlacement.js";
import { EDGE_MODE_OPAQUE, isEdgeOverlay } from "./edges.js";
import { DRAW_H, DRAW_W, plateFromCanvas } from "./drawing.js";

/**
 * @param {object} ctx viewer session bag shared with main.js and the other attach* modules
 */
export function attachDrawingExport(ctx) {
  function modelFileId() {
    try {
      const id = new URLSearchParams(window.location.search).get("m");
      if (id && id.trim()) return id.trim();
    } catch {
      /* ignore */
    }
    return "model";
  }

  /**
   * Zero the sheet's view offset so the plate is the full orthographic frame.
   */
  /**
   * Grow the ortho frame (or dolly a perspective camera) so callout glyphs
   * that hang off the plate move back inside. Capped so the model stays
   * readable. Offsets are in NDC, so this only recovers a modest overflow.
   */
  function fitLabelsOnPlate() {
    const pad = 0.04;
    let grown = 1;
    const maxGrow = 1.35;
    for (let step = 0; step < 6; step += 1) {
      ctx.annotations.update();
      const bounds = ctx.annotations.glyphBoundsNdc();
      if (!bounds) return;
      const over = Math.max(
        -1 + pad - bounds.minX,
        bounds.maxX - (1 - pad),
        -1 + pad - bounds.minY,
        bounds.maxY - (1 - pad),
        0,
      );
      if (over < 0.012) return;
      if (grown >= maxGrow - 0.01) return;
      const factor = Math.min(maxGrow / grown, Math.max(1.05, 1 + over * 1.6));
      grown *= factor;
      if (ctx.camera.isOrthographicCamera) {
        ctx.orthoCamera.left *= factor;
        ctx.orthoCamera.right *= factor;
        ctx.orthoCamera.top *= factor;
        ctx.orthoCamera.bottom *= factor;
        ctx.orthoCamera.updateProjectionMatrix();
      } else {
        ctx._look.copy(ctx.camera.position).sub(ctx.controls.target).multiplyScalar(factor);
        ctx.camera.position.copy(ctx.controls.target).add(ctx._look);
        ctx.updateCameraClipPlanes();
      }
    }
  }

  function lockPlateFrame() {
    ctx.frameAnim = 0;
    ctx.frameZoom = 1;
    ctx.frameOffX = 0;
    ctx.frameOffY = 0;
    ctx.frameZoomT = 1;
    ctx.frameOffXT = 0;
    ctx.frameOffYT = 0;
    ctx.camera.clearViewOffset();
    ctx.camera.zoom = ctx.viewZoom;
    ctx.camera.updateProjectionMatrix();
  }

  async function captureDrawing() {
    if (ctx.drawBusy || !ctx.root || !ctx.activeSceneSpec) return null;
    ctx.drawBusy = true;
    ctx.syncDrawingButton();
    ctx.pauseTick = true;
    const spec = ctx.activeSceneSpec;
    const prevEdge = ctx.edgeMode;
    const prevBg = ctx.scene.background;
    const prevRatio = ctx.renderer.getPixelRatio();
    const prevStyleW = ctx.canvas.style.width;
    const prevStyleH = ctx.canvas.style.height;
    const prevDetent = ctx.chromeApi?.getDetent?.() ?? null;
    const measureWas = ctx.measureTool?.isActive() ?? false;
    const labelsWere = ctx.annotations.isVisible();
    try {
      if (measureWas) ctx.measureTool?.setActive(false);
      ctx.annotations.setVisible(true);
      ctx.chromeApi?.setDetent("closed");
      ctx.canvas.style.width = `${DRAW_W}px`;
      ctx.canvas.style.height = `${DRAW_H}px`;
      ctx.renderer.setPixelRatio(1);
      ctx.resize();
      lockPlateFrame();
      ctx.edgeMode = EDGE_MODE_OPAQUE;
      ctx.refreshEdges();
      ctx.scene.background = new THREE.Color(0xffffff);
      ctx.annotations.setInk("plate");
      ctx.applyScene(spec);
      lockPlateFrame();
      // Czech notes are wider than the English ones the frames were built
      // for. Zoom the plate out until the glyphs sit inside the sheet.
      // A line that is still wider than the sheet has to be broken in the
      // scene text; zooming alone cannot shrink the plate font.
      fitLabelsOnPlate();
      ctx.annotations.update();
      ctx.depthPeel.render(ctx.scene, ctx.camera, ctx.root, ctx.anyPartFaded, { quality: "high" });
      const { png, pdf } = await plateFromCanvas(ctx.canvas);
      const stem = `${modelFileId()}_${String(spec.id || "scene")}`;
      return { png, pdf, stem };
    } finally {
      ctx.canvas.style.width = prevStyleW;
      ctx.canvas.style.height = prevStyleH;
      ctx.renderer.setPixelRatio(prevRatio);
      ctx.edgeMode = prevEdge;
      ctx.scene.background = prevBg;
      ctx.annotations.setInk("viewer");
      ctx.annotations.setVisible(labelsWere);
      if (prevDetent) ctx.chromeApi?.setDetent(prevDetent);
      ctx.resize();
      ctx.refreshEdges();
      if (spec) ctx.applyScene(spec);
      if (measureWas) ctx.measureTool?.setActive(true);
      ctx.pauseTick = false;
      ctx.drawBusy = false;
      ctx.syncDrawingButton();
      ctx.syncLabelButton();
      requestAnimationFrame(ctx.tick);
    }
  }

  function buildArExportScene() {
    if (!ctx.root) return null;
    ctx.root.updateWorldMatrix(true, true);
    const planes = ctx.lockedCuts().map((c) => ctx.planeForCut(c));
    const content = new THREE.Group();
    content.name = "ARContent";

    ctx.root.traverse((obj) => {
      if (!obj.isMesh || !obj.visible) return;
      if (isEdgeOverlay(obj)) return;
      const clipped = meshToClippedExportMesh(obj, planes);
      if (clipped) content.add(clipped);
    });

    if (!content.children.length) return null;

    // Meshes are already in world space from clipping; reset local xforms.
    content.updateMatrixWorld(true);
    const placement = computeArPlacement(content);
    const group = new THREE.Group();
    group.name = "ARExport";
    group.add(content);
    applyArPlacement(content, placement);
    group.userData.arPlacement = placement;
    return group;
  }

  async function openArQuickLook() {
    if (ctx.arBusy || !ctx.root) return;
    ctx.arBusy = true;
    const label = ctx.arBtn?.textContent || "AR";
    if (ctx.arBtn) {
      ctx.arBtn.disabled = true;
      ctx.arBtn.textContent = "…";
    }
    try {
      const exportScene = buildArExportScene();
      if (!exportScene) {
        throw new Error("Nothing visible to export. Show at least one part.");
      }
      // USDZExporter and its zip library are a lazy chunk (build.mjs).
      const { USDZExporter } = await import("three/addons/exporters/USDZExporter.js");
      const exporter = new USDZExporter();
      const arrayBuffer = await exporter.parseAsync(exportScene, {
        quickLookCompatible: true,
        includeAnchoringProperties: true,
        ar: {
          anchoring: { type: "plane" },
          planeAnchoring: { alignment: "horizontal" },
        },
      });
      const blob = new Blob([arrayBuffer], { type: "model/vnd.usdz+zip" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.rel = "ar";
      a.href = url;
      a.download = "view.usdz";
      const img = document.createElement("img");
      img.alt = "AR";
      a.appendChild(img);
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch (err) {
      ctx.fail(String(err?.message || err));
    } finally {
      ctx.arBusy = false;
      if (ctx.arBtn) {
        ctx.arBtn.disabled = false;
        ctx.arBtn.textContent = label;
      }
    }
  }

  ctx.modelFileId = modelFileId;
  ctx.fitLabelsOnPlate = fitLabelsOnPlate;
  ctx.lockPlateFrame = lockPlateFrame;
  ctx.captureDrawing = captureDrawing;
  ctx.buildArExportScene = buildArExportScene;
  ctx.openArQuickLook = openArQuickLook;
}
