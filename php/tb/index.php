<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Zajęcia2</title>
</head>
<body>
    <?php //znacznik kanonicnzy
        echo ("4TB");
    ?>

    <?  //znacznik typu SGML
        echo "Skrócony";
    ?>

    <!-- Znacznik typu ASP nie wykorzystywany w php7<%

    %>-->


    <!--<script language="php"></script>-->

    <?php
        //komentarz jednowierszowy

    /*
    komentarz w
    wielu liniach
    */

    #komentarz jednowierszowy

    //wyświetlanie informacji

    echo ("cudzysłów<br>");
    echo ('apostrof<br>');
    echo "tekst";
    echo '4TB';
    echo 18;
    echo "<br>Masz 18 lat";
    echo "<br>Masz ", 18, " lat";

    echo "<h2>Nagłówek</h2>";
    //echo "<h2 style="color:blue">"; //błąd
    //echo "<h2 style=\"color:blue\">Weekend</h2>";
    echo '<h2 style="color:blue">Weekend</h2>';

    //print "egzamin";
    //print "egzamin",18;   //Parse error: syntax error


    ?>

</body>


</html>



