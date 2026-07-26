// Resolve a path to a file in public/ against Vite's base URL.
//
// Vite rewrites asset paths it bundles, but NOT string paths to public/ files
// (images, PDFs). On a GitHub Pages project site the app is served from a
// sub-path (e.g. "/Personal-Website/"), so a bare "/images/x.png" would 404.
// Wrapping public paths in asset() keeps them correct on the sub-path now and
// on a custom domain later (where import.meta.env.BASE_URL becomes "/").
//
// Pass either "/images/x.png" or "images/x.png" — a leading slash is fine.
export function asset(path) {
  const base = import.meta.env.BASE_URL; // "/Personal-Website/" or "/"
  return base.replace(/\/$/, "") + "/" + String(path).replace(/^\//, "");
}
