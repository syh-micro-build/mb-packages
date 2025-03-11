import {
  ConfigProviderX
} from "@mb-kit/react-ant-design-x";
import checkJsonSchema, {
  PropsCheckJsonSchema
} from "@mb-kit/schema-validator";
import React from "react";

import Render from "../render";
import {
  IProps
} from "../types";

export default function Validator({
  value
}: IProps): React.ReactElement {

  const obj:PropsCheckJsonSchema | undefined = checkJsonSchema(value);

  if(!obj) {
    return <div>JSON 数据错误</div>;
  }

  return <ConfigProviderX theme={{
    token: {
      borderRadius: 0
    }
  }}>
    <Render value={obj} />
  </ConfigProviderX>;
}
