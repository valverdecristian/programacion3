"use strict";
class Pelicula {
    // constructor (sobrescribe los datos por defecto de la clase)
    // this -> para referirse a los atributos inicializados.
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    // metodo
    proyectarEnCine() {
        console.log(`${this.nombre} está siendo proyectada`);
    }
}
// instanciamos Pelicula
const pelicula1 = new Pelicula("The Joker 2", ["Arthur Fleck", "Lee Quinzel"], ["Joaquin Phoenix", "Lady Gaga"]);
pelicula1.proyectarEnCine();
console.log(pelicula1);
// CLASES GENERICAS
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    // encapsulamiento con getter y setter
    setTicket(numero) {
        this.ticket = numero;
    }
    getTicket() {
        return this.ticket;
    }
    // metodo publico para poder ser llamado desde afuera
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
// instancio un Sorteo
let sorteo = new Sorteo('Cristian');
sorteo.setTicket(7);
console.log(sorteo.sortear());
