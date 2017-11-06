<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Bazy połączenie proceduralne</title>
<link rel="stylesheet" href="weterynarz.css">
</head>
<body>
    <?php
        //połączenie z serwerem

        if($polaczenie = mysqli_connect('localhost','root','')){
            echo 'Połączyłeś się z serwerem<br>';
        }else{
            echo 'Niepołączyłeś się z serwerem<br>';
        }

        //połączenie z bazą danych

        if(mysqli_select_db($polaczenie, 'weterynarztd')){
            echo 'Połączyłeś się z bazą danych: weterynarztd<br>';
        }else{
            echo 'Nie połączyłeś się z bazą danych: weterynarztd<br>';
        }

        mysqli_set_charset($polaczenie, "utf8");

        $zapytanie = "SELECT * FROM `uslugi`";

        if($rezultat = mysqli_query($polaczenie, $zapytanie)){
            echo "Prawidłowe zapytanie<br>";
        }else{
            echo "Błędne zapytanie<br>";
        }

        //wyświetlenie tabeli z bazy danych weterynarztd

        echo <<<TABELA
        <table>
        <tr>
        <th>id</th><th>nazwa</th><th>cena</th>
        </tr>
TABELA;

        while($wiersz = mysqli_fetch_row($rezultat)){
            echo <<<WIERSZ
            <tr>
            <td>$wiersz[0]</td>
            <td>$wiersz[1]</td>
            <td>$wiersz[2]</td>
            </tr>
WIERSZ;
        }

    echo "</table>";

    if(mysqli_close($polaczenie)){
        echo "Zamknięte połączenie";
    }else{
        echo "Otwarte połączenie";
    }
    ?>
</body>
</html>
