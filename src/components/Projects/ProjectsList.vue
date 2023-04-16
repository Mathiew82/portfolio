<template>
  <ProjectItem
    v-for="project in projects"
    :key="project.name"
    :item="project"
  />
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { projectsData } from '@/constants/projects.ts';
import ProjectItem from './ProjectItem.vue';

const projects = ref(null);

onBeforeMount(() => {
  projects.value = projectsData;
});
</script>
