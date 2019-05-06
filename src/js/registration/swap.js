export const LoginLink = {
    init() {
        this.elements =  document.querySelector('.registration__wrapper')
                                 .querySelector('.sign-block')
                                 .querySelector('[data-target="sign-in"]')
        
        this.initEvents()
    },
    initEvents() {
        this.elements.addEventListener('click', event => {
            this.hide(document.querySelector('.container-for-registration'), 'hide')
            this.showView()
        })
    },
    showView() {
        this.show(document.querySelector('.container-for-login'), 'hide')
    },
    hide(target, className) {
        target.classList.add(className)
    },
    show(target, className) {
        target.classList.remove(className)
    }
}