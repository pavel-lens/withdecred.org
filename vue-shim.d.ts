declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// https://vue-svg-loader.js.org/faq.html#how-to-use-this-loader-with-typescript
declare module '*.svg' {
  import Vue, { VueConstructor } from 'vue'
  const content: VueConstructor<Vue>
  export default content
}

// https://vue-svg-loader.js.org/faq.html#how-to-use-this-loader-with-typescript
declare module '*.svg?inline' {
  import Vue, { VueConstructor } from 'vue'
  const content: VueConstructor<Vue>
  export default content
}
