import { GreetingTemplate } from './greeting.template'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import 'slick-carousel/slick/slick.min.js'

export const Greeting = {
    
    init(main, content) {
    	this.element = document.getElementById('greeting')
    	main.classList.add('hide')
    	content.filter(item => !item.classList.contains('page')).map(item => item.classList.remove('hide'))
    	this.element.classList.remove('hide')
    	this.btnsRegistration = Array.from(document.querySelectorAll('.sign-block'))
    	this.btnsRegistration.map(item => item.classList.add('hide'))
    	

    	if (this.element.hasChildNodes()) return

    	this.element.innerHTML += GreetingTemplate
    	this.fadeOut(this.element)
    	$('.departments-info').slick({
    		slidesToShow: 3
    	})
    },
    fadeOut(target) {
        target.classList.remove('slide--out')
        target.classList.add('slide--in')
    }
}