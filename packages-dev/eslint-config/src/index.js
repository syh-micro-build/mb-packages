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
  import as _import,
  vue,
  prettier
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
  ..._import,
  prettier
];

export default DEFAULT;

export {
  vue
};
