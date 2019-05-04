import '../../styles/sections/map/map.scss' 

import { MapTemplate } from './map.template'

export const Map = {

    init(page) {
        this.elementHtml = page 
        this.render()
    },
    render() {
    	this.elementHtml.innerHTML += MapTemplate
    }

}