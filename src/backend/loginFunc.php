<?php 
	include './connection.php';
	
	$email = (empty($_POST['login-email'])) ? '' : $_POST['login-email'];

	$password = (empty($_POST['login-password'])) ? 
					 '' : $_POST['login-password'];

	$password = md5($password);

	$query = "SELECT * FROM Users WHERE email='$email' AND password='$password'";
	$result = mysqli_query($link, $query);

	if (mysqli_num_rows($result) != 1) { echo "Error: " . $query . mysqli_error($link);}

	mysqli_close($link);
?>