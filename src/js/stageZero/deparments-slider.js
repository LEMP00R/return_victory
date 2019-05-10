export const DepartmentsContainer = {
	init(greeting) {
		this.element = Array.from(greeting.children).filter(item => item.classList.contains('departments-info'))[0]
		

		$(this.element).slick({
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			centerMode: false
		})
	}
}