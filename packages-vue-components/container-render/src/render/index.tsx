import checkJsonSchema, {
  PropsCheckJsonSchema
} from "@mb-kit/vue-schema-validator";
import Container from "@mb-kit/vue-container";
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
