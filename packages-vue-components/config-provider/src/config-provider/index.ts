import {
  PropType,
  defineComponent,
  renderSlot,
  provide,
  App,
  VNode
} from "vue";

import {
  CONFIG_PROVIDER
} from "../const";
import {
  EUiType
} from "../enum";
import {
  IProps
} from "../types";

const ConfigProvider = defineComponent({
  name: "ConfigProvider",
  props: {

    /**
     * 不能给默认值
     */
    app: {
      type: Object as PropType<App>,
      default: undefined
    },

    type: {
      type: String as PropType<IProps["type"]>,
      default: EUiType.ELEMENT
    }
  },

  setup(props, {
    slots
  }) {
    provide(CONFIG_PROVIDER, props);

    return (): VNode => renderSlot(slots, "default", {
      config: props
    });
  }
});

export type TConfigProviderInstance = InstanceType<typeof ConfigProvider>;

export default ConfigProvider;
