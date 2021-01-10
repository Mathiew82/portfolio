<template>
  <nav class="nav-menu">
    <img
      src="/mi-logo.png"
      class="logo" />
    <ul>
      <li>
        <a
          href="#skills"
          id="skills"
          @click.prevent="toSection('skills')">
          Skills
        </a>
      </li>
      <li>
        <a
          href="#experience"
          id="experience"
          @click.prevent="toSection('experience')">
          Experiencia
        </a>
      </li>
      <li>
        <a
          href="#projects"
          id="projects"
          @click.prevent="toSection('projects')">
          Proyectos
        </a>
      </li>
      <li>
        <a
          href="#repos"
          id="repos"
          @click.prevent="toSection('repos')">
          Repositorios
        </a>
      </li>
      <li>
        <a
          href="#contact"
          id="contact"
          @click.prevent="toSection('contact')">
          Contacto
        </a>
      </li>
    </ul>
  </nav>
  <router-view />
  <footer>
    <span>
      Mi nombre es Alberto Mateo y soy desarrollador Front-End de aplicaciones web.
      <br>Gracias por visitar mi sitio! :)
    </span>
    <span>
      <a
        href="#"
        data-title="Linkedin"
        target="_blank">
        <i class="icon icon-linkedin-squared" />
      </a>
      <a
        href="#"
        data-title="Github"
        target="_blank">
        <i class="icon icon-github-squared" />
      </a>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'App',
  setup () {
    // Methods
    // ------------------------------
    const toSection = id => {
      const offsetTop = document.querySelector(`#${id}-content`).offsetTop

      scroll({
        top: offsetTop,
        behavior: 'smooth'
      })
    }

    // Return
    // ------------------------------
    return {
      toSection
    }
  }
}
</script>

<style lang="scss">
  @import '../src/scss/styles.scss';
</style>
