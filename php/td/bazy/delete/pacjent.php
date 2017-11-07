<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Przychodnia</title>
    <link rel="stylesheet" href="przychodnia.css">
</head>
<body>


        <?php

            $polaczenie = @new mysqli('localhost', 'root', '', 'przychodniatd');

            $sql = "SELECT * FROM pacjenci";

        echo <<<TABELA
        <table>
        <tr>
            <th>id</th>
            <th>imie</th>
            <th>nazwisko</th>
            <th>choroby przewlekłe</th>
            <th>uczulenia</th>
            <th>choroba</th>
            <th>leki przepisane</th>
            <th>usuń</th>
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
                    <td><a href='delete.php?id={$wiersz['id']}'>usuń</a></td>
                    </tr>
WIERSZ;
                }
            }else{
                echo "Błędne zapytanie";
            }
    echo "</table>";

        ?>
</body>
</html>
