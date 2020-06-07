<template>
  <div class="c-stakey-card">
    <el-popover
      v-model="isVisible"
      placement="top"
      title="Did you know?"
      trigger="manual"
      offset="-50"
      width="300"
    >
      <!-- <el-button slot="reference" @click="visible = !visible"
        >Manual to activate</el-button
      > -->
      <!-- <span> -->
      <img
        v-if="type === 'default'"
        slot="reference"
        @click="isVisible = !isVisible"
        src="./stakey-thumbsup.png"
        width="auto"
        height="150"
      />
      <img
        v-if="type === 'explorer'"
        slot="reference"
        @click="isVisible = !isVisible"
        src="./stakey-explorer.png"
        width="auto"
        height="150"
      />
      <img
        v-if="type === 'vote'"
        slot="reference"
        @click="isVisible = !isVisible"
        src="./stakey-vote.png"
        width="auto"
        height="150"
      />

      <div>
        We also have a Lightning network!
        <div class="text--align-right mt-3">
          <el-button type="primary" size="mini" plain>Read more</el-button>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: {
      type: String,
      required: false,
      default: 'default',
    },
  },

  data() {
    return {
      isVisible: false,
    }
  },

  mounted() {
    // setTimeout(() => {
    //   this.isVisible = true
    // }, 500)
  },
})
</script>

<style lang="scss" scoped>
.c-stakey-card {
  display: block;
}
</style>
