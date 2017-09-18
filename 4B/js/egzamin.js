//Arkusz E.14-01-15.01  zima 2015

var elPierwsza = document.getElementById('pierwsza');
var elDruga = document.getElementById('druga');
var elDodawanie = document.getElementById('dodawanie');
var elOdejmowanie = document.getElementById('odejmowanie');
var elMnozenie = document.getElementById('mnożenie');
var elDzielenie = document.getElementById('dzielenie');
var elBlok = document.getElementById('blok');
var wynik;

elDodawanie.onclick = function(){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elBlok.innerHTML = 'Proszę uzupełnić obie liczby';
    }else{
        var a = parseFloat(elPierwsza.value);
        var b = parseFloat(elDruga.value);
        wynik = a  + b
        elBlok.innerHTML = wynik;
    }
}

elOdejmowanie.onclick = function(){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elBlok.innerHTML = 'Proszę uzupełnić obie liczby';
    }else{
        var a = parseFloat(elPierwsza.value);
        var b = parseFloat(elDruga.value);
        wynik = a  - b
        elBlok.innerHTML = wynik;
    }
}

elMnozenie.onclick = function(){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elBlok.innerHTML = 'Proszę uzupełnić obie liczby';
    }else{
        var a = parseFloat(elPierwsza.value);
        var b = parseFloat(elDruga.value);
        wynik = a  * b
        elBlok.innerHTML = wynik;
    }
}

elDzielenie.onclick = function(){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elBlok.innerHTML = 'Proszę uzupełnić obie liczby';
    }else if (elDruga.value == 0){
        elBlok.innerHTML = 'Nie wolno dzielić przez zero';
              }
     else {
        var a = parseFloat(elPierwsza.value);
        var b = parseFloat(elDruga.value);
        wynik = a  / b
        elBlok.innerHTML = wynik;
    }
}

//****************************  POTĘGOWANIE  *********************************

var elPodstawa = document.getElementById('podstawa');
var elWykladnik = document.getElementById('wykladnik');
var elPotegowanie = document.getElementById('potegowanie');
var elWynikPotegi = document.getElementById('wynikPotegi');

elPotegowanie.onclick = function(){
    if (elPodstawa.value == '' || elWykladnik.value == ''){
        elWynikPotegi.innerHTML = 'Wpisz podstawę i wykładnik potęgi';
    }else{

    }
}












