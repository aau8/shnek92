import Swiper, { Navigation, Pagination, EffectFade } from "swiper";

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