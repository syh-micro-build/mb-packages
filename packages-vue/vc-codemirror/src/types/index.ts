import {
  ECodeMirrorType
} from "../enum";

export interface IProps {
  value: string;
  type: ECodeMirrorType;
  readOnly?: boolean;
}

export type TValue = Omit<IProps, "type">;
