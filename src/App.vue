<template>
  <nav class="nav-menu">
    <img
      src="/mi-logo.png"
      class="logo" />
    <ul>
      <li>
        <a href="#skills">
          Repositorios
        </a>
      </li>
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
          Proyectos
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
  <footer>
    <span>
      Mi nombre es Alberto Mateo y soy desarrollador Front-End de aplicaciones web. Gracias por visitar mi sitio! :)
    </span>
    <span>
      <a href="#" data-title="Linkedin">
        <i class="icon icon-linkedin-squared" />
      </a>
      <a href="#" data-title="Github">
        <i class="icon icon-github-squared" />
      </a>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import '../src/scss/styles.scss';
</style>
