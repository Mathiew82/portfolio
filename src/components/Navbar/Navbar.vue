<template>
  <nav class="nav-menu">
    <img
      src="/mi-logo.png"
      class="logo" />
    <ul>
      <navbar-item
        href="#skills"
        id="skills"
        :isMobile="false"
        @to-section="toSection">
        Skills
      </navbar-item>
      <navbar-item
        href="#experience"
        id="experience"
        :isMobile="false"
        @to-section="toSection">
        Experiencia
      </navbar-item>
      <navbar-item
        href="#projects"
        id="projects"
        :isMobile="false"
        @to-section="toSection">
        Proyectos
      </navbar-item>
      <navbar-item
        href="#repos"
        id="repos"
        :isMobile="false"
        @to-section="toSection">
        Repositorios
      </navbar-item>
      <navbar-item
        href="#contact"
        id="contact"
        :isMobile="false"
        @to-section="toSection">
        Contacto
      </navbar-item>
    </ul>
    <div
      ref="menuMobile"
      class="menu-mobile">
      <ul>
        <navbar-item
          href="#skills"
          id="skills"
          :isMobile="true"
          @to-section="toSection">
          Skills
        </navbar-item>
        <navbar-item
          href="#experience"
          id="experience"
          :isMobile="true"
          @to-section="toSection">
          Experiencia
        </navbar-item>
        <navbar-item
          href="#projects"
          id="projects"
          :isMobile="true"
          @to-section="toSection">
          Proyectos
        </navbar-item>
        <navbar-item
          href="#repos"
          id="repos"
          :isMobile="true"
          @to-section="toSection">
          Repositorios
        </navbar-item>
        <navbar-item
          href="#contact"
          id="contact"
          :isMobile="true"
          @to-section="toSection">
          Contacto
        </navbar-item>
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
</template>

<script>
import { onMounted, ref } from 'vue'
import NavbarItem from './NavbarItem.vue'

export default {
  name: 'Navbar',
  components: {
    NavbarItem
  },
  setup () {
    // Refs
    // ------------------------------
    const navBurgerIcon = ref(null)
    const menuMobile = ref(null)
    let activeStickyMenu = false

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
        if (!activeStickyMenu && scrollPosition > 70) {
          navMenu.style.boxShadow = '0 5px 30px -15px rgba(0, 0, 0, .4)'
          activeStickyMenu = true
        }
        if (activeStickyMenu && scrollPosition <= 70) {
          navMenu.style.boxShadow = 'none'
          activeStickyMenu = false
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
