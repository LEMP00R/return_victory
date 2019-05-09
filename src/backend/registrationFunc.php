<?php
	include "connection.php";

	if (isset($_POST["registration-name"])) {
		$name = $_POST["registration-name"];
	} else {
		$name = "";
	}

	if (isset($_POST["registration-surname"])) {
		$surname = $_POST["registration-surname"];
	} else {
		$surname = "";
	}

	if (isset($_POST["registration-password"])) {
		$password = $_POST["registration-password"];
	} else {
		$password = "";
	}

	if (isset($_POST["birth_date"]) && isset($_POST["birth_month"]) && isset($_POST["birth_year"])) {
		$date = $_POST["birth_date"].".".$_POST["birth_month"].".".$_POST["birth_year"];
	} else {
		$date = "";
	}

	if (isset($_POST["registration-email"])) {
		$email = $_POST["registration-email"];
	} else {
		$email = "";
	}

	if (isset($_POST["registration-repeat-password"])) {
		$passwordAgain = $_POST["registration-repeat-password"];
	} else {
		$passwordAgain = "";
	}

	if (isset($_POST["sex"])) {
		$sex = $_POST["sex"];
	} else {
		$sex = "";
	}

	if ($password == $passwordAgain && $name != "" && $surname != "" && 
		$password != "" && $date != "" && $email != "") {

	    $query = "INSERT INTO `Users`(`email`, `password`, `name`, `surname`, `sex`, `date`)
	    		  VALUES ('$email','$password','$name','$surname','$sex','$date')";
	    		  
	    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
	}
?>