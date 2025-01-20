import {
  PropType,
  defineComponent,
  renderSlot,
  provide,
  App,
  getCurrentInstance,
  VNode
} from "vue";

import {
  CONFIG_PROVIDER
} from "../const";
import {
  IProps
} from "../types";

const ConfigProvider = defineComponent({
  name: "ConfigProvider",
  props: {
    app: {
      type: Object as PropType<App>,
      default: () => {
        const instance = getCurrentInstance();

        if (instance) {
          return instance.appContext.app;
        }
      }
    },
    type: {
      type: String as PropType<IProps["type"]>
    }
  },

  setup(props, {
    slots
  }) {
    provide(CONFIG_PROVIDER, props);

    return (): VNode => renderSlot(slots, "default", {
      config: props
    }); // 加载完成后渲染内容
  }
});

export type TConfigProviderInstance = InstanceType<typeof ConfigProvider>;

export default ConfigProvider;
