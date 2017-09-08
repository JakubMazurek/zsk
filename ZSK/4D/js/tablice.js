//document.write('sds');

//tworzenie tablicy za pomocą literału tablicy
/*var kolory = ['biały', 'czerwony', 'zielony'];
var elwynik = document.getElementById('wynik');
elwynik.innerHTML = kolory[0];*/

//tworzenie tablicy za pomocą tablicy Array

var samochody = new Array('BMW', 'Audi', 'Ferrari', 'Porsche');

console.log(samochody[samochody.length - 1]);
console.log('ilość elementów: ' + samochody.length);

/*var auto = prompt('Podaj auto');
samochody[0] = auto;
console.log(samochody);*/

/*utwórz tablicę o nazwie szkola, przypisz do niej imie, nazwisko, wiek o które spytasz ucznia w prompt. Wyswietl tablice w bloku o nazwie dane*/

var tab = new Array(
new Array ('Jan', 'Nowak', 'Poznań'),
new Array ('Anna', 'Kowal', 'Gniezno'),
new Array ('Paweł', 'Kowal', 'Poznań')
);

console.log(tab);
console.log(tab[1][2]);

//sortowanie

var imiona = ['Paweł', 'Anna', 'Zenon', 'Jacek'];
console.log(imiona);
var posortowane = imiona.sort();

console.log(posortowane);
var odwroc = posortowane.reverse();
odwroc.pop();
odwroc.push('Gerwazy');
odwroc.unshift('Joanna');
console.log(odwroc);

console.log(odwroc.indexOf('Anna')); //-1  nie istnieje
console.log(odwroc.indexOf('Gerwazy')); //4  istnieje

//sortowanie liczb

var cyfry = [1, 2, 20, 190,-1, 1000000];
console.log(cyfry);
cyfry.sort();
console.log(cyfry); //[-1, 1, 1000000, 190, 2, 20]
cyfry.sort(function(a,b){
	return(a-b);
});
var elwynik = document.getElementById('wynik');
var elpodajKolor = document.getElementById('podajKolor');
var elkolor = document.getElementById('kolor');
var kolor=[];
function zapisz(){
	//console.log(elkolor.value);
	kolor[0] = elkolor.value;
	console.log(kolor);
}

/*zad.dom. Utwórz formularz z loginem (text) , hasłem (password) i kolorem haexadecymalnym(text).
Przypisz dane do tablicy jednowymiarowej. Wypisz dane w bloku na stronie w kolorze jaki podał użytkownik. Pobierz dane z tablicy.*/




























