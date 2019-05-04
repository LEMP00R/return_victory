const registrationLink = {
    init() {
        this.elements =  document.querySelector('.login__wrapper')
								 .querySelector('.sign-block')
							     .querySelector('[data-target="sign-up"]')
        
        this.initEvents()
    },
    initEvents() {
        this.elements.addEventListener('click', event => {
            this.hide(document.querySelector('.container-for-login'), 'hide')
            this.showView()
        })
    },
    showView() {
        this.show(document.querySelector('.container-for-registration'), 'hide')
    },
    hide(target, className) {
        target.classList.add(className)
    },
    show(target, className) {
        target.classList.remove(className)
    }
}

registrationLink.init()