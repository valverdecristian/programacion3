// un evento es una notificacion de que algo acaba de ocurrir, generalmente
// relacionada con el usuario que navega por la pagina.

// click, tecla especifica presionada, scroll, abrir un archivo, etc.

/* EVENTOS MAS USADOS:
    {onclick}           {onkeydown}
    {ondblclick}        {onload}
    {onmouseover}       {onfocus}
    {onmouseout}        {onblur}
    {onmousemove}       {onchange}
    {onscroll}          {onsubmit}
*/

// ONLOAD
// evento que permite que todo el script se ejecute cuando se haya
// cargado por completo el objeto document dentro del objeto window.

window.onload = ()=>{
    alert("se cargo el documento");
}


// ONCLICK
// evento que permite ejecutar una accion cuando se haga click sobre
// el elemento al cual se le aplica la propiedad.

const boton = document.querySelector(".btn")
boton.onclick = ()=>{
    alert("Hiciste click")
}


// preventDefault()
// permite evitar que se ejecute el evento predeterminado o nativo del elemento
// al que se lo estamos aplicando

const hipervinculo = document.querySelector("a")
const mensaje = () =>{
    alert("Presionaste la etiqueta A")
}

// cuando hago click se crea otro evento
hipervinculo.onclick = (event) =>{
    alert("Presionaste la etiqueta A");

    // previene que siga su curso (ejemplo abrir google)
    event.preventDefault();
}

// otra forma de hacer lo mismo
hipervinculo.addEventListener("click", (event)=>{
    alert("Presionaste la etiqueta A");
    event.preventDefault();
})

// ------------------------------------------
// EVENTOS DE MOUSE
let texto = document.querySelector(".text");

// ondblclick | doble click
texto.ondblclick = function(){
    console.log("hiciste doble click");
}

// tambien podriamos hacer
texto.addEventListener("dblclick", function(){
    console.log("hiciste doble click...");
})


// onmouseover | mouseover
texto.onmouseover = function(){
    console.log("pasaste el mouse");
}

// tambien podriamos hacer
texto.addEventListener("mouseover", function(){
    console.log("pasaste el mouse...");
})


// onmouseout | mouseout
texto.onmouseout = ()=>{
    console.log("quitaste el mouse");
}

// tambien
texto.addEventListener("mouseout", function(){
    console.log("quitaste el mouse...");
})

// ------------------------------------------
// EVENTOS DE TECLADO

// ejemplo de como manejar eventos de teclado: ejecuta acciones cuando el usuario interactua
// con el teclado mientras esta enfocado en un elemento de entrada, como un campo de texto.

// onkeydown
// este evento se lanza cuando la tecla se presiona.
// el evento keydown es lanzado para las teclas que producen un caracter
// y tambien para las que no lo producen (como las flechas, Enter, Espacio, etc)

let miInput = document.querySelector("#miInput");
miInput.onkeydown = (event)=>{
    alert(`se presiono la tecla: ${event.key}`);
}

// onkeyup
// el evento se inicia cuando la tecla es soltada
miInput.onkeyup = (event)=>{
    alert(`Se solto la tecla ${event.key}`);
}

// onkeypress
// se dispara al completar el proceso de presion y liberacion de la tecla que genera un caracter

miInput.onkeypress = (event)=>{
    alert(`se presiono la tecla: ${event.key}`);
}