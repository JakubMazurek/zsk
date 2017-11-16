<?php
    session_name("zsk");
    session_start();
    $_SESSION['imie'] = "Filip";
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Sesja</title>
</head>
<body>
    Witamy <?php echo $_SESSION['imie']; ?> na stronie!<br>
    Identyfikatorem sesji jest: <?php echo session_id(); ?><br>
    <a href="sesja1_1.php">następna strona</a><br>
    <a href="sesja1.php?usunSesje=">Usuń sesję</a>
    <?php
        if(isset($_GET['usunSesje'])){
            session_destroy();
        }
    ?>

</body>
</html>
