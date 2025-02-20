import {
  EUiType
} from "mb-vue-components-config-provider";

import {
  ElementComponentMap,
  ArcoComponentMap
} from "../const";

const loadFrameTypeFun = import.meta.env.VITE_UI_TYPY === EUiType.ELEMENT ? ElementComponentMap : ArcoComponentMap;

export default loadFrameTypeFun;
