export const SignInUser = {
	init(previousPage, bodyElements, main) {
		this.form = document.getElementById('login__form')
		this.enterAccount = document.getElementById('enter-account')

		this.initEvents(previousPage, bodyElements, main)
	},
	initEvents(previousPage, bodyElements, main) {
		this.enterAccount.addEventListener('click', event => {
			event.preventDefault()
			
			/*$.ajax({
				type: 'POST',
				url: '../backend/loginFunc.php',
				data: $(this.form).serialize(),
				success: (data) => {
					data = JSON.parse(data)
					localStorage.setItem('user', `${data.name} ${data.surname}`);
					import(  /* webpackChunkName: "greeting" *//*  `../../modules/stages/stageZero/greeting.module`)
					       .then(lazyModule => {
						        let greeting = lazyModule.Greeting
						        greeting ? greeting.init(previousPage, bodyElements, `${data.name} ${data.surname}`, main) : false
					       })
					       .catch(error => `Error while loading Greeting Module ${error}.`)
				},
				error: function(jqXHR, text, error){
					console.log(error) 
				}
			})*/
			import(  /* webpackChunkName: "greeting" */  `../../modules/stages/stageZero/greeting.module`)
					       .then(lazyModule => {
						        let greeting = lazyModule.Greeting
						        greeting ? greeting.init(previousPage, bodyElements, 'Alexander Sosnovskiy', main) : false
					       })
					       .catch(error => `Error while loading Greeting Module ${error}.`)
		})
	}
}


