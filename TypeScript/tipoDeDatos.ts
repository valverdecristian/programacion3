// DATOS PRIMITIVOS: string, number, boolean, undefined y null
// DATOS COMPUESTOS ESTRUCTURADO: Object, array y function
// DEFINIDOS POR USUARIO: class, interface y type
// PARA MANEJAR CONSTANTES: enum

// --------------------------------------------------------------------
// STRING
// comillas dobles y comillas simples
// Template literals (backticks) [facilita la interpolacion de variables y el manejo de texto multilineal]
const nombre: string = 'Cristian';
const edad: number = 30;

const str1: string = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;


// BOLEANOS
let estudiasteJS: boolean = false;

if (estudiasteJS) {
    console.log('hola');

} else {
    console.log('chau');
}


// NUMEROS
let interMiami: number = 11
let fcDallas: number = 11
const exponencial: number = 2.5e3; // 2.5 * 10*3 = 2500
const hexadecimal: number = 0xA; // valor decimal = 10
const binario: number = 0b1010; // valor decimal = 10
const millon: number = 1_000_000; // Más legible

function jugar(e1: number, e2: number): void {
    if (e1 > e2) console.log('Gana Inter Miami');
    else if (e1 < e2) console.log('Gana FC Dallas');
    else if (e1 == e2) console.log('Empatan');

}

jugar(interMiami, fcDallas)


// UNDEFINED & NULL
// declaracion de una variable con valor undefined o null
let variableUndefined: undefined;
let variableNull: null;
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
}


// ARRAYS (no olvidar los corchetes en el tipo)
const numeros1: number[] = [1, 2, 3, 4, 5];
const numeros2: Array<number> = [1, 2, 3, 4, 5];
const nombres: string[] = ["Juan", "Matias", "Pedro"];
const valoresBool: boolean[] = [true, false, true];


// ENUM: por defecto son de tipo numerico
enum Semana {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes
}

// pueden tener valores de cadenas (string Enums)
enum FinDeSemana {
    viernes = "viernes",
    sabado = "sabado",
    domingo = "domingo"
}


// FUNCIONES
// Declaracion de funcion con tipado explicito:
// se debe especificar que tipo de dato va a devolver
function sumar(a: number, b: number): number {
    return a + b;
}

// manejar errores con condiciones logicas
// se especifica que puede devolver dos tipos de datos
function dividir(a: number, b: number): number | string {
    return b === 0 ? "No se puede dividir" : a / b;
}

// funcion flecha con retorno implicito (inferido por typescript)
const restar = (a: number, b: number) => a - b;

// Con parametros opcionales (se agrega un signo de pregunta)
function saludar(nombre: string, edad?: number): string {
    if (edad != undefined) {
        return `Hola, soy ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, soy ${nombre}`;
    }
}

// Con parametros por defecto: le asigno un valor a ese parametro.

// con tipos genericos
function identidad<T>(valor: T): T {
    return valor;
}
console.log(identidad<string>("Hola")); // "Hola"
console.log(identidad<number>(42)); // 42


// CLASES
// puede implementar multiples interfaces
// tambien se puede inicializar valores por defecto
class Persona implements Persona2 {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number = 30) {
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


// INTERFACES
// las interfaces no se incluyen en el archivo js generado.

// basica:
interface Persona1 {
    nombre: string;
    edad: number;
}

// interface con propiedades opcionales (se agrega un signo de pregunta):
interface Producto {
    nombre: string;
    precio: number;
    descripcion?: string;
}

// interface para funciones:
interface Comprador {
    (a: number, b: number): boolean;
}

// para clases (class interfaces)
interface Persona2 {
    nombre: string;
    edad: number;
    saludar(): void;
}


// TYPE: asignamos nuestro propio tipado

// type basico:
type Numero = number;

type TPersona = {
    nombre: string;
    edad: number;
}

type Nombre = string | null; // tipado de union
// tambien se puede usar con propiedades opcionales, para funciones y para clases.
// tipado de union: una variable, parametro o valor puede pertenecer a uno de varios tipos especificos.


// ANY: no le especificamos el tipo. Se recomienda no usarlo
let disney;
disney = 'Star Wars';

// como alternativa de ANY usar UNKNOWN, ya que obliga a hacer comprobaciones de tipo
let valor: unknown = "Hola";
if (typeof valor === "string") {
    console.log(valor.toUpperCase());
}