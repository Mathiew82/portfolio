<template>
  <li>
    <a
      :href="url"
      target="_blank">
      {{ name }}
    </a>
    <br>{{ description }}
  </li>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    url: {
      type: String,
      required: true
    },
    name: {
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
