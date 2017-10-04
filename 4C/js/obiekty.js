//Tworzenie obiektu za pomocą literału obiekty

var janusz = {
    wzrost: 180,
    waga: 79,
    miejsceUrodzenia: 'Poznań',
    plec: 'm'
};

//console.log(janusz);
//document.write(janusz); //[object Object]

//console.log(janusz.wzrost);

/*utwórz obiekt z właściwościami: marka, model, predkosc, wyswietl(metoda)*/

var auto = {
    marka: 'Ferrari',
    model: 'F400',
    predkosc: 280,
    wyswietl() {
        //document.write('Marka: ' + auto.marka);
        //document.write('Marka: ' + this.marka);
        return 'Marka: ' + this.marka;
    }
};

//auto.wyswietl();
//console.log(auto.wyswietl());

//***************************************************

var ksiazka = {
    tytul: 'Pan Tadeusz',
    rokWydania: '1834',
    gatunek: 'Poemat epicki',
        autor: {
            imie: 'Adam',
            nazwisko: 'Mickiewicz',
            wyswietlDane() {
                return 'Imię: ' + this.imie + '<br>Nazwisko: ' + this.nazwisko;
            }
        }
};

//console.log(ksiazka.autor.imie);
//console.log(ksiazka['autor']['nazwisko']);
//console.log(ksiazka.autor['nazwisko']);

var klucz = 'imie';
//console.log(ksiazka.autor[klucz]);

//******************************************

//tworzenie pustego obiektu

var produkt = {};

//sprawdzamy czy właściwość istnieje

console.log(typeof(produkt.nazwa)); //undefined

//dodawanie właściwości i metod

produkt.nazwa = 'pralka';
produkt.firma = 'Bosch';
produkt.model = 'WAK2024PI';
produkt.waga = 8;
produkt.cena = 1500;
produkt.wyswietl = function() {
    return 'Nazwa produkt: ' + this.nazwa + '<br>Firma: ' + this.firma + '<br>Model: ' + this.model + '<br>Waga: ' + this.waga + '<br>Cena: ' + this.cena;
}

//console.log(produkt.wyswietl());
//document.write(produkt.wyswietl());
//console.log(typeof(produkt.nazwa)); //string
//console.log(typeof(produkt.waga)); //number
console.log(typeof(produkt.wyswietl)); //function


/*zad.dom. Przekształć metodę wyświetl dla obiektu produkt*/
