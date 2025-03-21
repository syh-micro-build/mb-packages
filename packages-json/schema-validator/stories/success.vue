<script lang="tsx" setup>
import Ajv from "ajv";

const ajv = new Ajv({
  allErrors: true
});

ajv.addKeyword({
  keyword: "isFunction",
  validate: (_schema, data) => typeof data === "function"
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
        },
        onClick: {
          isFunction: true
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
          enum: ["Button"]
        },
        options: {
          oneOf: [
            {
              $ref: "#/definitions/buttonOptions"
            }
          ]
        }
      },
      required: ["type", "options"],
      additionalProperties: false,
      allOf: [
        {
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
          }
        }
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
    "label": "Button 1",
    "onClick": () => {
      // eslint-disable-next-line no-console
      console.log("click");
    }
  }
};

const data3 = {
  "items": [
    {
      "type": "Button",
      "options": {
        "label": "Button 1"
      }
    }
  ],
  "margin": "10px",
  "class": "container"
};

// Test validation
validate(data1); // ✅ valid
validate(data3); // ✅ valid

</script>
