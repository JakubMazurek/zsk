var text = 'ZSK - Zespół Szkół Komunikacji';
console.log(text.length); //30

var pierwszyZnak = text.charAt(0);
console.log(pierwszyZnak); //Z

var ostatniZnak = text.charAt(text.length - 1);
console.log(ostatniZnak); //i

var kod = text.charCodeAt(0);
console.log(kod);

//zamiana na duże litery

var duza = text.toUpperCase();
console.log(duza);

//zamiana a małe litery

var male = text.toLowerCase();
console.log(male);

var poprawnyTekst = prompt('Podaj imie','np. Kowalski');
poprawnyTekst = poprawnyTekst.charAt(0).toUpperCase()
 + poprawnyTekst.slice(1).toLowerCase();
console.log(poprawnyTekst);

//wyświetl bez pierwszego i ostatniego znaku

var wycinanie = poprawnyTekst.substr(1,poprawnyTekst.length - 2);
console.log(wycinanie);







