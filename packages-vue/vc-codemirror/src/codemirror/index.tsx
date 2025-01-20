import Json from "../json/index.vue";
import Vue from "../vue/index.vue";
import {
  VNode
} from "vue";

import {
  ECodeMirrorType
} from "..//enum";
import {
  IProps
} from "../types";

import "../style/index.css";

export default function(props: IProps): VNode {

  if(props.type === ECodeMirrorType.VUE) {
    return <Vue value={props.value} />;
  }

  return <Json value={props.value} />;
}
