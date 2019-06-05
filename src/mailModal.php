<?php

$recepient = "help@baikalfoundation.ru";
$siteName = "B-S-T.RU";
$recepient2 = "azure_dream@mail.ru";
$recepient3 = "nigoritsa@baikalfoundation.ru";

$phone        = trim($_POST["phone"]);
$name         = trim($_POST["name"]);
$email        = trim($_POST["email"]);
$form_subject = trim($_POST["form_subject"]);

$message = "$form_subject. Имя - $name, Номер телефона - $phone, E-mail - $email";

$pagetitle = "Заявка с сайта \"$siteName\"";

mail($recepient,  $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
mail($recepient2, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient2");
mail($recepient3, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient3");

?>

