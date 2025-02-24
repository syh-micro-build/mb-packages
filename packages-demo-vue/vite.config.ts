import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import {
  componentMapPlugin
} from "@mb-kit/vue-plugins";
import vueDevTools from "vite-plugin-vue-devtools";

import {
  fileURLToPath,
  URL
} from "node:url";
import {
  visualizer
} from "rollup-plugin-visualizer";
import {
  defineConfig
} from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    componentMapPlugin(),
    visualizer({
      open: true, // 直接在浏览器中打开分析报告
      filename: "./dist/stats.html", // 输出文件的名称
      gzipSize: true, // 显示gzip后的大小
      brotliSize: true // 显示brotli压缩后的大小
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
