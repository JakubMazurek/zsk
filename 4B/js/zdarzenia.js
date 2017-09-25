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
    alert('sadsa');
}*/


/*imie.onblur = function (){
    if (imie.value.length > 2 && imie.value.length < 15){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błędne dane!';
    }
}*/


/*function sprawdz (){
     if (imie.value.length > 2 && imie.value.length < 15){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błędne dane!';
    }
}*/


function sprawdz (){
    var element = document.getElementById(this.id);
        //console.log(element);
    if (element.value.length > 2 && element.value.length < 15){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błędne dane!';
        element.focus();
    }
    }

function mail (){
    if (mail1.value != mail2.value){
        blok.textContent = 'Adresy poczty są różne!';
        mail1.disabled = false;
        mail1.value = '';
        mail2.value = '';
        mail1.focus();
    }else{
        mail1.disabled = true;
        mail2.disabled = true;
    }
}

function blokuj (){
    var blokuj = document.getElementById(this.id);
    blokuj.disabled = true;
}

imie.addEventListener('blur', sprawdz);
nazwisko.addEventListener('blur', sprawdz);
login.addEventListener('blur', sprawdz);
//mail1.addEventListener('blur', mail);
mail1.addEventListener('blur', blokuj);
mail2.addEventListener('blur', mail);






