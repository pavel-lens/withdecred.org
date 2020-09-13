<template>
  <div class="background">
    <el-container class="container text--align-center">
      <el-main class="mb-5">
        <el-row>
          <div>
            <img
              src="@/assets/logo/decred-logo.png"
              alt="Decred logo"
              class="nav-logo mb-0"
            />
            <div class="title">withDecred<span class="dot">.</span>org</div>
            <div class="subtitle">Stakeholder-Governed Sound Money</div>
          </div>
        </el-row>

        <el-row :gutter="24">
          <el-col :lg="24" :sm="24" :xs="24">
            <el-card class="card">
              <div slot="header" class="m--flex">
                <h3 class="card-title">
                  <i class="el-icon-magic-stick" />
                  Preface - Decred, cryptocurrency under the radar
                </h3>
                <!-- <div class="ml-auto">
                  <i class="el-icon-check card--is-done" />
                </div> -->
              </div>
              <p>
                Cryptocurrencies can feel overwhelming with scams and jargon.
                DeFi? Yield Farming? Governance? ICOmania? All of these
                buzzwords can make it hard to pick out the diamonds in the
                rough. We’re going to cut through the clutter and help you get
                acclimated - <strong>@withDecred</strong>.
              </p>
              <!-- <div class="hr my-3" /> -->
              <p>
                After 2.5 years of "cold and bloody" bear market, crypto finally
                entered a bull market.
              </p>
              <p>
                Unfortunately, even in bull market, many people lose money? How
                is it possible?
              </p>
              <p>
                After seeing random tokens doing 50x or 100x returns in the
                matter of few weeks, people throw money on other random,
                Twitter-hyped coins such as $YAM, $YAM2, $SUSHI, $FARM, $AMPL,
                $BASED and likes. Most of them plummet 95% down after the crowd
                buys them and people end with huge loses. Most of these coins
                are only ERC-20 tokens created on top of Ethereum and bring
                little to no innovation
              </p>
              <p>
                Let's explore Decred, a cryptocurrency which is still under the
                radar of most people.
              </p>
              <p>
                You will discover a deep "rabbit hole" of Decred in series of 4
                articles, but before we start, let's look at what are the
                trending topics of crypto in 2020:
              </p>
              <ul>
                <li>DEX (Decentralized Exchanges, eg. Uniswap, Kyberswap)</li>
                <li>Governance ($YFI, $CRV, $KNC, ..)</li>
                <li>
                  Scaling (ETH2.0, SKALE network, Loopring, BTC Lighting
                  network)
                </li>
                <li>Staking (ETH2.0, $YFI, Dash, Cosmos ..)</li>
                <li>
                  Privacy (mixers, zero-knowledge proofs, bullet-proofs;
                  high-level cryptography)
                </li>
              </ul>

              <p>
                These are the most important trends in crypto markets in 2020
                and many new projects are trying to leverage these trends to
                squeeze money out of the market by creating a new website in "2
                days" and marketing it to the world like "The Next Big Thing".
              </p>

              <p>
                Now, let's explore how Decred.
              </p>

              <div class="mt-3 mb-2">
                <nuxt-link to="/a/decred-101">
                  <el-button type="primary" class="huge-cta">
                    Continue reading Decred 101 <i class="el-icon-right"></i>
                  </el-button>
                </nuxt-link>
              </div>
              <!-- <div class="card-footer">
                <i class="el-icon-timer mr-1" /> 6 minutes
              </div> -->
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :lg="8" :sm="8" :xs="24">
            <el-card class="card">
              <div slot="header" class="m--flex">
                <h3 class="card-title">
                  <i class="el-icon-connection" />
                  Hybrid Consensus
                </h3>
                <div class="ml-auto">
                  <i class="el-icon-lock" />
                </div>
              </div>
              Learn how Decred's 2-level consensus is ±41x more secure than
              traditional Proof-of-Work blockchains such as Bitcoin or Ethereum.
              <div class="mt-3 mb-4">
                <el-button
                  v-if="!isArticleHybridConsensusUnlocked"
                  disabled
                  size="medium"
                  type="primary"
                >
                  <i class="el-icon-lock mr-1"></i> Article locked
                </el-button>

                <nuxt-link
                  v-if="isArticleHybridConsensusUnlocked"
                  to="/a/decred-hybrid-consensus"
                >
                  <el-button size="medium" type="primary">
                    Read more <i class="el-icon-right ml-1"></i>
                  </el-button>
                </nuxt-link>
              </div>
              <div class="card-footer">
                <i class="el-icon-timer mr-1" /> 8 minutes
              </div>
            </el-card>
          </el-col>

          <el-col :lg="8" :sm="8" :xs="24">
            <el-card class="card">
              <div slot="header" class="m--flex">
                <h3 class="">
                  <i class="el-icon-data-analysis" />
                  Staking &amp; Governance
                </h3>
                <div class="ml-auto">
                  <i class="el-icon-lock" />
                </div>
              </div>
              Learn how you can stake $DCR, earn 8% per anum and vote in
              Decred's governance. Unlike Bitcoin, you can influence how the
              protocol will evolve.
              <div class="mt-3 mb-4">
                <el-button
                  v-if="!isArticleStakingAndGovernanceUnlocked"
                  disabled
                  size="medium"
                  type="primary"
                >
                  <i class="el-icon-lock mr-1"></i> Article locked
                </el-button>

                <nuxt-link
                  v-if="isArticleStakingAndGovernanceUnlocked"
                  to="/a/decred-staking-and-governance"
                >
                  <el-button size="medium" type="primary">
                    Read more <i class="el-icon-right ml-1"></i>
                  </el-button>
                </nuxt-link>
              </div>
              <div class="card-footer">
                <i class="el-icon-timer mr-1" /> 6 minutes
              </div>
            </el-card>
          </el-col>

          <el-col :lg="8" :sm="8" :xs="24">
            <el-card class="card">
              <div slot="header">
                <h3 class="card-title">
                  <i class="el-icon-magic-stick" />
                  What's next (future)
                </h3>
              </div>
              Explore exciting new things coming - Decentralized Exchange,
              Lightning network and unique privacy implementation Coinshuffle++.
              <div class="mt-3 mb-4">
                <el-button
                  v-if="!isArticleWhatsNextUnlocked"
                  disabled
                  size="medium"
                  type="primary"
                >
                  <i class="el-icon-lock mr-1"></i> Article locked
                </el-button>

                <nuxt-link
                  v-if="isArticleWhatsNextUnlocked"
                  to="/a/decred-whats-next"
                >
                  <el-button size="medium" type="primary">
                    Read more <i class="el-icon-right ml-1"></i>
                  </el-button>
                </nuxt-link>
              </div>
              <div class="card-footer">
                <i class="el-icon-timer mr-1" /> 7 minutes
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
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  layout: 'homepage',

  components: {
    Logo,
  },

  data() {
    return {
      isArticleHybridConsensusUnlocked: false,
      isArticleStakingAndGovernanceUnlocked: false,
      isArticleWhatsNextUnlocked: false,
    }
  },

  mounted() {
    this.isArticleHybridConsensusUnlocked = Boolean(
      localStorage.getItem('withdecred:article:hybrid-consensus')
    )
    this.isArticleStakingAndGovernanceUnlocked = Boolean(
      localStorage.getItem('withdecred:article:staking-and-governance')
    )
    this.isArticleWhatsNextUnlocked = Boolean(
      localStorage.getItem('withdecred:article:whats-next')
    )
  },
})
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/images/bg-waves.png');
  background-image: url('../assets/images/bg-waves.webp');
  background-position-y: -70px;
}

.nav-logo {
  height: 50px;
}

.card {
  position: relative;
  text-align: left;

  &--is-done {
    color: $color-secondary-green;
  }

  p + p {
    margin-top: 12px;
  }

  ul li {
    margin-bottom: 8px;
  }

  .huge-cta {
    padding: 20px 30px;
    font-size: 16px;
    font-weight: 500;
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

  @include media('<=sm') {
    font-size: 48px;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 28px;
  color: $font-color-light;
  margin-bottom: 32px;

  @include media('<=sm') {
    font-size: 22px;
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
