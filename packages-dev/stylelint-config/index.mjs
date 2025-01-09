/**
 * https://stylelint.nodejs.cn/user-guide/configure
 */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  customSyntax: "postcss-lit",
  overrides: [
    {
      "files": ["*.js"],
      "customSyntax": "postcss-lit"
    }
  ]
}