import '../../styles/sections/profile/profile.scss'
import(/* webpackChunkName: "quest-progress" */'../../js/profile/progress')

import { ProfileTemplate } from './profile.template'

export const Profile = {

	init(page) {
        this.render(page)
    },
    render(page) {
    	page.innerHTML += ProfileTemplate
    }
}

