<template>
  <div class="background">
    <el-main class="my-6"> </el-main>

    <div class="background--alt">
      <div class="container">
        <el-card class="subpage-card">
          <h1 class="mb-2">Learn most important basics about Decred</h1>
          <p>
            In this page, you will learn why Decred is secure, adaptable and
            sustainable.
          </p>
          <!-- <ul>
            <li>Secure.</li>
            <li>Adaptable</li>
            <li>Sustainable</li>
          </ul> -->
          <div class="subpage-card__footer mt-2">
            <i class="el-icon-timer mr-1" /> 3 minutes
          </div>
        </el-card>
        <el-main class="mb-6" style="margin-top: 100px;">
          <el-row :gutter="24">
            <el-col :lg="16">
              <h2>Decred is Sound Money</h2>
              <p>
                If you are in crypto, you probably heard alreay about
                <a href="">sound money</a>. Explaining sound money is out of
                scope of this introduction, but you can read more about
                <a href="">sound money</a> in a dedicated article.
              </p>

              <h2 class="mt-5">Why does it matter?</h2>
              <p>
                In current times, traditional paper money (so called "fiat
                money") are not backed by anything and central banks can
                literally print new money out of thin air.
              </p>
              <b class="mt-1">USA: FED</b>
              <p>
                FED's balance sheet was $0.8T USD in 2008. FED's balance sheet
                in May 2020 crossed $6.2T USD. That means that FED printed more
                than 7x more money in last 12 years alone.
              </p>
              <b class="mt-1">Europe: ECB (TODO)</b>
              <p>
                ECB's balance sheet was $0.8T USD in 2008. ECB's balance sheet
                in May 2020 crossed $6.2T USD. That means that ECB printed more
                than 7x more money in last 12 years alone.
              </p>
              <h3 class="mt-3">
                2.4B+ people have no access to financial services
              </h3>
              <p>
                Another important fact is that (accord to current statistics)
                more than 2.4 billion people don't have access to bank accounts
                and traditional financial services such as loans. Imagine how
                much harder would your life be, if you can't get loan for car,
                business or place to live in.
              </p>
              <el-alert type="warning" :closable="false" class="mt-3">
                <div slot="title" class="flex">
                  <i class="el-alert__icon el-icon-warning mr-2"></i>
                  Money on your bank account lose value
                </div>
                <div>
                  It's only inevitable, that all this money printing, simply
                  more dollars (or euros) devalue your savings.
                  <div class="mt-2"><strong>Think back</strong></div>
                  How much would you be able to purchase for $100 USD now and
                  say, 15 years ago?
                </div>
              </el-alert>
            </el-col>
            <el-col :lg="6">
              <StakeyCard type="explorer" />
            </el-col>
          </el-row>

          <el-row :gutter="24" class="mt-5">
            <el-col :span="16">
              <h2>Decred is Secure</h2>
              <p>
                Decred employs an innovative hybrid Proof-of-Work/Proof-of-Stake
                system that layers security and carefully aligns incentives.
                This system yields the best of both worlds, making it an order
                of magnitude more expensive to attack than pure Proof-of-Work or
                pure Proof-of-Stake.
              </p>
              <p>
                In simple words, if you would compare Decred to Bitcoin,
                Decred's network is <a href="">~40x more secure</a> than
                Bitcoin's network (assuming same amount of mining hardware). If
                Bitcoin network is secure, Decred network is
                <a href="">hyper-secure</a>.
              </p>
            </el-col>
          </el-row>

          <el-row :gutter="24" class="mt-5">
            <el-col :span="16">
              <h2>Decred is Adaptable</h2>
              <p>
                Decred’s built-in
                <a href="">governance system Politeia</a> empowers its community
                with formal rights to make consensus changes and manage
                project-level decisions. These systems make Decred adaptable,
                allowing it to evolve per the will of the stakeholders, resist
                forks and incorporate new technology over the long run.
              </p>
              <h3 class="mt-3">Decred can't fork</h3>
              <p>
                If you look at Bitcon's history, you will find a lot of
                unresolved community debates which eventually resulted in
                Bitcoin fork. Fork is a split of network into separate networks.
                That's why there are multiple Bitcoin networks now - Bitcoin
                Cash, Bitcoin SV, Bitcoin Gold and Bitcoin Diamond.
              </p>
              <p>
                What is important is that every fork makes Bitcoin network
                weaker, because miners need to decide which network they belong
                to, but it also makes the price of Bitcoin lower, because the
                money is split into two different networks.
              </p>
              <p>
                Decred already
                <a href="">implemented several network improvements</a>
                and all miners upgraded without forking. This is possible,
                again, thanks to Decred unique governance mechanism Politeia,
                which is used by both parts of the community - miners and people
                who own Decred.

                <el-alert type="success" :closable="false" class="mt-3">
                  <div slot="title" class="flex">
                    <i class="el-icon-success mr-2" /> Decred cannot fork
                  </div>
                  <div>
                    Decred already implemented several network improvements and
                    all miners upgraded without forking.
                  </div>
                </el-alert>
              </p>
            </el-col>

            <el-col :lg="6" class="flex">
              <StakeyCard />
            </el-col>
          </el-row>

          <h2 class="mt-5">Summary</h2>
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
          </el-row>
        </el-main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StakeyCard from '@/components/StakeyCard/index.vue'

export default Vue.extend({
  components: {
    StakeyCard,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/_global';

.background {
  // background-image: url('../assets/images/bg-waves.png');
  background-image: url('../assets/images/bg-waves.webp');
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
    font-weight: 400;
    font-size: 32px;
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
      color: #67c23a;
      margin-top: 4px;
      margin-right: 8px;
    }
  }
}
</style>
