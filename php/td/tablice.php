<?php

    //tablice indeksowane numerycznie

    $kolory = array("biały", "zielony", "czerwony");

    echo "Początkowa zawartość tablicy: <br>";

    for ($i=0; $i<count($kolory); $i++){
        $elem = $i + 1;
        echo "Element $elem : $kolory[$i]<br>";
    }

    $kolory[0] = "orange";
    $kolory[1] = "aqua";
    $kolory[2] = "magenta";

    echo "<br>Zmieniona zawartość tablicy:<br>";

    for ($i=0; $i<count($kolory); $i++){
        $elem = $i + 1;
        echo "Element[$elem] - $kolory[$i]<br>";
    }

//******************************************************

//tablice asocjacyjne

    $dane = array(
    "imie" => "Janusz",
    "nazwisko" => "Nowak",
    "wiek" => 20
    );

    echo "<br>Zawartość tablicy: <br>";

    echo <<<TABLICA
    Imię: {$dane['imie']}<br>
    Nazwisko: {$dane['nazwisko']}<br>
    Wiek: {$dane['wiek']}<br>
TABLICA;

echo "<br>";

//foreach

    /*foreach($dane as $wartosc){
        echo "Wartość: $wartosc <br>";
    }*/

    foreach($dane as $klucz => $wartosc){
        echo "Element[$klucz] - $wartosc <br>";
    }

    echo "<br>";

//***********************************************************

//tablice wielowymiarowe

    $uczen = array(
        array("Julia", "Nowak", 20),
        array("Anna", "Kowal", 19)
    );

    for($i=0; $i<count($uczen); $i++){
        $nr = $i + 1;
        echo "Uczeń $nr: ";
        for($j=0; $j<count($uczen[$i]); $j++){
            echo "{$uczen[$i][$j]} ";
        }
        echo "<br>";
    }

echo "<br><br>";

foreach($uczen as $klucz => $tablica){
    foreach($tablica as $klucz2 => $wartosc){
        echo "{$uczen[$klucz][$klucz2]} ";
    }
    echo "<br>";
}


$cyfry = array(
    array(1,2,3,4),
    array(5,6,7),
    array(8),
    array(9,10)
);

foreach ($cyfry as $wartosc){
    echo "<br>";
    foreach ($wartosc as $x){
        echo "$x ";
    }
}

echo "<br><br>";

//**************************************************************

$tab = array(10,1,5,75,-4,100);

foreach ($tab as $x){
    echo "$x ";
}

//rosnąco

sort($tab);
echo "<br>Tablica po sortowaniu rosnąco<br>";

foreach ($tab as $x){
    echo "$x ";
}

//malejąco

rsort($tab);

echo "<br>Tablica po sortowaniu malejąco<br>";

foreach ($tab as $x){
    echo "$x ";
}

echo "<br><br>";

//*******************************************************

$tab2 = array('karol', 'anna', 'Paweł', 'zenon', 'julia');

foreach ($tab2 as $klucz => $y){
    $z = strtolower($y);
    $tab2[$klucz] = $z;
    echo "$z ";
}

echo "<br>";

sort($tab2);

foreach ($tab2 as $klucz => $y){
    //echo "$tab2[$klucz] ";
    echo "$y ";
}

echo "<br>";

//*************************************************************

//tablice asocjacyjne

$tabAsoc = array(
    'imie' => 'Andrzej',
    'pseudonim' => 'Azz',
    'nazwisko' => 'Nowak'
);

foreach ($tabAsoc as $wartosc){
    echo "$wartosc ";
}

//sortowanie według wartości
//asort($tabAsoc);
arsort($tabAsoc);

echo "<br>";

foreach ($tabAsoc as $wartosc){
    echo "$wartosc ";
}

echo "<br>";

//sortowanie według klucza

//ksort($tabAsoc);
krsort($tabAsoc);

foreach ($tabAsoc as $wartosc){
    echo "$wartosc ";
}

?>
