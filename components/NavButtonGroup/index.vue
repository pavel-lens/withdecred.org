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
    flex: 0 1 50%;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }

  @include media('<=sm') {
    flex-direction: column;

    & > * {
      &:not(:last-child) {
        margin-bottom: 24px;
        margin-right: 0;
      }
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
