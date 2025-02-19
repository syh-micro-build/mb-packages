import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import {
  defineConfig
} from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
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
    sourcemap: true,
    cssCodeSplit: false,  // 禁用 CSS 拆分，CSS 会被内联到 JS 文件
    rollupOptions: {
      external: ["vue"],  // Vue 作为外部依赖
      input: "./src/index.ts", // 入口文件
      output: [
        {
          format: "es",  // 使用 ES 模块格式
          entryFileNames: "index.js",  // 输出的主文件名称
          dir: "dist",  // 输出目录
          preserveModulesRoot: "src"  // 保持模块结构
        }
      ]
    },
    lib: {
      entry: "./src/index.ts",  // 入口文件
      formats: ["es"]  // 输出 ES 模块格式
    }
  }
});
