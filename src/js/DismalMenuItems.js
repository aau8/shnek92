// Перенос пунктов меню
class DismalMenuItems {

	constructor(menuList, options) {
		this.btnMore = document.querySelector('.menu__list-more')
		this.menuMore = null
		this.renderMinWidth = 800

		this.menuItemClass = 'menu__item'
		this.menuItemHideClass = 'is-hide'
		this.btnMoreClass = 'menu__list-more'
		this.btnMoreHideClass = 'is-hide'
		this.menuMoreClass = 'menu-more'

		this.eChange = new Event('change')

		this.menuList = typeof(menuList) === 'string' ? document.querySelector(menuList) : menuList
		this.menuItemElems = this.menuList.querySelectorAll(`.${this.menuItemClass}`)

		this._init()
		this._events()
	}

	_init() {
		if (window.innerWidth > this.renderMinWidth) {
			this.hasFewRow = this.menuList.clientHeight / Array.from(this.menuItemElems).reduce((accumulator, menuItem) => menuItem.clientHeight > accumulator ? menuItem.clientHeight : accumulator, 0) >= 2 ? true : false

			if (this.hasFewRow) {
				this.notFitItems = this._setNotFit()
				this.btnMore.classList.remove(this.btnMoreHideClass)
				this._renderMenuMore()
			}
		}

		this.menuList.classList.add('is-render')
	}

	_reset() {
		this.notFitItems = null
		this.hasFewRow = null
		this.menuList.classList.remove('is-render')
		if (this.btnMore) this.btnMore.classList.add(this.btnMoreHideClass)
		this.menuItemElems.forEach(menuItem => menuItem.classList.remove(this.menuItemHideClass))
	}

	_renderMenuMore() {
		if (this.notFitItems.length !== 0) {
			const menuItems = this.notFitItems.map(e => {
				const cloneElem = e.cloneNode(true)
				cloneElem.classList.add('menu-more__item')

				return cloneElem.outerHTML
			}).join('')

			if (!this.menuMore) {
				this.menuMore = document.createElement('div')
				this.menuMore.classList.add(this.menuMoreClass)
			}

			this.menuMore.innerHTML = `<ul class="menu-more__list">${menuItems}</ul>`
			this.notFitItems.forEach(menuItem => {
				menuItem.classList.add(this.menuItemHideClass)
			})

			document.body.append(this.menuMore)
		}
		else {
			if (this.menuMore) {
				this.menuMore.remove()
				this.menuMore = null
			}
		}

		this._setCoordsMenuMore()
	}

	_setCoordsMenuMore() {
		if (this.menuMore) {
			const btnMoreBoundingRect = this.btnMore.getBoundingClientRect()

			this.menuMore.style.left = btnMoreBoundingRect.left + btnMoreBoundingRect.width - this.menuMore.getBoundingClientRect().width + 'px'
			this.menuMore.style.top = btnMoreBoundingRect.top + btnMoreBoundingRect.height + 4 + 'px'
		}
	}

	_events() {
		let resizeTimeout

		window.addEventListener('resize', e => {
			clearTimeout(resizeTimeout)

			resizeTimeout = setTimeout(() => {
				this.menuList.dispatchEvent(this.eChange)
			}, 25)
		})

		window.addEventListener('click', e => {

			if (e.target.classList.contains(this.btnMoreClass) || e.target.closest(`.${this.btnMoreClass}`)) {
				this.menuMore.classList.toggle('is-show')
			}
			else {
				if (!e.target.classList.contains(this.menuMoreClass) && !e.target.closest(`.${this.menuMoreClass}`) && this.menuMore) {
					this.menuMore.classList.remove('is-show')
				}
			}
		})

		this.menuList.addEventListener('change', () => {
			this._reset()
			this._init()
		})
	}

	_setNotFit() {
		this.menuListWidth = this.menuList.getBoundingClientRect().width - (this.btnMore.getBoundingClientRect().width + 16)
		let totalWidth = 0

		return Array.from(this.menuItemElems).filter((menuItem, i) => {
			totalWidth += menuItem.getBoundingClientRect().width
			if (totalWidth > this.menuListWidth) return menuItem
		})
	}

	_createBtnMore() {
		const btnMore = `<button class="${this.btnMoreClass} ${this.btnMoreHideClass}"></button>`
		this.menuList.insertAdjacentHTML('afterend', btnMore)
		this.btnMore = document.querySelector(`.${this.btnMoreClass}`)
	}
}

new DismalMenuItems('.menu__list')
