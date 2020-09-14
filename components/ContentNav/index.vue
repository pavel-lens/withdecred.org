<template>
  <div class="c-content-nav">
    <!--  -->
    <nav class="nav">
      <div class="nav__tree">
        <slot></slot>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //
})
</script>

<style lang="scss" scoped>
$nav-width: 300px;

.c-content-nav {
  position: fixed;
  top: 70px;
  left: 0;
  width: calc((100% - 1448px) / 2 + #{$nav-width});
  height: 100vh;
  min-width: $nav-width;
  min-height: 100vh;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  padding: 0;
  padding-left: calc((100% - 1448px) / 2);
  // padding-left: 1200px;
  padding-top: 70px;
  background: #f5f7f9;
  border-right: 1px solid #e6ecf1;
  z-index: 15;

  .nav {
    flex: 1 1 auto;
    width: 100%;
    margin: 0;
    display: block;
    padding: 0;
    overflow-x: hidden;
    overflow-y: overlay;

    &__tree {
      margin: 0;
      display: block;
      padding: 0;
      font-size: 15px;
      margin-top: 32px;
      padding-left: 24px;

      i[class*='el-icon'] {
        margin-right: 8px;
        color: red;
      }

      label {
        // font-size: 14px;
        color: #9daab6;
        word-break: break-word;
        // font-weight: 500;
        // line-height: 1.5;
        font-size: 12px;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 1.2px;
        padding: 7px 24px 7px 16px;
        text-transform: uppercase;
        letter-spacing: 0;
      }

      & > *:not(label) {
        display: block;
        color: inherit;
        border: 1px solid transparent;
        cursor: pointer;
        display: flex;
        padding: 7px 24px 7px 16px;
        position: relative;
        align-items: center;
        border-right: 0;
        text-decoration: none;
        -webkit-box-align: center;

        &:hover,
        &:active {
          background-color: #e6ecf1;
        }
      }
    }
  }
}
</style>
