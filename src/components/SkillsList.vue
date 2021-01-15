<template>
  <ul class="skills">
    <li
      v-for="skill in skills"
      :key="skill"
      :style="`background: var(${skill.color})`">
      {{ skill.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SkillsList',
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
