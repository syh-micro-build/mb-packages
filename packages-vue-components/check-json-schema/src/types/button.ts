import {
  EUiEleType,
  ETypeButton,
  EShapeButton,
  EThemeButton
} from "../enum";

export interface IPropsButton {
  label: string | HTMLElement | unknown;
  style?: string;
  class?: string;
  type?: ETypeButton | `${ETypeButton}`;
  shape?: EShapeButton | `${EShapeButton}`;
  theme?: EThemeButton | `${EThemeButton}` | string;
}

export interface IButton {
  type: EUiEleType.BUTTON | `${EUiEleType.BUTTON}`;
  options: IPropsButton;
}
