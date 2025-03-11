import Ajv from "ajv";

import JSON_SCHEMA from "../json-schema";
import {
  Props
} from "../types";

const ajv = new Ajv({
  allErrors: false
});

// 自定义关键字
ajv.addKeyword({
  keyword: "isFunction",
  validate: (_schema, data) => typeof data === "function"
});

/**
 * checkJsonSchema
 */
export default function check(props: Props): Props | undefined {
  const validate = ajv.compile(JSON_SCHEMA);

  if (validate(props)) {
    return props;
  }

  console.error("JSON Error: ", validate.errors);
}
