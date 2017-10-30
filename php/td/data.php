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

//*****************************************************

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

    echo "$dzien-$miesiac-$rok, $dzienTygodnia";
    //30-październik-2017, poniedziałek
    //echo "$dzien-$miesiac-$rok, $dzienTygodniaAng";
    //30-październik-2017, Monday


?>
