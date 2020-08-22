<template>
  <div class="c-block-hint">
    <div class="icon">
      <i :class="`el-icon-${icon}`" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //
  props: {
    icon: {
      type: String,
      required: false,
      default: () => 'info',
    },
  },
})
</script>

<style lang="scss" scoped>
.c-block-hint {
  position: relative;
  margin: 0;
  padding: 24px 24px 24px 50px;
  margin-top: 32px;
  margin-bottom: 32px;
  border-left: 4px solid;
  border-radius: 3px;
  background-color: #f5f7f9;
  // border-color: rgb(56, 132, 255);
  border-color: $color-primary-blue;

  & > .icon {
    top: 20px;
    left: 16px;
    margin: 0;
    display: block;
    padding: 0;
    position: absolute;
    font-size: 24px;
  }
}
</style>
