<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Formularz</title>
</head>
<body>
    <!--<form action="dane.php" method="get">
        <input type="text" name="imie">Imię<br>
        <input type="text" name="nazwisko">Nazwisko<br>
        <input type="submit">
    </form>-->

    <!--Formularz 2-->

    <!--<form method="post" action="dane.php">
        <input type="text" name="login">Login<br>
        <input type="password" name="pass">Hasło<br>
        <input type="submit">
    </form>-->

    <!--Formularz 3-->

    <!--<form method="get" action="dane.php">
        <input type="radio" name="kolor" value="Biały">Biały<br>
        <input type="radio" name="kolor" value="Zielony">Zielony<br>
        <input type="radio" name="kolor" value="Czerwony">Czerwony<br>
        <input type="radio" name="kolor" value="Niebieski">Niebieski<br>
        <input type="submit">
    </form>-->

    <!--formularz 3_1-->

    <form method="get">
        <input type="radio" name="kolor" value="Biały">Biały<br>
        <input type="radio" name="kolor" value="Zielony">Zielony<br>
        <input type="radio" name="kolor" value="Czerwony">Czerwony<br>
        <input type="radio" name="kolor" value="Niebieski">Niebieski<br>
        <input type="submit" name="przycisk">
    </form>
    <?php

          if (isset($_GET['przycisk'])){
          if (isset($_GET['kolor'])){
        echo "Zaznaczyłeś kolor: {$_GET['kolor']}";
    }else{
              echo "Nie zaznaczyłeś pola radio";
          }}
    ?>

</body>
</html>
