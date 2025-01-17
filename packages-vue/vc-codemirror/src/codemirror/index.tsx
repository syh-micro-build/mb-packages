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

export default function({
  type,
  value
}: IProps): VNode {

  if(type === ECodeMirrorType.VUE) {
    return <Vue value={value} />;
  }

  return <Json value={value} />;
}
