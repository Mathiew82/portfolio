<template>
  <ExperienceItem
    v-for="item in experience"
    :key="item.companyName"
    :item="item"
  />
</template>

<script>
import ExperienceItem from "./ExperienceItem.vue";

export default {
  name: "ExperienceList",
  components: {
    ExperienceItem,
  },
  props: {
    experience: {
      type: Array,
      required: true,
    },
  },
};
</script>
