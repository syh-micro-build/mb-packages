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
      text: "指南",
      link: "/src/guide/design",
      activeMatch: "/src/guide/"
    },
    {
      text: "组件",
      link: "/src/components/index",
      activeMatch: "/src/components/"
    }
  ];

  const sidebar = {
    "/src/components/": [
      {
        text: "Overview 组件总览",
        link: "/src/components/"
      },
      {
        text: "前端基础",
        collapsed: false,
        items: [
          {
            text: "按钮",
            link: "/src/components/button"
          },
          {
            text: "下拉框",
            link: "/src/components/select"
          }
        ]
      }
    ],
    "/src/guide": [
      {
        text: "基础",
        collapsed: false,
        items: [
          {
            text: "设计",
            link: "/src/guide/design"
          },
          {
            text: "安装",
            link: "/src/guide/installation"
          },
          {
            text: "快速开始",
            link: "/src/guide/quickstart"
          }
        ]
      }
    ]
  };

  const rules = await menuRules();

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
        label: "页面导航",
        level: [2, 3]
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
