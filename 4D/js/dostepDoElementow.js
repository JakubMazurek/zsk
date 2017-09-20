//Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = 'zielony';

//Metoda getElementsByTagName()

var elNaglowek = document.getElementsByTagName('h1');
if(elNaglowek.length > 0){
    //console.log(elNaglowek);
    //console.log(elNaglowek.length);
    elNaglowek[0].className = 'czerwony';
}

//Metoda getElementsByClassName()

var elCzerwony = document.getElementsByClassName('czerwony');
if (elCzerwony.length > 0){
    console.log(elCzerwony.length);
    console.log(elCzerwony);

    //metoda wolniejsza
    //var ostatni = elCzerwony.item(elCzerwony.length - 1);

    //metoda szybsza od item
    var ostatni = elCzerwony[elCzerwony.length - 1];

    ostatni.className = 'zielony';
}


//Metoda querySelector()

//zwraca pierwsze dopasowanie

var elTv = document.querySelector('li.grey');
elTv.className = 'czerwony';

//Metoda querySelectorAll()

var elTvAll = document.querySelectorAll('li.grey');
console.log(elTvAll);
console.log(elTvAll.length);
elTvAll[2].className = 'zielony';


//*********  zamiana wszystkich elementów  listy******

//*****************   getElementsByName('tv')   ***********


/*var elPrzycisk = document.getElementById('przycisk');
elPrzycisk.onclick = function (){
    //elTv = document.getElementsByTagName('tv');
    elTv = document.getElementsByName('tv');
    for(var i = 0; i < elTv.length - 1; i++){
        elTv[i].className = 'zielony';
    }
    //console.log(elTv);
}*/


/*Zmień wszystkie kolory w liście telewizory na zielone. Wykorzystaj metodę forEach()*/

var elPrzycisk = document.getElementById('przycisk');

elPrzycisk.onclick = function (){
elTv = document.getElementsByName('tv');

function zmien(element, index) {

    elTv[index].className = 'zielony';
}
    elTv.forEach(zmien);
}









