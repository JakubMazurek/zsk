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
        return 10.55;
    }

    echo dajWartosc(),"<br>";

//**************************************************************
//zasięg zmiennych

    $x = 10;
    function wyswietl(){
        echo "Wartość zmiennej \$x wynosi: ";
        echo $GLOBALS['x'], "<br>";
    }

    wyswietl();
    echo "Wartość zmiennej \$x wynosi: $x <br>";

//***************************

    $y = 10;
    function wyswietly(){
        global $y;
        echo "Wartość zmiennej \$y wynosi: $y <br>";
    }

    wyswietly();
    echo "Wartość zmiennej \$y wynosi: $y <br>";

//***************************

    function suma(){
        $liczba = 10;
        echo "\$liczba wynosi: $liczba <br>";
        $liczba += 20;
    }

    echo suma(); //10
    echo suma(); //10

//*****************

     function suma1(){
        static $liczba1 = 10;
        echo "\$liczba1 wynosi: $liczba1 <br>";
        $liczba1 += 20;
    }

    echo suma1(); //10
    echo suma1(); //30
    echo suma1(); //50

?>
