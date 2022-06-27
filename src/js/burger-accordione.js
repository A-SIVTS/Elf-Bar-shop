$('.header__burger').on('click', function (e) {
	e.preventDefault;
	$(this).toggleClass('header__burger_active');
	$('.header__menu').toggleClass('header__menu_active');
	$('body').toggleClass('lock');

});
/*============================*/
$(document).ready(function () {
	$('.answer__title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(555);
	});
});