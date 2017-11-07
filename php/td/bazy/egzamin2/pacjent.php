<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Przychodnia</title>
    <link rel="stylesheet" href="przychodnia.css">
</head>
<body>
    <div id="baner">
        PRAKTYKA LEKARZA RODZINNEGO
    </div>
    <div id="panelLewy">
        <h3>LISTA PACJENTÓW</h3>
    <!--skrypt 1-->

        <?php

            $polaczenie = @new mysqli('localhost', 'root', '', 'przychodniatd');

            if($polaczenie->connect_errno){
                echo "Błąd połączenia: ".$polaczenie->connect_errno."<br>";
                //echo "Błąd połączenia: ".$polaczenie->connect_error."<br>";
                //2002 serwer
                //1044 użytkownik
                //1045 hasło
                //1049 baza
            }else{
                //echo "Poprawne połączenie<br>";

                $sql = "SELECT pacjenci.id, pacjenci.imie, pacjenci.nazwisko FROM `pacjenci`";

                if($rezultat = $polaczenie->query($sql)){

                    while($wiersz = $rezultat->fetch_assoc()){

                        echo <<<WIERSZ
                        {$wiersz['id']}
                        {$wiersz['imie']}
                        {$wiersz['nazwisko']}
                        <br>
WIERSZ;
                    }

                echo "<br><br>";

                echo <<<FORM
                Podaj id: <br>
                <form action="pacjent.php" method="post">
                <input type="number" name="id">
                <input type="submit" name="przycisk" value="Pokaż dane">
                </form>
FORM;

                    echo "<h3>LEKARZE</h3>";
                }else{
                    echo "Błąd zapytania";
                }


            }

        ?>

        <br><br>

    </div>
    <div id="panelPrawy">
        <h2>INFORMACJE SZCZEGÓŁOWE O PACJENCIE</h2>

        <?php

            if(isset($_POST['przycisk'])){

                $id = $_POST['id'];

                $sql = "SELECT `imie`, `nazwisko`, `choroby_przewlekle`, `uczulenia` FROM `pacjenci` WHERE `id`= '$id'";

                if($rezultat = $polaczenie->query($sql)){

                    while($wiersz = $rezultat->fetch_assoc()){

                        echo <<<WIERSZ
                        <p>Imię i nazwisko: {$wiersz['imie']} {$wiersz['nazwisko']}</p>
                        <p>Choroby przewlekłe: {$wiersz['choroby_przewlekle']}</p>
                        <p>Uczulenia: {$wiersz['uczulenia']}</p>
WIERSZ;

                    }
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
