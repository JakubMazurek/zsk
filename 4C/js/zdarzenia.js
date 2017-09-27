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

//onload

/*window.onload = function() {
    alert('asds');
}*/

/*elImie.onblur = function() {
    if (elImie.value.length > 2 && elImie.value.length < 10){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędne dane';
    }
}*/


/*function sprawdz() {
     if (elImie.value.length > 2 && elImie.value.length < 10){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędne dane';
    }
}*/


function sprawdz() {
     if (this.value.length > 2 && this.value.length < 10){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędne dane';
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
    elMail2.disabled = false;
    elMail2.focus();
    elMail1.disabled = true;
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
    elPass2.disabled = false;
    elPass2.focus();
    elPass1.disabled = true;
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


elImie.addEventListener('blur', sprawdz);
elNazwisko.addEventListener('blur', sprawdz);
elLogin.addEventListener('blur', sprawdz);
elMail2.addEventListener('blur', mail);
elMail1.addEventListener('blur', blokujMail);
elPass2.addEventListener('blur', pass);
elPass1.addEventListener('blur', blokujPass);
//elRegulamin.addEventListener('click', regulamin);
elRegulamin.addEventListener('change', regulamin);
elPopraw.addEventListener('click', odblokuj);
elPrzycisk.addEventListener('click', wyslij);
