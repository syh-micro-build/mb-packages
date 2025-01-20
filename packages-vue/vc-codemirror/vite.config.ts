import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import {
  defineConfig
} from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.json",
      rollupTypes: true
    })
  ],
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
          dir: "dist/es",
          preserveModulesRoot: "src"
        },
        {
          format: "umd",
          name: "microVueHooks",
          entryFileNames: "index.js",
          dir: "dist/umd",
          globals: {
            vue: "Vue"
          }
        }
      ]
    },
    lib: {
      entry: "./src/index.ts",
      formats: ["es", "umd"]
    }
  }
});
