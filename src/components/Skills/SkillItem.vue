<template>
  <li :style="`border: 2px solid var(${color}); color: var(${color})`">
    {{ name }}
  </li>
</template>

<script setup lang="ts">
interface Props {
  color: string;
  name: string;
}

defineProps<Props>();
</script>
