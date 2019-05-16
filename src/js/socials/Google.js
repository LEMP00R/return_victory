export const Google = {

    init(previousPage, bodyElements, main) {

        let that = this
    	this.auth2
    	this.clientId = '925602732366-rlcno97f5k2t4g3e8uevepatd80hrnjr.apps.googleusercontent.com'
        this.scope = 'profile email'
        this.googleLink = document.querySelector('.fa-google')

        this.initLib(document, 'script', 'https://apis.google.com/js/api:client.js')
        
        this.main = main
        this.previousPage = previousPage
        this.bodyElements = bodyElements
    },
    initEvents(previousPage, bodyElements) {
    },
    initLib(d, s, src) {
        let js, fjs = d.getElementsByTagName(s)[0]
        js = d.createElement(s)
        js.src = src
        js.onload = e => this.initGoogle()
        fjs.parentNode.insertBefore(js, fjs)
        
    },
    initGoogle() {
    	let that = this
    	
	    gapi.load('auth2', function () {
	      that.auth2 = gapi.auth2.init({
	        client_id: that.clientId,
	        cookiepolicy: 'single_host_origin',
	        scope: that.scope
	      })
          that.attachSignin(that.googleLink)
	    })
    },
    attachSignin(el) {
        let that = this 

	    this.auth2.attachClickHandler(el, {},
	      function (googleUser) {
            let profile = googleUser.getBasicProfile();
            that.checkLoginState(that.previousPage, that.bodyElements, profile.getName(), that.main)
	        /*console.log('Token || ' + googleUser.getAuthResponse().id_token);
	        console.log('ID: ' + profile.getId());
	        console.log('Name: ' + profile.getName());
	        console.log('Image URL: ' + profile.getImageUrl());
	        console.log('Email: ' + profile.getEmail());*/
            localStorage.setItem('user', profile.getName())
	      }, function (error) {
	        console.log(JSON.stringify(error, undefined, 2));
	      })
    },
    checkLoginState(previousPage, bodyElements, name, main) {
        import(  /* webpackChunkName: "greeting" */  `../../modules/stages/stageZero/greeting.module`)
             .then(lazyModule => {
                let greeting = lazyModule.Greeting
                greeting ? greeting.init(previousPage, bodyElements, name, main) : false
             })
             .catch(error => `Error while loading Greeting Module ${error}.`)
  
    }
}