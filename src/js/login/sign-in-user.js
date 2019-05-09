export const SignInUser = {
	init(previousPage, bodyElements) {
		this.form = document.getElementById('login__form')
		this.enterAccount = document.getElementById('enter-account')

		this.initEvents(previousPage, bodyElements)
	},
	initEvents(previousPage, bodyElements) {
		this.enterAccount.addEventListener('click', event => {
			event.preventDefault()

			$.ajax({
				type: 'POST',
				url: '../backend/loginFunc.php',
				data: $(this.form).serialize(),
				success: (data) => {
					import(  /* webpackChunkName: "greeting" */  `../../modules/stages/stageZero/greeting.module`)
					       .then(lazyModule => {
						        let greeting = lazyModule.Greeting
						        greeting ? greeting.init(previousPage, bodyElements) : false
					       })
					       .catch(error => `Error while loading Greeting Module ${error}.`)
				},
				error: function(jqXHR, text, error){
					console.log(error) 
				}
			})
		})
	}
}


