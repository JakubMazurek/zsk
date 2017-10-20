<?php
    $liczba = 10;
    $_liczba = 15;
    $liczba2 = 11;
    $imie_ = "Janusz";
    $Imie_ = "Anna";
    $Imię_ = "Tomek";
    $wartość = 1;

    /*echo "$liczba"; //10
    echo $liczba;   //10
    echo '$liczba'; //$liczba*/

//typy zmiennych
//typ skalarny (prosty)

//typ boolean
    $prawda = true;
    $falsz = false;

    //typ integer
    $calkowita = 200;
    $szesnastkowa = 0xA;
    $osemkowa = 010;    // 0*8^0 + 1*8^1
    $binarna = 0b1010;

    //echo $binarna;

//typ float

    $zmiennoprzecinkowa = 5.7;


//typ string

    $zmienna = 5.25;
    //echo "$zmienna";
    //echo '$zmienna';  //!!!!!!!!!!!!!!!$zmienna

    //składnia heredoc

    $imie = "Filip";
    $napis = <<<TEKST
        Mam na imię $imie<br>
        TEKST
TEKST;

    //echo $napis;

    //składnia nowdoc


    $nazwisko = "Nowak";
    $tekst = <<<'ETYKIETA'
    Moje nazwisko: $nazwisko
ETYKIETA;

    //echo $tekst;

//typ złożony
    //typ array (tablicowy)
    //typ object (obiektowy)

//typ specjalny
    //typ resource
    //typ null

    $inna = null;
    $inna1 = NULL;

//******************************************

    //echo "Zmienna o nazwie \$inna ma wartość: ", $inna;





?>
