<?php
include "connection.php";
header('Content-Type: text/html; charset=utf-8');

if (isset($_POST["name"])) {$name = $_POST["name"];} else {$name = "";}
if (isset($_POST["surname"])) {$surname = $_POST["surname"];} else {$surname = "";}
if (isset($_POST["password"])) {$password = $_POST["password"];} else {$password = "";}
if (isset($_POST["birth_date"]) && isset($_POST["birth_month"]) && isset($_POST["birth_year"])) {$date = $_POST["birth_date"].".".$_POST["birth_month"].".".$_POST["birth_year"];} else {$date = "";}
if (isset($_POST["email"])) {$email = $_POST["email"];} else {$email = "";}
if (isset($_POST["passwordAgain"])) {$passwordAgain = $_POST["passwordAgain"];} else {$passwordAgain = "";}

$query = "INSERT INTO `Users`(`email`, `password`, `name`, `surname`, `sex`, `date`) VALUES ('$email','$password','$name','$surname','Male','$date')";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

?>