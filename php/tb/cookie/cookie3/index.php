
<?php
    if(!isset($_COOKIE['wiek']) && empty($_GET['wiek'])){
        include('header.html');
        include('form.html');
        include('footer.html');
    }else if(isset($_GET['wiek'])){
        setcookie('wiek', "$_GET[wiek]", time()+60*60*24*30);
        include('header.html');
        echo "<p>Dziękujemy za podanie danych</p>";
        echo "<p><a href=\"http://wp.pl\">powrót do strony głównej</a></p>";
        include('footer.html');
    }else{
        include('header.html');
        echo "Twój wiek: ".$_COOKIE['wiek'];
        include('footer.html');
    }
?>
