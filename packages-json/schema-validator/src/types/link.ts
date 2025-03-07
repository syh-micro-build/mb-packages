import {
  EColor,
  EUiEleType
} from "../enum";
import {
  IVnode
} from "./common";

export interface IPropsLink {
  label: string;
  color?: EColor | `${EColor}`;
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  icon?: IVnode | HTMLElement;
  loading?: boolean;
}

export interface ILink {
  type: EUiEleType.LINK | `${EUiEleType.LINK}`;
  options: IPropsLink;
}
