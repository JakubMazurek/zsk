//document.write("test");

var text = "ZSK - Zespół Szkół Komunikacji";
console.log(text.length); //30

var pierwszy = text.charAt(0);
console.log(pierwszy);

var ostatni = text.charAt(text.length - 1); //i
console.log(ostatni);

document.write(text.charAt(11)); //ł
document.write(text.charCodeAt(0)); //Z
document.write(text.charCodeAt(0) + 32); //z

//zamiana na duże litery

var duze = text.toUpperCase();
var male = text.toLowerCase();
document.write(duze);//ZSK - ZESPÓŁ SZKÓŁ KOMUNIKACJI
document.write(male);//zsk - zespół szkół komunikacji

var duzaMale = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
console.log(duzaMale);

//Użytkownik wprowadza z klawiatury swoje imię, zamień pierwszy znak na dużą literę a pozostałe mają być małe. Wyświetl wszystko w nagłówku drugego stopnia w kolorze niebieskim

var imie = prompt('Podaj imię');
var poprawneImie = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
console.log(poprawneImie);
var elnaglowek = document.getElementById('naglowek');
elnaglowek.style.color = 'blue';
elnaglowek.innerHTML = poprawneImie;
console.log(poprawneImie.substr(1,poprawneImie.length - 2));


















