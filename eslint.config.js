import EsLint, {
  vue
} from "mb-eslint-config";

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
