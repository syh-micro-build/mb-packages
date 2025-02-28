<script lang="tsx" setup>
import check, {
  PropsCheckJsonSchema,
  EUiEleType
} from "../src";

const data1: PropsCheckJsonSchema = {
  items: [
    {
      "type": "Button",
      "options": {
        "label": "Button 1"

        // "color": "red"
      }
    },
    {
      type: EUiEleType.LINK,
      options: {
        label: "测试",
        disabled: false
      }
    }
  ],
  "margin": "10px",
  "padding": "10px"
};

const data2: PropsCheckJsonSchema = {
  type: "Button",
  options: {
    "label": "Button 1"
  }
};

const data3: PropsCheckJsonSchema = {
  type: EUiEleType.LINK,
  options: {
    label: "测试",
    color: "primary",
    disabled: false
  }
};

const isCheck1 = check(data1);

const isCheck2 = check(data2);

const isCheck3 = check(data3);

</script>
<template>
  {{ isCheck1 }}

  <hr />
  {{ isCheck2 }}
  <hr />
  {{ isCheck3 }}
</template>
