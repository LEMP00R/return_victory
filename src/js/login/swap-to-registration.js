export const RegistrationLink = {
    init(login) {
        this.parent = login.parentElement
        this.login = login
        this.registration = document.getElementById('registration')
        this.registrationLink = document.querySelector('[data-target="sign-up"]')

        this.initEvents()
    },
    initEvents() {
        this.registrationLink.addEventListener('click', event => {
            this.slideOut(this.parent, this.registration, this.login)
        })
    },
    slideIn(target) {
        target.classList.remove('slide--out')
        target.classList.add('slide--in')
    },
    slideOut(container, target, previous) {

        container.classList.add('slide--out')
        container.classList.remove('slide--in')

        setTimeout(() => {
            previous.classList.add('slide--out')
            previous.classList.remove('slide--in')

            this.slideIn(target)

            setTimeout(() => {
                this.slideIn(container)
            }, 200)

        }, 600)
    }
}