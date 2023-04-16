<template>
  <div class="item-list">
    <span class="item-list-left-content">
      <img
        :src="`/logos/${item.image}`"
        class="item-list__logo"
        width="80"
        height="80"
        :alt="altImage"
      />
    </span>
    <span class="item-list-right-content">
      <div class="item-list__name">
        {{ item.companyName }} <span>{{ item.position }}</span>
      </div>
      <div class="item-list__info">
        {{ item.dates }}
      </div>
      <div class="item-list__description">
        {{ item.description }}
      </div>
    </span>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'ExperienceItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const altImage = computed(() => props.item.image.replace(/\-[^-]*$/, '').replace('_', ' '));

    return {
      altImage
    };
  },
}
</script>
