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

          if($polaczenie = mysqli_connect('localhost', 'root', '')){
              //echo "Prawidłowe połączenie z serwerem<br>";
          }else{
              //exit("Błędne połączenie");
              echo "Błędne połączenie<br>";
          }


        //połączenie z bazą danych
          if(mysqli_select_db($polaczenie, 'weterynarz')){
              //echo "Połączyłeś się z bazą danych: weterynarz<br>";
          }else{
              echo "Nie połączyłeś się z bazą danych: weterynarz<br>";
          }

        mysqli_set_charset($polaczenie, "utf8");

        $zapytanie = "SELECT zwierzeta.id, zwierzeta.imie, zwierzeta.wlasciciel FROM `zwierzeta` WHERE zwierzeta.rodzaj = 1";

        if ($rezultat = mysqli_query($polaczenie, $zapytanie)){
            //echo "Prawidłowe zapytanie<br>";
        }else{
            echo "Błędne zapytanie<br>";
        }

        //wyświetlenie zapytania

        while($wiersz = mysqli_fetch_row($rezultat)){
            echo <<<WIERSZ
            $wiersz[0]
            $wiersz[1]
            $wiersz[2] <br>
WIERSZ;
        }

?>

        <h2>KOTY</h2>

        <?php



        $zapytanie = "SELECT zwierzeta.id, zwierzeta.imie, zwierzeta.wlasciciel FROM `zwierzeta` WHERE zwierzeta.rodzaj = 2";

        if ($rezultat = mysqli_query($polaczenie, $zapytanie)){
            //echo "Prawidłowe zapytanie<br>";
        }else{
            echo "Błędne zapytanie<br>";
        }

        //wyświetlenie zapytania

        while($wiersz = mysqli_fetch_assoc($rezultat)){
            echo <<<WIERSZ
            {$wiersz['id']}
            {$wiersz['imie']}
            {$wiersz['wlasciciel']} <br>
WIERSZ;
        }

?>

    </div>
    <div id="srodkowy">

        <h2>SZCZEGÓŁOWA INFORMACJA O ZWIERZĘTACH</h2>

        <?php

            $zapytanie = "SELECT `imie`, `telefon`, `szczepienie`, `opis` FROM `zwierzeta`";

            if($rezultat = mysqli_query($polaczenie, $zapytanie)){

                while($wiersz = mysqli_fetch_assoc($rezultat)){

                    echo <<<WIERSZ
                    Pacjent: {$wiersz['imie']}<br>
                    Telefon właściciela: {$wiersz['telefon']}, ostatnie szczepienie: {$wiersz['szczepienie']}, informacje: {$wiersz['opis']}
                    <hr>
WIERSZ;



                }




            }else{
                echo "Błędne zapytanie";
            }






        mysqli_close($polaczenie);

        ?>

    </div>
    <div id="panelPrawy"></div>




</body>
</html>
