<template>
  <div class="c-navbar__wrapper">
    <div class="c-navbar">
      <div class="logo">
        <nuxt-link to="/">
          <img
            src="@/assets/logo/decred-logo.png"
            alt="Decred logo"
            height="50"
            class="logo"
          />
        </nuxt-link>
      </div>
      <!-- <nav class="nav ml-5">
      <nuxt-link to="/basics">Decred Basics</nuxt-link>
      <nuxt-link to="/staking">How to Stake</nuxt-link>
      <nuxt-link to="/voting">How to Vote</nuxt-link>
      <nuxt-link to="/politeia">What is Politeia</nuxt-link>
    </nav> -->
      <div class="m--flex ml-auto mr-4">
        <!-- <el-button
        type="primary"
        icon="el-icon-share"
        class="c-button--style-share mr-3"
      >
        <strong>Share</strong>
      </el-button> -->
        <nuxt-link to="/a/how-to-get-decred">
          <el-button
            type="primary"
            icon="el-icon-money"
            class="c-button--style-cta"
          >
            <strong>Purchase $DCR</strong>
          </el-button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
$border-size: 2px;

.c-navbar__wrapper {
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  /* right: 0; */
  height: 70px;
  /* width: 100%; */
  /* max-width: 1120px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #091440;
  // border-bottom: thin solid #aaa;
  width: 100%;
}

.c-navbar {
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.c-button--style-cta {
  &.el-button {
    background-color: #41bf53;
    border-color: #41bf53;
    font-size: 16px;
    /* text-transform: uppercase; */
    /* padding: 15px 25px; */
  }
}

.c-button--style-share {
  &.el-button {
    background-color: #2970ff;
    border-color: #2970ff;
    font-size: 16px;
    /* text-transform: uppercase; */
    /* padding: 15px 25px; */
  }

  @include media('<=sm') {
    display: none;
  }
}

.logo {
  height: 50px;
  // border-bottom: $border-size solid transparent;
  /* margin-bottom: 2px; */
}

.nav {
  display: flex;
  align-items: center;
  height: 100%;

  & > a {
    color: $color-primary-white;
    text-decoration: none;
    margin-right: 24px;
    border-bottom: $border-size solid transparent;
    padding-bottom: 2px;

    &:hover {
      border-bottom-color: $color-primary-white;
    }
  }
}
</style>
