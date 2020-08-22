<template>
  <div>
    <NavBar />
    <div class="content-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '@/components/NavBar/index.vue'

export default Vue.extend({
  components: {
    NavBar,
  },
})
</script>

<style>
.content-wrapper {
  padding-top: 70px;
}
</style>
