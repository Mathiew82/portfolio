<template>
  <ExperienceItem
    v-for="item in experience"
    :key="item.companyName"
    :item="item"
  />
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { experienceData } from '@/constants/experience.ts'
import ExperienceItem from './ExperienceItem.vue'

export default {
  name: 'ExperienceList',
  components: {
    ExperienceItem,
  },
  setup() {
    const experience = ref(null)

    onBeforeMount(() => {
      experience.value = experienceData
    })

    return {
      experience,
    }
  },
}
</script>
