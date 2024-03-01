<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>

    <div id="box">

    <form method="post">
        <div style="font-size: 30px; margin: 10px; color:white;">Login</div>
        <input id ="text" type="text" name="user_name">
        <input id ="text" type="password" name="password">
        <input id ="button" type="submit" value="Login">
        <a href="signup.php">Click to Signup</a>
    </form>

    </div>

</body>
</html>
