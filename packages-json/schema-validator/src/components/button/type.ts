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
  label: string | HTMLElement | unknown;
  disabled?: boolean;
  loading?: boolean;
  style?: string;
  class?: string;
  type?: EButtonType | `${EButtonType}`;
  shape?: EButtonVariant | `${EButtonVariant}`;
  color?: EColor | `${EColor}` | string;
  size?: ESize | `${ESize}`;
  onClick?: (event: MouseEvent) => void;
}

export interface IButton {
  type: EUiEleType.BUTTON | `${EUiEleType.BUTTON}`;
  options: IButtonProps;
}
