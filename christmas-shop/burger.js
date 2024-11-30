const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__list-link');
const navButton = document.querySelector('.burger-button');
const overlay = document.querySelector('.overlay');

// При клике на иконку бургера вызываем функцию toggleMenu
navButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggleMenu();
});

// При клике на ссылки вызываем функцию toggleMenu
navLinks.forEach(el => el.addEventListener('click', () => toggleMenu()));

// При клике на область вне меню вызываем функцию toggleMenu
overlay.addEventListener('click', () => toggleMenu());

function toggleMenu() {
  // Переключаем стили элементов при клике: появляется меню, бургер превращается в крестик
  navMenu.classList.toggle('nav__is-visible');
  navButton.classList.toggle('burger-button_x');

  // Если меню открыто или закрыто
  if (navMenu.classList.contains('nav__is-visible')) {
    document.querySelector('body').setAttribute('style', 'overflow: hidden');
    overlay.classList.add('overlay_is-active');
  } else {
    document.querySelector('body').setAttribute('style', 'overflow: visible');
    overlay.classList.remove('overlay_is-active');
  }
}