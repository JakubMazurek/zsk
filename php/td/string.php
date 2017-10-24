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

?>
