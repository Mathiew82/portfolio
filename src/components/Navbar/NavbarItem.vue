<template>
  <li>
    <a
      href="#skills"
      id="skills"
      @click.prevent="toSection('skills', isMobile)">
      <slot />
    </a>
  </li>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    href: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  setup (props, { emit }) {
    const toSection = (id, isMobile) => {
      emit('toSection', id, isMobile)
    }

    return {
      toSection
    }
  }
}
</script>
