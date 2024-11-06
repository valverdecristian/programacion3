// 37 - OBJETOS LITERALES
// >> estructura de objeto literal:
// Un objeto es una estructura de datos que puede contener propiedades y métodos.

let persona = {
   nombre : 'Cristian' ,
   apellido : 'Valverde',
   edad : 30 ,
   saludar : function() {
      return '¡Hola soy ' + this.nombre + '!' ;
      }
};

// Con la notación objeto.propiedad accedemos al valor de una se ellas.
console.log(persona.nombre)

// >> metodos de un objeto: una propiedad puede almacenar cualquier tipo de dato. Si una propiedad almacena una función, diremos que es un metodo del objeto.

// >> objeto.metodo()
console.log(persona.saludar() ) // ¡Hola soy Cristian!

// >> this.propiedad
// La palabra reservada this hace referencia al objeto en sí desde el cual estamos invocando la palabra. Con la notación this.propiedad accedemos al valor de cada propiedad interna de ese objeto.

// >> OBJETOS LITERALES

// CONSTRUIR UN OBJETO
// Construir un objeto, a través de una función constructora.
// Esta función nos permite armar un molde y luego crear todos los objetos que necesitemos.
// La función recibe un parámetro por cada propiedad que querramos asignarle al objeto.
// Con la notación this.propiedad definimos la propiedad del objeto, por lo general los valores de las propiedades serán los que vengan por parámetros.

function Auto(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
};

// >> instanciar un objeto:
// Se usa la palabra reservada new (que nos devuelve una instancia del objeto)
let miAuto = new Auto('Ford', 'Fiesta');

console.log(miAuto.marca);
console.log(miAuto.modelo);
