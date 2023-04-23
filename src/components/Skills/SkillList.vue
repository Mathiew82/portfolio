<template>
  <ul class="skills">
    <SkillItem
      v-for="skill in skills"
      :key="skill.name"
      :color="skill.color"
      :name="skill.name"
    />
  </ul>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { skillsData } from '@/constants/skills';
import { Skill } from '@/types/Skill';
import SkillItem from './SkillItem.vue';

const skills = ref<Skill[]>(null);

onBeforeMount(() => {
  skills.value = skillsData;
});
</script>
