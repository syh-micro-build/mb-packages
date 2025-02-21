<script lang="tsx" setup>
import check, {
  PropsCheckJsonSchema,
  EUiEleType
} from "../src";
const data4: PropsCheckJsonSchema = {
  type: EUiEleType.SELECT,
  options: {
    data: []
  }
};

const isCheck = check(data4);
</script>
<template>
  {{ isCheck }}
</template>
