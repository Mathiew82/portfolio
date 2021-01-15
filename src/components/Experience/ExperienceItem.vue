<template>
  <div class="experience">
    <span class="experience-left-content">
      <img
        :src="`/logos/${image}`"
        class="experience__logo" />
    </span>
    <span class="experience-right-content">
      <div class="experience__name">
        {{ companyName }} <span>{{ position }}</span>
      </div>
      <div class="experience__date">
        {{ dates }}
      </div>
      <div class="experience__description">
        {{ description }}
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ExperienceItem',
  props: {
    image: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    dates: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
