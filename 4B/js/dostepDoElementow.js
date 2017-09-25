//Metoda getElementById()

var elPierwszy = document.getElementById('pierwszy');
console.log(elPierwszy);
elPierwszy.className = 'niebieski';

//Metoda getElementsByTagName()

var elNaglowek = document.getElementsByTagName('h2');
if(elNaglowek.length > 0){
    console.log(elNaglowek);
    elNaglowek[0].className = 'niebieski';
}

//Metoda getElementsByClassName()

var elCzerwony = document.getElementsByClassName('czerwony');
if(elCzerwony.length > 0){
    console.log(elCzerwony);
}
    //metoda szybsza
    var ostatni = elCzerwony[elCzerwony.length - 1];

    //metoda wolniejsza
    //var ostatni = elCzerwony.item(elCzerwony.length -1);

    ostatni.className = 'niebieski';


//Metoda getElementsByName()

    var auto = document.getElementsByName('auto');
    auto[1].className = 'niebieski';
    console.log(auto);


//Metoda querySelector

//zwraca pierwszą wartość

//var auto1 = document.querySelector('li');
/*var auto1 = document.querySelector('li.niebieski');
auto1.className = 'czerwony';*/


//Metoda querySelectorAll

/*
var naglowek2 = document.querySelectorAll('h2');
console.log(naglowek2);
naglowek2[1].className = 'czerwony';
*/

/*var elPrzycisk = document.getElementById('przycisk');

var klub = document.getElementsByName('sport');
elPrzycisk.onclick = function (){
    console.log(klub);

    for (var i=0; i<klub.length; i++){
        klub[i].className = 'niebieski';
    }
}*/

//forEach

var elPrzycisk = document.getElementById('przycisk');
var elSport = document.getElementsByName('sport');

function zmien (element, indeks){
    elSport[indeks].className = 'niebieski'
}

elPrzycisk.onclick = function (){
    elSport.forEach(zmien);
}





/*przycisk.onclick = function(){

}


}*/


/*zad. dom.

FizzBuzz
Zadanie brzmi: Napisz program, który wyświetla liczby od 1 do 100. Dla liczb podzielnych przez 3 niech program wyświetli „Fizz”; dla liczb podzielnych przez 5 niech wyświetli ‚Buzz’; a dla liczb podzielnych przez 15 niech wyświetli ‚FizzBuzz’.*/


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





