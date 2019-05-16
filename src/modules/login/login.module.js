import '../../styles/sections/loginRegistration/loginRegistration.scss' 

import { Facebook } from '../../js/socials/FB'
import { Google } from '../../js/socials/Google'
import { LoginTemplate } from './login.template'
import { RegistrationLink } from '../../js/login/swap-to-registration'
import { SignInUser } from '../../js/login/sign-in-user'

export const Login = {
    
    init(currentPage, previousPage, bodyElements, main) {
    	this.page = document.getElementById('login') 
    	RegistrationLink.init(this.render(this.page, currentPage === this.page))
        SignInUser.init(previousPage, bodyElements, main)
        Facebook.init(previousPage, bodyElements, main)
        Google.init(previousPage, bodyElements, main)
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