module.exports = {
  root: true,
  extends: [
    "mb-stylelint-config"
  ],
  overrides: [
    {
      files: ["packages-vue/**/*.{js,vue,ts,tsx}", "packages-demo/demo-vue/**/*.{js,vue,ts,tsx}"],
      customSyntax: "postcss-html",
      extends: ["mb-stylelint-config/vue"].map(require.resolve)
    }
  ]
};
