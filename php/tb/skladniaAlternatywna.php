<?php

//instrukcja if

    $x=2;
    $y=44;

    if($x < $y){
        echo "$x mniejsza od $y <br>";
    }

    if($x < $y):
        echo "$x mniejsza od $y <br>";
    endif;

//instrukcja if...else


    $a = 100;
    $b = 3;

    if($a < $b){
        echo "$a mniejsza od $b <br>";
    }else{
        echo "$a nie jest mniejsza od $b <br>";
    }

    if($a < $b):
        echo "$a mniejsza od $b <br>";
    else:
        echo "$a nie jest mniejsza od $b <br>";
    endif;

//instrukcja if...else if

    if($a < $b){
        echo "$a mniejsza od $b <br>";
    }else if($a == $b){
        echo "$a jest równa $b <br>";
    }else{
        echo "$a jest twieksza od $b <br>";
    }

    if($a < $b):
        echo "$a mniejsza od $b <br>";
    elseif($a == $b):
        echo "$a jest równa $b <br>";
    else:
        echo "$a jest większa od $b <br>";
    endif;

//instrukcja switch

    $a=10;

    switch($a){
        case 0:
            echo "\$a wynosi: 0<br>";
            break;
        case 5:
            echo "\$a wynosi: 5<br>";
            break;
        case 10:
            echo "\$a wynosi: 10<br>";
            break;
    }

     switch($a):
        case 0:
            echo "\$a wynosi: 0<br>";
            break;
        case 5:
            echo "\$a wynosi: 5<br>";
            break;
        case 10:
            echo "\$a wynosi: 10<br>";
            break;
    endswitch;


//*****************************************************
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
        echo "$tab[$klucz]<br>";
    }

    foreach($tab as $klucz => $wartosc):
        echo "$tab[$klucz]<br>";
    endforeach;

    echo "<br>";

//pętla while

    $i=1;
    while($i <= 3){
        echo "$i ";
        $i++;
    }

    echo "<br>";

     while($i <= 6):
        echo "$i ";
        $i++;
    endwhile;

    echo "<br>";

//************************************************
//break

    for($i=1; ; $i++):
        echo "Zmienna \$i wynosi: $i<br>";
        if($i == 5):
            break;
        endif;
    endfor;

//continue

    for($i=0; $i<10; $i++):
        if($i%2 != 0)
            continue;
            echo "$i ";
    endfor;






?>
