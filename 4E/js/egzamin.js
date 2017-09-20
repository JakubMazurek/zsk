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
