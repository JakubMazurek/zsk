//Math.sqrt()

/*var x = prompt('Podaj wartość');
console.log(Math.sqrt(x));*/

var a = 13.2;
var b = 28.5;
var c = 1;

var minimalna = Math.min(a,b,c);
var maksymalna = Math.max(a,b,c);
console.log(minimalna);
console.log(maksymalna);
var zaokraglenie = Math.round(a);
console.log(zaokraglenie);

//abs, round, floor

var x = -56;
var y = -13.1;
var z = 14.9;

/*document.write('<br>' + Math.abs(x) + '<br>');
document.write('<br>' + Math.abs(y) + '<br>');
document.write('<br>' + Math.abs(z) + '<br>');

document.write('<br>' + Math.round(x) + '<br>');
document.write('<br>' + Math.round(y) + '<br>');
document.write('<br>' + Math.round(z) + '<br>');

document.write('<br>' + Math.floor(x) + '<br>');
document.write('<br>' + Math.floor(y) + '<br>');
document.write('<br>' + Math.floor(z) + '<br>');*/

//potęgowanie

var p = Math.pow(2,10);
console.log(p);

//losowanie

var losuj = Math.random();
console.log(losuj);

//losuj z przedziału (0;10>

console.log(Math.floor(Math.random() * 11));


