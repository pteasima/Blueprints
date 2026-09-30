/**
 * The settled peel must not reuse a batch after the cut fill is rebuilt.
 * The slider value can already be final while that fill is still the old mesh.
 * Run: node peelSourceStamp.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { peelSourceStamp } from "./depthPeel.js";

function face() {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(9), 3),
  );
  return new THREE.Mesh(geo, new THREE.MeshBasicMaterial());
}

const wall = face();
const before = peelSourceStamp([wall]);

const cap = face();
cap.userData.isSectionCap = true;
const withCap = peelSourceStamp([wall, cap]);
assert.notEqual(
  withCap,
  before,
  "a new cut cap is a new mesh and must miss the previous batch",
);

const edgeGeo = new THREE.BufferGeometry();
const edge = new THREE.Object3D();
edge.userData.isEdgeOverlay = true;
edge.geometry = edgeGeo;
wall.add(edge);
const withEdge = peelSourceStamp([wall, cap]);
assert.notEqual(
  withEdge,
  withCap,
  "cut silhouette geometry is part of the batch identity",
);

const movedEdge = new THREE.BufferGeometry();
edge.geometry = movedEdge;
const edgeMoved = peelSourceStamp([wall, cap]);
assert.notEqual(
  edgeMoved,
  withEdge,
  "replacing the silhouette geometry must miss the previous batch",
);

assert.equal(edgeMoved, peelSourceStamp([wall, cap]));

console.log("peelSourceStamp ok");
