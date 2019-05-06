import '../../styles/sections/registration/registration.scss'

import(/* webpackChunkName: "ajax" */ '../../js/registration/ajax.js')

import { LoginLink } from '../../js/registration/swap.js'
import { RegistrationTemplate } from './registration.template'

export const Registration = {
    
    init() {
    	let main = document.createElement('div')
    	main.className = 'container-for-registration'
    	main.innerHTML += RegistrationTemplate
        document.body.appendChild(main)

        LoginLink.init()
    }
}