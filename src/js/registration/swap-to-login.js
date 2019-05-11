export const LoginLink = {
    init(registration) {
        this.parent = registration.parentElement
        this.registration = registration
        this.login = document.getElementById('login')
        this.loginLink = document.querySelector('[data-target="sign-in"]')

        this.initEvents()
    },
    initEvents() {
        this.loginLink.addEventListener('click', event => {
            this.slideOut(this.parent, this.login, this.registration)
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