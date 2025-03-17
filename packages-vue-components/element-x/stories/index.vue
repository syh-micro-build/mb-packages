<script lang="tsx" setup>
import {
  EType,
  ESize,
  ButtonVariant
} from "@mb-kit/schema-validator";

import {
  Button
} from "../src";

</script>

<template>
  @mb-kit/vue-element-x
  <hr />
  <p>颜色</p>

  <Button
    children="Default Button"
  />

  <Button :type="EType.PRIMARY">
    Primary
  </Button>

  <Button :type="EType.SUCCESS">
    Primary
  </Button>

  <Button :type="EType.INFO">
    Primary
  </Button>

  <Button :type="EType.WARNING">
    Primary
  </Button>

  <Button :type="EType.DANGER">
    Primary
  </Button>

  <p>形状</p>

  <Button
    :type="EType.DEFAULT"
    :variant="ButtonVariant.DEFAULT"
  >
    默认
  </Button>

  <Button
    :type="EType.WARNING"
    :variant="ButtonVariant.ROUND"
  >
    圆角按钮
  </Button>

  <Button
    :type="EType.DEFAULT"
    :variant="ButtonVariant.CIRCLE"
  >
    圆
  </Button>

  <Button
    :type="EType.DEFAULT"
    :variant="ButtonVariant.LINK"
  >
    链接
  </Button>

  <Button
    :type="EType.DEFAULT"
    :variant="ButtonVariant.TEXT"
  >
    文字
  </Button>

  <Button
    :type="EType.DEFAULT"
    :variant="ButtonVariant.OUTLINE"
  >
    线形按钮
  </Button>

  <Button
    :type="EType.DEFAULT"
    :variant="ButtonVariant.DASHED"
  >
    虚线按钮
  </Button>

  <Button
    :type="EType.DEFAULT"
    :variant="ButtonVariant.SOLID"
  >
    实线按钮
  </Button>

  <Button
    :type="EType.DEFAULT"
    :variant="ButtonVariant.FILLED"
  >
    虚幻按钮
  </Button>

  <br />
  <p>大小</p>

  <Button :size="ESize.DEFAULT">
    Default
  </Button>

  <Button :size="ESize.LARGE">
    Large
  </Button>

  <Button :size="ESize.SMALL">
    Small
  </Button>

  <br />
  <p>其他</p>

  <Button disabled>
    disabled
  </Button>

  <Button loading>
    loading
  </Button>
</template>

<style scoped>

</style>
