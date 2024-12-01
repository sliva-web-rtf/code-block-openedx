import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: ["index.html"],
      output: {
        assetFileNames: "codeblock_admin.[ext]",
        chunkFileNames: "codeblock_admin.[ext]",
        entryFileNames: "codeblock_admin.js",
      },
    },
  },
});
