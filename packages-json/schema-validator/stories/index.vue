<script lang="tsx" setup>
import check, {
  PropsCheckJsonSchema
} from "../src";

const data1: PropsCheckJsonSchema = {
  items: [
    {
      "type": "Button",
      "options": {
        "children": "Button 1",
        "api-": 222
      }
    }
  ],
  "margin": "10px",
  "padding": "10px"
};

const data2: PropsCheckJsonSchema = {
  type: "Button",
  options: {
    "children": "Button 1",
    "onClick": () => {
      // eslint-disable-next-line no-console
      console.log("click");
    }
  }
};

const isCheck1 = check(data1);

const isCheck2 = check(data2);

</script>
<template>
  {{ isCheck1 }}

  <hr />
  {{ isCheck2 }}
  <hr />
  {{ isCheck3 }}
</template>
