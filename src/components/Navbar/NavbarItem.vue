<template>
  <li>
    <a
      :href="href"
      :id="id"
      @click.prevent="toSection(id, isMobile)">
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
    // Methods
    // ------------------------------
    const toSection = (id, isMobile) => {
      emit('toSection', id, isMobile)
    }

    // Return
    // ------------------------------
    return {
      toSection
    }
  }
}
</script>
