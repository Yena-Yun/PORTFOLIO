'use strict';

// navbar가 맨 위에 있을 때는 투명하게 만들기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// navbar 메뉴 클릭 시 해당 section으로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoView(link);
});

// navbar 768px 미만일 때 햄버거바 누르면 나오게 하기
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// scroll 시 home의 컨텐츠가 서서히 투명해지게
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow-up 버튼 누르면 맨 위로 이동
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) arrowUp.classList.add('visible');
  else arrowUp.classList.remove('visible');
});

// 특정 section으로 이동할 때 스무스하게 이동 (재활용 가능한 유틸 함수)
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
