<?php
    //operatory

    $potegowanie = 2**4;    //16
    $modulo = 11%3;
    //echo $modulo;
    //   +, -, *, /

    //operatory bitowe

    /*and &, or |, not ~, xor ^, przesunięcie bitowe we lewo <<, przesunięcie bitowe w prawo >>*/

    $dziesiec = 0b1010;
    $nowa = $dziesiec << 1;
    echo $dziesiec," po zmianie: ",$nowa;  // 10 po zmianie: 20

    $prawo = $dziesiec >> 1;
    echo "<br>$prawo<br>";  //5

    $x = 0b111;
    $x = $x >> 1;
    echo $x; //3

    //operatory logiczne

    //and, or, xor, !, &&, ||

//zadanie 1
//Sprawdz czy w sklepie kupisz sok

/*$sklep = 'otwarty';
$pieniadze = 1;
$sok = true;

if ($sklep == 'otwarty' && $pieniadze > 5 && $sok){
    echo "kupiłeś sok<br>";
}else{
    echo "Nie kupiłeś soku<br>";
}*/

//Zadanie 2
//Chcesz kupić w sklepie sok lub banany

$a = 1;
$b = '1';

if ($a === $b){
    echo "a i b jest równe<br>";
}else
    echo "a i b jest różne<br>";

//zadanie 3

$x=2;
echo $x;//2
echo ++$x;//3
echo $x;//3
$y=$x++;
echo $y;//3
$y=++$x;
echo $y;//5
echo ++$y;//6

//233356

//rozmiar typu integer
echo "<br>";
//echo PHP_INT_SIZE;  //4

//*******************************************

//kontrola typu zmiennych

$test = 'szkola';
$x = 10;
$a = 20.5;
$y = true;
$z = null;
$w;

/*echo gettype($test); //string
echo gettype($x); //integer
echo gettype($a); //double
echo gettype($y); //boolean
echo gettype($z); //NULL
echo gettype($w); //Undefined variable*/

echo "<br>";

/*echo is_string($test);
echo is_bool($y);
echo is_float($a);
echo is_int($x);
echo @is_null($w);*/

//******************************************

//zmienne superglobalne

/*$_GET, $_POST, $_COOKIE, $_FILES, $_SESSION*/

/*echo $_SERVER['SERVER_PORT'];
echo $_SERVER['SCRIPT_NAME'];
echo $_SERVER['SERVER_PROTOCOL'];
echo $_SERVER['DOCUMENT_ROOT']; */

//*******************************************

//Stałe
//nazwy z dużych liter!!

define('NAZWISKO','Nowak');
echo NAZWISKO;
//NAZWISKO = 'Kowal'; //syntax error, unexpected '='

define('imie', 'Janusz');
echo imie;

define('WIEK', 18, true);
//echo WIEK;
echo wiek;

define('PI',3.14159265359);
echo PI;

echo "<br>";

//*************************************************

//stałe predefiniowane

//echo PHP_VERSION; //7.1.9
//echo gettype(PHP_VERSION);
$ver = PHP_VERSION;
if ($ver > 5.6){
    echo 'Nowa wersja<br>';
}else{
    echo 'Stara wersja<br>';
}

echo PHP_OS; //WINNT
echo __LINE__;  //142
echo __FILE__;  //C:\xampp\htdocs\pai\php\td\operacjeNaZmiennych.php
echo __DIR__;   //C:\xampp\htdocs\pai\php\td

echo "<br>";

//***************************************************
//***************************************************


//operator konwersji (rzutowania) typów

$x = 5.9;
$y = 10.9;
$z = 2;
$j = -1;
$c = 100;
$text = 'wakacje';

$x = (int)$x;
echo $x; //5

$y = (float)$y;
echo gettype($z);
$z = (float)$z;
echo gettype($z);
echo $y; //10.9
echo $z; //2

$j = (bool)$j;
echo $j;

$c = (unset)$c;
echo $c;
echo gettype($c);   //NULL

$text = (int)$text;
echo $text;

//string, array, object









?>
