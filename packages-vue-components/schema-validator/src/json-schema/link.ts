import {
  EUiEleType,
  EColor
} from "../enum";

export const definitionsLink = {
  linkOptions: {
    type: "object",
    required: ["label"],
    properties: {
      style: {
        type: "string"
      },
      class: {
        type: "string"
      },
      label: {
        type: "string"
      },
      underline: {
        type: "boolean"
      },
      disabled: {
        type: "boolean"
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
      href: {
        type: "boolean"
      },
      target: {
        type: "string"
      },
      icon: {
        type: "object"
      },
      loading: {
        type: "boolean"
      }
    },
    additionalProperties: false
  }
};

export const $refLink = {
  $ref: "#/definitions/linkOptions"
};

export const noItemsCaseSchemaLink = {
  if: {
    properties: {
      type: {
        const: EUiEleType.LINK
      }
    }
  },
  then: {
    properties: {
      options: $refLink
    }
  }
};

export const itemsCaseSchemaLink = {
  type: "object",
  properties: {
    type: {
      const: EUiEleType.LINK
    },
    options: $refLink
  },
  required: ["type", "options"]
};
