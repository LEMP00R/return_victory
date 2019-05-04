import '../../styles/sections/profile/profile.scss'
import(/* webpackChunkName: "quest-progress" */'../../js/profile/progress')

import { ProfileTemplate } from './profile.template'

export const Profile = {

	init(page) {
        this.elementHtml = page 
        this.render()
    },
    render() {
    	this.elementHtml.innerHTML += ProfileTemplate
    }
}

