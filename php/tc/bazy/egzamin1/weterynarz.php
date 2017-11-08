<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Weterynarz</title>
<link rel="stylesheet" href="weterynarz.css">
</head>
<body>

    <div id="baner">
        <h1>GABINET WETERYNARYJNY</h1>
    </div>
    <div id="panelLewy">
        <h2>PSY</h2>

        <?php

        //połączenie z serwerem MySQL

            if($polaczenie = @mysqli_connect('localhost', 'root', '')){
                //echo "Połączenie prawidłowe";
            }else{
                echo "Nieprawidłowe połączenie<br>";
            }

        //połączenie z bazą danych

            if(mysqli_select_db($polaczenie,'weterynarztc')){
                //echo "Poprawne połączenie z bazą: waterynarztc<br>";
            }else{
                echo "Błąd połączenia z bazą: weterynarztc<br>";
            }

            mysqli_set_charset($polaczenie, "utf8");


            $zapytanie = "SELECT `id`, `imie`, `wlasciciel` FROM `zwierzeta` WHERE `rodzaj`=1";

            if($rezultat = mysqli_query($polaczenie, $zapytanie)){

            while($wiersz = mysqli_fetch_row($rezultat)){

                echo <<<WIERSZ
                $wiersz[0]
                $wiersz[1]
                $wiersz[2]
                <br>
WIERSZ;

            }

            }else{
                echo "Błędne zapytanie<br>";
            }

        ?>

        <h2>KOTY</h2>

        <!--skrypt 2-->

          <?php

            $zapytanie = "SELECT `id`, `imie`, `wlasciciel` FROM `zwierzeta` WHERE `rodzaj`=2";

            if($rezultat = mysqli_query($polaczenie, $zapytanie)){

            while($wiersz = mysqli_fetch_row($rezultat)){

                echo <<<WIERSZ
                $wiersz[0]
                $wiersz[1]
                $wiersz[2]
                <br>
WIERSZ;

            }

            }else{
                echo "Błędne zapytanie<br>";
            }

        ?>

    </div>
    <div id="panelSrodkowy">
        <h2>SZCZEGÓŁOWA INFORMACJA O ZWIERZĘTACH</h2>

        <?php

            $zapytanie = "SELECT zwierzeta.imie, zwierzeta.telefon, zwierzeta.szczepienie, zwierzeta.opis FROM `zwierzeta`";

            if($rezultat = mysqli_query($polaczenie, $zapytanie)){

                while($wiersz = mysqli_fetch_assoc($rezultat)){

                    echo <<<WIERSZ
                    Pacjent: $wiersz[imie]<br>
                    Telefon właściciela: $wiersz[telefon],
                    ostatnie szczepienie: $wiersz[szczepienie],
                    informacje: $wiersz[opis]
                    <hr>
WIERSZ;

                }
            }else{
                echo "Błąd w zapytaniu";
            }


        mysqli_close($polaczenie);

        ?>

    </div>
    <div id="panelPrawy"></div>

</body>
</html>
