// DESTRUCTURING

// Nos permite extraer datos de arrays y objetos literales,
// no modifica el array u objeto literal de origen.
// Su unico objetivo es copiar los valores de una manera mas practica.

// --- sin usar DESTRUCTURING
// Para extraer datos de un array, es necesario crear una variable y
// asignarle un elemento del array usando el operador de indice
let colores = ["Rojo", "Azul", "Amarillo"];
let azul = colores[1];
console.log(azul);

// Para extraer datos de un objeto, es necesario crear una variable y
// asignarle una propiedad especifica de ese objeto.

let auto = {marca: "Ford", anio: 1998};
let marcaAuto = auto.marca;
console.log(marcaAuto);

// --- DESESTRUCTURANDO ARRAYS
// se parte de un array previamente definido y
// se transfiere cada dato a las variables definidas.
let coloresDos = ["Violeta", "Verde", "Naranja"];
let [violeta, verde, naranja] = coloresDos;
console.log(violeta);
console.log(verde);

// si queremos saltar un valor, dejamos vacio el nombre de la variable que corresponde con esa posicion.
let [color1, ,color3] = coloresDos;
console.log(color1);
console.log(color3);



// --- DESESTRUCTURANDO OBJETOS
// Para desestructurar un objeto literal, creamos una variable
// (podemos usar var, let, const), y entre llaves, declaramos el o los
// nombres de las propiedades que queremos extraer. A esa estructura
// la igualamos al objeto del cual queremos extraer datos.
// Las variables deben respetar la clave

let persona = {nombre: "Laura",apellido: "Valverde", edad: 31, faltas: 3};
let {nombre, edad} = persona;
console.log(nombre);
console.log(edad);

// en caso de necesitar cambiarle el nombre a la variable que estamos creando,
// se coloca dos puntos (:)
let {apellido, faltas:totalFaltas} = persona;
console.log(totalFaltas);
console.log(apellido);

