import {
  EUiEleType
} from "../enum";
import {
  definitionsButtob,
  $refButton,
  noItemsCaseSchemaButtob,
  itemsCaseSchemaButtob
} from "./button";
import {
  definitionsSelect,
  $refSelect,
  noItemsCaseSchemaSelect,
  itemsCaseSchemaSelect
} from "./select";

const JSON_SCHEMA = {
  type: "object",
  definitions: {
    ...definitionsButtob,
    ...definitionsSelect
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
          oneOf: [
            $refButton,
            $refSelect
          ]
        }
      },
      required: ["type", "options"],
      additionalProperties: false,
      allOf: [
        noItemsCaseSchemaButtob,
        noItemsCaseSchemaSelect
      ]
    },

    // Case 2: With items object (root level)
    {
      type: "object",
      required: ["items", "margin", "class"],
      properties: {
        items: {
          type: "array",
          items: {
            oneOf: [
              itemsCaseSchemaButtob,
              itemsCaseSchemaSelect
            ]
          }
        },
        margin: {
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
