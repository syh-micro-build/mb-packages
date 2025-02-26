declare module "@micro-test-01/commitlint-config" {

  // 定义模块的导出类型
  export interface IConfig {
    rules: Record<string, unknown>;
  }

  const config: IConfig;
  export default config;
}
