import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  base: "/IEF-demo/",

  plugins: [react(), cssInjectedByJsPlugin()],

  // Dev server configuration
  server: {
    // Enable cross-origin isolation for iframe communication
    headers: {
      "Cross-Origin-Embedder-Policy": "credentialless",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },

  // App build — produces a self-contained element.html with bundled JS
  build: {
    rollupOptions: {
      input: "./element.html",
    },
  },
});
