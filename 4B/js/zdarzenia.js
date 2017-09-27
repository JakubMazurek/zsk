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


function blokuj (){
    var blokuj = document.getElementById(this.id);
    blok.textContent = '';
    mail2.disabled = false;
    mail2.focus();
    blokuj.disabled = true;
}

function passBlokuj() {
    var blokuj = document.getElementById(this.id);
    blok.textContent = '';
    pass2.disabled = false;
    pass2.focus();
    blokuj.disabled = true;
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

/*
function wyslij() {

    var puste = false;
    var inputs = document.querySelectorAll("input");
    for(var i=0; i<inputs.length-1; i++) {
        if(inputs[i].value == "") {
            puste = true;
            break;
        }
    }

    if(puste) {
        blok.textContent = "Musisz wypełnić wszystkie pola!";
    } else {
        document.write('<div>');
        document.write('Imię: ' + imie.value + '<br>');
        document.write('Nazwisko: ' + nazwisko.value + '<br>');
        document.write('Login: ' + login.value + '<br>');
        document.write('Mail: ' + mail1.value + '<br>');
        document.write('Data urodzenia: ' + data.value + '<br>');
        document.write('</div>');
    }

}
*/
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






imie.addEventListener('blur', sprawdz);
nazwisko.addEventListener('blur', sprawdz);
login.addEventListener('blur', sprawdz);
//mail1.addEventListener('blur', mail);
mail1.addEventListener('blur', blokuj);
pass1.addEventListener('blur', passBlokuj);
mail2.addEventListener('blur', mail);
pass2.addEventListener('blur', pass);
regulamin.addEventListener('change', sprawdzRegulamin);
popraw.addEventListener('click', odblokuj);
//przycisk.addEventListener('click', wyslij);
przycisk.addEventListener('click', wyslij1);



