<template>
  <div
    v-loading="true"
    element-loading-background="rgba(0, 0, 0, 0.0)"
    class="c-spinner"
  >
    <!-- <IconSpinner class="circular" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconSpinner from './spinner.svg?inline'

export default Vue.extend({
  components: {
    IconSpinner,
  },
})
</script>

<style lang="scss" scoped>
.c-spinner {
  width: 30px;
  height: 30px;
  color: white;
}
</style>
