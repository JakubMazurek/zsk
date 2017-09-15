function witaj(imie){
    document.write('Witaj ' + imie);
}

var name = 'Janusz';
witaj(name);


/*function poleProstokata(){
    var elSzerokosc = document.getElementById('szerokosc').value;
    var elDlugosc = document.getElementById('dlugosc').value;
    var elWyswietl = document.getElementById('wyswietl');
    elWyswietl.innerHTML = elSzerokosc * elDlugosc;
}*/



    var elPrzycisk = document.getElementById('przycisk');

    elPrzycisk.onclick = function (elDlugosc,elSzerokosc){
    var elSzerokosc = document.getElementById('szerokosc').value;
    var elDlugosc = document.getElementById('dlugosc').value;
    var elWyswietl = document.getElementById('wyswietl');
    var pole = elDlugosc * elSzerokosc;
    elWyswietl.innerHTML = pole + 'cm<sup>2</sup>'
}


    function poleObjetosc(szerokosc, dlugosc, wysokosc){
        var pole = szerokosc * dlugosc;
        var objetosc = pole * wysokosc;
        var wynik = [pole, objetosc];
        return wynik;
    }

    console.log(poleObjetosc(2,3,4));
    var pole = poleObjetosc(2,3,10)[0];
    var objetosc = poleObjetosc(2,3,10)[1];
    console.log(pole);
    console.log(objetosc);

    var x = prompt('Podaj wartość','0 - pole, 1 - objetość');
    console.log(poleObjetosc(1,2,3)[x]);

    console.log(Math.PI);

   /* zad. dom. napisać skrypt, który oblicza obwód, pole oraz objętośćstożka. Dane użytkownik podaje z klawiatury. Wykorzystaj obiekt Math. Użytkownik wybiera za pomocąpola radio co chce obliczyć. Dane wprowadza w formularzu. Wynik wyświetl w bloku.*/









