function witaj(imie){
	document.write('Witaj ' + imie);
}

function poleProstokata(a, b){
	var pole = a * b;
	return pole;
}

var name = 'Janusz';
witaj(name);

var a,b;
a = prompt('Podaj a');
b = prompt('Podaj b');
console.log(poleProstokata(a,b));
