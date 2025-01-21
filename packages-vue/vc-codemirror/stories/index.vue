<script lang="tsx" setup>
import Codemirror, {
  CodeMirrorType
} from "../src";

const str1 = `
{
  type: "Button",
  label: "你好",
}
`;

const str2 = "<Button>你好</Button>";
</script>

<template>
  <Codemirror
    :value="str1"
    :type="CodeMirrorType.JSON"
  />
  <Codemirror
    :value="str2"
    :read-only="true"
    :type="CodeMirrorType.VUE"
  />
</template>

<style scoped>
div {
  height: 200px;
}

</style>
