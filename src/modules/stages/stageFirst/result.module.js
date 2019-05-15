import '../../../styles/sections/stageFirst/result.scss'

export const Result1 = {
	init(main) {
		main.currentPage = main.pagesID['result1']
		this.element = $('#result1')[0]
		this.target = $('#subjects')[0]
		this.submit = $(this.element).find('.leave-comment')[0].find('.button')[0]

		this.initEvents(main)
	},
	initEvents(main) {
		console.log(this.submit)
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