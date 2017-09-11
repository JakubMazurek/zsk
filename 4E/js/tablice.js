//tworzenie tablicy za pomocą literału tablicy
var kolory = ['biały', 'zielony', 'czerwony'];
var elKolor = document.getElementById('kolor');
elKolor.textContent = kolory[0];

//tworzenie tablicy za pomocą konstruktora tablicy Array

var samochody = new Array('BMW', 'Audi', 'Ferrari', 'Fiat');

console.log(samochody[0]);
console.log(samochody[samochody.length - 1]);
console.log('Ilośćelementów w tablicy: ' + samochody.length);

//tablice wielowymiarowe

var tab = new Array (
	new Array ('Jan' , 'Kowal', 'Poznań'),
	new Array ('Anna' , 'Nowak', 'Gniezno'),
	new Array ('Anna' , 'Kowal', 'Poznań')
);

console.log(tab[1][2]);

var imiona = ['Janusz', 'Adrian', 'Andrzej', 'Zenon'];
console.log(imiona);
var posortowaneImiona = imiona.sort();
console.log(posortowaneImiona);
var odwrocImiona = posortowaneImiona.reverse();
odwrocImiona.pop();
odwrocImiona.unshift('Paweł');
odwrocImiona.push('Krystiana');
console.log(odwrocImiona);
//sprawdzenie czy istnieje element w tablicy
console.log(odwrocImiona.indexOf('Józek')); // -1
console.log(odwrocImiona.indexOf('Paweł')); // 0


//tablica z liczbami
var cyfry = [1, 2, 20, 190, -1, 1000000];
console.log(cyfry);
var posortowaneCyfry = cyfry.sort();
console.log(posortowaneCyfry);

var sortujCyfryPrawidlowo = cyfry.sort(function(a,b){
	return (a-b);
});
console.log(sortujCyfryPrawidlowo);

/*zad. dom. utwórz formularz z loginem(text) i hasłem(password). Zapisz dane w tablicy. Zapisz wynik w nagłówku frugiego stopnia. Użytkownik podaje również kolor w jakim ma być wszystko wyświetlone. */



























