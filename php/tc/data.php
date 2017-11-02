<?php

//data

    echo date("Y-m-d"),"<br>"; //2017-11-02
    echo date("Y-M-D"),"<br>"; //2017-Nov-Thu
    echo date("Y-F-D"),"<br>"; //2017-November-Thu

//czas

    echo date("G:i:s"),"<br>"; //8:30:41
    echo date("H:i:s"),"<br>"; //08:34:32

    $dzienTygodnia=date("w"); //0-6 0-niedziela

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

    echo "$dzienTygodnia <br>";

    echo date("W"),"<br>"; //44
    echo date("z") + 1,"<br>";

//***********************************************************
//getdate()

    $data = getdate();

    //echo $data;

    foreach($data as $klucz => $x){
        echo "$klucz:$x <br>";
    }

    //2017-11-02

    $rok = $data['year']; //2017
    $miesiac = $data['mon']; //
    $dzien = $data['mday']; //2

    if ($dzien < 10){
        $dzien = "0".$dzien;
    }
    echo "$rok-$miesiac-$dzien<br>";

//zad.dom.

  /*Wyświetl na ekranie Datęi czas w następującym formacie:
    Data: 02 listopad 2017 r. | Godzina: 08:54:11 | czwartek
    Rok 2017 ma: 365 dni
    ver. Dodaj dwa kalendarze w formularzu na stronie
    */



//**************************************************************
//znacznik czasu


    $r1 = 2017;
    $m1 = 11;
    $d1 = 2;

    $r2 = 1998;
    $m2 = 10;
    $d2 = 9;

    //godzina, minuta, sekunda, miesiac, dzien, rok

    $czas1 = mktime(0, 0, 0, $m1, $d1, $r1);
    $czas2 = mktime(0, 0, 0, $m2, $d2, $r2);

    $czas = abs($czas2 - $czas1);
    $dni = floor($czas/86400); //60s*60s*24g
    $lata = floor($dni / 365);
    echo "Sekundy: $czas, dni: $dni, lata: $lata<br>";
    echo $czas1,"<br>"; //1509577200
    echo $czas2,"<br>"; //907884000
    //1 stycznia 1970


//********************************************************************
//strtotime()


    $data = mktime();
    echo $data,"<br>"; //1509610564

    echo $dataDzisiejsza = strtotime("now"),"<br>"; //1509610689
    echo $dataUrMarcina = strtotime("9 november 1998"),"<br>"; //910566000

    echo $zaTydzien = strtotime("next week"),"<br>"; //1509956540
    echo $jutro = strtotime("tomorrow"),"<br>"; //1509663600
    echo $wczoraj = strtotime("yesterday"),"<br>"; //1509490800
    echo $dziesiecDniWstecz = strtotime("-10"),"<br>"; //1509650688
    echo $przyszlosc = strtotime("+10 day 5 hours 20 minutes 2 seconds"),"<br>"; //1510494343










?>
