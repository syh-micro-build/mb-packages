<script lang="tsx" setup>
import check, {
  PropsCheckJsonSchema
} from "../src";
const data4: PropsCheckJsonSchema = {
  type: "Select",
  options: {
    data: []
  }
};

const isCheck = check(data4);
</script>
<template>
  {{ isCheck }}
</template>
