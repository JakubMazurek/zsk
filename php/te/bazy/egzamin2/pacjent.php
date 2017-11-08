<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Przychodnia</title>
    <link rel="stylesheet" href="przychodnia.css">
</head>
<body>

<div id="baner">
    <h1>PRAKTYKA LEKARZA RODZINNEGO</h1>
</div>
<div id="panelLewy">
    <h3>LISTA PACJENTÓW</h3>

    <?php

        $polaczenie = @new mysqli('localhost', 'root', '', 'przychodniate');

        if(!$polaczenie->connect_errno){

            //echo "Prawidłowe połączenie: ".$polaczenie->connect_errno;

            $zapytanie = "SELECT `id`, `imie`, `nazwisko` FROM `pacjenci`";

            if($rezultat = $polaczenie->query($zapytanie)){

                while($wiersz = $rezultat->fetch_assoc()){

                    echo <<<WIERSZ
                    {$wiersz['id']}
                    {$wiersz['imie']}
                    {$wiersz['nazwisko']}
                    <br>
WIERSZ;

                }

                echo "<br><br>";

                echo <<<FORMULARZ
                <form action="pacjent.php">
                    Podaj id:<br>
                    <input type="number" name="id">
                    <input type="submit" name="przycisk" value="Pokaż dane">
                    </form>
FORMULARZ;

            }else{
                echo "Błąd zapytania";
            }

        }else{
           //echo "Błąd: ".$polaczenie->connect_error;
            echo "Błąd: ".$polaczenie->connect_errno;
            //2002 serwer
            //1045 hasło
            //1044 użytkownik
            //1049 baza
        }

    ?>

</div>
<div id="panelPrawy">
    <h2>INFORMACJE SZCZEGÓŁOWE O PACJENCIE</h2>
    <?php

        if(isset($_GET['przycisk'])){
            $id = $_GET['id'];

            $zapytanie = "SELECT `imie`, `nazwisko`, `choroby_przewlekle`, `uczulenia` FROM `pacjenci` WHERE `id`='$id'";

            if($rezultat = $polaczenie->query($zapytanie)){

                $wiersz = $rezultat->fetch_assoc();

                echo <<<WIERSZ
                <p>Imię i nazwisko: {$wiersz['imie']} {$wiersz['nazwisko']}</p>
                <p>Choroby przewlekłe: {$wiersz['choroby_przewlekle']}</p>
                <p>Uczulenia: {$wiersz['uczulenia']}</p>
WIERSZ;

            }else{
                echo "Błędne zapytanie";
            }
        }


        $polaczenie->close();
        /*if($polaczenie->close()){
            echo "Połączenie zamknięte";
        }*/

    ?>
</div>
<div id="stopka"></div>

</body>
</html>
