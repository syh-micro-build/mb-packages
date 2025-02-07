import type {
  MarkdownRenderer
} from "vitepress";

import mdContainer from "markdown-it-container";

import createDemoContainer from "../plugins/demo";

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer, "demo", createDemoContainer(md));
};
