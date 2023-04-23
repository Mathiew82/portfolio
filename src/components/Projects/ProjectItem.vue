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
        {{ item.name }} <span>{{ item.stack }}</span>
      </div>
      <div class="item-list__info">
        <a :href="item.url" target="_blank"> ver proyecto </a>
      </div>
      <div class="item-list__description">
        {{ item.description }}
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ProjectItem as ProjectItemT } from '@/types/ProjectItem';

interface props {
  item: ProjectItemT;
}

const { item } = defineProps<props>();

const altImage = computed<string>(() =>
  item.image.replace(/\-[^-]*$/, '').replace('_', ' ')
);
</script>
