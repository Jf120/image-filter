import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        upload: resolve(__dirname, "src/upload/index.html"),
        gallery: resolve(__dirname, "src/gallery/index.html"),
      },
    },
  },
});
