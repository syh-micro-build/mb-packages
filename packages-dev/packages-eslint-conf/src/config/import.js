/**
 * 介绍
 * 
 * https://www.npmjs.com/package/eslint-plugin-import
 */
export default {
  // 启用 'eslint-plugin-import' 插件
  plugins: [
    'import'
  ],
  settings: {
    // 配置解析器，指定 TypeScript 文件的解析器为 '@typescript-eslint/parser'
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'] // 解析 '.ts' 和 '.tsx' 文件
    },
    // 配置模块解析器，指定解析 TypeScript 项目的 tsconfig 文件
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // 每次尝试解析类型定义文件（.d.ts）
        project: [
          'tsconfig.json', // 主 tsconfig 文件
          'packages*/*/tsconfig.json' // 可能存在的子模块的 tsconfig 文件
        ]
      }
    }
  },
  rules: {
    // 强制使用命名空间导入（例如：import * as X from 'x'）
    'import/namespace': 'error',
    
    // 防止循环依赖：设置最大检查深度为 4 层，且不忽略外部依赖
    'import/no-cycle': ['error', {
      ignoreExternal: false, // 不忽略外部依赖的循环依赖问题
      maxDepth: 4 // 最大递归深度为 4
    }],
    
    // 禁止无效的路径片段（例如：import './foo/../bar'）
    'import/no-useless-path-segments': 1, // 设置为警告级别
    
    // 禁止从同一模块导入自己（例如：import * from './foo'）
    'import/no-self-import': 'error',
    
    // 强制将导出语句放在文件的最后
    'import/exports-last': 1, // 设置为警告级别
    
    // 配置模块导入的顺序
    'import/order': ['error', {
      groups: [
        'builtin', // Node.js 内建模块（例如 fs, path 等）
        'external', // 外部模块（例如 react, lodash 等）
        'internal', // 项目内部模块
        'parent', // 父级目录模块
        'sibling', // 同级目录模块
        'index' // index 文件的导入（通常是 index.js 或 index.ts）
      ],
      // 自定义路径分组规则
      pathGroups: [{
        // 任何以 'micro' 开头的模块视为外部依赖，放在外部模块组的后面
        pattern: 'micro*/**',
        group: 'external',
        position: 'after' // 在外部依赖组的后面
      }, {
        // 任何以 'mb' 开头的模块视为内部模块
        pattern: 'mb*/**',
        group: 'internal'
      }, {
        // 任何以 '@/' 开头的模块视为内部模块
        pattern: '@/**',
        group: 'internal'
      }],
      
      // 使厂内二方包和三方包之间无法插入空行
      pathGroupsExcludedImportTypes: [],

      // 组与组之间必须加空行
      'newlines-between': 'always'
    }]
  }
};
