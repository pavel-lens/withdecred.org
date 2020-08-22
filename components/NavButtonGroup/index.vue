<template>
  <div class="c-nav-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //
})
</script>

<style lang="scss" scoped>
.c-nav-button-group {
  display: flex;
  flex-direction: row;

  & > * {
    flex: 0 1 100%;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }
}
</style>
