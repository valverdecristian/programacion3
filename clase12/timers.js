const delay = 3000; // tiempo, intervalo

// setTimeout
// para determinar cuando ejecutar nuestro codigo.

setTimeout(miFuncionTimeout, delay);
function miFuncionTimeout(){
    alert("Este es mi anuncio");
}
// miFunccion se ejecuta por callback cuando se cumpla el tiempo determinado.


// setInterval
// para que nuestro codigo se ejecute una y otra vez, pasado un tiempo determinado

setInterval(miFuncionInterval,delay);
function miFuncionInterval(){
    alert("Anuncio repetido");
}


// clearTimeout y clearInterval
// para detener la ejecucion de un timer
// Se debe guardar el ID del tiempo o intervalo en una variable.
const miIntervalo = setInterval(miFuncion, delay);
function miFuncion(){
    alert("Este es mi anuncio repetido")
}
clearInterval(miIntervalo);