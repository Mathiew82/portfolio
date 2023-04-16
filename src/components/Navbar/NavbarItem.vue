<template>
  <li>
    <a :href="href" @click.prevent="toSection(id, isMobile)">
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
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const toSection = (id, isMobile) => {
      emit('toSection', id, isMobile)
    }

    return {
      toSection,
    }
  },
}
</script>
