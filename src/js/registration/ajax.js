import $ from 'jquery'
let el = document.getElementById('create-account');
el.addEventListener('click', event => {
	var data = new FormData("#registration__form");
	var nameUser = $("input[name = 'registration-name']").val();
	var surnameUser = $("input[name='registration-surname']").val();
	var passwordUser = $("input[name='registration-password']").val();
	var emailUser = $("input[name='registration-email']").val();
	var birthDateUser = $("input[name='birth_date']").val();
	var birthMonthUser = $("input[name='birth_month']").val();
	var birthYearUser = $("input[name='birth_year']").val();
	var repeatPassword = $("input[name='registration-repeat-password']").val();
	var sexUser = $("input[name='sex']").val();
	/* var dataData = "?registration-surname=" + surnameUser + "&registration-name=" + nameUser + "&birth_date=" + birthDateUser + "&birth_month=" + birthMonthUser +
		"&birth_year=" + birthYearUser + "&sex=" + sexUser + "&registration-email=" + emailUser + "&registration-password=" + passwordUser +
		"registration-repeat-password=" + repeatPassword; */
	var formID = $("form[name = 'registration__form']").attr('id');
	var formName = $('#' + formID);
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
