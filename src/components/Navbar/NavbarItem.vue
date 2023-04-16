<template>
  <li>
    <a :href="href" @click.prevent="toSection(id, isMobile)">
      <slot />
    </a>
  </li>
</template>

<script setup>
import { defineEmit } from 'vue';

defineProps({
  href: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  isMobile: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmit(['toSection']);

const toSection = (id, isMobile) => {
  emit('toSection', id, isMobile);
};
</script>
