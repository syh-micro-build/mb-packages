export default {
  "type": "object",
  "properties": {
    "type": {
      "const": "Button"
    },
    "options": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string"
        },
        "type": {

          // enum: Object.values(EUiEleType) 枚举
          "type": "string"
        },
        "style": {
          "type": "string"
        },
        "class": {
          "type": "string"
        },
        "shape": {
          "type": "string"
        },
        "theme": {
          "type": "string"
        }
      },
      "required": ["label"],
      "additionalProperties": false
    }
  },
  "required": ["type", "options"],
  "additionalProperties": false
};
