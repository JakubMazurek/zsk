//Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = 'niebieski';

//Metoda getElementsByTagName()

var elNaglowek = document.getElementsByTagName('h1');
if (elNaglowek.length > 0){
    //console.log(elNaglowek.length);
    console.log(elNaglowek);
    elNaglowek[0].className = 'czerwony';
}

//Metoda getElementsByClassName()

var czerwony = document.getElementsByClassName('czerwony');
if (czerwony.length > 0){
    console.log(czerwony.length);
    console.log(czerwony);
    //metoda wolniejsza
    //var ostatni = czerwony.item(czerwony.length - 1);

    //metoda szybsza
    var ostatni = czerwony[czerwony.length - 1];
    ostatni.className = 'niebieski';
}


//Metoda querySelector()
//zwraca pierwsze dopasowanie

var elTv = document.querySelector('li.grey');
console.log(elTv.length);
elTv.className = 'niebieski';

//metoda querySelectorAll()

var elTvAll = document.querySelectorAll('li.grey');
console.log(elTvAll.length);
elTvAll[2].className = 'niebieski';


//Metoda getElementsByName()

//przycisk zmieni klasę w liście z telewizorami na niebieską

var elPrzycisk = document.getElementById('przycisk');
var tv = document.getElementsByName('tv');

elPrzycisk.onclick = function (){
    console.log(tv);
    for (var i = 0; i < tv.length; i++){
        tv[i].className = 'niebieski';
    }
}

//Wykonaj za pomocą forEach

var elPrzycisk = document.getElementById('przycisk');
var elTvZmien = document.getElementsByName('tv');

function zmien(element,index){
        elTvZmien[index].className = 'niebieski';
    }

elPrzycisk.onclick = function (){
    //console.log(elTvZmien);
    elTvZmien.forEach(zmien);
}

//previousElementSibling, nextElementSibling

var poczatekElement = document.getElementById('s2');
var poprzedniElement = poczatekElement.previousElementSibling;
var nastepnyElement = poczatekElement.nextElementSibling;

poczatekElement.className = 'niebieski';
poprzedniElement.className = 'niebieski';
nastepnyElement.className = 'niebieski';

//firstChild, lastChild

var lista = document.getElementsByTagName('ul')[1];
console.log(lista);

var pierwszy = lista.firstElementChild;
var ostatni = lista.lastElementChild;

pierwszy.setAttribute('class', 'grey');
ostatni.setAttribute('class', 'grey');

//***************************************************

//Zmień pierwszy element input na button i przypisz wartość 'Wyślij'

var text = document.getElementsByTagName('input')[0];
console.log(text);
text.setAttribute('type', 'button');
//text.value = 'Wyślij';
text.setAttribute('value', 'Wyślij');

//tekst www łączy ze stroną szkoły ZSK

var link = document.getElementById('link');
link.setAttribute('href', 'http://zsk.poznan.pl');






