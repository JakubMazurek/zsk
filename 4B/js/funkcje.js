function witaj(imie){
    document.write('Witaj ' + imie);
}

var name = 'Janusz';
witaj(name);


function poleProstokata(){
    var elSzerokosc = document.getElementById('szerokosc').value;
    var elDlugosc = document.getElementById('dlugosc').value;
    var elWyswietl = document.getElementById('wyswietl');
    elWyswietl.innerHTML = elSzerokosc * elDlugosc;
}








