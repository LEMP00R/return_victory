import '../../styles/sections/faq/faq.scss' 
import(/* webpackChunkName: "question-answer-accordion" */ '../../js/faq/faq.js')

import { FAQTemplate } from './FAQ.template'

export const FAQ = {

    init(page) {
        this.elementHtml = page 
        this.render()
    },
    render() {
    	this.elementHtml.innerHTML += FAQTemplate
    }
}