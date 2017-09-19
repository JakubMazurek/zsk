//**********************   FOR   ************************

/*for (var i = 0;  i <= 10; i++){
    document.write(i);
    if(i == 5){
        break;
    }
}*/

//losuj 100 liczb z przedziału <50;200>

/*
for (var i = 1; i <=100; i++){
    document.write(Math.floor(Math.random() * 151 + 50) + '<br>');
}
*/

/*for (var i = 1; i <= 10; i++){
    if (i != 10){
        document.write(i + ', ');
    }else{
        document.write(i + '.')
    }
}*/


//*************************  WHILE  ***********************

/*var i = 0;
while(i++ < 5){
      document.write(i + '<br>');
      }*/

/*Użytkownik podaje z klawiatury dwie wartości, pętla będzie wykonywała się tak długo dopuki x większe lub równe y*/

/*var x = 0,y = 0;

while( x >= y){
    x = Number(prompt('Podaj x'));
    y = prompt('Podaj y');
}
document.write('x = ' + x + ', y = ' + y);
console.log(typeof(x)); //number
console.log(typeof(y)); //string*/


//********************  DO WHILE  *********************

/*var wiek;

do{
    wiek = prompt('Podaj wiek');
    if(wiek == 19){
        document.write('Możesz już grać w CS');
    }
}while(wiek != 19)*/


/*wykorzystaj pętle fr i do while. Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyświetl w konsoli tablicę.*/

/*var liczby = [];
var x;
for (var i = 0; i <= 4; i++){
    do{
        x = prompt('Podaj liczbę');
        x = parseInt(x);
    }while(x % 2 != 0)      //(x % 2)  => 0 false
        liczby[i] = x;
}
       console.log(liczby);*/


 /*Użytkownik podaje z klawiatury liczbę, zabezpiecz przed podaniem liery, znaku specjalnego */

/*document.write('<input type = "text" id = "liczba">');
document.write('<button id = "przycisk">Wyślij</button>');

var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');

elPrzycisk.onclick = function (){
    if(!isNaN(elLiczba.value)){
        console.log(elLiczba.value);
    }
}*/


//*********************  FOREACH  ********************


var tab = ['Anna', 'Jacek', 'Janusz', 'Adrian'];

for (var i = 0; i < tab.length; i++){
    //document.write(tab[i] + ' ');
}


function p(a){
    document.write(a  + '<br>');
}
//tab.forEach(p);


function pokaz(wartosc, indeks){
    document.write(indeks + 1 + ' - element tablicy wynosi: ');
    document.write(wartosc + '<br>');
}

tab.forEach(pokaz);










/*zad.dom. Użytkownik podaje z klawiatury login i hasło w formularzu. Jeśłi login to "filip" a hasło to "Okoń@1234" to na ekranie wyświetli sięw kolorze czerwonym : "Poprawne hasło", jeśli hasło będzie błędne to w kolorze zielonym wyświetli się: "Błędne hasło". Użytkownik ma 3 próby.*/














