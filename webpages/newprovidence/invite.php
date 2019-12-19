<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "veronika.dmytryk@gmail.com";

$tema = "New invitation";
$message_to_myemail = "Letter Content:
<br><br>
E-mail: $email<br>
Link: $refferer
";
mail($myemail, $tema, $message_to_myemail, "From: NEWProvidence <veronika.dmytryk@gmail.com> \r\n Reply-To: NEWProvidence \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );
$tema = "Your friend invited you to join NEWProvidence subscribtion";
$message_to_myemail = "
Hello,

One of your friends invited you to join our NEWProvidence Family.
We can know each other betten on this web page newprovidence.veronikadmytryk.net

See you there!
";

$myemail = $email;
mail($myemail, $tema, $message_to_myemail, "From: NEWProvidence <veronika.dmytryk@gmail.com> \r\n Reply-To: NEWProvidence \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td><td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);


?>
