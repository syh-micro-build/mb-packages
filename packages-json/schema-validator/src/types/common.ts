export interface IVnode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface IApiAttributes {
  [key: `api-${string}` | `api${Capitalize<string>}`]: unknown;
}
