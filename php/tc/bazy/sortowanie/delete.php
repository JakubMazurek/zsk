<?php

    $id = $_GET['id'];

    $polaczenie = new mysqli('localhost', 'root', '', 'przychodniatc');

    if(!$polaczenie->connect_error){

        $sql = "DELETE FROM `pacjenci` WHERE `pacjenci`.`id` = '$id'";

        if($rezultat = $polaczenie->query($sql)){
            $polaczenie->close();
            header('location: ./pacjent.php');
        }else{
            echo "Błędne zapytanie";
        }

    }else{
        echo "Błędne połączenie";
    }




?>
