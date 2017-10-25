<?php

//operatory

    //+, -, /, %, *, **

    $potegowanie = 2**4;
    $modulo = 11%3;
    echo $modulo;

//operatory bitowe

    /*and &, or |, not ~, xor ^, przesunięcie bitowe w lewo <<, przesunięcie bitowe w prawo >> */

    $dziesiec = 0b1010;
    $nowa = $dziesiec << 2;
    echo "<br>$nowa<br>"; //40

    $x = 0b111;
    $x = $x >> 1;
    echo $x; //3

    echo "<br>";

//operatory logiczne

    //and, or, xor, !, &&, ||

//zadanie 1
//Sprawdz czy w sklepie kupisz sok
    $otwarty = 'otwarty';
    $pieniadze = 10;
    $sok = true;

    //if ($x==true and ($y==true && $z==true));
    if ($otwarty == "otwarty" && $pieniadze > 5 && $sok){
            echo "Kupiłeś sok<br>";
    }else{
            echo "Nie kupiłeś soku<br>";
    }

//zadanie 2
//Chcemy kupić sok lub banany

    $otwarty = 'otwarty';
    $pieniadze = 10;
    $sok = false;
    $banany = false;

    if ($otwarty == "otwarty" && $pieniadze > 5 && ($sok || $banany)){
            echo "Kupiłeś sok lub banany<br>";
    }else{
            echo "Nie kupiłeś soku oraz bananów<br>";
    }

/*zad. dom.
Sprawdzić i wyświetlić co kupił klient w sklepie*/

//****************************************************************

    $a = 1;
    $b = '1';

  /*  if ($a == $b){
        echo "\$a i \$b są równe";
    }else{
        echo "\$a i \$b są różne";
    }*/

      if ($a === $b){
        echo "\$a i \$b są równe";
    }else{
        echo "\$a i \$b są różne";
    }

//*****************************************************************

//zadanie 3

    $x=2;
    echo $x; //2
    echo ++$x; //3
    echo $x; //3
    $y=$x++;
    echo $y; //3
    $y=++$x;
    echo $y; //5
    echo ++$y; //6

    //233356

//kontrola typu zmiennych

    $test = 'szkola';
    $x = 10;
    $a = 20.5;
    $y = true;
    $z = null;
    $w;

    echo gettype($test); //string
    echo gettype($x); //integer
    echo gettype($a); //double
    echo gettype($y); //boolean
    echo gettype($z); //NULL
    echo gettype($w); //Undefined variable   NULL
    echo "<br>";

//*****************************

    echo is_string($test); //1
    echo is_string($x); //
    echo is_bool($y); //1
    echo is_float($a); //1
    echo is_int($x); //1
    echo is_null($z); //1
    echo is_null($w); //Undefined variable  1
    echo "<br>";

//*****************************************************

//zmienne superglobalne

//$_GET, $_POST, $_COOKIE, $_FILES, $_SESSION

    echo $_SERVER['SERVER_PORT']; //80
    echo $_SERVER['SCRIPT_NAME']; //   /pai/php/tc/operacjeNaZmiennych.php
    echo $_SERVER['SERVER_PROTOCOL']; //HTTP/1.1
    echo $_SERVER['DOCUMENT_ROOT']; //C:/xampp/htdocs
    echo "<br>";

//****************************************************

//stałe
//nazwy z dużych liter!!

    define('NAZWISKO','Nowak');
    echo NAZWISKO;
    //NAZWISKO = "Kowalski"; //syntax error

    define('imie','Janusz');
    echo imie;

    define('WIEK',18,true);
    //echo WIEK; //18
    echo wIeK; //18

    define('PI',3.14159265359);
    echo PI;

    echo "<br>";

//***************************************************

//stałe predefiniowane

    echo PHP_VERSION; //7.1.9
    echo __LINE__; //158
    echo __FILE__; //C:\xampp\htdocs\pai\php\tc\operacjeNaZmiennych.php
    echo __DIR__; //C:\xampp\htdocs\pai\php\tc
    echo "<br>";

//*******************************************************

//operator konwertowania (rzutowania) typów

    $x = 5.9;
    $y = 10.9;
    $z = 2;
    $j = -1;
    $c = 100;
    $text = 'wakacje';

    $x = (int)$x;
    echo $x; //5
    $y = (float)$y;

    echo gettype($z); //integer
    $z = (float)$z;
    echo gettype($z); //double
    echo $z; //1

    $j = (bool)$j;
    echo $j; //1

    echo $c; //100
    $c = (unset)$c;
    echo $c; //
    echo gettype($c); //NULL

    $text = (int)$text;
    echo $text; //0

//string, array, object

?>
