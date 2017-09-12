
function witaj(imie){
     document.write('Witaj ' + imie);
 }

var name = 'Adrian';
witaj(name);


function poleProstokata(a, b){
    var pole = a * b;
    return pole;
}

var szerokosc = prompt('Podaj szerkosc');
var dlugosc = prompt('Podaj długość');

document.write(poleProstokata(szerokosc, dlugosc));

function poleObjetosc(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = szerokosc * dlugosc * wysokosc;
    var wynik = [pole, objetosc];
    return wynik;
}

console.log(poleObjetosc(2, 3, 4));
var pole = poleObjetosc(2, 3, 10)[0];
var objetosc = poleObjetosc(2, 3, 10)[1];
console.log(pole);
console.log(objetosc);


var x = prompt('Podj wartość','0 - pole, 1 - objętość');
var dane = poleObjetosc(2, 3, 10)[x];
console.log(dane)

/*zad. napisać skrypt, który oblicza obwód, pole koła oraz objętość stożka. Dane użytkownik podaje z klawiatury. Wykorzystaj obiekt Math. Użytkownik wybiera za pomocą pola radio co chce obliczyć. Dane wprowadza w formularzu. Dane wyświetl w bloku.*/

console.log(Math.PI); //3.141592653589793








