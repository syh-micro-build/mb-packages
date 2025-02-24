import {
  EUiEleType
} from "../enum";

export interface IPropsSelect<T> {
  data: Array<T>;
}

export interface ISelect<T = unknown> {
  type: EUiEleType.SELECT | `${EUiEleType.SELECT}`;
  options: IPropsSelect<T>;
}
