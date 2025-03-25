import type {
  MarkdownRenderer
} from "vitepress";

import mdContainer from "markdown-it-container";

import {
  createDemoContainer,
  createDemoHtml
} from "../_plugins";

const mdPlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer, "demo", createDemoContainer(md));
  md.use(createDemoHtml);
};

export default mdPlugin;
