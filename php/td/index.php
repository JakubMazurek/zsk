<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>PHP zajęcia 1</title>
</head>
<body>
    <p>
    <?php   //znacznik kanoniczny
        echo ("4TD");
    ?>

    <?  //Znaczniki typu SGML (włączyć w php.ini)
        echo ("info");
    ?>


    <!--znacznik typu ASP nie działa w php7-->
        <!--<%

        %>-->

    <!--Znacznik skryptów HTML nie działa w php7-->

    <!--<script language="php">

    </script>-->


    <?php
      //komentarz jednowierszowy

      /*
      komentarz
      wieloliniowy
      */

      #komentarz jednoliniowy uniksowy



    //wyświatlanie informacji

    echo ("cudzysłów<br>");
    echo ('apostrof<br>');
    echo 'tekst';
    echo "tekst";
    echo 18;
    echo "<br>Masz ", 18, " lat";

    echo "<h2>Nagłówek</h2>";
    //echo "<h2 style=\"color:blue\">";
    echo '<h2 style="color:blue">';
    echo "tekst</h2>";
    echo "tekst<br>";

    //print "egzamin ", 17;  //Parse error: syntax error, unexpected ','

    print "egzamin ";
    print 17;



    ?>






    </p>
</body>
</html>
