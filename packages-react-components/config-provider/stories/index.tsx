import React from "react";

import {
  ConfigProvider
} from "../src";
import {
  EUiType
} from "../src/enum";
import Test01 from "./components/test-01";

export default function Index(): React.ReactElement {
  return <ConfigProvider props={{
    type: EUiType.ANT_DESIGN
  }}>
    <Test01 />
  </ConfigProvider>;
}
