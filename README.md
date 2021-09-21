# PORTFOLIO

## 구성
1. Interactive Navbar
2. Home
3. About
4. Skills
5. Projects
6. Contact

## 어려웠던 점

navbar의 각 메뉴 선택 시 선택요소만 css 변경(class 변경)

### 첫 번째 코드

선택된 메뉴에 css가 들어갔지만 다른 메뉴를 클릭했을 때 기존 메뉴 효과가 사라지지 않음

```jsx
for (let i = 0; i < navbarMenuItem.length; i++) {
  navbarMenuItem[i].addEventListener('click', (e) => {
    let element = e.target;
    element.classList.add('active');
  });

	// 이 코드 2줄은 작동하지 않음
  if (navbarMenuItem[i].classList.contains('active')) {
    navbarMenuItem[i].classList.remove('active');
  }
}
```

### 두 번째 코드 (해결)

출처: [https://ddorang-d.tistory.com/122](https://ddorang-d.tistory.com/122)

```jsx
function isActive(ulEl, liEl) {
  // ul(navbarMenu)의 모든 li에서 active 제거하기
  // Array.from으로 ul의 자식요소(li)들을 유사배열로 만든 후 
	// forEach를 돌려서 active 클래스 제거
  Array.from(ulEl.children).forEach((prev) => prev.classList.remove('active'));

  // 선택된 메뉴에만 active 부여
	// (전체를 먼저 처리한 후 부분적인 요소 처리)
  liEl.classList.add('active');
}

// ul에 클릭이벤트 부여
navbarMenu.addEventListener('click', (e) => {
  const element = e.target;
	// 선택한 메뉴를 ul(기존 active 제거용)과 함께 isActive 함수에 넣어주기
  isActive(navbarMenu, element);
});
```

## 참고 코드

### ArrowUp 버튼 - 보여주기 애니메이션

display: none ⇒ 요소를 완전히 없어지게 하지만 transition 애니메이션을 줄 수 없음
opacity: 0 ⇒ 애니메이션은 가능하지만 사용자가 클릭이 가능함 (button에 cursor: pointer가 적용되어 있을 경우 눈에 안 보여도 hover 시 커서 나타남)

⇒ opacity로 애니메이션을 주되 pointer-events: none; 속성을 같이 주면 해결 
(.visible이 있어서 보일 때는 pointer-events: auto로 바꿔주기)

```jsx
.arrow-up {
	opacity: 0;
	transition: opacity 300ms ease-in;
	pointer-events: none;
}

.arrow-up.visible {
	opacity: 1;
	pointer-events: auto;
}
```

opacity: 0 ⇒ 애니메이션은 가능하지만 사용자가 클릭이 가능함 (button에 cursor: pointer가 적용되어 있을 경우 눈에 안 보여도 hover 시 커서 나타남)

⇒ opacity로 애니메이션을 주되 pointer-events: none; 속성을 같이 주면 해결 

(.visible이 있어서 보일 때는 pointer-events: auto로 바꿔주기)

```jsx
.arrow-up {
	opacity: 0;
	transition: opacity 300ms ease-in;
	pointer-events: none;
}

.arrow-up.visible {
	opacity: 1;
	pointer-events: auto;
}
```
