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
  // eslint-disable-next-line object-curly-newline
  Layout: () => h(DefaultTheme.Layout, null, {

    // https://vitepress.dev/guide/extending-default-theme#layout-slots
  // eslint-disable-next-line object-curly-newline
  }),
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
