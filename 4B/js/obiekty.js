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
console.log(daneOsoba1);

//zrobić zadanie z hotelem!!!!!!!!!!!




