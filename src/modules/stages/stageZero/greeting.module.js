import '../../../styles/sections/stageZero/stageZero.scss'

import { GreetingTemplate } from './greeting.template'
import { DepartmentsContainer } from '../../../js/stageZero/deparments-slider.js'

export const Greeting = {
    
    init(previousPage, bodyElements, data) {
    	this.container = document.getElementsByClassName('container-for-login-registration')[0]
        this.target = bodyElements.filter(item => item.classList.contains('wrapper'))[0]
        this.previous = previousPage
        this.logout = Array.from(Array.from(this.target.children).filter(item => item.classList.contains('banner'))[0].children).filter(item => item.classList.contains('logout'))[0]
        this.logout.classList.remove('hide')
        Array.from(this.logout.children).filter(item => item.classList.contains('logout__name'))[0].innerHTML = data
        Array.from(Array.from(this.target.children).filter(item => item.classList.contains('banner'))[0].children).filter(item => item.classList.contains('sign-block'))[0].classList.add('hide')
        this.parent = Array.from(this.target.children).filter(item => item.classList.contains('site-main-content'))[0].firstElementChild
        this.greeting = Array.from(Array.from(this.target.children).filter(item => item.classList.contains('site-main-content'))[0].firstElementChild.children).filter(item => item.classList.contains('greeting'))[0]
        this.greeting.innerHTML += GreetingTemplate

    	this.slideOut(this.container, this.target, this.greeting, this.previous)

        DepartmentsContainer.init(this.greeting)
        this.initEvents()
    },
    initEvents() {
        
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