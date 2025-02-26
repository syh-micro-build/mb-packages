import EsLint, {
  vue
} from "@micro-test-01/eslint-config";

export default [
  ...EsLint,
  ...vue,
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "import/export": "warn"
    }
  }
];
