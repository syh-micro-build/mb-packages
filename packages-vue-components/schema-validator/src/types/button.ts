import {
  EUiEleType,
  ETypeButton,
  EShapeButton,
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
  type?: ETypeButton | `${ETypeButton}`;
  shape?: EShapeButton | `${EShapeButton}`;
  color?: EColor | `${EColor}` | string;
  size?: ESize | `${ESize}`;
}

export interface IButton {
  type: EUiEleType.BUTTON | `${EUiEleType.BUTTON}`;
  options: IPropsButton;
}
