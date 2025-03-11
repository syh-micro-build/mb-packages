// const add = 1 + 1;

export interface IPros {

  /**
   *
   */
  type: string;
  name: string;
}

export type TPros = string;

export const obj = {
  a: 1,
  b: 2
};

// 测试数据
export const data = {
  label: "John Doe",
  "type": "EUiEleType.BORDER",
  "options": {
    "street": "123 Main St",
    "city": "Somewhere"
  }
};

export enum EColor {
  PRIMARY = "primary",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
  INFO = "info",
  DEFAULT = "default"
}

export interface ILinkProps {
  color: EColor | `${EColor}`;
  underline?: boolean;
}

export const arr = [1, 2, 34];
