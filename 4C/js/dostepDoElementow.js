//Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = 'zielony';

//Metoda getElementsByTagName()

var elNaglowek = document.getElementsByTagName('h1');
if(elNaglowek.length > 0){
    console.log(elNaglowek);
    console.log(elNaglowek.length );
    elNaglowek[0].className = 'czerwony';

}

//Metoda getElementsByClassName()

var elCzerwony = document.getElementsByClassName('czerwony');
if(elCzerwony.length > 0){
    console.log(elCzerwony.length);

    //wolniejszy sposób
    elCzerwony.item(elCzerwony.length - 1).className = 'zielony';

    //szybszy sposób
    elCzerwony[elCzerwony.length -1].className = 'zielony';
}

//Metoda getElementByName()

var elAuta = document.getElementsByName('auto');
console.log(elAuta);
elAuta[1].className = 'grey';


//Metoda querySelector()
//zwraca perwsze dopasowanie

var elImie = document.querySelector('li.grey');
console.log(elImie);
//var elImie = document.querySelector('li#i2');
elImie.className = 'zielony';


//Metoda querySelectorAll()
var elImiona = document.querySelectorAll('li.grey');
console.log(elImiona);
elImiona[0].className = 'zielony';


/*zad. dom.
Zmień wszystkie elementy wciskając przycisk, zmieni klasę w liście z imionami na czerwone. Wykorzystaj metode forEach*/








