const menuBtn = document.getElementById('menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('show')
})
