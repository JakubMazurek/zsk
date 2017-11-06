<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Połączenie z bazą danych</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <?php

        //połączenie z serwerem

        if($polaczenie = mysqli_connect('localhost', 'root', '')){
            echo 'Połaczyłeś się z serwerem<br>';
        }else{
            echo 'Nie połączyłeś się z serwerem<br>';
        }

        if(mysqli_select_db($polaczenie, 'weterynarz4tb')){
            echo 'Połączyłeś się z bazą danych: weterynarz4tb<br>';
        }else{
            echo 'Nie połączyłeś się z bazą danych: weterynarz4tb<br>';
        }

        $sql = "SELECT * FROM `uslugi`";

        //$rezultat = mysqli_query($polaczenie, "SELECT * FROM `uslugi`");

        $rezultat = mysqli_query($polaczenie, $sql);

        if($rezultat = mysqli_query($polaczenie, $sql)){
            echo "Prawidłowe zapytanie<br>";
        }else{
            echo "Błędne zapytanie<br>";
        }

    //wyświetlenie tabeli z bazy danych weterynarz4tb

        echo <<<TABELA
        <table>
        <tr>
        <th>id</th>
        <th>nazwa</th>
        <th>cena</th>
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


        mysqli_close($polaczenie);
    ?>
</body>
</html>
