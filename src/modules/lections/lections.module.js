import '../../styles/sections/lections/lections.scss' 
	
import { LectionsTemplate } from './lections.template'

export const Lections = {
    
    init(page) {
        this.elementHtml = page 
        this.render()
    },
    render() {
    	this.elementHtml.innerHTML += LectionsTemplate
    }
}