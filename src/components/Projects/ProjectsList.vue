<template>
  <ProjectItem
    v-for="project in projects"
    :key="project.name"
    :item="project"
  />
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { projectsData } from '@/constants/projects.ts'
import ProjectItem from './ProjectItem.vue'

export default {
  name: 'ProjectsList',
  components: {
    ProjectItem,
  },
  setup() {
    const projects = ref(null)

    onBeforeMount(() => {
      projects.value = projectsData
    })

    return {
      projects,
    }
  },
}
</script>
