import {
  inject
} from "vue";

import {
  CONFIG_PROVIDER
} from "../const";
import {
  IProps
} from "../types";

export default function configProviderProps(): IProps {
  return inject(CONFIG_PROVIDER) as IProps;
}
