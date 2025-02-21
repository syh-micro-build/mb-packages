<script lang="tsx" setup>
import Ajv from "ajv";

const ajv = new Ajv({
  allErrors: true
});

const schema = {
  type: "object",
  definitions: { // 将公共定义提到顶层
    buttonOptions: {
      type: "object",
      required: ["label"],
      properties: {
        label: {
          type: "string"
        }
      },
      additionalProperties: false
    },

    selectOptions: {
      type: "object",
      required: ["data"],
      properties: {
        data: {
          type: "string"
        }
      },
      additionalProperties: false
    }
  },
  oneOf: [

    // Case 1: No items object (root level)
    {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["Button", "Select"]
        },
        options: {
          oneOf: [
            {
              $ref: "#/definitions/buttonOptions"
            },
            {
              $ref: "#/definitions/selectOptions"
            }
          ]
        }
      },
      required: ["type", "options"],
      additionalProperties: false,
      if: {
        properties: {
          type: {
            const: "Button"
          }
        }
      },
      then: {
        properties: {
          options: {
            $ref: "#/definitions/buttonOptions"
          }
        }
      },
      else: {
        properties: {
          options: {
            $ref: "#/definitions/selectOptions"
          }
        }
      }
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
              {
                type: "object",
                properties: {
                  type: {
                    const: "Button"
                  },
                  options: {
                    $ref: "#/definitions/buttonOptions"
                  }
                },
                required: ["type", "options"]
              },
              {
                type: "object",
                properties: {
                  type: {
                    const: "Select"
                  },
                  options: {
                    $ref: "#/definitions/selectOptions"
                  }
                },
                required: ["type", "options"]
              }
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

// Compile the schema
const validator = ajv.compile(schema);

// Test cases
const validate = data => {
  const valid = validator(data);

  // eslint-disable-next-line no-console
  console.log("Validation result:", valid);

  // eslint-disable-next-line no-console
  if (!valid) {console.log("Errors:", validator.errors);}
};

// Your test data examples
const data1 = {
  "type": "Button",
  "options": {
    "data": "Button 1"
  }
};

const data2 = {
  "type": "Select",
  "options": {
    "data": "[]"
  },
  "margin": "10px"
};

const data3 = {
  "items": [
    {
      "type": "Button",
      "options": {
        "label": "Button 1"
      }
    },
    {
      "type": "Select",
      "options": {
        "data": "[]"
      }
    }
  ],
  "margin": "10px",
  "class": "container"
};

// Test validation
validate(data1); // ✅ valid
validate(data2); // ✅ valid
validate(data3); // ✅ valid

</script>
