<template>
  <ul class="skills">
    <SkillItem
      v-for="skill in skills"
      :key="skill"
      :color="skill.color"
      :name="skill.name"
    />
  </ul>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { skillsData } from '@/constants/skills.ts';
import SkillItem from './SkillItem.vue';

const skills = ref(null);

onBeforeMount(() => {
  skills.value = skillsData;
});
</script>
