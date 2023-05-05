const bannerToggleMenu = document.querySelector('.banner__toggle__menu'); 
const headerButton = document.querySelector('.btn__burger');
function toggleMenu() {
	bannerToggleMenu.classList.toggle('hidden'); 
}

headerButton.addEventListener('click', toggleMenu); 