import {
  ConfigProvider,
  EUiType
} from "@mb-kit/react-config-provider";
import {
  PropsCheckJsonSchema
} from "@mb-kit/schema-validator";
import React from "react";

import Container from "../../src";

const data1: PropsCheckJsonSchema = {
  items: [
    {
      "type": "Button",
      "options": {
        "children": "Button 1"
      }
    }
  ],
  "margin": "10px",
  "padding": "10px"
};

export default function Index(): React.ReactElement {
  return <ConfigProvider props={{
    type: EUiType.ANT_DESIGN
  }}>
    <Container value={data1} />
  </ConfigProvider>;

}
