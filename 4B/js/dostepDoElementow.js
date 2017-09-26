//Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
console.log(elPierwszy);
elPierwszy.className = 'niebieski';

//Metoda getElementsByTagName()

var elNaglowek = document.getElementsByTagName('h2');
if(elNaglowek.length > 0){
    console.log(elNaglowek);
    elNaglowek[0].className = 'niebieski';
}

//Metoda getElementsByClassName()

var elCzerwony = document.getElementsByClassName('czerwony');
if(elCzerwony.length > 0){
    console.log(elCzerwony);
}
    //metoda szybsza
    var ostatni = elCzerwony[elCzerwony.length - 1];

    //metoda wolniejsza
    //var ostatni = elCzerwony.item(elCzerwony.length -1);

    ostatni.className = 'niebieski';


//Metoda getElementsByName()

    var auto = document.getElementsByName('auto');
    auto[1].className = 'niebieski';
    console.log(auto);


//Metoda querySelector

//zwraca pierwszą wartość

//var auto1 = document.querySelector('li');
/*var auto1 = document.querySelector('li.niebieski');
auto1.className = 'czerwony';*/


//Metoda querySelectorAll

/*
var naglowek2 = document.querySelectorAll('h2');
console.log(naglowek2);
naglowek2[1].className = 'czerwony';
*/

/*var elPrzycisk = document.getElementById('przycisk');

var klub = document.getElementsByName('sport');
elPrzycisk.onclick = function (){
    console.log(klub);

    for (var i=0; i<klub.length; i++){
        klub[i].className = 'niebieski';
    }
}*/

//forEach

var elPrzycisk = document.getElementById('przycisk');
var elSport = document.getElementsByName('sport');

function zmien (element, indeks){
    elSport[indeks].className = 'niebieski'
}

elPrzycisk.onclick = function (){
    elSport.forEach(zmien);
}


//previousElementSibling, nextElementSibling

var poczatekElement = document.getElementById('s2');
var poprzedniElement = poczatekElement.previousElementSibling;
var nastepnyElement = poczatekElement.nextElementSibling;

poczatekElement.className = 'niebieski';
poprzedniElement.className = 'niebieski';
nastepnyElement.className = 'niebieski';


//fistChild, lastChild

var lista = document.getElementsByTagName('ul')[1];
//console.log(lista);

var pierwszy = lista.firstElementChild;
var ostatni = lista.lastElementChild;

pierwszy.setAttribute('class', 'czerwony');
ostatni.setAttribute('class', 'czerwony');

//*****************************************************


//Zmień pierwszy element input na button i przypisz wartość 'Wyślij'

var text = document.getElementsByTagName('input')[0];
console.log(text);
text.setAttribute('type', 'button');
//text.value = 'Wyślij';
text.setAttribute('value', 'Wyślij');


//tekst www łączy ze stroną szkoły ZSK

var link = document.getElementById('link');
link.setAttribute('href', 'http://zsk.poznan.pl');



