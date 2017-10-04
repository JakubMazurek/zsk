var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elPass1 = document.getElementById('pass1');
var elPass2 = document.getElementById('pass2');
var elData = document.getElementById('data');
var elRegulamin = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');
var elKomunikat = document.getElementById('komunikat');

var regImie = /^[a-ząężćńóńł]{2,32}$/i;
var regNazwisko = /^[a-ząężćńóńł]{2,32}(\-[a-ząężćńóńł]{2,32})?$/i;
//Możesz użyć liter i cyfr oraz kropki, myślnika i znaku podkreślenia jako separatora (login)
var regLogin = /^[a-z0-9]{1}[\w\.-]{4,30}[a-z0-9]{1}$/i;
var regMail = /^[a-z]{1}[\w\.\-]{0,30}@(\w{1,20}\.){1,7}[a-z]{1,3}$/i;
//Hasło musi byc bezpieczne tzn. małe litery, duże litery, cyfry, znak specjalny min. 8 znaków
var regPass = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,35})$/;

function sprawdzImie() {
     var sprawdz = regImie.test(elImie.value);
     if (sprawdz){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędne imię';
        this.focus();
    }
}

function sprawdzNazwisko() {
     var sprawdz = regNazwisko.test(elNazwisko.value);
     if (sprawdz){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędne nazwisko';
        this.focus();
    }
}

function sprawdzLogin() {
     var sprawdz = regLogin.test(elLogin.value);
     if (sprawdz){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędny login';
        this.focus();
    }
}

function mail() {
    if (elMail1.value != this.value){
        //różne
        elMail1.value = '';
        this.value = '';
        elMail1.disabled = false;
        elMail1.focus();
        this.disabled = true;
        elKomunikat.textContent = 'Adresy poczty są różne';
    } else {
        //równe
        elKomunikat.textContent = '';
        this.disabled = true;
    }
}

function blokujMail() {
    var sprawdz = regMail.test(elMail1.value);
    if (sprawdz){
        elMail2.disabled = false;
        elMail2.focus();
        elMail1.disabled = true;
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = 'Mail nie spełnia wymagań';
        elMail1.focus();
    }



}


//***********************************


function pass() {
    if (elPass1.value != this.value){
        //różne
        elPass1.value = '';
        this.value = '';
        elPass1.disabled = false;
        elPass1.focus();
        this.disabled = true;
        elKomunikat.textContent = 'Hasła są różne';
    } else {
        //równe
        elKomunikat.textContent = '';
        this.disabled = true;
    }
}

function blokujPass() {
    var sprawdz = regPass.test(elPass1.value)
    if (sprawdz){
        elPass2.disabled = false;
        elPass2.focus();
        elPass1.disabled = true;
        elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent = 'Hasła nie spełnia wymagań';
        elPass1.focus();
    }

}

function regulamin() {
    if (this.checked){
        elPrzycisk.disabled = false;
    } else {
        elPrzycisk.disabled = true;
    }
}

function odblokuj() {
    var zablokowane = document.querySelectorAll('input[disabled]');
    if (zablokowane.length > 0){
        for (var i=0; i<zablokowane.length; i++){
            zablokowane[i].disabled = false;
        }
    }
    //console.log(zablokowane);
}

function wyslij() {
    document.write('<div>');

    document.write('Imię: ' + '<span class="kolor">' + elImie.value + '</span>' + '<br>');
    document.write('Nazwisko: ' + '<span class="kolor">' + elNazwisko.value + '</span>' + '<br>');
    document.write('Login: ' + '<span class="kolor">' + elLogin.value + '</span>' + '<br>');
    document.write('Adres poczty: ' + '<span class="kolor">' + elMail1.value + '</span>' + '<br>');
    document.write('Data urodzenia: ' + '<span class="kolor">' + elData.value + '</span>' + '<br>');
    document.write('</div>');
}


elImie.addEventListener('blur', sprawdzImie);
elNazwisko.addEventListener('blur', sprawdzNazwisko);
elLogin.addEventListener('blur', sprawdzLogin);
elMail2.addEventListener('blur', mail);
elMail1.addEventListener('blur', blokujMail);
elPass2.addEventListener('blur', pass);
elPass1.addEventListener('blur', blokujPass);
elRegulamin.addEventListener('change', regulamin);
elPopraw.addEventListener('click', odblokuj);
elPrzycisk.addEventListener('click', wyslij);

/*zad.dom. Zamień wielkość liter w imieniu(pierwsza duża następne małe), zamień wielkośćliter w nazwisku np. kOWaL-jANosz  (Kowal-Janosz
Data musi być mniejsza od daty dzisiejszej
*/
