const bannerToggleMenu = document.querySelector('.banner__toggle__menu'); // Находим меню

// const menuActive = document.querySelector('.menu-active'); // Находим меню
// console.log(banner__toggle__menu);
// console.log(menuActive);

const headerButton = document.querySelector('.btn__burger'); // Находим кнопку бургера

// const headerMenu = document.querySelector('.user-list__item-menu'); // Находим кнопку бургера

// let menuClose = document.querySelector('.menu-close'); // Находим кнопку крестика

function toggleMenu() {
	bannerToggleMenu.classList.toggle('hidden'); //Функция удаляет или устанавливает класс 'hidden' в div с классом 'menu-active'
}

headerButton.addEventListener('click', toggleMenu); // По клику на бургер срабатывает функция
// menuClose.addEventListener('click', toggleMenu); // По клику на крестик срабатывает функция