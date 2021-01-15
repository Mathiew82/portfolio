<template>
  <ul class="projects">
    <li
      v-for="project in projects"
      :key="project">
      <a
        :href="project.url"
        target="_blank">
        {{ project.name }}
      </a>
      <br>{{ project.description }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProjectsList',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>
