<?php
header('Content-Type: text/html; charset=utf-8');

$db_host = 'localhost';
$db_database = 'host1376664_olimpchnu';
$db_user = 'host1376664_nick';
$db_password = 'sLWV6ltE';

$link = mysqli_connect($db_host, $db_user, $db_password, $db_database) or 
					   die("Ошибка " . mysqli_error($link));

mysqli_query($link, "SET NAMES 'utf8' COLLATE 'utf8_general_ci'");
mysqli_query($link, "SET CHARACTER SET 'utf8'");

?>