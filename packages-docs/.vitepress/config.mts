import {
  defineConfig
} from "vitepress";

import {
  mdPlugin
} from "../.vitepress/config/plugins";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs",
  description: "Docs",
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "规则",
        link: "/src/rules/index",
        activeMatch: "/src/rules/"
      },
      {
        text: "组件",
        link: "/src/components/index",
        activeMatch: "/src/components/"
      }
    ],

    sidebar: {
      "/src/components/": [
        {
          text: "按钮",
          link: "/src/components/button"
        },
        {
          text: "下拉框",
          link: "/src/components/select"
        }
      ]
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/syh-micro-build/mb-packages/"
      }
    ]
  },
  markdown: {
    config: md => mdPlugin(md)
  }
});
