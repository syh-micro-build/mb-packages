import {
  EUiEleType
} from "../enum";

export interface IPropsSelect<T> {
  data: Array<T>;
}

export interface ISelect<T = object> {
  type: EUiEleType.SELECT | `${EUiEleType.SELECT}`;
  options: IPropsSelect<T>;
}
