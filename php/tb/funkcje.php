<?php
    //declare(strict_types=1);
    function wartosc($a):string{
        if($a < 0){
            return "ujemna<br>";
        }elseif($a > 0){
            //return "dodatnia<br>";
            return 5;
        }else{
            return "zero<br>";
        }
    }

    $a=1;
    $wynik = wartosc($a);
    echo gettype($wynik),"<br>"; //string

//***********************************

    function dajWartosc():int{
        return 10.25;
    }

    echo dajWartosc(),"<br>";

//****************************************************
//zasięg zmiennych

    $x=20;
    function wyswietl(){
        echo "Wartość zmiennej \$x wynosi: ";
        echo $GLOBALS['x'],"<br>";
    }

    wyswietl();

//****************************************

    $y=5;
    function wyswietly(){
        global $y;
        echo "Wartość zmiennej \$y wynosi: $y <br>";
    }

    wyswietly();

//****************************************

    function suma(){
        $liczba = 10;
        echo "\$liczba wynosi: $liczba<br>";
        $liczba += 5;
    }

    suma(); //$liczba wynosi: 10
    suma(); //$liczba wynosi: 10

//****************************************


    function suma1(){
        static $liczba = 10;
        echo "\$liczba wynosi: $liczba<br>";
        $liczba += 5;
    }

    suma1(); //$liczba wynosi: 10
    suma1(); //$liczba wynosi: 10
    suma1(); //$liczba wynosi: 10


//*********************************************
//argumenty

    function dodaj($x, $y = 1){
        return $x + $y;
    }

    $z = 20;

    $liczba = dodaj($z, 6); //26
    echo $liczba;

    $liczba1 = dodaj(2, 5); //7
    echo $liczba1;

    $liczba2 = dodaj(3); //3+1=4
    echo $liczba2;


//***********************************************
//argumenty i typy danych

    function mnozenie(float $x, int $y){
        return $x * $y;
    }

    echo mnozenie(3,4); //12
    echo mnozenie(3.5,4); //14
    echo mnozenie(4,3.5); //12




?>
