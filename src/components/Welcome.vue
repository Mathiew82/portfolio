<template>
  <h1 class="tac">
    {{ title }}
  </h1>
  <div class="tac fz22 mb75">
    {{ description }}
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    title: {
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
