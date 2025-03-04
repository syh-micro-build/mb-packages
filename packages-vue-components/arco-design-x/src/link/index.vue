<script setup lang="ts">
import {
  Link
} from "@arco-design/web-vue";
import {
  EColor,
  PropsLink
} from "@mb-kit/vue-schema-validator";
import {
  computed
} from "vue";

const props = defineProps<PropsLink>();

const options = computed(() => {
  const obj = {
    kref: props.href,
    icon: props.icon,
    loading: props.loading,
    disabled: props.disabled,
    status: "normal",
    class: "",
    hoverable: props.underline

    // TODO 缺失 target
  };

  if(props.color === EColor.WARNING || props.color === EColor.SUCCESS || props.color === EColor.DANGER) {
    obj.status = props.color;
  } else if(props.color === EColor.PRIMARY) {
    obj.status = "nomal";
  } else if(props.color === EColor.DEFAULT) {
    obj.class = EColor.DEFAULT;
  } else if(props.color === EColor.INFO) {
    obj.class = EColor.INFO;
  }

  return obj as Record<string, unknown>;
});

</script>
<template>
  <Link v-bind="{...options}">
    <template
      v-if="$slots.icon"
      #icon
    >
      <slot name="header"></slot>
    </template>
    <slot>
      {{ label }}
    </slot>
  </Link>
</template>
<style>
.default {
  color: var(--color-text-2);
}

.info {
  color: var(--color-text-3);
}
</style>
