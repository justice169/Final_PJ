<?php
session_start();

    include("connection.php");
    include("function.php");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>

    <div id="box">

    <form method="post">
        <div style="font-size: 30px; margin: 10px; color:white;">Signup</div>
        <input id ="text" type="text" name="user_name">
        <input id ="text" type="password" name="password">
        <input id ="button" type="submit" value="Signup">
        <a href="login.php">Click to Login</a>
    </form>

    </div>

</body>
</html>
