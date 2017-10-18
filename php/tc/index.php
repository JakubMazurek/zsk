<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <title>Zajęcia 1</title>
    </head>
    <body>
    <?php   //znacznik kanoniczny
        echo ("test");
    ?>


    <?
    //Znacznik typu SGML (włączyć w php.ini)
        echo ("skrócony");
    ?>


    <!-- znacznik typu ASP nie działa w php7
    <%

    %> -->

    <!--Znacznik skryptów w HTML nie działa w php7-->

    <!--<script language="php"></script>-->

    <?php
        //komentarz jednowierszowy

        #komentarz jednowierszowy uniksowy

        /*
        komentarz
        wielowierszwy
        */

        //wyświetlanie informacji

        echo ("<br>cudzysłów<br>");
        echo ('apostrof<br>');
        echo "tekst<br>";
        echo 'tekst<br>';
        echo 18;
        echo "<br>Masz ", 18, " lat";
        echo "<h2>Nagłówek 2 stopnia</h2>";
        echo "<h2 style=\"color:blue\">ZSK</h2>";
        echo '<h2 style="color:red">ZSK</h2>';

        print "test";
        //print "test", 18; //Parse error: syntax error


    ?>

    </body>
</html>
