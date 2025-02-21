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
  type: EUiEleType.BUTTON;
  options: IPropsButton;
}

/*
import {
  EUiEleType
} from "../enum";

export type TShapeButton = "default" | "plain"| "round"|"circle"| "secondary";
export type TTypeButton = "text" | "link" | "default";
export type TThemeButton = "primary" | "success" | "warning" | "danger" | "info" | "default";

export interface IPropsButton {
  label: string | HTMLElement | unknown;
  style?: string;
  class?: string;
  type?: TTypeButton;
  shape?: TShapeButton;
  theme?: TThemeButton | string;
}

export interface IButton {
  type: EUiEleType.BUTTON;
  options: IPropsButton;
}
*/
