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


//onload

/*window.onload = function (){
    alert('test');
}*/

/*imie.onblur = function (){
    if (imie.value.length > 2 && imie.value.length < 10){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błędne dane!';
    }
}*/


/*function sprawdz (){
    if (imie.value.length > 2 && imie.value.length < 10){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błędne dane!';
    }
}*/


function sprawdz(){
    //var element = document.getElementById(this.id);
    //console.log(element);
    if (this.value.length  >2 && this.value.length < 10){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błęde dane!';
        this.focus();
    }
}


function mail (){
    if (mail1.value != mail2.value){
        blok.textContent = 'Adresy poczty są różne!';
        mail1.value = '';
        mail2.value = '';
        mail1.focus();
        mail2.disabled = true;
    }else{
        mail1.disabled = true;
        mail2.disabled = true;
        blok.textContent = '';
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


function blokuj (){

    mail2.disabled = false;
    mail2.focus();
}

function blokujPass (){

    pass2.disabled = false;
    pass2.focus();
}

function sprawdz (){
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
    document.write('<div>');
    document.write('Imię: ' + imie.value);
    document.write('<br>Nazwisko: ' + nazwisko.value);
    document.write('<br>Login: ' + login.value);
    document.write('<br>Mail: ' + mail1.value);
    document.write('<br>Data urodzenia: ' + data.value);
    document.write('</div>');
}


imie.addEventListener('blur', sprawdz);
nazwisko.addEventListener('blur', sprawdz);
login.addEventListener('blur', sprawdz);
mail1.addEventListener('blur', blokuj);
pass1.addEventListener('blur', blokujPass);
mail2.addEventListener('blur', mail);
pass2.addEventListener('blur', pass);
//regulamin.addEventListener('click', sprawdz);
regulamin.addEventListener('change', sprawdz);
popraw.addEventListener('click', odblokuj);
przycisk.addEventListener('click', wyslij);



