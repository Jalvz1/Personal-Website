import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Served from the custom domain www.alvarezjavi.com at the root, so assets
  // are requested from "/". (Was "/Personal-Website/" for the github.io project
  // page before the custom domain.)
  base: "/",
  plugins: [react(), tailwindcss()],
});
