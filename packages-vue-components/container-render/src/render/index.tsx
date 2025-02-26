import checkJsonSchema, {
  PropsCheckJsonSchema
} from "@micro-test-01/vue-schema-validator";
import Container from "@micro-test-01/vue-container";
import {
  VNode
} from "vue";

import {
  IProps
} from "../types";

export default function Render(props: IProps): VNode {

  const obj:PropsCheckJsonSchema | undefined = checkJsonSchema(props.value);

  if(!obj) {
    return <div>JSON 数据错误</div>;
  }

  return <Container {...obj} />;
}
