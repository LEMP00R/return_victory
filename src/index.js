
const Main = {

    init() {
        
        this.currentMenuItem = null
        this.currentPage = null
        this.loadedPages = ['home']
        this.previousPage = null
        this.body = document.querySelector("body")
        this.header = document.querySelector(".site-header")
        this.navbar = document.querySelector('#navbar')
        this.menuList = document.querySelector(".navbar__list")
        this.menuListItems = Array.from(document.querySelectorAll(".navbar__list-item"))
        this.pages = Array.from(document.querySelectorAll(".page"))
        this.pageComponents = this.pages.reduce((result, currentComponent) => {
            result[currentComponent.id] = currentComponent
            return result
        }, {})

        this.initDefaultValues()
        this.initEvents()
    },
    initDefaultValues() {
        this.currentMenuItem = this.menuListItems[0]
        this.currentPage = this.pages[0]
        this.currentMenuItem.classList.add('navbar__list-item--selected')
        this.fadeOut(this.currentPage)

        this.showView()
    },
    initEvents() {
        this.menuList.addEventListener("click", event => {
            let target = event.target

            if ("LI" === target.tagName) {
                if (this.currentMenuItem === target) return

                this.currentMenuItem = target 
                this.toggleClass(this.currentMenuItem, 'navbar__list-item--selected', this.menuListItems)
                this.previousPage = this.currentPage
                this.fadeOut(this.previousPage)
                let currentPageData = target.dataset.target
                this.currentPage = this.pageComponents[currentPageData]
                this.fadeIn(this.currentPage, this.previousPage)

            } else if ("IMG" === target.tagName || "SPAN" === target.tagName) {
                if (this.currentMenuItem === target.parentElement) return 

                this.currentMenuItem = target .parentElement
                this.toggleClass(this.currentMenuItem, 'navbar__list-item--selected', this.menuListItems)
                this.previousPage = this.currentPage
                this.fadeOut(this.previousPage)
                let currentPageData = target.parentElement.dataset.target
                this.currentPage = this.pageComponents[currentPageData]
                this.fadeIn(this.currentPage, this.previousPage)

            } else {
                return
            }

            this.showView()
        })
    },
    showView() {
        let currentPageId = this.currentPage.id

        if (this.loadedPages.includes(currentPageId)) return

        "map" === currentPageId ? 
            import(  /* webpackChunkName: "map" */  `./modules/map/map.module`)
                .then(lazyModule => {
                    this.loadedPages.push('map')
                    let map = lazyModule.Map
                    map ? map.init(this.currentPage) : false
                })
                .catch(error => 'Error while loading MapModule') : 
        "faq" === currentPageId ? 
            import(  /* webpackChunkName: "FAQ" */  `./modules/faq/FAQ.module`)
                .then(lazyModule => {
                    this.loadedPages.push('faq')
                    let FAQ = lazyModule.FAQ
                    FAQ ? FAQ.init(this.currentPage) : false
                })
                .catch(error => 'Error while loading FAQModule') : 
        "profile" === currentPageId ?
            import(  /* webpackChunkName: "profile" */  `./modules/profile/profile.module`)
                .then(lazyModule => {
                    this.loadedPages.push('profile')
                    let profile = lazyModule.Profile
                    profile ? profile.init(this.currentPage) : false
                })
                .catch(error => 'Error while loading ProfileModule') :
        "lections" === currentPageId ?
            import(  /* webpackChunkName: "lections" */  `./modules/lections/lections.module`)
                .then(lazyModule => {
                    this.loadedPages.push('lections')
                    let lections = lazyModule.Lections
                    lections ? lections.init(this.currentPage) : false
                })
                .catch(error => 'Error while loading LectionsModule') : false
    },
    toggleClass(target, className, arr) {
        target.classList.add(className)
        arr.filter(item => item !== target).map(item => item.classList.remove(className))
    },
    fadeOut(target) {
        target.classList.remove('slide--out')
        target.classList.add('slide--in')
    },
    fadeIn(target, previous) {

        if (previous) {
            previous.classList.add('slide--out')
            previous.classList.remove('slide--in')
            setTimeout(() => {
                previous.replaceWith(target)
                setTimeout(() => {
                    this.fadeOut(target)
                }, 600)
            }, 600)
        }
    }, 
    hide(target, className, arr) {
        target.classList.remove(className)
        arr.filter(item => item !== target).map(item => item.classList.add(className))
    },
    initServiceWorker() {
       if (!navigator.serviceWorker) return
        navigator.serviceWorker.register('./sw.js')
            .then(() => {
                console.log('ServiceWorker registered successfully!');
            })
            .catch((error) => {
                console.log('Some error while registering sw: ', error);
            });
    }
}

const Login = {
    init() {
        this.elements = Array.from(document.querySelectorAll('[data-target="sign-in"]'))
        this.content = [
            document.getElementsByClassName('banner')[0],
            document.getElementsByClassName('site-header')[0],
            ...document.getElementsByClassName('page'),
            document.getElementsByClassName('site-footer')[0]
        ]
        this.loginPageLoaded = false
        
        this.initEvents()
    },
    initEvents() {
        this.elements.map(item => item.addEventListener('click', event => {
            this.hide('hide', this.content)
            this.showTarget(document.querySelector('.container-for-login'), 'hide')
        }))
        this.showView()
    },
    showView() {
        if (this.loginPageLoaded) return

        import(/* webpackChunkName: "login" */ `./modules/login/login.module`)
                .then(lazyModule => {
                    let login = lazyModule.Login
                    login ? login.init(this.content) : false
                    this.hideTarget(document.querySelector('.container-for-login'), 'hide')
                })
                .catch(error => 'Error while loading Login module') 

        this.loginPageLoaded = true
    },
    hide(className, arr) {
        arr.map(item => item.classList.add(className))
    },
    hideTarget(target, className) {
        target.classList.add(className)
    },
    showTarget(target, className) {
        target.classList.remove(className)
    }
}

const Registration = {
    init() {
        this.elements = Array.from(document.querySelectorAll('[data-target="sign-up"]'))
        this.content = [
            document.getElementsByClassName('banner')[0],
            document.getElementsByClassName('site-header')[0],
            document.getElementsByClassName('site-main-content')[0],
            document.getElementsByClassName('site-footer')[0]
        ]
        this.registrationPageLoaded = false

        this.initEvents()
    },
    initEvents() {
        this.elements.map(item => item.addEventListener('click', event => {
            this.hide('hide', this.content)
            this.showTarget(document.querySelector('.container-for-registration'), 'hide')
        }))
        this.showView()
    },
    showView() {
        if (this.registrationPageLoaded) return 

        import(/* webpackChunkName: "registration" */ `./modules/registration/registration.module`)
                .then(lazyModule => {
                    let registration = lazyModule.Registration
                    registration ? registration.init() : false
                    this.hideTarget(document.querySelector('.container-for-registration'), 'hide')
                })
                .catch(error => 'Error while loading Registration module') 

        this.registrationPageLoaded = true
    },
    hide(className, arr) {
        arr.map(item => item.classList.add(className))
    },
    hideTarget(target, className) {
        target.classList.add(className)
    },
    showTarget(target, className) {
        target.classList.remove(className)
    }
}

Main.init()
Login.init()
Registration.init()



