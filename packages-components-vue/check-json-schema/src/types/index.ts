import {
  EUiEleType
} from "mb-components-vue-enum";

import {
  JTDSchemaType
} from "ajv/dist/jtd";

export type TRecord = Record<string | number, unknown>;

export interface IProps {
  type: EUiEleType;
  label?: string;
  options?: TRecord;
}

export type TSchemaTypeWithLabel<T> = JTDSchemaType<T> & {
  properties: {
    label?: {
      type: "string";
    };

    // options: TRecord;
  };
};
