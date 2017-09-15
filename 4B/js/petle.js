//********************    pętle for   ******************

/*for (var i = 0; i <= 10; i++){
    document.write(i);
    if (i == 6){
        break;
    }
}*/

//losuj 10 liczb z przedziału od <10;100>

/*for (var i = 0; i <= 10; i++){
    document.write(Math.floor(Math.random() * 91 + 10) + '<br>');
}*/


/*for (var i = 1; i <= 10; i++){
    if(i == 1){
        document.write(i + ' raz<br>');
    }else{
        document.write(i + ' razy<br>');
    }
}*/


/*Użytkownik podaje z kalwiatury wartość  początkową i końcową pętli, po każdej liczbie dodaj przecinek a tylko po ostatniej liczbie dodaj kropkę. Pierwsza liczba musi byćmniejsza od drugiej.*/

var i = prompt('Podaj wartość początkową');
var j = prompt('Podaj wartość końcową');
i = parseInt(i);
j = parseInt(j);

if (i < j){
    for(; i <= j; i++){
        if(i != j ){
           document.write(i + ', ');
        }else{
            document.write(i + '.')
        }

    }
}else{
    alert('Błędne dane!');
}












