<template>
  <ul class="skills">
    <SkillItem
      v-for="skill in skills"
      :key="skill"
      :color="skill.color"
      :name="skill.name"
    />
    <h3 class="mt15">Aprendiendo también...</h3>
    <SkillItem
      v-for="skill in futureSkills"
      :key="skill"
      :color="skill.color"
      :name="skill.name"
    />
  </ul>
</template>

<script>
import SkillItem from "./SkillItem.vue";

export default {
  name: "SkillsList",
  components: {
    SkillItem,
  },
  props: {
    skills: {
      type: Array,
      required: true,
    },
    futureSkills: {
      type: Array,
      required: true,
    },
  },
};
</script>
