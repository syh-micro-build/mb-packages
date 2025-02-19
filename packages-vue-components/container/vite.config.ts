import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import path from "path";
import {
  defineConfig
} from "vite";
import dts from "vite-plugin-dts";

import {
  cssLoadPlugin,
  componentMapPlugin
} from "./plugins";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    cssLoadPlugin(),
    componentMapPlugin(),
    dts({
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.json",
      rollupTypes: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  build: {
    target: "esnext",
    minify: true,
    sourcemap: false,
    rollupOptions: {
      external: ["vue"],
      input: "./src/index.ts",
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "dist",
          preserveModulesRoot: "src",
          assetFileNames: "index.css"
        }
      ]
    },
    lib: {
      entry: "./src/index.ts",
      formats: ["es"]
    }
  }
});
