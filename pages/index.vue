<template>
  <div class="background">
    <el-container class="container text--align-center">
      <el-main>
        <el-row class="mb-6">
          <div>
            <img
              src="@/assets/logo/decred-logo.png"
              alt="Decred logo"
              class="nav-logo mb-2"
            />
            <h1 class="title my-0">withDecred<span class="dot">.</span>org</h1>
            <h2 class="subtitle my-0">Let's help others learn about Decred</h2>
            <h2 class="subtitle my-0">(coming late Sep 2020)</h2>

            <div class="follow-us mt-3">
              <a href="https://twitter.com/withdecred">Follow us on Twitter <i class="el-icon-link"></i></a>
            </div>
          </div>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
// import { Vue, Component, Prop } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  layout: 'homepage',

  components: {
    Logo,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/_global';

.background {
  // background-image: url('../assets/images/bg-waves.png');
  background-image: url('../assets/images/bg-waves.webp');
  background-position-y: -70px;
}

.nav-logo {
  height: 50px;
}

.card {
  position: relative;
  &--is-done {
    color: $color-secondary-green;
  }
}

.card-title {
  font-weight: 500;
  font-size: 20px;
  text-align: left;
}

.card-footer {
  position: absolute;
  bottom: 12px;
  left: 16px;
  font-size: 0.9em;
}

.title {
  display: block;
  color: $font-color-light;
  font-weight: 400;
  font-size: 52px;
  letter-spacing: 0.025em;
}

.subtitle {
  font-weight: 300;
  font-size: 28px;
  color: $font-color-light;
}

.follow-us {
  color: $font-color-light;

  a, a:hover, a:visited, a:active {
    color: $font-color-light;
  }
}

.dot {
  // color: $color-primary-blue;
  // color: $color-secondary-lightblue;
  color: $color-secondary-green;
}

.links {
  padding-top: 15px;
}

.my-5 {
  margin: 20px 0;
}
</style>
