import {
  EUiEleType
} from "../../enum";

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

          // {
          //   enum: Object.values(EColor)
          // },
          {
            type: "string"
          }
        ]
      },
      href: {
        type: "string"
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
    patternProperties: {
      "^(api[-A-Za-z0-9]*|api[A-Za-z0-9]*)$": {}
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
