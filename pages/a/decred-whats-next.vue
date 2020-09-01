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
              <h1 class="article--title">
                What's next? (DEX, Lightning network and Privacy)
              </h1>

              <p class="mt-3">
                Decred is adaptable. A self-funding mechanism allows it to fund
                its own improvement and expansion
                <span class="underline">without relying on Venture Capital</span
                >, donations or any other third party resources, which would
                push rent-seeking projects.
              </p>

              <BlockHint>
                The Decred Treasury holds $10M as of Sep 1st, 2020. If it had a
                marketcap similar to Bitcoin's, Decred would control a
                $7.000.000.000 development fund. Audit the Treasury in real time
                using the
                <a
                  href="https://explorer.dcrdata.org/address/Dcur2mcGjmENx4DhNqDctW5wJCVyT3Qeqkx"
                  target="_blank"
                  class="underline"
                  >Block Explorer</a
                >.
              </BlockHint>

              <p>
                Making use of its autonomy and control over its own blockchain,
                Decred stakeholders have decided to fund tools and services that
                address the major issues cryptocurrencies are expected to solve,
                from cheap and lightning fast medium of exchange capabilities to
                highly resilient privacy features like the Coinshuffle++ mixer
                and project funding and tracking systems such as Politeia and
                the Contractor Management System.
              </p>

              <p>
                Decred's future developments is in its stakeholders' hands.
                Everyone who locks DCR to purchase tickets can help decide where
                Decred should go next.
              </p>

              <p>
                Projects already approved by stakeholders at Politeia include
                further implementations of the Coinshuffle++ coin mixer, an
                open-source and distributed exchange platform and improvements
                to the Treasury system.
              </p>

              <h2>Privacy</h2>

              <div class="image my-4">
                <img
                  src="@/assets/articles/surveying-the-privacy-landscape.png"
                />
              </div>

              <p>
                Digital money can't be unstoppable and censorship resistant if
                its users can be tracked and pursued. Since Bitcoin launch, many
                cryptocurrency projects have tackled the privacy problem and
                there is a wide range of implementations in the wild, but some
                diminish auditability and others add too much complexity.
              </p>

              <BlockHint>
                Cryptocurrency privacy technology can be distilled down to
                <strong>“math tricks”</strong> (cryptography). The math behind
                these is focused on how to efficiently prove certain statements
                whilst hiding much of the data used to prove that statement.
              </BlockHint>

              <p>
                Decred's first privacy feature is a
                <a href="https://github.com/decred/cspp" target="_blank"
                  >mixing service</a
                >
                based on Coinshuffle++ (<a
                  href="https://decred.org/research/ruffing2016.pdf"
                  target="_blank"
                  >research paper, PDF</a
                >), peer-to-peer mixing protocol used to create Decred CoinJoin
                transactions.
              </p>

              <p>
                Currently, Decred's CSPP mixing service is only accessible
                through the command-line tools and allows users who run their
                own voting infrastructure to mix DCR or tickets with others.
                Users who opt-in to privacy are able to both receive and spend
                payments with healthy plausible deniability: the outputs cannot
                be linked to their identity.
              </p>

              <p>
                As Decred improves its UX, the increased participation will
                create a much bigger and robust anonymity set, allowing DCR
                holders to hide in a bigger crowd.
              </p>

              <p>
                Privacy features are expected to arrive to Decrediton, the GUI
                desktop wallet, in the next release:
                <span class="underline">a highly anticipated Version 1.6</span>.
              </p>
            </el-col>
            <el-col :lg="6">
              <!-- <StakeyCard type="explorer" /> -->
            </el-col>
          </el-row>

          <el-row :gutter="24" class="mt-5">
            <el-col :span="16">
              <h2>Lightning Network</h2>

              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/7uFhevIkuhk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <p>
                Decred is one of the few cryptocurrency networks with it's own
                implementation of the Lightning Network. This is a layer 2
                scalability solution, a new network that sits on top of the main
                chain and helps save precious block space by creating payment
                channels and only publishing their closing states to the
                blockchain.
              </p>

              <p>
                The DCR Lightning Network is already deployed on mainnet, but it
                still requires further testing before anyone can safely use it.
                Decred's LN daemon comes bundled with Decrediton. If you wish to
                try it out, refer to
                <a
                  href="https://medium.com/decred/beginner-guide-to-the-decred-dcr-lightning-network-917f8ad304aa"
                  target="_blank"
                  >this guide</a
                >.
              </p>

              <p>
                There are also Decred specific innovations related to the
                Lightning Network that are being worked on. Decred LN could
                lower the barrier to participate in the governance system.
                Currently a Proof-of-Stake Ticket is worth a couple thousand
                dollars, a prohibitive amount for lots of people. There are
                Ticket Splitting tools currently in beta which works on-chain so
                that multiple DCR holders can pool together to buy a ticket. LN
                could be used to split tickets at a much lower cost between even
                more users than the current on-chain system.
              </p>

              <BlockHint>
                Ticket splitting is the process of splitting the cost of a full
                ticket with other DCR holders. This allows you to stake and
                participate in Decred’s governance even if you don’t have enough
                DCR to purchase a full ticket.
              </BlockHint>

              <p>
                Once Decred's implementation is stable and up to date with
                Bitcoin implementation, Decred has the capacity and the ability
                to implement new features that have not been tested on BTC yet,
                because these require on-chain changes.
              </p>

              <p>
                Check out this
                <a
                  href="https://www.youtube.com/watch?v=N3WO5YXpD7M"
                  target="_blank"
                  class="underline"
                  >interview</a
                >
                with Decred's Lightning Network lead developer Matheus Degiovani
                to learn more about the DCR implementation.
              </p>
            </el-col>

            <el-col :lg="6" class="flex">
              <!-- <StakeyCard /> -->
            </el-col>
          </el-row>

          <el-row>
            <el-col :gutter="24" :span="16">
              <h2>
                Decentralized Exchange,
                <span class="underline">without fees & KYC</span>
              </h2>

              <div class="image">
                <img src="@/assets/articles/dex-header.png" />
              </div>

              <p>
                Decentralized Exchange (DEX) are a key component of the
                decentralized economy landscape. As a result of centralized
                exchanges being hacked, used as exit scams and pursued by
                regulators, decentralized present users with a much more secure
                and private alternative.
              </p>

              <p>
                Decred is building a blockchain agnostic DEX that allows users
                to trade between cryptocurrencies and tokens deployed on
                different chains. It will have no associated blockchain or
                token, and will not collect trading fees or user data. Instead
                it will just have a registration fee to discourage bad actors,
                just like Politeia.
              </p>

              <BlockHint>
                A <strong>reputation system</strong> based on Politeia will make
                it clear that a given client or server misbehaved as of a
                particular time and date.
              </BlockHint>

              <p>
                The main <strong>motivation</strong> behind the DCRDEX is to
                provide liquidity for cryptocurrency projects
                <span class="underline"
                  >without relying on centralized exchanges</span
                >
                which invade their users privacy by enforcing KYC/AML policies
                and often press cryptocurrency projects to pay large listing
                fees despite requiring little work.
              </p>

              <p>
                Once DCRDEX is running smoothly, future developments will focus
                on making it more robust and user-friendly. The client-server
                model has some problems that can be solved by deploying a mesh
                of servers that share their orderbook.
              </p>

              <p>
                Adding support for server-to-server communication will allow for
                the creation of worldwide trading pairs, with the bonus that it
                would be stable under loss or disconnection of large segments of
                the network.
              </p>

              <p>
                Read more about the motivation and details behind DCRDEX at this
                <a
                  href="https://blog.decred.org/2018/06/05/A-New-Kind-of-DEX/"
                  target="_blank"
                  class="underline"
                  >article by Jake Yocom-Piatt</a
                >, a lead Decred developer.
              </p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :gutter="24" :span="16">
              <NavButtonGroup class="mt-5">
                <NavButton
                  prependIcon="back"
                  @click="$router.push('/a/decred-staking-and-governance')"
                >
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> Staking & Governance
                  </template>
                  Previous article
                </NavButton>
                <NavButton
                  appendIcon="right"
                  @click="$router.push('/a/how-to-purchase-decred')"
                >
                  <template v-slot:label>
                    <i class="el-icon-magic-stick" /> How to purchase $DCR
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
