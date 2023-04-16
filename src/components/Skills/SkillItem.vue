<template>
  <li :style="`border: 2px solid var(${color}); color: var(${color})`">
    {{ name }}
  </li>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});
</script>
