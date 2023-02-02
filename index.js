// VALIDATION CODE

const inviteForm = document.querySelector('.invite__form');
const inviteName = document.querySelector('#inviteName');
const inviteEmail = document.querySelector('#inviteEmail');
const invitePhone = document.querySelector('#invitePhone');
const invitePersonal = document.querySelector('#invitePersonal');
const inviteCheckbox = document.querySelector('#inviteCheckbox');

const inviteNameLine = document.querySelector('#inviteNameLine');
const inviteEmailLine = document.querySelector('#inviteEmailLine');
const invitePhoneLine = document.querySelector('#invitePhoneLine');
const invitePersonalLine = document.querySelector('#invitePersonalLine');

const inputs_lines = [
  [inviteName, inviteNameLine, 'isAlpha'],
  [inviteEmail, inviteEmailLine, 'isEmail'],
  [invitePhone, invitePhoneLine, 'isMobilePhone'],
  [invitePersonal, invitePersonalLine, 'isAlpha'],
];

function validate(el) {
  const [name, line, option] = el;

  if (!name.value) return;

  function setMessage() {
    line.style.backgroundColor = 'red';
    line.insertAdjacentHTML(
      'beforeend',
      `<div class='warning' style='color:red; position:absolute; margin-top: 3px; font-size: 14px'>Неправильный формат</div`
    );
  }

  if (option === 'isAlpha') {
    if (!validator[option](name.value, ['ru-RU'])) {
      setMessage();
    }
  } else {
    if (!validator[option](name.value)) {
      setMessage();
    }
  }
}

function validateCheckbox(el) {
  if (!el.checked) {
    document
      .querySelector('.invite__checkbox')
      .insertAdjacentHTML(
        'beforeEnd',
        `<div class='warning' style='color:red; position:absolute; margin-top: 3px; font-size: 14px'>Требуется ваше согласие</div`
      );
  }
}

function makeLineRed(el, line) {
  if (!el.value) {
    line.style.backgroundColor = 'red';
    line.insertAdjacentHTML(
      'beforeend',
      `<div class='warning' style='color:red; position:absolute; margin-top: 3px; font-size: 14px'>Вы не заполнили поле</div`
    );
  }
}

function makeLineWhite(line) {
  line.style.backgroundColor = 'white';
}

inviteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelectorAll('.warning').forEach((el) => el.remove());
  inputs_lines.forEach((el) => makeLineWhite(el[1]));
  inputs_lines.forEach((el) => makeLineRed(el[0], el[1]));
  inputs_lines.forEach((el) => validate(el));
  validateCheckbox(inviteCheckbox);

  if (document.querySelectorAll('.warning').length === 0) {
    document.querySelector('.invite').style.display = 'none';
    document.querySelector('.thanks').style.display = 'flex';
    document.querySelector('.thanks__button').addEventListener('click', () => {
      document.querySelector('.invite').style.display = 'flex';
      document.querySelector('.thanks').style.display = 'none';
      inputs_lines.forEach((el) => (el[0].value = ''));
      inviteCheckbox.checked = false;
    });
  }
});

// SWIPERS CODE

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
tabs[0].style.textUnderlineOffset = window.innerWidth > 1200 ? '11px' : '13px';
tabs[0].style.textDecorationThickness =
  window.innerWidth > 1200 ? '3px' : '1px';
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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },
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
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },
  },
});

swiper1.on('slideChange', () =>
  shadowArrow(swiper1, leftArrow1, rightArrow1, slides1, 3)
);

swiper2.on('slideChange', () => {
  const activeIndex = swiper2.activeIndex;

  if (
    activeIndex === 2 &&
    window.innerWidth < 1200 &&
    window.innerWidth > 768
  ) {
    document.querySelector('.traineeship__tabs').style.transform =
      'translate(-250px)';
  }

  if (
    activeIndex !== 2 &&
    window.innerWidth < 1200 &&
    window.innerWidth > 768
  ) {
    document.querySelector('.traineeship__tabs').style.transform = '';
  }

  if (activeIndex === 0 && window.innerWidth < 768) {
    document.querySelector('.traineeship__tabs').style.transform = '';
  }

  if (activeIndex === 1 && window.innerWidth < 768) {
    document.querySelector('.traineeship__tabs').style.transform =
      'translate(-275px)';
  }

  if (activeIndex === 2 && window.innerWidth < 768) {
    document.querySelector('.traineeship__tabs').style.transform =
      'translate(-660px)';
  }

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
  tabs[activeIndex].style.textUnderlineOffset =
    window.innerWidth > 1200 ? '11px' : '13px';
  tabs[activeIndex].style.textDecorationThickness =
    window.innerWidth > 1200 ? '3px' : '1px';
  tabs[activeIndex].style.zIndex = '2';

  shadowArrow(swiper2, leftArrow2, rightArrow2, slides2, 1);
});

swiper3.on('slideChange', () =>
  shadowArrow(swiper3, leftArrow3, rightArrow3, slides3, 3)
);

// NAVIGATION CODE

const whoButton = document.querySelector('.header__who');
const offerButton = document.querySelector('.header__offer');
const stagesButton = document.querySelector('.header__stages');
const articlesButton = document.querySelector('.header__articles');
const submitButton = document.querySelector('.header__submit');
const submitButton2 = document.querySelector('.hero__frontend_submit');
const letsgoButton = document.querySelector('.begin__button');

const whoButtonTarget = document.querySelector('#whoButtonTarget');
const offerButtonTarget = document.querySelector('#offerButtonTarget');
const stagesButtonTarget = document.querySelector('#stagesButtonTarget');
const articlesButtonTarget = document.querySelector('#articlesButtonTarget');
const submitButtonTarget = document.querySelector('#submitButtonTarget');
const letsgoButtonTarget = document.querySelector('#submitButtonTarget');

const buttons_targets = [
  [whoButton, whoButtonTarget],
  [offerButton, offerButtonTarget],
  [stagesButton, stagesButtonTarget],
  [articlesButton, articlesButtonTarget],
  [submitButton, submitButtonTarget],
  [submitButton2, submitButtonTarget],
  [letsgoButton, letsgoButtonTarget],
];

buttons_targets.forEach((el) => {
  const [button, target] = el;
  button.addEventListener('click', () => {
    target.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      if (window.innerWidth < 1200) {
        closeMenu();
      }
    }, 300);
  });
});

// HAMBURGER CODE

const openBurgerIcon = document.querySelector('.header__hamburger_open');
const closeBurgerIcon = document.querySelector('.header__hamburger_close');
const headerLinks = document.querySelector('.header__links');
const headerSubmit = document.querySelector('.header__submit');
const heroSection = document.querySelector('.hero');

function openMenu() {
  openBurgerIcon.style.display = 'none';
  closeBurgerIcon.style.display = 'block';
  headerLinks.style.display = 'flex';
  headerSubmit.style.display = 'flex';
  heroSection.style.visibility = 'hidden';
}

function closeMenu() {
  openBurgerIcon.style.display = 'block';
  closeBurgerIcon.style.display = 'none';
  headerLinks.style.display = 'none';
  headerSubmit.style.display = 'none';
  heroSection.style.visibility = 'visible';
}

function resetOnResize() {
  if (window.innerWidth > 1200) {
    headerLinks.style.display = 'flex';
    openBurgerIcon.style.display = 'none';
    closeBurgerIcon.style.display = 'none';
    headerSubmit.style.display = 'flex';
    heroSection.style.visibility = 'visible';
    document.querySelector('.traineeship__tabs').style.transform = '';
  }
  if (window.innerWidth < 1200) {
    closeMenu();
  }
}

openBurgerIcon.addEventListener('click', openMenu);
closeBurgerIcon.addEventListener('click', closeMenu);
window.addEventListener('resize', resetOnResize);
