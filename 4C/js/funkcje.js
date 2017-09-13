function witaj(imie){
    document.write('Witaj ' + imie);
}

var name = 'Maciej';
witaj(name);

/*function poleProstokata(a, b){
    var pole = a * b;  //zmienna lokalna o nazwie pole
    return pole;
}

var a = prompt('Podaj a');
var b = prompt('Podaj b');
var pole = poleProstokata(a,b);
console.log(pole);*/

function poleObjetosc(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = pole * wysokosc;
    var wynik = [pole, objetosc];
    return wynik;
}

//console.log(poleObjetosc(2, 3, 4));

var pole = poleObjetosc(2, 3, 4)[0];
var objetosc = poleObjetosc(2, 3, 4)[1];
console.log('Pole: ' + pole);
console.log('Objetość: ' + objetosc);


var x = prompt('Podaj wartość', '0 - pole, 1 - objętość');
var wynik = poleObjetosc(2, 3, 4)[x];
document.write(wynik);


/*zad. napisać skrypt, który oblicza obwód, pole koła oraz objętość stożka. Dane użytkownik podaje z klawiatury. Wykorzystaj obiekt Math.
Użytkownik wybiera za pomocą pola radio co chce obliczyć.
Dane wprowadza w formularzu.
Dane wyświetl w bloku strony.*/

//console.log(Math.PI);








