import '../../styles/sections/loginRegistration/loginRegistration.scss'

import { RegistrationTemplate } from './registration.template'
import { LoginLink } from '../../js/registration/swap-to-login'
import { SignUpUser } from '../../js/registration/sign-up-user'

export const Registration = {
    
    init(currentPage, previousPage, bodyElements, main) {
    	this.page = document.getElementById('registration')
    	LoginLink.init(this.render(this.page, currentPage === this.page))
        SignUpUser.init(previousPage, bodyElements, main)
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