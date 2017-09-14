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





