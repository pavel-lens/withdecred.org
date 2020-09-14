<template>
  <div class="layout-wrapper">
    <NavBar v-sticky sticky-z-index="50" />
    <div class="content-wrapper">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/Footer/index.vue'
import NavBar from '@/components/NavBar/index.vue'

export default Vue.extend({
  components: {
    Footer,
    NavBar,
  },
})
</script>

<style>
.layout-wrapper {
  position: relative;
}

.content-wrapper {
  /* padding-top: 70px; */
}
</style>
