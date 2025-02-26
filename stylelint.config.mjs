// module.exports = {
//   root: true,
//   extends: [
//     "@micro-test-01/stylelint-config"
//   ].map(require.resolve),
//   overrides: [
//     {
//       files: ["packages-vue/**/*.{js,vue,ts,tsx}", "packages-demo/demo-vue/**/*.{js,vue,ts,tsx}"],
//       customSyntax: "postcss-html",
//       extends: ["@micro-test-01/stylelint-config/vue"].map(require.resolve)
//     }
//   ]
// };

export default {
  extends: ["@micro-test-01/stylelint-config/vue"],
  root: true
};
