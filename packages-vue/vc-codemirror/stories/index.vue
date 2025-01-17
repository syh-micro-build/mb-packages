<script lang="tsx" setup>
import Codemirror, {
  CodeMirrorType
} from "../src";

const str = "{\"name\":\"John Doe\",\"age\":30,\"isDeveloper\":true,\"languages\":[\"JavaScript\",\"TypeScript\",\"Python\"],\"address\":{\"street\":\"123 Main St\",\"city\":\"New York\",\"country\":\"USA\"}}";
</script>

<template>
  <Codemirror
    :value="str"
    :type="CodeMirrorType.JSON"
  />
</template>

<style scoped>
div {
  height: 900px;
}

</style>
