<template>
  <li :style="`border: 2px solid var(${color}); color: var(${color})`">
    {{ name }}
  </li>
</template>

<script setup lang="ts">
interface props {
  color: string;
  name: string;
}

defineProps<props>();
</script>
