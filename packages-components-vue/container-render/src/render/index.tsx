import checkJsonSchema, {
  PropsCheckJsonSchema
} from "mb-components-vue-check-json-schema";
import Container from "mb-components-vue-container";
import "mb-components-vue-container/dist/index.css";
import {
  VNode
} from "vue";

export default function(props: PropsCheckJsonSchema): VNode {

  const obj = checkJsonSchema(props);

  if(!obj) {
    return <div>JSON 数据错误</div>;
  }

  return <Container {...obj} />;
}
