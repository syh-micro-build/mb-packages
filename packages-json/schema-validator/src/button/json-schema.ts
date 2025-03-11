import {
  EColor,
  ESize,
  EUiEleType
} from "../enum";
import {
  EButtonVariant,
  EButtonType
} from "./enum";

export const definitionsButton = {
  buttonOptions: {
    type: "object",
    required: ["label"],
    properties: {
      label: {
        type: "string"
      },
      disabled: {
        type: "boolean"
      },
      loading: {
        type: "boolean"
      },
      style: {
        type: "string"
      },
      class: {
        type: "string"
      },
      type: {
        type: "string",
        enum: Object.values(EButtonType)
      },
      shape: {
        type: "string",
        enum: Object.values(EButtonVariant)
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
      },
      size: {
        type: "string",
        enum: Object.values(ESize)
      },

      // 自定义
      onClick: {
        isFunction: true
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
export const noItemsCaseSchemaButton = {
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
export const itemsCaseSchemaButton = {
  type: "object",
  properties: {
    type: {
      const: EUiEleType.BUTTON
    },
    options: $refButton
  },
  required: ["type", "options"]
};
