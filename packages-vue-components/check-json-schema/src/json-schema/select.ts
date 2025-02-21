import {
  EUiEleType
} from "../enum";

export const definitionsSelect = {
  selectOptions: {
    type: "object",
    required: ["data"],
    properties: {
      data: {
        type: "array"
      }
    },
    additionalProperties: false
  }
};

export const $refSelect = {
  $ref: "#/definitions/selectOptions"
};

export const noItemsCaseSchemaSelect = {
  if: {
    properties: {
      type: {
        const: "Input"
      }
    }
  },
  then: {
    properties: {
      options: $refSelect
    }
  }
};

export const itemsCaseSchemaSelect = {
  type: "object",
  properties: {
    type: {
      const: EUiEleType.SELECT
    },
    options: $refSelect
  },
  required: ["type", "options"]
};
