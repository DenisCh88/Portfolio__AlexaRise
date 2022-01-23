console.log('hello');

const headerMenuMin = document.querySelector('.header__menu-min');
const headerMenu = document.querySelector('.header__menu');
if(headerMenuMin){
	
	headerMenuMin.addEventListener("click", function(e){ 
		document.body.classList.toggle('_lock');
		headerMenuMin.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	}); 
}


const headerLinks = document.querySelectorAll('.header__link[data-goto]');
if (headerLinks.length > 0) {
	headerLinks.forEach(headerLink => {
		headerLink.addEventListener('click', onHeaderLinkClick)
	});

	function onHeaderLinkClick(e) {
		const headerLink = e.target;
		if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
			const gotoBlock = document.querySelector(headerLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY; 

			if(headerMenuMin.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				headerMenuMin.classList.remove('_active');
				headerMenu.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault(); 
		}
	}
}