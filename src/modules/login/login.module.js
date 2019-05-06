import '../../styles/sections/login/login.scss' 

import { RegistrationLink } from '../../js/login/swap.js'
import { IsRegisteredUser } from '../../js/login/ajax.js'
	
import { LoginTemplate } from './login.template'

export const Login = {
    
    init(content) {
        let main = document.createElement('div')
    	main.className = 'container-for-login'
    	main.innerHTML += LoginTemplate
    	document.body.insertBefore(main, document.querySelector('.banner'))

    	RegistrationLink.init()
    	IsRegisteredUser.init(main, content)
    }
}