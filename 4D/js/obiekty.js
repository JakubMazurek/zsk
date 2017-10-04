//tworzenie obiektu za pmocą literału

var janusz = {
  wzrost: 180,
    waga: 80,
    miejszeUrodzenia: 'Poznań',
    plec: 'm'
};

//console.log(janusz.wzrost);

var auto = {
      marka: 'Opel',
      model: 'Zafira',
      predkosc: 180,
      wyswietl() {
          //document.write('Marka: ' + auto.marka);
          document.write('Marka: ' + this.marka);
      }
};

//auto.wyswietl();

var ksiazka = {
    tytul: 'Pan Tadeusz',
    wydana: 1834,
    gatunek: 'poemat epicki',
    autor: {
        imie: 'Adam',
        nazwisko: 'Mickiewicz',
        wyswietlDane() {
            return 'Imię: ' + this.imie + ', nazwisko: ' + this.nazwisko;
        }
    }
};

//console.log(ksiazka.autor.imie);    //wyświetlenie właściwości
//console.log(ksiazka['autor']['imie']);  //wyświetlenie właściwości
//console.log(ksiazka.autor['nazwisko']); //wyświetlenie właściwości
//console.log(ksiazka.autor['wyswietlDane']); //wyświetlenie metody
//document.write(ksiazka.autor.wyswietlDane());


var klucz = 'nazwisko';
//console.log('Nazwisko: ' + ksiazka.autor[klucz]);

//********************************************************************

var produkt = {};

//sprawdzenie czy właściwość istnieje

//console.log(typeof(produkt.nazwa));  //undefined

//Dodawanie właściwości i metod do obiektu

produkt.nazwa = 'Pralka';
produkt.firma = 'Bosch';
produkt.model = 'WAK20240PI';
produkt.waga = 8;
produkt.cena = 1500;
produkt.wyswietl = function() {
    return 'Nazwa produktu: ' + this.nazwa + '<br>Firma: ' + this.firma + '<br>Model: ' + this.model + '<br>Waga: ' + this.waga + '<br>Cena: ' + this.cena;
}

//console.log(typeof(produkt.nazwa)); //string
//console.log(typeof(produkt.wyswietl)); //function
//document.write(produkt.wyswietl());

//Usuwanie właściwości

delete produkt.waga;
//document.write(produkt.wyswietl());


//*************************************************
//*************************************************


/*var hotel = {
    nazwa: 'Hotel Poznań',
    pokoje: 50,
    zarezerwowanePokoje: 21,
    silownia: true,
    basen: true,
    rodzajPokoju: ['pojedynczy', 'podwójny', 'apartament'],
    wolnePokoje: function() {
        return this.pokoje - this.zarezerwowanePokoje;
    }
};*/

//console.log(hotel.wolnePokoje());

var hotel = new Object();

hotel.nazwa = 'Hotel Poznań';
hotel.pokoje = 50;
hotel.zarezerwowanePokoje = 20;
hotel.silownia = true;
hotel.basen = true;
hotel.rodzajPokoju = ['pojedynczy', 'podwójny', 'apartament'];
    hotel.wolnePokoje = function() {
        return this.pokoje - this.zarezerwowanePokoje;
    };

//***************************************************
//***************************************************
//***************************************************


function Hotel(nazwa, pokoje, pokojeZarezerwowane){
    this.nazwa = nazwa;
    this.pokoje = pokoje;
    this.pokojeZarezerwowane = pokojeZarezerwowane;
    this.wolnePokoje = function() {
        return this.pokoje - this.pokojeZarezerwowane;
    }
};

var lech = new Hotel('Lech', 40, 15);
var mercury = new Hotel('Mercury', 150, 70);

/*document.write('Wolne pokoje w hotelu Lech: ' + lech.wolnePokoje() + '<br>');
document.write('Wolne pokoje w hotelu Mercury: ' + mercury.wolnePokoje() + '<br>');*/


//*******************************************************

//tablice w obiekcie

var platnosci = {
    pokoj1: [50,100,1500],
    pokoj2: [150,100],
    pokoj3: [50],
    pokoj4: [50,100,250],
};

console.log(platnosci.pokoj1[1]);
console.log(platnosci.pokoj1.length);

/*zad.dom. obliczyć całkowitą wartość platności wszystkich pokoi. Stwórz metodę o nazwie calkowitePlatnosci.*/

