<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Przychodnia usuwanie danych</title>
    <link rel="stylesheet" href="przychodnia.css">
</head>
<body>
    <h2>Wyświetlanie i dodawanie danych</h2>

    <?php




    ?>

    <form action="insert.php" method="post">
        <input type="text" name="imie" placeholder="imię"><br><br>
        <input type="text" name="nazwisko" placeholder="nazwisko"><br><br>
        <input type="text" name="choroby_przewlekle" placeholder="choroby przewlekłe"><br><br>
        <input type="text" name="uczulenia" placeholder="uczulenia"><br><br>
        <input type="text" name="choroba" placeholder="choroba"><br><br>
        <input type="text" name="leki_przepisane" placeholder="leki przepisane"><br><br>
        <input type="submit" name="przycisk" value="Dodaj"><br><br>
    </form>

</body>
</html>
