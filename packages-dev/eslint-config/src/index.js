import {
  javascript,
  typescript,
  ignores,
  command,
  comments,
  jsdoc,
  jsonc,
  regexp,
  perfectionist,
  import as _import
} from "./config/index.js";

const DEFAULT = [
  javascript,
  typescript,
  ignores,
  command,
  comments,
  jsdoc,
  ...jsonc,
  regexp,
  perfectionist,
  ..._import
];

export default DEFAULT;
