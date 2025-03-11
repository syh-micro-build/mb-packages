import {
  EColor,
  EUiEleType
} from "../../enum";
import {
  Vnode,
  ApiAttributes
} from "../../types";

export interface IPropsLink extends ApiAttributes {
  label: string;
  color?: EColor | `${EColor}`;
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  icon?: Vnode | HTMLElement;
  loading?: boolean;
}

export interface ILink {
  type: EUiEleType.LINK | `${EUiEleType.LINK}`;
  options: IPropsLink;
}
