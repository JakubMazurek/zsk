//Tworzenie obiektu za pomocą literału obiektu

var janusz = {
    wzrost: 180,
    waga: 80,
    miejsceUrodzenia: 'Poznań',
    plec: 'm'
};

//console.log(janusz.wzrost);

var auto = {
    marka: 'Porsche',
    model: 'Panamera',
    predkosc: 220,
    wyswietl(){
        //document.write('Marka: ' + auto.marka);
        //document.write('Marka: ' + this.marka);
        return 'Marka: ' + this.marka;
    }
};

//auto.wyswietl();
//document.write(auto.wyswietl());

//******************************************************

var ksiazka = {
    tytul: 'Pan Tadeusz',
    rokWydania: 1834,
    gatunek: 'poemat epicki',
        autor: {
            imie: 'Adam',
            nazwisko: 'Mickiewicz',
            wyswietlDane() {
                return 'Imię: ' + this.imie + '<br>Nazwisko: ' + this.nazwisko;
            }
        }
};

//console.log(ksiazka.autor.imie);
//console.log(ksiazka['autor']['imie']);
//console.log(ksiazka.autor['imie']);

var klucz = 'nazwisko';
//console.log(ksiazka.autor[klucz]);

//console.log(ksiazka.autor.wyswietlDane());  //Imię: Adam<br>Nazwisko: Mickiewicz
//document.write(ksiazka.autor.wyswietlDane());

//***************************************************************

//Tworzenie pustego obiektu

var produkt = {};

//console.log(produkt.nazwa); //undefined
//console.log(typeof(produkt.nazwa)); //undefined

produkt.nazwa = 'pralka';
produkt.model = 'WAK2024PI';
produkt.firma = 'Bosch';
produkt.waga = 8;
produkt.cena = 1500;
produkt.wyswietl = function() {
    return 'Nazwa: ' + this.nazwa + '<br>Model: ' + this.model + '<br>Cena: ' + this.cena;
}

console.log(typeof(produkt.nazwa)); //string
console.log(typeof(produkt.waga)); //number
console.log(typeof(produkt.wyswietl)); //function

//**************************************************************
//**************************************************************

//konstruktor Object

//var tablica = new Array();

var hotel = new Object();

hotel.nazwa = 'Hotel Poznań';
hotel.pokoje = 50;
hotel.zarezerwowanePokoje = 34;
hotel.silownia = true;
hotel.basen = true;
hotel.rodzajPokoju = ['pojedyncze', 'podwójne', 'apartament'];
hotel.wolnePokoje = function() {
    return this.pokoje - this.zarezerwowanePokoje;
}

console.log('Wolne pokoje: ' + hotel.wolnePokoje());

//**************************************************************

function Hotel(nazwa, pokoje, zarezerwowanePokoje, silownia, basen, rodzajPokoju) {
    this.nazwa = nazwa;
    this.pokoje = pokoje;
    this.pokojeZarezerwowane = zarezerwowanePokoje;
    this.silownia = silownia;
    this.basen = basen;
    this.rodzajPokoju = rodzajPokoju;
    this.wolnePokoje = function() {
        return this.pokoje - this.pokojeZarezerwowane;
    }
    this.wyswietl = function() {
        return 'Nazwa: ' + this.nazwa + '<br>Liczba pokoi: ' + this.pokoje + '<br>Pokoje zarezerwowane: ' + this.pokojeZarezerwowane + '<br>Siłownia: ' + this.silownia + '<br>Basen: ' + this.basen + '<br>Rodzaje pokojów: ' + this.rodzajPokoju + '<br>Wolne pokoje: ' + this.wolnePokoje();
    }
}

var HotelLech = new Hotel('Lech', 100, 30, true, false, ['jednoosobowy', 'apartament']);
var HotelMercury = new Hotel('Lech', 150, 30, false, false, ['jednoosobowy', 'apartament']);

document.write(HotelLech.wyswietl()+'<br>');
document.write(HotelMercury.wyswietl());

/*zad.dom. Zmień motodę wyswietl z konstruktora Hotel, zastosuj tablice do wyświetlania wartości*/


//****************************************************************

//tablice w obiekcie

var platnosci = {
    pokoj1: [50,100],
    pokoj2: [50,100,1000],
    pokoj3: [500,100],
    pokoj4: [250,100]
};

console.log(platnosci.pokoj1[0]);
console.log(platnosci.pokoj2.length);

//****************************************

function Auto() {
    this.marka = 'Ferrari';
}

var samochod = new Auto();
console.log(samochod.marka);

//****************************************

function Osoba(imie, nazwisko, wiek, plec) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.plec = plec;
    this.narodowosc = 'polska';
}

var czarek = new Osoba('Cezary','Nowak',19,'m');
console.log(czarek.narodowosc);

/*zad. utwórz konstruktor o nazwie pies i parametrach: imie, rasa, waga oraz ulubionezajecia. W ulubionychzajeciach może byc wiele wartości.Utwórz trzy obiekty o nazwach: azor, edi, saba*/

function Pies(imie,rasa,waga,ulubioneZajecia) {
    this.imie = imie;
    this.rasa = rasa;
    this.waga = waga;
    this.ulubioneZajecia = ulubioneZajecia;
}

var azor = new Pies('Azor', 'bokser', 30, ['spacery', 'szczekane']);
var edi = new Pies('Edi', 'bokser', 5   , ['bieganie']);
var saba = new Pies('Saba', 'bokser', 30, ['spacery', 'aportowanie', 'bieganie']);

var psy = [azor, edi, saba];

edi.ulubioneZajecia.push('spanie');
var rozmiar = 'mały pies';
for (var i=0; i < psy.length; i++){
    if (psy[i].waga > 10){
        rozmiar = 'duży pies';
    }else{
        rozmiar =  'mały pies';
    }
    //document.write('Pies: ' + '<span style="color:blue">' + psy[i].imie +  '</span>' + ' to ' + rozmiar + '<br>');
}

console.log(edi.ulubioneZajecia);


//*********************************************************


/*
var tab = ['Jan','Nowak','Poznań'];
var i;
for (i in tab){
    document.write(i + tab[i] + '<br>');
}
*/


/*var a;
for (a in edi){
    document.write(a + ': ' + edi[a] + '<br>');
}*/


/*var a;
for (a in edi){
    if (a == 'imie' || a == 'rasa')
    document.write(a + ': ' + edi[a] + '<br>');
}*/


//*******************************************************

//prototype

function Pole(a,b) {
    return a*b;
};

console.log(Pole.length);   //2
console.log(Pole.constructor);  //ƒ Function() { [native code] }
console.log(Pole.prototype);

//********************************

function Uczen(imie,nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
}

var maciej = new Uczen('Maciej', 'Nowak');
Uczen.prototype.narodowosc = 'polska';
Uczen.prototype.wyswietlUcznia = function() {
   return 'Imię: ' + this.imie + ', nazwisko: ' + this.nazwisko + ' , narodowość: ' + this.narodowosc;
}

//document.write(maciej.wyswietlUcznia());

//document.write(Uczen.prototype); //[object Object]
//document.write(Uczen.prototype.imie); //undefined
//document.write(Uczen.prototype.wyswietlUcznia()); //Imię: undefined, nazwisko: undefined , narodowość: polska

//document.write(maciej.constructor);
//document.write(maciej.constructor.prototype.narodowosc);


//******************************

function Rower(firma,kolor){
    this.firma = firma;
    this.kolor = kolor;
    this.metoda = function(){
        return 1;
    }
}

Rower.prototype.iloscKol = 2;

var romet = new Rower('Romet', 'biały');

//var i;
/*for (var i in romet){
    if (typeof(romet[i]) != 'function')
    document.write(i + romet[i]);
}*/

//console.log(romet.hasOwnProperty('firma')); //true
console.log(romet.hasOwnProperty('iloscKol')); //false

//wyświetl własne obiekty z konstruktora Romet


for (var pole in romet){
    if (romet.hasOwnProperty(pole)){
        document.write(pole + '=' + romet[pole]);
    }
}

//**********************************************

var pies = {
    nazwa: 'pies',
    waga: 10
};

function Zwierze(imie) {
    this.imie = imie;
}

Zwierze.prototype = pies;

var kajtek1 = new Zwierze('kajtek');
var kajtek2 = new Zwierze('kajtek');
kajtek2.waga = 11;
console.log(kajtek1.waga); //10
console.log(kajtek2.waga); //11
console.log(pies.isPrototypeOf(kajtek1))






