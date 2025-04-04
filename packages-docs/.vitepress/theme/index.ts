import type {
  Theme
} from "vitepress";

import {
  CONFIG_PROVIDER,
  ConfigProviderProps,
  EUiType
} from "@mb-kit/vue-config-provider";
import {
  DefineComponent,
  h,
  ref
} from "vue";

import DefaultTheme from "vitepress/theme";

import {
  Demo,
  Card,
  DemoHtml
} from "../components";

import "./style.css";

// 自动导入示例组件
const modules = import.meta.glob<{ default: unknown }>("../../examples/**/*.vue", {
  eager: true
});

const state = ref<ConfigProviderProps>({
  type: EUiType.ARCO_DESIGN
});

export default {
  extends: DefaultTheme,
  Layout: () => h("div", [
    h(DefaultTheme.Layout, null)

    // h(Setting)
  ]),
  enhanceApp({
    app
  }) {

    app.provide(CONFIG_PROVIDER, state.value);

    // 注册 Demo 容器组件
    app.component("Demo", Demo);

    // 注册所有示例组件
    Object.entries(modules).forEach(([path, module]) => {
      const name =
      path.replace("../../examples/", "").replace(".vue", "").
          replaceAll("/", "-");

      app.component(`ep-${name}`, module.default as DefineComponent);
    });
    app.component("Card", Card);
    app.component("DemoHtml", DemoHtml);
  }
} satisfies Theme;
