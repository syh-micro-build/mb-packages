<script lang="tsx" setup>
import check, {
  PropsCheckJsonSchema
} from "../src";
const data3: PropsCheckJsonSchema = {
  items: [
    {
      type: "Button",
      "options": {
        "label": "Button 1"
      }
    },
    {
      "type": "Select",
      "options": {
        "data": [1, 2]
      }
    }
  ]

  // "margin": "10px",
  // "padding": "10px"
};

const data4: PropsCheckJsonSchema = {
  type: "Select",
  options: {
    data: []
  }
};

const isCheck1 = check(data3);

const isCheck2 = check(data4);

</script>
<template>
  {{ isCheck1 }}
  <hr />
  {{ isCheck2 }}
</template>
