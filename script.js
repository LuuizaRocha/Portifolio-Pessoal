//modo claro e modo escuro

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');

  if (toggle) {
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});




// hamburger do menu celular responsivo
const mobileToggle = document.getElementById("mobileToggle")
const navMenu = document.getElementById("navMenu")

mobileToggle.addEventListener("click", () => {
  mobileToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
})

const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileToggle.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

//mascaras

const telInput = document.getElementById('subject');
telInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 6) {
    e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
  } else if (value.length > 2) {
    e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}`;
  } else if (value.length > 0) {
    e.target.value = `(${value}`;
  }
});


