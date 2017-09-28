//wyrażenia regularne

var text = 'Zespół Szkół Komunikacji';
var text1 = '545U6454';
var text2 = 'aąa';
var text3 = ' test  ';
var text4 = 'szkol@';
var text5 = '/';
var text6 = '.pl';
var text7 = 'sadsa';
var grupa = 'Zespół Szkól testtest Komunikacji test';

//var regEx = /szkół/i; //true
//var regEx = /^szkół/i; //false
//var regEx = /szkół$/i; //false
//var regEx = /^Zespół/i; //true
//var regEx = /kacji$/i; //true
//var regEx = /^kacji$/i; //false
//var regEx = /^Zespół Szkół Komunikacji$/i; //true
//var regEx = /[a-z]/i; //true
//var regEx = /[a-z]/; //false
//var regEx = /[ąęćźżłńó]/; //true
//var regEx = /[ąęćźżłńó]|[a-z]/; //true
//var regEx = /[a-z]\s/; //true
//var regEx = /^[a-z]+@/; //true
//var regEx = /^[a-z]*@/; //true
//var regEx = /^szkol[a]?@/; //true
//var regEx = /[a]/; //true
//var regEx = /[a]{1}/; //true
//var regEx = /^[a]{2,3}/; //true
//var regEx = /\//; //true
//var regEx = /\//; //true
//var regEx = /\.[a-z]{2,3}/; //true
//var regEx = /./; //true
//var regEx = /\./; //false
//var regEx = /\w/; //true
//var regEx = /\w/; //true
//var regEx = /\W/; //false negacja \w
//var regEx = /\d/; //
//var regEx = /\D/; //true negacja \d
//var regEx = /\s/; //true
//var regEx = /\S/; //true negacja \s
//var regEx = /[a-z][A-Z]/;
//var regEx = /[A-z]/;
//var regEx = /(test){2}/;

//var sprawdz = regEx.test(text);
//var sprawdz = regEx.test(text1);
//var sprawdz = regEx.test(text2);
//var sprawdz = regEx.test(text3);
//var sprawdz = regEx.test(text4);
//var sprawdz = regEx.test(text7);
//var sprawdz = regEx.test(grupa);

//console.log(sprawdz);

//Sprawdź kod pocztowy

var regEx = /^\d{2}-\d{3}$/;
var kodPocztowy = document.getElementById('kod');
var blok = document.getElementById('blok');

function sprawdz() {
    var text = kodPocztowy.value;
    var wynik = regEx.test(text);
        if (wynik){
            blok.textContent = 'Prawidłowy kod pocztowy';
        } else {
            blok.textContent = 'Nieprawidłowy kod pocztowy';
        }
    }


kodPocztowy.addEventListener('input', sprawdz);

//******************************************************

// match()

var text = 'Zespół Szkół Zespół Komunikacji';
var regEx = /Zespół/i;
//var regEx = /(Zespół){1}/i;  //*
var sprawdz = text.match(regEx);


var pliki = 'plik.mp3 arkusz.csv plik1.mp3 tekst.mp3';
var regEx1 = /\w+\.mp3/g;
var sprawdz1 = pliki.match(regEx1);
console.log(sprawdz1);












