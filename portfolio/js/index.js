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

			actualLang.forEach(item => item.textContent =  i18Obj[lang][item.dataset.i18]);
		}
		
	}
}

radioBtns.addEventListener('click', changeLangClass);

const themeBtns = document.querySelector('.header__theme');
const themeBtn = document.querySelector('.header__theme-img');
const heroTheme = document.querySelector('.hero__img');
const contactsTheme = document.querySelector('.contacts__img');
const logoTheme = document.querySelector('.header__logo-img');

const themeWrapper = document.querySelector('.wrapper');
const themeLangBtn = document.querySelectorAll('.lang__btn');
const headerBlockTitleTheme = document.querySelectorAll('.header-block__title');
const portfolioButtonTheme = document.querySelectorAll('.portfolio__button ');
const heroButtonTheme = document.querySelectorAll('.hero__button');
const priceBtnTheme = document.querySelectorAll('.item-price__button');
const contactTitleTheme = document.querySelector('.contacts__title');
const contactsItemTheme = document.querySelectorAll('.contacts__item');
const contactsButtonTheme = document.querySelector('.contacts__button')
const schoolLinkTheme = document.querySelector('.school__link');

const instagramTheme = document.querySelector('.instagram');
const facebookTheme = document.querySelector('.facebook');
const twiterTheme = document.querySelector('.twiter');
const pintrestTheme = document.querySelector('.pintrest');
const burgerMenuTheme = document.querySelector('.header__menu-min');
const headerMenuActiveTheme = document.querySelector('.header__menu');
const playerBtns = document.querySelectorAll('.player__button');

themeBtns.addEventListener('click', themeBtnChange);

function themeBtnChange(e){
	if(e.target.classList.contains('header__theme-img')){
		document.body.classList.toggle('dark');
		if(document.body.classList.contains('dark')){

			themeWrapper.classList.add('light-theme');
			contactTitleTheme.classList.add('contacts__title_theme');
			contactsButtonTheme.classList.add('contacts__button_theme');
			schoolLinkTheme.classList.add('school__link_theme');
			burgerMenuTheme.classList.add('header__menu-min_theme');
			headerMenuActiveTheme.classList.add('_active_theme');
			
			themeLangBtn.forEach(item => item.classList.add('light-theme-lang__btn'));
			headerBlockTitleTheme.forEach(item => item.classList.add('header__block_light'));
			portfolioButtonTheme.forEach(item => item.classList.add('portfolio__button_theme'));
			heroButtonTheme.forEach(item => item.classList.add('hero__button_theme'));
			priceBtnTheme.forEach(item => item.classList.add('item-price__button_theme'));
			contactsItemTheme.forEach(item => item.classList.add('contacts__item_theme'));
			playerBtns.forEach(item => item.style.background = 'rgb(255,255,255)');

			logoTheme.src = 'source/icons/logo/logo-1.svg';
			contactsTheme.src = 'source/img/contacts/contacts-light.jpg';
			heroTheme.src = 'source/img/hero/bg-light.jpg';			
			themeBtn.src = 'source/icons/theme/moon.svg';

			instagramTheme.src = 'source/icons/footer/inst-light.svg';
			facebookTheme.src = 'source/icons/footer/fb-light.svg';
			twiterTheme.src = 'source/icons/footer/tw-light.svg';
			pintrestTheme.src = 'source/icons/footer/pinterest-light.svg';
		} else {
			themeWrapper.classList.remove('light-theme');
			contactTitleTheme.classList.remove('contacts__title_theme');
			contactsButtonTheme.classList.remove('contacts__button_theme');
			schoolLinkTheme.classList.remove('school__link_theme');
			burgerMenuTheme.classList.remove('header__menu-min_theme');
			headerMenuActiveTheme.classList.remove('_active_theme');

			themeLangBtn.forEach(item => item.classList.remove('light-theme-lang__btn'));
			headerBlockTitleTheme.forEach(item => item.classList.remove('header__block_light'));
			portfolioButtonTheme.forEach(item => item.classList.remove('portfolio__button_theme'));
			heroButtonTheme.forEach(item => item.classList.remove('hero__button_theme'));
			priceBtnTheme.forEach(item => item.classList.remove('item-price__button_theme'));
			contactsItemTheme.forEach(item => item.classList.remove('contacts__item_theme'));
			playerBtns.forEach(item => item.style.background = 'rgb(0,0,0)');
			
			logoTheme.src = 'source/icons/logo/logo.svg';
			contactsTheme.src = 'source/img/contacts/contacts.jpg';
			heroTheme.src = 'source/img/hero/bg.jpg';	
			themeBtn.src = 'source/icons/theme/sun.svg';

			instagramTheme.src = 'source/icons/footer/inst.svg';
			facebookTheme.src = 'source/icons/footer/fb.svg';
			twiterTheme.src = 'source/icons/footer/tw.svg';
			pintrestTheme.src = 'source/icons/footer/pinterest.svg';

		}
	}
}

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const playBtn = player.querySelector('.play-immage');
const volumeBtn = player.querySelector('.volume-immage');
const volume = player.querySelector('.volume');
const progress = player.querySelector('.progress');
const poster = player.querySelector('.video__poster');
const centralPlayBtn = player.querySelector('.video__play-btn');

function togglePlay(){
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton(){
	const icon = this.paused ? 'source/icons/video/play.svg' : 'source/icons/video/pause.svg';
	playBtn.src = icon;
	this.paused ? centralPlayBtn.style.display = 'block' : centralPlayBtn.style.display = 'none';
}

function volumeRangeUpdate(){
	video[this.name] = this.value;
	if (this.name === 'volume' && this.value === '0'){
		volumeBtn.src = 'source/icons/video/mute.svg'
		
	} else {
		volumeBtn.src = 'source/icons/video/volume.svg'
	}

}

function progressRangeUpdate(){
	video.currentTime = this.value*video.duration;
		
}

function handleRangeUpdate(){
	progress.value = video.currentTime/video.duration	;
}

function updateVolumeButton(){
	video.muted = !video.muted;
	if( video.muted) {
		volumeBtn.src = 'source/icons/video/mute.svg'
	}else {
		volumeBtn.src = 'source/icons/video/volume.svg'
	}
}

function posterHide(){
	poster.style.display = 'none';
	
	video.play();
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleRangeUpdate);

playBtn.addEventListener('click', togglePlay);

volume.addEventListener('change', volumeRangeUpdate);
volume.addEventListener('input', volumeRangeUpdate);
progress.addEventListener('change', progressRangeUpdate);
progress.addEventListener('input', progressRangeUpdate);

volumeBtn.addEventListener('click', updateVolumeButton);
poster.addEventListener('click',posterHide);
centralPlayBtn.addEventListener('click', posterHide)




