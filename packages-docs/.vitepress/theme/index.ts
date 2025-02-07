import type {
  Theme
} from "vitepress";

// https://vitepress.dev/guide/custom-theme
import {
  h
} from "vue";

import DefaultTheme from "vitepress/theme";

import "./style.css";

export default {
  extends: DefaultTheme,

  Layout: () => h(DefaultTheme.Layout, null),
  enhanceApp({
    // eslint-disable-next-line unused-imports/no-unused-vars
    app,
    // eslint-disable-next-line unused-imports/no-unused-vars
    router,
    // eslint-disable-next-line unused-imports/no-unused-vars
    siteData
  }) {

    // ...
  }
} satisfies Theme;
