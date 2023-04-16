<template>
  <Navbar />
  <router-view />
  <FooterCmp />
</template>

<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
import FooterCmp from '@/components/FooterCmp.vue';
</script>

<style lang="scss">
@import '../src/scss/styles.scss';
</style>
