<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Przychodnia</title>
<link rel="stylesheet" href="przychodnia.css">
</head>
<body>

    <div id="baner"><h1>PRAKTYKA LEKARZA RODZINNEGO</h1></div>
    <div id="panelLewy">
        <h3>LISTA PACJENTÓW</h3>

        <?php

            $polaczenie = mysqli_connect('localhost', 'root', '', 'przychodniatb');

            $zapytanie = "SELECT `id`, `imie`, `nazwisko` FROM `pacjenci`";





        ?>

    </div>
    <div id="panelPrawy"></div>
    <div id="stopka"></div>

</body>
</html>
