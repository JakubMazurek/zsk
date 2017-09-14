/*function pi(){
   if (document.getElementById('wyborPi').checked == true){
       document.getElementById('blok').innerHTML = Math.PI;
   } else if (document.getElementById('wyborNic').checked == true){
       document.getElementById('blok').innerHTML = '';
       alert('wybrałeś nic');
   } else {
       alert('Nic nie wybrałeś');
   }
}*/

var elBlok = document.getElementById('blok');
var elWyborPi = document.getElementById('wyborPi');
var elNic = document.getElementById('wyborNic');

function pi(){
   if (elWyborPi.checked == true){
       elBlok.innerHTML = Math.PI;
   } else if (elNic.checked == true){
       elBlok.innerHTML = '';
       alert('wybrałeś nic');
   } else {
       alert('Nic nie wybrałeś');
   }
}

//Math.sqrt()

var pierwiastek = Math.sqrt(25);
console.log(pierwiastek);

//round, min, max

var a = 13.2;
var b = 28.5;

var minimalna = Math.min(a,b);
var maksymalna  = Math.max(a,b);
console.log('Minimalna: ' + minimalna);
console.log('Maksymalna: ' + maksymalna);
var zaokraglenie = Math.round(b);
console.log(zaokraglenie);
var zaokMin = Math.round(minimalna);
console.log(zaokMin);

//abs, round, floor

var x = -56;
var y = -13.1;
var z = 14.9;

document.write('<br>' + Math.abs(x) + '<br>'); //56
document.write(Math.abs(y) + '<br>'); //13.1
document.write(Math.abs(z) + '<br>'); //14.9

document.write('<br>' + Math.round(x) + '<br>'); //-56
document.write(Math.round(y) + '<br>'); //-13
document.write(Math.round(z) + '<br>'); //15

document.write('<br>' + Math.floor(x) + '<br>'); //-56
document.write(Math.floor(y) + '<br>'); //-14
document.write(Math.floor(z) + '<br>'); //14

//potęgowanie

var p = Math.pow(2,10);
console.log(p); //1024

//random

var losuj = Math.random();
console.log(losuj); //0.6038861126085373

//losuj z przedziału (0;10>

var losuj1 = Math.floor(Math.random() * 11);
console.log(losuj1);






