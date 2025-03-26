import {
  EUiType
} from "@mb-kit/vue-config-provider";

import {
  ElementComponentMap
} from "../const";

const loadFrameType = import.meta.env.VITE_UI_TYPY === EUiType.ELEMENT ? ElementComponentMap : ElementComponentMap;

export default loadFrameType;
