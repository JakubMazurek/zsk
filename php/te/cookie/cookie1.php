<?php
    if(!isset($_COOKIE['szkola'])):
        setcookie('szkola', 'zsk');
        $komunikat = "Cookie o nazwie szkola nie było usatwione";
    else:
        $komunikat = "Cookie o nazwie szkola jest ustawione<br>";
        $komunikat .= "Jego wartość to: ".$_COOKIE['szkola'];
    endif;
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Cookie</title>
</head>
<body>
    <?php
        echo $komunikat;
    ?>
</body>
</html>
