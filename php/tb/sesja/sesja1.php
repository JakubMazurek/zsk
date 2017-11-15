<?php
    session_start();
    $_SESSION['imie'] = 'Oliwia';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Sesja</title>
</head>
<body>
   Witamy <?php echo $_SESSION['imie']?> na stronie!<br>
   Identyfikatorem sesji jest: <?php echo session_id()?><br>
   <a href="sesja1_1.php">następna strona</a>
</body>
</html>
