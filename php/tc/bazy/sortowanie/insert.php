<?php

    $polaczenie = new mysqli('localhost', 'root', '', 'przychodniatc');

    $polaczenie->set_charset("utf8");

    if(!$polaczenie->connect_error){

       if(!empty($_POST['imie']) &&
          !empty($_POST['nazwisko']) &&
          !empty($_POST['choroby_przewlekle'])&&
          !empty($_POST['uczulenia'])&&
          !empty($_POST['choroba'])&&
          !empty($_POST['leki_przepisane'])&&
          !empty($_POST['opis'])){

       $imie = $_POST['imie'];
       $nazwisko = $_POST['nazwisko'];
       $choroby_przewlekle = $_POST['choroby_przewlekle'];
       $uczulenia = $_POST['uczulenia'];
       $choroba = $_POST['choroba'];
       $leki_przepisane = $_POST['leki_przepisane'];
       $opis = $_POST['opis'];
       $przycisk = $_POST['przycisk'];

           //$imie = mysqli_real_escape_string($polaczenie, htmlentities($imie));

           $imie = $polaczenie->real_escape_string(htmlentities($imie));
           $nazwisko = $polaczenie->real_escape_string(htmlentities($nazwisko));
           $choroby_przewlekle = $polaczenie->real_escape_string(htmlentities($choroby_przewlekle));
           $uczulenia = $polaczenie->real_escape_string(htmlentities($uczulenia));
           $choroba = $polaczenie->real_escape_string(htmlentities($choroba));
           $leki_przepisane = $polaczenie->real_escape_string(htmlentities($leki_przepisane));
           $opis = $polaczenie->real_escape_string(htmlentities($opis));


           $sql = "INSERT INTO `pacjenci` (`id`, `imie`, `nazwisko`, `choroby_przewlekle`, `uczulenia`, `choroba`, `leki_przepisane`, `opis`) VALUES (NULL, '$imie', '$nazwisko', '$choroby_przewlekle', '$uczulenia', '$choroba', '$leki_przepisane', '$opis')";

           if($rezultat = $polaczenie->query($sql)){

               $polaczenie->close();
               header('location: ./pacjent.php');

           }else{
               echo "Błędne zapytanie";
           }

       }else{
           header('location: ./pacjent.php');
       }







    }else{
        echo "Błędne połączenie";
    }

?>
