<template>
  <li>
    <a :href="href" @click.prevent="toSection(id, isMobile)">
      <slot />
    </a>
  </li>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

interface props {
  href: string;
  id: string;
  isMobile: boolean;
}

defineProps<props>();

const emit = defineEmits(['toSection']);

const toSection = (id: string, isMobile: boolean) => {
  emit('toSection', id, isMobile);
};
</script>
