<template>
  <ProjectItem
    v-for="project in projects"
    :key="project.name"
    :item="project"
  />
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "ProjectsList",
  components: {
    ProjectItem,
  },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>
