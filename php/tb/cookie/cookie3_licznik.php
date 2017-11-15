<?php

    $dni = 30;

    if(!isset($_COOKIE['licznik'])){
        $licznik = 1;
    }else{
        $licznik = intval($_COOKIE['licznik']);
        $licznik++;
    }

    setcookie('licznik', "$licznik", time() + 60*60*24*$dni);

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Licznik</title>
</head>
<body>
    <?php
        if($licznik == 1){
            echo "Liczba odwiedzin w ciągu ostatnich $dni dni:
            <span style=\"color:red\">$licznik </span> raz";
        }else{
            echo "Liczba odwiedzin w ciągu ostatnich $dni dni:
            <span style=\"color:red\">$licznik </span> razy";
        }
    ?>
</body>
</html>
