import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import {
  defineConfig
} from "vite";
import dts from "vite-plugin-dts";

import {
  componentMapPlugin
} from "./plugins";
import {
  test01
} from "./stories/__test__/plugins";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.json",
      rollupTypes: true
    }),
    test01(),
    componentMapPlugin()
  ],
  optimizeDeps: {
    include: ["mb-vue-arco-design-x", "mb-vue-element-x"]
  },
  build: {
    target: "esnext",
    minify: true,
    sourcemap: false,
    rollupOptions: {
      external: [
        "vue"
      ],
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
