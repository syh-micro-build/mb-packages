import React from "react";

import {
  ConfigProvider
} from "../src";
import {
  EUiType
} from "../src/enum";

export default function Index(): React.ReactElement {
  return <ConfigProvider props={{
    type: EUiType.ELEMENT
  }}>
    222
  </ConfigProvider>;
}
