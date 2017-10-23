<?php
//operatory

    $potegowanie = 2**4; //16
    $modulo = 11%3; //2
    //echo $modulo;

//   +, -, *, /

//operatory bitowe

    /*and &, or |, not ~, xor ^, przesunięcie bitowe w lewo <<, przesunięcie bitowe w prawo >>*/

    $dwadziescia = 0b10101;
    echo $dwadziescia,'<br>'; //21
    $nowaLewo = $dwadziescia << 1;
    echo $nowaLewo; //42

    $nowaPrawo = $dwadziescia >> 1;
    echo $nowaPrawo; //10

//operatory logiczne

    //and, or, xor, !, &&, ||

//zadanie1
//sprwdz czy w sklepie kupisz samochod

$sklep = 'otwarty';
$pieniadze = 1000000;
$ferrari = true;

if ($sklep == 'otwarty' && $pieniadze > 1500000 && $ferrari){
    echo '<br>Kupiłaś Ferrari<br>';
}else{
    echo '<br>Nie kupiłaś Ferrari<br>';
}

//Zadanie 2
//Chcesz kupić w sklepie Ferrari lub BMW

$sklep = 'otwarty';
$pieniadze = 1000000;
$ferrari = true;
$bmw = false;

if ($sklep == 'otwarty' && $pieniadze > 150000 && ($ferrari || $bmw)){
        if ($ferrari && $bmw){
            echo 'Kupiłeś Ferrari i bmw';
        }else if ($bmw){
            echo 'Kupiłeś bmw';
        }else{
            echo 'Kupiłeś Ferrari';
        }
}else{
    echo '<br>Nie kupiłaś samochodu<br>';
}

/*$a = 1.0;
$b = 1;*/

$a = 1;
$b = '1';

if ($a === $b){
    echo '<br>a i b jest równe<br>';
}else{
    echo '<br>a i b jest różne<br>';
}

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
echo '<br>';

//rozmiar typu integer
  echo PHP_INT_SIZE; //4

//***************************************

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
//echo gettype($w); //Undefined variable
echo @gettype($w); //NULL

echo '<br>';

echo is_string($test); //1
echo is_string($x);
echo is_bool($y);
echo is_float($a);
echo is_int($x);
echo @is_null($w);

echo '<br>';

//***************************************

//zmienne superglobalne

//$_GET, $_POST, $_COOKIE, $_FILES, $_SESSION

echo $_SERVER['SERVER_PORT']; //80
echo $_SERVER['SCRIPT_NAME']; //  /pai/php/tb/operacjeNaZmiennych.php
echo $_SERVER['SERVER_PROTOCOL']; //HTTP/1.1
echo $_SERVER['DOCUMENT_ROOT']; //C:/xampp/htdocs

$lokalizacjaPliku = $_SERVER['DOCUMENT_ROOT'] . $_SERVER['SCRIPT_NAME'];

echo '<br>',$lokalizacjaPliku,'<br>';

//*****************************************

//stałe
//nazwy z dużych liter!!!

define('NAZWISKO','Nowak');
echo NAZWISKO;
//NAZWISKO = 'Kowalski'; //syntax error, unexpected '='

define('imie','Janusz');
echo imie;

define('WIEK', 18, true);
//echo WIEK;
echo wiek;

define('PI',3.14159265359);
echo PI;

echo '<br>';

//******************************************

//stałe predefiniowane

echo PHP_VERSION; //7.1.9
echo gettype(PHP_VERSION); //string

$ver = PHP_VERSION;

if ($ver > 5.6){
    echo "Nowa wersja PHP";
}else{
    echo "Stara wersja PHP";
}

echo PHP_OS; //WINNT
echo __LINE__; //168
echo __FILE__; //C:\xampp\htdocs\pai\php\tb\operacjeNaZmiennych.php
echo __DIR__; //C:\xampp\htdocs\pai\php\tb

echo '<br>';

//******************************************
//******************************************

//operator konwersji (rzutowania) typów

$x = 5.9;
$y = 10.9;
$z = 2;
$j = -1;
$c = 100;
$text = 'wakacje';

$x = (int)$x; //5
echo $x;

$y = (float)$y;
echo gettype($y); //double

echo gettype($z); //integer
$z = (float)$z;
echo gettype($z); //double
echo $z; //2

$j = (bool)$j;
echo gettype($j); //boolean
echo $j; //1

$c = (unset)$c;
echo $c;
echo gettype($c); //NULL
$c = 'jacek';
echo $c; //jacek

$text = (int)$text;
echo $text; //0

//string, array, object

?>
