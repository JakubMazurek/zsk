<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Aktulizacja danych</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<?php

    $polaczenie = new mysqli('localhost', 'root', '', 'forum');

    if(!$polaczenie->connect_error){
        echo "<h2>Aktualizacja danych</h2>";

    echo <<<TABELA
    <table>
    <tr>
        <th>login</th>
        <th>hasło</th>
        <th>aktualizuj</th>
    </tr>
TABELA;

        $sql = "SELECT * FROM `konta`";

        if($rezultat = $polaczenie->query($sql)){
            while($wiersz = $rezultat->fetch_assoc()){
                echo <<<WIERSZ
                <tr>
                    <td>$wiersz[login]</td>
                    <td>$wiersz[haslo]</td>
                    <td><a href='aktualizacja.php?login=$wiersz[login]'>Aktualizuj</a></td>
                </tr>
WIERSZ;

            }

            echo "</table><br>";

            if(isset($_GET['login'])){

                $login = $_GET['login'];

                $sql = "SELECT * FROM konta WHERE login='$login'";



                if($rezultat = $polaczenie->query($sql)){

                    $wiersz = $rezultat->fetch_assoc();

                    echo <<<FORM
               <form action="aktualizacja.php">
               <input type="text" value="$wiersz[login]" name="login"><br>
               <input type="password" value="$wiersz[haslo]" name="haslo"><br>
               <input type="text" value="$wiersz[id]" name="id" hidden><br>
               <input type="submit" value="aktualizuj" name="przycisk">
               </form>
FORM;
                }else{
                    echo "Błędne zapytanie";
                }

            if(isset($_GET['przycisk'])){

                $login = $_GET['login'];
                $haslo = $_GET['haslo'];
                $id = $_GET['id'];

                if(!empty($login) && !empty($haslo)){

                $login = $polaczenie->real_escape_string(htmlentities($login));
                $haslo = $polaczenie->real_escape_string(htmlentities($haslo));

                $sql = "UPDATE `konta` SET `login` = '$login', `haslo` = '$haslo' WHERE `konta`.`id` = $id";

                if($rezultat = $polaczenie->query($sql)){
                    header('location: ./aktualizacja.php');
                }}else{
                    header('location: aktualizacja.php');

                }

            }

            }
        }else{
            echo "Błędne zapytanie";
        }

    }else{
        echo "Błąd połączenia";
    }



?>
</body>
</html>
