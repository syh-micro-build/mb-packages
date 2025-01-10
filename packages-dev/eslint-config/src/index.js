import {
  javascript,
  typescript,
  ignores,
  command,
  comments,
  jsdoc,
  jsonc
} from "./config/index.js";

const DEFAULT = [
  javascript,
  typescript,
  ignores,
  command,
  comments,
  jsdoc,
  ...jsonc
];

export default DEFAULT;
