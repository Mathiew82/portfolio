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
          @click.prevent="toSection('skills', false)">
          Skills
        </a>
      </li>
      <li>
        <a
          href="#experience"
          id="experience"
          @click.prevent="toSection('experience', false)">
          Experiencia
        </a>
      </li>
      <li>
        <a
          href="#projects"
          id="projects"
          @click.prevent="toSection('projects', false)">
          Proyectos
        </a>
      </li>
      <li>
        <a
          href="#repos"
          id="repos"
          @click.prevent="toSection('repos', false)">
          Repositorios
        </a>
      </li>
      <li>
        <a
          href="#contact"
          id="contact"
          @click.prevent="toSection('contact', false)">
          Contacto
        </a>
      </li>
    </ul>
    <div
      ref="menuMobile"
      class="menu-mobile">
      <ul>
        <li>
          <a
            href="#skills"
            id="skills"
            @click.prevent="toSection('skills', true)">
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            id="experience"
            @click.prevent="toSection('experience', true)">
            Experiencia
          </a>
        </li>
        <li>
          <a
            href="#projects"
            id="projects"
            @click.prevent="toSection('projects', true)">
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#repos"
            id="repos"
            @click.prevent="toSection('repos', true)">
            Repositorios
          </a>
        </li>
        <li>
          <a
            href="#contact"
            id="contact"
            @click.prevent="toSection('contact', true)">
            Contacto
          </a>
        </li>
      </ul>
    </div>
    <div
      ref="navBurgerIcon"
      class="nav-burguer-icon"
      @click="toggleMenuMobile">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
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
import { onMounted, ref } from 'vue'

export default {
  name: 'App',
  setup () {
    // Refs
    // ------------------------------
    const navBurgerIcon = ref(null)
    const menuMobile = ref(null)

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
    const toSection = (id, isMobile) => {
      const offsetTop = document.querySelector(`#${id}-content`).offsetTop - 80

      scroll({
        top: offsetTop,
        behavior: 'smooth'
      })

      if (isMobile) {
        toggleMenuMobile()
      }
    }
    const toggleMenuMobile = () => {
      navBurgerIcon.value.classList.toggle('open')
      menuMobile.value.classList.toggle('open')
    }

    // Return
    // ------------------------------
    return {
      navBurgerIcon,
      menuMobile,
      toggleMenuMobile,
      toSection
    }
  }
}
</script>

<style lang="scss">
  @import '../src/scss/styles.scss';
</style>
