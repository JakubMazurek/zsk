//Wyrażenia regularne

//var text = 'Zespół szkół Komunikacji';


//var regEx = /Szkół/;
//var regEx = /Szkół/i;
//var regEx = /^Szkół/i;
//var regEx = /Szkół$/i;
//var regEx = /^Szkół$/i;
//var regEx = /[a-z]/;
//var regEx = /[A-Z]/;
//var regEx = /[A-z]/;
//var regEx = /[ą][A-z]/;
//var regEx = /[ą]|[A-z]/;
//var regEx = /[A-z]\s/;
//var regEx = /[A-z]\S/;
//var regEx = /[A-z]+@/;
//var regEx = /[A-z]?@/;
//var regEx = /^mąk[a]?@/;
//var regEx = /^mąk[a]*@/;
//var regEx = /[a]/;
//var regEx = /[a]{3}/;
//var regEx = /^[a-z]{3,4}$/;
//var regEx = /^[a-z]{3,}$/;
//var regEx = /\\/;
//var regEx = /\//;
//var regEx = /./;
//var regEx = /\./;
//var regEx = /\.pl/;
//var regEx = /\.[a-z]{2}/;
//var regEx = /\w/;
//var regEx = /^\w/;
//var regEx = /\W/;
//var regEx = /\d/;
//var regEx = /\D/;
//var regEx = /\s/;
//var regEx = /\S/;
//var regEx = /(text)/;
//var regEx = /(text){2}/;
var regEx = /\w+\.mp3/g;

var pliki = 'plik.mp3 arkusz.csv szkola.mp3 zsk.mp3';
//var sprawdz1 = regEx.test(pliki);
var sprawdz1 = pliki.match(regEx);



var text = 'text';
//var text = '\\';

var sprawdz = regEx.test(text);

console.log(sprawdz1);

//*****************************************

//https://regex101.com/r/lPTRrp/1
//^[0-9]{2}-[0-9]{3}$
//^\d{2}-\d{3}$

var tekst = document.getElementById('tekst');
var regExKod = /^[0-9]{2}-[0-9]{3}$/;
var wynik = document.getElementById('wynik');

var sprawdz;

function kodPocztowy() {
    sprawdz = regExKod.test(tekst.value);
    if (sprawdz){
        wynik.style.color = 'blue';
        wynik.textContent = 'Prawidłowy kod pocztowy';
    } else {
        wynik.style.color = 'red';
        wynik.textContent = 'Nieprawidłowy kod pocztowy';
    }
}

tekst.addEventListener('input', kodPocztowy);





