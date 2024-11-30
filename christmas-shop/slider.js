const slider = document.querySelector('.slider-list');
const sliderButtonPrev = document.querySelector('.slider-button_prev');
const sliderButtonNext = document.querySelector('.slider-button_next');
const sliderWidth = slider.scrollWidth;  // Получаем всю длину слайдера
const sliderVisibleWidth = slider.offsetWidth;  // Получаем только видимую длину слайдера
const sliderStyles = window.getComputedStyle(slider);  // Получаем все стили слайдера

let countClicks = 0;  // Счетчик кликов
let windowWidth = window.innerWidth;  // Вычисляем длину окна
let clicks = (windowWidth > 768) ? 3 : 6;  // Вычисляем нужное количество кликов в зависимости от длины окна
// Вычисляем длину сдвига слайдера
let moveWidth = (windowWidth > 768) ? (sliderWidth - sliderVisibleWidth) / clicks : (sliderWidth - sliderVisibleWidth) / clicks;

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
  clicks = (windowWidth > 768) ? 3 : 6;
  moveWidth = (windowWidth > 768) ? (sliderWidth - sliderVisibleWidth) / clicks : (sliderWidth - sliderVisibleWidth) / clicks;
  countClicks = 0;
  slider.setAttribute('style', `left: 0px`);
  sliderButtonPrev.disabled = true;
  sliderButtonPrev.classList.add('button_disabled');
  sliderButtonNext.disabled = false;
  sliderButtonNext.classList.remove('button_disabled');
  return windowWidth, clicks, moveWidth
});

function getSliderLeftProperty() {
  let sliderLeftProperty = sliderStyles.getPropertyValue('left');
  let left;
  if (sliderLeftProperty < 0) {
    left = -Number((Array.from(sliderLeftProperty).slice(1, -2)).join(''));
  } else {
    left = Number((Array.from(sliderLeftProperty).slice(0, -2)).join(''));
  }
  return left;
}

let animationInProgress = false;

sliderButtonNext.addEventListener('click', (e) => {
  // не обрабатываем нажатия, если анимация проигрывается
  if (animationInProgress) {
    return false;
  }
  // установка флага
  animationInProgress = true;
  // когда анимация закончится флаг нужно снять
  setTimeout(function () { animationInProgress = false; }, 1000);

  countClicks++;
  moveSliderRight(getSliderLeftProperty());
  if (countClicks > 0) {
    sliderButtonPrev.disabled = false;
    sliderButtonPrev.classList.remove('button_disabled');
  }
  if (countClicks == ((windowWidth > 768) ? 3 : 6)) {
    sliderButtonNext.disabled = true;
    sliderButtonNext.classList.add('button_disabled');
  }
});

sliderButtonPrev.addEventListener('click', () => {
  // не обрабатываем нажатия, если анимация проигрывается
  if (animationInProgress) {
    return false;
  }
  // установка флага
  animationInProgress = true;
  // когда анимация закончится флаг нужно снять
  setTimeout(function () { animationInProgress = false; }, 1000);

  countClicks--;
  moveSliderLeft(getSliderLeftProperty());
  if (countClicks < ((windowWidth > 768) ? 3 : 6)) {
    sliderButtonNext.disabled = false;
    sliderButtonNext.classList.remove('button_disabled');
  }
  if (countClicks == 0) {
    sliderButtonPrev.disabled = true;
    sliderButtonPrev.classList.add('button_disabled');
  }
});

function moveSliderRight(left) {
  slider.setAttribute('style', `left: ${left - moveWidth}px`);
}

function moveSliderLeft(left) {
  slider.setAttribute('style', `left: ${left + moveWidth}px`);
}

  // ------------------------------------------------------  //

  // function moveSliderRight() {
  //   let left = getSliderLeftProperty();
  //   console.log(left);
  //   slider.setAttribute('style', `left: ${-(left + getMoveWidth())}px`)
  // }


  // function moveSliderLeft() {
  //   let count = 0;
  //   console.log(getSliderLeftProperty());
  //   let left = getSliderLeftProperty();

  //   slider.setAttribute('style', `left: ${(left + getMoveWidth())}px`)
  // }


  // Вычисляем длину сдвига слайдера
  // function getMoveWidth() {
  //   let windowWidth = getwindowWidth();
  //   let clicks = getClicks();
  //   if (windowWidth > 768) {
  //     return (sliderWidth - sliderVisibleWidth) / clicks;
  //   }
  //   return (sliderWidth - sliderVisibleWidth) / clicks;
  // }

  // Вычисляем нужное количество кликов в зависимости от длины окна
  // function getClicks() {
  //   return (getwindowWidth() > 768) ? 3 : 6;
  // }

  // Вычисляем длину окна
  // function getwindowWidth() {
  //   return window.innerWidth;
  // }

  // console.log(slider.getAttribute('style', 'left'));
  // console.log('move width = ', getMoveWidth());
  // getSliderLeftProperty();
  // console.log('slider width = ', slider.scrollWidth);  // 1995px, отступ между карточками по 22px

  // Получаем все стили слайдера
  // const sliderStyles = window.getComputedStyle(slider)
  // Получаем матрицу значений transform
  // const sliderTransformProperty = sliderStyles.getPropertyValue('transform');
  // Переводим матрицу значений transform в массив
  // const matrixValues = sliderTransformProperty.match(/matrix.*\((.+)\)/)[1].split(', ');
  // console.log(sliderTransformProperty);
  // console.log(matrixValues[4]);