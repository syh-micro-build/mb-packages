import {
  EUiEleType,
  EButtonType,
  EButtonShape,
  EColor,
  ESize
} from "../enum";

export interface IPropsButton {
  label: string | HTMLElement | unknown;
  disabled?: boolean;
  loading?: boolean;
  long?: boolean;
  style?: string;
  class?: string;
  type?: EButtonType | `${EButtonType}`;
  shape?: EButtonShape | `${EButtonShape}`;
  color?: EColor | `${EColor}` | string;
  size?: ESize | `${ESize}`;
}

export interface IButton {
  type: EUiEleType.BUTTON | `${EUiEleType.BUTTON}`;
  options: IPropsButton;
}
