<template>
  <nav class="nav-menu">
    <img
      src="/mi-logo.png"
      class="logo" />
    <ul>
      <navbar-item
        v-for="item in getNavbar"
        :key="item.id"
        :href="`#${item.id}`"
        :id="item.id"
        :isMobile="false"
        @to-section="toSection">
        {{ item.name }}
      </navbar-item>
    </ul>
    <div
      ref="menuMobile"
      class="menu-mobile">
      <ul>
        <navbar-item
          v-for="item in getNavbar"
          :key="item.id"
          :href="`#${item.id}`"
          :id="item.id"
          :isMobile="true"
          @to-section="toSection">
          {{ item.name }}
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
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import NavbarItem from './NavbarItem.vue'

export default {
  name: 'Navbar',
  components: {
    NavbarItem
  },
  setup () {
    // Store
    // ------------------------------
    const store = useStore()

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

    // Computed
    // ------------------------------
    const getNavbar = computed(() => store.getters.getNavbar)

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
      getNavbar,
      navBurgerIcon,
      menuMobile,
      toggleMenuMobile,
      toSection
    }
  }
}
</script>
