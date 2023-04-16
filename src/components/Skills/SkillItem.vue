<template>
  <li :style="`border: 2px solid var(${color}); color: var(${color})`">
    {{ name }}
  </li>
</template>

<script>
export default {
  name: 'SkillItem',
  props: {
    color: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
