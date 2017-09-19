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

/*var liczby = [];
var x;
for(var i = 0; i <= 4; i++){
    do{
        x = prompt('Podaj x');
        x = parseInt(x);
    }while(x % 2 != 0)
        liczby[i] = x;
}
console.log(liczby);*/


/*użytkownik podaje z klawiatury liczbę, zabezpiecz przed podaniem litery, znaku specjalnego*/


/*document.write('<input type="text" id="liczba">');
document.write('<button id="przycisk">Wyślij</button>');
var elPrzycisk = document.getElementById('przycisk');

elPrzycisk.onclick = function (){
    elLiczba = document.getElementById('liczba');
    var wartosc = elLiczba.value;
    if(!isNaN(wartosc)){
        console.log(wartosc);
    }
}*/


/*program wyświetlający liczby 1-10 w pięciu rzędach. Po każdej liczbie ma być przecinek a po ostatniej w każdym rzędzie ma być kropka.*/

/*for(var i = 1; i <=5; i++){
    for (var j = 1; j <= 10; j++){
        if (j != 10){
            document.write(j + ',');
        }else{
            document.write(j + '.');
        }
    }
    document.write('<br>');
}*/

/*

*
**
***
****
*****

*/

/*for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= i; j++){
        document.write('*');
    }
    document.write('<br>');
}*/


/*

1
22
333
4444
55555
*/

/*for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= i; j++){
        document.write(i);
    }
    document.write('<br>');
}*/

    /*Podaj z klawiatury maksymalną ilośc gwiazdek,
    zrób pętle w której zabezpieczysz przd podaniem błędnych danych*/

/*do{
    var liczba = prompt('Podaj max ilość gwiazdek');
}while(isNaN(liczba) || liczba <=0)

    for(var i = 1; i <= liczba; i++){
        for(var j = 1; j <= i; j++){
            document.write('*');
        }
        document.write('<br>');
    }*/



/*Użytkownik podaje login i haslo w formularzu. Jeśli login to admin a haslo to tajne@123 to na ekranie wyświetli się w kolorze czerwonym: "poprawne hasło"*/

var  elLogin = document.getElementById('login');
var elPass = document.getElementById('pass');
var elPrzycisk = document.getElementById('przycisk');
var elBlok = document.getElementById('blok');



elPrzycisk.onclick = function (){
    var login = elLogin.value;
    var pass = elPass.value;
    if (login == 'admin' && pass == 'tajne@123'){

        /*elBlok.style.color = 'red';
        elBlok.innerHTML = 'poprawne hasło';*/
    }
}


//*********************    tablice   ****************************

var tab = ['Anna', 'Jacek', 'Krzysztof', 'Paweł'];

for(var i = 0; i <= tab.length - 1; i++){
    document.write(tab[i] + ', ');
}
document.write('<br>');

//foreach

function pokaz(wartosc, indeks){
    document.write(indeks + 1 + ' - element tablicy wynosi: ');
    document.write('<strong>' + wartosc + '</strong>');
    document.write('<br>');
}

tab.forEach(pokaz);



function p(a,b){
document.write(a + b + '<br>' );
}

tab.forEach(p);





