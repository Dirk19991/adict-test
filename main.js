import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const slides1 = document.querySelectorAll('.swiper-slide1');
const leftArrow1 = document.querySelector('.left_arrow1');
const rightArrow1 = document.querySelector('.right_arrow1');

const slides2 = document.querySelectorAll('.swiper-slide2');
const leftArrow2 = document.querySelector('.left_arrow2');
const rightArrow2 = document.querySelector('.right_arrow2');

const slides3 = document.querySelectorAll('.swiper-slide3');
const leftArrow3 = document.querySelector('.left_arrow3');
const rightArrow3 = document.querySelector('.right_arrow3');

const interviewTab = document.querySelector('.traineeship__interview');
const qualityTab = document.querySelector('.traineeship__quality');
const practiceTab = document.querySelector('.traineeship__practice');

const tabs = [interviewTab, qualityTab, practiceTab];
tabs[0].style.fontWeight = '700';
tabs[0].style.color = 'var(--blue)';
tabs[0].style.textDecoration = 'underline var(--blue)';
tabs[0].style.textUnderlineOffset = '11px';
tabs[0].style.textDecorationThickness = '3px';
tabs[0].style.zIndex = '2';

const nextStageButtons = document.querySelectorAll('.traineeship__nextStage');
nextStageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    swiper2.slideNext(300);
  });
});

function shadowArrow(swiper, leftArrow, rightArrow, slides, margin) {
  if (swiper.activeIndex === 0) {
    leftArrow.style.opacity = '0.25';
  }
  if (swiper.activeIndex !== 0) {
    leftArrow.style.opacity = '1';
  }
  if (swiper.activeIndex === slides.length - margin) {
    rightArrow.style.opacity = '0.25';
  }
  if (swiper.activeIndex !== slides.length - margin) {
    rightArrow.style.opacity = '1';
  }
}

leftArrow1.style.opacity = '0.25';
leftArrow2.style.opacity = '0.25';
leftArrow3.style.opacity = '0.25';

const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
});

const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
});

swiper1.on('slideChange', () =>
  shadowArrow(swiper1, leftArrow1, rightArrow1, slides1, 3)
);

swiper2.on('slideChange', () => {
  const activeIndex = swiper2.activeIndex;

  tabs.forEach((tab) => {
    tab.style.fontWeight = '500';
    tab.style.color = 'var(--black)';
    tab.style.textDecoration = 'none';
    tab.style.textUnderlineOffset = '0px';
    tab.style.textDecorationThickness = '0px';
    tab.style.zIndex = '0';
  });
  tabs[activeIndex].style.fontWeight = '700';
  tabs[activeIndex].style.color = 'var(--blue)';
  tabs[activeIndex].style.textDecoration = 'underline var(--blue)';
  tabs[activeIndex].style.textUnderlineOffset = '11px';
  tabs[activeIndex].style.textDecorationThickness = '3px';
  tabs[activeIndex].style.zIndex = '2';
  shadowArrow(swiper2, leftArrow2, rightArrow2, slides2, 1);
});

swiper3.on('slideChange', () =>
  shadowArrow(swiper3, leftArrow3, rightArrow3, slides3, 3)
);
