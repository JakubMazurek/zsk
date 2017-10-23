<?php
    $imie = $_GET['imie'];
    $nazwisko = $_GET['nazwisko'];
    //echo $imie, $nazwisko;

    if (empty($imie) || empty($nazwisko)){
        echo 'Nie wprowadziłeś poprawnie danych';
    }else{
        echo "Twoje imię: <span style=\"color:red\">$imie</span><br>";
        echo "Twoje nazwisko:<span style=\"color:red\"> $nazwisko</span><br>";
    }
?>
