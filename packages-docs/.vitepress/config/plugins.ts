import type {
  MarkdownRenderer
} from "vitepress";

import mdContainer from "markdown-it-container";

import createDemoContainer from "../plugins/demo";
import createJsonContainer from "../plugins/json";

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer, "demo", createDemoContainer(md));
  md.use(mdContainer, "json", createJsonContainer(md));
};
