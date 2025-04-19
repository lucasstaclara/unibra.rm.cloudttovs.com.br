window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  document.body.classList.add("loaded");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000); // tempo até desaparecer suavemente
});
