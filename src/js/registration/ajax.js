let el = document.getElementById('create-account')
el.addEventListener('click', event => {
	console.log("Hello");
	https://olimpchnu.lady-tina.ru/?registration-surname=%D0%9B%D0%B5%D0%BC%D0%BF%D0%B5%D1%80&registration-name=
		// %D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%B0&birth_date=12&birth_month=02&birth_year=fadfa&sex=male&registration-email
		// =lemper2015%40gmail.com&registration-password=xzadsg&registration-repeat-password=asgsdgag
	var nameUser = $("input[name = 'registration-name']").val();
	var surnameUser = $("input[name='registration-surname']").val();
	var passwordUser = $("input[name='registration-password']").val();
	var formID = $(this).attr('id');
	var formNm = ('#' + formID);
	alert(nameUser);
	alert(formID);
	alert(formNm);
	$.ajax({
		type: "POST",
		url: '../backend/registrationFunc.php',
		data: formNm.serialize(),
		success: function (data) {
			$('#result').text(data);
		},
		error: function (jqXHR, text, error) {
			$(formNm).text(error);
		}
	});
	return false
})
