const productsBtn = document.querySelectorAll('.item__button');
const cartProductsList = document.querySelector('.busket__info');
const cart = document.querySelector('.header__buskett');
const cartQuantity = cart.querySelector('.busket__quantity');
const fullPrice = document.querySelector('.busket__price-subtitle');
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const printQuantity = () => {
	let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
	cartQuantity.textContent = productsListLength;
	productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};

const printFullPrice = () => {
	fullPrice.textContent = `${normalPrice(price)} ₽`;
};

const generateCartProduct = (img, title, price, id) => {
	return `
		<div class="busket__item">
			<article class="busket__item-art">
				<div class="info__img">
					<img src="${img}" alt="" class="info__img-item">
				</div>
					<div class="info__about">
						<div class="info__text">
						<p class="info__title">${title}</p>
					</div>
				</div>
				<div class="info__block">
					<div class="info__delete">Удалить</div>
					<div class="info__price-item">${normalPrice(price)}</div>
				</div>
			</article>
		</div>
	`;
};
//////////////////delite


const deleteProducts = (productParent) => {
	let id = productParent.querySelector('.busket__item-art').dataset.id;

	document.querySelector(`.catalog__item[data-id="${id}"]`).querySelector('.item__button').disabled = false;
	/*let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.info__price-item').textContent));
	minusFullPrice(currentPrice);
	printFullPrice();
	productParent.remove();

	printQuantity();*/
};

////////////////////////
productsBtn.forEach(el => {
	el.closest('.catalog__item').setAttribute('data-id', randomId());
	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.catalog__item');
		let id = parent.dataset.id;
		let img = parent.querySelector('.item__img').getAttribute('src');
		let title = parent.querySelector('.item__title').textContent;
		let priceString = priceWithoutSpaces(parent.querySelector('.item__price').textContent);

		let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.item__price').textContent));

		plusFullPrice(priceNumber);
		printFullPrice();

		cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
		printQuantity();


		self.disabled = true;
	});
});


//////////////

cartProductsList.addEventListener('click', (e) => {
	if (e.target.classList.contains('info__delete')) {
		deleteProducts(e.target.closest('.busket__item'));
	}
});