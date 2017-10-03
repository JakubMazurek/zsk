//Wyrażenia regularne

var text = 'asdsatesttestsadasd';
//var regEx = /szkół/;    //true
//var regEx = /szkół/;    //false
//var regEx = /szkół/i;    //false
//var regEx = /^szkół/i;    //false
//var regEx = /szkół$/i;    //false
//var regEx = /^szkół$/i;    //false
//var regEx = /[a-z]/;    //true
//var regEx = /[A-Z]/;    //true
//var regEx = /[A-z]/;    //true
//var regEx = /[ąęćźżółńś][a-z]/;    //true
//var regEx = /[ąęćźżółńś]|[a-z]/;    //true
//var regEx = /^[ąęćźżółńś][a-z]/;    //true
//var regEx = /[a-z]\s/;    //true
//var regEx = /[a-z]+@/;    //true
//var regEx = /^mąk[a]?@/;    //false
//var regEx = /[a]/;    //true
//var regEx = /^[a]{1}/;    //true
//var regEx = /^[a]{2}$/;    //true
//var regEx = /^[a]{2,4}$/;    //true
///var regEx = /^[a]{2,}$/;    //true
//var regEx = /\//;    //true
//var regEx = /\s/;    //true
//var regEx = /./;    //true
//var regEx = /\.[a-z]{2}/;    //true
//var regEx = /\w/;    //true
//var regEx = /\W/;    //true   negacja \w
//var regEx = /\d/;    //true
//var regEx = /\D/;    //true
//var regEx = /\s/;    //true
//var regEx = /\S/;    //true
//var regEx = /test/;    //true
//var regEx = /(test){1}/;    //true
var regEx = /(test){2}/;    //true

var sprawdz = regEx.test(text);

console.log(sprawdz);

//************************************

//kod pocztowy

//https://regex101.com/r/f4IrbQ/1
//^[0-9]{2}-[0-9]{3}$
//^\d{2}-\d{3}$

/*zad.dom
W formularzu użytkownik podaje z klawiatury kod pocztowy i miasto. Sprawdź czy kod jest prawidłowy. Jeśli tak to na ekranie w bloku wyświetl
: Kod pocztowy: ........, miasto: .............*/

//var regEx = /\w{1,}\.mp3/g;
var regEx = /\w+\.mp3/g;
var text1 = 'plik@mp3 arkusz.csv szkola.mp3 tekst.mp3';
//var sprawdz1 = regEx.test(text1);
var sprawdz1 = text1.match(regEx);
console.log(sprawdz1);
document.write(sprawdz1);





