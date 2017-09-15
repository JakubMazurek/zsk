/*function pi(){
    if(document.getElementById('wyborPI').checked){
        var x = Math.PI;
        document.getElementById('blok').innerHTML = x;
        //console.log(x);
    } else if (document.getElementById('wyborNic').checked){
        alert('Wybrałeś radio nic');
    } else {
        alert('Nic nie wybrałeś');
    }
}*/

var elWybor = document.getElementById('wyborPI');
var elWyborNic = document.getElementById('wyborNic');
var elBlok = document.getElementById('blok');

function pi(){
    if(elWybor.checked){
        var x = Math.PI;
        elBlok.innerHTML = x;
        //console.log(x);
    } else if (elWyborNic.checked){
        alert('Wybrałeś radio nic');
    } else {
        alert('Nic nie wybrałeś');
    }
}

//Math.sqrt()

var pierwiastek = Math.sqrt(25);
console.log(pierwiastek);

var a = 13.2;
var b = 28.5;

var minimalna = Math.min(a,b);
var maksymalna = Math.max(a,b);
console.log('Minimalna: ' + minimalna);
console.log('Maksymalna: ' + maksymalna);
var zaokraglenie = Math.round(b);
console.log(zaokraglenie);

var zaokMin = (Math.round(minimalna));
console.log(zaokMin);

//abs, rounf, floor

var x = -56;
var y = - 13.1;
var z = 14.9;

document.write('<br>' + Math.abs(x));   //56
document.write('<br>' + Math.abs(y));   //13.1
document.write('<br>' + Math.abs(z));   //14.9

document.write('<br>' + Math.round(x));   //-56
document.write('<br>' + Math.round(y));   //-13
document.write('<br>' + Math.round(z));   //15

document.write('<br>' + Math.floor(x));   //-56
document.write('<br>' + Math.floor(y));   //-14
document.write('<br>' + Math.floor(z));   //14


//potęgowanie

var p = Math.pow(2,10);
console.log(p); //1024

//random

var losuj = Math.random();
console.log(losuj);

//losuj z przedziału (0;10>)

console.log(Math.floor(Math.random() * 11));










