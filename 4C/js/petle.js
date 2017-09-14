//***************   pętla for  **************************


/*for (var i = 0; i < 10; i++){
    document.write(i);
    if(i==7){
       break;
    }
}*/

//losuj 10 liczb z przedziału <10;100>

/*for(var i=0; i< 10; i++){
    document.write(Math.floor(Math.random() * 91 + 10) + '<br>');
}*/



/*for(var j = 1; j <= 10;  j++){
    if( j == 1){
        document.write(j + ' raz<br>');
    }else{
        document.write(j + ' razy<br>');
    }
}*/

/*uzytkownik podaje z klawiatury wartosc poczatkowa i koncowa petli, pokazdej liczbi dodaj przecinek a tylko po ostatniej liczbie podaj kropke. Pierwsza liczba musi być mniejsza od drugiej*/

/*var i = prompt('Podaj wartość początkową');
i = parseInt(i);
var j = prompt('Podaj wartość początkową');
j = parseInt(j);

if(i<j){
        for(; i <= j; i++){
            if (i != j){
              document.write(i + ', ');
            }else{
                document.write(i + '.')
            }
        }
}else{
    alert('i nie jest mniejsze od j!!!');
}*/


//***************   pętla while  **************************

/*var i = 0;
while(i++ < 5){
    document.write(i + '<br>');
}*/

/*
var wiek;
wiek = prompt('Podaj wiek');
var wiek1 = 18;

while(wiek != wiek1){
    wiek = prompt('Podaj wiek');
    if (wiek == wiek1){
        document.write('Masz 18 lat');
    }
}

if (wiek  == 18){
    document.write('Masz 18 lat');
}
*/

//******************  pętla do while  *******************

/*do{
    var wiek = prompt('Podaj wiek');
    if(wiek == 18){
        document.write('Masz 18 lat');
    }
}
while(wiek != 18)*/

/*Podaj 5 liczb podzielnych przez 2 z klawiatury. Zapisz je do tablicy i wyświetl na stronie.*/

var liczby = [];
var x;
for(var i = 0; i <= 4; i++){
    do{
        x = prompt('Podaj x');
    }
    while(x % 2 != 0)

    liczby[i] = x;
}
console.log(liczby);

//110 linia kodu  kartkówka na następnej lekcji

