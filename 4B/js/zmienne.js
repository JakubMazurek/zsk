//document.write('test');

var imie = 'Janusz';
var nazwisko;
nazwisko = 'Nowak';
//document.write('Imię: ' + imie + '<br>Nazwisko: ' + nazwisko);

var wiek1 = 19;
var wiek2 = 20;
var sredniWiek = (wiek1 + wiek2)/2;	//camelCase
console.log('Średni wiek wynosi: ' + sredniWiek);
//alert(sredniWiek);

var a = 5, b = '3';
var suma = a + b;
console.log(suma);

console.log(10 - '20' + 30); //20
console.log(10 + '20' + 30); //102030

var c = 10;
var d = 2.5;
console.log(typeof(c));
console.log(typeof(imie));
var log = true;
console.log(typeof(log)); //boolean
var x = null;
console.log(typeof(x)); //object
var y;
console.log(typeof(y)); //undefined

var dziesietna = 20;
var oktalna = 020; //16
var hex = 0x20;  //32

console.log(oktalna);
console.log(hex);

console.trace();

var name = 'Anna';
console.log(typeof(name));
name = parseInt(name);
console.log(name); //NaN
console.log(typeof(name));

var j = '1';
j = parseInt(j);
console.log(j);  //1

var k = '3.99999999';
k = parseFloat(k);
console.log(k);

var age1 = prompt('Podaj wiek 1');
age1 = parseInt(age1);
var age2 = prompt('Podaj wiek 2');
age2 = parseInt(age2);
console.log(typeof(age1));
var wynik = (age1 + age2)/2;
console.log(wynik);

//document.getElementById('naglowek').innerHTML = wynik;

var elNaglowek = document.getElementById('naglowek');
var kolor = prompt('Podaj kolor','np.blue');

elNaglowek.innerHTML = wynik;
elNaglowek.style.color = kolor;















