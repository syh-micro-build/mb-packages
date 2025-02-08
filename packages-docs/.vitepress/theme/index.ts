import type {
  Theme
} from "vitepress";

import {
  DefineComponent,
  h,
  ref
} from "vue";

import DefaultTheme from "vitepress/theme";

import {
  DemoBlock,
  SettingsPanel
} from "../components";

import "./style.css";

// 自动导入示例组件
const modules = import.meta.glob<{ default: unknown }>("../../examples/**/*.vue", {
  eager: true
});

const idState = ref({
  prefix: 1024,
  current: 0
});

export default {
  extends: DefaultTheme,
  Layout: () => h("div", [
    h(DefaultTheme.Layout, null),
    h(SettingsPanel)
  ]),
  enhanceApp({
    app
  }) {

    app.provide("ID_INJECTION_KEY", idState);

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
