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
        <div>
          <a href="https://discordapp.com/invite/GJ2GXfz" target="_blank">
            <el-button class="c-button--style-discord">
              <!-- <div class="m--flex align-center">
              <IconDiscord class="mr-2" />
              Join Discord
            </div> -->
              <LogoDiscord />
            </el-button>
          </a>
        </div>

        <div class="c-footer__social-links">
          <a href="https://discordapp.com/invite/GJ2GXfz" target="_blank"
            ><IconDiscord
          /></a>
          <a href="https://medium.com/decred" target="_blank"><IconMedium /></a>
          <a href="https://twitter.com/withdecred" target="_blank"
            ><IconTwitter
          /></a>
        </div>
      </div>

      <div class="c-footer__row second">
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
import IconMedium from './icon-medium.svg?inline'
import IconTwitter from './icon-twitter.svg?inline'
import LogoDiscord from './logo-discord.svg?inline'

export default Vue.extend({
  components: {
    IconDiscord,
    IconMedium,
    IconTwitter,
    LogoDiscord,
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

    &.second {
      margin-top: 50px;

      @include media('<=sm') {
        margin-top: 12px;
      }
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

  .c-button--style-discord {
    background-color: #7289da;
    border-color: #7289da;
    color: #fff;
    padding-bottom: 8px;
    margin-left: 30px;

    @include media('<=sm') {
      margin-left: 0;
    }

    /* span {
      display: flex;
      align-items: center;
    } */

    svg {
      display: inline-block;
      color: #fff;
      width: 80px;
      /* height: 34px; */
    }
  }

  &__social-links {
    display: flex;
    margin-left: auto;

    @include media('<=sm') {
      margin-left: 0;
      margin-top: 32px;

      & > * {
        &:not(:last-child) {
          margin-right: 30px;
        }
      }
    }

    & svg {
      color: #8997a5;
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
