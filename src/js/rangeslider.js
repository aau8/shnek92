import noUiSlider from 'nouislider'
import wNumb from 'wnumb'

const rangeBlock = document.querySelector('.b-filter.is-range')

if ( rangeBlock ) {
	const range = rangeBlock.querySelector('.filter-range__elem')
	const tfMin = rangeBlock.querySelector('.filter__tf.is-min input')
	const tfMax = rangeBlock.querySelector('.filter__tf.is-max input')

	const rangeSlider = noUiSlider.create(range, {
		start: [
			Number(range.dataset.valueMin) || Number(range.dataset.min),
			Number(range.dataset.valueMax) || Number(range.dataset.max),
		],
		connect: true,
		step: 100,
		range: {
			'min': Number(range.dataset.min),
			'max': Number(range.dataset.max)
		},
		format: wNumb({
			decimals: 0,
			thousand: ' ',
		})
	})

	rangeSlider.on('update', arr => {
		tfMin.value = arr[0]
		tfMax.value = arr[1]

		tfMin.parentElement.dataset.value = arr[0]
		tfMax.parentElement.dataset.value = arr[1]
	})

	Array.from([ tfMin, tfMax ]).forEach( tf => {

		tf.addEventListener('focus', e => {
			tf.value = Number(tf.value.replace(/\s/g, ''))
		})

		tf.addEventListener('blur', e => {
			rangeSlider.set([ tfMin.value, tfMax.value ])
		})

		tf.addEventListener('change', e => {
			rangeSlider.set([ tfMin.value, tfMax.value ])
		})
	} )
}
