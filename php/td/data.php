<?php

    echo date("Y-m-d"),"<br>"; //2017-10-30
    echo date("y-m-d"),"<br>"; //17-10-30
    echo date("y-M-d"),"<br>"; //17-Oct-30
    echo date("Y-M-D"),"<br>"; //2017-Oct-Mon
    echo date("d-m-Y"),"<br>"; //30-10-2017
    echo date("j"),"<br>"; //30 dzień miesiąca bez zera na początku
    $y = date("j"); //
    $x = date("S"); //
    echo "$y<sup>$x</sup>"; //30th
    echo date("jS,M Y"),"<br>"; //30th,Oct 2017

    echo date("G:i:s"),"<br>"; // 11:04:04   G - format 24 godzinny bez zera na początku
    echo date("H:i:sa"),"<br>"; // G - format 24 godzinny z zerem na początku

    echo date("Y-m-d G:i:s"),"<br>"; //2017-10-30 11:07:31
    echo date("t"),"<br>"; // 31 liczba dni w miesiącu
    echo date("L"),"<br>"; //rok przestępny (1 oznacza rok przestępny)

    echo date("g"),"<br>"; // format 12-godzinny bez zera na początku
    echo date("G"),"<br>"; // format 24-godzinny bez zera na początku
    echo date("h"),"<br>"; // format 12-godzinny z zerem na początku
    echo date("H"),"<br>"; // format 24-godzinny z zerem na początku

    echo date("i"),"<br>"; // liczba minut z zerem na początku
    echo date("I"),"<br>"; // czas letni(1)/zimowy(0)

    echo date("j"),"<br>"; // dzień miesiąca bez zera na początku
    echo date("l"),"<br>"; // dzień tygodnia
    echo date("L"),"<br>"; // znacznik roku przestęnego
    echo date("m"),"<br>"; // miesiąc z zerem na początku
    echo date("n"),"<br>"; // miesiąc bez zera na początku
    echo date("O"),"<br>"; // Różnica do czasu Greenwich
    echo date("o"),"<br>"; // Rok
    echo date("P"),"<br>"; // Różnica do czasu Greenwich

    echo date("s"),"<br>"; // sekundy
    echo date("S"),"<br>"; // st

    echo date("t"),"<br>"; //liczba dni miesiąca
    echo date("T"),"<br>"; //strefa czasowa
    echo date("U"),"<br>"; //znacznik czasu Uniksa

    echo date("w"),"<br>"; //dzień tygodnia
    echo date("W"),"<br>"; //tydzień roku
    echo date("z"),"<br>"; //dzień roku 0-365


//**********************************************************
    echo "<br><br><br>";
    $data = getdate();

    $dzien = $data['mday'];
    $miesiac = $data['mon'];
    $rok = $data['year'];

    if ($dzien < 10){
        $dzien = "0".$dzien;
    }

    if ($miesiac < 10){
        $miesiac = "0".$miesiac;
    }
    echo "Dziś jest: $dzien-$miesiac-$rok r.<br>";

//***********************************
//zamiana na miesiąc w języku polskim

    $data = getdate();
    $dzien = $data['mday'];
    $miesiac = $data['mon'];
    $rok = $data['year'];
    $dzienTygodnia = $data['wday'];
    $dzienTygodniaAng = $data['weekday'];
    $dzienRoku = $data['yday'] + 1;
    $miesiac1 = $data['month'];
    $znacznik = $data[0];

    if ($dzien < 10){
        $dzien = "0".$dzien;
    }

    switch($miesiac){
        case 1:
            $miesiac = "styczeń";
            break;
        case 2:
            $miesiac = "luty";
            break;
        case 3:
            $miesiac = "marzec";
            break;
        case 4:
            $miesiac = "kwiecień";
            break;
        case 5:
            $miesiac = "maj";
            break;
        case 6:
            $miesiac = "czerwiec";
            break;
        case 7:
            $miesiac = "lipiec";
            break;
        case 8:
            $miesiac = "sierpień";
            break;
        case 9:
            $miesiac = "wrzesień";
            break;
        case 10:
            $miesiac = "październik";
            break;
        case 11:
            $miesiac = "listopad";
            break;
        case 12:
            $miesiac = "grudzień";
            break;
    }

    switch($dzienTygodnia){
        case 0:
            $dzienTygodnia = "niedziela";
            break;
        case 1:
            $dzienTygodnia = "poniedziałek";
            break;
        case 2:
            $dzienTygodnia = "wtorek";
            break;
        case 3:
            $dzienTygodnia = "środa";
            break;
        case 4:
            $dzienTygodnia = "czwartek";
            break;
        case 5:
            $dzienTygodnia = "piątek";
            break;
        case 6:
            $dzienTygodnia = "sobota";
            break;
    }

    echo "$dzien-$miesiac-$rok, $dzienTygodnia<br>";
    echo "Dzień roku: $dzienRoku, $miesiac1, znacznik czasu: $znacznik"; // 0-365
    //30-październik-2017, poniedziałek
    //echo "$dzien-$miesiac-$rok, $dzienTygodniaAng";
    //30-październik-2017, Monday

//********************************************************
//znacznik czasu

    $r1 = 2017;
    $m1 = 10;
    $d1 = 31;

    $r2 = 1998;
    $m2 = 12;
    $d2 = 19;

    //godzina, minuta, sekunda, miesiąc, dzień, rok

    $czas1 = mktime(0, 0, 0, $m1, $d1, $r1);
    $czas2 = mktime(0, 0, 0, $m2, $d2, $r2);
    $czas = $czas1 - $czas2;
    $dni = $czas/(60*60*24); //$czas/86400
    $lata = floor($dni/365);

    echo "<br>Sekundy: $czas<br>Dni: $dni<br>Lat: $lata<br>";

//******************************************************
//strtotime

    $data = mktime(); //1509451980
    echo $data,"<br>"; //1509451980
    echo $dataDzisiejsza = strtotime("now"),"<br>";
    echo $dataUrodzenia = strtotime("19 december 1998"),"<br>";
    //914022000

    $natalia = $dataDzisiejsza - $dataUrodzenia;
    echo $natalia,"<br>"; //595430690

    echo $dzisiecDniWstecz = strtotime("-10 day"),"<br>";
    //1508585186

    $wczoraj = strtotime("yesterday");
    echo $wczoraj,"<br>"; //1509318000

    $zaTydzien = strtotime("next week");
    echo $zaTydzien,"<br>";
    //1509971309

    $jutro = strtotime("tomorrow");
    echo $jutro,"<br>";
    //1509490800

    $przyszlosc = strtotime("+20 day 10 hours 40 minutes 10 seconds");
    echo $przyszlosc,"<br>";
    //1511219442

//zad. 1
//Ile sekund ma jeden dzień

    $dzisiaj = strtotime("today");
    $dzienSekundy = $jutro - $dzisiaj;
    echo $dzienSekundy,"<br>";
    //86400




?>
