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
