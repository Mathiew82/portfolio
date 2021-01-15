<template>
  <ul class="projects">
    <project-item
      v-for="project in projects"
      :key="project"
      :url="project.url"
      :name="project.name"
      :description="project.description" />
  </ul>
</template>

<script>
import ProjectItem from './ProjectItem.vue'

export default {
  name: 'ProjectsList',
  components: {
    ProjectItem
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
