<template>
  <nav class="nav-menu">
    <ul>
      <li>
        <a href="#skills">
          Skills
        </a>
      </li>
      <li>
        <a href="#experience">
          Experiencia
        </a>
      </li>
      <li>
        <a href="#projects">
          Trabajos
        </a>
      </li>
      <li>
        <a href="#projects">
          Linkedin
        </a>
      </li>
      <li>
        <a href="#projects">
          Github
        </a>
      </li>
      <li>
        <a href="#projects">
          Contacto
        </a>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import '../src/scss/styles.scss';
</style>
