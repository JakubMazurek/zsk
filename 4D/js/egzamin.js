var elPierwsza = document.getElementById('pierwsza');
var elDruga = document.getElementById('druga');
var elDodawanie = document.getElementById('dodawanie');
var elOdejmowanie = document.getElementById('odejmowanie');
var elMnozenie = document.getElementById('mnozenie');
var elDzielenie = document.getElementById('dzielenie');
var elBlok = document.getElementById('blok');
var wynik;

elDodawanie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elBlok.innerHTML = 'Proszę uzupełnić obie liczby';}
    else{
    wynik = parseFloat(elPierwsza.value) + parseFloat(elDruga.value);
    elBlok.innerHTML = wynik;}
}

elOdejmowanie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elBlok.innerHTML = 'Proszę uzupełnić obie liczby';}
    else{
       wynik = parseFloat(elPierwsza.value) - parseFloat(elDruga.value);
       elBlok.innerHTML = wynik;
        }
}

elMnozenie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elBlok.innerHTML = 'Proszę uzupełnić obie liczby';}
    else{
        wynik = parseFloat(elPierwsza.value) * parseFloat(elDruga.value);
       elBlok.innerHTML = wynik;
    }
}

elDzielenie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elBlok.innerHTML = 'Proszę uzupełnić obie liczby';}
    else if (elDruga.value == '0'){
        elBlok.innerHTML = 'Nie wolno dzielić przez zero';
    }else{
        wynik = parseFloat(elPierwsza.value) / parseFloat(elDruga.value);
       elBlok.innerHTML = wynik;
    }
}


//***********************  Potęgowanie   *********************

var elPodstawa = document.getElementById('podstawa');
var elWykladnik = document.getElementById('wykladnik');
var elPotegowanie = document.getElementById('potegowanie');
var elWynikPotegi = document.getElementById('wynikPotegi');

elPotegowanie.onclick = function (){


    if(elPodstawa.value == '' || elWykladnik.value == ''){
        elWynikPotegi.innerHTML = 'Wpisz podstawę i wykładnik potęgi';
    }else if (elWykladnik.value < 0){
        elWynikPotegi.innerHTML = 'Wykładnik potęgi musi być dodatni';}
    else{
        var a  = parseInt(elPodstawa.value);
        var b  = parseInt(elWykladnik.value);
        var potegowanie = Math.pow(a,b);
        elWynikPotegi.innerHTML = 'Wynik działania wynosi: ' + potegowanie;
    }
    }

/* ver 1.0
Uzytkownik w formularzu podaje nazwę swoich ulubionych zespołów.
Jeśli poda: "Metallica" oraz "AC/DC" to wyświetli mu się strona zespołu Metallica i AC/DC. Użytkownik jeśli będzie podawał zespoły więcej niż 3 razy to ma wyświetlić mu się komunikat w bloku strony o treści: "Nie słuchasz tego co ja".
ver 1.1
Lista rozwija z wielokrotnym wyborem*/


//************************************************************


var b = document.getElementById('b');

b.onclick = function (){
    window.location.assign("https://www.w3schools.com");
}

