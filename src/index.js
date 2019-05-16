if(localStorage.getItem('user')) {
    $('.sign-block--right')[0].remove()
    $('[data-target="login"]').toArray().map(item => item.parentNode.remove())
    $('[data-target="registration"]').toArray().map(item => item.remove())
    document.querySelector('.logout').classList.remove('hide')
    $('.logout__name')[0].innerHTML += localStorage.user
} else {
    $('.sign-block--right')[0].classList.remove('hide')
}

if(localStorage.getItem('pageID')) {
    console.log(localStorage.pageID)
}
    


const Main = {
    currentMenuItem: null,
    currentPage: null,
    previousPage: null,
    loadedPages: null,

    bodyComponents: Array.from(document.body.childNodes).filter(node => 'SCRIPT' !== node.tagName),
    pages: $('.page').toArray(),
    
    loginRegistrationLinks: $('[data-target="login"], [data-target="registration"]').toArray(),
    menu: $(".navbar__list")[0],
    menuItems: $(".navbar__list-item").toArray(),

    init() {
        this.pagesID = this.pages.reduce((result, currentComponent) => {
            result[currentComponent.id] = currentComponent
            return result
        }, {})

       

        this.initDefaultValues()
        this.initEvents(this)
    },
    initDefaultValues() {
        this.currentMenuItem = this.menuItems[0]
        this.currentPage = this.previousPage = $('#home')[0]
        this.loadedPages = ['home']

        this.currentMenuItem.classList.add('navbar__list-item--selected')
        this.slideIn(this.currentPage)

        this.showView()
    },
    initEvents(main) {
        window.onbeforeunload = function(e) {
          localStorage.setItem('pageID', main.currentPage.id)
        }
        this.menu.addEventListener("click", event => {
            console.log(this.currentPage)
            let tag = event.target.tagName
            let target = "LI"  === tag ? event.target :
                         "IMG" === tag || "SPAN" === tag ? event.target.parentElement : false

            if (!target || this.currentMenuItem === target) return 
                
            this.currentMenuItem = target 
            this.toggleClass(this.currentMenuItem, 'navbar__list-item--selected', this.menuItems)
            this.previousPage = this.currentPage

            this.currentPage = this.pagesID[target.dataset.target]
            this.slideOut(this.currentPage, this.previousPage)

            this.showView()
        })

        this.loginRegistrationLinks.map(item => item.addEventListener('click', event => {
            let target = event.target

            $('[data-target="login"]').toArray().map(item => item.parentNode.remove())
            $('[data-target="registration"]').toArray().map(item => item.remove())

            this.bodyElements = Array.from(document.body.children)

            this.currentMenuItem = null
            this.toggleClass(undefined, 'navbar__list-item--selected', this.menuItems)

            this.previousPage = this.currentPage
            this.currentPage = this.pagesID[target.dataset.target]
            
            this.slideOut(this.currentPage.parentNode, $('.wrapper')[0])

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
                    login ? login.init(this.currentPage, this.previousPage, this.bodyElements, this) : false
                    this.currentPage = this.pagesID['greeting']
                })
                .catch(error => `Error while loading Login Module ${error}.`)

            import(  /* webpackChunkName: "registration" */  `./modules/registration/registration.module`)
                .then(lazyModule => {
                    let registration = lazyModule.Registration
                    registration ? registration.init(this.currentPage, this.previousPage, this.bodyElements, this) : false
                    this.currentPage = this.pagesID['greeting']
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