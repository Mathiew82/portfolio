// Menu elements
const header = document.querySelector<HTMLElement>("header");
const menuMobile = document.querySelector<HTMLDivElement>("#menuMobile");
const burgerIcon = document.querySelector<HTMLDivElement>("#burgerIcon");

// Link elements mobile
const skiLinkM = document.querySelector<HTMLAnchorElement>("#skiCntM");
const expLinkM = document.querySelector<HTMLAnchorElement>("#expCntM");
const proLinkM = document.querySelector<HTMLAnchorElement>("#proCntM");
const repLinkM = document.querySelector<HTMLAnchorElement>("#repCntM");
const conLinkM = document.querySelector<HTMLAnchorElement>("#conCntM");

// Variables and functions
let activeStickyMenu: boolean = false;

const toggleMenuMobile = (): void => {
  burgerIcon?.classList.toggle("open");
  menuMobile?.classList.toggle("open");
};

const stickyMenu = (): void => {
  if (!header) return;

  window.onscroll = () => {
    const scrollPosition: number = window.pageYOffset;

    if (!activeStickyMenu && scrollPosition > 70) {
      header.style.boxShadow = "0 5px 30px -15px rgba(0, 0, 0, .4)";
      activeStickyMenu = true;
    }

    if (activeStickyMenu && scrollPosition <= 70) {
      header.style.boxShadow = "none";
      activeStickyMenu = false;
    }
  };
};

// Events
burgerIcon?.addEventListener("click", () => {
  toggleMenuMobile();
});

skiLinkM?.addEventListener("click", () => {
  toggleMenuMobile();
});

expLinkM?.addEventListener("click", () => {
  toggleMenuMobile();
});

proLinkM?.addEventListener("click", () => {
  toggleMenuMobile();
});

repLinkM?.addEventListener("click", () => {
  toggleMenuMobile();
});

conLinkM?.addEventListener("click", () => {
  toggleMenuMobile();
});

// Execute code
stickyMenu();
