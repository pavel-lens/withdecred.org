// import consola from 'consola'

export default function ({ $axios, env, redirect }) {
  // As defined in nuxt.config.js
  $axios.setBaseURL(process.env.DOMAIN)
}
