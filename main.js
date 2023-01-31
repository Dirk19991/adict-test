import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const slides = document.querySelectorAll('.swiper-slide');
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');

leftArrow.style.opacity = '0.25';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.on('slideChange', function () {
  if (swiper.activeIndex === 0) {
    leftArrow.style.opacity = '0.25';
  }
  if (swiper.activeIndex !== 0) {
    leftArrow.style.opacity = '1';
  }
  if (swiper.activeIndex === slides.length - 3) {
    rightArrow.style.opacity = '0.25';
  }
  if (swiper.activeIndex !== slides.length - 3) {
    rightArrow.style.opacity = '1';
  }
});
