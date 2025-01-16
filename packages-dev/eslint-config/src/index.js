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
  prettier,
  stylistic
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
  prettier,
  ...stylistic
];

export default DEFAULT;

export {
  vue
};
