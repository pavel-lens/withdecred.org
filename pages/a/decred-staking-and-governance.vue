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
              <h1 class="article--title">Staking & Governance</h1>

              <NavButtonGroup class="mt-5">
                <NavButton
                  prependIcon="back"
                  @click="$router.push('/a/decred-hybrid-consensus')"
                >
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Hybrid consensus
                  </template>
                  Previous article
                </NavButton>
                <NavButton
                  appendIcon="right"
                  @click="$router.push('/a/decred-whats-next')"
                >
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> What's next (DEX, LN and
                    Privacy)
                  </template>
                  Next article
                </NavButton>
              </NavButtonGroup>

              <div class="hr mt-5 mb-5" />

              <p>
                In Bitcoin, miners hold the power and decisions are made
                off-chain. Decred intends to balance the decision making power
                between miners and holders. Instead of having miners and core
                developers making the decisions, the opt-in Proof-of-Stake
                voting system allows its users to collectively steer the
                project.
              </p>

              <p>
                Decred’s governance is based on the principle of ticket-holder
                voting. Anybody who holds enough DCR may time-lock their coins
                to purchase tickets, participate in governance and earn rewards
                by helping secure the network.
              </p>

              <p>
                Proposed changes to the system are voted upon, and only
                implemented if the voters approve. Some of the ticket holder
                voting occurs on-chain, and some of it off-chain.
              </p>

              <p>
                Time-locking funds ensures everyone who votes has "skin in the
                game". Those who stake their coins have to sacrifice short-term
                liquidity to gain the ability to participate in the decision
                making process and earn rewards. They must deal with the
                consequences of their votes and, if rational, will vote for what
                they think is best for the network.
              </p>
            </el-col>
            <el-col :lg="6" :xs="24">
              <!-- <StakeyCard type="explorer" /> -->
            </el-col>
          </el-row>

          <el-row :gutter="24" type="flex" class="mt-5">
            <el-col :lg="16" :xs="24">
              <h2>Tickets</h2>
              <p>
                The Proof-of-Stake component of Decred's consensus is based on
                tickets. These are locked up DCR that give their owner voting
                rights in all of Decred's governance systems, from on-chain
                consensus rules voting to Treasury expenditure proposals through
                Politeia.
              </p>

              <p>
                Tickets serve a number of purposes:
              </p>

              <ul>
                <li>
                  Allow stakeholders to vote for or against changes to the
                  Decred blockchain.
                </li>
                <li>
                  Secure the blockchain by validating every new block with at
                  least 3 out of 5 ticket signatures chosen at random.
                </li>
                <li>
                  Allow stakeholders to participate in off-chain voting,
                  including how to spend Treasury funds and amending the Decred
                  Constitution through Politeia, the governance platform.
                </li>
              </ul>

              <BlockHint>
                Tickets are like
                <span class="underline">digital ASIC miners</span>. They provide
                security, generate DCR rewards and are bounded to the network.
              </BlockHint>

              <p>
                In each mined block, five tickets are selected pseudorandomly
                and called to vote on-chain. On-chain voting serves two main
                purposes: validating blocks created by Proof-of-Work (PoW)
                miners and voting on proposed consensus rule changes. After a
                ticket is called to vote, the DCR locked in that ticket is
                unlocked, and if the ticket successfully voted, the user
                receives the PoS reward.
              </p>
              <h2>Consensus Rules</h2>
              <p>
                Decred has a built-in an upgrade mechanism which allows
                consensus rules to be changed across the entire network in a
                coordinated fashion. This enables the rules to be changed
                predictably and, most importantly, without fracturing the
                network. It allows Proof-of-Stake voters to exercise sovereignty
                over whether or not to accept the proposed changes.
              </p>

              <p>
                This on-chain voting mechanism allows Stakeholders to
                <a
                  href="https://explorer.dcrdata.org/agenda/sdiffalgorithm"
                  target="_blank"
                  class="underline"
                  >change the Proof-of-Stake difficulty algorithm</a
                >, upgrade the network to
                <a
                  href="https://explorer.dcrdata.org/agenda/lnsupport"
                  target="_blank"
                  class="underline"
                  >support Lightning Network</a
                >
                and
                <a
                  href="https://explorer.dcrdata.org/agenda/headercommitments"
                  target="_blank"
                  class="underline"
                  >improve Simple Payment Verification (SPV) security</a
                >
                by introducing new block headers. Decred Change Proposals go
                through a formal process ensuring consensus is reached and that
                new rules are activated. It is a major improvement from
                Bitcoin's BIPs which may be discussed for long periods of time
                without a formal procedure.
                <!-- https://github.com/bitcoin/bitcoin/blob/master/doc/bips.md -->
              </p>

              <div class="image my-3">
                <img src="@/assets/articles/voting-cycle.png" />
              </div>

              <h2>Block Voting</h2>

              <p>
                Tickets vote to approve or reject the previous block of
                transactions created by a PoW miner. At least three out of five
                tickets called to vote must vote for the block to be mined. If
                the majority of votes are rejecting the previous block, the
                miner who produced that block loses their block reward, and the
                transactions from that block are returned to the mempool. This
                power provides a check against malicious PoW miner behavior
                (e.g. mining empty blocks), as well as forming the basis of
                <span class="underline">Decred’s fork resistance</span>.
              </p>

              <BlockHint>
                <h4>Decred blockchain can't fork</h4>
                <p>
                  Every fork of Bitcoin sucks value out of the network. Not only
                  capital, but also miners have to decide which fork to support.
                </p>
              </BlockHint>

              <h2>Treasury</h2>

              <p>
                Decred solves project funding by taking 10% of the block reward,
                and putting the usage of those funds up for vote by DCR
                Stakeholders. Stakeholders can decide which projects to fund by
                presenting and discussing proposals in Politeia, the online
                governance platform, and tickets holders can vote on them using
                their wallets.
              </p>

              <div class="image my-4">
                <img src="@/assets/articles/decred-treasury-comparison.jpg" />
              </div>

              <p>
                The Treasury started off as a special DCR address handled by
                Decred Holding Group LLC (DHC), a conventional corporate entity
                that manually executes payments. Security depends on a 3-of-3
                multi-signature wallet held by the core development team, but
                stakeholders have the right to vote on changing the keys.
              </p>

              <p>
                In May 2019, a proposal passed to decentralize the Treasury's
                spending process. The new Treasury code is almost done and soon
                Stakeholders will be able to vote on-chain to activate the new
                rules.
              </p>

              <p>
                The next version of the Treasury will transform it into a
                special account that must follow strict rules:
              </p>

              <ul>
                <li>
                  Every month Politeia generates a Treasury transaction that
                  aggregates all invoices and creates an off-chain transaction
                  that can be verified with the Politea draft key.
                </li>
                <li>
                  The Treasury transaction must be approved by an on-chain vote
                  for 2016 blocks (one week) with a 20% quorum and a 60%
                  approval threshold.
                </li>
                <li>
                  If the Treasury transaction is approved then the contractors
                  can redeem their payouts after it matures. If the Treasury
                  transaction is not approved by the Stakeholders it is not
                  considered a valid transaction and its outputs are not
                  rejected.
                </li>
              </ul>

              <h2>
                Politeia,
                <span class="underline">an inclusive governance system</span>
              </h2>

              <p>
                While Stakeholders tickets are active, they can also participate
                in Politeia proposals, where a particular snapshot of the ticket
                pool is used to decide on direction of the project. These
                decisions include how to spend Treasury funds, amending the
                Decred Constitution, or other policies. Politeia voting is not
                recorded on chain, but it is still backed by cryptographic
                techniques which prevent sibyl attacks and unfair censorship.
              </p>

              <div class="image my-4">
                <img src="@/assets/articles/politeia-preview-2.png" />
                <div class="description">
                  Find more at https://proposals.decred.org
                </div>
              </div>

              <p>
                Some of the most voted Politeia proposals include funding an
                open-source and fee-less
                <a
                  href="https://proposals.decred.org/proposals/417607a"
                  target="_blank"
                  class="underline"
                  >Decentralized Exchange</a
                >, hiring both a
                <a
                  href="https://proposals.decred.org/proposals/27f87171d98b7923a1bd2bee6affed929fa2d2a6e178b5c80a9971a92a5c7f50"
                  target="_blank"
                  class="underline"
                  >PR agency</a
                >
                and a
                <a
                  href="https://proposals.decred.org/proposals/2eb7ddb29f151691ba14ac8c54d53f6692c1f5e8fe06244edf7d3c33fb440bd9"
                  target="_blank"
                  class="underline"
                  >Market Maker</a
                >, and the current upgrade that will enable stakeholders to
                <a
                  href="https://proposals.decred.org/proposals/c96290a2478d0a1916284438ea2c59a1215fe768a87648d04d45f6b7ecb82c3f"
                  target="_blank"
                  class="underline"
                  >Decentralize the Treasury</a
                >. While some early initiatives do not have an approved proposal
                (core dcrd software, Decrediton wallet, Lightning Network), in
                the future, every expenditure should be linked to an approved
                proposal.
              </p>

              <h2>How to participate</h2>

              <p>
                The added Proof-of-Stake layer sets up the stage for blockchain
                governance. But, automating the voting process and the software
                activation mechanism is not enough. Clean, simple and
                user-friendly tools must be developed in order to allow that
                every user, no matter their technical skills or social media
                following, can discuss and vote on the different agendas through
                the ticket system.
              </p>

              <p>
                Taking into account both voting and discussion, Decred developed
                the Politeia governance platform and integrated voting tools to
                its main GUI wallet, Decrediton. Purchasing tickets and voting
                for or against proposals is as easy as one, two, Stakey.
              </p>

              <p>
                You can look closer on
                <a
                  href="https://proposals.decred.org/"
                  target="_blank"
                  class="underline"
                  >Politeia</a
                >
                and explore proposals which are currently
                <a
                  href="https://proposals.decred.org/?tab=voting"
                  target="_blank"
                  class="underline"
                  >in voting</a
                >.
              </p>

              <BlockHint>
                Users decide how Decred will evolve. What can we expect from the
                Decred community in the future?
              </BlockHint>
            </el-col>

            <el-col :lg="8" type="flex">
              <div v-sticky>
                <Tweet id="990306973164933122" />
                <div class="commentary">
                  <i>
                    @NotSoFast (145k+ followers), a veteran in altcoin mining,
                    commenting on Decred fork-resitance.
                  </i>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :gutter="24" :lg="16" :xs="24">
              <NavButtonGroup class="mt-5">
                <NavButton
                  prependIcon="back"
                  @click="$router.push('/a/decred-hybrid-consensus')"
                >
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Hybrid consensus
                  </template>
                  Previous article
                </NavButton>
                <NavButton
                  appendIcon="right"
                  @click="$router.push('/a/decred-whats-next')"
                >
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> What's next (DEX, LN and
                    Privacy)
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
import { Tweet } from 'vue-tweet-embed'

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
</style>
