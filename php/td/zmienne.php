<?php
    $liczba = 10;
    $_liczba = 15;
    $liczba2 = 11;
    $imie_ = "Janusz";
    $Imie_ = "Anna";
    $Imię_ = "Krystyna";
    $wartość = 12;

    //typy zmiennych

    //typ skalarny (prosty)

    //typ boolean
    $prawda = true;
    $prawda = false;

    //typ integer
    $dziesietna = 200;
    //echo "Zmienna: ", $dziesietna;

    $calkowita = 1;
    $osemkowa = 021;    //17=2*8+1*1
    $szesnastkowa = 0xA;    //10
    $binarna = 0b1011;

    //echo $binarna;

//typ float
    $zmienna = 5.7;

//typ string
    $test = 1;
    echo "Zmienna wynosi: $test";
    echo '<br>Zmienna wynosi: $test<br>';

    //składnia heredoc

    $wiek = 20;
    $imie = <<<ETYKIETA
    Janusz ma $wiek lat<br>
    Mieszka w Poznaniu ETYKIETA<br><br>
ETYKIETA;

    echo $imie;

    //składnia nowdoc

    $miejscowosc = 'Poznań';
    $dane = <<<'UCZEN'
    Miejsce urodzenia: $miejscowosc
UCZEN;

    echo $dane;

    echo <<<'TEST'
    <h1>Miejsce urodzenia:</h1> $miejscowosc
TEST;

//typ złożony
    //typ array
    //typ object

//typ specjalny
    //typ resource
    //typ null

    $inna = null;
    $inna1 = NULL;

    echo 'Zmienna wynosi', $inna;



?>
