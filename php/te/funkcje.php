<?php
    //declare(strict_types=1);

    function wartosc($a):string{
        if($a < 0){
            //return 2;
            return "ujemna";
        }elseif($a > 0){
            return "dodatnia<br>";
        }else{
            return "zero<br>";
        }
    }

    $x = wartosc(-5);
    echo gettype($x),"<br>"; //string

//***********************************************************

    function dajWartosc():int{
        return 10.55;
    }

    echo dajWartosc(),"<br>";

//***********************************************************
//zasięg zmiennych

    $x = 10;
    function wyswietl(){
        echo "Wartość zmiennej \$x wynosi: <br>";
        echo $GLOBALS['x'],"<br>";
    }

    wyswietl();
    echo "Wartość zmiennej \$x wynosi: $x <br>";

//*****************************************

    $y=10;
    function wyswietly(){
        global $y;
        echo "Wartość zmienej \$y wynosi: $y <br>";
    }

    wyswietly();
    echo "Wartość zmienej \$y wynosi: $y <br>";

//******************************************

    function suma(){
        $liczba = 10;
        echo "\$liczba wynosi: $liczba <br>";
        $liczba += 10;
    }

    echo suma(); //$liczba wynosi: 10
    echo suma(); //$liczba wynosi: 10

//******************************************

    function suma1(){
        static $liczba = 10;
        echo "\$liczba wynosi: $liczba <br>";
        $liczba += 10;
    }

    suma1(); //$liczba wynosi: 10
    suma1(); //$liczba wynosi: 20
    suma1(); //$liczba wynosi: 30


//****************************************
//argumenty

    function dodaj($x, $y = 1){
        return $x + $y;
    }

    $z = 20;

    $liczba = dodaj($z, 6);
    echo $liczba,"<br>";

    $liczba1 = dodaj(2, 5);
    echo $liczba1;

    $liczba2 = dodaj(3); //3+1
    echo $liczba2;

//****************************************
//argumenty i typy danych

    function mnozenie(float $x, int $y){
        return $x * $y;
    }

    echo mnozenie(3,4); //12
    echo mnozenie(3.5,2); //7
    echo mnozenie(2,3.5); //6



?>
