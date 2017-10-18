<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <title>Zajęcia 1</title>
    </head>
    <body>
    <?php
       echo '<h2 style="text-align:center">';
       echo "Witamy na stronie!";
       echo "</h2>";
       //include "../imie.php";
       //include "../imie1.php";
       //@include "../imie1.php";

       //require "../imie.php";
       //require "../imie1.php";
       //@require "../imie1.php";
       include "../skrypt/nazwisko.php";
       echo "<br>tekst po błędzie";
    ?>

    </body>
</html>
