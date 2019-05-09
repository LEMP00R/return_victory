export const SignUpUser = {
	init(previousPage, bodyElements) {
		this.form = document.getElementById('registration__form')
		this.createAccount = document.getElementById('create-account')

		this.initEvents(previousPage, bodyElements)
	},
	initEvents(previousPage, bodyElements) {
		this.createAccount.addEventListener('click', event => { 
			event.preventDefault()

			$.ajax({
				type: 'POST',
				url: '../backend/registrationFunc.php',
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
