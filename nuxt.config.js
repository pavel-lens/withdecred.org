require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Decred Community Portal - withDecred.org',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Decred community portal with educational resources',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/_reset.scss',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/_global.scss',
    '@/assets/_fonts.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@marcdiethelm/nuxtjs-countly',
  ],
  /*
   ** Countly tracker configuration
   */
  countly: {
    // Required, the URL of your Countly server
    url: 'https://analytics.withdecred.org',
    // Required, copy from server's management > apps page
    app_key:
      process.env.ANALYTICS_ENABLED === 'true' && process.env.ANALYTICS_KEY,
    // For self-hosting... use original .js or .min.js (minified)
    trackerSrc: '/countly.min.js',
    // Automatic tracking, if not array this defaults to ['track_sessions', 'track_pageview', 'track_links']
    trackers: null,
    // Append a <noscript> tag with tracking pixel <img> to <body>, default: true
    noScript: true,
    // Log Countly debug info to console, default: false
    debug: process.env.NODE_ENV !== 'production',
  },
  /*
   ** Style resources
   */
  styleResources: {
    scss: [
      //
      './assets/_variables.scss',
      './assets/_responsive.scss',
    ],
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
