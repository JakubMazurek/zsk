<?php
    $imie = $_GET['imie'];
    $nazwisko = $_GET['nazwisko'];
    //echo $imie, $nazwisko;

    if (empty($imie) || empty($nazwisko)){
        echo 'Nie wprowadziłeś poprawnie danych';
    }else{
        echo "Twoje imię: <span style=\"color:red\">$imie</span>";
        echo "<br>Twoje nazwisko: <span style=\"color:red\">$nazwisko</span>";
    }

     $login = $_POST['login'];
    $haslo = $_POST['pass'];

    //echo $login, $haslo;

   if (!empty($login) && !empty($haslo)){
        echo 'Login: ', $login, '<br>';
        echo 'Hasło: ', $haslo, '<br>';
    }else{
        echo 'Nie wprowadziłeś wszystkich danych';
    }


    if (isset($_GET['kolor'])){
        echo "Zaznaczyłeś kolor: ", $_GET['kolor'];
    }else{
        //echo "Nie zaznaczyłeś koloru";
        header('location: formularz.php');
    }








?>
