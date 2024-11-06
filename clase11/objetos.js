// OBJETOS
const celular = {
   /*  clave : valor */
   marca : "Motorola",
   modelo : "V3",
   stock: true,

   //metodos: funciones que estan dentro de un objeto
   encender : function (){
   return(` celular : ${this.marca} ${this.modelo}  ENCENDIDO`);
   
   }
 /*   encender : ()=> (` celular : ${this.marca} ${celular.modelo} ENCENDIDO`) */
}

console.log(celular);

// notacion de puntos
console.log(celular.modelo);
console.log(celular.encender());

// notacion de corchetes
const modeloString= "modelo"
console.log(celular["marca"]);
console.log(celular[modeloString]);

//asignacion de valores con dos puntos o con corchetes
const gigas = 128;
celular.almacenamiento = gigas;
/* celular["Almacenamiento"] = gigas */

// eliminar propiedades: con la palabra clave delete
// delete celular.marca

//SPREAD OPERATOR: son los famosos tres puntitos. [...]
const generoPelicula = {
   nombreGenero: "Accion",
   puesto : 1,
   onLine : true
}

const elGranPez = {
   titulo : "El Gran Pez",
   popularidad :10,
   ...generoPelicula // copio todo lo que esta dentro de "generoPelicula" dentro del objeto
}

console.log(elGranPez);
console.log(elGranPez.nombreGenero);

// DESTRUCTURACION

console.log("copiar sin destruccion");
let nombre = elGranPez.titulo;
console.log(nombre);

console.log("copiar con destruccion");
let {titulo,popularidad}  = elGranPez;

console.log("guardar en otra variable el titulo con dos puntos");
let {titulo:nombrePeli}  = elGranPez;
console.log(nombrePeli);


// SPREAD OPERATOR EN ARRAYS

let boxeo = ["Locche", "Acuña","Ballas","Martinez", "Oliveras"];
let boxeo2 = ["Carrera","Bonavena", "Marcos","Boop"];

let boxoTotal = [...boxeo,...boxeo2];
console.log(boxoTotal);


// destructuracion en arrays: el valor "Locche" se asigna a la variable "nicolino"
// el valor "Acuña" se lo asignamos a "marcela"
let [nicolino,marcela] = boxeo
console.log(nicolino);