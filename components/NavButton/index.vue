<template>
  <div
    class="c-nav-button"
    :class="{ 'has-prepend-icon': prependIcon, 'has-append-icon': appendIcon }"
    v-on="$listeners"
  >
    <div v-if="prependIcon" class="icon icon--prepend">
      <i :class="`el-icon-${prependIcon}`" />
    </div>
    <div class="content">
      <div class="label"><slot name="label"></slot></div>
      <slot></slot>
    </div>
    <div v-if="appendIcon" class="icon icon--append">
      <i :class="`el-icon-${appendIcon}`" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //
  props: {
    prependIcon: {
      type: String,
      required: false,
      default: () => null,
    },
    appendIcon: {
      type: String,
      required: false,
      default: () => null,
    },
  },
})
</script>

<style lang="scss" scoped>
//
.c-nav-button {
  color: #242a31;
  border: 1px solid #e6ecf1;
  margin: 0;
  display: flex;
  // padding: 0;
  padding: 16px;
  position: relative;
  grid-area: next;
  align-self: stretch;
  box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);
  transition: border 250ms ease;
  align-items: center;
  justify-self: stretch;
  border-radius: 3px;
  flex-direction: row;
  text-decoration: none;
  background-color: #ffffff;
  page-break-inside: avoid;

  &:hover,
  &:active {
    color: $color-primary-blue;
    border-color: $color-primary-blue;
    cursor: pointer;
  }

  & > .icon {
    font-size: 24px;
  }

  .content {
    .label {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.625;
      color: #707982;
    }
  }

  &.has-prepend-icon {
    .content {
      margin-left: auto;
      text-align: right;

      .label {
        text-align: right;
      }
    }
  }
  &.has-append-icon {
    .content {
      margin-right: auto;
    }
  }
}
</style>
