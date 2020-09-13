require('dotenv').config()

module.exports = {
  mode: 'universal',
  telemetry: true,
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
      {
        hid: 'description',
        name: 'description',
        content: 'withDecred.org - Stakeholder-governed sound money',
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'apple-mobile-web-app-title', content: 'withDecred.org' },
      { property: 'og:title', content: 'withDecred.org' },
      {
        property: 'og:description',
        content: 'withDecred.org - Stakeholder-governed sound money',
      },
      { property: 'og:image', content: 'https://withDecred.org/social-preview.png' },
      { property: 'og:url', content: 'https://withDecred.org/' },
      { property: 'og:site_name', content: 'withDecred.org' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_EN' },
      { name: 'twitter:title', content: 'withDecred.org' },
      {
        name: 'twitter:description',
        content: 'withDecred.org - Stakeholder-governed sound money',
      },
      { name: 'twitter:image', content: 'https://withDecred.org/social-preview.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
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
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/sticky-directive.js', mode: 'client' },
  ],
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
    extend(config, ctx) {
      // Load SVG files as components
      // https://vue-svg-loader.js.org/

      // Replace all existing rules which include SVG files
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      // Create new rule for SVG loading
      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: ['babel-loader', 'vue-svg-loader'],
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
        ],
        // loader: 'vue-svg-loader',
        // options: {
        //   svgo: {
        //     plugins: [{ removeDimensions: true }, { removeViewBox: false }],
        //   },
        // },
      })
    },
  },
}
