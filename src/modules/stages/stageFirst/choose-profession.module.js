import '../../../styles/sections/stageFirst/choose-profession.scss'

import { ResultTemplate } from './result.template'
import { Result } from './result.module'

export const ChooseProfession = {
	init(main, result) {
		main.currentPage = main.pagesID['result1']
		this.popup = $('.container-for-popup')[0]
		this.popup.style.display = 'flex'
		this.submit = $(this.popup).find('.button')[0]
		this.target = document.getElementById('result1')

		this.initEvents(main)
	},
	initEvents(main) {
		this.submit.addEventListener('click', event => {
			event.preventDefault()
			this.popup.style.display = 'none'
			this.target.innerHTML += ResultTemplate

			this.slideOut(this.target, $('#choose-profession')[0])

			Result.init(main)
		})
	},
    slideIn(target) {
        target.classList.remove('slide--out')
        target.classList.add('slide--in')

    },
    slideOut(target, previous) {

        previous.classList.add('slide--out')
        previous.classList.remove('slide--in')

        setTimeout(() => {
            previous.replaceWith(target)

            setTimeout(() => {
                this.slideIn(target)
            }, 200)

        }, 600)
    }
}