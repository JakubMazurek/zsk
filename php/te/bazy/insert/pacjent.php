<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Przychodnia usuwanie danych</title>
    <link rel="stylesheet" href="przychodnia.css">
</head>
<body>
    <h2>Wyświetlanie i dodawanie danych</h2>

       <?php

        $polaczenie = @new mysqli('localhost', 'root', '', 'przychodniate');

        if(!$polaczenie->connect_error){

            $polaczenie->set_charset("utf8");

            $sort = 'id';

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
                    <th><a href='pacjent.php?sort=opis'>opis</a></th>
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
                    <td>{$wiersz['leki_przepisane']}</td>
                    <td>{$wiersz['opis']}</td>
                    <td><a href='delete.php?id={$wiersz['id']}'>usuń</a></td>
                    </tr>
WIERSZ;

                }


            echo "</table>";

            }else{
                echo "Błędne zapytanie";
            }

        }else{
            echo "Błąd połączenia: ".$polaczenie->connect_errno;
        }

    echo "<br>";

    $polaczenie->close();

    ?>


    <form action="insert.php" method="post">
        <input type="text" name="imie" placeholder="imię"><br><br>
        <input type="text" name="nazwisko" placeholder="nazwisko"><br><br>
        <input type="text" name="choroby_przewlekle" placeholder="choroby przewlekłe"><br><br>
        <input type="text" name="uczulenia" placeholder="uczulenia"><br><br>
        <input type="text" name="choroba" placeholder="choroba"><br><br>
        <input type="text" name="leki_przepisane" placeholder="leki przepisane"><br><br>

        <textarea rows="6" cols="25" name="opis">opis...
        </textarea><br><br>

        <input type="submit" name="przycisk" value="Dodaj"><br><br>
    </form>

</body>
</html>
