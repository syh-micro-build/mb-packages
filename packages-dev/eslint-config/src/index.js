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
  react,
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
  regexp,
  perfectionist,
  ..._import,
  prettier,
  ...stylistic,
  ...jsonc
];

export default DEFAULT;

export {
  react,
  vue
};
