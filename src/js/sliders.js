import Swiper, { Navigation, Pagination, EffectFade, Thumbs, FreeMode } from "swiper";

const mainServicesSwiper = new Swiper('[data-swiper=main-services]', {
    modules: [ Navigation, Pagination, EffectFade ],

	slidesPerView: 1,
	spaceBetween: 24,
	loop: true,

	effect: 'fade',

    navigation: {
        nextEl: ".ms-slider__arrow.is-next",
        prevEl: ".ms-slider__arrow.is-prev",
    },

	// pagination: {
	// 	el: '.main-swiper__pagin',
	// 	type: 'bullets',
	// 	clickable: true,
	// },
});

const sectionManufSwiper = new Swiper('[data-swiper=s-manuf]', {
    modules: [ Navigation, Pagination, EffectFade ],


	breakpoints: {
		1100: {
			slidesPerView: 8,
			spaceBetween: 55,
		},
		768: {
			slidesPerView: 7,
			spaceBetween: 24,
		},
		550: {
			slidesPerView: 6,
			spaceBetween: 16,
		},
		425: {
			slidesPerView: 4,
			spaceBetween: 16,
		},
		0: {
			slidesPerView: 3,
			spaceBetween: 16,
		},
		360: {
			slidesPerView: 2.8,
			spaceBetween: 16,
		},
	},

    navigation: {
        nextEl: ".s-manuf-slider__arrow.is-next",
        prevEl: ".s-manuf-slider__arrow.is-prev",
    },
});

const productMainSwiper = new Swiper('[data-swiper=product-main]', {
	modules: [ EffectFade ],

	effect: 'fade',

	slidesPerView: 1,
	spaceBetween: 0,
	direction: 'vertical',
	allowTouchMove: false,
});

const productTrackSwiper = new Swiper('[data-swiper=product-track]', {
	modules: [ Thumbs, FreeMode ],

	breakpoints: {
		450: {
			slidesPerView: 5,
			spaceBetween: 16,
			slideToClickedSlide: true,
			watchSlidesProgress: true,
			// freeMode: true,
			loop: true,
			direction: 'vertical',
		},
		370: {
			slidesPerView: 5,
			spaceBetween: 12,
			slideToClickedSlide: true,
			watchSlidesProgress: true,
			// freeMode: true,
			loop: true,
			direction: 'horizontal',
		},
		0: {
			slidesPerView: 4,
			spaceBetween: 12,
			slideToClickedSlide: true,
			watchSlidesProgress: true,
			// freeMode: true,
			loop: true,
			direction: 'horizontal',
		},
	},

	thumbs: {
		swiper: productMainSwiper,
	},
});