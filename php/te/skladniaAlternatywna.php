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




?>
