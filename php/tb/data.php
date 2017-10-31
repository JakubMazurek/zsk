<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Data i czas</title>
<body>

<?php

    echo date("Y"),"<br>"; //2017
    echo date("y"),"<br>"; //17
    echo date("Y-m-d"),"<br>"; //2017-10-30
    echo date("Y-M-d"),"<br>"; //2017-Oct-30
    echo date("Y-M-D"),"<br>"; //2017-Oct-Mon
    echo date("d-m-Y"),"<br>"; //30-10-2017
    echo date("e"),"<br>"; //Europe/Berlin
    echo date("F"),"<br>"; //October

    echo date("g"),"<br>"; //1 format 12-godzinny bez zera na początku
    echo date("G"),"<br>"; //13 format 24-godzinny bez zera na początku
    echo date("h"),"<br>"; //01 format 12-godzinny z zerem na początku
    echo date("H"),"<br>"; //13 format 24-godzinny z zerem na początku

    echo date("i"),"<br>"; //33 liczba minut z zerem na początku
    echo date("I"),"<br>"; //0 czas letni(1)/zimowy(0)

    echo date("j"),"<br>"; //18 dzień miesiąca bez zera
    echo date("l"),"<br>"; //Monday dzień tygodnia
    echo date("L"),"<br>"; //znacznik roku przestępnego
    echo date("m"),"<br>"; //10 miesiąc z zerem na początku
    echo date("n"),"<br>"; //10 miesiąc bez zera na początku
    echo date("O"),"<br>"; //+0100 różnica do czasu Greenwich
    echo date("o"),"<br>"; //2017 rok
    echo date("P"),"<br>"; //+01:00 różnica do czasu Greenwich

    echo date("s"),"<br>"; //01 sekundy
    echo date("S"),"<br>"; //th

    echo date("t"),"<br>"; //31 liczba dni w miesiącu
    echo date("T"),"<br>"; //CET strefa czasowa
    echo date("U"),"<br>"; //1509367795 Znacznik czasu Uniksa

    echo date("w"),"<br>"; //1 dzień tygodnia
    echo date("W"),"<br>"; //44 numer tygodnia
    echo date("z"),"<br>"; //302 Dzień roku

//********************************************************************
//********************************************************************
//getdate()

    $data = getdate();

    $dzien = $data['mday'];
    $miesiac = $data['mon'];
    $rok = $data['year'];
    $dzienTygodnia = $data['wday'];
    $dzienRoku = $data['yday'];
    $dzienTyg = $data['weekday'];
    $mies = $data['month'];

    switch($miesiac){
        case 1: $miesiac = "styczeń";
                break;
        case 2: $miesiac = "luty";
                break;
        case 3: $miesiac = "marzec";
                break;
        case 4: $miesiac = "kwiecień";
                break;
        case 5: $miesiac = "maj";
                break;
        case 6: $miesiac = "czerwiec";
                break;
        case 7: $miesiac = "lipiec";
                break;
        case 8: $miesiac = "sierpień";
                break;
        case 9: $miesiac = "wrzesień";
                break;
        case 10: $miesiac = "październik";
                break;
        case 11: $miesiac = "listopad";
                break;
        case 12: $miesiac = "grudzień";
                break;
    }

    switch($dzienTygodnia){
        case 0: $dzienTygodnia = "niedziela";
                break;
        case 1: $dzienTygodnia = "poniedziałek";
                break;
        case 2: $dzienTygodnia = "wtorek";
                break;
        case 3: $dzienTygodnia = "środa";
                break;
        case 4: $dzienTygodnia = "czwartek";
                break;
        case 5: $dzienTygodnia = "piątek";
                break;
        case 6: $dzienTygodnia = "sobota";
                break;
    }

    echo "Dzisiaj jest: $dzien $miesiac $rok, $dzienTygodnia<br>
            Dzień roku: $dzienRoku, $dzienTyg, $mies<br><br>";

//*******************************************************************
//*******************************************************************
//strftime()

    setlocale(LC_ALL, 'polish');

    echo strftime("Bieżąca strefa czasowa: %z<br>"); //Bieżąca strefa czasowa: +0100
    echo strftime("Bieżąca strefa czasowa: %Z<br>"); //�rodkowoeuropejski czas stand.
    echo strftime("Data: %d-%m-%Y <br>"); //30-10-2017

    echo strftime("Czas: %H:%M:%S <br>"); //Czas: 14:46:53
    echo strftime("Mamy %U tydzień i %j dzień roku <br>"); //Mamy 44 tydzień i 303 dzień roku
    echo strftime("Dzieś jest %A, %d %B %Y r.<br>");

//**************************************************************
//**************************************************************       //znacznik czasu

    $r1 = 2017;
    $m1 = 10;
    $d1 = 30;

    $r2 = 2017;
    $m2 = 9;
    $d2 = 30;

    $czas1 = mktime(0,0,0,$m1,$d1,$r1);
    $czas2 = mktime(0,0,0,$m2,$d2,$r2);
    $czas3 = mktime(0,0,0,10,31,2017);

    $czas = abs(floor(($czas1 - $czas2)/86400));
    $czas = abs(floor(($czas3 - $czas2)/86400));
    echo $czas,"<br>";

    //$dataUr = mktime();
    $dataDzisiejsza = strtotime("now");
    $dataUrodzenia = strtotime("25 march 1998");
    echo $dataUrodzenia,"<br>";

    $panK = abs($dataUrodzenia - $dataDzisiejsza);
    echo $panK,"<br>";

    $dzisiecDniWstecz = strtotime("-10 day");
    echo $dzisiecDniWstecz,"<br>";

    $przyszlosc = strtotime("+10 day 6 hours 20 minutes 20 seconds");

    echo $przyszlosc,"<br>";
?>
</body>
</head>
</html>
