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
      outDir: "./dist/types",              // 输出声明文件的目录
      tsconfigPath: "./tsconfig.json",     // TypeScript 配置文件
      rollupTypes: true                   // 合并所有类型声明文件
    })
  ],
  build: {
    target: "esnext",  // 使用现代 JavaScript 作为目标，提高构建效率 modules
    minify: true,      // 压缩代码，减少文件体积
    sourcemap: false,  // 开发时可以开启，生产环境可关闭，减少文件体积
    rollupOptions: {
      external: ["vue"],  // 外部化 vue，避免重复打包
      input: "./src/index.ts",  // 入口文件
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,  // 保持模块结构
          dir: "dist/es",         // 输出 ES 模块到 dist/es
          preserveModulesRoot: "src"
        },
        {
          format: "umd",
          name: "microVueHooks",  // UMD 模式全局变量名
          entryFileNames: "index.js",
          dir: "dist/umd",
          globals: {
            vue: "Vue"  // 为外部依赖 vue 提供全局变量名
          }
        }
      ]
    },
    lib: {
      entry: "./src/index.ts",  // 库入口文件
      formats: ["es", "umd"]    // 支持 ES 和 UMD 格式
    }
  }
});
