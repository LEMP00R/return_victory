import '../../../styles/sections/stageFirst/common-info.scss'

import { StudyContent } from './study-content.module'
import { StudyContentTemplate } from './study-content.template'

export const CommonInfo = {
	init(main, result) {
		main.currentPage = main.pagesID['common-info']
		this.element = document.getElementById('common-info')
		this.submit = $(this.element).find('.button')[0]
		this.target = $('#study-content')[0]

		this.initEvents(main, result)
	},
	initEvents(main, result) {
		this.submit.addEventListener('click', event => {
			event.preventDefault()
			
			this.target.innerHTML += StudyContentTemplate
			this.slideOut(this.target, this.element)
			StudyContent.init(main, result)
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