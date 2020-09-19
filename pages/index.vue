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
          <el-col
            :xl="{ span: 24, offset: 0 }"
            :lg="{ span: 16, offset: 4 }"
            :sm="24"
            :xs="24"
          >
            <el-card class="card">
              <div slot="header" class="m--flex">
                <h3 class="card-title">
                  <i class="el-icon-magic-stick" />
                  Preface - building upon Bitcoin's strengths
                </h3>
                <!-- <div class="ml-auto">
                  <i class="el-icon-check card--is-done" />
                </div> -->
              </div>
              <!-- <p>
                Decred is a blockchain-based cryptocurrency with a strong focus
                on community input, inclusive governance, and sustainable
                funding for development. Utilizing a superior hybrid
                Proof-of-Work (PoW) and Proof-of-Stake (PoS) consensus model,
                Decred ensure that a small group cannot dominate the flow of
                transactions or make changes to Decred without the approval of
                the community.
              </p> -->
              <!-- <div class="hr my-3" /> -->
              <p>
                Decred builds on the strengths of Bitcoin, and improves on areas
                where Bitcoin is weak. Several members of the Decred team (then
                Conformal Systems, later Company 0; 2013 - 2016) were originally
                part of the Bitcoin development community and most notably built
                the 2nd most used Bitcoin node implementation: Btcsuite/btcd.
                More simply, the Decred team developed Bitcoin software which
                was and is still
                <span class="underline"
                  >used to transact $BTC worth hundreds of millions of
                  $USD</span
                >.
              </p>
              <p>
                Participating in Bitcoin blockchain development first-hand, they
                identified the weaknesses in Bitcoin protocol and decided to
                build Decred to address and improve upon Bitcoin.
              </p>
              <p>
                In 2014, Bitcoin was 5 years old and still relatively under the
                radar. In Feb 2021, Decred's mainnet will turn 5 years old. Like
                Bitcoin in 2014, most people have yet to hear of Decred. Most
                people didn't understand Bitcoin then, or they simply didn't pay
                attention. We believe Decred is currently in a similar phase as
                early Bitcoin.
              </p>
              <p>
                Decred is in the minority of projects that
                <span class="underline">consistently delivers on promises</span
                >, is built to last, and is positioned to take the main stage as
                a powerhouse in the cryptocurrency space.

                <!-- We are sold on Decred
                and this community driven website and initiative is to provide
                readers and believers with the fundamental knowledge, resources
                and support to simplify what we know to be a complex but
                extremely valuable project:
                <span class="underline">The Decred Project</span>. -->
              </p>
              <p>
                Here is your opportunity to learn about Decred while it's still
                undiscovered by the mass market.
              </p>
              <p>
                Are you
                <a href="" target="_blank" class="underline">@withdecred</a>?
                Dive right into Decred 101 by clicking the “continue” button
                below.
              </p>

              <div class="mt-5 mb-2">
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

        <el-row>
          <el-col :xl="{ span: 24, offset: 0 }" :lg="{ span: 16, offset: 4 }">
            <el-row :gutter="24">
              <el-col :lg="12" :sm="12" :xs="24">
                <el-card class="card">
                  <div slot="header" class="m--flex">
                    <h3 class="card-title">
                      <i class="el-icon-connection" />
                      Hybrid Consensus
                    </h3>
                    <div
                      v-if="!isArticleHybridConsensusUnlocked"
                      class="ml-auto"
                    >
                      <i class="el-icon-lock" />
                    </div>
                  </div>
                  Learn how Decred's 2-level consensus is up to 41x more secure
                  than traditional Proof-of-Work blockchains such as Bitcoin or
                  Ethereum.
                  <div class="mt-3 mb-4">
                    <el-tooltip
                      v-if="!isArticleHybridConsensusUnlocked"
                      effect="dark"
                      content='Article will unlock after reading "Decred 101" article'
                      placement="top"
                    >
                      <span>
                        <el-button disabled size="medium" type="primary">
                          <i class="el-icon-lock mr-1"></i> Article locked
                        </el-button>
                      </span>
                    </el-tooltip>

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

              <el-col :lg="12" :sm="12" :xs="24">
                <el-card class="card">
                  <div slot="header" class="m--flex">
                    <h3>
                      <i class="el-icon-data-analysis" />
                      Staking &amp; Governance
                    </h3>
                    <div
                      v-if="!isArticleStakingAndGovernanceUnlocked"
                      class="ml-auto"
                    >
                      <i class="el-icon-lock" />
                    </div>
                  </div>
                  Learn how you can stake $DCR, earn 8% per anum and vote in
                  Decred's governance. Unlike Bitcoin, you can influence how the
                  protocol will evolve.
                  <div class="mt-3 mb-4">
                    <el-tooltip
                      v-if="!isArticleStakingAndGovernanceUnlocked"
                      effect="dark"
                      content='Article will unlock after reading "Hybrid Consensus" article'
                      placement="top"
                    >
                      <span>
                        <el-button disabled size="medium" type="primary">
                          <i class="el-icon-lock mr-1"></i> Article locked
                        </el-button>
                      </span>
                    </el-tooltip>

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
            </el-row>
            <el-row :gutter="24">
              <el-col :lg="12" :sm="12" :xs="24">
                <el-card class="card">
                  <div slot="header" class="m--flex">
                    <h3 class="card-title">
                      <i class="el-icon-magic-stick" />
                      What's next (future)
                    </h3>
                    <div v-if="!isArticleWhatsNextUnlocked" class="ml-auto">
                      <i class="el-icon-lock" />
                    </div>
                  </div>
                  Explore exciting new things coming - Decentralized Exchange,
                  Lightning network and unique privacy implementation
                  Coinshuffle++.
                  <div class="mt-3 mb-4">
                    <el-tooltip
                      v-if="!isArticleWhatsNextUnlocked"
                      effect="dark"
                      content='Article will unlock after reading "Staking &amp; Governance" article'
                      placement="top"
                    >
                      <span>
                        <el-button disabled size="medium" type="primary">
                          <i class="el-icon-lock mr-1"></i> Article locked
                        </el-button>
                      </span>
                    </el-tooltip>

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

.follow-us {
  color: $font-color-light;

  a,
  a:hover,
  a:visited,
  a:active {
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
