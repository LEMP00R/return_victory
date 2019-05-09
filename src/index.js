const Main = {

    init() {
        this.currentMenuItem = null
        this.currentPage = null
        this.previousPage = null
        this.loadedPages = null

        this.bodyElements = Array.from(document.body.children)

        //Login, registration links
        this.loginLinks = Array.from(document.querySelectorAll('[data-target="login"]'))
        this.registrationLinks = Array.from(document.querySelectorAll('[data-target="registration"]'))
        this.loginRegistrationLinks = this.loginLinks.concat(this.registrationLinks)

        //Navbar links
        this.menuList = document.querySelector(".navbar__list")
        this.menuListItems = Array.from(document.querySelectorAll(".navbar__list-item"))
        
        //Pages
        this.pages = Array.from(document.querySelectorAll(".page"))


        this.pageItems = this.pages.reduce((result, currentComponent) => {
            result[currentComponent.id] = currentComponent
            return result
        }, {})

        this.initDefaultValues()
        this.initEvents()
    },
    initDefaultValues() {
        this.currentMenuItem = this.menuListItems[0]
        this.currentPage = this.previousPage = document.getElementById('home')
        this.loadedPages = ['home']
        this.currentMenuItem.classList.add('navbar__list-item--selected')
        this.slideIn(this.currentPage)

        this.showView()
    },
    initEvents() {
        this.menuList.addEventListener("click", event => {
            
            let tag = event.target.tagName
            let target = "LI"   === tag ? event.target :
                         "IMG"  === tag ? event.target.parentElement :
                         "SPAN" === tag ? event.target.parentElement : false

            if (!target || this.currentMenuItem === target) return 
                
            this.currentMenuItem = target 
            this.toggleClass(this.currentMenuItem, 'navbar__list-item--selected', this.menuListItems)
            this.previousPage = this.currentPage

            this.currentPage = this.pageItems[target.dataset.target]
            this.slideOut(this.currentPage, this.previousPage)

            this.showView()
        })

        this.loginRegistrationLinks.map(item => item.addEventListener('click', event => {
            let target = event.target

            this.toggleClass(undefined, 'navbar__list-item--selected', this.menuListItems)

            this.previousPage = this.currentPage
            this.currentPage = this.pageItems[target.dataset.target]
            
            this.slideOut(this.currentPage.parentElement, document.getElementsByClassName('wrapper')[0])

            setTimeout(() => {
                this.showView()
            }, 800) 
        }))
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
                .catch(error => `Error while loading Map Module ${error}.`) : 
        "faq" === currentPageId ? 
            import(  /* webpackChunkName: "FAQ" */  `./modules/faq/FAQ.module`)
                .then(lazyModule => {
                    this.loadedPages.push('faq')
                    let FAQ = lazyModule.FAQ
                    FAQ ? FAQ.init(this.currentPage) : false
                })
                .catch(error => `Error while loading FAQ Module ${error}.`) : 
        "profile" === currentPageId ?
            import(  /* webpackChunkName: "profile" */  `./modules/profile/profile.module`)
                .then(lazyModule => {
                    this.loadedPages.push('profile')
                    let profile = lazyModule.Profile
                    profile ? profile.init(this.currentPage) : false
                })
                .catch(error => `Error while loading Profile Module ${error}.`) :
        "lections" === currentPageId ?
            import(  /* webpackChunkName: "lections" */  `./modules/lections/lections.module`)
                .then(lazyModule => {
                    this.loadedPages.push('lections')
                    let lections = lazyModule.Lections
                    lections ? lections.init(this.currentPage) : false
                })
                .catch(error => `Error while loading Lections Module ${error}.`) : false


        if ("login" === currentPageId || "registration" === currentPageId) {
            this.loadedPages.push('login', 'registration')

            import(  /* webpackChunkName: "login" */  `./modules/login/login.module`)
                .then(lazyModule => {
                    let login = lazyModule.Login
                    login ? login.init(this.currentPage, this.previousPage, this.bodyElements) : false
                    this.currentPage = this.pageItems['greeting']
                })
                .catch(error => `Error while loading Login Module ${error}.`)

            import(  /* webpackChunkName: "registration" */  `./modules/registration/registration.module`)
                .then(lazyModule => {
                    let registration = lazyModule.Registration
                    registration ? registration.init(this.currentPage, this.previousPage, this.bodyElements) : false
                    this.currentPage = this.pageItems['greeting']
                })
                .catch(error => `Error while loading Registration Module ${error}.`)
        }
    },
    toggleClass(target, className, arr) {
        if (target !== undefined) {
            target.classList.add(className)
            arr.filter(item => item !== target).map(item => item.classList.remove(className))
        } else {
            arr.map(item => item.classList.remove(className))
        }
    },
    slideIn(target) {
        target.classList.remove('slide--out')
        target.classList.add('slide--in')
        setTimeout(() => {
            this.slideTop()
        }, 600)
    },
    slideOut(target, previous) {

        if (previous) {

            previous.classList.add('slide--out')
            previous.classList.remove('slide--in')

            setTimeout(() => {
                previous.replaceWith(target)

                setTimeout(() => {
                    this.slideIn(target)
                }, 200)

            }, 600)
        }
    },
    slideTop() {
        let lengthToTop = document.body.scrollTop || document.documentElement.scrollTop
        
        if (lengthToTop > 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
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



Main.init()



