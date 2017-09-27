var auta = document.getElementById('auta');
var ulubioneAuto = document.getElementById('ulubioneAuto');

function mojeAuto() {
    ulubioneAuto.textContent = auta.value;
}

auta.addEventListener('change', mojeAuto);
