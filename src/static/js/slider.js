import Swiper from './swiper.js'

const heroSliderThumbs = new Swiper('.heroThumbs__slider', {
	slidesPerView: 2,
	spaceBetween: 10,
	breakpoints: {
		350: {
			slidesPerView: 3
		},
		500: {
			slidesPerView: 4
		},
		700: {
			slidesPerView: 5
		},
		800: {
			slidesPerView: 6
		},
	}

})

const heroSlider = new Swiper('.hero__slider', {
	keyboard: true,
	
	thumbs: {
		swiper: heroSliderThumbs,
	}
});