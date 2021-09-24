<template>
  <li :style="`background: var(${color})`">
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
