function burgerClick(){
	let menu = $('.side-menu')[0];
	switchClass(menu, 'side-menu-opened');
	menu.style = `top:${120+$('body')[0].scrollTop}px;`
	switchClass($('.burger')[0], 'burger-opened');
}