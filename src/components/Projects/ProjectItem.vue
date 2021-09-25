<template>
  <div class="item-list">
    <span class="item-list-left-content">
      <img
        :src="`/logos/${item.image}`"
        class="item-list__logo"
        width="80"
        height="80"
      />
    </span>
    <span class="item-list-right-content">
      <div class="item-list__name">
        {{ item.name }} <span>{{ item.stack }}</span>
      </div>
      <div class="item-list__info">
        <a :href="item.url" target="_blank"> Ver proyecto </a>
      </div>
      <div class="item-list__description">
        {{ item.description }}
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
