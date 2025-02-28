import {
  EUiEleType
} from "../enum";
import {
  definitionsButton,
  $refButton,
  noItemsCaseSchemaButton,
  itemsCaseSchemaButton
} from "./button";
import {
  definitionsLink,
  $refLink,
  noItemsCaseSchemaLink,
  itemsCaseSchemaLink
} from "./link";

const JSON_SCHEMA = {
  type: "object",
  definitions: {
    ...definitionsButton,
    ...definitionsLink
  },
  oneOf: [

    // Case 1: No items object (root level)
    {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: Object.values(EUiEleType)
        },
        options: {
          allOf: [
            {
              if: {
                properties: {
                  type: {
                    const: "Button"
                  }
                },
                required: ["type"]
              },
              then: $refButton
            },
            {
              if: {
                properties: {
                  type: {
                    const: "Link"
                  }
                },
                required: ["type"]
              },
              then: $refLink
            }
          ]
        }
      },
      required: ["type", "options"],
      additionalProperties: false,
      allOf: [
        noItemsCaseSchemaButton,
        noItemsCaseSchemaLink
      ]
    },

    // Case 2: With items object (root level)
    {
      type: "object",
      required: ["items"],
      properties: {
        items: {
          type: "array",
          items: {
            oneOf: [
              itemsCaseSchemaButton,
              itemsCaseSchemaLink
            ]
          }
        },
        margin: {
          type: "string"
        },
        padding: {
          type: "string"
        },
        class: {
          type: "string"
        }
      },
      additionalProperties: false
    }
  ]
};

export default JSON_SCHEMA;
