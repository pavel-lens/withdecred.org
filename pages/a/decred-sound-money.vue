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
        <el-main class="article mt-50 mb-6">
          <el-row :gutter="24">
            <el-col :lg="16">
              <h1 class="article--title">Decred & Sound Money</h1>

              <h2>Decred is Sound Money</h2>
              <p>
                DCR follows in the footsteps of BTC with a fixed limit of 21
                million units, with issuance starting high before decreasing and
                finally stopping. Decred's issuance decreases on the same kind
                of timeframe as Bitcoin's, but with regular 1% drops as opposed
                to 50% drops every few years.
              </p>

              <p>
                What DCR adds is a concrete say in the decision-making about how
                the network and asset evolves - for people who hold and stake
                DCR. In exchange for time-locking DCR, holders get to vote on
                matters which are open for decision-making, contribute to
                enhancing the network's security, and get rewarded for doing so.
              </p>

              <h2>Executing a Fair Launch</h2>

              <p>
                Cryptocurrencies tend to give early adopters quite a few coins
                (or credits in DCR's case), which incentivizes them to spread
                the word about this new currency which they're holding and would
                like to be able to sell or trade. The founders or developers who
                came up with the idea and brought it to production are the
                earliest adopters of all.
              </p>

              <p>
                In Bitcoin's time the early adopters benefited from the
                obscurity of the concept, mining significant amounts of BTC on
                home computers. By 2016 when Decred launched there were already
                professional mining companies which put effort into identifying
                promising new coins and mining their high issuance periods.
              </p>

              <p>
                So, the founders included a pre-mine, split between 4% of
                issuance going to the founders themselves, plus another 4% to
                2,972 people who signed up for an airdrop promotion and each
                received 282.63 DCR.
              </p>

              <BlockHint>
                Full details of the initial coins can be viewed on the
                <a
                  href="https://dcrdata.decred.org/tx/5e29cdb355b3fc7e76c98a9983cd44324b3efdd7815c866e33f6c72292cb8be6"
                  target="_blank"
                  >block explorer</a
                >
                .
              </BlockHint>
            </el-col>
            <el-col :lg="6">
              <StakeyCard type="explorer" />
            </el-col>
          </el-row>

          <el-row :gutter="24" class="mt-5">
            <el-col :span="16">
              <h2>Predictable Issuance</h2>
              <p>
                Decred's issuance is predictable. New blocks are generated every
                ~5 minutes, and each one creates new DCR. This block rewards are
                split three ways:
              </p>

              <ul>
                <li>60% goes to the PoW miner who found the block</li>
                <li>
                  30% goes to the PoS voters on that block (6% to each of the 5
                  voters)
                </li>
                <li>10% goes towards the Decred Treasury</li>
              </ul>

              <BlockHint>
                Power must be diluted. Decred's PoS reward is designed to
                encourage people to stake their coins and help secure the
                network, but not allow PoS voters to gain share over time simply
                by staking.
              </BlockHint>

              <p>
                The hard cap with no “tail emissions” beyond the scheduled ~21M
                is designed to provide certainty in the monetary policy and
                prevent existing holders from being diluted by future
                manipulation of the monetary supply.
              </p>

              <p>
                If a block includes less than 5 PoS votes there will be a
                fraction of the block reward which is not allocated to anybody.
                As a result, it is only possible to calculate an upper limit for
                the total number of decred which will ever be created.
              </p>

              <BlockHint>
                The last block reward will be created in September 2120. The
                upper limit on the total supply of Decred is 20,999,999.99800912
                coins.
              </BlockHint>

              <p>
                The following chart shows an estimate of the coin supply growth
                over time:
              </p>

              <div class="image my-3">
                <img src="@/assets/articles/decred-supply.png" />
              </div>

              <p>
                Find out how Decred's Hybrid Consensus system makes it secure,
                adaptable and sustainable in the next article.
              </p>
            </el-col>

            <el-col :lg="6" class="flex">
              <!-- <StakeyCard /> -->
            </el-col>
          </el-row>

          <el-row>
            <el-col :gutter="24" :span="16">
              <NavButtonGroup class="mt-5">
                <NavButton
                  prependIcon="back"
                  @click="$router.push('/a/decred-101')"
                >
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Decred & Sound money
                  </template>
                  Previous article
                </NavButton>
                <NavButton
                  appendIcon="right"
                  @click="$router.push('/a/decred-hybrid-consensus')"
                >
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Hybrid consensus
                  </template>
                  Next article
                </NavButton>
              </NavButtonGroup>
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
@import '@/assets/_global';

.background {
  // background-image: url('../assets/images/bg-waves.png');
  background-image: url('../../assets/images/bg-waves.webp');
  background-position-y: -50px;
}

.background--alt {
  background-color: $color-primary-white;
  color: $color-secondary-black;
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
