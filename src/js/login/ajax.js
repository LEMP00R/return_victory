export const IsRegisteredUser = {
	init(main, content) {
		this.caller = main
		this.content = content
		this.element = document.getElementById('login__form')
		this.userEmail = document.getElementById('login-email')
		this.userPassword = document.getElementById('login-password')
		this.btnEnterAccount = document.getElementById('enter-account')


		this.initEvents()
	},
	initEvents() {
		this.element.addEventListener('click', event => {
			event.preventDefault()
			let target = event.target

			if (this.userEmail === target) {

			} else if (this.userPassword === target) {

			} else if (this.btnEnterAccount === target) {
				/*$.ajax({
					url: '../backend/loginFunc.php',
					method: 'POST',
					data: {
						email: this.userEmail.value, 
						password: this.userPassword.value
					},
					dataType: 'text',
					success: (data) => {

					},
					error: (jqXHR, text, error) => {
								
					}
				})*/
				import(/* webpackChunkName: "greeting" */ '../../modules/stages/stageZero/greeting.module')
					  .then(lazyModule => {
					  		let greeting = lazyModule.Greeting
					  		greeting ? greeting.init(this.caller, this.content) : false
					  })
					  .catch(error => console.log("Error while loading Greeting Module", error)) 

			}
		})
	}
}

