import '../../../styles/sections/stageZero/result.scss'

import { CommonInfo } from '../stageFirst/common-info.module'

export const Result = {
	init(main) {
		main.currentPage = main.pagesID['result']
		this.element = document.getElementById('result')
		this.submit = $(this.element).find('.button')[0]
		this.target = $('#common-info')[0]

		this.initEvents(main)
	},
	initEvents(main) {
		this.submit.addEventListener('click', event => {
			event.preventDefault()
			
			this.slideOut(this.target, this.element)
			CommonInfo.init(main)
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