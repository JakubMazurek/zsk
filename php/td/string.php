<?php
    $text = <<<TEKST
zsk - Zespół
szkół
komunikacji
TEKST;

    echo "Przed użyciem funkcji nl2br: <br>$text <br>";
    echo "<br>Po użyciu funkcji nl2br: <br>";
    echo nl2br($text);
    echo "<br><br>";

    //zamiana na małe litery
    echo strtolower($text);
    echo "<br>";

    //zamiana na duże litery
    echo strtoupper($text);
    echo "<br>";

    //zamiana pierwszej litery na dużą
    echo ucfirst($text);

    $tekst = "rAZ DWA trzY";
    $str = ucfirst($tekst);
    echo $str;
    echo "<br>";

    //zamiana wszystkich pierwszych liter na duże
    echo ucwords($text);
    echo "<br>";

    //zamiana znaków*
    $znaki = strtr("łukasz bąk", "ą", "a");
    echo $znaki;
    echo "<br>";

    //*******************************************************

$lorem = "
An irure officia expetendis. Dolore incididunt eu consequat, magna appellat
    consequat. Ubi e tamen aute aute do ne incididunt aut arbitror, ut aut
        imitarentur, magna non hic aliqua possumus, offendit sint tempor, te in nulla
        illum sint, appellat culpa sed arbitror graviterque, doctrina a magna. Ut
        proident iis consequat. Occaecat culpa incididunt, non pariatur ex cernantur.
        Nostrud fugiat quibusdam nescius qui iudicem do veniam. Illum ea a aute vidisse
            in non e eram quae labore, quae de aut esse expetendis, admodum eram labore eu
            dolore.";

    $kolumna = wordwrap($lorem,30,"<br>");
    echo $kolumna;
    echo "<br>";

//usuwanie białych znaków

    $kolor1 = "czerwony";
    $kolor = "  czerwony ";

    echo strlen($kolor1); //8
    echo strlen($kolor); //11
    echo strlen(ltrim($kolor)); //9
    echo strlen(rtrim($kolor)); //10
    echo strlen(trim($kolor)); //8
    echo "<br>";

//przeszukiwanie

    $adres = "Poznań, ul. Fredry 13, tel. (61) 445-44-58";
    //$szukaj = strstr($adres,"tel"); //tel. (61) 445-44-58
    $szukaj = strstr($adres,"tel",true); //Poznań, ul. Fredry 13,
    echo $szukaj;

    $szukaj1 = stristr($adres, "Tel");
    echo $szukaj1;
    //tel. (61) 445-44-58

    $mail = strstr("piotr@o2.pl", "@");
    echo $mail;
    //@o2.pl

    $mail1 = strstr("janusz@wp.pl", 64);
    echo $mail1;
    //@wp.pl

//**********************************************************

//porównywanie ciągów

    $ciag1 = "a";
    $ciag2 = "aa";

    echo strcmp($ciag1, $ciag2); //-1
    echo strcmp("zzz", "zzz"); //0
    echo strcmp("zza", "zzz"); //-1
    echo strcmp("zzc", "zza"); //1
    echo strcmp("zzza", "zzz"); //1
    echo "<br>";

//*********************************

    $poz = strpos("abcdefg", "cde");
    echo $poz; //2

    $poz = strpos("abcabc", "ab");
    echo $poz; //0
    echo "<br>";

    $a = strpos("asd","asd");
    echo gettype($a); //integer
    echo $a; //0

    $a = strpos("asd","cfg");
    echo gettype($a); //boolean
    echo $a; //

//zad.1

    $tekst1 = "abcdabcd";
    $tekst2 = "abc";

    if (strpos($tekst1, $tekst2) === false){
        echo "Ciąg $tekst2 nie znajduje się w ciągu $tekst1<br>";
    }else{
        echo "Ciąg $tekst2 znajduje się w ciągu $tekst1<br>";
    }

//***************************************
//Przetwarzanie ciągów znaków

    $zamien = str_replace("%imie%", "Janusz", "%imie% to najpopularniejsze imię w Internecie");
    echo $zamien,"<br>";

//***************************************

    $login = "Łukasz Bąk";
    $cenzura = array(
        "ą", "ę", "ś", "ż", "ź", "ć", "ó", "ń", "ł",
        "Ą", "Ę", "Ś", "Ż", "Ź", "Ć", "Ó", "Ń", "Ł"
    );

    $zamiana = array(
        "a", "e", "s", "z", "z", "c", "o", "n", "l",
        "A", "E", "S", "Z", "Z", "C", "O", "N", "L"
    );

    $poprawnyLogin = str_replace($cenzura, $zamiana, $login);
    echo $poprawnyLogin,"<br><br>";

//zad. 2

    /*Napisz program, który będzie cenzurował dane wprowadzane w formularzu, będzie zamieniał słowa: "czerwony", "zielony", "biały", "czarny" na znaki "#$*....."*/

    $formularz = <<< FORM
    <form method="post">
        <input type="text" name="dane"><br><br>
        <input type="submit" name="przycisk">
    </form>
FORM;

    echo $formularz;

    if (isset($_POST['przycisk'])){
        $dane = $_POST['dane'];
        $koloryNiedozwolone = array("czerwony", "zielony", "biały", "czarny");
        $zamianaKoloru = array("#$*.....", "#$*.....", "#$*.....", "#$*.....");
        $poprawne = str_replace($koloryNiedozwolone, $zamianaKoloru, $dane);
        echo "<h1>$poprawne</h1>";
    }


?>
