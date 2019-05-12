import { Question6 } from './question6.module'
import { Question6Template } from './question6.template'

export const Question5 = {

	init(marks, main) {
        this.element = document.getElementById('test')
		this.submit = $(this.element).find('.button')[0]
		this.checkboxes = Array.from($(this.element).find(':checkbox'))
		this.target = document.createElement('form')
        this.target.className = 'test__form slide--out'
        this.target.innerHTML += Question6Template
        this.check = false
        this.result = null
        this.marks = marks

        this.initEvents(main)
	},initEvents(main) {
		this.submit.addEventListener('click', event => {
            event.preventDefault()

            if (this.check) {
                this.takeResult(this.result)
                this.slideOut(this.target, $(this.element).find('.test__form')[0])
                this.move($('#test__bar')[0])
                setTimeout(() => {
                    Question6.init(this.marks, main)
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
      let width = progress.style.width ? parseInt(progress.style.width) : 0
      let copy = width
      let r = setInterval(slide, 20)
      function slide() {
        if (width >= copy + 10) {
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