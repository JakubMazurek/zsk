<?php

  /*  $imie = $_GET['imie'];
    $nazwisko = $_GET['nazwisko'];
    //echo "$imie $nazwisko";

    if (empty($imie) || empty($nazwisko)){
        echo "Nie wprowadziłeś poprawnie danych";
    }else{
        echo "Imię: <span style=\"color:red\">$imie</span><br>Nazwisko: <span style=\"color:red\">$nazwisko</span><br>";
    }*/

    //formularz 2

 /*   $login = $_POST['login'];
    $haslo = $_POST['pass'];
    //echo "$login $haslo";
    define('STALA','10');
    $a = STALA;
    if (!empty($login) && !empty($haslo)){
        echo <<<DANE
        $a
        Login: $login<br>
        Hasło: $haslo
DANE;
    }else{
        //echo "Nie wprowdziłeś wszystkich danych";
        header('location: formularz.php');
    }*/

    //formularz 3

   /* if (isset($_GET['kolor'])){
        echo "Zaznaczyłeś kolor: {$_GET['kolor']}";
    }else{
        header('location: formularz.php');
    }*/

    //formularz 3_1

    if (isset($_GET['kolor'])){
        echo "Zaznaczyłeś kolor: {$_GET['kolor']}";
    }else{
        header('location: formularz.php');
    }




?>
