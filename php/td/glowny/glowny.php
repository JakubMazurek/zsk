<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>PHP zajęcia 1</title>
</head>
<body>
    <?php
        echo '<h2 style="text-align:center">';
        echo "witamy na stronie!";
        echo "</h2>";
        //include "imie.php";
        //@include "imie1.php";
        //include "imie1.php";
        //require "imie.php";
        //require "imie1.php";
        //@require "imie1.php";
        //include ".\skrypty\imie.php";
        include "..\skrypty\imie.php";
        echo "<br>Po błędzie";
    ?>
</body>
</html>
