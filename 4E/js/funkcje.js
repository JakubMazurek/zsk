function witaj(imie){
	document.write('Witaj ' + imie);
}

function poleProstokata(a, b){
	var pole = a * b;
	return pole;
}

var name = 'Janusz';
witaj(name);

/*var a,b;
a = prompt('Podaj a');
b = prompt('Podaj b');
console.log(poleProstokata(a,b));*/

function poleObjetosc(szerokosc, dlugosc, wysokosc){
    var pole = szerokosc * dlugosc;
    var objetosc = szerokosc * dlugosc * wysokosc;
    var wynik = [pole, objetosc];
    return wynik;
}

/*var poleProstokata = poleObjetosc(2,3,4)[0];
console.log(poleProstokata);*/

var a = prompt('Podaj szerokość');
var b = prompt('Podaj długość');
var c = prompt('Podaj wysokość');
var x = prompt('Podaj wartość', '0 - pole, 1 - objętość');
var poleProstokata = poleObjetosc(a, b, c)[x];
console.log(poleProstokata);

/*zad. napisać skrypt, który oblicza obwód, pole koła oraz objętość stożka. Dane użytkownik podaje z klawiatury. Wykorzystaj obiekt Math.
Użytkownik wybiera za pomoc pola radio co chce obliczyć.
Dane wprowadza w formularzu.
Dane wyświetl w bloku strony.*/













