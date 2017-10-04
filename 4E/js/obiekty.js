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








