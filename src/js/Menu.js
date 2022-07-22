import { bodyLock, bodyUnlock } from './utils/functions.js'

// Открытие/закрытие моб. меню
class Menu {

	constructor(selector) {
		this.menu = document.querySelector('.menu')
		this.menuIsOpen = false

		this._init()
	}

	_init() {
		document.addEventListener('click', e => {

			if (e.target.classList.contains('[data-menu-close]') || e.target.closest('[data-menu-close]')) {
				this.close()
			}

			if (e.target.classList.contains('menu') && this.menuIsOpen) {
				this.close()
			}

			if (e.target.classList.contains('[data-menu-open]') || e.target.closest('[data-menu-open]')) {
				this.open()
			}
		})
	}

	open() {
		this.menu.classList.add('is-show')
		bodyLock()

		this.menuIsOpen = true
		this._addEvent('open')

	}

	close() {
		this.menu.classList.remove('is-show')
		bodyUnlock()

		this.menuIsOpen = false
		this._addEvent('close')
	}

	_addEvent( eventName, options ) {
		const event = new Event(eventName)

		event.Menu = this

		if ( options && typeof options === 'object' ) event.Menu[options.key] = options.value

		this.menu.dispatchEvent(event)
	}
}

const menu = new Menu('.menu')
