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
      <br>Gracias por visitar mi sitio! :)
    </span>
    <span>
      <a
        href="https://www.linkedin.com/in/amateo82/"
        data-title="Linkedin"
        target="_blank">
        <i class="icon icon-linkedin-squared" />
      </a>
      <a
        href="https://github.com/Mathiew82/"
        data-title="Github"
        target="_blank">
        <i class="icon icon-github-squared" />
      </a>
    </span>
  </footer>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'App',
  setup () {
    // Life Cycle
    // ------------------------------
    onMounted(() => {
      stickyMenu()
    })

    // Methods
    // ------------------------------
    const stickyMenu = () => {
      window.onscroll = () => {
        const scrollPosition = window.pageYOffset
        const navMenu = document.querySelector('.nav-menu')
        if (scrollPosition > 70) {
          navMenu.style.boxShadow = '0 5px 30px -15px rgba(0, 0, 0, .4)'
        } else {
          navMenu.style.boxShadow = 'none'
        }
      }
    }
    const toSection = id => {
      const offsetTop = document.querySelector(`#${id}-content`).offsetTop - 80

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
