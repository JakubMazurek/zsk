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


//*********************  Zadanie rekrutacyjne  ************************


/*zad. dom.

FizzBuzz
Zadanie brzmi: Napisz program, który wyświetla liczby od 1 do 100. Dla liczb podzielnych przez 3 niech program wyświetli „Fizz”; dla liczb podzielnych przez 5 niech wyświetli ‚Buzz’; a dla liczb podzielnych przez 15 niech wyświetli ‚FizzBuzz’.*/

/*An example of a Fizz-Buzz question is the following:
Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
Most good programmers should be able to write out on paper a program which does this in a under a couple of minutes. Want to know something scary? The majority of comp sci graduates can't. I've also seen self-proclaimed senior programmers take more than 10-15 minutes to write a solution.*/

/*for (var i=1; i<=100; i++){
    if (i%15 == 0){
        document.write('FizzBuzz<br>');
    }else if(i%3 == 0){
        document.write('Fizz<br>');
    }else if (i%5 == 0){
        document.write('Buzz<br>')
    }else{
        document.write(i + '<br>');
    }
}*/


/*for (var i=1; i<=100; i++){
    if(i%3 ==0 || i%5 == 0){
        if(i%3==0) document.write('Fizz');
        if(i%5==0) document.write('Buzz');
    }
else{
    document.write(i);
}
    document.write('<br>');
}*/


/*for (var i=1; i<=100; i++){
    if (i%3 == 0)
        document.write('Fizz');
    if (i%5 == 0)
        document.write('Buzz');
    else if (i%3 != 0)
        document.write(i);
    document.write('<br>');
} */






