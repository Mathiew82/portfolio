<template>
  <ProjectItem
    v-for="project in projectsData"
    :key="project.name"
    :item="project"
  />
</template>

<script setup lang="ts">
import { projectsData } from '@/constants/projects';
import ProjectItem from './ProjectItem.vue';
</script>
