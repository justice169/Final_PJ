<?php
session_start();

    include("connection.php");
    include("function.php");

    $user_data = check_login($con);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>
<body>
    <a href="logout.php">Logout</a>
    <h1>Hello, World!</h1>
    <p>This is a PHP-generated HTML page.</p>



</body>
</html>
