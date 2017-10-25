<?php
  /*  $imie = $_GET['imie'];
    $nazwisko = $_GET['nazwisko'];
    //echo "Imię: $imie, nazwisko: $nazwisko";

    if (empty($imie) || empty($nazwisko)){
        //echo "Uzupełnij dane!";
        header('location: formularz.php');
    }else{
        echo "Imię: <span style=\"color:green\">$imie</span><br>";
        echo "Nazwisko: <span style=\"color:green\">$nazwisko</span>";
    }*/

    if (isset($_POST['kolor'])){
        //echo "Zaznaczyłeś wartość: {$_POST['kolor']}";
        echo "Zaznaczyłeś wartość: ", $_POST['kolor'];
    }else{
        //echo "Zaznacz jedną z opcji";
        header('location: formularz.php');
    }












?>
