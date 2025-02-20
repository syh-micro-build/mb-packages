import checkJsonSchema, {
  PropsCheckJsonSchema
} from "mb-vue-components-check-json-schema";
import Container from "mb-vue-components-container";
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
