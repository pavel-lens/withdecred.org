<template>
  <div class="c-footer">
    <div class="c-footer__content">
      <div class="c-footer__row">
        <!-- <div class="c-footer__links">
          <a href="#">Decred.org</a>
          <a href="#">Docs</a>
          <a href="#">Wallet</a>
          <a href="#">Community</a>
          <a href="#">Become a contributor</a>
        </div> -->

        <div class="c-footer__social-links">
          <IconDiscord />
          <IconMatrix />
          <IconMedium />
          <IconTwitter />
        </div>
      </div>

      <div class="c-footer__row mt-50">
        <div class="c-footer__logo">
          <!-- <Logo style="width: 230px; height: 30px;" /> -->
          <img src="@/assets/logo/decred-logo.png" />
        </div>

        <p class="c-footer__copyright">
          © 2020 withDecred.org. Built by Decred community for people of the
          Internet.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconDiscord from './icon-discord.svg?inline'
import IconMatrix from './icon-matrix.svg?inline'
import IconMedium from './icon-medium.svg?inline'
import IconTwitter from './icon-twitter.svg?inline'

export default Vue.extend({
  components: {
    IconDiscord,
    IconMatrix,
    IconMedium,
    IconTwitter,
  },
})
</script>

<style lang="scss" scoped>
.c-footer {
  background-color: #091440;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 10px;

  @include media('<=sm') {
    padding: 40px 20px;
  }

  &__content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @include media('<=sm') {
      max-width: 100%;
      padding: 0 30px;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    width: 100%;

    @include media('<=sm') {
      flex-direction: column;
    }
  }

  &__links {
    /* font-family: Source Sans Pro; */
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #8997a5;

    @include media('<=sm') {
      display: flex;
      flex-direction: column;
      margin-left: 0;

      & > * {
        margin-top: 8px;
      }
    }

    & > * {
      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    a,
    a:active,
    a:hover,
    a:visited {
      color: #8997a5;
      text-decoration: none;
    }
  }

  &__social-links {
    display: flex;
    margin-left: auto;

    @include media('<=sm') {
      margin-left: 0;
      /* margin-top: 50px; */

      & > * {
        &:not(:last-child) {
          margin-right: 30px;
        }
      }
    }

    & > svg {
      width: 22px;
      height: 22px;
      margin-right: 12px;
    }
  }

  &__logo {
    img {
      width: 230px;
      height: auto;
    }
  }

  &__copyright {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #8997a5;
    margin-left: auto;
    margin-top: 4px;

    @include media('<=sm') {
      margin-left: 0;
      margin-top: 12px;
      text-align: center;
    }
  }
}
</style>
