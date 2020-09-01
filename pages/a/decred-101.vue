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
        <!-- <el-card class="subpage-card">
          <h1 class="mb-2">
            <i class="el-icon-magic-stick" /> Decred 101 - Start here
          </h1>
          <p>
            Decred & <span class="underline">Sound money</span>. Learn why
            Decred is secure, adaptable and sustainable.
          </p>
          <div class="subpage-card__footer mt-2">
            <i class="el-icon-timer mr-1" /> 5 minutes
          </div>
        </el-card> -->
        <el-main class="article mt-50 mb-6">
          <el-row :gutter="24" type="flex">
            <el-col :lg="16">
              <h1 class="article--title">Decred 101 - Start here</h1>

              <h2>Decred is Sound Money</h2>
              <p>
                In current times, traditional paper money or "fiat money" is not
                backed by anything and central banks are allowed to print new
                money out of thin air. When doing it, they essentially tax
                everyone who is holding their money to transfer part of the
                value to the freshly printed money.
              </p>

              <div class="image my-5">
                <img src="@/assets/articles/dollar-purchasing-power.jpg" />
              </div>

              <p>
                With the Internet, people can easily form networks, and with
                Bitcoin we discovered that by using a distributed ledger which
                everyone can download and access, and by gamifying the process
                for adding new transactions to this "blockchain" the network can
                effectively ensure that everyone follows the rules - as long as
                most of the entities which participate in creating the
                blockchain are honest.
              </p>

              <p>
                Decred is a blockchain-based cryptocurrency like Bitcoin, but
                with a strong focus on community input, open governance and
                sustainable funding for development. It is money designed to be
                predictable and scarce. Nobody has the power to print DCR out of
                thin air and there will never be more than 21 million DCR.
              </p>

              <!-- <el-alert type="warning" :closable="false" class="mt-3">
                <div slot="title" class="m--flex">
                  <i class="el-alert__icon el-icon-warning mr-2"></i>
                  Money in your bank account continuously lose value
                </div>
                <div>
                  Your money is losing value! It's inevitable, with fiat money
                  printing, more dollars or euros devalue your savings. How much
                  would you be able to purchase for $100 USD now and say, 15
                  years ago?

                  It's only inevitable, that all this money printing, simply
                  more dollars (or euros) devalue your savings.
                  <div class="mt-2"><strong>Think back</strong></div>
                  How much would you be able to purchase for $100 USD now and
                  say, 15 years ago?
                </div>
              </el-alert> -->

              <BlockHint>
                <strong
                  >Money in your bank account continuously lose value</strong
                >
                <p>
                  Your money is losing value! It's inevitable, with fiat money
                  printing, more dollars or euros devalue your savings. How much
                  would you be able to purchase for $100 USD now and say, 15
                  years ago?
                </p>
              </BlockHint>
            </el-col>
            <el-col :lg="8">
              <div v-sticky>
                <!-- <Tweet id="1228071422574157830" /> -->
                <Tweet id="1297258616790155264" />
                <div class="commentary">
                  <i>
                    CryptoWhale (30k+ followers), a popular trader based in
                    United States, commenting on erroding value of US dollar.
                  </i>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="24" type="flex" class="mt-5">
            <el-col :span="16">
              <h2>Decred is a community</h2>
              <p>
                The Decred project is led by its community of stakeholders and
                contractors following six simple principles:
              </p>

              <ul>
                <li>
                  Free and open-source software: All software developed as part
                  of Decred shall be free and open-source software.
                </li>
                <li>
                  Free speech and consideration: Everyone has the right to
                  communicate opinions and ideas without fear of censorship.
                  Consideration shall be given to all constructive speech that
                  is based in fact and reason.
                </li>
                <li>
                  Multi-stakeholder inclusivity: Inclusivity represents a
                  multi-stakeholder system and an active effort shall be
                  maintained to include a diverse set of views and users.
                </li>
                <li>
                  Incremental privacy and security: Privacy and security
                  technology shall be implemented on a continuing and
                  incremental basis, both proactively and on-demand in response
                  to attacks.
                </li>
                <li>
                  <span class="underline">Fixed finite supply:</span> Issuance
                  is finite and the total issuance shall not exceed
                  20,999,999.99800912 DCR
                </li>
                <li>
                  Universal fungibility: Universal
                  <a
                    href="https://en.wikipedia.org/wiki/Fungibility"
                    target="_blank"
                    class="underline"
                    >fungibility</a
                  >
                  is fundamental to Decred being a store of value and attacks
                  against it shall be actively monitored and countermeasures
                  pursued as necessary.
                </li>
              </ul>

              <BlockHint>
                Fungibility refers to the truth that
                <span class="underline">all DCR have the same value</span>,
                regardless of who owns them or their history.
              </BlockHint>

              <p>
                Being a decentralized community means there is no official
                Decred channel. People hang out, discuss and coordinate using
                different channels and social media platforms.
              </p>

              <BlockHint icon="chat-dot-square">
                Join the Decred community at
                <a href="https://discordapp.com/invite/GJ2GXfz" target="_blank"
                  >Discord</a
                >, <a href="https://t.me/Decred" target="_blank">Telegram</a>,
                <a href="https://www.reddit.com/r/decred/" target="_blank"
                  >Reddit</a
                >
                and
                <a
                  href="https://docs.decred.org/getting-started/joining-matrix-channels/"
                  target="_blank"
                  >Matrix</a
                >.
              </BlockHint>

              <h2>Decred is secure</h2>
              <p>
                Network security is the foundation to any financial system.
                Agreement on transactions and account balances, also known as
                consensus, is vital to confidence in the currency and can be
                measured by both longevity and analysis of its resistance to
                various attack vectors.
              </p>
              <p>
                Decred uses a hybrid system:
              </p>
              <ul>
                <li>a Proof-of-Work (PoW) mining system as Bitcoin has</li>
                <li>
                  a Proof-of-Stake (PoS) system to validate blocks produced by
                  PoW miners
                </li>
              </ul>

              <p>
                PoS ensures that a small group of miners cannot dominate the
                flow of transactions or make changes to Decred without the
                approval of the Decred stakeholders community.
              </p>

              <p>
                Decred employs a combination of PoW and PoS to yield the best of
                both systems, mitigate their weaknesses, and deliver a layered
                consensus mechanism that makes it far more secure than other
                cryptocurrencies.
              </p>

              <BlockHint icon="c-scale-to-original">
                Decred uses conventional PoW with a BLAKE-256 hash algorithm,
                and it is mined exclusively by ASICs.
                <a href="http://withdecred.org/mining" target="_blank"
                  >Learn more about DCR mining.</a
                >
              </BlockHint>

              <p>
                Decred stakeholders lock their funds for a certain time to
                purchase tickets in a "lottery". These tickets are added to a
                pool of roughly 41,000 tickets. Five tickets are pseudorandomly
                selected to validate the Proof-of-Work transactions from a
                previously mined block. If at least 3 of 5 of the chosen tickets
                approve the block from the miner, the miner’s reward is approved
                and the block is added to the blockchain.
              </p>

              <p>
                However, if the mined block is rejected by the PoS system, the
                block is rejected and a new block has to be mined. This prevents
                miners from misbehaving as they would waste precious electricity
                and hardware resources if they continue to produce malicious
                blocks.
              </p>

              <BlockHint>
                Its
                <span class="underline"
                  >PoS system makes it 41X more costly to attack</span
                >
                than pure PoW cryptocurrency networks like Bitcoin. Check out
                how much it would cost to attack the Decred network with the
                interactive
                <a
                  href="https://dcrdata.decred.org/attack-cost"
                  target="_blank"
                  class="underline"
                  >Attack-Cost calculator</a
                >
                at
                <a href="https://dcrdata.org" target="_blank">dcrdata.org</a>.
              </BlockHint>
            </el-col>
            <el-col :span="8">
              <div v-sticky>
                <Tweet id="1120736949067833345" />
                <div class="commentary">
                  <i>
                    Josh Rager (80k+ followers), a successful crypto trader,
                    confesses that $DCR is one of the crypto coins he's
                    investing into for long-term.
                  </i>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="24" type="flex" class="mt-5">
            <el-col :span="16">
              <h2>Decred is evolving</h2>
              <p>
                Stakeholders agree on and enforce the blockchain’s consensus
                rules, they set a course for future development together, and
                can make use of a development fund which receives 10% of each
                block's reward. Decred’s blockchain is similar to Bitcoin’s, but
                with major improvements of transparent and inclusive
                <a
                  href="https://docs.decred.org/governance/overview/"
                  target="_blank"
                  class="underline"
                  >governance</a
                >
                baked into the protocol.
              </p>

              <p>
                To align incentives, block rewards are split between
                Proof-of-Work (PoW) miners, stakeholders and the Decred
                Treasury. Decred Treasury is used to fund continuous project
                development.
              </p>

              <p>
                The
                <a
                  href="https://proposals.decred.org/"
                  target="_blank"
                  class="underline"
                  >Politeia Proposal System</a
                >
                plays a vital role within the Decred DAO (Decentralized
                Autonomous Organization), empowering stakeholders to manage
                Decredʼs Treasury expenditures and policies.
              </p>

              <p>
                Proposals to date include new software features, marketing
                expenditures, partner integrations, bug bounties and further
                research. Politeia is a governance platform that uses on-chain
                timestamps and signatures to record all activity related to the
                submission, discussion about and voting for proposals. Once a
                proposal is approved by Stakeholders, the proposal author is
                authorized to begin work, knowing their efforts are supported by
                the community and financed by the Treasury.
              </p>

              <BlockHint icon="mic">
                Have an idea to make Decred better? Speak your mind at Matrix
                and write a Politeia proposal to seek funding!
              </BlockHint>
            </el-col>
            <el-col :lg="8">
              <div v-sticky>
                <Tweet id="1228071422574157830" />
                <div class="commentary">
                  <i>
                    Chris Burniske (125k+ followers) from PlaceholderVC
                    commenting that despite of recent economic crisis, Decred
                    continues to build at its own pace.
                  </i>
                </div>
              </div>
            </el-col>
          </el-row>

          <!-- <h2 class="mt-5">Summary</h2>
          <el-row :gutter="24">
            <el-col :span="16">
              <p>Let's summarize the most important information about Decred</p>
              <ul class="summary-checklist mt-3">
                <li>
                  <i class="el-icon-success success" /> Term "Sound money"
                  represent money which preserve value. Decred is Sound money.
                </li>
                <li>
                  <i class="el-icon-success success" /> Fiat money as USD, EUR
                  or GBP devalue over time and lose value
                </li>
                <li>
                  <i class="el-icon-success success" /> Decred network is ±40x
                  more secure thanks to its Proof-of-Stake layer
                </li>
                <li>
                  <i class="el-icon-success success" /> Decred cannot fork,
                  process of doing protocol upgrades is smooth thanks to Decred
                  governance
                </li>
              </ul>
            </el-col>
          </el-row> -->

          <el-row>
            <el-col :gutter="24" :span="16">
              <NavButtonGroup class="mt-5">
                <NavButton prependIcon="back" @click="$router.push('/')">
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Homepage
                  </template>
                  Previous article
                </NavButton>
                <NavButton
                  appendIcon="right"
                  @click="$router.push('/a/decred-sound-money')"
                >
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Decred & Sound money
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
// import Tweet from '@/components/Tweet/index.vue'
import { Tweet } from 'vue-tweet-embed'
// import Tweet from 'vue-tweet-embed/dist/tweet/index.js'
// const Tweet = require('vue-tweet-embed/dist/tweet/index.js')

export default Vue.extend({
  components: {
    BlockHint,
    ContentNav,
    NavButton,
    NavButtonGroup,
    StakeyCard,
    Tweet,
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

ul.summary-checklist {
  list-style: none;
  padding-left: 16px;
  li {
    display: flex;
    align-items: flex-start;

    & > i {
      color: #2ed6a1;
      margin-top: 4px;
      margin-right: 8px;
    }
  }
}
</style>
