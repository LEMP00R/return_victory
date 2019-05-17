export const Facebook = {
    init(previousPage, bodyElements, main) {

        this.facebookLink = document.querySelector('.fa-facebook')
        this.initLib(document, 'script', 'facebook-jssdk', 'https://connect.facebook.net/uk_UA/sdk.js')
        this.initLib(document, 'script', 'facebook-jssdk-app', 'https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&autoLogAppEvents=1&version=v3.3&appId=2377525005795732')
        
        this.initEvents(previousPage, bodyElements, main)
    },
    initEvents(previousPage, bodyElements, main) {
        this.facebookLink.addEventListener('click', event => {
            event.preventDefault()

            this.initFB()
            this.checkLoginState(previousPage, bodyElements, main)
        })
    },
    initLib(d, s, id, src) {
        let js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = src
        js.async = true 
        js.defer = true
        fjs.parentNode.insertBefore(js, fjs)
    },
    initFB() {
        FB.init({
          appId      : '2377525005795732',
          cookie     : true,  
          xfbml      : true,  
          version    : 'v3.3' 
        })
    },
    checkLoginState(previousPage, bodyElements, main) {
        FB.login(function(response) {
          if (response.authResponse) {
             FB.api('/me', function(response) {
                localStorage.setItem('user', response.name)
                import(  /* webpackChunkName: "greeting" */  `../../modules/stages/stageZero/greeting.module`)
                     .then(lazyModule => {
                        let greeting = lazyModule.Greeting
                        greeting ? greeting.init(previousPage, bodyElements, response.name, main) : false
                     })
                     .catch(error => `Error while loading Greeting Module ${error}.`)
             })
          } else {
            console.log('User cancelled login or did not fully authorize.');
          }
        },{scope: 'public_profile,email'})
    }
}
