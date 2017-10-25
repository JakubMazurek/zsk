<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Formularz zajęcia 2</title>
</head>
<body>
<!--<form method="get" action="dane.php">
   <input type="text" name="imie">Imię<br>
   <input type="text" name="nazwisko">Nazwisko<br>
   <input type="submit">
</form><br>-->

    <!--<form method="post" action="dane.php">
        <input type="text" name="login">Login<br>
        <input type="password" name="pass">Hasło<br>
        <input type="submit">
    </form>-->

 <!--   <form method="get" action="dane.php">
        <input type="radio" name="kolor" value="biały">Biały<br>
        <input type="radio" name="kolor" value="czarny">Czarny<br>
        <input type="radio" name="kolor" value="zielony">Zielony<br>
        <input type="radio" name="kolor" value="czerwony">Czerwony<br>
        <input type="submit" value="Wyślij">
    </form>-->

      <form method="get">
        <input type="radio" name="kolor" value="biały">Biały<br>
        <input type="radio" name="kolor" value="czarny">Czarny<br>
        <input type="radio" name="kolor" value="zielony">Zielony<br>
        <input type="radio" name="kolor" value="czerwony">Czerwony<br>
        <input type="submit" name="przycisk" value="Wyślij">
    </form>

        <?php
            if (isset($_GET['przycisk'])){
                if (isset($_GET['kolor'])){
                    $kolor = $_GET['kolor'];
                    echo "Wybrałeś kolor: $kolor";
                }else{
                    echo "Nie zaznaczyłeś pola radio";
                }
            }

        ?>


</body>
</html>
