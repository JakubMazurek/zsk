//****************  pętla for  ***************************

/*for (var i = 0; i <= 10; i++){
    document.write(i);
    if(i == 6){
        break;
    }
}*/

//losuj 10 liczb z przedziału <10;100>

/*for (var i = 0; i <=100; i++){
    document.write(Math.floor(Math.random() * 91 + 10) + '<br>');
}*/


for (var j = 1; j <= 10; j++){
    if (j == 1){
        document.write(j + ' raz<br>');
    }else{
        document.write(j + ' razy<br>');
    }
}


/*uzytkownik podaje z kalwiatury wartosc poczatkowa i koncowa petli, po kazdej liczbie dodaj przecinek a tylko po ostatniej liczbie dodaj kropkę. Pierwsza liczba musi być mniejsza od drugiej.*/


/*var i = prompt('Podaj wartość początkową');
i = parseInt(i);
var j = prompt('Podaj wartość końcową');
j = parseInt(j);

if (i < j){
    for(; i <= j; i++){
        if(i != j){
            document.write(i + ', ');
        }else{
            document.write(i + '.')
        }
    }
} else{
    alert('Wartości błędne');
}*/



//******************  pętla while  **********************

/*var i = 0;
while (i++ < 5){
    document.write(i + '<br>');
}*/



//x < y

/*var x = 0,y = 0;

while(x >= y){
    x = Number(prompt('Podaj x'));
    y = Number(prompt('Podaj y'));
}
document.write('Podałeś poprawne wartości:<br>' + 'x = ' + x +'<br>' + 'y = ' + y);*/


//***********************  do while  *********************

/*do {
    var wiek = prompt('Podaj wiek');
    if (wiek == 18){
        document.write('Masz 18 lat');
    }
}while(wiek != 18)*/


/*wykorzystaj petle for i do  while. Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyświetl w konsoli.*/

var liczby = [];
var x;
for(var i = 0; i <= 4; i++){
    do{
        x = prompt('Podaj x');
        x = parseInt(x);
    }while(x % 2 != 0)
        liczby[i] = x;
}
console.log(liczby);









