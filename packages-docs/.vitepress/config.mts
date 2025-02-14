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
  menuRules
} from "./menu";

// https://vitepress.dev/reference/site-config
export default async () => {
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

  const rules = await menuRules();

  if(rules) {
    nav.unshift(rules?.nav);
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
      ],
      footer: {
        message: "基于 MIT 许可发布",
        copyright: `© 2024-${new Date().getFullYear()}`
      },
      docFooter: {
        prev: "上一页",
        next: "下一页"
      },
      outline: {
        label: "页面导航"
      }
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
