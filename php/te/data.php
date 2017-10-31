<?php

//data
      echo date("Y"),"<br>"; //2017
      echo date("y"),"<br>"; //17
      echo date("Y-m-d"),"<br>"; //2017-10-31
      echo date("Y-M-d"),"<br>"; //2017-Oct-31
      echo date("Y-M-D"),"<br>"; //2017-Oct-Tue
      echo date("d-m-Y"),"<br>"; //31-10-2017
      echo date("e"),"<br>"; //Europe/Berlin
      echo date("F"),"<br>"; //October

//czas

      echo date("g"),"<br>"; //10 format 12-godzinny bez zera na początku
      echo date("G"),"<br>"; //10 format 24-godzinny bez zera na początku
      echo date("h"),"<br>"; //10 format 12-godzinny z zerem na początku
      echo date("H"),"<br>"; //10 format 24-godzinny z zerem na początku

      echo date("i"),"<br>"; //45 liczba minut z zerem na początku
      echo date("I"),"<br>"; //0 czas letni(1)/zimowy(0)

      echo date("j"),"<br>"; //31 dzień miesiąca bez zera
      echo date("l"),"<br>"; //Tuesday dzień tygodnia
      echo date("L"),"<br>"; //0 znacznik roku przestępnego
      echo date("m"),"<br>"; //10 miesiąc z zerem na początku
      echo date("n"),"<br>"; //10 miesiąc bez zera na początku
      echo date("O"),"<br>"; //+0100 różnica do czasu Greenwich
      echo date("o"),"<br>"; //2017 rok
      echo date("P"),"<br>"; //+01:00 różnica do czasu Greenwich

      echo date("s"),"<br>"; //09 sekundy
      echo date("S"),"<br>"; //st

      echo date("t"),"<br>"; //31 liczba dni miesiąca
      echo date("T"),"<br>"; //CET strefa czasowa
      echo date("U"),"<br>"; //1509443688 znacznik czasu Uniksa

      echo date("w"),"<br>"; //2 dzień tygodnia
      echo date("W"),"<br>"; //44 numer tygodnia
      echo date("z"),"<br>"; //303 dzień roku 0-365


//*******************************************************
//*******************************************************
//getdate()


    $data = getdate();

    $dzien = $data['mday']; //31 dzień miesiąca
    $miesiac = $data['mon']; //10 miesiąc 1-12
    $rok = $data['year']; //2017 rok
    $dzienTygodnia = $data['wday']; //2 dzień tygodnia 0-6, 0-niedziela
    $dzienRoku = $data['yday'] + 1; //304 dzień roku 0-365
    $dzienTygodnia1 = $data['weekday']; //Tuesday dzień tygodnia
    $miesiac1 = $data['month']; //October miesiąc
    $znacznik = $data[0]; //1509444986 znacznik czasu

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

    echo "$dzien $miesiac $rok, $dzienTygodnia<br>";
    echo "Dzień roku: $dzienRoku, $dzienTygodnia1, $miesiac1, $znacznik<br>";


//*******************************************************
//*******************************************************
//znacznik czasu

    $r1 = 2017;
    $m1 = 10;
    $d1 = 31;

    $r2 = 1998;
    $m2 = 12;
    $d2 = 7;

    $czas1 = mktime(0, 0, 0, $m1, $d1, $r1);
        //godzina, minuta, sekunda, miesiąc, dzień, rok
    $czas2 = mktime(0, 0, 0, $m2, $d2, $r2);
    $czas = abs($czas2 - $czas1); //596419200 ilość sekund
    $dni = $czas/(60*60*24); //$czas/86400
    $lata = floor($dni/365); //18
    echo "Ilość sekund: $czas<br>Ilośćdni: $dni<br> Lata: $lata<br>";

//*******************************************************
//strtotime()

    $data = mktime(); //aktualny znacznik czasu

    echo $data,"<br>"; //1509446387
    echo $dataDzisiejsza = strtotime("now"),"<br>"; //1509446499
    echo $dataUrodzenia = strtotime("7 december 1998"),"<br>";
    //912985200
    $filip = abs($dataDzisiejsza - $dataUrodzenia);
    echo $filip,"<br>"; //596461498

    $dzisiecDniWstecz = strtotime("-10 day");
    echo $dzisiecDniWstecz,"<br>"; //1508579201

    $wczoraj = strtotime("yesterday");
    echo $wczoraj,"<br>"; //1509318000

    $nastepnyWeekend = strtotime("next week");
    echo $nastepnyWeekend,"<br>"; //1509965315

    $jutro = strtotime("tomorrow");
    echo $jutro,"<br>"; //1509490800

    $przyszlosc = strtotime("+10 day 7 hours 30 minutes 7 seconds");
    echo $przyszlosc,"<br>"; //1510338280

//zad. 1
//Ile sekund ma jeden dzień

    $dzisaj = strtotime("today");
    $dzienSekundy = $jutro - $dzisaj;
    echo $dzienSekundy; //86400

?>
