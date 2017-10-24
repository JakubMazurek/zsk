<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Formularz zajęcia 2</title>
</head>
<body>
    <!--<form method="get" action="dane.php">
        <input type="text" name="imie">Imię<br>
        <input type="text" name="nazwisko">Nazwisko
        <br><input type="submit">
    </form>-->

    <!--<form action="dane.php">
        <input type="radio" name="radio1" value="pierwszy">pierwsza<br>
        <input type="radio" name="radio1" value="druga">druga<br>
        <input type="radio" name="radio1" value="trzecia">trzecia<br>
        <input type="submit">
    </form>-->

    <form>
        <input type="radio" name="radio1" value="pierwszy">pierwsza<br>
        <input type="radio" name="radio1" value="druga">druga<br>
        <input type="radio" name="radio1" value="trzecia">trzecia<br>
        <input type="submit" name="przycisk">
    </form>
    <?php
        if (isset($_GET['przycisk'])){
            if (isset($_GET['radio1'])){
                $zaznaczenie = $_GET['radio1'];
                echo "Zaznaczyłeś wartość: $zaznaczenie";
            }else{
                echo "Zaznacz radio!";
            }
        }

    ?>
</body>
</html>
