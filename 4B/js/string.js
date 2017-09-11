//string

var text = 'ZSK - Zespół Szkół Komunikacji';
console.log(text.length); //30

var pierwszy = text.charAt(0);
console.log(pierwszy);	//Z

var ostatni = text.charAt(text.length - 1);
console.log(ostatni);	//i

console.log(text.charAt(11));

//ASCII

console.log(text.charCodeAt(0)); //90

var duze = text.toUpperCase();
console.log(duze);

var male = text.toLowerCase();
console.log(male);

var duzaMale = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
console.log(duzaMale);

var podaj = prompt('Podaj wartość');
podaj = podaj.charAt(0).toUpperCase() + podaj.slice(1).toLowerCase()
console.log(podaj);
var elNaglowek = document.getElementById('naglowek');
elNaglowek.textContent = podaj;

var pom = podaj.substr(1, podaj.length - 2);
console.log(pom);





























