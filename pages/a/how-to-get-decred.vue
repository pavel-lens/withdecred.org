<template>
  <div class="background">
    <!-- <el-main class="my-6"> </el-main> -->

    <div class="background--alt">
      <!-- <ContentNav>
        <label>Navigation</label>
        <nuxt-link to="/a/decred-101">
          Decred 101
        </nuxt-link>
        <nuxt-link to="/a/decred-sound-money">
          Decred & Sound Money
        </nuxt-link>
        <nuxt-link to="/a/decred-hybrid-consensus">
          Hybrid Consensus
        </nuxt-link>
        <nuxt-link to="/a/decred-staking-governance">
          Staking & Governance
        </nuxt-link>
        <nuxt-link to="/a/decred-whats-next">
          What's Next?
        </nuxt-link>
        <nuxt-link to="/a/decred-purchase">
          <i class="el-icon-coin" /> Purchase $DCR
        </nuxt-link>
      </ContentNav> -->

      <div class="container">
        <el-main class="article mt-20 mb-6">
          <el-row :gutter="24">
            <el-col :lg="16" :xs="24">
              <h1 class="article--title">
                How to get Decred 💰
              </h1>

              <p class="mt-3">
                If you came all the way here, congratulations! 🎉🎉 Now you have
                enough information to make your first purchase. Let's recap what
                you are buying into.
              </p>

              <el-row :gutter="12" class="mt-3">
                <el-col :lg="12" :sm="24">
                  <ul class="summary-checklist">
                    <li>Fair, predictable, scarce money</li>
                    <li>Hyper-secure network</li>
                    <li>Decentralized &amp; inclusive governance</li>
                    <li>Staking with 8% APY</li>
                    <li>DEX with no KYC &amp; no fees</li>
                    <li>Lightning network</li>
                    <li>Private transactions</li>
                    <li>$10,000,000 USD in treasury</li>
                  </ul>
                </el-col>
                <el-col :lg="12" :sm="24">
                  <div class="">
                    💥💥 <b>Zach Segal</b> Head of Listings @Coinbase
                  </div>
                  <i>
                    If you were to buy 1 crypto asset for next 15 years, what
                    would it be? 🎧
                  </i>
                  <!-- </a> -->
                  <div class="video mt-2">
                    <iframe
                      width="560"
                      height="200"
                      src="https://www.youtube.com/embed/Yere5mbhYNg?start=7"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </el-col>
              </el-row>
              <!-- <p></p> -->

              <h2>United States 🇺🇸</h2>

              <NavButtonGroup class="mt-3">
                <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Bittrex Global
                  </template>
                  <img src="@/assets/exchanges/bittrex.svg" class="mt-1" />
                </NavButton>
                <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Sequoir
                  </template>
                  <img src="@/assets/exchanges/sequoir.svg" class="mt-1 ml-0" />
                </NavButton>
              </NavButtonGroup>
              <NavButtonGroup class="mt-3">
                <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Changelly
                  </template>
                  <img
                    src="@/assets/exchanges/changelly.svg"
                    class="mt-1 ml-0"
                  />
                </NavButton>
                <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Metalpay
                  </template>
                  <img
                    src="@/assets/exchanges/metalpay.svg"
                    width="120"
                    class="mt-1 ml-1"
                  />
                </NavButton>
              </NavButtonGroup>

              <div class="hr my-5" />

              <h2>Asia 🌏</h2>

              <NavButtonGroup class="mt-3">
                <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Binance
                  </template>
                  <img
                    src="@/assets/exchanges/binance.svg"
                    width="120"
                    class="mt-2 ml-1"
                  />
                </NavButton>
                <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Huobi Global
                  </template>
                  <img
                    src="@/assets/exchanges/huobi.png"
                    width="110"
                    class="mt-1 ml-0"
                  />
                </NavButton>
              </NavButtonGroup>

              <div class="hr my-5" />

              <h2>Europe / European union 🇪🇺</h2>

              <NavButtonGroup class="mt-3">
                <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Bitvavo, Netherlands
                  </template>
                  <img
                    src="@/assets/exchanges/bitvavo.svg"
                    width="120"
                    class="mt-2 ml-1"
                  />
                </NavButton>
                <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Changelly
                  </template>
                  <img
                    src="@/assets/exchanges/changelly.svg"
                    class="mt-1 ml-0"
                  />
                </NavButton>
              </NavButtonGroup>

              <div class="hr my-5" />

              <h2>Australia 🇦🇺</h2>

              <NavButtonGroup class="mt-3">
                <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Coinspot.com.au
                  </template>
                  <img
                    src="@/assets/exchanges/coinspot.png"
                    height="40"
                    class="mt-3 ml-1"
                  />
                </NavButton>
                <!-- <NavButton>
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Sequoir
                  </template>
                  <img src="@/assets/exchanges/sequoir.svg" class="mt-1 ml-0" />
                </NavButton> -->
              </NavButtonGroup>

              <div class="hr my-5" />

              <BlockHint icon="chat-dot-square">
                Still have some questions? You our communities on Discord or
                Telegram and get all the information you need!
                <div>
                  <a
                    href="https://discordapp.com/invite/GJ2GXfz"
                    target="_blank"
                  >
                    Discord</a
                  >,
                  <a href="https://t.me/Decred" target="_blank"> Telegram </a>
                </div>
              </BlockHint>
            </el-col>
            <el-col :lg="6" :xs="24">
              <!-- <StakeyCard type="explorer" /> -->
            </el-col>
          </el-row>
        </el-main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BlockHint from '@/components/BlockHint/index.vue'
import ContentNav from '@/components/ContentNav/index.vue'
import NavButton from '@/components/NavButton/index.vue'
import NavButtonGroup from '@/components/NavButtonGroup/index.vue'
import StakeyCard from '@/components/StakeyCard/index.vue'

export default Vue.extend({
  components: {
    BlockHint,
    ContentNav,
    NavButton,
    NavButtonGroup,
    StakeyCard,
  },
})
</script>

<style lang="scss" scoped>
.background--alt {
  background-color: $color-primary-white;
  color: $color-secondary-black;
}

.summary-checklist {
  list-style: none;
  font-size: 1.125em;
  padding-left: 20px;
  margin-top: 0;

  li {
    display: flex;
    margin-bottom: 4px;
    line-height: 29px;

    &::before {
      content: ' ';
      width: 1.2em;
      height: 29px;
      background: URL('../../assets/icons/decred-checkmark.svg') no-repeat;
      background-size: 18px;
      background-position-y: 50%;
      margin-right: 8px;
    }

    & > img {
      margin-right: 8px;
      width: 18px;
    }

    & > i {
      /* color: $color-primary-turquiose; */
      color: $color-primary-darkblue;
      /* color: $color-secondary-green; */
      margin-right: 8px;
    }
  }
}

.subpage-card {
  position: absolute;
  // top: -50px;
  top: 0;
  padding: 40px 60px;
  transform: translateY(-50%);
  z-index: 50;

  h1 {
    display: block;
    font-size: 32px;
    font-weight: 500;
    line-height: 1.5;
    // letter-spacing: 0.025em;
    // margin-bottom: 32px;
  }
}

.subpage-card__footer {
  // position: absolute;
  // bottom: 16px;
  font-size: 0.9em;
}
</style>
