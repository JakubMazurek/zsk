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

/*var wiek;
do {
    wiek = prompt('Podaj wiek');
    if(wiek ==18){
        document.write('Masz 18 lat');
    }
 }
while(wiek != 18)*/


/*wykorzystaj petle for i do while. Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapsz je do tablicy i wyświetl w konsoli tablicę.*/

/*var liczby = [];
var x;
for (var i = 0; i <= 4; i++){
    do{
        x = prompt('Podaj x');
        x = parseInt(x);
    }while(x % 2 != 0)          //(x % 2) ==> jak będzie 0 to wyniesie false
        liczby[i] = x;
}
console.log(liczby);*/


/*użytkownik podaje z klawiatury liczbę, zabezpiecz przed podaniem litery, znaku specjalnego*/


/*document.write('<input type="text" id="liczba">');
document.write('<button id="przycisk">Wyślij</button>');

var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');

elPrzycisk.onclick = function(){
    var wartosc = elLiczba.value;
    if(!isNaN(wartosc)){
        console.log(wartosc);
    }
}*/


/*Program wyświetlający liczby 1-10 w pięciu rzędach. Po każdej liczbie ma byc przecinek a po ostatniej w każdym rzędzie ma być kropka*/

/*for(var i = 1; i <= 5; i++){
for(var j = 1; j <= 10; j++){
    if(j != 10){
    document.write(j + ', ');}
    else{
     document.write(j + '. ');
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


/*for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= i; j++){
        document.write(i);
    }
    document.write('<br>');
}*/


/*for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= i; j++){
        document.write(j);
    }
    document.write('<br>');
}*/


/*podaj z kalwiatury maksymalną ilośgwiazdek, zrób pętle  w której zabezpieczysz przed podaniem błędnych danych*/


/*do{
    var liczba = prompt('Podaj max ilość gwiazdek');
}while(isNaN(liczba) || liczba <=0)

    for(var i = 1; i <= liczba; i++){
        for(var j = 1; j <= i; j++){
            document.write('*');
        }
        document.write('<br>');
    }*/


/*Użytkownik podaje login i hasło z klawiatury w formularzu. Jeśli login to admin a hasło to tajne@123 to na ekranie wyświetli się w kolorze czerwonym: "Poprawne hasło".*/


/*var elLogin = document.getElementById('login');
var elPass = document.getElementById('pass');
var elPrzycisk = document.getElementById('przycisk');
var elBlok = document.getElementById('blok');

elPrzycisk.onclick = function (){
    if(elLogin.value == 'admin' && elPass.value == 'tajne@123'){
        elBlok.style.color = 'red';
        elBlok.innerHTML = 'Poprawne hasło';
    }else{
        elBlok.style.color = 'green';
        elBlok.innerHTML = 'Błędne hasło';
    }
}*/


//**********************   foreach   ***************************

var tab = ['Anna', 'Jacek', 'Janusz', 'Adrian'];

for (var i = 0; i < tab.length; i++){
    //document.write(tab[i] + ' ');
}



function p(wartosc,indeks){
    document.write('Indeks ' + indeks + ': ' + wartosc + '<br>');
}

tab.forEach(p);












