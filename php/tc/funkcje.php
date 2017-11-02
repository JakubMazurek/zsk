<?php

    //declare(strict_types=1);

    function wartosc($a):string{
        if($a < 0){
            return "ujemna<br>";
        }elseif($a > 0){
            return "dodatnia<br>";
        }else{
            return "zero<br>";
        }
    }

    $a=1;
    $wynik = wartosc($a);
    echo $wynik, gettype($wynik), "<br>";


    function dajWartosc():int{
        return 5;
    }

    echo dajWartosc(),"<br>";

//zasięg zmiennych

    $x=10;

    function wyswietl(){
        //echo "Wartość zmienenj \$x wynosi: $x";//błąd
        echo "Wartość zmienenj \$x wynosi: ";
        echo $GLOBALS['x'],"<br>";
    }

    wyswietl();

//************************************

    $y=5;

    function wyswietly(){
        global $y;
        echo "Wartość zmiennej \$y wynosi: $y <br>";
    }

    wyswietly();

//************************************

    function suma(){
        $liczba = 10;
        echo "\$liczba wynosi: $liczba <br>";
        $liczba += 20;
    }

    suma();
    suma();

//***********************************

    function suma1(){
        static $liczba = 10;
        echo "\$liczba wynosi: $liczba <br>";
        $liczba += 20;
    }

    suma1();
    suma1();
    suma1();

/*zad.dom.

    Użtkownik doaje z klawiatury ilośc pieniędzy jakie dostał za pracę (w formularzu).
    Wstaw sumy do tablicy. Stwórz tablicę asocjacyjną, której kluczmai będą miesiące. Suma za pracę będzie automatycznie wstawioana do tablicy w zależności od miesiąca. Wstaw również do tablicy potwierdzenie dotyczące daty, godziny, minut i sekund w jakiej użytkownik dostał pieniądze.
    Użytkownik może wybrać okres w jakim chce sprawdzić ile zarobił jak również średni zarobek z trzech ostatnich miesięcy oraz całego roku.*/









?>
