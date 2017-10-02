//Wyrażenia regularne

var text = 'Zespół Szkół Komunikacji';
var regex = /szkół/i;
var sprawdz = regex.test(text);

var text1 = 'Technik informatyk';
//var regex1 = /informatyk$/;     //true
//var regex1 = /^informatyk/;     //false
//var regex1 = /^informatyk$/;     //false
//var regex1 = /Tech[a-z]/;     //true
//var regex1 = /Tech[a-z]?/;     //true
//var regex1 = /Tech[a-z]*/;     //true
//var regex1 = /Tech[a-z]{1}/;     //true
//var regex1 = /Tech[a-z]{1,2}/;     //true
//var regex1 = /Tech[a-z]{1,}/;     //true
//var regex1 = /Tech[a-z\s]{1}/;     //true
//var regex1 = /Tech[a-z\s]{1,3}/;     //true
//var regex1 = /[a-z]+/;     //true
//var regex1 = /[a-z]+/g;     //true
//var regex1 = /[a-z]+/gi;     //true
//var regex1 = /[a-z]+/gi;     //true
//var regex1 = /([a-z]+)/gi;     //true

//****************************************************

var regex1 = /\w+\.mp3/gi;
var text1 = 'plik@mp3 arkusz.csv szkola.mp3 tekst.mp3';


var sprawdz1 = text1.match(regex1);
console.log(sprawdz1);

//kod pocztowy
var regex2 = /[0-9]{2}-[0-9]{3}/;
var regex2 = /\d{2}-\d{3}/;

function sprawdzKod (){
    var text = document.getElementById('kod').value;
    var blok = document.getElementById('blok');
    var regex3 = /\d{2}-\d{3}/;
    var sprawdz = regex3.test(text);
    if (sprawdz == true){
        blok.style.color = 'blue';
        blok.textContent = 'Prawidłowe dane';
    }else{
        blok.style.color = 'red';
        blok.textContent = 'Błędne dane';
        text.value = '';
    }
}

var przycisk = document.getElementById('przycisk');

przycisk.addEventListener('click', sprawdzKod);
