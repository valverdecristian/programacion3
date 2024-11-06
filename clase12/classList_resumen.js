// classList.add()
// nos permite agregar al elemento que tengamos seleccionado, una clase nueva

let cita = document.querySelector(".cita");
cita.classList.add("italicas");
// resultado: <p class="cita italicas">lorem</p>


// classList.remove()
// permite quitar una clase existente al elemento
cita.classList.remove("cita");


// classList.toggle()
// revisa si existe una clase en el elemento seleccionado, de ser asi la remueve,
// de lo contrario, si la clase no existe, la agrega.
// util para alternar estados
cita.classList.toggle("italicas");


// classList.contains()
// nos permite preguntar si un elemento tiene una clase determinada.
// devuelve un valor booleano.
// se puede usar para condicionales y/o verificar si tal elemento tiene una clase antes de hacer cambios.
let cita2 = document.querySelector(".italicas");
cita2.classList.contains("cita"); // false
cita2.classList.contains("italicas") // true;