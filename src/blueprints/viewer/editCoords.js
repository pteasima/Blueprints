/**
 * House-frame coordinate transforms for edit mode.
 * Structural split from editMode.js; behavior is unchanged.
 */
import * as THREE from "three";

/**
 * @param {() => import("three").Object3D | null} getRoot
 */
export function createEditCoords(getRoot) {
  /** The glTF node whose frame is the house frame (Z up, metres). */
  function houseFrame() {
    const root = getRoot();
    if (!root) return null;
    return root.children.length === 1 ? root.children[0] : root;
  }

  function houseToWorld(p) {
    const frame = houseFrame();
    const v = new THREE.Vector3(p[0], p[1], p[2]);
    if (frame) {
      frame.updateWorldMatrix(true, false);
      v.applyMatrix4(frame.matrixWorld);
    }
    return v;
  }

  function worldToHouse(v) {
    const frame = houseFrame();
    const out = v.clone();
    if (frame) {
      frame.updateWorldMatrix(true, false);
      out.applyMatrix4(frame.matrixWorld.clone().invert());
    }
    return [out.x, out.y, out.z];
  }

  function houseDirToWorld(d) {
    const frame = houseFrame();
    const v = new THREE.Vector3(d[0], d[1], d[2]);
    if (frame) {
      frame.updateWorldMatrix(true, false);
      v.applyMatrix3(new THREE.Matrix3().setFromMatrix4(frame.matrixWorld));
    }
    return v;
  }

  function worldDirToHouse(v) {
    const frame = houseFrame();
    const out = v.clone();
    if (frame) {
      frame.updateWorldMatrix(true, false);
      out.applyMatrix3(new THREE.Matrix3().setFromMatrix4(frame.matrixWorld).invert());
    }
    return [out.x, out.y, out.z];
  }

  function worldBox(meshes) {
    const box = new THREE.Box3();
    for (const mesh of meshes) {
      if (!mesh.visible && !mesh.userData.bpEditDeleted) continue;
      mesh.updateWorldMatrix(true, false);
      const geom = mesh.geometry;
      if (!geom) continue;
      if (!geom.boundingBox) geom.computeBoundingBox();
      const bb = geom.boundingBox.clone().applyMatrix4(mesh.matrixWorld);
      box.union(bb);
    }
    return box;
  }

  return { houseFrame, houseToWorld, worldToHouse, houseDirToWorld, worldDirToHouse, worldBox };
}
