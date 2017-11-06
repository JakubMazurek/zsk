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

        $zapytanie = "SELECT `id`,`imie`,`wlasciciel` FROM `zwierzeta` WHERE `rodzaj`=1";

        if($rezultat = mysqli_query($polaczenie, $zapytanie)){
            echo "Prawidłowe zapytanie<br>";
        }else{
            echo "Błędne zapytanie<br>";
        }

        //wyświetlenie zapytania psy

        echo "<h2>PSY</h2>";

        while($wiersz = mysqli_fetch_assoc($rezultat)){
            echo <<<WIERSZ
            {$wiersz['id']} {$wiersz['imie']} {$wiersz['wlasciciel']}<br>
WIERSZ;
        }

    //skrypt 2

    $zapytanie = "SELECT `id`,`imie`,`wlasciciel` FROM `zwierzeta` WHERE `rodzaj`=2";

        if($rezultat = mysqli_query($polaczenie, $zapytanie)){
            echo "Prawidłowe zapytanie<br>";
        }else{
            echo "Błędne zapytanie<br>";
        }

        //wyświetlenie zapytania koty

        echo "<h2>KOTY</h2>";

        while($wiersz = mysqli_fetch_assoc($rezultat)){
            echo <<<WIERSZ
            {$wiersz['id']} {$wiersz['imie']} {$wiersz['wlasciciel']}<br>
WIERSZ;
        }

        echo "<h2>SZCZEGÓŁOWA INFORMACJA O ZWIERZĘTACH</h2>";

        $zapytanie = "SELECT `imie`,`telefon`,`szczepienie`,`opis` FROM `zwierzeta`";

        if($rezultat = mysqli_query($polaczenie, $zapytanie)){

            while($wiersz = mysqli_fetch_assoc($rezultat)){

                echo <<<WIERSZ
                Pacjent: {$wiersz['imie']}<br>
                Telefon właściciela: {$wiersz['telefon']},
                ostatnie szczepienie: {$wiersz['szczepienie']},
                informacje: {$wiersz['opis']}
                <br><hr><br>
WIERSZ;

            }


        }else{
            echo "Błędne zapytanie";
        }

    if(mysqli_close($polaczenie)){
        echo "Zamknięte połączenie";
    }else{
        echo "Otwarte połączenie";
    }
    ?>
</body>
</html>
