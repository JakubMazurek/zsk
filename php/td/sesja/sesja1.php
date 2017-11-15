<?php
    session_start();
    $_SESSION['imie'] = "Natalia";
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Sesje</title>
</head>
<body>
   Witamy <?php echo $_SESSION['imie'] ?> na stronie!<br>
   Identfiaktorem sesji jest: <?php echo session_id() ?><br>
   <a href="sesja1_1.php">Następna strona</a>
</body>
</html>
