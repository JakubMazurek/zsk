//Arkusz E.14-01-15.01

elPierwsza = document.getElementById('pierwsza');
elDruga = document.getElementById('druga');

elDodawanie = document.getElementById('dodawanie');
elOdejmowanie = document.getElementById('odejmowanie');
elMnozenie = document.getElementById('mnozenie');
elDzielenie = document.getElementById('dzielenie');

elWynik = document.getElementById('wynik');

elDodawanie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = 'Proszę uzupełnić obie liczby';
    }else{
        var wynik = parseFloat(elPierwsza.value) + parseFloat(elDruga.value);
        elWynik.innerHTML = 'Suma wynosi: ' + wynik;
    }

}


elOdejmowanie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = 'Proszę uzupełnić obie liczby';
    }else{
        var wynik = parseFloat(elPierwsza.value) - parseFloat(elDruga.value);
        elWynik.innerHTML = 'Różnica wynosi: ' + wynik;
    }

}

elDzielenie.onclick = function (){
    if (elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = 'Proszę uzupełnić obie liczby';
    }else if (elDruga.value == 0){
        elWynik.innerHTML = 'Nie wolno dzielić przez zero';
    }
    else{
        var wynik = parseFloat(elPierwsza.value) / parseFloat(elDruga.value);
        elWynik.innerHTML = 'Iloraz wynosi: ' + wynik;
    }

}


/*FizzBuzz
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
}*/




