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

// navbar의 메뉴 클릭 시: 해당 section으로 이동 + navbar 메뉴는 사라지게
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// 768px 미만일 때 navbar 오른쪽의 bar 버튼 누르면 메뉴 나오게 하기
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// scroll 시 home 섹션의 컨텐츠가 서서히 투명해지게
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// home 섹션 절반 정도 scroll했을 때 arrowUp 버튼 나타나게 하기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) arrowUp.classList.add('visible');
  else arrowUp.classList.remove('visible');
});

// arrow-up 버튼 누르면 맨 위로 이동
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// 특정 섹션으로 이동할 때 스무스하게 이동 (유틸 함수 - 재활용 가능)
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
