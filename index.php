<?php
if (isset($_POST['name'])) && isset($_POST['email']) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $to = 'jsf5077@gmail.com';
  $subject = "New Lead";
  $body '<html>
          <body>
            <h2>Feedback- example.com</h2>
            <hr>
            <p>Name<br>'.$name.'</p>
            <p>Email<br>'.$email.'</p>
          </body>
        </html>';
  //headers
  $headers  = "From: ".$name." <".$email.">\r\n";
  $headers .= "Reply-To: ".$email."\r\n";
  $headers .= "MINE-Version: 1.0\r\n";  
  $headers .= "Content-type: text/html; charset-utf-8";  
  //send
  $send = mail($to, $subject, $body, $headers);
  if ($send) {
    echo '<br>';
    echo 'Thanks for conacting PDK Contracting! We will be in touch soon!';
  } else {
    echo 'error';
  }
}
?>