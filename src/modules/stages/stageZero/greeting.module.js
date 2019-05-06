import { GreetingTemplate } from './greeting.template'

export const Greeting = {
    
    init(main, content) {
    	this.element = document.getElementById('greeting')
    	main.classList.add('hide')
    	content.filter(item => !item.classList.contains('page')).map(item => item.classList.remove('hide'))
    	this.element.classList.remove('hide')
    	if (this.element.hasChildNodes()) return
    	this.element.innerHTML += GreetingTemplate
    }
}