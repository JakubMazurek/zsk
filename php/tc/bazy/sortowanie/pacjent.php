<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Przychodnia</title>
    <link rel="stylesheet" href="przychodnia.css">
</head>
<body>

    <?php

        $polaczenie = new mysqli('localhost', 'root', '', 'przychodniatc');

        if(!$polaczenie->connect_error){

            //mysqli_set_charset($polaczenie, "utf8");

            $polaczenie->set_charset("utf8");

            //echo "Prawidłowe połączenie";

            $sort = 'id';

            if(isset($_GET['sort'])){
                $sort = $_GET['sort'];
            }

            $sql = "SELECT * FROM `pacjenci` ORDER BY $sort";

            echo <<<TABELA
            <table>
                <tr>
                <th><a href='pacjent.php?sort=id'>id</a></th>
                <th><a href='pacjent.php?sort=imie'>imie</a></th>
                <th>nazwisko</th>
                <th>choroby przewlekłe</th>
                <th>uczulenia</th>
                <th>choroba</th>
                <th>leki przepisane</th>
                <th>Usuń</th>
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
                    <td><a href='delete.php?id=$wiersz[id]'>Usuń</a></td>
                  </tr>
WIERSZ;


              }

           }else{
              echo "Błąd w zapytaniu";
           }

            echo "</table>";

        }else{
            echo "Błąd połączenia";
        }


    $polaczenie->close();

    ?>
    <h2>Dodaj pacjenta:</h2>
    <form action="insert.php" method="post">

        <input type="text" name="imie" placeholder="imię"><br>
        <input type="text" name="nazwisko" placeholder="nazwisko"><br>
        <input type="text" name="choroby_przewlekle" placeholder="choroba przewlekła"><br>
        <input type="text" name="uczulenia" placeholder="uczulenia"><br>
        <input type="text" name="choroba" placeholder="choroba"><br>
        <input type="text" name="leki_przepisane" placeholder="leki przepisane"><br>
        <input type="text" name="opis" placeholder="opis"><br>
        <input type="submit" name="przycisk" value="Dodaj pacjenta"><br>

    </form>

</body>
</html>
