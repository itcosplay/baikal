<?php

$recepient = "nigoritsa@baikalfoundation.ru";
$siteName = "11evils.com";

$phone = trim($_POST["modalPhone"]);
$name = trim($_POST["modalName"]);
$email = trim($_POST["modalEmail"]);

$message = "Посетитель оставил данные: $phone, $name, $email";

$pagetitle = "Заявка с сайта \"$siteName\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>