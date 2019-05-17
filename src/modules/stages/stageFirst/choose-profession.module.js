import '../../../styles/sections/stageFirst/choose-profession.scss'

import { Result1Template } from './result.template'
import { Result1 } from './result.module'

export const ChooseProfession = {
	init(main, result) {
		main.currentPage = main.pagesID['choose-profession']
		this.popup = $('.container-for-popup')[0]
		this.popup.style.display = 'flex'
		this.submit = $(this.popup).find('.button')[0]
		this.target = document.getElementById('result1')

		this.initEvents(main, result)
	},
	initEvents(main, res) {
		this.submit.addEventListener('click', event => {
			event.preventDefault()
			this.popup.style.display = 'none'
			console.log(res)
			this.target.innerHTML += Result1Template({
				result: '51',
				comments: [
					{name: 'Олександр Бойко', comment: 'Дуже кльовий квест!', date: '14.05.2019'},
					{name: 'Іванов Іван', comment: 'Дуже кльовий квест!', date: '14.05.2019'},
					{name: 'Вишневський Дмитро', comment: 'Дуже кльовий квест!', date: '14.05.2019'}
				]
			})

			this.slideOut(this.target, $('#choose-profession')[0])

			Result1.init(main)
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