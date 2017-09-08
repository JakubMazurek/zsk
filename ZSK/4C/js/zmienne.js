//document.write("ZSK");
//console.log("test");

var imie = "Maciej";
var nazwisko;
nazwisko = "Nowak";
document.write(imie + " " + nazwisko);		//konkatenacja  +

var wiek1 = 19;
var wiek2 = 20;
var sredniWiek = (wiek1 + wiek2)/2;
console.log("Średni wiek: " + sredniWiek);
//alert(sredniWiek);

var a = 5, b = "3";
var suma = a + b;

console.log(10-"20"+30); //20
var oblicz = (a - 5)/b;
console.log(oblicz);

var c = 10;
var d = 2.5;
console.log(typeof(c)); //number
console.log(typeof(d)); //number

var dziesietna = 20;
var oktalna = 020;
var hex = 0x20;

console.log(dziesietna);	//20
console.log(oktalna);	//16
console.log(hex);	// 32

console.trace();

var $_2liczba = 10;
console.log($_2liczba);

var test;
console.log(test); //undefined

var zmienna = true;
console.log(typeof(zmienna));

var j = "Trybuś";
console.log(typeof(j));
j = parseInt(j);
console.log(typeof(j));
console.log(j); //NaN

var j = "3.99999";
console.log(typeof(j));
j = parseInt(j);
console.log(typeof(j));
console.log(j);  //3

var j = "3.99999";
console.log(typeof(j));
j = parseFloat(j);
console.log(typeof(j));
console.log(j);  //3.99999

var wiek = prompt("Podaj swój wiek","np. 20");
document.write(wiek);
console.log(typeof(wiek));

//document.getElementById('naglowek').innerHTML = wiek;

var naglowek = document.getElementById('naglowek');
naglowek.innerHTML = wiek;
naglowek.style.color = "green";













