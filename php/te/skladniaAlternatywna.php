<?php

//instrukcja if

    $x=2;
    $y=4;
    if($x < $y){
        echo "Zmienna x jest mniejsza od zmiennej y<br>";
    }


    if($x < $y):
        echo "Zmienna x jest mniejsza od zmiennej y<br>";
    endif;


//instrukcja if...else

    $a=3;
    $b=2;

    if($a < $b){
        echo "Zmienna a jest mniejsza od zmiennej b<br>";
    }else{
        echo "Zmienna a nie jest mniejsza od zmiennej b<br>";
    }


    if($a < $b):
        echo "Zmianna a jest mniejsza od zmiennej b<br>";
    else:
        echo "Zmienna a nie jest mniejsza od zmiennej b<br>";
    endif;

//instrukcja if...else if

    if($a < $b){
        echo "Zmienna a jest mniejsza od zmienenj b<br>";
    }elseif($a==$b){
        echo "Zmienna a jest równa zmienna b<br>";
    }else{
        echo "Zmienna a jest większa od zmiennej b<br>";
    }


    if($a < $b):
        echo "a jest mniejsze od b<br>";
    elseif($a == $b):
        echo "a jest równe b<br>";
    else:
        echo "a jest większe od b<br>";
    endif;


//Instrukcja switch

    $a=5;

    switch($a){
        case 0:
            echo "Zmienna a=0<br>";
            break;
        case 5:
            echo "Zmienna a=5<br>";
            break;
        case 10:
            echo "Zmienna a=10<br>";
            break;
    }

     switch($a):
        case 0:
            echo "Zmienna a=0<br>";
            break;
        case 5:
            echo "Zmienna a=5<br>";
            break;
        case 10:
            echo "Zmienna a=10<br>";
            break;
    endswitch;


//******************************************************
//pętle

//pętla for

    for($i=1; $i<=10; $i++){
        echo "$i ";
    }

    echo "<br>";

    for($i=1; $i<=10; $i++):
        echo "$i ";
    endfor;

    echo "<br>";

//pętla foreach

    $tab = array(1,2,3,4,5);

    foreach($tab as $klucz => $wartosc){
        echo "$tab[$klucz] = $wartosc";
    }

    echo "<br>";

    foreach($tab as $klucz => $wartosc):
        echo "$tab[$klucz] = $wartosc";
    endforeach;

    echo "<br>";

//pętla while

    $i=3;

    while($i <= 10){
        echo "$i ";
        $i++;
    }

    echo "<br>";

    while($i <= 20):
        echo "$i ";
        $i++;
    endwhile;

    echo "<br>";

//********************************
//break

    for($i=1; ; $i++):
        echo "Zmienna i wynosi: $i <br>";
        if($i == 5):
            break;
        endif;
    endfor;

//********************************
//continue

    for($i=1; $i<10; $i++):
        if($i%2 != 0)
            continue;
            echo $i." ";
    endfor;

?>
