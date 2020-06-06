<template>
  <div class="container">
    <div>
      <h1 class="title">withDecred<span class="dot">.</span>org</h1>
      <h2 class="subtitle">A community portal</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
// import { Vue, Component, Prop } from 'vue-property-decorator'
import Logo from '~/components/Logo.vue'
import User from '~/components/User.vue'
import User2 from '~/components/User2.vue'

interface User {
  firstName: string
  lastName: string
}

export default Vue.extend({
  components: {
    Logo,
    User,
    User2,
  },

  data() {
    const user: User = {
      firstName: 'John',
      lastName: 'Doe',
    }

    return {
      count: 0,
      message: 'This is a message',
      user,
    }
  },

  computed: {
    fullName(): string {
      return `${this.user.firstName} ${this.user.lastName}`
    },
  },

  methods: {
    async increment() {
      this.count++
    },

    decrement() {
      this.count--
    },
  },
})
</script>

<style lang="scss" scoped>
// Don't comment out, some el-upload styles are used
@import '@/assets/_global';

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 400;
  font-size: 52px;
  /* color: #35495e; */
  letter-spacing: 0.025em;
  margin-bottom: 32px;
}

.subtitle {
  font-family: 'Source Sans Pro';
  font-weight: 300;
  font-size: 28px;
}

.dot {
  // color: $color-primary-blue;
  // color: $color-secondary-lightblue;
  color: $color-secondary-green;
}

.links {
  padding-top: 15px;
}

.my-5 {
  margin: 20px 0;
}
</style>
