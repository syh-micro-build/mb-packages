import {
  EUiEleType
} from "mb-components-vue-enum";

import {
  JTDSchemaType
} from "ajv/dist/jtd";

import {
  IProps
} from "../types";

const JSON_SCHEMA: JTDSchemaType<IProps> = {
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
  required: ["type", "label"],
  additionalProperties: false
};

export default JSON_SCHEMA;
