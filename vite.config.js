import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Served from https://jalvz1.github.io/Personal-Website/ (a GitHub Pages
  // "project" site), so assets must be requested under that sub-path.
  // When you move to a custom domain (served at the root), change this to "/".
  base: "/Personal-Website/",
  plugins: [react(), tailwindcss()],
});
