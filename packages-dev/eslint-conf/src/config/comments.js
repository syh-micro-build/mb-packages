/**
 * 介绍
 * 
 * https://github.com/mysticatea/eslint-plugin-eslint-comments
 */
import eslintComments from "eslint-plugin-eslint-comments";

export default {
  // 启用 'eslint-plugin-eslint-comments' 插件
  plugins: {
    "eslint-comments": eslintComments // 引入并启用插件
  },
  rules: {
    // 禁止在一个地方同时使用多个 'eslint-enable' 注释
    "eslint-comments/no-aggregating-enable": "error",
    
    // 禁止在同一地方使用重复的 'eslint-disable' 注释
    "eslint-comments/no-duplicate-disable": "error",
    
    // 禁止没有限制的 'eslint-disable' 注释（例如：eslint-disable no-console）
    "eslint-comments/no-unlimited-disable": "error",
    
    // 禁止不再需要的 'eslint-enable' 注释
    "eslint-comments/no-unused-enable": "error"
  }
};
