<template>
  <navbar />
  <router-view />
  <footer-cmp />
</template>

<script>
import Navbar from '@components/Navbar/Navbar.vue'
import FooterCmp from '@components/FooterCmp.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    FooterCmp
  }
}
</script>

<style lang="scss">
  @import '../src/scss/styles.scss';
</style>
