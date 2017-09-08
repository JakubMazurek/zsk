/*document.write("Skrypt działa poprawnie<br />");
document.write("Skrypt działa poprawnie<br />");
document.write("Skrypt działa poprawnie<br />");
console.log("Tekst"); */

var imie = "Ada";
// =   ==> operator przypisania
// Ada ==> wartośćzmienenj

//document.write(imie);  //Ada
//document.write("Witaj, " + imie + "!");  //Ada
//console.log(imie);
//document.write("test");

var suma = 10 + '20' + 30;
//console.log(suma);
//alert('test');

// var - słowo kluczowe
// imie - nazwa zmiennej

var a = 9, b = 'Janusz', c = true;
var d;
var suma = a + b;
var roznica = a - b;
var mnozenie = a * b;
var dzielenie = a / b;
var modulo = a % b;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

var dzialanie = (7%2)/3;
console.log(dzialanie);

var dziesietna = 10;
var oktalna = 020;
var hex = 0x20;
console.log(dziesietna);  //10
console.log(oktalna);  //16
console.log(hex);  //32

console.trace();

//camelCase

var _duzaLitera;
var $duzaLitera;

var zmienna = 2.5;
console.log(zmienna);

var j1 = '1';
var j2 = '1.99999';
var wiek = 'Aga';
console.log(typeof(j1));
j1 = parseInt(j1);
j2 = parseFloat(j2);
wiek = parseInt(wiek);
var wynik = j1 + j2;
console.log(wynik);
console.log(wiek); //NaN

var x = "ZSK";
//document.getElementById('naglowek').innerHTML = x;
var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML = x;
elNaglowek.style.color = 'red';


var imie = prompt('Podaj swoje imię');
console.log(typeof(imie));

/*podaj a, podaj b , oblicz pole, a * b, wyswietl w konsoli

podaj a, podaj b, wyswietl średni wiek w konsoli*/

/*Średni wiek wynosi: .......     nagłówek drugiego stopnia*/










