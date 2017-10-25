<?php
    $liczba = 10;
    $_liczba = 15;
    $liczba2 = 11;
    $imie_ = "Janusz";
    $Imie_ = "Anna";

    $Imię_ = "Krystyna";
    $wartość = 12;

    //emoji
    $✌️ = "ok";
    echo $✌️,"<br>";

    //typy danych

    //typy skalarne (prosty)

    //typ boolean
    $prawda = true;
    $falsz = false;

    //typ integer
    $calkowita = 200;
    $osemkowa = 021;  //2*8^1 + 1*8^0 = 17
    $szesnastkowa = 0xA;
    $binarna = 0b1010;

    echo "zmienna: $binarna<br>";

//typ float

    $zmienna = 5.7;

//typ string

    $cyfra = 1;
    echo "tekst: $cyfra<br>";
    echo 'tekst: $cyfra<br>';

    //składnia heredoc

    $wiek = 20;

    $imie = <<<ETYKIETA
    Janusz ma $wiek lat<br>
    Mieszka w Poznaniu<br>
    Nazywa się Kowal<br>ETYKIETA<br>
    Janusz<br><br>
ETYKIETA;
    echo $imie;

//nowdoc
    $x = "Janusz";
    $tekst = <<<'TEKST'
    Anna i $x
TEKST;

    echo "$tekst<br>";

    $miejscowosc = "Poznań";
    echo <<<'TEST'
    <h1>Miejsce urodzenia: </h1>
    $miejscowosc
TEST;

    //typ złożony
        //typ array
        //typ object

//typ specjalny
    //typ resource
    //typ null

    $inna = null;
    $inna1 = NULL;

?>
