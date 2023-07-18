import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        recipeList: resolve(__dirname, "src/recipe-list/index.html"),
        recipeView: resolve(__dirname, "src/views/recipe.html"),
      },
    },
  },
});
