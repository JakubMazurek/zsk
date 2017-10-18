<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Zajęcia 1</title>
</head>
<body>

    <?php   //znacznik kanoniczny
        //echo ("4TE");
    ?>

    <?  //znacznik typu SGML (włączyć w php.ini)
        //echo ("egzamin");
    ?>

    <!--Znacznik typu ASP nie działa w php7-->
   <!-- <%

    %>-->

    <!--Znacznik skryptów HTML nie działa w php7-->

    <script language="php"></script>

    <?php
        // komentarz jednoliniowy


        /*
            komentarz
            blokowy
        */


        # komentarz jednoliniowy uniksowy

        //wyświetlanie informacji

        echo ("cudzysłów<br>");
        echo ('apostrof<br>');
        echo 'tekst<br>';
        echo "tekst<br>";
        echo 18;
        echo "<br>Masz ", 18, " lat";
        echo "<h2>Nagłówek drugiego stopnia</h2>";
        echo "<h1 style=\"color:blue\">tekst</h1>";
        echo '<h1 style="color:red">tekst</h1>';

        print "ZSK";
        //print "ZSK", 17; //Parse error: syntax error
    ?>



</body>
</html>
