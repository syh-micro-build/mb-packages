import {
  Properties
} from "csstype";

import {
  EUiEleType,
  EColor,
  ESize
} from "../../enum";
import {
  ApiAttributes
} from "../../types";
import {
  EButtonType,
  EButtonVariant
} from "./enum";

export interface IButtonProps extends ApiAttributes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  disabled?: boolean;
  loading?: boolean;
  style?: Properties;
  class?: string;
  type?: EButtonType | `${EButtonType}`;
  variant?: EButtonVariant | `${EButtonVariant}`;
  color?: EColor | `${EColor}` | string;
  size?: ESize | `${ESize}`;
  onClick?: (event: MouseEvent) => void;
}

export interface IButton {
  type: EUiEleType.BUTTON | `${EUiEleType.BUTTON}`;
  options: IButtonProps;
}
