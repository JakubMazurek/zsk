<?php

    $text = <<<TEKST
    zsk - Zespół
    szkół
    komunikacji
TEKST;

    echo "Przed użyciem funkcji nl2br: <br>$text";
    echo "<br>Po użyciu funkcji nl2br: <br>";
    echo nl2br($text);
    echo "<br>";

//zamiana na małe litery
    echo strtolower($text);
    echo "<br>";

//zamiana na duze litery
    echo strtoupper($text);
    echo "<br>";

/*zad.dom. napisz funkcję, która będzie zamieniała litery na duże, również polskie*/

//zamiana pierwszej litery na dużą
    $tekst = "rAZ DWA trzy";
    $pierwsza = ucfirst($tekst);
    echo $pierwsza;
    echo "<br>";

//zamiana pierwszych liter na duże
    echo ucwords($tekst);
    echo "<br>";

$lorem = "Tempor quem arbitror excepteur, dolor deserunt a quorum sint, noster appellat
    probant, an multos multos hic pariatur. Multos a hic nisi nostrud, arbitror
    magna ubi cupidatat comprehenderit. Multos praesentibus deserunt fore cernantur.
    Litteris labore deserunt deserunt, et noster proident consectetur, tamen
    distinguantur eiusmod quem fabulas, incididunt nulla officia possumus. O culpa
    officia praetermissum sed sunt probant e coniunctione, ubi quid velit aliqua
    officia iis ne fore dolore culpa nescius, noster ingeniis se proident te probant
    si incurreret, mandaremus aut tamen o ab elit culpa culpa litteris. Mentitum iis
    anim consequat, doctrina summis quamquam, qui quorum sint minim occaecat,
voluptate summis legam ullamco legam. Ea e eram fugiat sint in fabulas ex malis
    ab iis multos voluptate quamquam, si magna quamquam tempor. De dolor aliquip qui
    eiusmod ea quae possumus.";

    $kolumna = wordwrap($lorem,30,"<br>");
    echo $kolumna;
    echo "<br>";

//usuwanie białych znaków

    $auto = "  audi ";
    $auto1 = "audi";

    echo count($auto); //1
    echo strlen($auto); //7
    echo strlen($auto1); //4

    echo strlen(ltrim($auto)); //5
    echo strlen(rtrim($auto)); //6
    echo strlen(trim($auto)); //4
    echo "<br>";

//przeszukiwanie

    $adres = "Poznań, ul. Fredry 13, tel. (61) 445-44-58";
    //$szukaj = strstr($adres,"tel"); //tel. (61) 445-44-58
    //$szukaj = strstr($adres,"tel",true); //Poznań, ul. Fredry 13,
    //$szukaj = strstr($adres,"Tel"); //brak wyświetlenia ciągu
    $szukaj = stristr($adres,"Tel"); //tel. (61) 445-44-58

    $ciag1 = "a";
    $ciag2 = "aa";

    echo strcmp($ciag1, $ciag2); //-1
    echo strcmp("zzz","zzz"); //0
    echo strcmp("zzq","zzz"); //-1
    echo strcmp("zzzq","zzz"); //1

//**************************************************************

    //do poprawy zadanie

    $x1 = "abcabc";
    $x2 = "abc";

    if(/*strpos($x1,$x2) == true && */strpos($x1,$x2) >= 0){
        echo "Ciąg $x2 został znaleziony w ciągu $x1";
    }else{
        echo "Ciąg $x2 nie został znaleziony w ciągu $x1";
    }

    echo strpos($x1,$x2);









?>
