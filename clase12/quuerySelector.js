// para acceder a los elementos de una página, usamos selectores.
// cada selector puede retornar un solo elemento o una lista de elementos.

// querySelector();
// recibe un string que indica el selector CSS del elemento de DOM que estamos buscando.
// retorna el primer elemento del HTML que contenga lo que estamos buscando.
let titulo = document.querySelector("title");
let h2 = document.querySelector("h2");

console.log(titulo.textContent);
console.log(h2.textContent);


// querySelectorAll();
// idem, solo que retorna una lista de elementos (NodeList) que coincidan con la busqueda
let h2_all = document.querySelectorAll("h2");

// para acceder a los elementos de h2 se itera sobre la NodeList con forEach()
h2_all.forEach(h2 => {
    console.log(h2.textContent);
});


// getElementById();
// recibe un String con unicamente el nombre del id del elemento de DOM que estamos buscando.

// ejemplo:
// retorna el elemento cuyo id coincide con "marca" o "#marca"
let marca = document.getElementById("marca");