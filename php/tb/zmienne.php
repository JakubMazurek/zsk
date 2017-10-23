<?php
    $liczba=10;
    $_liczba=15;
    $liczba2 = 11;
    $imie_ = "Janusz";
    $Imie_ = "Anna";
    $imię = "Krzysztof";
    $wartość = 1;

    echo "$liczba";
    echo $liczba;
    echo '$liczba';

//typy danych
//typ skalarny (prosty)

    $prawda = true;
    $falsz = false;

//typ integer

    $calkowita = 200;
    $szesnastkowa = 0xA;
    $oktalna = 010;
    $binarna = 0b1010;

    echo $binarna;

//typ float

    $dziesietna = 6.126;

//typ string

    $tekstowa = "tekst";
    $tekstowa1 = 'tekst';

//heredoc

    $imie = "Ola";

    $napis = <<<TEKST
    <br>Mam na imię: $imie
    <br>Mam 20 lat<br>
    <h1>Egzamin</h1>TEKST
TEKST;
    echo $napis;

//nowdoc

$nazwisko = "Nowak";

    $tekstNazwisko = <<<'NAZWISKO'
    <br>Moje nazwisko: $nazwisko
    <br>Mam 20 lat<br>
    <h1>Egzamin</h1>TEKST
NAZWISKO;
    echo $tekstNazwisko;

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
