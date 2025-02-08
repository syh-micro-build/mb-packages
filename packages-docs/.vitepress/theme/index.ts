import type {
  Theme
} from "vitepress";

import DemoBlock from "../components/DemoBlock.vue";
import {
  DefineComponent,
  h
} from "vue";

import DefaultTheme from "vitepress/theme";

import "./style.css";

// 自动导入示例组件
const modules = import.meta.glob<{ default: unknown }>("../../examples/**/*.vue", {
  eager: true
});

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null),
  enhanceApp({
    app
  }) {

    // 注册 Demo 容器组件
    app.component("demo-block", DemoBlock);

    // 注册所有示例组件
    Object.entries(modules).forEach(([path, module]) => {
      const name =
      path.replace("../../examples/", "").replace(".vue", "").
          replaceAll("/", "-");

      app.component(`ep-${name}`, module.default as DefineComponent);
    });
  }
} satisfies Theme;
