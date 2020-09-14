<template>
  <div class="c-tweet">
    <div class="c-tweet__content-wrapper">
      <div class="twitter-logo-wrapper">
        <IconTwitter />
      </div>

      <div class="name">{{ name }}</div>
      <div class="nickname">{{ nickname }}</div>

      <div class="content">
        <slot></slot>
      </div>

      <div class="created-at">{{ createdAt }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconTwitter from './icon-twitter.svg?inline'

export default Vue.extend({
  components: {
    //
    IconTwitter,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.c-tweet {
  border: thin solid rgb(204, 214, 221);
  border-radius: 15px;
  overflow-wrap: break-word;
  line-height: 1.3125;
  background-color: #fff;
  max-width: 550px;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: rgb(245, 248, 250);
  }

  .c-tweet__content-wrapper {
    position: relative;
    padding: 10px 15px;

    .twitter-logo-wrapper {
      position: absolute;
      top: 10px;
      right: 15px;

      svg {
        width: 24px;
        height: auto;
        color: rgb(29, 161, 242);
      }
    }

    .name {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
      color: rgb(20, 23, 26);
      font-size: 15px;
      line-height: 19.6875px;
      font-weight: 700;
    }

    .nickname {
      font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto,
        Ubuntu, 'Helvetica Neue', sans-serif;
      color: rgb(101, 119, 134);
      font-size: 15px;
    }

    .content {
      font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto,
        Ubuntu, 'Helvetica Neue', sans-serif;
      color: rgb(20, 23, 26);
      font-weight: 400;
      line-height: 24.9375px;
      font-size: 19px;
    }

    .created-at {
      font-family: system-ui, -apple-system, system-ui, 'Segoe UI', Roboto,
        Ubuntu, 'Helvetica Neue', sans-serif;
      color: rgb(101, 119, 134);
      font-size: 15px;
      font-weight: 400;
      line-height: 19.6875px;
      margin-top: 2px;
    }

    .likes-and-comments {
      margin-top: 5px;
      border: thin solid rgb(204, 214, 221);
      padding-top: 5px;
    }
  }
}
</style>
