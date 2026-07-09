// Deterministic id from a label — shared by apps and the search index so
// "open + highlight" always targets the same element.
export const slugify = (s = '') =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
