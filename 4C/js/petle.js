//***************   pętla for  **************************


/*for (var i = 0; i < 10; i++){
    document.write(i);
    if(i==7){
       break;
    }
}*/

//losuj 10 liczb z przedziału <10;100>

/*for(var i=0; i< 10; i++){
    document.write(Math.floor(Math.random() * 91 + 10) + '<br>');
}*/



/*for(var j = 1; j <= 10;  j++){
    if( j == 1){
        document.write(j + ' raz<br>');
    }else{
        document.write(j + ' razy<br>');
    }
}*/

/*uzytkownik podaje z klawiatury wartosc poczatkowa i koncowa petli, pokazdej liczbi dodaj przecinek a tylko po ostatniej liczbie podaj kropke. Pierwsza liczba musi być mniejsza od drugiej*/

/*var i = prompt('Podaj wartość początkową');
i = parseInt(i);
var j = prompt('Podaj wartość początkową');
j = parseInt(j);

if(i<j){
        for(; i <= j; i++){
            if (i != j){
              document.write(i + ', ');
            }else{
                document.write(i + '.')
            }
        }
}else{
    alert('i nie jest mniejsze od j!!!');
}*/


//***************   pętla while  **************************

/*var i = 0;
while(i++ < 5){
    document.write(i + '<br>');
}*/

/*var wiek;
wiek = prompt('Podaj wiek');
var wiek1 = 18;

while(wiek != wiek1){
    wiek = prompt('Podaj wiek');
    if (wiek == wiek1){
        document.write('Masz 18 lat');
    }
}

if (wiek  == 18){
    document.write('Masz 18 lat');
}*/

//******************  pętla do while  *******************

/*do{
    var wiek = prompt('Podaj wiek');
    if(wiek == 18){
        document.write('Masz 18 lat');
    }
}
while(wiek != 18)*/

/*Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyświetl na stronie.*/

/*var liczby = [];
var x;
for(var i = 0; i <= 4; i++){
    do{
        x = prompt('Podaj x');
        x = parseInt(x);
    }
    while(x % 2 != 0)

    liczby[i] = x;
}
console.log(liczby);*/

//110 linia kodu  kartkówka na następnej lekcji

/*Użytkownik podaje z klawiatury liczbę, zabezpiecz przed podaniem litery, znaku specjalnego*/




//document.write('<input type="text" id="liczba">');

/*for (var i = 1; i <= 10; i++){
    document.write('<input type="text" id="liczba' + i + '">');
document.write('<button id="przycisk">Wyślij</button>');
var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba'  + 1);

elPrzycisk.onclick = function (){
    var wartosc = elLiczba.value;
    if(!isNaN(wartosc)){
       console.log(wartosc);
       }
}*/


/*Program wyświetlający liczby 1-10 w pięciu rzędach. Po każdej liczbie ma być przecienk a po ostatniej w każdym rzędzie ma być kropka*/

for(var j = 1; j <= 5; j++){
for (var i = 1; i <= 10; i++){
    if(i != 10){
        document.write(i + ',');
    }else{
        document.write(i + '.');
    }
}
    document.write('<br>');
}

/*zad.dom. Użytkownik podaje z kalwiatury maksymalna ilość gwiazdek, zrób pętlę w której zabezpieczysz przed podaniem błędnych danych.
Użytkownik może również w formularzu podaćinny znak jaki chce wyświetlic na ekranie */

/*

*
**
***
****
*****
****
***
**
*

*/

/*Użytkownik podaje z klawiatury login i hasło. Jeśli login to Janusz a hasło to okoń na ekranie wyświetli się w kolorze czerwonym hasło
Jesli hasło bedzie błędne to w kolorze niebieskim wyświetli się "Błędne hasło"*/

/*var elLogin = document.getElementById('login');
var elPass = document.getElementById('pass');
var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('wynik');

elPrzycisk.onclick = function (){
    var login = elLogin.value;
    var pass = elPass.value;
    if(login == 'Janusz' && pass =='okoń'){
        elWynik.style.color = 'red';
        elWynik.innerHTML = pass;
    }else{
        elWynik.style.color = 'blue';
        elWynik.innerHTML = 'Błędne hasło';
    }

}*/

//*******************  forEach   ****************

var tab = ['Anna', 'Adrian', 'Janusz', 'Andrzej'];

/*
for (var i = 0; i <= tab.length - 1; i++){
    document.write(tab[i] + ', ');
}*/

function p(wartosc, indeks){
    document.write(indeks + 1 + ' element tablicy: ' + wartosc + '<br>');
}

tab.forEach(p);






















