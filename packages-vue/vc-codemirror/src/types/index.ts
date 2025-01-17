import {
  ECodeMirrorType
} from "../enum";

export interface IProps {
  value: string;
  type: ECodeMirrorType;
}

export type TValue = Pick<IProps, "value">;
