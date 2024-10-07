import { defineConfig } from "vite";

export default defineConfig({
  base: "/myspace",
  build: {
    minify: "terser",
  },
});
