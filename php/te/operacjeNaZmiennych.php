<?php
    //operatory

    $potegowanie = 2**10;   //1024
    $modulo = 11%3; //2
    //echo $modulo;

    //+, -, * , /

    //operatory bitowe: and &, or |, not ~, xor ^, przesunięcie bitowe w lewo >>, przesunięcie bitowe w prawo <<

    $dziesiec = 0b1010;
    //echo $dziesiec,"<br>";
    //$dziesiec = $dziesiec >> 1; //5
    //$dziesiec = $dziesiec << 1; //20
    //echo $dziesiec;

//operatory logiczne

//and, or, xor, !, &&, ||

//zadanie 1
//sprawdź czy w sklepie kupisz rower

$sklep = 'otwarty';
$pieniadze = 1800;
$romet = false;

if ($sklep == 'otwarty' && $pieniadze > 900 && $romet){
    //echo "Kupiłeś rower<br>";
}else{
    //echo "Idź pieszo<br>";
}

//zadanie 2
//Chcesz kupić rower lub hulajnoga

$sklep = 'otwarty';
$pieniadze = 1800;
$romet = false;
$hulajnoga = false;

/*if ($sklep = 'otwarty' && $pieniadze > 1000 && ($romet || $hulajnoga)){
    if ($romet && $hulajnoga){
        echo "Kupiłeś rower i hulajnogę";
    }else if ($romet){
        echo "Kupiłeś rower";
    }else{
        echo "Kupiłeś hulajnogę";
    }
}else{
    echo "Idziesz pieszo";
}*/

$a = 1.0;
$b = 1;

if ($a === $b){
    echo "Równe";
}else{
    echo "Różne";
}
echo gettype($a); //double
echo gettype($b); //integer

//*************************************

/*$x = 2;
echo $x++;
echo ++$x;
echo $x;
$y = $x++;
echo $y;
$y = ++$x;
echo $y;
echo ++$y;*/

//**********************************

$tekst1 = "4dssd";
$tekst2 = "Drugi tekst";
$tekst3 = "7";
$liczba1 = 14;
$j = -1;
$c = 100;

//echo $tekst1.$tekst2.$liczba1;

//operatory rzutowania

//bool, int, float, string, array, object, unset

$dwa = (int)$tekst1;
//echo $dwa;  //0
$trzy = (int)$tekst3;
//echo $trzy;

$j = (bool)$j;
//echo $j;    //1

$c = (unset)$c;
//echo $c;
//echo gettype($c);   //NULL

$tekst1 = (int)$tekst1;
//echo $tekst1;   //4

$tekst1 = (int)$tekst2;
//echo $tekst1;   //0

$liczba1 = (float)$liczba1;
//echo gettype($liczba1); //double

//string, array, object


//rozmiar typu integer

//echo PHP_INT_SIZE; //4

//*********************************************

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
//echo gettype($w); //Undefined variable   NULL
echo @gettype($w); //NULL

echo "<br>";

echo is_string($test); //1
echo is_string($x); //
echo is_bool($y); //1
echo is_float($a); //1
echo is_int($x); //1
echo @is_null($w);

echo "<br>";

//******************************************

//zmienne superglobalne

//$_GET, $_POST, $_COOKIE, $_FILES, $_SESSION

echo $_SERVER['SERVER_PORT']; //80
echo $_SERVER['SCRIPT_NAME']; ///pai/php/te/operacjeNaZmiennych.php
echo $_SERVER['SERVER_PROTOCOL']; //HTTP/1.1
echo $_SERVER['DOCUMENT_ROOT']; //C:/xampp/htdocs

$lokalPliku = $_SERVER['DOCUMENT_ROOT'];
$lokalPliku .= $_SERVER['SCRIPT_NAME'];
echo "<br>$lokalPliku<br>";

//***********************************************

//stałe
//nazwy z dużych liter!!!

define('NAZWISKO','Kowal');
echo NAZWISKO;
//NAZWISKO = "nowa"; //syntax error, unexpected '=' in

define('imie','Janusz');
echo imie;

define('WIEK', 18, true);
echo wiek; //nie sprawdza wielkości liter w nazwie

define ('PI', 3.14159265359);
echo PI,"<br>";

//****************************************************

//stałe predefiniowane

echo PHP_VERSION; //7.1.9
echo gettype(PHP_VERSION); //string

$ver = PHP_VERSION;
if ($ver >= 7.1){
    echo "Nowa wersja PHP";
}else{
    echo "Stara wersja PHP";
}

echo PHP_OS; //WINNT
echo __LINE__; //199
echo __FILE__; //C:\xampp\htdocs\pai\php\te\operacjeNaZmiennych.php
echo __DIR__; //C:\xampp\htdocs\pai\php\te

?>
