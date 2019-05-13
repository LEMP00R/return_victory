import '../../../styles/sections/stageFirst/study-content'

export const StudyContent = {
	init(main) {
		main.currentPage = main.pagesID['study-content']
		this.element = document.getElementById('study-content')
		this.submit = $(this.element).find('.button')[0]
	}
}