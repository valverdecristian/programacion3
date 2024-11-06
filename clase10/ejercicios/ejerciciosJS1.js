
// reemplaza `null` por la respuesta o el dato requerido

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Cristian";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 30;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === false;

function devolverString(str) {
  return str
}

let suma = (x, y) => x+y

function resta(x, y) {
  return x - y;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;

}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return y==0?"no se puede dividir por cero":x / y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else (podemos evitar if-else?)
  return x===y;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length
}

  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
const menosQueNoventa = num => num < 90;
const masQueCincuenta = num => num > 50;

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}

const esPar = num => num % 2 === 0;
const esImpar = num => !esPar(num);

const elevarAlCuadrado = num => Math.pow(num, 2);
const elevarAlCubo = num => Math.pow(num, 3);
const elevar = (num, exp) => Math.pow(num,exp);
const redondearNumero = num => Math.round(num);
const redondearHaciaArriba = num => Math.ceil(num);
const redondearHaciaAbajo = num => Math.floor(num);
const numeroRandom = Math.random();
const esPositivo = num => num == 0 ? false : num > 0 ? "Es positivo" : "Es negativo";
const agregarSimboloExclamacion = str => `${str}!`
const combinarNombres = (n,a) => `${n} ${a}`;
const obtenerSaludo = nombre => `Hola, ${nombre}!`;
const obtenerAreaRectangulo = (alto,ancho) => alto*ancho;
const retornarPerimetro = lado => lado * 4;
const areaDelTriangulo = (base,altura) => base * altura / 2;
const deEuroADolar = euro => euro * 1.2;

//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
//Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//si ingresa una consonante muestre en pantalla dato incorrecto
//Escribe tu código aquí

const esVocal = letra => {
  letra = letra.toLowerCase();
  return letra.length != 1 ? "Es mas de un caracter" :
  (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
  ? "Es vocal":"No es vocal";
}