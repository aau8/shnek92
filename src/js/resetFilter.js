// Сброс настроек фильтра
const filterForm = document.querySelector('.m-filter__window')

if ( filterForm ) {
	
	filterForm.addEventListener('reset', e => {
		const range = filterForm.querySelector('.b-filter.is-range .filter-range__elem')
		const checkboxElems = filterForm.querySelectorAll('input[type=checkbox]')

		e.preventDefault()

		range.noUiSlider.set([
			Number(range.dataset.min),
			Number(range.dataset.max),
		])

		checkboxElems.forEach( checkbox => {
			checkbox.checked = false
		} )
	})
}