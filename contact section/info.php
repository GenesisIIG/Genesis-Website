<?php
    $name = $_POST['name'];
    $message = $_POST['message'];

    $email_from = 'ranjan150106@gmail.com';

    $email_subject = "New form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "ranjan150106@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");


    ?>