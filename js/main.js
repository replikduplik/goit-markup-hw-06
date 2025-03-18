// Eklenen JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Mobil menü işlevselliği
  const burgerButton = document.getElementById("burgerButton");
  const closeMenuButton = document.getElementById("closeMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  burgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("is-open");
  });

  closeMenuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("is-open");
  });

  // Modal işlevselliği
  const orderServiceButton = document.querySelector(".solutions-button");
  const closeModalButton = document.getElementById("closeModal");
  const modalOverlay = document.getElementById("modalOverlay");

  orderServiceButton.addEventListener("click", function () {
    modalOverlay.classList.add("is-open");
  });

  closeModalButton.addEventListener("click", function () {
    modalOverlay.classList.remove("is-open");
  });
});
