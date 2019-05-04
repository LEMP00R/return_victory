import '../../styles/sections/login/login.scss' 

import(/* webpackChunkName: "swap-to-registration-form" */ '../../js/login/swap.js')
	
import { LoginTemplate } from './login.template'

export const Login = {
    
    init() {
        let main = document.createElement('div')
    	main.className = 'container-for-login'
    	main.innerHTML += LoginTemplate
    	document.body.appendChild(main)
    }
}