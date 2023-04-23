<template>
  <div class="tac mt50">
    <img
      :src="`/images/${image}`"
      class="photo"
      width="200"
      height="200"
      alt="Mi foto"
    />
  </div>
  <h1 class="tac mt15">
    {{ title }}
  </h1>
  <div class="tac fz22 mb75">
    {{ description }}
  </div>
</template>

<script setup lang="ts">
interface props {
  image: string;
  title: string;
  description: string;
}

defineProps<props>();
</script>
