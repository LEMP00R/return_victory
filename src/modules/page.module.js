export default class Page {
	
	constructor(pageContainer, pageTemplate, previousPage) {
		this.element = pageContainer
		this.template = pageTemplate
		this.previousPage = previousPage
	}
}