<?php
    session_name('zsk');
    session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Sesja</title>
</head>
<body>
    Witamy <?php echo $_SESSION['imie']; ?> na drugiej stronie!<br>
    Identyfikatorem sesji jest: <?php echo session_id(); ?><br>
    <a href="sesja1_2.php">następna strona</a>
</body>
</html>
