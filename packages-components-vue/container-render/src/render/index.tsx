import checkJsonSchema from "mb-components-vue-check-json-schema";
import Container from "mb-components-vue-container";
import "mb-components-vue-container/dist/index.css";
import {
  VNode
} from "vue";

import {
  IProps
} from "../types";

export default function Render(props: IProps): VNode {

  const obj = checkJsonSchema(props.value);

  if(!obj) {
    return <div>JSON 数据错误</div>;
  }

  return <Container {...obj} />;
}
