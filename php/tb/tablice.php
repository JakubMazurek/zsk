<?php

//tablice indeksowane numerycznie

    $kolory = array("biały", "zielony", "czerwony");

    echo "Początkowa zawartość tablicy: <br>";

    for ($i=0; $i<count($kolory); $i++){
        $elem = $i + 1;
        echo "Element $elem : $kolory[$i]<br>";
    }

    echo "<br>";

    $kolory[0] = "orange";
    $kolory[1] = "aqua";
    $kolory[2] = "magenta";

    for ($i=0; $i<count($kolory); $i++){
        $elem = $i + 1;
        echo "Element [$elem] : $kolory[$i]<br>";
    }

    echo "<br>";

//**************************************************************

//tablice asocjacyjne

    $dane = array(
        "imie" => "Janusz",
        "nazwisko" => "Nowak",
        "wiek" => 20
    );

    echo "Zawartość tablicy: <br>";

    echo <<<TABLICA
    Imię: {$dane['imie']}<br>
    Nazwisko: {$dane['nazwisko']}<br>
    Wiek: {$dane['wiek']}<br>
TABLICA;

    echo "<br>";

//fereach

    /*foreach($dane as $wartosc){
        echo "Wartość: $wartosc <br>";
    }*/

    echo "<br>";

    foreach($dane as $klucz => $wartosc){
        echo "Element [$klucz] - $wartosc <br>";
    }
    echo "<br>";

//*************************************************************

//tablice wielowymiarowe

    $uczen = array(
        array("Julia", "Nowak", 20),
        array("Anna", "Kowal", 19)
    );

    for($i=0; $i<count($uczen); $i++){
        $nr = $i + 1;
        echo "Uczeń $nr: ";
        for($j=0; $j<count($uczen[$i]); $j++){
            //echo $uczen[$i][$j];
            echo "{$uczen[$i][$j]}";
        }
        echo "<br>";
    }

    echo "<br><br>";

    foreach($uczen as $klucz => $tablica){
        foreach($tablica as $klucz2 => $wartosc){
            echo $uczen[$klucz][$klucz2]." ";
        }
        echo "<br>";
    }

//*********************************

    $cyfry = array(
        array(1,2,3,4),
        array(5,6,7),
        array(8),
        array(9,10)
    );

    foreach($cyfry as $wartosc){
        echo "<br>";
        foreach($wartosc as $x){
            echo "$x ";
        }
    }

    echo "<br><br>";

//***********************************************************

//sortowanie tablic

    $tab = array(10, 1, 5, 75, -4, 100);

    foreach($tab as $x){
        echo "$x ";
    }

//rosnąco

    sort($tab);
    echo "<br>Tablica posortowana rosnąco: <br>";

    foreach($tab as $x){
        echo "$x ";
    }

//malejąco

    rsort($tab);
    echo "<br>Tablica posortowana malejąco: <br>";

    foreach($tab as $x){
        echo "$x ";
    }

    echo "<br><br>";

//********************************************************

    $tab2 = array('karol', 'anna', 'zenon', 'Julia', 'pawel');

    foreach($tab2 as $klucz => $y){
        $z = strtolower($y);
        $tab2[$klucz] = $z;
        echo "$z ";
    }

    sort($tab2);

    echo "<br>Tablica posortowana rosnąco: <br>";
    foreach($tab2 as $x){
        echo "$x ";
    }

//sortowanie tablicy asocjacyjnej

    $tabAsoc = array(
        "imie" => "andrzej",
        "pseudonim" => "2endru",
        "wiek" => 30,
        "nazwisko" => "kowal",
    );

    echo "<br><br>";

    function wyswietl($tab){
        foreach($tab as $x){
            echo "$x ";
        }
            echo "<br>";
    }
    wyswietl($tabAsoc);

//sortowanie według wartości

    asort($tabAsoc);
    wyswietl($tabAsoc);
    //andrzej endru kowal 30
    arsort($tabAsoc);
    wyswietl($tabAsoc);

    echo gettype($tabAsoc['pseudonim']); //string
    echo gettype($tabAsoc['wiek']); //integer
    echo "<br>";

//sortowanie według klucza

    ksort($tabAsoc);
    wyswietl($tabAsoc);
    //andrzej kowal 2endru 30
    krsort($tabAsoc);
    wyswietl($tabAsoc);

//wyświetlanie danych z tablicy

    var_dump($tabAsoc);

    echo "<br>";
    print_r($tabAsoc);
    /*Array ( [wiek] => 30 [pseudonim] => 2endru [nazwisko] => kowal [imie] => andrzej )*/

    echo "<pre>";
        print_r($tabAsoc);
    echo "</pre>";

    /*Array
(
    [wiek] => 30
    [pseudonim] => 2endru
    [nazwisko] => kowal
    [imie] => andrzej
)*/

?>
