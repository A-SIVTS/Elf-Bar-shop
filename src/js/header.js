const header = document.querySelector('.header');
const main = document.querySelector('.main');
const headerHeight = header.offsetHeight;
const mainHeight = main.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	console.log(scrollDistance)


	if (scrollDistance > lastScrollTop) {
		header.classList.remove('header--fixed');
		main.style.marginTop = null;
	} else {
		header.classList.add('header--fixed');
		main.style.marginTop = `${headerHeight}px`;
	}
	if (scrollDistance == 0) {
		header.classList.remove('header--fixed');
		main.style.marginTop = null;
	}

	lastScrollTop = scrollDistance;
});
