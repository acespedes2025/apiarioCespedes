
function mostrarMensaje() {
  alert("¡Gracias por tu interés! Envíanos un mensaje para coordinar tu pedido.");
}

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
});
