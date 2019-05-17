import '../../../styles/sections/stageFirst/study-content'

import { ChooseProfession } from './choose-profession.module'
import { ChooseProfessionTemplate } from './choose-profession.template'

export const StudyContent = {
	init(main, result) {
		main.currentPage = main.pagesID['study-content']
		this.element = document.getElementById('study-content')
		this.nextBtn = $(this.element).find('.button')[0]
		this.studyPlanBtn = $(this.element).find('.button')[1]
		this.target = $('#choose-profession')[0]

		this.initEvents(main, result)
	},
	initEvents(main, result) {
		this.nextBtn.addEventListener('click', event => {
			event.preventDefault()

			this.target.innerHTML += ChooseProfessionTemplate(result)
			this.slideOut(this.target, this.element)
			setTimeout(() => {
				ChooseProfession.init(main, result)
			}, 1400)
		})

		this.studyPlanBtn.addEventListener('click', event => {
			event.preventDefault()
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