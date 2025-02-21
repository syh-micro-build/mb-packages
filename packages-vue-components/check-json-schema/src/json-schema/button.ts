import {
  EUiEleType
} from "../enum";

export const definitionsButtob = {
  buttonOptions: {
    type: "object",
    required: ["label"],
    properties: {
      label: {
        type: "string"
      }
    },
    additionalProperties: false
  }
};

export const $refButton = {
  $ref: "#/definitions/buttonOptions"
};

/**
 * Case 1: 根节点无 items 的情况
 */
export const noItemsCaseSchemaButtob = {
  if: {
    properties: {
      type: {
        const: "Button"
      }
    }
  },
  then: {
    properties: {
      options: $refButton
    }
  }
};

/**
 * Case 2: 包含 items 的情况
 */
export const itemsCaseSchemaButtob = {
  type: "object",
  properties: {
    type: {
      const: EUiEleType.BUTTON
    },
    options: $refButton
  },
  required: ["type", "options"]
};
