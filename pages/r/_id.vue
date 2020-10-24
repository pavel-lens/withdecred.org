<template>
  <div class="p-ref__wrapper">
    <!-- <div class="c-logo__wrapper mt-5">
      <nuxt-link to="/">
        <img src="@/assets/logo/decred-logo.png" class="c-logo" />
      </nuxt-link>
    </div> -->
    <div class="p-ref">
      <div v-if="pageState === 'default'">
        <div class="c-content">
          <div class="text--align-center mb-100">
            <nuxt-link to="/">
              <img src="@/assets/logo/decred-logo.png" class="c-logo" />
            </nuxt-link>

            <h2 class="mt-50">Welcome!</h2>
            <p class="mt-2">
              You are here because your friend invited you to learn about Decred
              &mdash; Money Evolved.
            </p>
            <p class="mt-3">Find out why and earn $DCR!</p>

            <div class="mt-3 mb-40">
              <a
                href="https://twitter.com/withdecred/status/1319337624201515014"
                target="_blank"
              >
                <el-button type="success" class="c-button--is-cta">
                  Discover Money Evolved
                </el-button>
              </a>

              <div class="mt-3">
                <nuxt-link to="/"> Learn more withDecred.org </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="c-footer__wrapper">
      <div class="c-footer">https://withDecred.org</div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import consola from 'consola'
// import QRCodeStyling from 'qr-code-styling'
import Spinner from '@/components/Spinner/index.vue'
import Logo from '@/assets/logo/decred-logo-positive.svg?inline'

// Backgrounds: https://github.com/decred/dcrdesign/issues/96
// https://explorer.dcrdata.org/api/block/best/hash

type PageState = 'default' | 'loading' | 'done'

function getRandomNumber(top: number) {
  return Math.floor(Math.random() * top)
}

export default Vue.extend({
  //
  layout: 'clean',

  components: {
    //
    Logo,
    Spinner,
  },

  data() {
    const pageState = 'default' as PageState

    return {
      msgIndex: 0,
      pageState,
    }
  },

  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://withdecred.org/r/`,
        },
        //
      ],
    }
  },

  methods: {
    async onGenerateCode() {
      this.pageState = 'loading'

      this.msgIndex = getRandomNumber(7)

      let data = {
        lastBlockHash: '',
        url: '',
      }

      try {
        data = await this.$axios.$get('/api/win')
        // consola.info(data)

        // lastBlockHash = data.lastBlockHash
      } catch (err) {
        consola.error(err)
      }

      setTimeout(() => {
        this.pageState = 'done'

        this.$nextTick(() => {
          // Load dynamically on client side
          const QRCodeStyling = require('qr-code-styling')

          const qrCode = new QRCodeStyling({
            width: 200,
            height: 200,
            // data: `https://withdecred.org/r/${data.lastBlockHash}`,
            data: `${data.url}?message=${this.msgIndex}`,
            image: `/logo/decred-vertical-dark.svg`,
            dotsOptions: {
              color: '#091440', // $color-primary-darkblue
              type: 'rounded',
            },
            backgroundOptions: {
              // color: 'transparent',
              color: '#f9fbfc',
            },
            imageOptions: {
              crossOrigin: 'anonymous',
            },
          })

          const divWrapper = document.getElementById(
            'c-qr-code-wrapper'
          ) as HTMLDivElement
          if (divWrapper) {
            qrCode.append(divWrapper)
          }
        })
      }, 2000)
    },
  },
})
</script>

<style lang="scss" scoped>
/*  */
.p-ref__wrapper {
  background-color: $color-secondary-black;
  background-position-x: 50%;
  background-position-y: 50%;

  /* Background 1 */
  background-image: url('../../assets/images/bg-brand-page.png');
  background-size: cover;
  /* Background 2 */
  /* background-image: url('../../assets/images/bg-waves.png');
  background-size: 2500px; */
  /* Background 3 */
  /* background-image: url('../../assets/images/bg-dcr.png');
  background-size: 1500px;
  background-position-x: 50%;
  background-position-y: 100%; */
  /* Background 4 */
  /* background-image: url('../../assets/images/bg-squares.png');
  background-size: 1500px; */

  /*  */
  /* background-position-x: 50%;
  background-position-y: 50%; */
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: $font-source-sans;
  /* font-w: 'Source Sans Pro'; */
  /* font-size: 16px; */

  &,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #fff;

    &:visited,
    a:hover,
    a:active {
      color: #fff;
    }
  }

  h1,
  h2,
  h3 {
    font-weight: 500;
    /* font-style: italic; */
    line-height: 1.115em;
    /* letter-spacing: 2px; */
  }

  .p-ref {
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    margin: 20px;
    max-width: 475px;
  }

  .c-content {
    margin: 20px 0;
  }

  .hr-short {
    max-width: 50px;
    margin: 0 auto;
  }

  .c-logo__wrapper {
    position: absolute;
    top: 20px;
  }

  .c-logo {
    width: 220px;
    height: auto;
    /* margin: 0 auto; */
  }

  .c-button {
    &--is-cta {
      padding: 20px 30px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.085em;
    }
  }

  .c-win-card {
    /* border: 1px solid $color-primary-white; */
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    /* padding: 20px 30px 55px; */
    padding: 40px 0 0;
  }

  .c-qr-code {
    display: inline-block;
    /* opacity: 0.; */
    /* background-color: rgba(255, 255, 255, 0.9); */
    border-radius: 2px;

    &.is-semitransparent {
      background-color: #ffffff00;
    }

    img {
      /* visibility: hidden; */
    }
  }

  .c-footer__wrapper {
    position: absolute;
    bottom: 70px;
  }

  .c-footer {
    /* position: absolute; */
    /* margin: 0 auto; */
    /* left: 0; */
    /* right: 0; */
    /* left: 50%; */
    /* right: 0; */
    /* transform: translateX(-50%); */
    bottom: 20px;
    font-size: 18px;
    text-align: center;
  }
}
</style>
