import EsLint, {
  vue,
  react
} from "@mb-kit/eslint-config";

export default [
  ...EsLint,
  ...vue,
  {
    ...react[0],
    files: ["./packages-react-components/**/*.{jsx,tsx}"]
  },
  {
    ...react[1],
    files: ["./packages-react-components/**/*.{jsx,tsx}"]
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "import/export": "warn"
    }
  }
];
