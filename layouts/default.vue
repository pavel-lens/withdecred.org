<template>
  <div>
    <script v-if="enableAnalytics" type="text/javascript">
      //some default pre init
      var Countly = Countly || {}
      Countly.q = Countly.q || []

      //provide countly initialization parameters
      Countly.app_key = '7b006cca91b7f6d94a7a01c62a1b671167b5d9fd'
      Countly.url = 'https://analytics.withdecred.org'

      Countly.q.push(['track_sessions'])
      Countly.q.push(['track_pageview'])
      Countly.q.push(['track_scrolls'])
      Countly.q.push(['track_errors'])

      //load countly script asynchronously
      ;(function() {
        var cly = document.createElement('script')
        cly.type = 'text/javascript'
        cly.async = true
        //enter url of script here
        cly.src = '/countly.min.js'
        cly.onload = function() {
          Countly.init()
        }
        var s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(cly, s)
      })()
    </script>

    <NavBar />
    <div class="content-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '@/components/NavBar/index.vue'

export default Vue.extend({
  components: {
    NavBar,
  },

  data() {
    // console.log({ ANALYTICS_ENABLED: process.env.ANALYTICS_ENABLED })
    const enableAnalytics =
      process.env.ANALYTICS_ENABLED === 'true' ? true : false

    return {
      enableAnalytics,
    }
  },
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.content-wrapper {
  padding-top: 70px;
}
</style>
