import type {
  MarkdownRenderer
} from "vitepress";

import mdContainer from "markdown-it-container";

import {
  createDemoContainer,
  createJsonContainer
} from "../_plugins";

const mdPlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer, "demo", createDemoContainer(md));
  md.use(mdContainer, "json", createJsonContainer(md));
};

export default mdPlugin;
