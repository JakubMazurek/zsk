<?php
//tablice indeksowane numerycznie

    $kolory = array("biały", "zielony", "czerwony");
    echo 'Początkowa zawartość tablicy: <br>';

    for ($i=0; $i<count($kolory); $i++){
        $elem = $i + 1;
        echo "Element $elem: $kolory[$i]<br>";
    }

    $kolory[0] = "orange";
    $kolory[1] = "aqua";
    $kolory[2] = "magenta";


    function wypisz($tablica){
    for ($i=0; $i<count($tablica); $i++){
        $elem = $i + 1;
        echo "Element[$elem]: $tablica[$i]<br>";
    }}

    wypisz($kolory);

//**********************************************************

//tablice asocjacyjne

    $dane = array(
        "imie" => "Janusz",
        "nazwisko" => "Nowak",
        "wiek" => 20,
        "narodowosc" => "polska"
    );

    echo "<br>Zawartość tablicy o nazwie \$dane: <br>";

    echo <<<TABLICA
    Imię: $dane[imie]<br>
    Nazwisko: {$dane['nazwisko']}<br>
    Wiek: $dane[wiek]<br>
    Narodowość: $dane[narodowosc]<br>
TABLICA;

    echo "<br>";

//******************************************************
//foreach

    /*foreach($dane as $klucz => $wartosc){
        echo "Element [$klucz] = $wartosc<br>";
    }*/

    foreach($dane as $wartosc){
        echo "Wartość: $wartosc<br>";
    }

    echo "<br>";

//**********************************************************

//tablice wielowymiarowe

    $uczen = array(
        array("Julia", "Nowak", 20),
        array("Anna", "Kowal", 19),
        array("Paweł", "Kowalski", 25)
    );

    for ($i=0; $i<count($uczen); $i++){
        for ($j=0; $j<count($uczen[$i]);$j++){
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

/*zad.dom Utwórz tablicę 3-wymiarową i napisz dla niej funkcję wyświetlającą zawartość (wykorzystaj w funkcji foreach)*/

echo "<br>";

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

//sortowanie

    $tab = array(10,1,5,75,-4,100);

    function wyswietl($tab){
    foreach($tab as $x){
        echo "$x ";
    }
        echo "<br>";
    }

    wyswietl($tab);

//rosnąco

    sort($tab);
    wyswietl($tab);

//malejąco

    rsort($tab);
    wyswietl($tab);

    echo "<br>";

//*******************************************************

    $tab2 = array("julia", "anna", "zenon", "krystian");

    wyswietl($tab2);
    sort($tab2);

    wyswietl($tab2);

//********************************************************

    $tab3 = array("Julia", "anna", "zenon", "krystian");

    wyswietl($tab3);
    sort($tab3);

    wyswietl($tab3);
    //Julia anna krystian zenon  !!!!!!!!!!!!!!!!!

//*********************************************************

    $tab4 = array("Julia", "anna", "zenon", "krystian");

    wyswietl($tab4);

    foreach($tab4 as $klucz => $x){
        $x = strtolower($x);
        $tab4[$klucz] = $x;
    }

    wyswietl($tab4);
    sort($tab4);

    wyswietl($tab4);

    echo "<br>";

//sortowanie tablicy ascocjacyjnej

    $tabAsoc = array(
        "imie" => "andrzej",
        "pseudonim" => "3endru",
        "wiek" => 30,
        "nazwisko" => "kowal"
    );

    wyswietl($tabAsoc);

//sortowanie według wartości

    asort($tabAsoc);
    wyswietl($tabAsoc);
    //3endru andrzej kowal 30

    echo gettype($tabAsoc['pseudonim']); //string
    echo gettype($tabAsoc['wiek']); //integer

    echo "<br>";
    arsort($tabAsoc);
    wyswietl($tabAsoc);

//sortowanie według klucza

    ksort($tabAsoc);
    wyswietl($tabAsoc);
    //andrzej kowal 3endru 30

    krsort($tabAsoc);
    wyswietl($tabAsoc);
    //30 3endru kowal andrzej

//wyświetlanie danych z tablicy

    var_dump($tab4);

    echo "<br>";
    print_r($tab4);

    echo '<pre>';
        print_r($tab4);
    echo '</pre>';

?>
