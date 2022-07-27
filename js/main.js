const navBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav--mobile');
const navMobileLinks = document.querySelectorAll('.nav__list-item--mobile');
const year = document.querySelector('.current-year');
const accordionBoxes = document.querySelectorAll('.faq__accordion-box');

const showNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('show-nav');
};

navMobileLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navBtn.classList.remove('is-active');
		navMobile.classList.remove('show-nav');
	});
});

const showYear = () => {
	const date = new Date().getFullYear();
	year.textContent = date;
};

accordionBoxes.forEach((box) => {
	box.addEventListener('click', () => {
		box.classList.toggle('box-active');
	});
});

navBtn.addEventListener('click', showNav);
showYear();
