/**
 * Mesh names stay grouped by part label. An IFC element appends its yaml id:
 * `masonry__W-001__`. A trailing `_12` is OCCT's uniquify suffix, not part of
 * the id. Ids that themselves end in digits keep a closing `__`.
 */

/**
 * @param {string | null | undefined} raw
 * @returns {{ part: string, element: string | null }}
 */
export function meshIdentity(raw) {
  const trimmed = String(raw || "").replace(/_(\d+)$/, "");
  const pieces = trimmed.split("__").filter((piece) => piece.length > 0);
  if (pieces.length >= 2) {
    return { part: pieces[0], element: pieces.slice(1).join("__") };
  }
  return { part: trimmed || "part", element: null };
}

/**
 * glTF puts the node name (`masonry__W-001__`) on the group. The mesh under
 * it is only `masonry` or `masonry_1`. Walk ancestors until an element id
 * shows up. Edge shells are named `masonry__edges` and are not an element.
 * @param {{ name?: string, parent?: object | null, userData?: object } | null | undefined} obj
 * @returns {{ part: string, element: string | null }}
 */
export function identityOf(obj) {
  let part = "part";
  let node = obj;
  while (node) {
    const name = node.name || "";
    const edges = name.endsWith("__edges") || Boolean(node.userData?.isEdgeOverlay);
    if (!edges && name) {
      const ident = meshIdentity(name);
      if (ident.part) part = ident.part;
      if (ident.element) return { part: ident.part, element: ident.element };
    }
    node = node.parent || null;
  }
  return { part, element: null };
}
