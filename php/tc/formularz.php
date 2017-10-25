<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Formularz zajeęcia 2</title>
</head>
<body>
    <!--<form method="get" action="dane.php">
        <input type="text" name="imie">Imię<br>
        <input type="text" name="nazwisko">Nazwisko<br>
        <input type="submit">
    </form>-->

    <!--<form method="post" action="dane.php">
        <input type="radio" name="kolor" value="biały">biały<br>
        <input type="radio" name="kolor" value="zielony">zielony<br>
        <input type="radio" name="kolor" value="czerwony">czerwony<br>
        <input type="submit">
    </form>-->

    <form method="post">
        <input type="radio" name="kolor" value="biały">biały<br>
        <input type="radio" name="kolor" value="zielony">zielony<br>
        <input type="radio" name="kolor" value="czerwony">czerwony<br>
        <input type="submit" name="przycisk">
    </form><br>

    <form method="post">
        <input type="text" name="login">Login<br>
        <input type="password" name="pass">Hasło<br>
        <input type="submit" name="button"><br>
    </form>
    <?php
        if (isset($_POST['przycisk'])){
            if (isset($_POST['kolor'])){
                echo "Wybrałeś kolor {$_POST['kolor']}";
            }else{
                echo "Nie zaznaczyłeś pola radio";
            }
        }

  /*zad. dom.  sprawdz czy 'login' ma wartość janusz a hasło ma wartość 'okoń'*/






    ?>

</body>
</html>
