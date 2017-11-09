<!DOCTYPE html>
<html>
<head>
    <meta charset="utf8">
    <title>sortowanie</title>
    <link rel="stylesheet" href="form.css">
</head>
<body>
    <?php

        $polaczenie = new mysqli('localhost', 'root', '', 'przychodniatb');

        if(!$polaczenie->connect_error){

            //mysqli_set_charset($polaczenie, "utf8");

            $polaczenie->set_charset("utf8");

            $sort = 'id';

            if(isset($_GET['sort'])){
                $sort = $_GET['sort'];
            }


            $sql = "SELECT * FROM `pacjenci` ORDER BY $sort";

            echo <<<TABELA
             <table>
                <tr>
                    <th><a href='form.php?sort=id'>id</a></th>
                    <th><a href='form.php?sort=imie'>imie</a></th>
                    <th><a href='form.php?sort=nazwisko'>nazwisko</a></th>
                    <th><a href='form.php?sort=choroby_przewlekle'>choroby przewlekłe</a></th>
                    <th><a href='form.php?sort=uczulenia'>uczulenia</a></th>
                    <th><a href='form.php?sort=choroba'>choroba</a></th>
                    <th><a href='form.php?sort=leki_przepisane'>leki przepisane</a></th>
                </tr>

TABELA;

        if($rezultat = $polaczenie->query($sql)){

            while($wiersz = $rezultat->fetch_assoc()){

                echo <<<WIERSZ
                <tr>
                <td>$wiersz[id]</td>
                <td>$wiersz[imie]</td>
                <td>$wiersz[nazwisko]</td>
                <td>$wiersz[choroby_przewlekle]</td>
                <td>$wiersz[uczulenia]</td>
                <td>$wiersz[choroba]</td>
                <td>$wiersz[leki_przepisane]</td>
                </tr>
WIERSZ;

            }

        }else{
            echo "Błędne zapytanie";
        }

        echo "</table>";

        }else{
            echo "Błąd połączenia";
        }

    $polaczenie->close();

    ?>

</body>
</html>
