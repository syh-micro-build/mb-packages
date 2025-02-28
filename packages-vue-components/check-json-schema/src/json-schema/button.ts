import {
  EUiEleType,
  EShapeButton,
  EColor,
  ETypeButton
} from "../enum";

export const definitionsButtob = {
  buttonOptions: {
    type: "object",
    required: ["label"],
    properties: {
      label: {
        type: "string"
      },
      style: {
        type: "string"
      },

      class: {
        type: "string"
      },
      type: {
        type: "string",
        enum: Object.values(ETypeButton)
      },
      shape: {
        type: "string",
        enum: Object.values(EShapeButton)
      },
      color: {
        anyOf: [
          {
            enum: Object.values(EColor)
          },
          {
            type: "string"
          }
        ]
      }

      // oneOf: [
      //   { enum: Object.values(EColor) },          // 枚举值
      //   {
      //     type: "string",
      //     not: { enum: Object.values(EColor) }    // 排除枚举值后的其他字符串
      //   }
      // ]
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
        const: EUiEleType.BUTTON
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
