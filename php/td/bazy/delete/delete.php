<?php

    $id = $_GET['id'];

    $polaczenie = new mysqli('localhost', 'root', '', 'przychodniatd');

        if($polaczenie->connect_errno){
            echo "Błąd połączenia";
        }else{

            $sql = "DELETE FROM `pacjenci` WHERE `pacjenci`.`id` = $id";

            if($rezultat = $polaczenie->query($sql)){
                $polaczenie->close();
                header('location: ./pacjent.php');
            }

        }
?>
