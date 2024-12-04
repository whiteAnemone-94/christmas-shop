const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__list-link');
const navButton = document.querySelector('.burger-button');
const overlay = document.querySelector('.overlay');

// window.addEventListener('resize', () => {
//   document.querySelector('body').setAttribute('style', 'overflow: visible');
//   overlay.classList.remove('overlay_is-active');
//   if (window.innerWidth > 768) {
//     navButton.removeEventListener('click', (e) => {
//       e.preventDefault();
//       toggleMenu();
//     });
//     overlay.removeEventListener('click', () => toggleMenu());
//     navLinks.forEach(el => {
//       if (el.classList.contains('nav__list-link_active')) {
//         el.setAttribute('style', 'pointer-events: none')
//       }
//       el.removeEventListener('click', () => toggleMenu())
//     })
//   } else if (window.innerWidth <= 768) {
//     navButton.addEventListener('click', (e) => {
//       e.preventDefault();
//       toggleMenu();
//     });
//     overlay.addEventListener('click', () => toggleMenu());
//     navLinks.forEach(el => {
//       if (el.classList.contains('nav__list-link_active')) {
//         el.setAttribute('style', 'pointer-events: all')
//       }
//       el.addEventListener('click', () => toggleMenu())
//     })
//   }
// })

// При клике на иконку бургера вызываем функцию toggleMenu
  navButton.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

if (window.innerWidth <= 768) {
  // При клике на ссылки вызываем функцию toggleMenu
  navLinks.forEach(el => {
    if (el.classList.contains('nav__list-link_active')) {
      el.setAttribute('style', 'pointer-events: all');
    }
    el.addEventListener('click', () => toggleMenu());
  });

  // При клике на область вне меню вызываем функцию toggleMenu
  overlay.addEventListener('click', () => toggleMenu());
}

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