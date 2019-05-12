import { Result } from '../result.module'
import { ResultTemplate } from '../result.template'

export const Question10 = {

	init(marks, main) {
		this.element = document.getElementById('test')
        this.submit = $(this.element).find('.button')[0]
        this.checkboxes = Array.from($(this.element).find(':checkbox'))
        this.target = $('#result')[0]
        this.check = false
        this.result = null
        this.marks = marks

        this.initEvents(main)
	},initEvents(main) {
		this.submit.addEventListener('click', event => {
            event.preventDefault()

            if (this.check) {
                this.takeResult(this.result)

                let arr = Object.values(this.marks)
                let min = Math.min(...arr)
                let max = Math.max(...arr)

                let keys = Object.keys(this.marks)

                let r = keys.filter(item => {
                    return this.marks[item] === max
                })

                let d = {
                    SI: 'Проектування, розробка, тестування та супровід великих і складних програмних систем різного призначення.',
                    CS: 'Розробка математичного, інформаційного та програмного забезпечення автоматизованих систем у галузі інформаційних технологій, адміністрування баз даних.',
                    CI: 'Розробка апаратного та програмного забезпечення для комп’ютерних систем і телекомунікаційних систем. Системне адміністрування, прикладне та системне програмування',
                    ACIS: 'Розробка автоматизованих технологічних процесів та їх експлуатація, проектні та монтажні роботи систем автоматизації, їх відлагодження, ремонт та обслуговування.'
                }
                let resultName = 'SI' === r[0] ? 'Інженерія програмного забезпечення' :
                                     'CS' === r[0] ? 'Комп\'ютерні науки' : 
                                     'CI' === r[0] ? 'Комп\'ютерна інженерія' :
                                     'ACIS' === r[0] ? 'Автоматизація та коп’ютерно-інтегровані технології' : false 
                
                console.log(main)
                this.target.innerHTML += ResultTemplate({result: resultName, description: d[r[0]]})
                this.slideOut(this.target, this.element)
                Result.init(main)
            }
        })

        $(this.checkboxes).on('change', event => {
            $(event.target).addClass('inp-cbx--checked')
            $(this.checkboxes).not(event.target).removeClass('inp-cbx--checked')
            this.check = true
            this.result = $(event.target).attr('data-department').split(',')
        })
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