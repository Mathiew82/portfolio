// Menu elements
const header = document.querySelector<HTMLElement>("header");
const menuMobile = document.querySelector<HTMLDivElement>("#menuMobile");
const burgerIcon = document.querySelector<HTMLDivElement>("#burgerIcon");

// Link elements mobile
const skillsLinkMobile =
  document.querySelector<HTMLAnchorElement>("#skillsLinkMobile");
const experienceLinkMobile = document.querySelector<HTMLAnchorElement>(
  "#experienceLinkMobile",
);
const projectsLinkMobile = document.querySelector<HTMLAnchorElement>(
  "#projectsLinkMobile",
);
const repositoriesLinkMobile = document.querySelector<HTMLAnchorElement>(
  "#repositoriesLinkMobile",
);
const contactLinkMobile =
  document.querySelector<HTMLAnchorElement>("#contactLinkMobile");

// Variables and functions
let activeStickyMenu: boolean = false;

const toggleMenuMobile = (): void => {
  burgerIcon?.classList.toggle("open");
  menuMobile?.classList.toggle("open");
};

const stickyMenu = (): void => {
  if (!header) return;

  window.onscroll = () => {
    const pixelsToActivate: number = 40;
    const scrollPosition: number = window.pageYOffset;

    if (!activeStickyMenu && scrollPosition > pixelsToActivate) {
      header.style.boxShadow = "0 5px 30px -15px rgba(0, 10, 40, .2)";
      activeStickyMenu = true;
    }

    if (activeStickyMenu && scrollPosition <= pixelsToActivate) {
      header.style.boxShadow = "none";
      activeStickyMenu = false;
    }
  };
};

// Events
burgerIcon?.addEventListener("click", () => {
  toggleMenuMobile();
});

skillsLinkMobile?.addEventListener("click", () => {
  toggleMenuMobile();
});

experienceLinkMobile?.addEventListener("click", () => {
  toggleMenuMobile();
});

projectsLinkMobile?.addEventListener("click", () => {
  toggleMenuMobile();
});

repositoriesLinkMobile?.addEventListener("click", () => {
  toggleMenuMobile();
});

contactLinkMobile?.addEventListener("click", () => {
  toggleMenuMobile();
});

// Execute code
stickyMenu();
