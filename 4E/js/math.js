/*var pi = Math.PI;
console.log(pi);*/

/*var x = prompt('Podaj wartość');
console.log(Math.sqrt(x));*/

var a = 13.2;
var b = 28.5;
var c = 1;

var minimalna = Math.min(a,b,c);
console.log(minimalna);

var maksymalna = Math.max(a,b,c);
console.log(maksymalna);

var zaokraglenie = Math.round(b);
console.log(zaokraglenie);

//abs, round, floor

var x = -56;
var y = -13.1;
var z = 14.9;

document.write('<br>' + Math.abs(x) + '<br>');
document.write('<br>' + Math.abs(y) + '<br>');
document.write('<br>' + Math.abs(z) + '<br>');

document.write('<br>' + Math.round(x) + '<br>');
document.write('<br>' + Math.round(y) + '<br>');
document.write('<br>' + Math.round(z) + '<br>');

document.write('<br>' + Math.floor(x) + '<br>');
document.write('<br>' + Math.floor(y) + '<br>');
document.write('<br>' + Math.floor(z) + '<br>');

//potęgowanie

var p = Math.pow(2,10);
console.log(p);

//losowanie

var losuj = Math.random();
console.log(losuj);

var k = 3.8678657564;
k = k.toFixed(2);   //3.87
console.log(typeof(k));
document.write(k + '<br>');

var j = 3.8678657564;
console.log(typeof(j)); //number
j = j.toPrecision(2);   //3.9
document.write(j);
console.log(typeof(j)); //string

//losowanie

//losuj z przedziału (0;10>

var l = Math.floor(Math.random() * 11);
console.log(l);


//losuj z przedziału <90;100>

var ll = Math.floor(Math.random() * 11 + 90);
console.log(ll);

//**********************************************************


var elPi = document.getElementById('pi');
var elNic = document.getElementById('nic');
var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('wynik');

elPrzycisk.onclick = function (){
    if(elPi.checked){
        elWynik.innerHTML = Math.PI;
    }else if(elNic.checked){
        elWynik.innerHTML = 'Wybrałeś radio button nic';
    }else{
        elWynik.innerHTML = 'Nic nie wybrałeś';
    }
}














