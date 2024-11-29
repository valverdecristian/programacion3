"use strict";
// DATOS PRIMITIVOS: string, number, boolean, undefined y null
// DATOS COMPUESTOS ESTRUCTURADO: Object, array y function
// DEFINIDOS POR USUARIO: class, interface y type
// PARA MANEJAR CONSTANTES: enum
// --------------------------------------------------------------------
// STRING
// comillas dobles y comillas simples
// Template literals (backticks) [facilita la interpolacion de variables y el manejo de texto multilineal]
const nombre = 'Cristian';
const edad = 30;
const str1 = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
// BOLEANOS
let estudiasteJS = false;
if (estudiasteJS) {
    console.log('hola');
}
else {
    console.log('chau');
}
// NUMEROS
let interMiami = 11;
let fcDallas = 11;
const exponencial = 2.5e3; // 2.5 * 10*3 = 2500
const hexadecimal = 0xA; // valor decimal = 10
const binario = 0b1010; // valor decimal = 10
const millon = 1000000; // Más legible
function jugar(e1, e2) {
    if (e1 > e2)
        console.log('Gana Inter Miami');
    else if (e1 < e2)
        console.log('Gana FC Dallas');
    else if (e1 == e2)
        console.log('Empatan');
}
jugar(interMiami, fcDallas);
// UNDEFINED & NULL
// declaracion de una variable con valor undefined o null
let variableUndefined;
let variableNull;
// asignacion de valor
variableUndefined = undefined;
variableNull = null;
// OBJETO
// para el tipado de un objeto necesitamos una interface [tambien se puede usar un type]
// sintaxis para implementar una interface -> variable: interface = {...}
const persona = {
    nombre: "Cristian",
    apellido: "Valverde",
    edad: 30,
    estudiante: true,
    vacaciones: undefined
};
// ARRAYS (no olvidar los corchetes en el tipo)
const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [1, 2, 3, 4, 5];
const nombres = ["Juan", "Matias", "Pedro"];
const valoresBool = [true, false, true];
// ENUM: por defecto son de tipo numerico
var Semana;
(function (Semana) {
    Semana[Semana["lunes"] = 0] = "lunes";
    Semana[Semana["martes"] = 1] = "martes";
    Semana[Semana["miercoles"] = 2] = "miercoles";
    Semana[Semana["jueves"] = 3] = "jueves";
    Semana[Semana["viernes"] = 4] = "viernes";
})(Semana || (Semana = {}));
// pueden tener valores de cadenas (string Enums)
var FinDeSemana;
(function (FinDeSemana) {
    FinDeSemana["viernes"] = "viernes";
    FinDeSemana["sabado"] = "sabado";
    FinDeSemana["domingo"] = "domingo";
})(FinDeSemana || (FinDeSemana = {}));
// FUNCIONES
// Declaracion de funcion con tipado explicito:
// se debe especificar que tipo de dato va a devolver
function sumar(a, b) {
    return a + b;
}
// manejar errores con condiciones logicas
// se especifica que puede devolver dos tipos de datos
function dividir(a, b) {
    return b === 0 ? "No se puede dividir" : a / b;
}
// funcion flecha con retorno implicito (inferido por typescript)
const restar = (a, b) => a - b;
// Con parametros opcionales (se agrega un signo de pregunta)
function saludar(nombre, edad) {
    if (edad != undefined) {
        return `Hola, soy ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, soy ${nombre}`;
    }
}
// Con parametros por defecto: le asigno un valor a ese parametro.
// con tipos genericos
function identidad(valor) {
    return valor;
}
console.log(identidad("Hola")); // "Hola"
console.log(identidad(42)); // 42
// CLASES
// puede implementar multiples interfaces
// tambien se puede inicializar valores por defecto
class Persona {
    constructor(nombre, edad = 30) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${edad}`);
    }
}
// uso de la clase
const persona1 = new Persona("Pedro", 24);
persona1.saludar();
// tambien se puede usar con propiedades opcionales, para funciones y para clases.
// tipado de union: una variable, parametro o valor puede pertenecer a uno de varios tipos especificos.
// ANY: no le especificamos el tipo. Se recomienda no usarlo
let disney;
disney = 'Star Wars';
// como alternativa de ANY usar UNKNOWN, ya que obliga a hacer comprobaciones de tipo
let valor = "Hola";
if (typeof valor === "string") {
    console.log(valor.toUpperCase());
}
