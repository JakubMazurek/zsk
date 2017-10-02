var imie = document.getElementById('imie');
var nazwisko = document.getElementById('nazwisko');
var login = document.getElementById('login');
var mail1 = document.getElementById('mail1');
var mail2 = document.getElementById('mail2');
var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');
var data = document.getElementById('data');
var regulamin = document.getElementById('regulamin');
var popraw = document.getElementById('popraw');
var przycisk = document.getElementById('przycisk');
var blok = document.getElementById('blok');
var weryfikuj = 0;

blok.style.color = 'red';

var regImie = /^[A-z]{2,16}$/;
var regNazwisko = /^[A-z]{2,25}(\-[A-z]{2,25})?$/;
var regLogin = /^(\w|\W){4,25}$/;
var regMail = /^[A-z](\w|\.|\-){0,30}@(\w{1,20}\.){1,3}[A-z]{1,3}$/;
//Hasło: duże/małe litery, cyfry, znak specjalny, minimum 8 znaków
var regPass = /^((?=.*\d)(?=.*[A-z])(?=.*[\W|_]).{8,20})$/;


function sprawdzImie (){
    //var element = document.getElementById(this.id);
        //console.log(element);
    var sprawdz = regImie.test(imie.value);

    if (sprawdz){
        blok.textContent = '';
    }else{
        blok.textContent = 'Wpisz poprawnie imię';
        imie.focus();
    }
}


function sprawdzNazwisko (){
    //var element = document.getElementById(this.id);
        //console.log(element);
    var sprawdz = regNazwisko.test(nazwisko.value);

    if (sprawdz){
        blok.textContent = '';
    }else{
        blok.textContent = 'Wpisz poprawnie nazwisko';
        nazwisko.focus();
    }
}

function sprawdzLogin (){
    //var element = document.getElementById(this.id);
        //console.log(element);
    var sprawdz = regLogin.test(login.value);

    if (sprawdz){
        blok.textContent = '';
    }else{
        blok.textContent = 'Wpisz poprawnie login';
        login.focus();
    }
}

function mail (){
    if (mail1.value != mail2.value){
        blok.textContent = 'Adresy poczty wpisałeś różne!';
        mail1.disabled = false;
        mail2.disabled = true;
        mail1.value = '';
        mail2.value = '';
        mail1.focus();
    }else{
        mail1.disabled = true;
        mail2.disabled = true;
    }
}

function blokuj (){
    var sprawdz = regMail.test(mail1.value);
    if (sprawdz){
    blok.textContent = '';
    mail2.disabled = false;
    mail2.focus();
    mail1.disabled = true;
    }else{
        blok.textContent = 'Błędny adres poczty';
        mail1.focus();
    }
}

function pass (){
    if (pass1.value != pass2.value){
        blok.textContent = 'Hasła wpisałeś różne!';
        pass1.disabled = false;
        pass2.disabled = true;
        pass1.value = '';
        pass2.value = '';
        pass1.focus();
    }else{
        pass1.disabled = true;
        pass2.disabled = true;
    }
}


function passBlokuj() {
    var sprawdz = regPass.test(pass1.value);
    if(sprawdz){
        blok.textContent = '';
        pass2.disabled = false;
        pass2.focus();
        pass1.disabled = true;
    }else{
        blok.textContent = 'Hasło nie spełnia wymagań';
        pass1.focus();
    }

}

function sprawdzRegulamin() {
    if (regulamin.checked){
        przycisk.disabled = false;
    } else {
        przycisk.disabled = true;
    }
}

function odblokuj() {
    var zablokowane = document.getElementsByTagName('input');
    if (zablokowane.length > 0){
        for (var i=0; i<zablokowane.length; i++){
            if (zablokowane[i].disabled == true)
                zablokowane[i].disabled = false;
            //console.log(zablokowane);
        }

    }
}


var pom = document.getElementsByTagName("input");
function sprawdzanie(){
    for(var i =0; i<pom.length;i++){
        if(pom[i].value ==''){
            return true;
        }
    }
    return false;
}



function wyslij1() {
    if(sprawdzanie() == false){

        document.write('<div>');
        document.write('Imię: ' + imie.value + '<br>');
        document.write('Nazwisko: ' + nazwisko.value + '<br>');
        document.write('Login: ' + login.value + '<br>');
        document.write('Mail: ' + mail1.value + '<br>');
        document.write('Data urodzenia: ' + data.value + '<br>');
        document.write('</div>');
    }else{
        blok.innerHTML = "Zostawiłeś puste pola";
    }


}


imie.addEventListener('blur', sprawdzImie);
nazwisko.addEventListener('blur', sprawdzNazwisko);
login.addEventListener('blur', sprawdzLogin);
//mail1.addEventListener('blur', mail);
mail1.addEventListener('blur', blokuj);
pass1.addEventListener('blur', passBlokuj);
mail2.addEventListener('blur', mail);
pass2.addEventListener('blur', pass);
regulamin.addEventListener('change', sprawdzRegulamin);
popraw.addEventListener('click', odblokuj);
//przycisk.addEventListener('click', wyslij);
przycisk.addEventListener('click', wyslij1);


/*Zad.dom.

Użytkownik podaje z klawiatury nazwy zdjęć z rozszerzeniami.
nazwy nie moga miec cyfr, mogą buź pisane tylko małymi lietrami oraz nie mogą mieć znaków specjalnych, może być kropka. Wszystkie zdjęcia z rozszerzeniem *.jpg zapisz w tablicy o nazwie jpg a zdjęcia z bmp w tablicy bmp. Posortuj tablice roznąco i wyswietl na ekranie zawartość.*/

