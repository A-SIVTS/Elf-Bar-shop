const btns = document.querySelectorAll('.header__buskett');
const modalOverlay = document.querySelector('.busket');
const modals = document.querySelectorAll('.busket__body');
const btnClose = document.querySelectorAll('.busket__close');



btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.add('busket__body--visible');
		});

		document.querySelector('body').classList.add('lock')

		document.querySelector(`[data-target="${path}"]`).classList.add('busket__body--visible');
		modalOverlay.classList.add('busket--visible');
		//modalOverlay.classList.add('busket__close--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('busket--visible');
		document.querySelector('body').classList.remove('lock')
		modals.forEach((el) => {
			el.classList.remove('busket__body--visible');
		});
	}
});

btnClose.forEach((el) => {
	el.addEventListener('click', (e) => {
		let pat = e.currentTarget.getAttribute('data-pat');

		document.querySelector('body').classList.remove('lock')

		modals.forEach((el) => {
			modalOverlay.classList.remove('busket--visible');
		});
	});
});
