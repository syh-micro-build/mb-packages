import {
  EUiEleType
} from "mb-components-vue-enum";

export type TRecord = Record<string | number, unknown>;

export interface IProps {
  type: EUiEleType;
  label: string;
  options?: TRecord;
}
