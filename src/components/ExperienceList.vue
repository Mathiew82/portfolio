<template>
  <div
    v-for="item in experience"
    :key="item"
    class="experience">
    <span class="experience-left-content">
      <img
        :src="`/logos/${item.image}`"
        class="experience__logo" />
    </span>
    <span class="experience-right-content">
      <div class="experience__name">
        {{ item.companyName }} <span>{{ item.position }}</span>
      </div>
      <div class="experience__date">
        {{ item.dates }}
      </div>
      <div class="experience__description">
        {{ item.description }}
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ExperienceList',
  props: {
    experience: {
      type: Array,
      required: true
    }
  }
}
</script>
