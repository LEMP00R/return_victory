<?php
	include './connection.php';
	var_dump($_POST['registration-email']);
	var_dump($_POST['registration-password']);
	$name = (empty($_POST['registration-name'])) ? '' : $_POST['registration-name'];
	$surname = (empty($_POST['registration-surname'])) ? '' : $_POST['registration-surname'];
	$email = (empty($_POST['registration-email'])) ? '' : $_POST['registration-email'];

	$password = (empty($_POST['registration-password'])) ? 
				 '' : $_POST['registration-password'];

	$passwordAgain = (empty($_POST['registration-repeat-password'])) ? 
					  '' : $_POST['registration-repeat-password'];

	$sex = (empty($_POST['registration-sex'])) ? '' : $_POST['sex'];

	$date = (empty($_POST['birth_date']) || 
			 empty($_POST['birth_month']) || 
			 empty($_POST['birth_year'])) ? '' : 
			 $_POST['birth_date'].'.'.$_POST['birth_month'].'.'.$_POST['birth_year'];

	$password = md5($password);
	
	$query = "INSERT INTO 
					Users (email, password, name, surname, sex, date, role)
		      VALUES 
		    		('$email','$password','$name','$surname','$sex','$date', 'user')";
		    
	if (!mysqli_query($link, $query)) { echo "Error: " . $query . mysqli_error($link); }

	mysqli_close($link);
?>