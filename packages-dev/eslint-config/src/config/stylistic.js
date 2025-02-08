import stylistic from "@stylistic/eslint-plugin";
import stylisticTs from "@stylistic/eslint-plugin-ts";

/**
 * ESLint Stylistic
 *
 * https://eslint.style
 */
export default [
  {
    plugins: {
      "@stylistic": stylistic,
      "@stylistic/ts": stylisticTs
    },
    rules: {

      // TODO 与 indent 冲突
      "@stylistic/indent": "off",
      "@stylistic/ts/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "semi",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false
          },
          "multilineDetection": "brackets"
        }
      ],
      "@stylistic/ts/semi": ["error", "always"] // 强制所有语句以分号结束
    }
  }
];
