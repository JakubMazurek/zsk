<?php
    $imie = $_GET['imie'];
    $nazwisko = $_GET['nazwisko'];
    //echo $imie, $nazwisko;

/*    if (empty($imie) || empty($nazwisko)){
        echo 'Nie wprowadziłeś poprawnie danych';
    }else{
        echo "Twoje imię: <span style=\"color:red\">$imie</span><br>";
        echo "Twoje nazwisko:<span style=\"color:red\"> $nazwisko</span><br>";
    }*/

    if (isset($_GET['radio1'])){
        //echo "Zaznaczyłeś wartość: {$_GET['radio1']}";
        echo "Zaznaczyłeś wartość: ", $_GET['radio1'];
    }else{
        //echo "Zaznacz jedną z opcji";
        header('location: formularz.php');
    }

?>
