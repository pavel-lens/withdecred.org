<template>
  <div class="background">
    <el-container class="container">
      <el-main>
        <el-row class="mb-6">
          <div>
            <img
              src="@/assets/logo/decred-logo.png"
              alt="Decred logo"
              class="nav-logo mb-2"
            />
            <h1 class="title">withDecred<span class="dot">.</span>org</h1>
            <h2 class="subtitle">Let's help others learn about Decred</h2>
          </div>
        </el-row>

        <el-row :gutter="24">
          <el-col :lg="8" :sm="12" :xs="24">
            <el-card>
              <div slot="header" class="flex">
                <h3 class="card-title">
                  <i class="el-icon-star-off" />
                  Decred basics
                </h3>
                <div class="ml-auto">
                  <i class="el-icon-check card--is-done" />
                </div>
              </div>
              Learn why Decred is desribed as community-directed, superior store
              of value.
              <div class="mt-3">
                <el-button type="primary">
                  Read more <i class="el-icon-right"></i>
                </el-button>
              </div>
            </el-card>
          </el-col>

          <el-col :lg="8" :sm="12" :xs="24">
            <el-card>
              <div slot="header">
                <h3 class="card-title">
                  <i class="el-icon-data-analysis" />
                  How to stake
                </h3>
              </div>
              Learn why Decred is desribed as community-directed, superior store
              of value.
              <div class="mt-3">
                <el-button type="primary" plain>
                  How to stake <i class="el-icon-right"></i>
                </el-button>
              </div>
            </el-card>
          </el-col>

          <el-col :lg="8" :sm="12" :xs="24">
            <el-card>
              <div slot="header">
                <h3 class="card-title">
                  <i class="el-icon-collection-tag" />
                  How to vote
                </h3>
              </div>
              Learn why Decred is desribed as community-directed, superior store
              of value.
              <div class="mt-3">
                <el-button type="primary" plain>
                  How to vote <i class="el-icon-right"></i>
                </el-button>
              </div>
            </el-card>
          </el-col>

          <el-col :lg="8" :sm="12" :xs="24">
            <el-card>
              <div slot="header">
                <h3 class="card-title">
                  <i class="el-icon-collection-tag" />
                  What is Politeia
                </h3>
              </div>
              Learn why Decred is desribed as community-directed, superior store
              of value.
              <div class="mt-3">
                <el-button type="primary" plain>
                  How to vote <i class="el-icon-right"></i>
                </el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
// import { Vue, Component, Prop } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
import User from '~/components/User.vue'
import User2 from '~/components/User2.vue'

interface User {
  firstName: string
  lastName: string
}

export default Vue.extend({
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

.container {
  margin: 0 auto;
  max-width: 1120px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.nav-logo {
  height: 50px;
}

.card {
  &--is-done {
    color: $color-secondary-green;
  }
}

.card-title {
  font-weight: 500;
  font-size: 20px;
  text-align: left;
}

.title {
  display: block;
  font-weight: 400;
  font-size: 52px;
  /* color: #35495e; */
  letter-spacing: 0.025em;
  margin-bottom: 32px;
}

.subtitle {
  font-family: 'Source Sans Pro';
  font-weight: 300;
  font-size: 28px;
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
