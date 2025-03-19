import {
  Properties
} from "csstype";

import {
  EUiEleType,
  EType,
  ESize
} from "../../enum";
import {
  ApiAttributes
} from "../../types";
import {
  EButtonVariant
} from "./enum";

export interface IButtonProps extends ApiAttributes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  disabled?: boolean;
  loading?: boolean;
  style?: Properties;
  class?: string;
  type?: EType | `${EType}`;
  variant?: EButtonVariant | `${EButtonVariant}`;
  color?: string;
  size?: ESize | `${ESize}`;
  onClick?: (event: Event) => void;
}

export interface IButton {
  type: EUiEleType.BUTTON | `${EUiEleType.BUTTON}`;
  options: IButtonProps;
}
