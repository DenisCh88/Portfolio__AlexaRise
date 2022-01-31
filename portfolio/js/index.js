const i18Obj = {
	'en': {
	  'skills': 'Skills',
	  'portfolio': 'Portfolio',
	  'video': 'Video',
	  'price': 'Price',
	  'contacts': 'Contacts',
	  'hero-title': 'Alexa Rise',
	  'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
	  'hire': 'Hire me',
	  'skill-title-1': 'Digital photography',
	  'skill-text-1': 'High-quality photos in the studio and on the nature',
	  'skill-title-2': 'Video shooting',
	  'skill-text-2': 'Capture your moments so that they always stay with you',
	  'skill-title-3': 'Rotouch',
	  'skill-text-3': 'I strive to make photography surpass reality',
	  'skill-title-4': 'Audio',
	  'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
	  'winter': 'Winter',
	  'spring': 'Spring',
	  'summer': 'Summer',
	  'autumn': 'Autumn',
	  'price-description-1-span-1': 'One location',
	  'price-description-1-span-2': '120 photos in color',
	  'price-description-1-span-3': '12 photos in retouch',
	  'price-description-1-span-4': 'Readiness 2-3 weeks',
	  'price-description-1-span-5': 'Make up, visage',
	  'price-description-2-span-1': 'One or two locations',
	  'price-description-2-span-2': '200 photos in color',
	  'price-description-2-span-3': '20 photos in retouch',
	  'price-description-2-span-4': 'Readiness 1-2 weeks',
	  'price-description-2-span-5': 'Make up, visage',
	  'price-description-3-span-1': 'Three locations or more',
	  'price-description-3-span-2': '300 photos in color',
	  'price-description-3-span-3': '50 photos in retouch',
	  'price-description-3-span-4': 'Readiness 1 week',
	  'price-description-3-span-5': 'Make up, visage, hairstyle',
	  'order': 'Order shooting',
	  'contact-me': 'Contact me',
	  'send-message': 'Send message'
	},
	'ru': {
	  'skills': 'Навыки',
	  'portfolio': 'Портфолио',
	  'video': 'Видео',
	  'price': 'Цены',
	  'contacts': 'Контакты',
	  'hero-title': 'Алекса Райс',
	  'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
	  'hire': 'Пригласить',
	  'skill-title-1': 'Фотография',
	  'skill-text-1': 'Высококачественные фото в студии и на природе',
	  'skill-title-2': 'Видеосъемка',
	  'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
	  'skill-title-3': 'Ретушь',
	  'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
	  'skill-title-4': 'Звук',
	  'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
	  'winter': 'Зима',
	  'spring': 'Весна',
	  'summer': 'Лето',
	  'autumn': 'Осень',
	  'price-description-1-span-1': 'Одна локация',
	  'price-description-1-span-2': '120 цветных фото',
	  'price-description-1-span-3': '12 отретушированных фото',
	  'price-description-1-span-4': 'Готовность через 2-3 недели',
	  'price-description-1-span-5': 'Макияж, визаж',
	  'price-description-2-span-1': 'Одна-две локации',
	  'price-description-2-span-2': '200 цветных фото',
	  'price-description-2-span-3': '20 отретушированных фото',
	  'price-description-2-span-4': 'Готовность через 1-2 недели',
	  'price-description-2-span-5': 'Макияж, визаж',
	  'price-description-3-span-1': 'Три локации и больше',
	  'price-description-3-span-2': '300 цветных фото',
	  'price-description-3-span-3': '50 отретушированных фото',
	  'price-description-3-span-4': 'Готовность через 1 неделю',
	  'price-description-3-span-5': 'Макияж, визаж, прическа',
	  'order': 'Заказать съемку',
	  'contact-me': 'Свяжитесь со мной',
	  'send-message': 'Отправить'
	}
 }
 

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

const portfolioBtn = document.querySelectorAll('.portfolio__button');
const portfolioImages = document.querySelectorAll('.portfolio__img');
const portfolioBtns = document.querySelector('.portfolio__buttons');

portfolioBtns.addEventListener('click', changeImage);

function changeImage(event) {
	if(event.target.classList.contains('portfolio__button')) {
			portfolioImages.forEach((img, index) => img.src = `source/img/portfolio/${event.target.dataset.season}/${index + 1}.jpg`);
		portfolioBtn.forEach(item => item.classList.remove('active'));
		event.target.classList.add('active');
	}
 }


 const seasons = ['winter', 'spring', 'summer', 'autumn'];

 function preloadImages(seasons) {
	seasons.forEach( el => {
		for(let i = 1; i <= 6; i++) {
			const img = new Image();
			img.src = `source/img/portfolio/${el}/${i}.jpg`;
		 }
	})

 }

 preloadImages(seasons);

const radioLang = document.querySelectorAll('.lang__btn');
const radioBtns = document.querySelector('.header__language');
const radioBtn = document.querySelector('.lang__btn');
const changeLangClass =(e) => {
	if(e.target.classList.contains('lang__btn')){
		radioLang.forEach(item => item.classList.remove('active'));
		e.target.classList.add('active');
		const lang = e.target.dataset.lang;

		getTranslate(lang);

		function getTranslate(lang) {
			const actualLang = document.querySelectorAll('[data-i18]');

			actualLang.forEach(item => item.textContent =  i18Obj[lang][item.dataset.i18])
			console.log(actualLang); 
		}
		
	}
}

radioBtns.addEventListener('click', changeLangClass);
















