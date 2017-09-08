var kolory;

//tworzenie tablicy za pomocąliterału tablicy
/*kolory = ['biały', 'zielony', 'czerwony'];
var elkolor = document.getElementById('kolor');
elkolor.textContent = kolory[0];*/

//tworzenie tablicy za pomocą konstruktora tablicy Array

var samochody = new Array('BMW',
						  'Audi',
						  'Ferrari');
console.log(samochody[0]); //pierwszy element
console.log(samochody[samochody.length - 1]); //ferrari
//document.write("Ilość elementów w tablicy samochody wynosi: " + samochody.length);

/*var noweAuto = prompt('Podaj nowe auto');
samochody[0] = noweAuto;
console.log(samochody);*/

//tablice wielowymiarowe

var tab = new Array(
Array('Jan','Nowak','Poznań'),
Array('Anna','Pawlak','Gniezno'),
Array('Adam','Nowak','Poznań')
);

console.log(tab);
//document.write(tab[1][2]); //Gniezno

var imiona = ['Janusz', 'Andrzej', 'Marta'];
console.log(imiona);
var posortowane = imiona.sort();
console.log(posortowane);
var odwroc = posortowane.reverse();
//imiona.pop(); // usuwa ostatni element
imiona.unshift('pierwszy'); // dodaje element na początku tablicy
imiona.push('ostatni'); //dodaje element na końcu tablicy
console.log(odwroc);

//srawdzenie czy wartość jest w tablicy
console.log(imiona.indexOf('Martaa')); // -1 nie istnieje
//1 istnieje


//tablica z liczbami
var cyfry = [1, 2, 20, 190, -1];
console.log(cyfry);
//cyfry.sort();
//sortowanie liczb !!!!!!
cyfry.sort(function(a,b){
	return(a-b);
});
console.log(cyfry);

function wypisz(){
	var elkolor1 = document.getElementById('kolor1').value;
	console.log(elkolor1);

	var kolory = [elkolor1];
	console.log(kolory);
}

//utwórz formularz z loginem(text) i hasłem(password)
//zapisz dane w tablicy





















