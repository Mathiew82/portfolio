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
            v-for="item in navbarData"
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
            v-for="item in navbarData"
            :key="item.id"
            :href="`#${item.id}`"
            :id="item.id"
            isMobile
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

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { navbarData } from '@/constants/navbar';
import NavbarItem from './NavbarItem.vue';

const navBurgerIcon = ref<HTMLDivElement>(null);
const menuMobile = ref<HTMLDivElement>(null);
const activeStickyMenu = ref<boolean>(false);

onMounted((): void => {
  stickyMenu();
});

const stickyMenu = (): void => {
  window.onscroll = () => {
    const scrollPosition: number = window.pageYOffset;
    const navMenu: HTMLElement = document.querySelector('.nav-menu');

    if (!activeStickyMenu.value && scrollPosition > 70) {
      navMenu.style.boxShadow = '0 5px 30px -15px rgba(0, 0, 0, .4)';
      activeStickyMenu.value = true;
    }

    if (activeStickyMenu.value && scrollPosition <= 70) {
      navMenu.style.boxShadow = 'none';
      activeStickyMenu.value = false;
    }
  };
};

const toSection = (id: string, isMobile: boolean): void => {
  const offsetTop =
    (document.querySelector(`#${id}-content`) as HTMLElement).offsetTop - 80;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });

  if (isMobile) {
    toggleMenuMobile();
  }
};

const toggleMenuMobile = (): void => {
  navBurgerIcon.value.classList.toggle('open');
  menuMobile.value.classList.toggle('open');
};
</script>
