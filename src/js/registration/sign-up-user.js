export const SignUpUser = {
	init() {
		this.createAccount  = document.getElementById('create-account')
		this.data           = new FormData("#registration__form")
		this.nameUser       = $("input[name='registration-name']").val()
		this.surnameUser    = $("input[name='registration-surname']").val()
		this.passwordUser   = $("input[name='registration-password']").val()
		this.emailUser 	    = $("input[name='registration-email']").val()
		this.birthDateUser  = $("input[name='birth_date']").val()
		this.birthMonthUser = $("input[name='birth_month']").val()
		this.birthYearUser  = $("input[name='birth_year']").val()
		this.repeatPassword = $("input[name='registration-repeat-password']").val()
		this.sexUser        = $("input[name='sex']").val()
		this.formID         = $("form[name='registration__form']").attr('id')
		this.formName       = $('#' + formID);

		this.initEvents()
	},
	initEvents() {
		this.createAccount.addEventListener('click', event => { 
			event.preventDefault()

			if (this.nameUser !== "" && this.surnameUser !== "" && this.passwordUser !== "" && 
				this.emailUser !== "" && this.birthDateUser !== "" && this.birthMonthUser !== "" && 
				this.birthYearUser !== "" && this.repeatPassword !== "" && 
				this.repeatPassword === this.passwordUser) {
					console.log(this.formName)
					$.ajax({
						type: 'POST',
						url: '../backend/registrationFunc.php',
						data: this.formName.serialize(),
						success: function (data) {
							console.log(data)
							import(/* webpackChunkName: "greeting" */ '../../modules/stages/stageZero/greeting.module')
								  .then(lazyModule => {
								  		let greeting = lazyModule.Greeting
								  		greeting ? greeting.init(this.caller, this.content) : false
								  })
								  .catch(error => console.log("Error while loading Greeting Module", error)) 
						},
						error: function (jqXHR, text, error) {
							$(this.formName).text(error)
						}
					})
			}
		})
	}
	
} 
	
/* let dataData = "?registration-surname=" + surnameUser + 
				  "&registration-name=" + nameUser + 
				  "&birth_date=" + birthDateUser + 
				  "&birth_month=" + birthMonthUser +
				  "&birth_year=" + birthYearUser + 
				  "&sex=" + sexUser + 
				  "&registration-email=" + emailUser + 
				  "&registration-password=" + passwordUser +
				  "registration-repeat-password=" + repeatPassword; */
