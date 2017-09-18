//********************    pętle for   ******************

/*for (var i = 0; i <= 10; i++){
    document.write(i);
    if (i == 6){
        break;
    }
}*/

//losuj 10 liczb z przedziału od <10;100>

/*for (var i = 0; i <= 10; i++){
    document.write(Math.floor(Math.random() * 91 + 10) + '<br>');
}*/


/*for (var i = 1; i <= 10; i++){
    if(i == 1){
        document.write(i + ' raz<br>');
    }else{
        document.write(i + ' razy<br>');
    }
}*/


/*Użytkownik podaje z kalwiatury wartość  początkową i końcową pętli, po każdej liczbie dodaj przecinek a tylko po ostatniej liczbie dodaj kropkę. Pierwsza liczba musi byćmniejsza od drugiej.*/

/*var i = prompt('Podaj wartość początkową');
var j = prompt('Podaj wartość końcową');
i = parseInt(i);
j = parseInt(j);

if (i < j){
    for(; i <= j; i++){
        if(i != j ){
           document.write(i + ', ');
        }else{
            document.write(i + '.')
        }

    }
}else{
    alert('Błędne dane!');
}*/

//****************************  WHILE  ***********************

/*var i=0;

while(i++ < 5){
    document.write(i + '<br>');
}*/

/*
var x = 0, y = 0;

while (x >= y){
    x = Number(prompt('Podaj x'));
    y = Number(prompt('Podaj y'));
}

document.write('Podałeś poprawne wartości: <br>' + 'x = ' + x + ', y = ' + y);
*/


//************************* DO WHILE  ***********************

/*do {
    var wiek = prompt('Podaj wiek');
    if(wiek ==18){
        document.write('Masz 18 lat');
    }
 }
while(wiek != 18)*/


/*wykorzystaj petle for i do while. Podaj 5 liczb podzilenych przez 2 z klawiatury. Zapsz je do tablicy i wyświetl w konsoli.*/











