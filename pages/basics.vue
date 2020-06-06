<template>
  <div class="background">
    <el-main class="my-6"> </el-main>

    <div class="background--alt">
      <div class="container">
        <el-card class="subpage-card-header">
          <h1>Learn most important basics about Decred</h1>
          <p>
            In this page, you will learn why Decred is secure, adaptable and
            sustainable.
          </p>
          <!-- <ul>
            <li>Secure.</li>
            <li>Adaptable</li>
            <li>Sustainable</li>
          </ul> -->
        </el-card>
        <el-main class="" style="margin-top: 100px;">
          <h2>Let's start easy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            maximus sapien. Sed at felis neque. Nunc molestie eget lacus sit
            amet pretium. Vestibulum ligula odio, venenatis eget elementum
            malesuada, gravida id felis. Morbi auctor posuere nisl, non accumsan
            nisi pulvinar id. Integer scelerisque, velit sed accumsan volutpat,
            tellus metus ornare mi, eget consectetur tellus metus et orci. Donec
            hendrerit lacus eu lorem porttitor, ut tristique diam ultrices.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <div style="float: right">
              <img src="@/assets/images/stakey.png" width="150" />
            </div>
          </p>
          <p>
            In vulputate nunc sem, ut tincidunt tortor ornare vel. Duis nulla
            nibh, condimentum vel mattis vitae, volutpat id ex. Aliquam erat
            volutpat. Nam at gravida nibh, sed egestas tortor. Nam id leo est.
            Nulla id ipsum nunc. Donec neque felis, varius ac dapibus vel,
            tincidunt sit amet lorem. Ut ullamcorper gravida quam eget bibendum.
            Aenean dictum, odio non tincidunt consequat, est ipsum dictum
            mauris, non scelerisque lorem tortor vitae ipsum. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Aenean sollicitudin facilisis euismod. Nullam urna velit,
            cursus sed imperdiet vitae, pellentesque eu eros. Mauris rhoncus
            ipsum sit amet blandit luctus. Morbi efficitur et tellus quis
            tempus.
          </p>
          <h2>Well, that's not all</h2>
          <p>
            Cras purus sapien, tempor sed nisi quis, elementum ornare quam.
            Quisque sed ullamcorper neque, eget ultrices nisi. Ut vehicula,
            ligula ac euismod sodales, ligula erat tempus ante, in convallis mi
            nunc quis libero. Mauris at magna vel turpis finibus consequat.
            Nullam congue lacinia odio, eu luctus ligula iaculis at. Donec at
            semper orci. Integer mattis mauris quis tortor eleifend lacinia.
            Mauris faucibus massa eu mauris commodo, ac scelerisque ipsum
            mattis. Phasellus at ullamcorper velit. Integer porta enim nec felis
            tempor, in elementum eros dictum.
          </p>
          <p>
            Phasellus aliquam erat id risus iaculis convallis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Proin sed odio
            vitae lorem ultricies ultricies. Vestibulum at magna ac orci
            sollicitudin dictum. Donec tincidunt magna nec nunc lobortis
            iaculis. Phasellus pharetra, sapien at suscipit feugiat, enim augue
            elementum dolor, id ultrices leo mi et lectus. Suspendisse potenti.
            Aenean aliquet, quam non lobortis tristique, ligula ipsum tincidunt
            enim, eget lobortis mi diam a nunc.
          </p>
        </el-main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
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

.subpage-card-header {
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
</style>
