<template>
  <nav class="nav-menu">
    <section class="nav-menu__content">
      <img
        src="/mi-logo.png"
        class="logo"
        width="96"
        height="40"
        alt="Mi logo"
      />
      <div class="menu-desktop">
        <ul>
          <NavbarItem
            v-for="item in navbar"
            :key="item.id"
            :href="`#${item.id}`"
            :id="item.id"
            :isMobile="false"
            @to-section="toSection"
          >
            {{ item.name }}
          </NavbarItem>
        </ul>
      </div>
      <div ref="menuMobile" class="menu-mobile">
        <ul>
          <NavbarItem
            v-for="item in navbar"
            :key="item.id"
            :href="`#${item.id}`"
            :id="item.id"
            :isMobile="true"
            @to-section="toSection"
          >
            {{ item.name }}
          </NavbarItem>
        </ul>
      </div>
      <div
        ref="navBurgerIcon"
        class="nav-burguer-icon"
        @click="toggleMenuMobile"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  </nav>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import { navbarData } from '@/constants/navbar.ts';
import NavbarItem from './NavbarItem.vue';

const navBurgerIcon = ref(null);
const menuMobile = ref(null);
const navbar = ref(null);
let activeStickyMenu = false;

onBeforeMount(() => {
  navbar.value = navbarData;
});

onMounted(() => {
  stickyMenu();
});

const stickyMenu = () => {
  window.onscroll = () => {
    const scrollPosition = window.pageYOffset;
    const navMenu = document.querySelector('.nav-menu');
    if (!activeStickyMenu && scrollPosition > 70) {
      navMenu.style.boxShadow = '0 5px 30px -15px rgba(0, 0, 0, .4)';
      activeStickyMenu = true;
    }
    if (activeStickyMenu && scrollPosition <= 70) {
      navMenu.style.boxShadow = 'none';
      activeStickyMenu = false;
    }
  };
};

const toSection = (id, isMobile) => {
  const offsetTop = document.querySelector(`#${id}-content`).offsetTop - 80;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });

  if (isMobile) {
    toggleMenuMobile();
  }
};

const toggleMenuMobile = () => {
  navBurgerIcon.value.classList.toggle('open');
  menuMobile.value.classList.toggle('open');
};
</script>
