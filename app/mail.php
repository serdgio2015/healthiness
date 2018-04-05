<?php 

    if (!empty($_POST)) {
        $my_mail = "vengel_sergey@mail.ru";
    	$sitename = "агентство";
    
        $subject = trim($_POST['subject']);
    	$site = trim($_POST['site']);
    	$name = trim($_POST['name']);
    	$tel = trim($_POST['tel']);
    
    	$headers = "Тема: $subject \nНазвание сайта: $site \nИмя: $name \nТелефон: $tel";
    	
    	$pagetitle = "Новая заявка с сайта \"$sitename\"";
    
    	mail($my_mail, $pagetitle, $headers, "Content type: text/plain; charset=\'utf-8\'\n From: $my_mail");
    	 
    }
	
 ?>