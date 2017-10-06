//Tworzenie obiektu za pomocą literału obiektu

var janusz = {
    wzrost: 180,
    waga: 79,
    miejsceUrodzenia: 'Poznań',
    plec: 'm'
};

//console.log(janusz.wzrost);

/*utwórz obiekt o nazwie auto, który bedzie miał właściwości: marka, model, predkosc i metodę wyświetl*/

var auto = {
    marka: 'Ferrari',
    model: 'F400',
    predkosc: 180,
    wyswietl() {
        return 'Marka: ' + this.marka;
    }
};

//console.log(auto.model);
//document.write(auto.wyswietl);  //wyswietl() { return 'Marka: ' + this.marka; }
//document.write(auto.wyswietl());    //Marka: Ferrari

var ksiazka = {
    tytul: 'Pan Tadeusz',
    rokWydnia: 1834,
    gatunek: 'poemat epicki',
    autor: {
       imie: 'Adam',
       nazwisko: 'Mickiewicz',
       wyswietlDane() {
           return 'Imię: ' + this.imie + ', nazwisko: ' + this.nazwisko;
       }
    }
};

//console.log(ksiazka.autor.imie);
//console.log(ksiazka['autor']['imie']);
//console.log(ksiazka.autor['imie']);
//console.log(ksiazka['autor'].imie);

var klucz = 'nazwisko';
//console.log(ksiazka['autor'][klucz])
//console.log(ksiazka.autor.wyswietlDane());


//*************************************************

var produkt = {};

//sprawdzenie czy obiekt produkt ma daną właściwość

//console.log(typeof(produkt.nazwa)); //undefined

//Dodanie właściwości i metody do obiektu produkt

produkt.nazwa = 'Pralka';
produkt.firma = 'Bosch';
produkt.model = 'WAK2024PI';
produkt.waga = 8;
produkt.cena = 1500;
produkt.wyswietl = function() {
    return 'Nazwa produktu: ' + this.nazwa + '<br>Firma: ' + this.firma + '<br>Model: ' + this.model;
}

//console.log(typeof(produkt.nazwa)); //string
//console.log(typeof(produkt.wyswietl)); //function
//console.log(produkt.wyswietl());  //Nazwa produktu: Pralka<br>Frima: Bosch<br>Model: WAK2024PI
//document.write(produkt.wyswietl());

//**********************************************

//tablice w obiekcie

var platnosci = {
  pokoj1: [50,100],
  pokoj2: [300,100],
  pokoj3: [50,100, 1500],
  pokoj4: [500,100],
};

//console.log(platnosci.pokoj1[0]);
//console.log(platnosci.pokoj3.length);

/*zad.dom. stwórz metodę, która wyświetli sumę wszystkich płatności ze wszystkch pokoi*/

//*********************************************
//*********************************************

//konstruktory

function Auto() {
    this.marka = 'Ferrari';
    this.model = 'F400';
}

var samochod = new Auto();
//console.log(samochod.model);

//****************************************************

function Osoba(imie) {
    this.imie = imie;
    this.nazwisko = 'Nowak';
    this.wyswietlDane = function() {
        return 'Imie: ' + this.imie + ', nazwisko: ' + this.nazwisko;
    }
}

var osoba1 = new Osoba('Janusz');
var osoba2 = new Osoba('Oliwia');

var daneOsoba1 = osoba1;
//console.log(daneOsoba1);

//zrobić zadanie z hotelem!!!!!!!!!!!

var hotel = new Object();
hotel.nazwa = 'Hotel Poznań';
hotel.pokoje = 100;
hotel.pokojeZarezerwowane = 31;
hotel.silownia = true;
hotel.rodzajePokoi = ['pojedynczy', 'podwojny', 'apartament'];
hotel.pokojeWolne = function() {
    return this.pokoje - this.pokojeZarezerwowane;
}

//console.log(hotel.pokojeWolne());


//*****************************************************************

//var tablica = new Array();

function Hotel(nazwa, pokoje, pokojeZarezerwowane){
    this.nazwa = nazwa;
    this.pokoje = pokoje;
    this.pokojeZarezerwowane = pokojeZarezerwowane;
    this.wolnePokoje = function() {
        return this.pokoje - this.pokojeZarezerwowane;
    }
};

var lech = new Hotel('Lech', 45, 30);
var mercury = new Hotel('Mercury', 450, 248);

//document.write('Wolne pokoje w hotelu Lech: ' + lech.wolnePokoje() + '<br>');
//document.write('Wolne pokoje w hotelu Maercury: ' + mercury.wolnePokoje());

//*******************************************************************************

/*zad. utwórz konstruktor o nazwie pies i parametrach: imie, rasa, waga oraz ulubioneZajecia, które mogą mieć wiele wartości. Utwótz 3 obiekty o nazwach: azor, edi, saba.*/

function Pies(imie, rasa, waga, ulubioneZajecia){
    this.imie = imie;
    this.rasa = rasa;
    this.waga = waga;
    this.ulubioneZajecia = ulubioneZajecia;
}

var azor = new Pies('Azor', 'bokser', 30, ['bieganie', 'aportowanie']);
var edi = new Pies('Edi', 'bokser', 7, ['bieganie', 'aportowanie']);
var saba = new Pies('Saba', 'bokser', 10, ['bieganie', 'aportowanie']);

var psy = [azor, edi, saba];

edi.ulubioneZajecia.push('spanie');

//console.log(edi.ulubioneZajecia);
//console.log(psy);

var rozmiar;
for (var i=0; i<psy.length; i++){
    if (psy[i].waga > 10){
       rozmiar  = 'duży pies';
    }else{
        rozmiar = 'mały pies';
    }
    //document.write('Pies: ' + '<span style="color:blue">' + psy[i].imie + '</span>' + ' to ' + rozmiar + '<br>');
}

//********************************************************************


var tab = ['Jan', 'Nowak', 'Poznań'];
for (var i in tab){
   //document.write(tab[i]);
}

/*for (var x in edi){
    document.write(edi[x] + '<br>');
}*/


/*for (var x in edi){
    if (x == 'imie' || x == 'rasa')
    //document.write(x + '<br>');
    document.write(edi[x] + '<br>');
}*/

//**************************************************************
//**************************************************************

//prototype

function Pole(a, b){
    return a*b;
}

//console.log(Pole.length)
//console.log(Pole.constructor);
//console.log(Pole.prototype);

//*******************************************

function Uczen(imie, nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
}

var adrian = new Uczen('Adrian', 'Nowak');
Uczen.prototype.narodowosc = 'polska';
Uczen.prototype.wyswietlUcznia = function() {
    return 'Imię: ' + this.imie + ', nazwisko: ' + this.nazwisko + ', narodowość: ' + this.narodowosc;
}

//document.write(adrian.wyswietlUcznia());
console.log(adrian.constructor);
console.log(adrian.constructor.prototype.narodowosc);
console.log(adrian.hasOwnProperty('imie')); //true
console.log(adrian.hasOwnProperty('narodowosc')); //false

/*zad.
Utwórz konstruktor rower w którym będą właściwości: marka, kolor. Wyświetl wszystkie dane za pomocą metody wyswietlRower. Wykorzystaj for in. Utwórz prototyp w którym będzie zapisana ilość kół.*/
