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
var auto1 = document.querySelector('li.niebieski');
auto1.className = 'czerwony';


//Metoda querySelectorAll

var naglowek2 = document.querySelectorAll('h2');
console.log(naglowek2);
naglowek2[1].className = 'czerwony';

var elPrzycisk = document.getElementById('przycisk');

elPrzycisk.onclick = function () {
    elKs = document.getElementsByName('sport');
    if (elKs.length > 0){
        for (var i=0; i<elKs.length; i++){
            elKs[i].className = 'zielony';
        }
    }
}


/*przycisk.onclick = function(){

}


}*/








