var auto = document.getElementById('auta');
var ulubioneAuto = document.getElementById('ulubioneAuto');

function mojeAuto() {
    var ulubione = auto.value;
    ulubioneAuto.textContent = 'Twoje ulubione auto: ' + ulubione;
}

auto.onchange = mojeAuto;


/*zad. dom.
Użytkownik z klawiatury wpisuje w formularzu swoje hasło w dwóch polach
wykorzystaj zdarzenie onchange, które będzie w bloku wyśiwetlało czy hasla są takie same i mają minimum 5 znaków a maksymalnie 12 znaków*/

