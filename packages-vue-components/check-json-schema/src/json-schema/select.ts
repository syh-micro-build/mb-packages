export default {
  "type": "object",
  "properties": {
    "type": {
      "const": "Select"
    },
    "options": {
      "type": "object",
      "properties": {
        "data": {
          "type": "array"
        }
      },
      "required": ["data"],
      "additionalProperties": false
    }
  },
  "required": ["type", "options"],
  "additionalProperties": false
};

/*
{
  "type": "object",
  "properties": {
    "type": {
      "const": "Select"
    },
    "style": {
      "type": "string"
    }
  },
  "required": ["type", "style"],
  "additionalProperties": false
}
*/
