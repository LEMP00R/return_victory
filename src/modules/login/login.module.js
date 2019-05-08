import '../../styles/sections/loginRegistration/loginRegistration.scss' 

import { LoginTemplate } from './login.template'
import { RegistrationLink } from '../../js/login/swap'

export const Login = {
    
    init(currentPage) {
    	this.page = document.getElementById('login') 
    	RegistrationLink.init(this.render(this.page, currentPage === this.page))
    },
    show(target) {
    	target.classList.remove('slide--out')
    	target.classList.add('slide--in')
    },
    render(page, needToShow) {
    	page.innerHTML += LoginTemplate
    	if (needToShow) this.show(page)
    	return page
    }
}