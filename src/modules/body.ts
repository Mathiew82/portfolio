// Body elements
const goUpButton = document.querySelector<HTMLButtonElement>("#goUpButton");

// Variables and functions
let activeGoUpButton: boolean = false;

const displayGoUpButton = (): void => {
  if (!goUpButton) return;

  const pixelsToActivate = 700;

  const onScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (!activeGoUpButton && scrollPosition > pixelsToActivate) {
      goUpButton.classList.add("show");
      goUpButton.setAttribute("aria-hidden", "false");
      goUpButton.removeAttribute("tabindex");
      activeGoUpButton = true;
    } else if (activeGoUpButton && scrollPosition <= pixelsToActivate) {
      goUpButton.classList.remove("show");
      goUpButton.setAttribute("aria-hidden", "true");
      goUpButton.setAttribute("tabindex", "-1");
      activeGoUpButton = false;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
};

// Events
goUpButton?.addEventListener("click", () => {
  window.scrollTo(0, 0);
  const app = document.querySelector<HTMLElement>("#app");
  app?.focus({ preventScroll: true });
});

// Execute code
displayGoUpButton();
