import { GreetingTemplate } from './greeting.template'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import 'slick-carousel/slick/slick.min.js'

export const Greeting = {
    
    init(previousPage, bodyElements) {
    	this.container = document.getElementsByClassName('container-for-login-registration')[0]
        this.target = bodyElements.filter(item => item.classList.contains('wrapper'))[0]
        this.previous = previousPage
        this.greeting = Array.from(Array.from(this.target.children).filter(item => item.classList.contains('site-main-content'))[0].firstElementChild.children)[5]
        this.greeting.innerHTML += GreetingTemplate

    	this.slideOut(this.container, this.target, this.greeting, this.previous)
    },
    slideIn(target) {
        target.classList.remove('slide--out')
        target.classList.add('slide--in')
    },
    slideOut(container, target, page, previous) {

        container.classList.add('slide--out')
        container.classList.remove('slide--in')

        setTimeout(() => {
            container.replaceWith(target)
            previous.classList.remove('slide--in')
            previous.classList.add('slide--out')
            previous.replaceWith(page)
            this.slideIn(page)

            setTimeout(() => {
                this.slideIn(target)
            }, 200)

        }, 600)
    }
}