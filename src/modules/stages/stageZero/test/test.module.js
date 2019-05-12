import '../../../../styles/sections/stageZero/test/test.scss'
import { TestTemplate } from './test.template'
import { Question2 } from './question2.module'
import { Question2Template } from './question2.template'

export const Test = {
	init(main) {
        main.currentPage = main.pagesID['test']
		this.element = document.getElementById('test')
		this.element.innerHTML += TestTemplate
        this.submit = $(this.element).find('.button')[0]
        this.checkboxes = Array.from($(this.element).find(':checkbox'))
        this.target = document.createElement('form')
        this.target.className = 'test__form slide--out'
        this.target.innerHTML += Question2Template
        this.check = false
        this.result = null
        this.marks = {
            SI: 0,
            CS: 0,
            CI: 0,
            ACIS: 0
        }

		this.slideOut(this.element, document.getElementById('greeting')) 

        this.initEvents(main)
	},
    initEvents(main) {
        this.submit.addEventListener('click', event => {
            event.preventDefault()

            if (this.check) {
                this.takeResult(this.result)
                this.slideOut(this.target, $(this.element).find('.test__form')[0])
                this.move($('#test__bar')[0])
                setTimeout(() => {
                    Question2.init(this.marks, main)
                }, 800)
            }
        })

        $(this.checkboxes).on('change', event => {
            $(event.target).addClass('inp-cbx--checked')
            $(this.checkboxes).not(event.target).removeClass('inp-cbx--checked')
            this.check = true
            this.result = $(event.target).attr('data-department').split(',')
            
        })
    },
    move(progress) {
      let width = progress.style.width ? progress.style.width : 0
      let r = setInterval(slide, 20)
      function slide() {
        if (width >= 10) {
          clearInterval(r)
        } else {
          width++
          progress.style.width = width + '%'
        }
      }
    },
    takeResult(result) {
        result.map(item => {
            item = item.trim()
            this.marks.SI += "SI" === item ? 1 : 0
            this.marks.CS += "CS" === item ? 1 : 0
            this.marks.CI += "CI" === item ? 1 : 0
            this.marks.ACIS += "ACIS" === item ? 1 : 0
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