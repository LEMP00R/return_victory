let el = document.getElementById('create-account')
el.addEventListener('click', event => {
	console.log("Hello");
	var formID = $(this).attr('id');
	var formNm = ('#' + formID);
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
