<?php
if(isset($_POST['submit'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "eugenetropicales@gmail.com"; // Your email
    $subject = "New Contact Message";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "<script>
                alert('Message sent successfully!');
                window.location.href='contact.html';
              </script>";
    } else {
        echo "<script>
                alert('Failed to send message.');
                window.location.href='contact.html';
              </script>";
    }
} else {
    echo "<script>window.location.href='contact.html';</script>";
}
?>
