<template>
  <ExperienceItem
    v-for="item in experienceData"
    :key="item.companyName"
    :item="item"
  />
</template>

<script setup lang="ts">
import { experienceData } from '@/constants/experience';
import ExperienceItem from './ExperienceItem.vue';
</script>
