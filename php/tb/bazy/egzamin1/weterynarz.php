

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
    <!--skrypt 1-->
    <?php

        $polaczenie = mysqli_connect('localhost', 'root', '', 'weterynarz4tb');

        mysqli_set_charset($polaczenie, 'utf8');

        $zapytanie = "SELECT `id`, `imie`, `wlasciciel` FROM `zwierzeta` WHERE `rodzaj`=1";

        if($rezultat = mysqli_query($polaczenie, $zapytanie)){

            while($wiersz = mysqli_fetch_array($rezultat)){

                echo <<<WIERSZ
                {$wiersz['id']}
                {$wiersz['imie']}
                {$wiersz['wlasciciel']}
                <br>
WIERSZ;

            }
        }

    ?>

        <h2>KOTY</h2>

        <!--skrypt 2-->
    <?php

        $zapytanie = "SELECT `id`, `imie`, `wlasciciel` FROM `zwierzeta` WHERE `rodzaj`=2";

        if($rezultat = mysqli_query($polaczenie, $zapytanie)){

            while($wiersz = mysqli_fetch_array($rezultat)){

                echo <<<WIERSZ
                {$wiersz['id']}
                {$wiersz['imie']}
                {$wiersz['wlasciciel']}
                <br>
WIERSZ;

            }
        }

    ?>

    </div>
    <div id="srodek">
        <h2>SZCZEGÓŁOWA INFORMACJA O ZWIERZĘTACH</h2>
        <?php

            $zapytanie = "SELECT `imie`, `telefon`, `szczepienie`, `opis` FROM `zwierzeta`";

            if($rezultat = mysqli_query($polaczenie, $zapytanie)){

                while($wiersz = mysqli_fetch_array($rezultat)){

                    echo <<<WIERSZ
                    Pacjent: {$wiersz['imie']}<br>
                    Telefon właściciela: {$wiersz['telefon']}, ostatnie szczepienie: {$wiersz['szczepienie']}, informacje: {$wiersz['opis']}
                    <br><hr>
WIERSZ;

                }

            }

        mysqli_close($polaczenie);
        ?>
    </div>
    <div id="panelPrawy"></div>
</body>
</html>
