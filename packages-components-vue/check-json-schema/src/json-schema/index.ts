import {
  EUiEleType
} from "mb-components-vue-enum";

import {
  IProps,
  TSchemaTypeWithLabel
} from "../types";

const JSON_SCHEMA: TSchemaTypeWithLabel<IProps> = {
  type: "object",
  properties: {
    type: {
      enum: Object.values(EUiEleType)
    },
    label: {
      type: "string"
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    options: {
      type: "object",
      properties: {
        style: {
          type: "object"
        },
        class: {
          type: "string"
        }
      },
      additionalProperties: true
    }
  },
  required: ["type"],
  additionalProperties: false
};

export default JSON_SCHEMA;
