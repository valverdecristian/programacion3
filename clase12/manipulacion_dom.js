// Vinculacion de JS con HTML (externa)
// por lo general va al final del body del HTML
document.write("aca escribimos codigo JS");

// DOM: Document Object Model

/* ¿Que nos permite hacer JS con el DOM?
    > Modificar elemenos, atributos y estilos de una pagina.
    > Borrar cualquier elemento y atributo.
    > Agregar nuevos elementos o atributos.
    > Reaccionar a todos los eventos HTML de la pagina
    > Crear nuevos eventos HTML en la pagina.

*/

// el objeto window es lo primero que se carga en el navegador
// el objeto document representa al HTML y nos va a dar una interfaz, un
// conjunto de atributos y de metodos para poder efectivamente leer lo
// que tenemos en el HTML y si quisieramos modificarlo.
// el objeto document es cargado dentro del objeto window


// MODIFICANDO EL DOM
// para esto se debe tener seleccionado el objeto a modificar.

// 1) innerHTML
// para leer o modificar el contenido de un elemento HTML incluyendo etiquetas.
let leer = document.querySelector("h3.nombre").innerHTML;
console.log(leer);

// Modificamos el contenido del elemento <h3> con la clase "modificar"
document.querySelector("h3.modificar").innerHTML = "Texto modificado con <strong>innerHTML...</strong>";

// Recuperamos el valor modificado para usarlo luego
let modificado = document.querySelector("h3.modificar").innerHTML;

// Usamos document.write() para escribir en la página el contenido modificado
document.write(modificado);

// si no queremos perder el contenido de la etiqueta y queremos modificarlo usamos el +=


// 2) innerText
// para leer o modificar el texto que posee un elemento, sin incluir HTML
// en este caso lo usamos para modificar el contenido
// para incluir mas texto usamos +=
document.querySelector("h3.modificar").innerText;
document.querySelector("h3.modificar").innerText += "Ademas agregamos texto.";


// -----------------------------------------
// MODIFICANDO EL DOM: Estilo Dinamico

// propiedad style
// nos permite leer y sobreescribir las reglas CSS.

let parrafo = document.querySelector(".parrafo");

parrafo.style.color = "blue";
parrafo.style.textAling = "center";
parrafo.style.fontSize = "12px";
parrafo.style.backgroundColor = "#dddddd";


// --------------------------------------------
// appendChild()
// metodo que se usa para agregar(o "anexar") un nodo como hijo al final de
// otro nodo en el DOM. Sirve para insertar un nuevo elemento dentro de otro ya existente
const btn = document.createElement("button");
btn.innerText = "Enviar";

// capturamos el div
const contenedor = document.querySelector(".contenedor");
contenedor.appendChild(btn);