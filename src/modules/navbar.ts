// Menu elements
const header = document.querySelector<HTMLElement>("header");
const menuMobile = document.querySelector<HTMLDivElement>("#menuMobile");
const burgerButton = document.querySelector<HTMLDivElement>("#burgerButton");
const themeToggleDesktop = document.querySelector<HTMLButtonElement>(
  "#themeToggleDesktop",
);
const themeToggleMobile =
  document.querySelector<HTMLAnchorElement>("#themeToggleMobile");

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
const themeStorageKey = "theme";
type Theme = "light" | "dark";

const updateThemeToggleLabels = (theme: Theme): void => {
  const nextTheme = theme === "dark" ? "light" : "dark";
  const buttonLabel = nextTheme === "light" ? "Light mode" : "Dark mode";
  const ariaLabel = `Switch to ${nextTheme} mode`;

  if (themeToggleDesktop) {
    themeToggleDesktop.textContent = buttonLabel;
    themeToggleDesktop.setAttribute("aria-label", ariaLabel);
  }

  if (themeToggleMobile) {
    themeToggleMobile.textContent = buttonLabel;
    themeToggleMobile.setAttribute("aria-label", ariaLabel);
  }
};

const applyTheme = (theme: Theme): void => {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  updateThemeToggleLabels(theme);
};

const getStoredTheme = (): Theme => {
  const savedTheme = window.localStorage.getItem(themeStorageKey);
  return savedTheme === "light" ? "light" : "dark";
};

const toggleTheme = (): void => {
  const isLightTheme =
    document.documentElement.getAttribute("data-theme") === "light";
  const nextTheme: Theme = isLightTheme ? "dark" : "light";

  window.localStorage.setItem(themeStorageKey, nextTheme);
  applyTheme(nextTheme);
};

const toggleMenuMobile = (): void => {
  burgerButton?.classList.toggle("open");
  menuMobile?.classList.toggle("open");
};

const stickyMenu = (): void => {
  if (!header) return;

  const pixelsToActivate: number = 40;

  const onScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (!activeStickyMenu && scrollPosition > pixelsToActivate) {
      header.style.boxShadow = "0 5px 30px -15px rgba(0, 10, 40, .2)";
      activeStickyMenu = true;
    } else if (activeStickyMenu && scrollPosition <= pixelsToActivate) {
      header.style.boxShadow = "none";
      activeStickyMenu = false;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
};

// Events
burgerButton?.addEventListener("click", () => {
  const expanded = burgerButton.ariaExpanded === "true";
  burgerButton.ariaExpanded = String(!expanded);
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
themeToggleDesktop?.addEventListener("click", toggleTheme);
themeToggleMobile?.addEventListener("click", (event) => {
  event.preventDefault();
  toggleTheme();
});

// Execute code
applyTheme(getStoredTheme());
stickyMenu();
