import {
  EUiEleType,
  ETypeButton,
  EShapeButton,
  EColor
} from "../enum";

export interface IPropsButton {
  label: string | HTMLElement | unknown;
  style?: string;
  class?: string;
  type?: ETypeButton | `${ETypeButton}`;
  shape?: EShapeButton | `${EShapeButton}`;
  color?: EColor | `${EColor}` | string;
}

export interface IButton {
  type: EUiEleType.BUTTON | `${EUiEleType.BUTTON}`;
  options: IPropsButton;
}
