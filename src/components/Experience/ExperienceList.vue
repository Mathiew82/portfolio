<template>
  <ExperienceItem
    v-for="item in experience"
    :key="item.companyName"
    :item="item"
  />
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { experienceData } from '@/constants/experience.ts';
import ExperienceItem from './ExperienceItem.vue';

const experience = ref(null);

onBeforeMount(() => {
  experience.value = experienceData;
});
</script>
