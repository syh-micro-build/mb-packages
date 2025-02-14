import {
  defineConfig
} from "vitepress";

import {
  mdPlugin
} from "./_config";
import {
  generateMdFromDev
} from "./_plugins";
import {
  rulesMenu
} from "./menu";

// https://vitepress.dev/reference/site-config
export default async () => {
  const rules = await rulesMenu();

  const nav = [
    {
      text: "组件",
      link: "/src/components/index",
      activeMatch: "/src/components/"
    }
  ];

  const sidebar = {
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
  };

  if(rules) {
    nav.push(rules?.nav);
    sidebar[rules.nav.activeMatch] = rules?.menu;
  }

  return defineConfig({
    title: "Docs",
    description: "Docs",
    themeConfig: {

      // https://vitepress.dev/reference/default-theme-config
      nav,
      sidebar,
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/syh-micro-build/mb-packages/"
        }
      ]
    },
    markdown: {
      config: md => mdPlugin(md)
    },
    vite: {
      plugins: [
        generateMdFromDev()
      ]
    }
  });
};
