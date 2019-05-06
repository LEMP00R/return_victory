
let el = document.getElementById('create-account');
el.addEventListener('click', event => {
	let data = new FormData("#registration__form");
	let nameUser = $("input[name = 'registration-name']").val();
	let surnameUser = $("input[name='registration-surname']").val();
	let passwordUser = $("input[name='registration-password']").val();
	let emailUser = $("input[name='registration-email']").val();
	let birthDateUser = $("input[name='birth_date']").val();
	let birthMonthUser = $("input[name='birth_month']").val();
	let birthYearUser = $("input[name='birth_year']").val();
	let repeatPassword = $("input[name='registration-repeat-password']").val();
	let sexUser = $("input[name='sex']").val();
	/* let dataData = "?registration-surname=" + surnameUser + "&registration-name=" + nameUser + "&birth_date=" + birthDateUser + "&birth_month=" + birthMonthUser +
		"&birth_year=" + birthYearUser + "&sex=" + sexUser + "&registration-email=" + emailUser + "&registration-password=" + passwordUser +
		"registration-repeat-password=" + repeatPassword; */
	let formID = $("form[name = 'registration__form']").attr('id');
	let formName = $('#' + formID);
	if (nameUser !== "" && surnameUser !== "" && passwordUser !== "" && emailUser !== "" && birthDateUser !== "" && birthMonthUser !== ""
	&& birthYearUser !== "" && repeatPassword !== "" && repeatPassword === passwordUser) {
		$.ajax({
			type: 'POST',
			url: 'backend/registrationFunc.php',
			data: formName.serialize(),
			success: function (data) {
				return location.href = 'https://olimpchnu.lady-tina.ru/';
			},
			error: function (jqXHR, text, error) {
				$(formName).text(error);
			}
		});

	}
});
