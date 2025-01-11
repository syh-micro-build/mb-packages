/**
 * https://stylelint.nodejs.cn/user-guide/configure
 */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  // customSyntax: "postcss-lit",
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
  ],
  overrides: [
    {
      customSyntax: 'postcss-html',
      files: ['*.(html|vue)', '**/*.(html|vue)'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['global', 'deep'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
      },
    }
  ],
  plugins: [
    'stylelint-order', // 插件：用于控制 CSS 属性的顺序
    '@stylistic/stylelint-plugin', // 插件：提供额外的代码风格检查规则
    'stylelint-prettier' // 插件：将 Prettier 的格式化功能集成到 Stylelint 中
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'ignores',
          'include',
          'mixin',
          'if',
          'else',
          'media',
          'for',
          'at-root',
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'each',
          'use',
          'forward',
          'return',
        ],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null, // 关闭对字体族缺少通用字体族（如 `sans-serif`）的警告
    'function-no-unknown': null, // 关闭对未知函数的检查，允许使用自定义函数
    'import-notation': null, // 关闭导入语法的检查，允许自定义导入格式
    'media-feature-range-notation': null, // 关闭对媒体查询范围表示法的检查，允许灵活使用媒体查询
    'named-grid-areas-no-invalid': null, // 关闭对无效网格区域名称的检查，允许更灵活的网格定义
    'no-descending-specificity': null, // 关闭降序优先级规则的检查，允许嵌套规则的优先级不一致
    'no-empty-source': null, // 关闭对空文件源的检查，允许存在空的 CSS 文件
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          name: 'supports',
          type: 'at-rule',
        },
        {
          name: 'media',
          type: 'at-rule',
        },
        {
          name: 'include',
          type: 'at-rule',
        },
        'rules',
      ],
      { severity: 'error' },
    ], // 定义 CSS 代码的书写顺序，保证变量、规则等的顺序一致
    'prettier/prettier': true, // 启用 Prettier 的规则检查，确保代码格式符合 Prettier 的要求
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ], // 规定规则前必须有空行，除了注释后面或第一个嵌套规则可以没有
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:[.+])?$', // 关闭选择器命名模式的强制要求，允许自定义选择器命名模式
    'selector-not-notation': null // 关闭选择器的命名规则检查，允许选择器有灵活的写法
  }
}