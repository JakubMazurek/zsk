<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Przychodnia usuwanie danych</title>
<link rel="stylesheet" href="przychodnia.css">
</head>
<body>

    <?php

        $polaczenie = @new mysqli('localhost', 'root', '', 'przychodniatb');

        $polaczenie->set_charset('utf8');

        if(!$polaczenie->connect_errno){

            $sort = 'uczulenia';

            if(isset($_GET['sort'])){
                $sort = $_GET['sort'];
            }


            $sql = "SELECT * FROM pacjenci ORDER BY $sort";

            echo <<<TABELA
             <table>
    <tr>
        <th><a href='pacjent.php?sort=id'>id</a></th>
        <th><a href='pacjent.php?sort=imie'>imie</a></th>
        <th><a href='pacjent.php?sort=nazwisko'>nazwisko</a></th>
        <th><a href='pacjent.php?sort=choroby_przewlekle'>choroby przewlekłe</a></th>
        <th><a href='pacjent.php?sort=uczulenia'>uczulenia</a></th>
        <th><a href='pacjent.php?sort=choroba'>choroba</a></th>
        <th><a href='pacjent.php?sort=leki_przepisane'>leki przepisane</a></th>
        <th>Usuń</th>
    </tr>
TABELA;

            if($rezultat = $polaczenie->query($sql)){

                while($wiersz = $rezultat->fetch_assoc()){

                    echo <<<WIERSZ
                    <tr>
                    <td>{$wiersz['id']}</td>
                    <td>{$wiersz['imie']}</td>
                    <td>{$wiersz['nazwisko']}</td>
                    <td>{$wiersz['choroby_przewlekle']}</td>
                    <td>{$wiersz['uczulenia']}</td>
                    <td>{$wiersz['choroba']}</td>
                    <td>$wiersz[leki_przepisane]</td>
                    <td><a href='delete.php?id=$wiersz[id]'>usuń</a></td>
                    </tr>
WIERSZ;

                }

            echo "</table>";

            }else{
                echo "Błędne zapytanie";
            }

        }else{
            echo "Błąd: ".$polaczenie->connect_errno;
        }

    ?>


</body>
</html>
