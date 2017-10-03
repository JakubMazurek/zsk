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
blok.style.color = 'red';

var regImie = /^[a-z]{2,10}$/i;
var regNazwisko = /^[a-ząśćęńół]{2,20}(\-[a-ząśćęńół]{2,20})?$/i;

/*wp.pl   Możesz użyć liter i cyfr oraz kropki, myślnika i znaku podkreślenia jako separatora.*/
var regLogin = /^[a-z0-9]{1}[\w\.\-]{1,30}[a-z0-9]{1}$/i;
var regMail = /^[a-z]{1}[\w|\.|\-]{0,30}@(\w{1,20}\.){1,3}[a-z]{1,3}$/i;
var regPass = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,35})$/;


function sprawdzImie(){
    var imieSprawdz = regImie.test(imie.value);
    if (imieSprawdz){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błąd w imieniu!';
        this.focus();
    }
}

function sprawdzNazwisko(){
    var nazwiskoSprawdz = regNazwisko.test(nazwisko.value);
    if (nazwiskoSprawdz){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błąd w nazwisku!';
        this.focus();
    }
}

function sprawdzLogin(){
    var loginSprawdz = regLogin.test(login.value);
    if (loginSprawdz){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błąd w loginie!';
        this.focus();
    }
}


function mail() {
    var mailSprawdz = regMail.test(mail2.value);
    if (mail1.value != mail2.value){
        blok.textContent = 'Adresy poczty wpisałeś błędnie!';
        mail1.value = '';
        mail2.value = '';
        mail2.disabled = true;
        mail1.disabled = false;
        mail1.focus();
    }else{
        mail1.disabled = true;
        mail2.disabled = true;
        blok.textContent = '';
    }
}


function blokuj (){
    var mailSprawdz = regMail.test(mail1.value);
    if (mailSprawdz){
    mail2.disabled = false;
    mail2.focus();
    mail1.disabled = true;
    blok.textContent = '';
}else{
    mail1.focus();
    blok.textContent = 'Błędny pierwszy mail!';
}
}


function pass (){
    if (pass1.value != pass2.value){
        blok.textContent = 'Hasła są różne!';
        pass1.value = '';
        pass2.value = '';
        pass1.focus();
        pass2.disabled = true;
    }else{
        pass1.disabled = true;
        pass2.disabled = true;
        blok.textContent = '';
    }
}


function blokujPass (){
    var sprawdz = regPass.test(pass1.value);
    if (sprawdz){
    blok.textContent = '';

    pass2.disabled = false;
    pass2.focus();
    }else{
        blok.textContent = 'Hasło nie spełnia wymagań!';
        pass1.focus();
        pass1.value = '';
    }

}

function regulaminTest (){
    if(regulamin.checked==true){
        przycisk.disabled = false;
    }else{
        przycisk.disabled = true;
    }

}


function odblokuj (){
    var blokowane = document.getElementsByTagName('input');
    if (blokowane.length > 0){
    for (var i=0; i<blokowane.length; i++){
        //console.log(blokowane[i]);
        if(blokowane[i].disabled == true){
            blokowane[i].disabled = false;
        }
}
    }
}




function wyslij (){
    var imiePoprawne = imie.value;
    var nazwiskoPoprawne = nazwisko.value;

    imiePoprawne = imiePoprawne.charAt(0).toUpperCase() + imiePoprawne.slice(1).toLowerCase();


    nazwiskoPoprawne = nazwiskoPoprawne.charAt(0).toUpperCase() + nazwiskoPoprawne.slice(1).toLowerCase();

    var regMyslnik = /[-]/;
    var sprawdz = regMyslnik.test(nazwisko.value);
    if (sprawdz){
        var myslnik = nazwiskoPoprawne.indexOf('-');

    }

  /* zad.dom. dokończyć nazwisko jeśli ma myślnik
   Dane moga być wysłane jeśli wszystkie pola są wypełnione, zaznaczony jest regulamin oraz wybrana jest data mniejsza niż teraźniejsza*/

    document.write('<div>');
    document.write('Imię: ' + imiePoprawne);
    document.write('<br>Nazwisko: ' + nazwiskoPoprawne);
    document.write('<br>Login: ' + login.value);
    document.write('<br>Mail: ' + mail1.value);
    document.write('<br>Data urodzenia: ' + data.value);
    document.write('</div>');
}


imie.addEventListener('blur', sprawdzImie);
nazwisko.addEventListener('blur', sprawdzNazwisko);
login.addEventListener('blur', sprawdzLogin);
mail1.addEventListener('blur', blokuj);
pass1.addEventListener('blur', blokujPass);
mail2.addEventListener('blur', mail);
pass2.addEventListener('blur', pass);
//regulamin.addEventListener('click', sprawdz);
regulamin.addEventListener('change', regulaminTest);
popraw.addEventListener('click', odblokuj);
przycisk.addEventListener('click', wyslij);



