<template>
  <div class="p-win__wrapper">
    <!--  -->
    <div class="c-logo__wrapper mt-5">
      <img src="@/assets/logo/decred-logo.png" class="c-logo" />
    </div>
    <div class="p-win">
      <!-- TODO: STATE: DEFAULT -->
      <div v-if="pageState === 'default'">
        <div class="c-content mt-50">
          <div class="text--align-center my-50">
            <p>Click the button below to generate a ticket.</p>

            <div class="mt-3 mb-40">
              <el-button
                type="success"
                class="c-button--is-cta"
                @click="onGenerateCode"
              >
                Generate code
              </el-button>
            </div>
          </div>

          <!-- <p>Take a screenshot of this page.</p> -->
        </div>
      </div>

      <!-- TODO: STATE: LOADING -->
      <div v-if="pageState === 'loading'" class="c-win-card">
        <div class="my-50">
          <div class="text--align-center mt-5">
            <!--  -->
          </div>

          <Spinner />
        </div>
      </div>

      <!-- TODO: STATE: DONE -->
      <div v-if="pageState === 'done'" class="c-win-card">
        <div class="text--align-center mt-5">
          <h1 v-if="msgIndex === 0" class="mt-0">
            Sound money, <br />
            evolved.
          </h1>
          <h1 v-if="msgIndex === 1" class="mt-0">
            Secure. Adaptable. Sustainable.
          </h1>
          <h1 v-if="msgIndex === 2" class="mt-0">
            40x more secure than Proof of Work blockchain
          </h1>
          <h1 v-if="msgIndex === 3" class="mt-0">
            💰 $7,470,000 in decentralized treasury
          </h1>
          <h1 v-if="msgIndex === 4" class="mt-0">
            Decentralized and inclusive governance
          </h1>
          <h1 v-if="msgIndex === 5" class="mt-0">
            ⚡ Lightning network &amp; Private transactions
            <!-- 🕵️‍♂️ -->
          </h1>
          <template v-if="msgIndex === 6">
            <h1 class="mt-0">Decentralized Exchange (DEX)</h1>
            <h3>No KYC, no fees.</h3>
          </template>
          <hr class="hr-short mt-3 mb-5" />
        </div>

        <div class="c-content mt-30">
          <p class="text--align-center">This is your ticket to participate.</p>

          <div class="text--align-center mt-3 mb-40">
            <div class="c-qr-code" id="c-qr-code-wrapper">
              <!-- <img src="@/assets/images/qr-sample.png" /> -->
              <!-- <img src="@/assets/images/qr-sample-white.png" width="180" /> -->
            </div>
          </div>

          <!-- <p>Take a screenshot of this page.</p> -->
        </div>

        <!-- <hr class="hr-short mt-5 mb-3" /> -->

        <!-- <h3>Fair, predictable, scarce money</h3> -->
      </div>
    </div>

    <div class="c-footer__wrapper">
      <div class="c-footer">https://withDecred.org</div>
    </div>
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
            data: data.url,
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
.p-win__wrapper {
  background-color: $color-secondary-black;
  background-position-x: 50%;
  background-position-y: 50%;

  /* Background 1 */
  background-image: url('../assets/images/bg-brand-page.png');
  background-size: cover;
  /* Background 2 */
  /* background-image: url('../assets/images/bg-waves.png');
  background-size: 2500px; */
  /* Background 3 */
  /* background-image: url('../assets/images/bg-dcr.png');
  background-size: 1500px;
  background-position-x: 50%;
  background-position-y: 100%; */
  /* Background 4 */
  /* background-image: url('../assets/images/bg-squares.png');
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #fff;
  }

  h1,
  h2,
  h3 {
    font-weight: 500;
    /* font-style: italic; */
    line-height: 1.115em;
    /* letter-spacing: 2px; */
  }

  .p-win {
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
    top: 50px;
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
