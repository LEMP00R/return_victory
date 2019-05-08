import '../../styles/sections/loginRegistration/loginRegistration.scss'

import { RegistrationTemplate } from './registration.template'
import { LoginLink } from '../../js/registration/swap'

export const Registration = {
    
    init(currentPage) {
    	this.page = document.getElementById('registration')
    	LoginLink.init(this.render(this.page, currentPage === this.page))
    },
    show(target) {
    	target.classList.remove('slide--out')
    	target.classList.add('slide--in')
    },
    render(page, needToShow) {
    	page.innerHTML += RegistrationTemplate
    	if (needToShow) this.show(page)
    	return page
    }
}