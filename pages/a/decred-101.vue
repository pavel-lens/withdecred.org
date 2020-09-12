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
        <el-main class="article mt-20 mb-6">
          <el-row :gutter="24" type="flex">
            <el-col :lg="16" :xs="24">
              <h1 class="article--title">Decred 101 - Start here</h1>

              <h2>Decred is Sound Money - This is El Captain edit</h2>
              <p>
                To understand "sound" (not able to be manipulated) money, it is
                first important to understand the history of money and money as
                a funtion of its characteristics. For the purpose of brevity we
                will not detail money's history and focus more on the
                characteristics of money and what makes Decred Sound Money. For
                a more in depth overview of the history of money, we recommend
                <a
                  href="https://www.investopedia.com/articles/07/roots_of_money.asp"
                  target="_blank" class="underline" >Investopedia's "The History
                  of Money"</a>.
              </p>

              <p>
                Money has 3 specific functions
                <ol class="mt-2">
                  <li>Store of Value</li>
                  <li>Unit of Measurement</li>
                  <li>Medium of Exchange</li>
                </ol>
              </p>

              <p>
                Gold is currently the de facto global store of value and has
                withstood the test of time as an investment vehicle and currency
                for over 3,000 years. Unlike USD, gold cannot be effortlessly
                printed and is limited in supply - there is only so much gold to
                be mined on earth (until Elon Musk sends his rockets and mining
                equipment to space to mine the gold in the asteroids circling
                earth). Gold also requires serious man-power and mining
                equipment to obtain. Given its difficulty to obtain and scarcity
                by nature, gold supply is relatively sound.
              </p>

              <p>
                Paper money or "fiat" currency (dollars, euros, etc.) is the de
                facto global medium of exchange.
              </p>

              <p>
                Fiat is government-issued legal tender (dollars, euros, etc.)
                whose value is based on supply and demand and the stability of
                the issuing government. Fiat money is controlled by banks, who
                create new money as credit and have the keys to control the
                money supply. The money supply is controlled to target specific
                economic conditions, usually including a degree of inflation in
                prices. Essentially, anyone who is not benefiting directly from
                the creation of the new money is losing value.
              </p>

              <div class="image my-5">
                <img src="@/assets/articles/dollar-purchasing-power.jpg" />
              </div>

              <p>
                What if there were a way to take the sound money qualities of
                gold, add the internet and mathematics, and satisfy all the
                money characteristics listed above. With Bitcoin, Satoshi
                Nakamoto discovered a way to maintain a distributed ledger for
                recording transactions without relying on any specific
                (centralized) authority to enforce the rules. By gamifying the
                process for adding new transactions to this "blockchain", and
                making this role "permissionless" (anyone with the hardware can
                do it) the network's miners and nodes can effectively ensure
                that everyone follows the rules - as long as most of the
                entities which participate in creating the blockchain are
                honest.
              </p>

              <p>
                Decred is a blockchain-based cryptocurrency like Bitcoin, but
                focuses more strongly on community input, open governance and
                sustainable funding for development. It is money designed to be
                predictable and scarce. No one person or centralized group has
                the power to print DCR out of thin air and there will never be
                more than 21 million DCR.
                <span class="underline">Decred is sound money.</span>
              </p>

              <!-- <el-alert type="warning" :closable="false" class="mt-3">
                <div slot="title" class="m--flex">
                  <i class="el-alert__icon el-icon-warning mr-2"></i>
                  Money sitting in your bank account continuously loses value
                </div>
                <div>
                  Your money is losing value! It's inevitable! With banks creating
				  new dollars and euros as loans every day, the value (purchasing power) of your savings is
				  decreasing at a rate depending on the rate at which the money supply is increased. How much
                  would you be able to purchase for $100 USD now vs. 15
                  years ago?

                </div>
              </el-alert> -->

              <BlockHint>
                <strong
                  >Money sitting in your bank account continuously loses
                  value</strong
                >
                <p>
                  Your money is losing value! It's inevitable! With fiat money
                  printing, the value (purchasing power) of your savings is
                  decreasing at a rate consistent with the rate at which the
                  money supply is increased. How much would you be able to
                  purchase for $100 USD now vs. 15 years ago? Refer back to the
                  money timeline above for an illustrative view.
                </p>
              </BlockHint>

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
                  is based on fact and reason.
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
                Join the Decred community on
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
                Network security is the foundation of any financial system.
                Agreement on transactions and account balances, also known as
                consensus, is vital to confidence in the network and currency.
                As cryptocurrencies are quite new, it takes time for people to
                develop confidence that they are secure and stable, and their
                resistence to various attack vectors is scrutinised in detail by
                potential investors and attackers.
              </p>
              <p>
                Decred uses a hybrid system:
              </p>
              <ul>
                <li>a Proof-of-Work (PoW) mining system as Bitcoin has</li>
                <li>
                  a Proof-of-Stake (PoS) system to approve blocks produced by
                  PoW miners
                </li>
              </ul>

              <p>
                PoS ensures that a small group of miners cannot dominate the
                flow of transactions or make changes to Decred without the
                approval of the Decred stakeholder community.
              </p>

              <p>
                Decred employs a combination of PoW and PoS to leverage the best
                of both systems, mitigate their weaknesses, and deliver a
                layered consensus mechanism that makes it far more secure than
                other cryptocurrencies.
              </p>

              <BlockHint icon="c-scale-to-original">
                Decred uses conventional PoW with a BLAKE-256 hash algorithm,
                and it is mined exclusively by ASICs.
                <a href="http://withdecred.org/mining" target="_blank"
                  >Learn more about DCR mining.</a
                >
              </BlockHint>

              <p>
                As part of Decred's PoS system, Decred Stakeholders lock their
                funds for a pseudorandom period of time (average: ~28 days;
                minimum: 1 day; maximum: 142 days) to purchase tickets in what
                is effectively a lottery. These tickets are added to a pool of
                roughly 41,000 tickets. Each block (~5 minutes), five tickets
                are pseudorandomly selected to validate the Proof-of-Work
                transactions from a previously mined block. If at least 3 of 5
                of the chosen tickets approve the block from the miner, the
                miner’s reward is approved and the block is added to the
                blockchain. Ticket holders (Stakeholders) are also rewarded for
                verifying the PoW process.
              </p>

              <p>
                However, if the mined block is rejected by the PoS system, the
                transactions are rejected and a miner does not get their reward.
                This prevents miners from misbehaving as they would waste
                precious electricity and hardware resources if they continue to
                produce malicious blocks.
                <span class="underline"
                  > PoS Stakeholders are rewarded for securing the
                  blockchain. </span
                >
              </p>

              <BlockHint>
                Decred's
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
            <el-col :lg="8" :xs="24">
              <div v-sticky>
                <Tweet id="1120736949067833345" />
                <div class="commentary">
                  <i>
                    Josh Rager (80k+ followers), a successful crypto trader,
                    confesses that $DCR is one of the crypto coins he's
                    investing in long-term.
                  </i>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="24" type="flex" class="mt-5">
            <el-col :lg="16" :xs="24">
              <h2>Decred is evolving</h2>
              <p>
                Stakeholders agree on and enforce the blockchain’s consensus
                rules, they set a course for future development together, and
                can make use of a development fund which receives 10% of each
                block's reward. Decred’s blockchain is similar to Bitcoin’s, but
                with major improvements to the funding model as well as
                transparent and inclusive
                <a
                  href="https://docs.decred.org/governance/overview/"
                  target="_blank"
                  class="underline"
                  >governance</a
                >
                baked into the protocol. If you hold Bitcoin, but you don't like
                how the protocol is evolving (or is not evolving), you can't do
                much about it. In Decred, people owning Decred can actively
                participate in "governance" and actively steer the path of the
                project.
              </p>

              <p>
                To align incentives, block rewards are split between
                Proof-of-Work (PoW) miners, Proof-of-Stake (PoS) stakeholders
                and the Decred Treasury. Decred's Treasury is used to fund
                continuous project development.
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
                timestamps and signatures to anchor all activity related to the
                submission, discussion, and voting for proposals. Once a
                proposal is approved by Stakeholders, the proposal author is
                authorized to begin work, knowing their efforts are supported by
                the community and financed by the Treasury.
              </p>

              <BlockHint icon="mic">
                Have an idea to make Decred better? Speak your mind on the
                social media platforms mentioned above and write a Politeia
                proposal to seek funding!
              </BlockHint>

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
            <el-col :lg="8" :xs="24">
              <div v-sticky>
                <Tweet id="1228071422574157830" />
                <div class="commentary">
                  <i>
                    Chris Burniske (125k+ followers) from PlaceholderVC
                    commenting that despite the recent economic crisis, Decred
                    continues to build at its own pace.
                  </i>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :gutter="24" :lg="16" :xs="24">
              <NavButtonGroup class="mt-5">
                <NavButton prependIcon="back" @click="$router.push('/')">
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Homepage
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
