const toggleButton = document.getElementById("nav-toggle");
const navList = document.querySelector(".nav-list");

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
  toggleButton.setAttribute("aria-expanded", navList.classList.contains("active"));
});

// Opcional: cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav-list a").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    toggleButton.setAttribute("aria-expanded", false);
  });
});