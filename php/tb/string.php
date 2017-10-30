<?php

    $text = <<<TEKST
    zsk - Zespół
    szkół
    komunikacji
TEKST;

    echo "Przed użyciem funkcji nl2br: <br> $text";
    echo "<br>Po użyciu funkcji nl2br: <br>";
    echo nl2br($text);
    echo "<br>";

//zamiana na małe litery
    echo strtolower($text);
    echo "<br>";

//zamiana na duże litery
    echo strtoupper($text);
    echo "<br>";

//zamiana pierwszej litery na dużą
    $tekst = "rAZ DWA trzy";
    echo ucfirst($tekst);
    echo "<br>";

//zamiana wszystkich pierwszych liter na duże
    echo ucwords($tekst);
    echo "<br>";

//*******************************************************

    $lorem = "Qui malis quis ne occaecat do tamen admodum ex iudicem id tempor non laborum ut
    cillum illustriora litteris sint nostrud, fore aliquip quamquam sed deserunt
    nisi o nostrud philosophari, eram mandaremus ut reprehenderit, commodo legam de
    senserit adipisicing. Veniam probant litteris ab quo admodum ut deserunt te te
    de malis incididunt, non aute hic dolore, magna mandaremus e dolore multos quo
    culpa cernantur sed quibusdam, ullamco enim arbitror, commodo ubi fore admodum.
    Hic magna offendit commodo eu irure vidisse nam eiusmod, e illum iudicem
    tractavissent ita admodum voluptatibus a possumus. Sunt concursionibus deserunt
    eram mentitum, cernantur ab voluptate, e illum te nisi hic deserunt si anim
    laboris. Aut ne praetermissum an o cillum iudicem incididunt non ad si
    domesticarum e proident multos doctrina aut magna expetendis do pariatur ex
    summis cupidatat in summis tamen, appellat sed minim, do quae incurreret
    probant. Ab quis noster ea deserunt, ullamco a summis ex ita ad magna multos
    quis iis si elit arbitror praesentibus.";

    $kolumna = wordwrap($lorem, 50, "<br>");
    //echo $kolumna;
    echo "<br>";

//usuwanie białych znaków

    $imie1 = "Marian";
    $imie = "  Marian ";

    echo strlen($imie1); //6
    echo strlen($imie); //9

    echo strlen(ltrim($imie)); //7
    echo strlen(rtrim($imie)); //8
    echo strlen(trim($imie)); //6
    echo "<br>";

//przeszukiwanie

    $adres = "Poznań, ul. Fredry 13, tel. (61) 445-44-58";
    $szukaj = strstr($adres, "tel");
    echo $szukaj,"<br>";
    //tel. (61) 445-44-58

    $szukaj1 = strstr($adres, "tel", true);
    echo $szukaj1,"<br>";
    //Poznań, ul. Fredry 13,

    $szukaj2 = stristr($adres, "Tel");
    echo $szukaj2,"<br>";
    //tel. (61) 445-44-58

    $mail = strstr("grzes@o2.pl","@");
    echo $mail;
    //@o2.pl

    $mail1 = strstr("grzes@gmail.pl",64);
    echo $mail1;
    //@gmail.pl

//******************************************************

//porównanie ciągów

    $ciag1 = "a";
    $ciag2 = "aa";

    echo strcmp($ciag1, $ciag2); //-1
    echo strcmp("zzz", "zzz"); //0
    echo strcmp("zza", "zzz"); //-1
    echo strcmp("zzc", "zzb"); //1
    echo strcmp("zzca", "zzc"); //1
    echo "<br>";

//**********************************

    $poz = strpos("abcdefg","cde");
    echo $poz; //2

    $poz = strpos("abcabc","ab");
    echo $poz; //0
    echo "<br>";

//zad.1

    $tekst1 = "abcdabcd";
    $tekst2 = "abc";

    if (strpos($tekst1,$tekst2) === false){
        echo "Ciąg $tekst2 nie znajduję się w ciągu $tekst1<br>";
    }else{
        echo "Ciąg $tekst2 znajduje się w ciągu $tekst1<br>";
    }

//*************************************

//przetwarzanie ciągów znaków

    $zamien = str_replace("%imie%", "Janusz", "%imie% to nie imię, %imie% to styl życia");
    echo $zamien,"<br>";

//*************************************

    $login = "Łukasz Bąk";
    $cenzura = array(
        "ą","ę","ś","ż","ź","ć","ó","ń","ł",
        "Ą","Ę","Ś","Ż","Ź","Ć","Ó","Ń","Ł",
    );

    $zamiana = array(
        "a","e","s","z","z","c","o","n","l",
        "A","E","S","Z","Z","C","O","N","L",
    );

    $poprawnyLogin = str_replace($cenzura, $zamiana, $login);
    echo $poprawnyLogin,"<br>";

/*zad.dom. 1
    Napisz program, który pozwoli cenzurować zdanie podane przez użytkownika w formularzu.*/

/*zad.dom. 2
    Napisz funkcję , która będzie obliczała wystąpienia określonego ciągu znaków w danym tekście. Tekst i szukany ciąg znaków powinny być przekazywane w postaci argumentów*/

    $formularz = <<< FORM
    <form method = "post">
        <input type="text" name="dane"><br>
        <input type="submit">
    </form>
FORM;

    echo $formularz;

    if (isset($_POST['dane'])){
        $dane = $_POST['dane'];
        $niedozwolone = array("polonez","multipla","bmw");
        $zamiana = "#$******";
        $poprawne = str_ireplace($niedozwolone, $zamiana, $dane);
        echo "<h1>$poprawne</h1>";
    }
?>
