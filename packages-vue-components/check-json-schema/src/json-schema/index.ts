import {
  SCHEMA
} from "../const";
import BUTTON from "./button";
import SELECT from "./select";

const JSON_SCHEMA = {
  "$schema": SCHEMA,
  "oneOf": [
    BUTTON,
    SELECT
  ]
};

export default JSON_SCHEMA;
