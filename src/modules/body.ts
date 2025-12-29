const goUpButton = document.querySelector<HTMLButtonElement>("#goUpButton");

goUpButton?.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
