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
  type?: ETypeButton;
  shape?: EShapeButton;
  theme?: EThemeButton;
}

export interface IButton {
  type: EUiEleType.BUTTON;
  options: IPropsButton;
}
