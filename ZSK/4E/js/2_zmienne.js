var imie;
imie = "Filip";
var nazwisko = 'Kowal';
document.write("Twoje imię to: " + imie + "<br>");
document.write("Twoje nazwisko to: " + nazwisko);

var wiek = 19;
console.log('Wiek: ' + wiek);

var x, y;
x = 10;
y = 5;
var wynik = x + y;
//alert(wynik);

x = 20;
y = 2;
var suma = x + y; //22
var roznica = x - y;  //18
var dzielenie = x / y;  //10
var mnozenie = x * y;  //40
var modulo = x % y;  // reszata z dzielenia x /y  wynosi 0

//alert(modulo);

var a = 10, b = "3a";
//alert(a + b); //103a
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(a + (a % 3) -10);  //1

//systemy liczbowe

var c = 10; //liczba w systemie dziesiętnym
var d = 0100; //oktalny
var e = 0x10; //hexadecymalny

console.log(c);  //10
console.log(d);  //64
console.log(e);  //16

console.trace();

var _zmienna = 1;
var _zmienna = 1;
console.log(_zmienna); //1
//console.log(_Zmienna); //is not defined

var f = 2.5;
console.log(f);


var prawda = true;
console.log(typeof(prawda));

var tekst = "tekst";
console.log(typeof(tekst));

var inna;
console.log(typeof(inna)); //undefined

var tab = ["jeden", "dwa"];
console.log(tab);

/*var podajg = prompt("Podaj zmienną g");
console.log(typeof(podajg));
podajg = parseInt(podajg);
console.log(typeof(podajg));  // po podaniu wartości "dasdas"  								// ==> NaN
console.log(podajg); */

var podajLiczbe = prompt("Podaj l. rzeczywistą", "np. 3.5");
podajLiczbe = parseFloat(podajLiczbe);
console.log(podajLiczbe);  // 3.5  ==> 3.5
console.log(podajLiczbe);  // 3,5  ==> 3

var liczba = 5;
var tekst = "a";
var przerwa = "";
var wynik = typeof(liczba + przerwa);
console.log(wynik); //string

var imie = "Karol";
var nazwisko = "Nowak";
var dane = imie + " " + nazwisko;
var blok = document.getElementById("wynik");
//blok.innerHTML = dane;
blok.textContent = dane;

var podajImie = prompt("Podaj imię");
var blokImie = document.getElementById("imie");
blokImie.textContent = "Imię: " + podajImie;
