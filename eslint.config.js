import EsLint, {
  vue
} from "@mb-kit/eslint-config";

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
