<template>
  <experience-item
    v-for="item in experience"
    :key="item"
    :image="item.image"
    :companyName="item.companyName"
    :position="item.position"
    :dates="item.dates"
    :description="item.description" />
</template>

<script>
import ExperienceItem from './ExperienceItem.vue'

export default {
  name: 'ExperienceList',
  components: {
    ExperienceItem
  },
  props: {
    experience: {
      type: Array,
      required: true
    }
  }
}
</script>
