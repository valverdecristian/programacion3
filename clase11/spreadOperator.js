// 38 - SPREAD OPERATOR, REST PARAMETER

// SPREAD OPERATOR
// Este operador permite expandir cada uno de los datos de un elemento iterable dentro de otro elemento.

// Uso y sintaxis: ...variable
// El operador de propagación se puede usar sobre cualquier elemento iterable. Nos sirve para copiar y mover datos de un lugar a otro de una forma eficaz.

// SPREAD EN ARRAYS
// Implementando este operador, podemos copiar todos los datos de un array en un array nuevo.
let clubesUno = ["Boca", "River", "Racing"];
let clubesDos = ["San Lorenzo", "Lanus", "Gimnasia"];
let todosLosClubes = [...clubesUno, ...clubesDos];

console.log(todosLosClubes);

// También se puede agregar los datos de un array dentro de un array existente.
let parte = [ 'los ', 'cumplas ' ] ;
let oracion = [ 'Que ', ...parte, 'feliz' ] ;

console.log(oracion); // Que los cumplas feliz.

// SPREAD Y FUNCIONES
// Implementando este operador, podemos pasarle a una función un array como argumento.
// El operador '...' se encargara de expandir los datos para que loa función los tome como argumentos separados.

let notas = [9.3 , 8.5 , 3.2 , 7 , 10] ;
console.log(Math.min(...notas));

// REST PARAMETER
// Utilizado como último parámetro de una función nos permite capturar cada uno de los elementos adicionales pasados a esa función.
// El parametro rest se escribe de la misma manera que el operador spread ...
// La diferencia es que se utiliza durante la defincion de la funcion y no durante su ejecucion.
// el parametro rest generará un array con todos los argumentos adicionales que se le pasen a la funcion.
// Recoge esos parametros adicionales en una sola variable de tipo array.
// usar el operador ... antes del ultimo parametro

function sumar(...numeros) {
    return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
    // el 0 es el valor inicial de la sumatoria, al igual que un 1 en una multiplicacion, para evitar fallas.
  }

console.log(sumar(1, 2, 3, 4));  // 10
console.log(sumar(10, 20));      // 30

// otro ejemplo:
function encontrarMaximo(...numeros) {
    return Math.max(...numeros);  // Usamos Math.max y también el spread operator para expandir los valores
  }
  
  console.log(encontrarMaximo(5, 10, 15, 3, 8));  // 15
  console.log(encontrarMaximo(23, 45, 67));       // 67
  