<template>
  <ul class="skills">
    <skill-item
      v-for="skill in skills"
      :key="skill"
      :color="skill.color"
      :name="skill.name" />
  </ul>
</template>

<script>
import SkillItem from './SkillItem.vue'

export default {
  name: 'SkillsList',
  components: {
    SkillItem
  },
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>
