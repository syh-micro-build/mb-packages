import {
  EUiType
} from "@mb-kit/vue-config-provider";

import {
  ElementComponentMap,
  ArcoComponentMap
} from "../const";

const loadFrameType = import.meta.env.VITE_UI_TYPY === EUiType.ELEMENT ? ElementComponentMap : ArcoComponentMap;

export default loadFrameType;
