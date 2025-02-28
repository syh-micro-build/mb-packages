import Ajv from "ajv";

import JSON_SCHEMA from "../json-schema";
import {
  TProps
} from "../types";

const ajv = new Ajv({
  allErrors: false
});

/**
 * checkJsonSchema
 */
export default function check(props: TProps): TProps | undefined {
  const validate = ajv.compile(JSON_SCHEMA);

  if (validate(props)) {
    return props;
  }

  console.error("JSON Error: ", validate.errors);
}
