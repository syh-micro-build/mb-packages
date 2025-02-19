<script lang="tsx" setup>
import checkJsonSchema, {
  EUiEleType,
  PropsCheckJsonSchema
} from "../src";

const data: PropsCheckJsonSchema = {
  type: EUiEleType.SELECT,
  options: {
    data: [{
      a: 1
    }]
  }
};

// eslint-disable-next-line no-console
console.log(checkJsonSchema(data));

</script>

<template>
  <div>mb-components-vue-check-json-schem</div>
</template>

<style scoped>

</style>
