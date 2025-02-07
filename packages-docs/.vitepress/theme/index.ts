import type {
  Theme
} from "vitepress";

import DemoBlock from "../components/DemoBlock.vue";
import {
  h
} from "vue";

import DefaultTheme from "vitepress/theme";

import "./style.css";

export default {
  extends: DefaultTheme,

  Layout: () => h(DefaultTheme.Layout, null),
  enhanceApp({

    app,
    // eslint-disable-next-line unused-imports/no-unused-vars
    router,
    // eslint-disable-next-line unused-imports/no-unused-vars
    siteData
  }) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component("Demo", DemoBlock);
  }
} satisfies Theme;
