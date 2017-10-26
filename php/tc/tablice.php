<?php

    //tablice indeksowane

    $kolory = array("biały", "zielony", "czerwony");
    echo "Początkowa zawartość tablicy: <br>";

    for($i=0; $i<count($kolory); $i++){
        $element = $i + 1;
        echo "Element $element: $kolory[$i]<br>";
    }

    echo "<br>";

    $kolory[0] = "orange";
    $kolory[1] = "aqua";
    $kolory[2] = "magenta";

    function wypisz($tablica){
        for($i=0; $i<count($tablica); $i++){
            $elem = $i + 1;
            echo "Element[$elem]: $tablica[$i]<br>";
        }
    }

    wypisz($kolory);

    echo "<br>";

//****************************************************

//tablice asocjacyjne

    $dane = array(
        "imie" => "Janusz",
        "nazwisko" => "Nowak",
        "wiek" => 20,
        "narodowosc" => "polska"
    );

    echo "Zawartość tablicy o nazwie \$dane: <br>";

    //Imię: {$dane['imie']}<br>
    //Imię: $dane[imie]<br>

    echo <<<TABLICA
    Imię: $dane[imie]<br>
    Nazwiso: $dane[nazwisko]<br>
    Wiek: $dane[wiek]<br>
    Narodowość: $dane[narodowosc]<br>
TABLICA;

    echo "<br>";

//***************************************************

//foreach

    /*foreach($dane as $wartosc){
        echo "Wartość: $wartosc<br>";
    }*/

    foreach($dane as $klucz => $wartosc){
        echo "Element[$klucz] - $wartosc<br>";
    }

    echo "<br>";

//*************************************************

//tablice wuelowymiarowe

    $uczen = array(
        array("Julia", "Nowak", 20),
        array("Anna", "Kowal", 19),
        array("Paweł", "Kowalski", 25)
    );

    for($i=0; $i<count($uczen);$i++){
        for($j=0;$j<count($uczen[$i]);$j++){
            //echo "{$uczen[$i][$j]} ";
            echo $uczen[$i][$j]." ";
        }
        echo "<br>";
    }

    echo "<br>";

    foreach($uczen as $klucz => $tablica){
        foreach($tablica as $klucz2 => $wartosc){
            //echo $uczen[$klucz][$klucz2]. " ";
            echo $wartosc. " ";
        }
            echo "<br>";
    }

    echo "<br>";

//funkcja wyświetlająca tablicę wielowymiarową

    function wyswietl($tabAsoc){
         foreach($tabAsoc as $klucz => $tablica){
            foreach($tablica as $klucz2 => $wartosc){
                //echo $uczen[$klucz][$klucz2]. " ";
                echo $wartosc. " ";
            }
                echo "<br>";
        }
    }

    wyswietl($uczen);

/*zad. dom. Utwórz tablicę3-wymiarową i napisz dla niej funkcję wyświetlającą zawartość (wykorzystaj foreach)*/

    echo "<br>";

    $cyfry = array(
        array(1,2,3,4),
        array(5,6,7),
        array(8),
        array(9,10)
    );

    wyswietl($cyfry);

    echo "<br>";
//**************************************************

//sortowanie

    $tab = array(10,1,5,75,-4,100);

    function wyp($tab){
        foreach($tab as $x){
            echo "$x ";
    }
        echo "<br>";
    }

    wyp($tab);
    echo "<br>";

//rosnąco

    sort($tab);
    wyp($tab);

//malejąco

    rsort($tab);
    wyp($tab);

//***************************************************

    $tab2 = array("julia", "anna", "zenon", "alicja");
    wyp($tab2);
    sort($tab2);
    wyp($tab2);

//***************************************************

    $tab3 = array("Julia", "anna", "zenon", "alicja");
    wyp($tab3);
    sort($tab3);
    wyp($tab3); //Julia alicja anna zenon

    foreach($tab3 as $klucz => $x){
        $x = strtolower($x);
        $tab3[$klucz] = $x;
    }

    sort($tab3);
    wyp($tab3); //alicja anna julia zenon

//***************************************************
//sortowanie tablicy asocjacyjnej

    $tabAsoc = array(
        "imie" => "andrzej",
        "pseudonim" => "3endru",
        "wiek" => 30,
        "nazwisko" => "kowal",
    );

    wyp($tabAssoc);

//sortowanie według wartości

    asort($tabAsoc);
    wyp($tabAsoc);

    arsort($tabAsoc);
    wyp($tabAsoc);

    echo gettype($tabAsoc['pseudonim']); //string
    echo gettype($tabAsoc['wiek']); //integer
    echo "<br>";

//sortowanie według klucza

    ksort($tabAsoc);
    wyp($tabAsoc);

    krsort($tabAsoc);
    wyp($tabAsoc);

//wyświetlanie danych z tablicy

    var_dump($tab3);
    //array(4) { [0]=> string(6) "alicja" [1]=> string(4) "anna" [2]=> string(5) "julia" [3]=> string(5) "zenon" }

    echo "<br>";

    print_r($tab3);
    //Array ( [0] => alicja [1] => anna [2] => julia [3] => zenon )

    echo '<pre>';
        print_r($tab3);
    echo '</pre>';



?>
