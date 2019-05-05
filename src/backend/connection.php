<?php

header('Content-Type: text/html; charset=utf-8');

$host = 'localhost';
$database = 'host1376664_olimpchnu';
$user = 'host1376664_nick';
$password = 'sLWV6ltE';

$link = mysqli_connect($host, $user, $password, $database)
or die("Ошибка " . mysqli_error($link));
mysqli_query($link, "SET NAMES 'utf8' COLLATE 'utf8_general_ci'");
mysqli_query($link, "SET CHARACTER SET 'utf8'");
//reg
?>